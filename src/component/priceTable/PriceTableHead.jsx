import React from 'react';

const PriceTableHead = () => {
    return (

       <thead>
            <tr>
                <th className="tcell">№ п.п.</th>
                <th className="tcell">Наименование<br/>настройки</th>
                <th className="tcell">Дата/время<br/>изменения</th>
                <th className="tcell">Последняя<br/>загрузка</th>
                <th className="tcell">Код<br/>поставщика</th>
                <th className="tcell">Способ<br/>получения</th>
                <th className="tcell">Автоматическая<br/>загрузка</th>
                <th className="tcell">Статистика<br/>загрузки</th>
                <th className="tcell" colSpan="5">Опции для настройки</th>
            </tr>
       </thead>
    );
};

export default PriceTableHead;