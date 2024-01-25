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
      rpcs: ['https://fullnode.mainnet.aptoslabs.com/v1'],
      group: GroupChain.Aptos,
      getAddress: toAptosAddress,
      isMainnet: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/http/aptos/v1/ws/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        https:
          'https://rpc.ankr.com/http/aptos/v1/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      },
    })
  }
}
