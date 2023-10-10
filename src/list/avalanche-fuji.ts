import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class AvalancheFuji extends Chain {
  constructor() {
    super({
      name: 'Avalanche Fuji',
      alias: 'Avalanche Fuji',
      chainId: '0xa869',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/avalanche-c-chain-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/avalanche-c-chain-logo.svg',
      rpcs: [
        'wss://api.avax-test.network/ext/bc/C/ws',
        'https://api.avax-test.network/ext/bc/C/rpc',
      ],
      group: GroupChain.Avalanche_c_chain,
      getAddress: toEvmAddress,
      isMainnet: false,
    })
  }
}
