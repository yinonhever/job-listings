import React, { useState } from "react";
import Zoom from 'react-reveal/Zoom';
import listings from "../data";
import Listing from "./Listing";
import FilterRow from "./FilterRow";
import Button from "./Button";
import FilterButton from "./FilterButton";

const Main = () => {
    const [filters, setFilters] = useState([]);
    const [filteredListings, setFilteredListings] = useState(listings);

    const handleFilter = selection => {
        if (!filters.includes(selection)) {
            const newFilters = [...filters, selection];
            setFilters(newFilters);
            setFilteredListings(listings.filter(listing => isMatchingFilters(listing, newFilters)));
        }
    }

    const handleRemoveFilter = selection => {
        const newFilters = filters.filter(item => item !== selection);
        setFilters(newFilters);
        setFilteredListings(listings.filter(listing => isMatchingFilters(listing, newFilters)));
    }

    const handleClear = () => {
        setFilters([]);
        setFilteredListings(listings);
    }

    const isMatchingFilters = (listing, selections) => {
        const combined = [listing.role, listing.level, ...listing.languages, ...listing.tools];
        const matching = selections.every(value => combined.indexOf(value) >= 0);
        return matching;
    }

    return (
        <main className="main">
            {filters.length === 0 ? null : (
                <FilterRow buttons={filters.map(filter => (
                    <FilterButton text={filter} key={filter} clicked={handleRemoveFilter} />
                ))} cleared={handleClear} />
            )}

            {filteredListings.map(listing => (
                <Listing
                    key={listing.id}
                    logo={listing.logo}
                    company={listing.company}
                    new={listing.new}
                    featured={listing.featured}
                    title={listing.position}
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
