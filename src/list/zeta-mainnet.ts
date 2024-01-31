import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class ZetaMainnet extends Chain {
  constructor() {
    super({
      name: 'ZetaChain Mainnet',
      alias: 'ZetaChain',
      chainId: '0x1b58',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/zeta-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/zeta-logo.svg',
      rpcs: ['', 'https://zetachain-evm.blockpi.network/v1/rpc/public'],
      group: GroupChain.Zeta,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: {
        https: 'https://zetachain-evm.blockpi.network/v1/rpc/public',
        wss: '',
      },
    })
  }
}
