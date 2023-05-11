import { Chain } from '../chain'
import { Curve } from '../curve'
import { toSuiAddress } from '../utils'

export class SuiMainnet extends Chain {
  constructor() {
    super({
      name: 'Sui Mainnet',
      alias: 'Sui',
      chainId: '0xb0ae19bc39993',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-icon.png',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-logo.svg',
      rpcs: ['https://rpc.mainnet.sui.io'],
      group: 'sui',
      getAddress: toSuiAddress,
    })
  }
}
