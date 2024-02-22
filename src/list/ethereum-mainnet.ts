import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class EthereumMainnet extends Chain {
  constructor() {
    super({
      name: 'Ethereum Mainnet',
      alias: 'Ethereum',
      chainId: '0x1',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-logo.png',
      rpcs: ['wss://rpc.ankr.com/eth/ws', 'https://rpc.ankr.com/eth'],
      group: GroupChain.Ethereum,
      getAddress: toEvmAddress,
      isMainnet: true,
      isAnkr: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/eth/ws',
        https: 'https://rpc.ankr.com/eth',
      },
    })
  }
}
