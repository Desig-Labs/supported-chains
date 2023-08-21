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
      rpcs: [
        'wss://mainnet.infura.io/ws/v3/93597110afce4130a8f962c0abf2f73c',
        'https://mainnet.infura.io/v3/93597110afce4130a8f962c0abf2f73c',
      ],
      group: GroupChain.Ethereum,
      getAddress: toEvmAddress,
      isMainnet: true,
    })
  }
}
