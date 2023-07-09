import React from 'react';
import css from "../../../styles/fileLoadStructure.module.css";
import FileLoadStructureTableHead from "./FileLoadStructureTableHead";
import FileLoadStructureTableBody from "./FileLoadStructureTableBody";
const FileLoadStructure = ({param}) => {
    //console.log('FileLoadStructure',param);
    return (
        <>
            <div className={css.TopBlockfull}>
                <div className = {css.verifyContentCaption} >
                    СТРУКТУРА ЗАГРУЗКИ ФАЙЛА
                </div>
                <div className={css.verifyContent}>
                    <table className={css.priceTable}>
                        <FileLoadStructureTableHead/>
                        <FileLoadStructureTableBody param={param}/>
                    </table>
                </div>
            </div>
        </>
    );
};

export default FileLoadStructure;