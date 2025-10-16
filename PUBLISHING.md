# Publishing Guide for create-modulus-app

This guide will walk you through the process of publishing `create-modulus-app` to npm.

## Prerequisites

1. **Node.js 16+** installed
2. **npm account** - Create one at [npmjs.com](https://www.npmjs.com/)
3. **npm CLI** logged in

## Step-by-Step Publishing Process

### 1. Initial Setup (First Time Only)

```bash
# Create npm account if you don't have one
# Visit https://www.npmjs.com/signup

# Login to npm via CLI
npm login

# You'll be prompted for:
# - Username
# - Password  
# - Email
# - 2FA code (if enabled)
```

### 2. Prepare Your Package

```bash
# Navigate to your project
cd "/Users/carltonbags/Desktop/Modulus SDK"

# Install dependencies
npm install

# Make CLI executable
chmod +x cli/index.js
```

### 3. Test Locally Before Publishing

```bash
# Link the package globally
npm link

# Test creating an app
create-modulus-app test-vite-app
# Select Vite when prompted

# Test the Vite app
cd test-vite-app
npm install
# Create .env file with your Reown Project ID
echo "VITE_REOWN_PROJECT_ID=your_project_id" > .env
npm run dev
# Visit http://localhost:5173 and test

# Clean up and test Next.js
cd ..
rm -rf test-vite-app

create-modulus-app test-nextjs-app
# Select Next.js when prompted

# Test the Next.js app
cd test-nextjs-app
npm install
# Create .env.local file with your Reown Project ID
echo "NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id" > .env.local
npm run dev
# Visit http://localhost:3000 and test

# Clean up
cd ..
rm -rf test-nextjs-app

# Unlink when done testing
npm unlink -g create-modulus-app
```

### 4. Pre-Publishing Checklist

Before publishing, verify:

- [ ] All files are in the correct locations
- [ ] Templates have all necessary dependencies
- [ ] CLI script has proper shebang (`#!/usr/bin/env node`)
- [ ] package.json has correct bin configuration
- [ ] README.md is comprehensive
- [ ] LICENSE file exists
- [ ] .gitignore includes node_modules and test directories
- [ ] Both templates tested and working
- [ ] Version number is correct

### 5. Publish to npm

```bash
# Navigate to project root
cd "/Users/carltonbags/Desktop/Modulus SDK"

# First publication
npm publish

# If you get an error about package name taken, you have two options:

# Option 1: Use a scoped package
# Update package.json name to "@your-username/create-modulus-app"
npm publish --access public

# Option 2: Choose a different name
# Update package.json name to "create-modulus-dapp" or similar
npm publish
```

### 6. Verify Publication

After publishing:

```bash
# Unlink local version if you had it linked
npm unlink -g create-modulus-app

# Install from npm
npx create-modulus-app verify-app

# Test that it works
cd verify-app
npm install
npm run dev
```

## Updating Your Package

When you need to publish an update:

```bash
# 1. Make your changes

# 2. Update version
npm version patch  # 1.0.0 -> 1.0.1 (bug fixes)
npm version minor  # 1.0.0 -> 1.1.0 (new features)
npm version major  # 1.0.0 -> 2.0.0 (breaking changes)

# 3. Publish
npm publish
```

## Package Naming Strategy

### If "create-modulus-app" is taken:

1. **Scoped package**: `@modulus/create-app`
   ```json
   {
     "name": "@modulus/create-app"
   }
   ```
   Usage: `npm init @modulus/app my-app`

2. **Alternative names**:
   - `create-modulus-dapp`
   - `modulus-create-app`
   - `@your-org/create-modulus-app`

## Common Issues & Solutions

### Issue: "You do not have permission to publish"

**Solution**: The package name is taken. Use a scoped package or different name.

### Issue: "Must be logged in to publish"

**Solution**: 
```bash
npm logout
npm login
```

### Issue: CLI not working after install

**Solution**: Ensure `cli/index.js` has:
- Shebang at top: `#!/usr/bin/env node`
- Executable permissions: `chmod +x cli/index.js`

### Issue: Templates not copying

**Solution**: Verify templates directory structure matches what's referenced in `cli/index.js`

## Distribution Checklist

After successful publication:

- [ ] Test installation: `npx create-modulus-app test-app`
- [ ] Verify both templates work
- [ ] Check npm package page looks correct
- [ ] Update any documentation with correct package name
- [ ] Announce to your community
- [ ] Consider adding npm badge to README

## npm Package Page

After publishing, your package will be available at:
`https://www.npmjs.com/package/create-modulus-app`

It will show:
- Installation instructions
- README
- Version history
- Weekly downloads
- Dependencies

## Maintenance

### Best Practices

1. **Semantic Versioning**: Use proper version numbers
2. **Changelog**: Keep a CHANGELOG.md file
3. **Security**: Regularly update dependencies
4. **Testing**: Test before each release
5. **Documentation**: Keep README up-to-date

### Regular Updates

```bash
# Check for outdated dependencies
npm outdated

# Update dependencies
npm update

# For major updates, update manually in package.json
```

## Support & Promotion

After publishing:

1. **Add npm badge to README**:
   ```markdown
   ![npm](https://img.shields.io/npm/v/create-modulus-app)
   ![npm](https://img.shields.io/npm/dm/create-modulus-app)
   ```

2. **Share on social media**:
   - Twitter/X
   - Discord
   - Reddit (r/web3, r/cryptocurrency)
   - Dev.to

3. **Create documentation site** (optional):
   - GitHub Pages
   - Vercel
   - Netlify

## Troubleshooting

### Debug mode

Test with verbose logging:
```bash
DEBUG=* npx create-modulus-app test-app
```

### Check package contents

Before publishing, see what will be included:
```bash
npm pack --dry-run
```

### Validate package.json

```bash
npm install -g validate-package-name
validate-package-name create-modulus-app
```

---

## Quick Reference

```bash
# First time
npm login
npm publish

# Updates
npm version patch/minor/major
npm publish

# Test locally
npm link
create-modulus-app test-app
npm unlink -g create-modulus-app

# Verify publication
npx create-modulus-app@latest test-app
```

Good luck with your publication! 🚀

