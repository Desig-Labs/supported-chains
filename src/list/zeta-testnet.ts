import { Chain } from '../chain'
import { Curve } from '../curve'
import { toEvmAddress } from '../utils'

export class ZetaTestnet extends Chain {
  constructor() {
    super({
      name: 'ZetaChain Athens Testnet',
      alias: 'ZetaChain Testnet',
      chainId: '0x1b59',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/zeta-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/zeta-logo.png',
      rpcs: [
        'wss://api-lb.athens2.zetachain.com:26657/websocket',
        'https://api.athens2.zetachain.com/evm',
      ],
      group: 'zeta',
      getAddress: toEvmAddress,
    })
  }
}
