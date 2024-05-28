"use client";
import NavbarActions from "../ui/custom/navbar-actions";
import AutocompleteSearchBar from "../ui/custom/search-products/autocomplete-search-bar";

const DesktopNavbar = () => {
    return (
        <>
            {/* <div className="w-full lg:w-1/2 xl:w-1/3 my-4 lg:my-0">
                <AutocompleteSearchBar />
            </div>
            <NavbarActions /> */}
            <div className="flex flex-row items-center w-full space-x-4">
                <div className="flex flex-row items-start justify-between">
                    <AutocompleteSearchBar />
                </div>
                <NavbarActions />
            </div>
        </>
    );
};

export default DesktopNavbar;
