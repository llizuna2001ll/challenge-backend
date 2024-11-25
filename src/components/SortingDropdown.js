import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSort, faSortAsc, faSortDesc} from "@fortawesome/free-solid-svg-icons";
import "../styles/sortingDropDown.scss";

const SortingDropdown = ({ onSortChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSortChange = (sortType) => {
        onSortChange(sortType);
        setIsOpen(false);
    };

    return (
        <div className="sorting-button-container">
            <div className="sorting-button" onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faSort} size="sm" color="white" />
            </div>
            {isOpen && (
                <div className="drop-down">
                    <ul>
                        <li onClick={() => handleSortChange("asc")}>Ascendant</li>
                        <li onClick={() => handleSortChange("desc")}>Descendant</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SortingDropdown;