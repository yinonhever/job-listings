import React from "react";

const FilterRow = props => (
    <div className="filter-row">
        <div className="filter-row__buttons">
            {props.buttons}
        </div>
        <div className="button button--clear" onClick={props.cleared}>
            <span>Clear</span>
        </div>
    </div>
)

export default FilterRow;