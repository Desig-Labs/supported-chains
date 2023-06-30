import { Chain } from '../chain'
import { Curve } from '../curve'
import { toEvmAddress } from '../utils'

export class HederaTestnet extends Chain {
  constructor() {
    super({
      name: 'Hedera Testnet',
      alias: 'Hedera Testnet',
      chainId: '0x128',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/hedera-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/hedera-logo.svg',
      rpcs: [
        'testnet.mirrornode.hedera.com:443',
        'https://testnet.hashio.io/api',
      ],
      group: 'hedera',
      getAddress: toEvmAddress,
    })
  }
}
