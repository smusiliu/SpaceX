/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import drop from '../assets/drop.png'

export default function SearchForm({rockets, sendToParent, setFilteredRockets}) {
    const [selectedCountries, setSelectedCountries] = useState(new Set(["Country"]));
    const [selectHeight, setSelectedHeight] = useState(new Set(["Height"]));
    const [isActive, setIsActive] = useState(new Set(["Active"]));

    let uniqueCountries = rockets.map(rocket => rocket.country)
    uniqueCountries = [...new Set(uniqueCountries)]

    let uniqueHeight = rockets.map(rocket => rocket.height.meters)
    uniqueHeight = [...new Set(uniqueHeight)]

    const selectedCountry = useMemo(
        () => Array.from(selectedCountries).join(", ").replaceAll("_", " "),
        [selectedCountries]
    );
    const selectedHeight = useMemo(
        () => Array.from(selectHeight).join(", ").replaceAll("_", " "),
        [selectHeight]
    );

    const selectActive = useMemo(
        () => Array.from(isActive).join(", ").replaceAll("_", " "),
        [isActive]
    );    

    const params = () => {
        return { country: selectedCountries, height: selectHeight, active: isActive, }
    }


    return (
        <div className="w-full backdrop-blur-sm bg-gray-900/40 p-4 rounded-md my-8 flex md:flex-row flex-col gap-4">
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        // variant="bordered"
                        className="capitalize text-gray-300 bg-transparent lg:w-1/4 md:w-1/2 sm:w-full flex items-center justify-between border border-gray-800"
                    >
                        {selectedCountry}
                        <img src={drop} width={20} height={20} className="object-contain" />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedCountries={selectedCountries}
                    onSelectionChange={setSelectedCountries}
                >
                    {uniqueCountries.map(uniqueCountry => (
                        <DropdownItem key={`${uniqueCountry}`}>{uniqueCountry}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>

            <Dropdown>
                <DropdownTrigger>
                    <Button
                        // variant="bordered"
                        className="capitalize text-gray-300 bg-transparent lg:w-1/4 md:w-1/2 sm:w-full flex items-center justify-between border border-gray-800"
                    >
                        {selectedHeight}
                        <img src={drop} width={20} height={20} className="object-contain" />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedHeight={selectHeight}
                    onSelectionChange={setSelectedHeight}
                >
                    {uniqueHeight.map(height => (
                        <DropdownItem key={`${height}`}>{height}m</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>

            <Dropdown>
                <DropdownTrigger>
                    <Button
                        // variant="bordered"
                        className="capitalize text-gray-300 bg-transparent lg:w-1/4 md:w-1/2 sm:w-full flex items-center justify-between border border-gray-800"
                    >
                        {isActive}
                        <img src={drop} width={20} height={20} className="object-contain" />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectActive={selectActive}
                    onSelectionChange={setIsActive}
                    className='text-gray-900'
                >
                    <DropdownItem key="yes">Yes</DropdownItem>
                    <DropdownItem key="no">No</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <Button
                color="primary"
                variant="solid"
                // onPress={() => sendToParent(params())}
                onClick={() => {
                    sendToParent(params())
                    setFilteredRockets([{name: 'Gustavo'}])
                }}
                className="capitalize text-[0.78rem] lg:w-1/4 md:w-1/2 sm:w-full text-gray-300"
            >
                Search
            </Button>

        </div>
    )
}

