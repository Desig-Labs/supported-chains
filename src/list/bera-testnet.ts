import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class BeraTestnet extends Chain {
  constructor() {
    super({
      name: 'Bera Testnet',
      alias: 'Bera Testnet',
      chainId: '0x138d5',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bera-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bera-logo.png',
      rpcs: ['', 'https://rpc.ankr.com/berachain_testnet'],
      group: GroupChain.Bera,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        https: 'https://rpc.ankr.com/berachain_testnet',
        wss: '',
      },
    })
  }
}
