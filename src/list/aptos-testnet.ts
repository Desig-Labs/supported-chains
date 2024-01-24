import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toAptosAddress } from '../utils'

export class AptosTestnet extends Chain {
  constructor() {
    super({
      name: 'Aptos Testnet',
      alias: 'Aptos Testnet',
      chainId: '0x98a2cc14e0838',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/apt-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/apt-logo.png',
      rpcs: [
        'https://rpc.ankr.com/premium-http/aptos_testnet/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f/v1',
      ],
      group: GroupChain.Aptos,
      getAddress: toAptosAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://rpc.ankr.com/http/aptos_testnet/v1/ws/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        https:
          'https://rpc.ankr.com/http/aptos_testnet/v1/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      },
    })
  }
}
