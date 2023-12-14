import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class ArbitrumTestnet extends Chain {
  constructor() {
    super({
      name: 'Arbitrum Testnet',
      alias: 'Arbitrum Testnet',
      chainId: '0x66eed',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/arb-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/arb-logo.svg',
      rpcs: ['', 'https://goerli-rollup.arbitrum.io/rpc'],
      group: GroupChain.Arbitrum,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        https: 'https://goerli-rollup.arbitrum.io/rpc',
      },
    })
  }
}
