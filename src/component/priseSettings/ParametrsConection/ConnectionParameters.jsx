import React from 'react';
import css1 from "../../../styles/pricesettings/fileStructureCheck.module.css";
import ParametrsEmail from "./ParametrsEmail";
import ParametrsFTP from "./ParametrsFTP";
import ParametrsUrl from "./ParametrsUrl";

const ConnectionParameters = (setting) => {
    //console.log('ConnectionParameters',setting)
    const {selectidParam,setSelectidParam} = setting.param;
    /*const [selectidParam,setSelectidParam] = useState({
        selectidEmail:'',
        selectedTopic:'',
        attachedFile:'',
        priceListSender:[{id: Date.now(),email:''}],
        serverFtp:'',
        userFtp:'',
        passwordFtp:'',
        catalogFtp:'',
        filePriceFtp:'',
        urlHost:'',
        urlLoginForm:'',
        urlLogin:'',
        urlPasswordForm:'',
        urlPassword:'',
        timeCount:[{id: Date.now(),time:''}]
    })*/
    const addTimeCount = (e)=>{
        let sender = selectidParam.timeCount;
        sender.push({id: Date.now(),time:''});
        setSelectidParam(()=> {return {...selectidParam,timeCount:sender}})
    }
    const deleteTimeCount =(e) => {
        console.log('deleteTimeCount')
        let arr = selectidParam.timeCount.filter( (item) => item.id !== Number(e.target.parentElement.id));
        setSelectidParam({...selectidParam,timeCount:arr});
    }

    return (
        <div className={css1.TopBlock}>
            <div className = {css1.verifyContentCaption} > ПАРАМЕТРЫ СОЕДИНЕНИЯ </div>
                <div className={css1.verifyContent}>
                    <div className="connectionContent">
                        <div className={css1.addTimeMail}
                        onClick={addTimeCount}><span className="addTime">«добавить интервал обработки»</span></div>
                    {setting.setting.fileLocation === "EMAIL"
                        ? <ParametrsEmail mail = {setting}
                                          deleteTimeCount={deleteTimeCount}
                                          selectidParam = {selectidParam}
                                          setSelectidParam ={setSelectidParam}/>
                        :''}
                    {setting.setting.fileLocation === "FTP"
                        ? <ParametrsFTP ftp = {setting}
                                        deleteTimeCount={deleteTimeCount}
                                        selectidParam = {selectidParam}
                                        setSelectidParam ={setSelectidParam}/>
                        :''}
                    {setting.setting.fileLocation === "SFTP"
                        ? <ParametrsFTP ftp = {setting}
                                        deleteTimeCount={deleteTimeCount}
                                        selectidParam = {selectidParam}
                                        setSelectidParam ={setSelectidParam}/>
                        :''}
                    {setting.setting.fileLocation === "URL"
                        ?<ParametrsUrl url = {setting}
                                       deleteTimeCount={deleteTimeCount}
                                       selectidParam = {selectidParam}
                                       setSelectidParam ={setSelectidParam}/>
                        :''}
                    </div>
                </div>
        </div>
    );
};

export default ConnectionParameters;