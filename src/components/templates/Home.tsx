import React from 'react';
import Link from 'next/link';

import { BecomeASeller } from '~/components/molecules/messages/BecomeASeller';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => (
    <main className='container'>
        <div className='mt-5'>
            <BecomeASeller />
        </div>

        <div className='d-flex text-center'>
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

        <Link href='/store/[id]' as={`/store/${2}`}>
            <a>Shop</a>
        </Link>

        <div>Welcome back Jean-Baptiste</div>
    </main>
);
