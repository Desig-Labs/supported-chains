import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class BeraTestnet extends Chain {
  constructor() {
    super({
      name: 'Bera Testnet',
      alias: 'Berachain bArtio',
      chainId: '0x138d4',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bera-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bera-logo.png',
      group: GroupChain.Bera,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        https: 'https://bartio.rpc.berachain.com',
      },
    })
  }
}
