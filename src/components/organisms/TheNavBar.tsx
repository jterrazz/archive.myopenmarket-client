import React from 'react';
import Router, { useRouter } from 'next/router';
import getConfig from 'next/config';
import Link from 'next/link';

import SearchBar from '../molecules/SearchBar';

const TheNavBar = () => {
    // TODO Move to a more general location, to eventually share it with other search bars
    const handleSearchProduct = async (searchedValue: string) => {
        await Router.push({
            pathname: getConfig().publicRuntimeConfig.routes.search,
            query: { q: searchedValue },
        });
    };

    const _mainNavBar = () => (
        <div className='d-flex align-items-center p-2 px-3'>
            <Link href='/'>
                <div className='font-weight-bold mx-3'>THE OPEN MARKET</div>
            </Link>

            <Link href='/'>
                <button className='button--light mx-3'>Home</button>
            </Link>
            <button className='button--light'>Stores</button>

            <SearchBar handleSearch={handleSearchProduct} />
            <button className='button--light'>Support</button>
            <Link href='/signin'>
                <button className='button--light mx-1'>Log in</button>
            </Link>
            <button className='button--primary ml-2'>Sign up</button>
        </div>
    );

    // Under for navbbar
    // Categories | #part1 | #part2
    // const _storeNavBar = () => <div>fefefef</div>;

    return (
        <nav className='border-bottom shadow-md position-sticky'>
            {_mainNavBar()}
            {/*{_storeNavBar()}*/}
        </nav>
    );
};

export default TheNavBar;
