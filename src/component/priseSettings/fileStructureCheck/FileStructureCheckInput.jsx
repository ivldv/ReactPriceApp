import React from 'react';
const FileStructureCheckInput = ({children,type,value,...props}) => {
    //console.log('FileStructureCheckInput',children,value,props)
    return (
        <div  {...props}>
                <span className="priceFormTitle hiddenTitle">
                    <span>{props.children}</span>
                </span>
            <input type={type} className="styler priceFormValue requare" style={{width:"97%"}}
                    name = {props.name}

                   value = {(value !== 0)?value: ''} placeholder={children} />
        </div>
    );
};

export default FileStructureCheckInput;