import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toCosmosAddress } from '../utils'

export class SeiMainnet extends Chain {
  constructor() {
    super({
      name: 'Sei',
      alias: 'Sei',
      chainId: '0x24a5164fcc04',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sei-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sei-logo.png',
      rpcs: ['https://rpc.ankr.com/sei'],
      group: GroupChain.Sei,
      getAddress: (pubkey) => toCosmosAddress(pubkey, 'sei'),
      isMainnet: true,
      isAnkr: true,
      endpoint: {
        https: 'https://rpc.ankr.com/sei',
        wss: 'wss://rpc.ankr.com/sei/ws',
      },
    })
  }
}
