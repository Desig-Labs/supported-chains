import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class MantaPacificMainnet extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      wss: 'wss://pacific-rpc.manta.network/ws',
      https: 'https://pacific-rpc.manta.network/http',
    }

    super({
      name: 'Manta Pacific Mainnet',
      alias: 'Manta Pacific',
      chainId: '0xa9',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/manta-pacific-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/manta-pacific-logo.svg',
      group: GroupChain.Manta_pacific,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
