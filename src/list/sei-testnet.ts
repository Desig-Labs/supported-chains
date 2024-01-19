import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toCosmosAddress } from '../utils'

export class SeiTestnet extends Chain {
  constructor() {
    super({
      name: 'Sei Testnet',
      alias: 'Sei Testnet',
      chainId: '0xb66e1ec8b2d65',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sei-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sei-logo.png',
      rpcs: [
        'https://rpc.ankr.com/sei_testnet/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      ],
      group: GroupChain.Sei,
      getAddress: (pubkey) => toCosmosAddress(pubkey, 'sei'),
      isMainnet: false,
      endpoint: {
        https:
          'https://rpc.ankr.com/sei_testnet/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        wss: 'wss://rpc.ankr.com/sei_testnet/ws/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      },
    })
  }
}
