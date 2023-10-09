import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class TomoMainnet extends Chain {
  constructor() {
    super({
      name: 'TomoChain Mainnet',
      alias: 'TomoChain',
      chainId: '0x58',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/tomo-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/tomo-logo.svg',
      rpcs: ['wss://ws.tomochain.com', 'https://rpc.tomochain.com'],
      group: GroupChain.Tomo,
      getAddress: toEvmAddress,
      isMainnet: true,
    })
  }
}
