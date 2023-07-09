import React from 'react';
import {Link} from "react-router-dom";
import css from '../../styles/pricetable/PriceTable.module.css'
import axios from "axios";

const PriceTablelines = ({line,index}) => {
   //console.log('PriceTablelines',line,index);
    let lastLoad = line.lastLoad.split(" ");
    let statistics = JSON.parse(line.statistic);
    let percent =0;
    //console.log(statistics);
    if (statistics === null) statistics = {
       InAll :'-',
       Valid :'-'
    }
    if (typeof( statistics.Valid) !== 'string') {
        percent = Math.round(statistics.Valid / statistics.InAll * 100);
    }else{
        percent = 0;
    }
    statistics = {...statistics,Percent:percent}
    //console.log('statistics',statistics);
    const deleteLine = (e)=>{
        //console.log('deleteLine',`http://el.loc/ivldv/Api1.php?q=delete&id=`+e.target.name);
        e.preventDefault();
        axios.get(`https://el.center/ivldv/Api1.php?q=delete&id=`+e.target.name);
    }
    /*const mainLoader = async ({reqest,params})=>{
        //console.log('mainLoader',reqest,params);
        const res = await fetch( 'http://el.loc/ivldv/Api.php?q=table');
        return res.json();
    }*/

    function loadPrice(e) {
        e.preventDefault();
        //console.log('deleteLine',`http://el.loc/ivldv/PreparePrice.php?q=downloadPriceList&id=`+e.target.name);
        axios.get(`https://el.center/ivldv/PreparePrice.php?q=downloadPriceList&id=`+e.target.name);

    }
    return (
        <tr className="greenline">
                <td className="tcell tcenter">{index}</td>
                <td className="tcell tleft">{line.name}</td>
                <td className="tcell tcenter">{line.date}<br/>11:05:12</td>
                <td className="tcell tcenter"><a href='/' className="checkUpload"
                                                 title="Получить статистику по загрузке">{lastLoad[0]}<br/>{lastLoad[1]}</a>
                </td>
                <td className="tcell tcenter tsupplier">{line.supplierCode}
                    <div><a target="_blank" href={line.logsHref}>логи загрузки</a></div>
                </td>
                <td className="tcell tcenter">{line.fileLocation}</td>
                <td className="tcell tcenter">{(line.loadAvtomat)?'включена':'выключена'}</td>
                <td className="tcell tcenter">{statistics.Valid} из {statistics.InAll}<br/><strong>КПД: </strong>{statistics.Percent}%</td>
                <td className="tcell tcenter">
                    <input type="button" name={`${line.id}`} className={css.buttons}
                           title="Однократная загрузка без учёта ценовых ограничений"
                           onClick={loadPrice }
                           value="Подгрузить принудительно"/>
                </td>
                <td className="tcell tcenter">
                    <Link to={`/Page1/${line.id}`} className={css.buttons}>Изменить</Link>
                    {/* <input type="button" name="editPrice" className="styler"
                                                     value="idLines"/>*/}
                </td>
                <td className="tcell tcenter">
                    <Link to={`/Page1/${line.id}`} className={css.buttons}>Скопировать</Link>
                </td>
                <td className="tcell tcenter"><input type="button" name="showhidePrice" className={css.buttons}
                                                     value="Скрывать прайс"/></td>
                <td className="tcell tcenter"><input type="button" name={`deletePrice_${line.id}`} className={css.buttons}
                                                     onClick={deleteLine }
                                                      value="Удалить"/></td>
       </tr>
    );
};

export default PriceTablelines;