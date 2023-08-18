import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class TaikoEldfell extends Chain {
  constructor() {
    super({
      name: 'Taiko Eldfell L3',
      alias: 'Taiko Eldfell L3',
      chainId: '0x28c5e',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/taiko-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/taiko-logo.svg',
      rpcs: ['https://rpc.l3test.taiko.xyz'],
      group: GroupChain.Taiko,
      getAddress: toEvmAddress,
    })
  }
}
