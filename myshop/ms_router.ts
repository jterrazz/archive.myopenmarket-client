import _ from 'lodash';
import router from 'next/router';

class MSRouter {
    static silentlyUpdateQuery = async (query: object) => {
        const paramsInUrl = router.pathname.match(/\[([^()]+)\]/g).map((path) => path.slice(1, -1));
        const paramsKeysInQuery = _.differenceWith(_.keys(router.query), paramsInUrl, _.isEqual);
        const paramsInQuery = _.pick(router.query, paramsKeysInQuery);

        const pathname = router.pathname.replace(/\[([^\[\]]+)\]/g, function (m) {
            const str = new String(router.query[m.substring(1, m.length - 1)]);
            return str.toString();
        });

        await router.push(router.pathname, { pathname, query: { ...paramsInQuery, ...query } }, { shallow: true });
    };
}

export default MSRouter;
