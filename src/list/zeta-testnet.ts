import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class ZetaTestnet extends Chain {
  constructor() {
    super({
      name: 'ZetaChain Athens3 Testnet',
      alias: 'ZetaChain Athens3 Testnet',
      chainId: '0x1b59',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/zeta-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/zeta-logo.svg',
      rpcs: [
        'wss://rpc.ankr.com/zetachain_evm_athens_testnet/ws/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        'https://rpc.ankr.com/zetachain_evm_athens_testnet/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      ],
      group: GroupChain.Zeta,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://rpc.ankr.com/zetachain_evm_athens_testnet/ws/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        https:
          'https://rpc.ankr.com/zetachain_evm_athens_testnet/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      },
    })
  }
}
