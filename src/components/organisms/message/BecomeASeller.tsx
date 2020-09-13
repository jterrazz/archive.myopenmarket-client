import Link from 'next/link';
import React from 'react';

const BecomeASeller = () => (
    <div className='w-100 p-5 text-white d-flex justify-content-between align-items-center bg-blue--dark rounded shadow mb-5'>
        <div>
            <h2>Become a seller</h2>
            <Link href='/signin'>
                <a>
                    <div>It only takes 30 seconds to create your own store</div>
                </a>
            </Link>
        </div>
        <button className='bg-white border-0 rounded button--md'>Create my store</button>
    </div>
);

export default BecomeASeller;
