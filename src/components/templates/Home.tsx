import React from 'react';
import Link from 'next/link';

import MSFeatures from '../organisms/information/MSFeatures';

const url = '/images/bg/pawel-czerwinski-TTBEwfajRFc-unsplash.jpg';

const bgStyle = (url) => {
    return {
        background: `url(${url})`,
        'background-repeat': `no-repeat`,
        'background-size': `cover`,
        height: 400,
    };
};

const Home = () => (
    <main>
        <div className='mb-2' />

        <div
            style={bgStyle(url)}
            className='w-100 p-5 text-white text-center d-flex flex-column justify-content-center'
        >
            <h1>Start selling now</h1>
        </div>

        <div className='d-flex text-center m-2'>
            <div className='flex-fill rounded' style={{ backgroundColor: 'rgb(223, 234, 242)' }}>
                <h2>Mes commandes</h2>
                <p>3 en cours</p>
            </div>
            <div className='ml-2 flex-fill rounded' style={{ backgroundColor: 'rgb(238, 223, 215)' }}>
                <h2>Mes commandes</h2>
                <p>3 en cours</p>
            </div>
            <div className='ml-2 flex-fill rounded'>
                <h2>Mes commandes</h2>
                <p>3 en cours</p>
            </div>
        </div>

        <Link href='/shops/[id]' as={`/shops/${2}`}>
            <a>Shop</a>
        </Link>
        <MSFeatures />
        <div>Welcome back Jean-Baptiste</div>
    </main>
);

export default Home;
