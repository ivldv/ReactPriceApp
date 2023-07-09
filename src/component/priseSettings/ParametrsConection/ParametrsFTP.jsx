import React from 'react';
import Myinput1 from "../../../UI/Myinput1";

const ParametrsFtp = ({ftp,selectidParam,setSelectidParam,deleteTimeCount}) => {
   // console.log('ParametrsFtp',ftp);
    return (
      <div className="connectionContentFields">
          <Myinput1 changeMyinput1 = {{selectidParam,setSelectidParam}}
                    name='serverFtp'
                    placeholder="Имя или IP-адрес сервера"
                    style={{width: '300px'}}
                    value = {selectidParam.serverFtp}>
              Сервер FTP
          </Myinput1>
          <Myinput1 changeMyinput1 = {{selectidParam,setSelectidParam}}
                    name='userFtp'
                    placeholder="Логин пользователя ФТП сервера"
                    style={{width: '300px'}}
                    value = {selectidParam.userFtp}>
              Пользователь FTP
          </Myinput1>
          <Myinput1 changeMyinput1 = {{selectidParam,setSelectidParam}}
                    name='passwordFtp'
                    placeholder="Пароль пользователя ФТП сервера"
                    style={{width: '300px'}}
                    value = {selectidParam.passwordFtp}>
              Пароль FTP
          </Myinput1>
          <Myinput1 changeMyinput1 = {{selectidParam,setSelectidParam}}
                    name='catalogFtp'
                    placeholder="Каталог ФТП сервера"
                    style={{width: '300px'}}
                    value = {selectidParam.catalogFtp}>
              Каталог на сервере
          </Myinput1>
          <Myinput1 changeMyinput1 = {{selectidParam,setSelectidParam}}
                    name='filePriceFtp'
                    placeholder="Название файла на ФТП сервере"
                    style={{width: '300px'}}
                    value = {selectidParam.filePriceFtp}>
              Файл прайс-листа
          </Myinput1>
              <div className="addTimes">
                  {selectidParam.timeCount.map(item =>
                      <Myinput1 key = {item.id} changeMyinput1 = {{selectidParam,setSelectidParam}}
                                name= 'timeCount'
                                placeholder="В формате ЧЧ:ММ - ЧЧ:ММ"
                                del = "0"
                                deleteTimeCount={deleteTimeCount}
                                idDiv={item.id}
                                style={{width: '270px'}}
                                value = {item.time}>
                          Интервал обработки</Myinput1>
                  )}
              </div>

      </div>
    );
};

export default ParametrsFtp;