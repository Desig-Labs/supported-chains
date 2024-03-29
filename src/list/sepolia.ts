import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class Sepolia extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      wss: 'wss://rpc.ankr.com/eth_sepolia/ws',
      https: 'https://rpc.ankr.com/eth_sepolia',
    }

    super({
      name: 'Sepolia',
      alias: 'Sepolia',
      chainId: '0xaa36a7',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-logo.png',
      group: GroupChain.Ethereum,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
