import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class VictionTestnet extends Chain {
  constructor() {
    super({
      name: 'Viction Testnet',
      alias: 'Viction Testnet',
      chainId: '0x59',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/viction-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/viction-logo.svg',
      rpcs: ['wss://ws-testnet.viction.xyz', 'https://rpc-testnet.viction.xyz'],
      group: GroupChain.Viction,
      getAddress: toEvmAddress,
      isMainnet: false,
      isAnkr: false,
      endpoint: {
        wss: 'wss://ws-testnet.viction.xyz',
        https: 'https://rpc-testnet.viction.xyz',
      },
    })
  }
}
