import React from 'react';
import Link from 'next/link';

import SearchBar from '~/components/molecules/SearchBar';

const TheNavBar = ({ user, submitSearchHandler }) => {
    const _renderAuthentifiedUser = async () => {
        return (
            <div>
                <div>{'yo'}</div>.0
                <div>{'sign out'}</div>
            </div>
        );
    };

    const _renderMainNavBar = () => (
        <div className='d-flex align-items-center p-2 px-3'>
            <Link href='/'>
                <div className='font-weight-bold mx-3'>THE OPEN MARKET</div>
            </Link>
            <Link href='/'>
                <a>
                    <button className='button--light mx-3'>Home</button>
                </a>
            </Link>
            <button className='button--light'>Stores</button>

            <SearchBar handleSearch={submitSearchHandler} />
            <Link href='/support'>
                <a>
                    <button className='button--light'>Support</button>
                </a>
            </Link>
            <Link href='/signin'>
                <a>
                    <button className='button--light mx-1'>Log in</button>
                </a>
            </Link>
            <Link href='/signup'>
                <a>
                    <button className='button--primary ml-2'>Sign up</button>
                </a>
            </Link>

            {/*{_renderAuthentifiedUser()}*/}
        </div>
    );

    // Under for navbbar
    // Categories | #part1 | #part2
    // const _storeNavBar = () => <div>fefefef</div>;

    return (
        <nav className='border-bottom shadow-md position-sticky'>
            {_renderMainNavBar()}
            {/*{_storeNavBar()}*/}
        </nav>
    );
};

export default TheNavBar;
