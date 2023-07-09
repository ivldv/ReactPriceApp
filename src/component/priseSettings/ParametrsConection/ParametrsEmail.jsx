import React from 'react';
import MySelect from "../../../UI/MySelect";
import Myinput1 from "../../../UI/Myinput1";

const ParametrsEmail = ({mail,selectidParam,setSelectidParam,deleteTimeCount}) => {
    //console.log('ParametrsEmail',mail);
    const emails = mail.setting.resp.emails;
    //const set = mail.set;
    const addPriceListSender = ()=>{
        let sender = selectidParam.priceListSender;
        sender.push({id: Date.now(),email:''});
        setSelectidParam(()=> {return {...selectidParam,priceListSender:sender}})
    }
    const deletePriceListSender =(e) => {
        let arr = selectidParam.priceListSender.filter( (item) => item.id !== Number(e.target.parentElement.id));
        setSelectidParam({...selectidParam,priceListSender:arr});
    }
    /*const changePriceListSender = (e)=>{
        console.log('ParametrsEmail->changePriceListSender',e.target.value);
        let arr = Object.assign([], selectidParam.priceListSender);
        let index = arr.findIndex(item => item.id === Number(e.target.parentElement.id));
        arr[index] = {...arr[index],email:e.target.value};
        setSelectidParam({...selectidParam,priceListSender:arr});
    }*/
    return (
        <div>
            <div className="addConnectMail" onClick={addPriceListSender}><span className="addMail">«добавить отправителя»</span></div>
            <div className="connectionContentFields">
                <div className="priceFormLay">
                    <span className="priceFormTitle"><span>Выберите EMAIL-соединение</span>*</span>
                        <MySelect
                            value = {selectidParam.selectidEmail.id}
                            onChange={emailid => setSelectidParam({...selectidParam,selectidEmail:emails[emailid-1] })}
                            defaultvalue='-- выберите соединение --' options={emails} style={{width: '298px'}}></MySelect>
                </div>
                <Myinput1 changeMyinput1 = {{selectidParam,setSelectidParam}}
                          name='selectedTopic'
                          placeholder="Тема входящего сообщения"
                          style={{width: '300px'}}
                          value = {selectidParam.selectedTopic}>
                    Тема сообщения
                </Myinput1>
                <Myinput1 changeMyinput1 = {{selectidParam,setSelectidParam}}
                          name='attachedFile'
                          placeholder="Название прикрепленного файла"
                          style={{width: '300px'}}
                          value = {selectidParam.attachedFile}>
                    Прикрепленный файл
                </Myinput1>

                <div className="addMails">
                    {selectidParam.priceListSender.map(item =>
                        <Myinput1 key = {item.id} changeMyinput1 = {{selectidParam,setSelectidParam}}
                                  name= 'priceListSender'
                                  placeholder="Адрес отправителя прайс-листа"
                                  del = "0"
                                  deleteTimeCount={deletePriceListSender}
                                  idDiv={item.id}
                                  style={{width: '270px'}}
                                  value = {item.time}>
                            Отправитель прайс-листа</Myinput1>
                    )}
                </div>

                <div className="addTimes">
                    {selectidParam.timeCount.map(item =>
                        <Myinput1 key = {item.id} changeMyinput1 = {{selectidParam,setSelectidParam}}
                                  name= 'timeCount'
                                  placeholder="В формате ЧЧ:ММ - ЧЧ:ММ"
                                  del = "0"
                                  deleteTimeCount={deleteTimeCount}
                                  idDiv={item.id}
                                  style={{width: '270px'}}
                                  value = {item.time}>>
                            Интервал обработки</Myinput1>
                    )}
                </div>
            </div>
        </div>
    );
};
/*
                           <div>
                                <input type="text" className="styler priceFormValue requare"
                                   placeholder="Адрес отправителя прайс-листа" style={{width:'267px'}}
                                   value={sender}/>
                                <img src="images/remove.png" className="removeMail"/>
                            </div>
 */
export default ParametrsEmail;