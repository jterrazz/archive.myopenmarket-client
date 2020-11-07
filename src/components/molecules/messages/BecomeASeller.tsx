import Link from 'next/link';
import React from 'react';

export const BecomeASeller = () => (
    <div className='w-100 p-5 text-white d-flex justify-content-between align-items-center bg-blue--dark rounded shadow mb-5'>
        <div>
            <h2>Become a seller</h2>
            <Link href='/dashboard'>
                <a>
                    <div>Own your store in 30 seconds !</div>
                </a>
            </Link>
        </div>
        <Link href='/dashboard' passHref>
            <a>
                <button className='bg-white border-0 rounded button--md'>Create my store</button>
            </a>
        </Link>
    </div>
);
