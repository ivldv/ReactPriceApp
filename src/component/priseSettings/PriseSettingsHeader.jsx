import React from 'react';
import "../../styles/pricesettings/pricesettingsHeader.css";
const PriseSettingsHeader = ({setting,set}) => {
    //console.log('PriseSettingsHeader',setting);
    const sellers = setting.resp.descr;
    return (
        <>
            <div className="all" >
                <div className="column leftColumn">
                    <div className="lines">
                        <span className="priceFormTitle" ><span>Наименование настройки</span>*</span>
                    </div>
                    <div className="lines">
                        <span className="priceFormTitle"><span>Выберите поставщика из списка доступных поставщиков</span></span>
                    </div>
                </div>
                <div className="column rightColumn">
                    <input type="text"
                           onChange={event => set({...setting,name: event.target.value})}
                           className="styler priceFormValue requare"
                           name="setting_name"
                           placeholder="Наименование настройки автоматического обновления"
                           value={setting.name}/>
                    <input type="hidden" className="priceFormValue supplier" name="supplier_code" value="БП-000558"/>
                    <select id="supplier_code"
                            className="select"
                            onChange={event => {set({...setting,code1c: event.target.value})}}
                            value={setting.code1c}>
                        <option disabled selected value="">-- выберите поставщика --</option>
                        {sellers.map(seller =>
                            <option value={seller.code1c} key={seller.code1c}>{seller.code1c}</option>
                        )}
                    </select>
                </div>
            </div>
        </>
    );
};

export default PriseSettingsHeader;