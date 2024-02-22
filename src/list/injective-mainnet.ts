import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toInjAddress } from '../utils'

export class InjectiveMainnet extends Chain {
  constructor() {
    super({
      name: 'Injective',
      alias: 'Injective',
      chainId: '0x63f93d0f947be',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/injective-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/injective-logo.png',
      group: GroupChain.Injective,
      getAddress: toInjAddress,
      isMainnet: true,
      endpoint: {
        https: 'https://sentry.tm.injective.network:443',
        wss: '',
      },
    })
  }
}
