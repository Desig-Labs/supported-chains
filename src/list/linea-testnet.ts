import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class LineaTestnet extends Chain {
  constructor() {
    super({
      name: 'Linea Testnet',
      alias: 'Linea Testnet',
      chainId: '0xe704',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/linea-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/linea-logo.svg',
      rpcs: [
        'wss://linea-goerli.infura.io/v3/93597110afce4130a8f962c0abf2f73c',
        'https://linea-goerli.infura.io/v3/93597110afce4130a8f962c0abf2f73c',
      ],
      group: GroupChain.Linea,
      getAddress: toEvmAddress,
      isMainnet: false,
      isAnkr: false,
      endpoint: {
        wss: 'wss://linea-goerli.infura.io/v3/93597110afce4130a8f962c0abf2f73c',
        https:
          'https://linea-goerli.infura.io/v3/93597110afce4130a8f962c0abf2f73c',
      },
    })
  }
}
