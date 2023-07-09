import React from 'react';
import css from "../../../styles/fileLoadStructure.module.css";
const FileLoadStructureTableHead = () => {
    return (

       <thead>
            <tr>
                <th className={css.tcellrequare}>Numrow.</th>
                <th className={css.tcellrequare}>Number</th>
                <th className={css.tcell}>SupNumber</th>
                <th className={css.tcell}>Brand</th>
                <th className={css.tcell}>Name</th>
                <th className={css.tcell}>Qty</th>
                <th className={css.tcell}>Unit</th>
                <th className={css.tcell}>Unitname</th>
                <th className={css.tcell}>Price</th>
                <th className={css.tcell}>Weight</th>
                <th className={css.tcell}>MinPart</th>
                <th className={css.tcell}>BrandName</th>
                <th className={css.tcell}>RG</th>
                <th className={css.tcellrequare}>Total</th>
                <th className={css.tcellrequarelong}>Разделитель</th>
                <th className={css.tcellrequarelong}>EOL</th>
            </tr>
       </thead>
    );
};

export default FileLoadStructureTableHead;