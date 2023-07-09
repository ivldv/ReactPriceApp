import React from 'react';
import '../../styles/description.css';
import FileArchive from "../fileArchive/fileArchive";
const PriceDescription = ({setting,set}) => {
    //console.log('PriceDescription',setting);
    return (
        <div className="main">
            <div className="half left">
                <div className="priceLay">
                    <input type="checkbox" id="is_arc" name="is_arc" checked={setting.packed}
                       onChange={event => set({...setting,packed: event.target.checked})}/>
                    <label htmlFor="is_arc"> Прайс-лист упакован в архив</label>
                </div>
                <div className="priceLay">
                    <input type="checkbox" id="is_auto" name="is_auto" checked={setting.loadAvtomat}
                       onChange={event => set({...setting,loadAvtomat: event.target.checked})}/>
                    <label htmlFor="is_auto" >Загружать прайс-лист автоматически</label>
                </div>
                <div className="priceLay">
                    <input type="checkbox" id="new_catalogs" name="new_catalogs" checked={setting.createNew}
                       onChange={event => set({...setting,createNew: event.target.checked})}/>
                    <label htmlFor="new_catalogs" >Не создавать новые каталоги</label>
                </div>
                <div className="priceLay">
                    <input type="checkbox" id="file_null_exist" name="FileNulExist" checked={setting.clearFile}
                       onChange={event => set({...setting,clearFile: event.target.checked})}/>
                    <label htmlFor="file_null_exist" >Дополнительная очистка файла прайс-листа</label>
                </div>
                <div className="priceLay">
                    <input type="checkbox" id="ignore_errors" name="ignore_errors" checked={setting.downloadWithoutPriceLimits}
                       onChange={event => set({...setting,downloadWithoutPriceLimits: event.target.checked})}/>
                    <label htmlFor="ignore_errors">Загружать без учета ценовых ограничений</label>
                </div>
                <div className="priceLay">
                    <input type="checkbox" id="only_existence" name="only_existence" checked={setting.tariffPrices}
                       onChange={event => set({...setting,tariffPrices: event.target.checked})}/>
                    <label htmlFor="only_existence" >Цены по тарифу</label>
                </div>
                <div className="priceLay">
                    <input type="checkbox" id="minpart_tariff" name="minpart_tariff" disabled={!setting.tariffPrices}
                       onChange={event => set({...setting,minBatchByTariff: event.target.checked})}/>
                    <label htmlFor="minpart_tariff" >Мин. партия по тарифу</label>
                </div>
                <div className="priceLay">
                    <input type="checkbox" id="unit_tariff" name="unit_tariff" disabled={!setting.tariffPrices}
                       onChange={event => set({...setting,tariffUnit: event.target.checked})}/>
                    <label htmlFor="unit_tariff">Ед. изм. по тарифу</label>
                </div>
            </div>

            <div className="half right ">
                <div className="priceLay">
                    <span className="priceFormTitle"><span>Формат файла прайс-листа</span>*</span>
                        <select id="fileType" className="inputs"
                                onChange={event => set({...setting,fileType: event.target.value})}>>
                            <option value="XLS" selected="selected">XLS - Excel файл</option>
                            <option value="CSV">CSV - Текстовый файл с разделителями</option>
                            <option value="TXT">TXT - Текстовый файл</option>
                            <option value="DBF">DBF - Файл базы данных</option>
                        </select>
                </div>
                <div className="priceLay" >
                    <span className="priceFormTitle"><span>Наименование листа в файле</span></span>
                    <input type="text" className="inputs styler priceFormValue" name="excelSheetName"
                           onChange={event => set({...setting,excelSheetName: event.target.value})}
                           placeholder="Наименование листа в файле"
                           value={setting.excelSheetName}/>
                </div>
                <div className="priceLay">
                    <span className="priceFormTitle"><span>Валюта файла прайс-листа</span>*</span>
                    <input type="hidden" className="inputs priceFormValue requare" name="currency_code" value="643"/>
                    <select id="currency_code" className="inputs"
                        onChange={event => set({...setting,currency: event.target.value})}>
                        {setting.resp.currency.map(cur =>
                            (cur.id_cur !== '643')?<option value={cur.id_cur} key={cur.id_cur}>{cur.curabbr}</option>:
                                <option selected="selected" value={cur.id_cur} key={cur.id_cur}>{cur.curabbr}</option>
                            )}
                    </select>
                </div>
                <div className="priceLay archiveLay">
                    <span className="priceFormTitle"><span>Коэффициент прайс-листа</span></span>
                    <input type="text" className="inputs styler priceFormValue" name="rg_price"
                           placeholder="Коэффициент прайс-листа"  value={setting.listPriceRatio}
                           onChange={event => set({...setting,listPriceRatio: event.target.value})}/>
                </div>
                <div className="priceLay">
                    <span className="priceFormTitle"><span>Местоположение файла</span>*</span>
                    <input type="hidden" className="priceFormValue requare" name="connect_code" value="FTP"/>
                    <select id="connect_code" className="inputs"
                            value={setting.fileLocation}
                            onChange={event => set({...setting,fileLocation: event.target.value})}>
                        <option value="FTP" selected={(setting.fileLocation==='FTP')?'selected':''}>FTP - Сервер ФТП</option>
                        <option value="EMAIL">EMAIL - Электронная почта</option>
                        <option value="SFTP">SFTP - Сервер СФТП</option>
                        <option value="URL">URL - Электронный ресурс</option>
                    </select>
                </div>
                <FileArchive setting = {setting}
                             set={set}/>
            </div>
        </div>
    );
};

export default PriceDescription;