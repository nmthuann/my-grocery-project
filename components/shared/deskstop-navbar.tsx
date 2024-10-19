"use client";
import NavbarActions from "../ui/custom/navbar-actions";
import AutocompleteSearchBar from "../ui/custom/search-products/autocomplete-search-bar";

const DesktopNavbar = () => {
    return (
        <div>
            <div className="flex flex-row items-center w-full space-x-4">
                <div className="flex flex-row items-start justify-between">
                    <AutocompleteSearchBar />
                </div>
                <NavbarActions />
            </div>
        </div>
    );
};

export default DesktopNavbar;
