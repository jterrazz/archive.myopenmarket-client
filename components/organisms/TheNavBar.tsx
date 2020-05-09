import React from 'react';
import Router, { useRouter } from 'next/router';

import SearchBar from '../molecules/SearchBar';
import { SEARCH_ROUTE } from '../../config/routes';

const TheNavBar = () => {
    const router = useRouter();

    // TODO Move to a more general location, to eventually share it with other search bars
    const _handleSearchProduct = async (searchedValue: string) => {
        await Router.push({
            pathname: SEARCH_ROUTE,
            query: { q: searchedValue },
        });
    };

    return (
        <nav className='bg-primary d-flex justify-content-between text-white position-sticky'>
            <div className='px-4 py-2'>{router.pathname}</div>
            <SearchBar handleSearch={_handleSearchProduct} />
            <button>Login</button>
            <button>Register</button>
        </nav>
    );
};

export default TheNavBar;
