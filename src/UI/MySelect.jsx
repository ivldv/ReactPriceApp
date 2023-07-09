import React from 'react';

const MySelect = ({options,defaultvalue,value,onChange,...props}) => {
//const MySelect = (props) => {
    //console.log('MySelect', options)
    return (
        <select value={value}
                onChange={event => onChange(event.target.value)}>
            <option disabled selected value="">{defaultvalue}</option>
            {options.map(option =>
                <option value={option.id} key={option.id}>{option.name}</option>)}
        </select>
    );
};

export default MySelect;