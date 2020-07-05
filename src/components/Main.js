import React, { useState } from "react";
import listings from "../data";
import Listing from "./Listing";
import FilterRow from "./FilterRow";
import Button from "./Button";
import FilterButton from "./FilterButton";

const Main = () => {
    const [filters, setFilters] = useState([]);
    const [filteredListings, setFilteredListings] = useState(listings);

    const handleFilter = selection => {
        setFilters(filters => [...filters, selection]);
        setFilteredListings(listings.filter(listing => isMatchingFilters(listing, filters)));
    }

    const handleRemoveFilter = selection => {
        setFilters(filters => filters.filter(item => item !== selection));
        setFilteredListings(listings.filter(listing => isMatchingFilters(listing, filters)));
    }

    const isMatchingFilters = (item, selections) => {
        const combined = [item.role, item.level, ...item.languages, ...item.tools];
        return arrayContainsArray(combined, selections);
    }

    const arrayContainsArray = (superset, subset) => {
        return subset.every(value => {
            return (superset.indexOf(value) >= 0);
        });
    }

    return (
        <main className="main">
            {filters.length === 0 ? null : (
                <FilterRow buttons={filters.map(filter => (
                    <FilterButton text={filter} key={filter} clicked={handleRemoveFilter} />
                ))} />
            )}

            {filteredListings.map(listing => (
                <Listing
                    key={listing.id}
                    logo={listing.logo}
                    company={listing.company}
                    new={listing.new}
                    featured={listing.featured}
                    position={listing.position}
                    posted={listing.postedAt}
                    contract={listing.contract}
                    location={listing.location}
                    buttons={
                        [listing.role, listing.level, ...listing.languages, ...listing.tools]
                            .map(selector => (
                                <Button text={selector} key={selector} clicked={handleFilter} />
                            ))
                    }
                />
            ))}
        </main>
    )
}

export default Main;
