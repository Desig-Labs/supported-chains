import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toSuiAddress } from '../utils'

export class SuiMainnet extends Chain {
  constructor() {
    super({
      name: 'Sui Mainnet',
      alias: 'Sui',
      chainId: '0xb0ae19bc39993',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-logo.svg',
      rpcs: ['https://rpc.ankr.com/sui'],
      group: GroupChain.Sui,
      getAddress: toSuiAddress,
      isMainnet: true,
      isAnkr: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/sui/ws',
        https: 'https://rpc.ankr.com/sui',
      },
    })
  }
}
