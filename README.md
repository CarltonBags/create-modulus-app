# create-modulus-app

🔷 Create Modulus dApps with one command - just like Create React App!

Build decentralized applications on Modulus Testnet with your choice of Vite or Next.js, complete with TypeScript, Tailwind CSS, and Reown AppKit integration.

## Quick Start

```bash
npx create-modulus-app my-app
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

## Features

Your bootstrapped app includes:
- 🔴 Dark red gradient theme
- 🔗 One-click wallet connection
- 💰 Real-time CULT balance display
- 👛 Connected address display
- ⚡ Glassmorphism UI design
- 🎨 Revolutionary gradient styling
- 📱 Fully responsive

## Modulus Testnet Details

The SDK comes pre-configured with:

- **Name:** Modulus Testnet
- **Chain ID:** 6666
- **RPC URL:** https://rpc.moduluszk.io
- **Block Explorer:** https://eye.moduluszk.io
- **Symbol:** CULT

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

MIT © Carlton Bags

---

## Resources

- **Modulus Website**: https://moduluszk.io
- **Documentation**: https://docs.moduluszk.io
- **Block Explorer**: https://eye.moduluszk.io
- **Faucet**: https://faucet.moduluszk.io
- **GitHub**: https://github.com/CarltonBags/create-modulus-app

---

🚀 **Buidl on the Revolution!**

