import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class BlastMainnet extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      https: 'https://rpc.ankr.com/blast',
      wss: '',
    }
    super({
      name: 'Blast Mainnet',
      alias: 'Blast',
      chainId: '0x13e31',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/blast-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/blast-logo.png',
      group: GroupChain.Blast,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
