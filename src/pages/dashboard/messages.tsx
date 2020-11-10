import React from 'react';
import { GetServerSideProps } from 'next';

import { TheNavBarContainer } from '~/components/organisms/TheNavBar';
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

        <TheNavBarContainer>
            <Dashboard>
                <MessageList />
            </Dashboard>
        </TheNavBarContainer>
    </div>
);

export default HomePage;
