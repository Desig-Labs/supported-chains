import { Chain } from '../chain'
import { Curve } from '../curve'
import { toEvmAddress } from '../utils'

export class BscTestnet extends Chain {
  constructor() {
    super({
      name: 'Binance Smart Chain Testnet',
      alias: 'BSC Testnet',
      chainId: '0x61',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-logo.png',
      rpcs: [
        'wss://hardworking-multi-dawn.bsc-testnet.quiknode.pro/2b6e0a376b43cc4dd95f014ba53f22e5366408c8',
        'https://data-seed-prebsc-1-s1.binance.org:8545',
      ],
      group: 'binance',
      getAddress: toEvmAddress,
    })
  }
}
