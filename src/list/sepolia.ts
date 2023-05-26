import { Chain } from '../chain'
import { Curve } from '../curve'
import { toEvmAddress } from '../utils'

export class Sepolia extends Chain {
  constructor() {
    super({
      name: 'Sepolia',
      alias: 'Sepolia',
      chainId: '0xaa36a7',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-logo.png',
      rpcs: [
        'wss://sepolia.infura.io/ws/v3/783c24a3a364474a8dbed638263dc410',
        'https://sepolia.infura.io/v3/783c24a3a364474a8dbed638263dc410',
      ],
      group: 'ethereum',
      getAddress: toEvmAddress,
    })
  }
}
