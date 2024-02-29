import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class MantaPacificTestnet extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      wss: 'wss://pacific-rpc.testnet.manta.network/ws',
      https: 'https://pacific-rpc.testnet.manta.network/http',
    }

    super({
      name: 'Manta Pacific Testnet',
      alias: 'Manta Pacific Testnet',
      chainId: '0x34816d',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/manta-pacific-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/manta-pacific-logo.svg',
      group: GroupChain.Manta_pacific,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
