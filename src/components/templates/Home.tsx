import React from 'react';
import Link from 'next/link';

import MSFeatures from '../organisms/information/MSFeatures';

const Home = () => (
    <main>
        <div className='my-5' />
        <Link href='/shops/[id]' as={`/shops/${2}`}>
            tset
        </Link>
        <MSFeatures />
    </main>
);

export default Home;
