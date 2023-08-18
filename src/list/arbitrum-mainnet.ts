import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class ArbitrumMainnet extends Chain {
  constructor() {
    super({
      name: 'Arbitrum Mainnet',
      alias: 'Arbitrum Mainnet',
      chainId: '0xa4b1',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/arb-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/arb-logo.svg',
      rpcs: ['https://arb1.arbitrum.io/rpc'],
      group: GroupChain.Arbitrum,
      getAddress: toEvmAddress,
    })
  }
}
