import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const SearchBar = (props) => {
    return (
        <Dropdown
            placeholder='Locations'
            fluid
            multiple
            search
            selection
            options={props.locations}
            onChange={props.handleChange}
        />
    )
}

export default SearchBar;
