import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class TaikoJolnir extends Chain {
  constructor() {
    super({
      name: 'Taiko Jolnir L2',
      alias: 'Taiko Jolnir L2',
      chainId: '0x28c5f',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/taiko-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/taiko-logo.svg',
      rpcs: ['wss://ws.jolnir.taiko.xyz', 'https://rpc.jolnir.taiko.xyz'],
      group: GroupChain.Taiko,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://ws.jolnir.taiko.xyz',
        https: 'https://rpc.jolnir.taiko.xyz',
      },
    })
  }
}
