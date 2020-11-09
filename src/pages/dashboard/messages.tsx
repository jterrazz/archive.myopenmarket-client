import React from 'react';
import { GetServerSideProps } from 'next';

import { TheNavBarWithState } from '~/components/organisms/TheNavBar';
import { Head } from '~/components/atoms/Head';
import MessageList from '~/components/organisms/dashboard/MessageList';
import { Dashboard } from '~/components/templates/Dashboard';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

const HomePage = () => (
    <div>
        <Head />
        <TheNavBarWithState />
        <Dashboard>
            <MessageList />
        </Dashboard>
    </div>
);

export default HomePage;
