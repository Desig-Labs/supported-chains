import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class TaikoKatla extends Chain {
  constructor() {
    super({
      name: 'Taiko Katla L2',
      alias: 'Taiko Katla L2',
      chainId: '0x28c60',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/taiko-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/taiko-logo.svg',
      rpcs: [
        'wss://rpc.katla.taiko.xyz',
        'https://taiko-katla.blockpi.network/v1/rpc/public',
      ],
      group: GroupChain.Taiko,
      getAddress: toEvmAddress,
      isMainnet: false,
      isAnkr: false,
      endpoint: {
        wss: 'wss://rpc.katla.taiko.xyz',
        https: 'https://taiko-katla.blockpi.network/v1/rpc/public',
      },
    })
  }
}
