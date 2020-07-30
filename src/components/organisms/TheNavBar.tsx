import React from 'react';
import Router, { useRouter } from 'next/router';

import SearchBar from '../molecules/SearchBar';
import getConfig from 'next/config';

const TheNavBar = () => {
    const router = useRouter();

    // TODO Move to a more general location, to eventually share it with other search bars
    const _handleSearchProduct = async (searchedValue: string) => {
        await Router.push({
            pathname: getConfig().publicRuntimeConfig.routes.search,
            query: { q: searchedValue },
        });
    };

    return (
        <nav className='border-bottom shadow-md d-flex align-items-center text-white position-sticky p-3'>
            <div className='px-4'>{router.pathname}</div>
            <SearchBar handleSearch={_handleSearchProduct} />
            <button className='tom-btn-light'>Support</button>
            <button className='tom-btn-light mx-2'>Log in</button>
            <button className='tom-btn-primary ml-2'>Sign up</button>
        </nav>
    );
};

export default TheNavBar;
