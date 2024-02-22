import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class FantomTestnet extends Chain {
  constructor() {
    super({
      name: 'Fantom Testnet',
      alias: 'Fantom Testnet',
      chainId: '0xfa2',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/fantom-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/fantom-logo.png',
      rpcs: ['', 'https://rpc.ankr.com/fantom_testnet'],
      group: GroupChain.Fantom,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        wss: '',
        https: 'https://rpc.ankr.com/fantom_testnet',
      },
    })
  }
}
