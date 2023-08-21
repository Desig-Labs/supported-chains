import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class HederaMainnet extends Chain {
  constructor() {
    super({
      name: 'Hedera Mainnet',
      alias: 'Hedera',
      chainId: '0x127',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/hedera-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/hedera-logo.svg',
      rpcs: [
        'mainnet-public.mirrornode.hedera.com:443',
        'https://mainnet.hashio.io/api',
      ],
      group: GroupChain.Hedera,
      getAddress: toEvmAddress,
      isMainnet: true,
    })
  }
}
