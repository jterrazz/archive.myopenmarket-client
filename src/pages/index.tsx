import React from 'react';
import { GetStaticProps } from 'next';

import { Home } from '~/components/templates/Home';
import { TheNavBarContainerWithState } from '~/components/organisms/TheNavBar';
import { Head, HeadProps } from '~/components/atoms/Head';

export const getStaticProps: GetStaticProps = async (ctx) => {
    const head: HeadProps = {
        title: 'Home',
    };

    return {
        props: {
            head,
        },
    };
};

const HomePage = ({ head }) => {
    return (
        <div>
            <Head {...head} />

            <TheNavBarContainerWithState>
                <Home />
            </TheNavBarContainerWithState>
        </div>
    );
};

export default HomePage;
