import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toSuiAddress } from '../utils'

export class SuiDevnet extends Chain {
  constructor() {
    super({
      name: 'Sui Devnet',
      alias: 'Sui Devnet',
      chainId: '0x5613adbe82509',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-logo.svg',
      group: GroupChain.Sui,
      getAddress: toSuiAddress,
      isMainnet: false,
      endpoint: {
        https: 'https://fullnode.devnet.sui.io',
        wss: '',
      },
    })
  }
}
