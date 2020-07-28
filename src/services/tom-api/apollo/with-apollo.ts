import ApolloClient, { InMemoryCache } from 'apollo-boost';
import getConfig from 'next/config';
import withApollo from 'next-with-apollo';

const SHARED_CONFIG = {
    uri: getConfig().publicRuntimeConfig.app.api.host + '/graphql',
};

export const tomApolloClient = new ApolloClient(SHARED_CONFIG);

export default withApollo(({ ctx, initialState }) => {
    return new ApolloClient({
        ...SHARED_CONFIG,
        cache: new InMemoryCache().restore(initialState || {}),
    });
});
