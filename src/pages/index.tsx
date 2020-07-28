import React from 'react';
import getConfig from 'next/config';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { gql } from 'apollo-boost';

import Home from '../components/templates/Home';
import { tomApolloClient } from '~/services/tom-api/apollo/with-apollo';

const USER_QUERY = gql`
    query {
        user(id: 1) {
            firstName
            lastName
        }
    }
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {
        data: { user },
    } = await tomApolloClient.query({
        query: USER_QUERY,
        // variables: { userName: context.params?.userId },
    });
    console.log(user);
    return {
        props: {},
    };
};

const HomePage = () => (
    <div>
        <Head>
            <title>Home - {getConfig().publicRuntimeConfig.app['page-title']}</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <Home />
    </div>
);

export default HomePage;
