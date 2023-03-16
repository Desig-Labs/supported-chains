import { Chain } from '../chain'
import { CryptoSys } from '../cryptosys'
import { toSolanaAddress } from '../utils'

export class SolanaMainnet extends Chain {
  constructor() {
    super({
      name: 'Solana Mainnet',
      alias: 'Solana',
      chainId: '0xbb6a83b4b049e',
      cryptosys: CryptoSys.EdDSA,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-icon.svg',
      rpcs: [
        'https://radial-billowing-gas.solana-mainnet.quiknode.pro/9d19e80c758eb5bd7b86d912e9345aa153db6a8f/',
        'https://api.mainnet-beta.solana.com',
      ],
      group: 'solana',
      getAddress: toSolanaAddress,
    })
  }
}
