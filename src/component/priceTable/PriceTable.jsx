import React from 'react';
import PriceTableHead from "./PriceTableHead";
import PriceTableBody from "./PriceTableBody";
import '../../styles/style_aop.css';
import '../../styles/pricetable/pricetable.css'

const PriceTable = ({lines}) => {
    //console.log('PriceTable :',lines)
    return (
        <>
            <table className="priceTable">
                <PriceTableHead/>
                <PriceTableBody lines = {lines}/>
            </table>
        </>
    );
};

export default PriceTable;