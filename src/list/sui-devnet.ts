import { Chain } from '../chain'
import { Curve } from '../curve'
import { toSuiAddress } from '../utils'

export class SuiDevnet extends Chain {
  constructor() {
    super({
      name: 'Sui Devnet',
      alias: 'Sui Devnet',
      chainId: '0x5613adbe82509',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-icon.png',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-logo.svg',
      rpcs: ['https://fullnode.devnet.sui.io'],
      group: 'sui',
      getAddress: toSuiAddress,
    })
  }
}
