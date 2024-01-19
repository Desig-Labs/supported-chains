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
        'wss://rpc.ankr.com/bsc_testnet_chapel/ws/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        'https://rpc.ankr.com/bsc_testnet_chapel/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      ],
      group: GroupChain.Binance,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://rpc.ankr.com/bsc_testnet_chapel/ws/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        https:
          'https://rpc.ankr.com/bsc_testnet_chapel/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      },
    })
  }
}
