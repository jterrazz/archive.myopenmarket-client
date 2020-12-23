import React from 'react';

import { InDevelopmentMessage } from '~/components/molecules/messages/InDevelopmentMessage';
import { ProductCarousel } from '~/components/organisms/ProductCarousel';
import { getWeb3Modal } from '~/services/web3';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HomeProps {}

const shop = {
    image: '/images/restaurant(48x48)@2x.svg',
    name: 'The first market',
};

const products = [
    {
        image: '/images/sample/product-0.png',
        name: 'The first product',
        rating: 1,
    },
];

// import dynamic from 'next/dynamic';

// const Wallet = dynamic(
//     async () => {
//         return getWeb3Modal();
//     },
//     { ssr: false },
// );

// import Web3 from 'web3';

// const onClickc = async () => {
//     const web3Modal = getWeb3Modal();

//     const provider = await web3Modal.connect();

//     const web3 = new Web3(provider);

//     // Subscribe to accounts change
//     provider.on('accountsChanged', (accounts: string[]) => {
//         console.log(accounts);
//     });
// };

export const Home: React.FC<HomeProps> = () => {
    return (
        <main className='container py-4'>
            {/* <Wallet /> */}
            {/* <button onClick={onClickc} /> */}

            {/*<InDevelopmentMessage />*/}
            <ProductCarousel shop={shop} products={products} />
            <ProductCarousel shop={shop} products={products} />
            <ProductCarousel shop={shop} products={products} />
            <ProductCarousel shop={shop} products={products} />
        </main>
    );
};
