import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class BlastTestnet extends Chain {
  constructor() {
    super({
      name: 'Blast Testnet',
      alias: 'Blast Testnet',
      chainId: '0xa0c71fd',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/blast-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/blast-logo.png',
      rpcs: ['https://rpc.ankr.com/blast_testnet_sepolia/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f'],
      group: GroupChain.Blast,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        https: 'https://rpc.ankr.com/blast_testnet_sepolia/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        wss: '',
      },
    })
  }
}
