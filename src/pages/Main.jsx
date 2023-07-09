import React from 'react';
import {Link, useLoaderData} from "react-router-dom";
import css from './Maincss.module.css';
import PriceTableHead from "../component/priceTable/PriceTableHead";
import PriceTableBody from "../component/priceTable/PriceTableBody";
import '../styles/style_aop.css';
import '../styles/pricetable/pricetable.css'
const Main = () => {
    const lines = useLoaderData()
    //console.log('Main-->',allSettings);
    return (
        <>
           <h1>Main</h1>
            <table className="priceTable">
                <PriceTableHead/>
                <PriceTableBody lines = {lines}/>
            </table>
            <Link className={css.Link} to={`/Page1`}>Новая настройка</Link>
        </>
    );
};
const mainLoader = async ({reqest,params})=>{
    console.log('mainLoader',reqest,params);
    const res = await fetch( 'https://el.center/ivldv/Api.php?q=table');
    return res.json();
}
export {Main,mainLoader};