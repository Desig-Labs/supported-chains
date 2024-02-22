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
      rpcs: ['https://rpc.ankr.com/sui_testnet'],
      group: GroupChain.Sui,
      getAddress: toSuiAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://rpc.ankr.com/sui_testnet/ws',
        https: 'https://rpc.ankr.com/sui_testnet',
      },
    })
  }
}
