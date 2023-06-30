import { Chain } from '../chain'
import { Curve } from '../curve'
import { toEvmAddress } from '../utils'

export class ZetaTestnet extends Chain {
  constructor() {
    super({
      name: 'ZetaChain Athens Testnet',
      alias: 'ZetaChain Athens2 Testnet',
      chainId: '0x1b59',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/zeta-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/zeta-logo.svg',
      rpcs: [
        'wss://rpc.ankr.com/zetachain_evm_testnet/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        'https://api.athens2.zetachain.com/evm',
      ],
      group: 'zeta',
      getAddress: toEvmAddress,
    })
  }
}
