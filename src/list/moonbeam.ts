import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class Moonbeam extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      wss: 'wss://rpc.ankr.com/moonbeam/ws',
      https: 'https://rpc.ankr.com/moonbeam',
    }

    super({
      name: 'Moonbeam',
      alias: 'Moonbeam',
      chainId: '0x504',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/moonbeam-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/moonbeam-logo.svg',
      group: GroupChain.Moonbeam,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
