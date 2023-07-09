import React from 'react';
import css1 from "../../../styles/pricesettings/fileStructureCheck.module.css";
import FileStructureCheckLine from "./FileStructureCheckLine";
import img from '../../../images/remove.png'
const FileStructureCheck = ({param}) => {
    console.log('FileStructureCheck',param);
    const {fileStructureCheck,setfileStructureCheck} = param;
    //const [fileStructureCheck,setfileStructureCheck] = useState([])

    const newLine = () =>{
        setfileStructureCheck([...fileStructureCheck,{id: Date.now(),text: '',line: 0 , column:0}])
    }
    const updateLine = (line)=>{
        let copy =Array.from(fileStructureCheck);
        for (let i=0;i<copy.length;i++){
            if (copy[i].id === line.id){
                copy[i].text = line.text;
                copy[i].line = line.line;
                copy[i].column = line.column;
            }
        }
        //console.log('FileStructureCheck->updateLine',fileStructureCheck,line,copy);
        setfileStructureCheck(copy)
    }
    const delLine = (line) =>{
        let copy = Object.assign([],fileStructureCheck)
        for (let i=0;i<copy.length;i++)
            if (copy[i].id === line.id) copy.splice(i,1);
        //console.log('FileStructureCheck->delLine1',fileStructureCheck,line,copy)
        setfileStructureCheck(copy);
    }
    return (
        <div className={css1.TopBlock}>
            <div className = {css1.verifyContentCaption} > ПРОВЕРКА СТРУКТУРЫ ФАЙЛА </div>
            <div className={css1.verifyContent}>
                <button className={css1.addVerifyLine} onClick={newLine}>
                    <span>«добавить параметр»</span>
                </button>
                <input type="hidden" name="verify_count" value="3"/>
                    <div className="verifyTable">
                        <div className={css1.headTable}>
                            <div className={css1.cell1} >Текст ячейки<span>*</span></div>
                            <div className={css1.cell2} >Номер строки<span>*</span></div>
                            <div className={css1.cell2} >Номер столбца<span>*</span></div>
                            <div className={css1.cell4} >
                                <img src={img} style={{paddingLeft:"13px"}} alt='Удалить'/>
                            </div>
                        </div>
                        <div>
                            {fileStructureCheck.map(strCheck =>
                                        <FileStructureCheckLine line = {strCheck}
                                                                del= {delLine}
                                                                update={updateLine}
                                                                key = {strCheck.id}
                                        />)}
                            {fileStructureCheck.length === 0?<div className={css1.emptyList}>Параметры не заданы.</div>:''}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default FileStructureCheck;