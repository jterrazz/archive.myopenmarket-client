import React from "react";
import { useRouter } from 'next/router';
import SearchBar from "../molecules/SearchBar";

const TheNavBar = () => {
    const router = useRouter();

    // TODO Move to a more general location, to eventually share it with other search bars
    const searchProduct = (searchedValue) => {
        console.log("Not implemented");
        console.log(searchedValue);
    }

    return (
        <nav className="bg-primary d-flex justify-content-between text-white">
            <div className="px-4 py-2">
                {router.pathname}
            </div>
            <SearchBar handleSearch={searchProduct}/>
            <button>Login</button>
            <button>Register</button>
        </nav>
    );
};

export default TheNavBar;