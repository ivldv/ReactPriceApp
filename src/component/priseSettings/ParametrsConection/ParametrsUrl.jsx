import React from 'react';
import Myinput1 from "../../../UI/Myinput1";

const ParametrsUrl = ({ftp,selectidParam,setSelectidParam,deleteTimeCount}) => {
    console.log('ParametrsUrl',selectidParam);
    return (
        <>
            <div className="connectionContentFields">
                <Myinput1 changeMyinput1 = {{selectidParam,setSelectidParam}}
                          name='urlHost'
                          placeholder="URL-адрес файла"
                          style={{width: '300px'}}
                          value = {selectidParam.urlHost}>

                          Электронный адрес ресурса
                </Myinput1>
                <Myinput1 changeMyinput1 = {{selectidParam,setSelectidParam}}
                          name = 'urlLoginForm'
                          placeholder="Имя поля ввода логина"
                          style={{width: '300px'}}>
                    Поле ввода логина</Myinput1>
                <Myinput1 changeMyinput1 = {{selectidParam,setSelectidParam}}
                          name ='urlLogin'
                          placeholder="Логин пользователя"
                          style={{width: '300px'}}>
                    Логин пользователя</Myinput1>
                <Myinput1 changeMyinput1 = {{selectidParam,setSelectidParam}}
                          name = 'urlPasswordForm'
                          placeholder="Имя поля ввода пароля"
                          style={{width: '300px'}}>
                    Поле ввода пароля</Myinput1>
                <Myinput1 changeMyinput1 = {{selectidParam,setSelectidParam}}
                          name = 'urlPassword'
                          placeholder="Пароль пользователя"
                          style={{width: '300px'}}>
                    Пароль пользователя</Myinput1>
                <div className="addTimes">
                    {selectidParam.timeCount.map(item =>
                        <Myinput1 key = {item.id} changeMyinput1 = {{selectidParam,setSelectidParam}}
                                  name= 'timeCount'
                                  placeholder="В формате ЧЧ:ММ - ЧЧ:ММ"
                                  del = "0"
                                  deleteTimeCount={deleteTimeCount}
                                  idDiv={item.id}
                                  style={{width: '270px'}}>
                            Интервал обработки</Myinput1>
                    )}
                </div>
            </div>
            <div className="priceFormLay">
                <input type="button" className="styler checkUrl"
                         value="Проверить URL-соединение"
                         style={{float: 'right',marginRight:'4px',width:'320px'}}/>
            </div>
        </>
            )
};

export default ParametrsUrl;