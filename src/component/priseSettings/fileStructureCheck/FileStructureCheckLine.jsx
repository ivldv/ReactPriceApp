import React from 'react';
import FileStructureCheckInput from "./FileStructureCheckInput";
import css from "../../../styles/pricesettings/fileStructureCheckLine.module.css";
import img from '../../../images/remove.png'
//const inputNumber = (value)=>{
//    console.log(value);
//}
const FileStructureCheckLine = ({line,del,update}) => {
    //console.log('FileStructureCheckLine->id',line)
    return (
        <div style = {{display:"flex", flexDirection:"row",marginTop:"12px"}}>
            <FileStructureCheckInput type={"text"} value = {line.text} style={{width:"55%"}} name = {"text"}
                onInput = {e =>update({...line,text:e.target.value})}
            >Текст ячейки</FileStructureCheckInput>

            <FileStructureCheckInput type={"number"} value={line.line} style={{width:"20%"}} name = {"line"}
                onInput = {e =>update({...line,line:e.target.value>0 ? e.target.value:0})}
            >Номер строки</FileStructureCheckInput>

            <FileStructureCheckInput type={"number"} value={line.column} style={{width:"20%"}} name = {"column"}
                 onInput = {e =>update({...line,column:e.target.value>0 ? e.target.value:0})}
            >Номер столбца</FileStructureCheckInput>

            <button className={css.border0} onClick={e=> del(line)}>
                <img src={img} alt="Удалить" />
            </button>
        </div>

    );
};

export default FileStructureCheckLine;