import { Blockfrost, WalletProvider, Lucid } from 'lucid-cardano'

const initializeLucid = async (walletName: string) => {
    await Lucid.initialize(
        'Testnet',
        new Blockfrost('https://cardano-testnet.blockfrost.io/api/v0', 'testnetRvOtxC8BHnZXiBvdeM9b3mLbi8KQPwzA')
    )
    if(walletName) await Lucid.selectWallet(walletName as WalletProvider)
    return Lucid
}

export default initializeLucid