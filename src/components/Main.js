import React, { useState } from "react";
import listings from "../data";
import "../images/account.svg";

const Main = () => {
    const [filteredListings, setFilteredListings] = useState(listings);
    const [filters, setFilters] = useState([]);

    console.log(listings);

    return (
        <main className="main">
            <img src="../images/account.svg" alt="icon"></img>
        </main>
    )
}

export default Main;