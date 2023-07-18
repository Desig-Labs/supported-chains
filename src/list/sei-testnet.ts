import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toSeiAddress } from '../utils'

export class SeiTestnet extends Chain {
  constructor() {
    super({
      name: 'Sei Testnet',
      alias: 'Sei Testnet',
      chainId: '0xb66e1ec8b2d65',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sei-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sei-logo.png',
      rpcs: ['https://rpc.atlantic-2.seinetwork.io'],
      group: GroupChain.Sei,
      getAddress: toSeiAddress,
    })
  }
}
