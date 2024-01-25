import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class BeraTestnet extends Chain {
  constructor() {
    super({
      name: 'Bera Testnet',
      alias: 'Bera Testnet',
      chainId: '0x138d5',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bera-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bera-logo.png',
      rpcs: [
        '',
        'https://rpc.ankr.com/berachain_testnet/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      ],
      group: GroupChain.Bera,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        https:
          'https://rpc.ankr.com/berachain_testnet/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        wss: '',
      },
    })
  }
}
