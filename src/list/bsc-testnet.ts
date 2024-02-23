import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class BscTestnet extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      wss: 'wss://rpc.ankr.com/bsc_testnet_chapel/ws',
      https: 'https://rpc.ankr.com/bsc_testnet_chapel',
    }
    super({
      name: 'Binance Smart Chain Testnet',
      alias: 'BSC Testnet',
      chainId: '0x61',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-logo.png',
      group: GroupChain.Binance,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
