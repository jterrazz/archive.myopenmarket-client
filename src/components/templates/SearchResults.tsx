import React from 'react';

export interface SearchResultsProps {
    query: string;
    products: any[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ query, products }) => (
    <div>
        <h1>Results for {query}</h1>
        <ul>
            {products.map((product) => (
                <li key={product}>{product}</li>
            ))}
        </ul>
    </div>
);
