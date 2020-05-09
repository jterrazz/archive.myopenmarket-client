import _ from 'lodash';
import router from 'next/router';

class MSRouter {
    static silentlyUpdateQuery = async (query: object) => {
        await router.push(
            router.pathname,
            { pathname: router.pathname, query: { ...router.query, ...query } },
            { shallow: true },
        );
    };
}

export default MSRouter;
