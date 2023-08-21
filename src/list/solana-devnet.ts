import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toSolanaAddress } from '../utils'

export class SolanaDevnet extends Chain {
  constructor() {
    super({
      name: 'Solana Devnet',
      alias: 'Solana Devnet',
      chainId: '0xbdadbf327bc03',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-logo.svg',
      rpcs: ['https://api.devnet.solana.com'],
      group: GroupChain.Solana,
      getAddress: toSolanaAddress,
      isMainnet: false,
    })
  }
}
