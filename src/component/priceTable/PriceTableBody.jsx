import React from 'react';
import PriceTableLines from "./PriceTableLines";

const PriceTableBody = ({lines}) => {
    //console.log('type' ,typeof(lines) === undefined);
    if(typeof(lines) === 'undefined') return <p>NO DATA</p>
    return (
        <tbody>

        {lines.map((line,index) =>
            <PriceTableLines line={line} index={index+1} key = {line.id}/>
        )}
        </tbody>
    );
};

export default PriceTableBody;