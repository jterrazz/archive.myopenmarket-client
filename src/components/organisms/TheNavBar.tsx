import React, { ReactChild } from 'react';
import Link from 'next/link';

import SearchBar from '~/components/molecules/SearchBar';
import Router from 'next/router';
import getConfig from 'next/config';

export const TheNavBar = ({ style, className }) => {
    const _renderLogo = () => {
        return (
            <div className='d-flex x'>
                <Link href='/'>
                    <a>
                        <div className='font-weight-bold'>
                            <span className='bg-dark p-1 text-white'>OPEN</span> MARKET
                        </div>
                    </a>
                </Link>
            </div>
        );
    };

    const _renderAuthenticationSection = () => {
        return (
            <>
                <Link href='/support'>
                    <a>
                        <button className='button--light'>Support</button>
                    </a>
                </Link>
                <Link href='/signin'>
                    <a>
                        <button className='button--light'>Log in</button>
                    </a>
                </Link>
                <Link href='/signup'>
                    <a>
                        <button className='button--primary'>Sign up</button>
                    </a>
                </Link>
            </>
        );
    };

    const LOGO_SIZE = 19;

    return (
        <nav style={style} className={`${className} d-flex flex-column`}>
            <div className='p-4'>
                {_renderLogo()}
                <p className='mt-2 small'>A place for merchants and clients</p>
            </div>

            <div className='overflow-auto flex-fill px-4'>
                <div className='pb-4'>
                    <h3 className='text-muted small mb-3 font-weight-500'>Application</h3>
                    <ul className='font-weight-500'>
                        <Link href='/'>
                            <a>
                                <li className='text-primary-light my-1 d-flex align-items-center'>
                                    <img
                                        src='/images/icons8-home.svg'
                                        style={{ height: LOGO_SIZE, width: LOGO_SIZE, marginTop: -1 }}
                                        alt='home logo'
                                    />
                                    <div className='ml-2'>Home</div>
                                </li>
                            </a>
                        </Link>
                        <Link href='/discover'>
                            <a>
                                <li className='my-1 d-flex align-items-center'>
                                    <img
                                        src='/images/icons8-compass-24.png'
                                        style={{ height: LOGO_SIZE, width: LOGO_SIZE, marginTop: -1 }}
                                        alt='home logo'
                                    />
                                    <div className='ml-2'>Discover</div>
                                </li>
                            </a>
                        </Link>
                    </ul>
                </div>

                <div className='py-4'>
                    <h3 className='text-muted small mb-3 font-weight-500'>Stores</h3>
                    <ul className='font-weight-500'>
                        <li className='my-1'>Blyat</li>
                        <li className='my-1'>Blyat 2</li>
                    </ul>
                </div>

                <div className='py-4'>
                    <h3 className='text-muted small mb-3 font-weight-500'>Tags / Categories</h3>
                    <ul>
                        <li className='my-1 text-muted small'>#electronics</li>
                        <li className='my-1 text-muted small'>#apple</li>
                        <li className='my-1 text-muted small'>#food</li>
                    </ul>
                </div>
            </div>

            <div className='d-flex align-items-center p-4 border-top'>
                <img src='/images/user-profile.svg' className='size-2 mr-2' />
                <div className='text-muted'>My name</div>
            </div>
        </nav>
    );
};

export interface TheNavBarContainerProps {
    children: ReactChild;
}

export const TheNavBarContainer: React.FC<TheNavBarContainerProps> = ({ children }) => {
    const NAVBAR_WIDTH = 270;

    return (
        <div className='position-relative vh-100'>
            <TheNavBar style={{ width: NAVBAR_WIDTH, top: 0, bottom: 0 }} className='border-right position-fixed' />
            <div style={{ marginLeft: NAVBAR_WIDTH }}>{children}</div>
        </div>
    );
};

export const TheNavBarContainerWithState = ({ children }) => {
    // const authenticatedUser = {
    //     id: 42,
    // };
    //
    // // TODO Move to a more general location, to eventually share it with other search bars
    // const _searchProduct = async (searchedValue: string) => {
    //     await Router.push({
    //         pathname: getConfig().publicRuntimeConfig.app.router.search,
    //         query: { q: searchedValue },
    //     });
    // };

    return <TheNavBarContainer>{children}</TheNavBarContainer>;
};
