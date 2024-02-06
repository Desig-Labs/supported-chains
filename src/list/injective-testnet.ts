import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toInjAddress } from '../utils'

export class InjectiveTestnet extends Chain {
  constructor() {
    super({
      name: 'Injective Testnet',
      alias: 'Injective Testnet',
      chainId: '0xd49780436dc91',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/injective-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/injective-logo.png',
      rpcs: ['https://testnet.sentry.tm.injective.network:443'],
      group: GroupChain.Injective,
      getAddress: toInjAddress,
      isMainnet: false,
      endpoint: {
        https: 'https://testnet.sentry.tm.injective.network:443',
        wss: '',
      },
    })
  }
}
