import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class CoreMainnet extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      https: 'https://rpc.ankr.com/core',
      wss: '',
    }
    super({
      name: 'Core Blockchain Mainnet',
      alias: 'Core Blockchain',
      chainId: '0x45c',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/core-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/core-logo.svg',
      group: GroupChain.Core,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
