import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toAptosAddress } from '../utils'

export class AptosDevnet extends Chain {
  constructor() {
    super({
      name: 'Aptos Devnet',
      alias: 'Aptos Devnet',
      chainId: '0x227464c4a29ee',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/apt-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/apt-logo.png',
      group: GroupChain.Aptos,
      getAddress: toAptosAddress,
      isMainnet: false,
      endpoint: {
        https: 'https://fullnode.devnet.aptoslabs.com',
      },
    })
  }
}
