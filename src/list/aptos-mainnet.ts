import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toAptosAddress } from '../utils'

export class AptosMainnet extends Chain {
  constructor() {
    super({
      name: 'Aptos Mainnet',
      alias: 'Aptos',
      chainId: '0x21c26a5834152',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/apt-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/apt-logo.png',
      rpcs: ['https://fullnode.mainnet.aptoslabs.com'],
      group: GroupChain.Aptos,
      getAddress: toAptosAddress,
    })
  }
}
