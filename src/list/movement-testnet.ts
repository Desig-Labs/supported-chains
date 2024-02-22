import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toAptosAddress } from '../utils'

export class MovementTestnet extends Chain {
  constructor() {
    super({
      name: 'Movement Testnet',
      alias: 'Movement Testnet',
      chainId: '0xd990377fe4ecf',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/mvmt-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/mvmt-logo.png',
      rpcs: ['https://seed-node1.movementlabs.xyz'],
      group: GroupChain.Movement,
      getAddress: toAptosAddress,
      isMainnet: false,
      isAnkr: false,
      endpoint: {
        https: 'https://seed-node1.movementlabs.xyz',
      },
    })
  }
}
