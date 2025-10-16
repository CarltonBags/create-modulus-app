#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name('create-modulus-app')
  .description('Create a new Modulus App')
  .argument('[project-name]', 'name of the project')
  .action(async (projectName) => {
    console.log(chalk.cyan('\n🩸🩸🩸 Welcome to Modulus App Creator!\n'));

    let answers = {};

    // Ask for project name if not provided
    if (!projectName) {
      const nameAnswer = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'What is your project name?',
          default: 'my-modulus-app',
          validate: (input) => {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
            return 'Project name may only include letters, numbers, underscores and hashes.';
          },
        },
      ]);
      projectName = nameAnswer.projectName;
    }

    // Ask for framework choice
    const frameworkAnswer = await inquirer.prompt([
      {
        type: 'list',
        name: 'framework',
        message: 'Which framework would you like to use?',
        choices: [
          { name: 'Vite + React', value: 'vite' },
          { name: 'Next.js', value: 'nextjs' },
        ],
      },
    ]);

    answers = { ...answers, ...frameworkAnswer };

    // Ask for Reown Project ID
    console.log(chalk.cyan('\n🔑 Reown AppKit Setup'));
    console.log(chalk.gray('Get your free Project ID at https://cloud.reown.com'));
    console.log(chalk.yellow('Note: Demo ID has limitations. Use a real ID for production!\n'));
    
    const reownAnswer = await inquirer.prompt([
      {
        type: 'input',
        name: 'reownProjectId',
        message: 'Enter your Reown Project ID:',
        default: 'demo-modulus-project-id',
        validate: (input) => {
          if (!input || input.trim() === '') {
            return 'Project ID is required';
          }
          return true;
        },
      },
    ]);

    answers = { ...answers, ...reownAnswer };

    // Create project
    const projectPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
      console.log(chalk.red(`\n❌ Directory ${projectName} already exists!`));
      process.exit(1);
    }

    const spinner = ora('Creating your Modulus dApp...').start();

    try {
      // Create project directory
      fs.mkdirSync(projectPath);

      // Copy template files
      const templatePath = path.join(__dirname, '..', 'templates', answers.framework);
      fs.copySync(templatePath, projectPath);

      // Update package.json with project name
      const packageJsonPath = path.join(projectPath, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      packageJson.name = projectName;
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

      // Create .env file with user's Reown Project ID
      const envVar = answers.framework === 'vite' 
        ? 'VITE_REOWN_PROJECT_ID' 
        : 'NEXT_PUBLIC_REOWN_PROJECT_ID';
      const envContent = `# Reown AppKit Project ID
# Get yours at https://cloud.reown.com
${envVar}=${answers.reownProjectId}
`;
      // Vite uses .env, Next.js uses .env.local (never .env.example)
      const envFile = answers.framework === 'nextjs' ? '.env.local' : '.env';
      fs.writeFileSync(path.join(projectPath, envFile), envContent);
      
      // Remove any .env.example.env or similar artifacts
      const envExamplePath = path.join(projectPath, '.env.example');
      if (answers.framework === 'nextjs' && fs.existsSync(path.join(projectPath, '.env'))) {
        fs.removeSync(path.join(projectPath, '.env')); // Remove .env for Next.js (uses .env.local)
      }

      spinner.succeed(chalk.green('Project created successfully!'));

      // Install dependencies
      spinner.start('Installing dependencies...');
      
      process.chdir(projectPath);
      execSync('npm install', { stdio: 'inherit' });

      spinner.succeed(chalk.green('Dependencies installed!'));

      console.log(chalk.cyan('\n✨ Your Modulus dApp is ready!\n'));
      console.log(chalk.white('To get started:\n'));
      console.log(chalk.yellow(`  cd ${projectName}`));
      
      if (answers.framework === 'vite') {
        console.log(chalk.yellow('  npm run dev'));
      } else {
        console.log(chalk.yellow('  npm run dev'));
      }

      console.log(chalk.white('\n🚀 Buidl on the Revolution!\n'));
    } catch (error) {
      spinner.fail(chalk.red('Failed to create project'));
      console.error(error);
      process.exit(1);
    }
  });

program.parse();

