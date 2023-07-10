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
        'wss://linea-goerli.infura.io/v3/21e28f1b90ea47368d9d7e2ba82e87e3',
        'https://linea-goerli.infura.io/v3/21e28f1b90ea47368d9d7e2ba82e87e3',
      ],
      group: GroupChain.Linea,
      getAddress: toEvmAddress,
    })
  }
}
