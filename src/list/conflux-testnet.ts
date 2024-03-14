import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class ConfluxTestnet extends Chain {
  constructor() {
    super({
      name: 'Conflux eSpace',
      alias: 'Conflux eSpace Testnet',
      chainId: '0x47',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/conflux-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/conflux-logo.svg',
      group: GroupChain.Conflux,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        https: 'https://evmtestnet.confluxrpc.com',
        wss: '',
      },
    })
  }
}
