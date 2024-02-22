import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class FantomMainnet extends Chain {
  constructor() {
    super({
      name: 'Fantom Mainnet',
      alias: 'Fantom',
      chainId: '0xfa',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/fantom-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/fantom-logo.png',
      rpcs: ['', 'https://rpc.ankr.com/fantom'],
      group: GroupChain.Fantom,
      getAddress: toEvmAddress,
      isMainnet: true,
      isAnkr: true,
      endpoint: {
        wss: '',
        https: 'https://rpc.ankr.com/fantom',
      },
    })
  }
}
