import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class LineaMainnet extends Chain {
  constructor() {
    super({
      name: 'Linea Mainnet',
      alias: 'Linea',
      chainId: '0xe708',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/linea-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/linea-logo.svg',
      rpcs: [
        'wss://linea-mainnet.infura.io/v3/93597110afce4130a8f962c0abf2f73c',
        'https://linea-mainnet.infura.io/v3/93597110afce4130a8f962c0abf2f73c',
      ],
      group: GroupChain.Linea,
      getAddress: toEvmAddress,
      isMainnet: true,
    })
  }
}
