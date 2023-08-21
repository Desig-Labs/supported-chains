import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class MoonBaseAlpha extends Chain {
  constructor() {
    super({
      name: 'Moonbase Alpha',
      alias: 'Moonbase Alpha',
      chainId: '0x507',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/moonbeam-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/moonbeam-logo.svg',
      rpcs: [
        'wss://wss.api.moonbase.moonbeam.network',
        'https://rpc.api.moonbase.moonbeam.network',
      ],
      group: GroupChain.Moonbeam,
      getAddress: toEvmAddress,
      isMainnet: false,
    })
  }
}
