import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toSuiAddress } from '../utils'

export class SuiTestnet extends Chain {
  constructor() {
    super({
      name: 'Sui Testnet',
      alias: 'Sui Testnet',
      chainId: '0x1e157a4655b689',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-logo.svg',
      rpcs: [
        'https://rpc.ankr.com/sui_testnet/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      ],
      group: GroupChain.Sui,
      getAddress: toSuiAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://rpc.ankr.com/sui_testnet/ws/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        https:
          'https://rpc.ankr.com/sui_testnet/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      },
    })
  }
}
