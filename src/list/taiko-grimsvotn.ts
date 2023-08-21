import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class TaikoGrimsvotn extends Chain {
  constructor() {
    super({
      name: 'Taiko Grimsvotn L2',
      alias: 'Taiko Grimsvotn L2',
      chainId: '0x28c5d',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-logo.png',
      rpcs: ['wss://ws.test.taiko.xyz', 'https://rpc.test.taiko.xyz'],
      group: GroupChain.Taiko,
      getAddress: toEvmAddress,
      isMainnet: false,
    })
  }
}
