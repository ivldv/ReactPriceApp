import React from 'react';
import css from "../../../styles/fileLoadStructure.module.css";
const FileLoadStructureTableBody = ({param}) => {
    console.log('FileLoadStructureTableBody',param);
    const val = param.fileLoadStructure;
    let prizn = false;
    if (param.setting.fileLocation === 'CSV')prizn = true;
    const changeInput =(e)=>{
        //console.log(e.target.name);
        param.setFileLoadStructure({...val,[e.target.name]:e.target.value})
    }
    return (

       <tbody>
            <tr>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue}  name="numrow" placeholder="№ строки"
                           value={val.numrow}
                           onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue}  name="number" placeholder="№ строки"
                    value={val.number}
                    onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue} name="supnumber" placeholder="№ столбца"
                           value={val.supnumber}
                           onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue} name="brand" placeholder="№ столбца"
                           value={val.brand}
                           onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue} name="name" placeholder="№ столбца"
                           value={val.name}
                           onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue} name="quantity" placeholder="№ столбца"
                           value={val.quantity}
                           onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue} name="measure" placeholder="№ столбца"
                           value={val.measure}
                           onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue} name="measurename" placeholder="Ед.изм."
                           value={val.measurename}
                           onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue} name="price" placeholder="№ столбца"
                           value={val.price}
                           onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue} name="weight" placeholder="№ столбца"
                           value={val.weight}
                           onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue} name="minpart" placeholder="№ столбца"
                           value={val.minpart}
                           onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue} name="brandname" placeholder="Каталог"
                           value={val.brandname}
                           onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue} name="rg" placeholder="№ столбца"
                           value={val.rg}
                           onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter}>
                    <input type="text" className={css.priceFormValue} name="totalrow" placeholder="№ столбца"
                           value={val.totalrow}
                           onChange={changeInput}/>
                </td>
                <td className={css.tcellCenter} >
                    <select id="separatorCode" className={css.priceFormSelect} name="separatorCode" disabled={prizn}
                            onChange={changeInput}>
                        <option value="59">«;»</option>
                        <option value="44">«,»</option>
                        <option value="9">«TAB»</option>
                    </select>
                </td>
                <td className={css.tcellCenter}>
                    <select id="eolCode" className={css.priceFormSelect} name="eolCode" disabled={prizn}
                            onChange={changeInput}>
                        <option value="\r\n">« \r\n »</option>
                        <option value="\n">« \n »</option>
                    </select>
                </td>
            </tr>
       </tbody>
    );
};

export default FileLoadStructureTableBody;