import React from 'react';

import { InDevelopmentMessage } from '~/components/molecules/messages/InDevelopmentMessage';
import { ProductCarousel } from '~/components/organisms/ProductCarousel';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HomeProps {}

const shop = {
    image: '/images/user-profile.svg',
    name: 'The first market',
};

const products = [
    {
        image: '/images/sample/product-0.png',
        name: 'The first product',
        rating: 1,
    },
];

export const Home: React.FC<HomeProps> = () => (
    <main className='container py-4'>
        {/*<InDevelopmentMessage />*/}
        <ProductCarousel shop={shop} products={products} />
        <ProductCarousel shop={shop} products={products} />
        <ProductCarousel shop={shop} products={products} />
        <ProductCarousel shop={shop} products={products} />
    </main>
);
