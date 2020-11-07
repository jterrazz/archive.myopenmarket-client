import React from 'react';
import Link from 'next/link';

export interface SearchResultsProps {
    query: string;
    products: any[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ query, products }) => (
    <div>
        <h1>Results for {query}</h1>
        <ul>
            {products.map((product) => (
                <Link href='/store/[id]' as={`/store/${2}`}>
                    <a>
                        <li key={product}>{product}</li>
                    </a>
                </Link>
            ))}
        </ul>
    </div>
);
