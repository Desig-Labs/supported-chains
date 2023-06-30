import { Chain } from '../chain'
import { Curve } from '../curve'
import { toEvmAddress } from '../utils'

export class HederaPreviewnet extends Chain {
  constructor() {
    super({
      name: 'Hedera Previewnet',
      alias: 'Hedera Previewnet',
      chainId: '0x129',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/hedera-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/hedera-logo.svg',
      rpcs: [
        'previewnet.mirrornode.hedera.com:443',
        'https://previewnet.hashio.io/api',
      ],
      group: 'hedera',
      getAddress: toEvmAddress,
    })
  }
}
