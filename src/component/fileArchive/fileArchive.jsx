import React from 'react';
import '../../styles/description.css';

const FileArchive = ({setting,set}) => {
    if (setting.packed)
    return (
        <>
            <div className="priceLay archiveLay" >
                <span className="priceFormTitle"><span>Файл архива</span></span>
                <input type="text" className="inputs priceFormValue requare" name="arc_name" placeholder="Файл архива"
                       value={setting.arc_name}
                       onChange={event => set({...setting,arc_name: event.target.value})}/>
            </div>
        </>
    );
};

export default FileArchive;