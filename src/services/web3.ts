// import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: '81bc94a6d12d470ea94eea48f3175372',
        },
    },
};

export const getWeb3Modal = () =>
    new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions,
    });

// const provider = await web3Modal.connect();

// const web3 = new Web3(provider);
