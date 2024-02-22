import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class PolygonZkEVMTestnet extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      wss: 'wss://rpc.ankr.com/polygon_zkevm_testnet/ws',
      https: 'https://rpc.ankr.com/polygon_zkevm_testnet',
    }

    super({
      name: 'Polygon zkEVM Testnet',
      alias: 'Polygon zkEVM Testnet',
      chainId: '0x5a2',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/polygon-zkevm-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/polygon-zkevm-logo.svg',
      group: GroupChain.Polygon_zkevm,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
