import React from "react";
import {useRouter} from "next/router";

import Search from "../components/templates/Search";

export async function getStaticProps(ctx) {
    return {
        props: {
            products: [1, 4, 2]
        }
    }
}

const SearchPage = ({products}) => {
    const {query: {q: query}} = useRouter();

    return (
        <Search
            query={Array.isArray(query) ? query[0] : query}
            products={products}
        />
    )
};

export default SearchPage;