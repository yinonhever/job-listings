import React, { useState } from "react";
import listings from "../data";
import Listing from "./Listing";

const Main = () => {
    const [filteredListings, setFilteredListings] = useState(listings);
    const [filters, setFilters] = useState(["Sass", "Javascript"]);

    const handleFilter = selection => {
        setFilters(filters => [...filters, selection]);
    }

    const handleRemoveFilter = selection => {
        setFilters(filters => filters.filter(item => item !== selection));
    }

    const listingMatchingFilters = (item, selections) => {
        const combined = [...item.languages, ...item.tools];
        console.log(combined);
        console.log(selections);
        return arrayContainsArray(combined, selections);
    }

    function arrayContainsArray (superset, subset) {
        return subset.every(function (value) {
          return (superset.indexOf(value) >= 0);
        });
      }


      const combined = [...listings[4].languages, ...listings[4].tools];
      console.log(combined);
      console.log(filters);
    console.log(arrayContainsArray(combined, filters));

    return (
        <main className="main">

        </main>
    )
}

export default Main;
