import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toAptosAddress } from '../utils'

export class AptosTestnet extends Chain {
  constructor() {
    super({
      name: 'Aptos Testnet',
      alias: 'Aptos Testnet',
      chainId: '0x98a2cc14e0838',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/apt-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/apt-logo.png',
      rpcs: ['https://fullnode.testnet.aptoslabs.com/v1'],
      group: GroupChain.Aptos,
      getAddress: toAptosAddress,
      isMainnet: false,
      isAnkr: false,
      endpoint: {
        https: 'https://fullnode.testnet.aptoslabs.com/v1',
      },
    })
  }
}
