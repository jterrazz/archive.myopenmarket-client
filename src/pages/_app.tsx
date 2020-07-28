import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../services/tom-api/apollo/with-apollo';

import '../styles/global.scss';
import TheNavBar from '../components/organisms/TheNavBar';

const App = ({ Component, pageProps, apollo }) => (
    <ApolloProvider client={apollo}>
        <div
            dangerouslySetInnerHTML={{
                __html: '<!-- https://www.youtube.com/watch?v=oHg5SJYRHA0 -->',
            }}
        />
        <TheNavBar />
        <Component {...pageProps} />
    </ApolloProvider>
);

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
    apollo: PropTypes.object,
};

export default withApollo(App);
