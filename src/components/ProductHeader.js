import React from "react";
import SortingDropdown from "../components/SortingDropdown";

const PageHeader = ({ title, onSortChange }) => {
    return (
        <div className="page-header">
            <h1>{title}</h1>
            <SortingDropdown onSortChange={onSortChange} />
        </div>
    );
};


export default PageHeader;
