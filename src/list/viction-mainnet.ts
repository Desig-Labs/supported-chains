import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class VictionMainnet extends Chain {
  constructor() {
    super({
      name: 'Viction Mainnet',
      alias: 'Viction',
      chainId: '0x58',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/viction-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/viction-logo.svg',
      group: GroupChain.Viction,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: {
        wss: 'wss://ws.viction.xyz',
        https: 'https://rpc.viction.xyz',
      },
    })
  }
}
