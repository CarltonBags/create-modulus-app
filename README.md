# create-modulus-app

🔷 Create Modulus dApps with one command - just like Create React App!

Build decentralized applications on Modulus Testnet with your choice of Vite or Next.js, complete with TypeScript, Tailwind CSS, and Reown AppKit integration.

## Quick Start

```bash
npx create-modulus-app my-app
```

Or with npm 6+:

```bash
npm init modulus-app my-app
```

The CLI will guide you through:
1. **Project name** - Name your dApp
2. **Framework** - Choose Vite or Next.js
3. **Reown Project ID** - Enter your ID or use demo (get one free at [cloud.reown.com](https://cloud.reown.com))

That's it! Your app is ready with everything configured! 🎉

## What's Included?

- ✅ **Framework Choice**: Vite + React or Next.js 14
- ✅ **TypeScript**: Full type safety out of the box
- ✅ **Reown AppKit**: Easy wallet connection (WalletConnect v2)
- ✅ **Tailwind CSS**: Beautiful, responsive styling
- ✅ **Modulus Testnet**: Pre-configured custom chain
- ✅ **Environment Variables**: dotenv setup with examples
- ✅ **Beautiful UI**: Gradient design with "Buidl on the Revolution" branding

## Features

Your bootstrapped app includes:
- 🌑 Black themed website
- 🔗 Wallet connect button
- 👛 Connected address display
- ⚡ Modern, responsive UI
- 🎨 Gradient styling

## Modulus Testnet Details

The SDK comes pre-configured with:

- **Name:** Modulus Testnet
- **Chain ID:** 6666
- **RPC URL:** https://rpc.moduluszk.io
- **Block Explorer:** https://eye.moduluszk.io
- **Symbol:** MOD

## Development

After creating your app:

```bash
cd my-app

# Dependencies are already installed!
# .env file is already created!

# Just start developing
npm run dev
```

### The `.env.example` File

Templates include `.env.example` as documentation showing:
- What environment variables are needed
- Where to get values (links to services)
- Example format

**You don't need to manually copy it!** The CLI automatically creates your `.env` file with your Project ID during setup.

## Publishing to npm

If you want to publish this package or customize it:

### First Time Setup

1. **Create an npm account**: Visit [npmjs.com](https://www.npmjs.com/) and sign up

2. **Login to npm via CLI**:
   ```bash
   npm login
   ```

3. **Update package.json**: Change the package name if needed (must be unique on npm)

### Publishing Steps

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Test the CLI locally**:
   ```bash
   npm link
   create-modulus-app test-app
   ```

3. **Update version** (if republishing):
   ```bash
   npm version patch  # for bug fixes
   npm version minor  # for new features
   npm version major  # for breaking changes
   ```

4. **Publish to npm**:
   ```bash
   npm publish
   ```

   If the package name is not taken, it will be published. If it's scoped, use:
   ```bash
   npm publish --access public
   ```

### Publishing Checklist

- [ ] All dependencies are in the correct package.json files
- [ ] CLI tool has executable permissions (`chmod +x cli/index.js`)
- [ ] Templates are tested and working
- [ ] README is comprehensive
- [ ] .gitignore includes node_modules and test directories
- [ ] Version number is updated
- [ ] npm login is successful

### Testing Before Publishing

Always test your package locally before publishing:

```bash
# Link the package locally
npm link

# Create a test app
create-modulus-app test-app

# Test the app
cd test-app
npm install
npm run dev

# Clean up
cd ..
rm -rf test-app
npm unlink create-modulus-app
```

## Project Structure

```
create-modulus-app/
├── cli/
│   └── index.js           # CLI entry point
├── templates/
│   ├── vite/             # Vite + React template
│   │   ├── src/
│   │   │   ├── App.tsx
│   │   │   ├── main.tsx
│   │   │   └── config/
│   │   │       └── wagmi.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts
│   │   └── tailwind.config.js
│   └── nextjs/           # Next.js template
│       ├── app/
│       │   ├── page.tsx
│       │   ├── layout.tsx
│       │   └── providers.tsx
│       ├── config/
│       │   └── wagmi.ts
│       ├── package.json
│       ├── tsconfig.json
│       ├── next.config.js
│       └── tailwind.config.ts
├── package.json
└── README.md
```

## Customization

You can customize the templates by editing files in the `templates/` directory:

- **Styling**: Edit Tailwind config or CSS files
- **Chain Config**: Modify `config/wagmi.ts` in each template
- **UI Components**: Update `App.tsx` (Vite) or `app/page.tsx` (Next.js)
- **Dependencies**: Add to respective `package.json` files

## Troubleshooting

### "REOWN_PROJECT_ID is not set"

Make sure you've:
1. Created a `.env` file (Vite) or `.env.local` (Next.js)
2. Added your Reown Project ID from [cloud.reown.com](https://cloud.reown.com)

### Wallet not connecting

Ensure:
- Your Reown Project ID is valid
- You're using a Web3 wallet (MetaMask, Coinbase Wallet, etc.)
- The Modulus Testnet is added to your wallet

### CLI not found

If `npx create-modulus-app` doesn't work:
- Try `npm init modulus-app` instead
- Ensure you have Node.js 16+ installed
- Check your npm registry is set to npmjs.com

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## License

MIT © Modulus

---

## Support

- **Website**: https://moduluszk.io
- **Block Explorer**: https://eye.moduluszk.io
- **Documentation**: [Add your docs URL]

---

🚀 **Buidl on the Revolution!**

