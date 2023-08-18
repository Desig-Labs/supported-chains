import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toCosmosAddress } from '../utils'

export class SeiMainnet extends Chain {
  constructor() {
    super({
      name: 'Sei Mainnet',
      alias: 'Sei Mainnet',
      chainId: '0x24a5164fcc04',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sei-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sei-logo.png',
      rpcs: ['https://sei-rpc.polkachu.com/'],
      group: GroupChain.Sei,
      getAddress: (pubkey) => toCosmosAddress(pubkey, 'sei'),
    })
  }
}
