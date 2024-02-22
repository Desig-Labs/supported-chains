import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
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
        'wss://rpc.ankr.com/bsc_testnet_chapel/ws',
        'https://rpc.ankr.com/bsc_testnet_chapel',
      ],
      group: GroupChain.Binance,
      getAddress: toEvmAddress,
      isMainnet: false,
      isAnkr: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/bsc_testnet_chapel/ws',
        https: 'https://rpc.ankr.com/bsc_testnet_chapel',
      },
    })
  }
}
