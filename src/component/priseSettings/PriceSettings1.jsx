/*import React, {useEffect, useState} from 'react';
import PriceDescription from "./PriceDescription";
import PriseSettingsHeader from "./PriseSettingsHeader";
import MyButton from "../../UI/MyButton";
import FileStructureCheck from "./fileStructureCheck/FileStructureCheck";
import ConnectionParameters from "./ParametrsConection/ConnectionParameters";
import axios from "axios";
import FileLoadStructure from "./fileLoadStructure/FileLoadStructure";
import ErrorBlock from "../errorBlock/ErrorBlock";
import {Link, useNavigate} from "react-router-dom";
import classes from "../../UI/css/MyButton.module.css";
//const PriceSettings = ({settings}) => {
   // console.log(`PriceSettings->settings `,settings.fileLoadStructure);

    /*const [setting,setSetting] = useState({
        name:'',
        code1c:'',
        packed:false,
        loadAvtomat:true,
        createNew:true,
        clearFile:false,
        downloadWithoutPriceLimits:false,
        tariffPrices:false,
        minBatchByTariff:false,
        tariffUnit:false,
        fileType:'XLS',
        excelSheetName:'',
        currency:'643',
        listPriceRatio:'1.000',
        fileLocation:'FTP',
        emailAddres:[],
        load:false
    })
    const [selectidParam,setSelectidParam] = useState({
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
  })
    const [fileStructureCheck,setfileStructureCheck] = useState([])
    const [fileLoadStructure,setFileLoadStructure] =useState({
        numrow:'',
        number:'',
        supnumber:'',
        brand:'',
        name:'',
        quantity:'',
        measure:'',
        measurename:'',
        price:'',
        weight:'',
        minpart:'',
        brandname:'',
        rg:'',
        totalrow:'',
        separatorCode:'59',
        eolCode:'\r\n'
    });
    const [error,setError] = useState({
        flag:false,
    })
    const navigate = useNavigate();
    const goMain = () => navigate('/',{replase:true});*/

    /*if (settings.fileLoadStructure!==undefined){
        setSelectidParam(settings.selectidParam);
        setfileStructureCheck(settings.fileStructureCheck);
        setFileLoadStructure(settings.fileLoadStructure);
        //setSetting({...flagsResp,resp:respons});
    }else setSetting({...setting,settings});*/

    /*useEffect(() => {
        //console.log(`response.data.Settings `,);
        if (!setting.load) {
            let apiUrl = 'http://el.loc/ivldv/Api.php?q=select';
            if (id!==undefined) apiUrl = apiUrl+"&id="+id;
            axios.get(apiUrl).then((resp) => {
                console.log(`response.data.Settings `,resp.data);
                const fileLoadStructureResp = resp.data.fileLoadStructure;
                const fileStructureCheckResp = resp.data.fileStructureCheck;
                const flagsResp = resp.data.flags;
                const selectidParamResp = resp.data.selectidParam;
                const {fileLoadStructure,fileStructureCheck,flags,selectidParam,...respons} = resp.data;
                console.log(`response.data.Settings1 `,fileLoadStructureResp);
                //setSetting({...setting,load:true,resp:respons});
                if (id!==undefined){
                    setSelectidParam(selectidParamResp);
                    setfileStructureCheck(fileStructureCheckResp);
                    setFileLoadStructure(fileLoadStructureResp);
                    setSetting({...flagsResp,load:true,resp:respons});
                }else setSetting({...setting,load:true,resp:respons});
            });
        }
    });*/
    /*function addNewSettings (e) {
        e.preventDefault();
        //console.log('addNewSettings ',setting);
        let err = [];
        if ((setting.name === '') || (setting.code1c === ''))
            err.push({id:Date.now(),text:'Не заполнены обязательные поля Наименование настройки или невыбран поставщик.'});
        if (((setting.fileLocation === 'FTP')||(setting.fileLocation === 'SFTP') ) && ((selectidParam.serverFtp === '') ||
            (selectidParam.userFtp === '') || (selectidParam.passwordFtp === '') ||
            (selectidParam.catalogFtp === '') || (selectidParam.filePriceFtp === '')))
            err.push({id:Date.now(),text:'Не заполнены один или несколько параметров FTP.'});
        if ((setting.fileLocation === 'EMAIL') && ((selectidParam.selectidEmail === '') ||
            //(selectidParam.selectedTopic === '') ||
            (selectidParam.attachedFile === '') ||
            (selectidParam.priceListSender.length === 0) || (selectidParam.priceListSender[0].email === '')))
            err.push({id:Date.now(),text:'Не заполнены один или несколько параметров EMAIL.'});
        if ((setting.fileLocation === 'URL') && ((selectidParam.urlHost === '') ||
            (selectidParam.urlLoginForm === '') || (selectidParam.urlLogin === '') ||
            (selectidParam.urlPasswordForm === '') || (selectidParam.urlPassword === '')))
            err.push({id:Date.now(),text:'Не заполнены один или несколько параметров URL.'});
        /*if ((selectidParam.timeCount.length === 0) ||(selectidParam.timeCount[0].time === ''))
            err.push({id:Date.now(),text:'Не заполнен интервал обработки.'});*/
        /*console.log('addNewSettings->err',err);
        const flag = (err.length !== 0);
        setError({flag:flag,errortext:err});

            if (flag) return 0;
            const {resp,...asetting} = setting;
            console.log('addNewSettings',error);
            /*        axios.post('http://el.loc/ivldv/Api1.php', selectidParam)
                        .then(response => console.log('norm!',response))
                        .catch(error => {
                            console.error('There was an error!', error);
                        });*/
            /*await axios.postForm('http://el.loc/ivldv/Api1.php', selectidParam,
                {headers: {'content-type': 'application/x-www-form-urlencoded'}}
            );*/
            /*const params = new URLSearchParams({ setting: JSON.stringify(asetting) });
            params.append('selectidParam', JSON.stringify(selectidParam));
            params.append('fileStructureCheck', JSON.stringify(fileStructureCheck));
            params.append('fileLoadStructure', JSON.stringify(fileLoadStructure));
            axios.post('http://el.loc/ivldv/Api1.php', params);
            //navigate('/');
            goMain();

    }*/
    //console.log(setting);
    //if(!setting.load) return <p>NO DATA</p>
    //console.log(setting);
   /* return (
        <>
            <ErrorBlock err={error} setErr={setError}/>

            <div className="priceFormTable">
            <h2 className="tcell" style={{textAlign: "center"}}>Редактирование настройки </h2>
            <PriseSettingsHeader setting = {setting}
                                 set={setSetting}/>
            <PriceDescription setting = {setting}
                              set={setSetting}/>
            <div style={{display:"flex",flexDirection:"row"}}>
                <FileStructureCheck param = {{fileStructureCheck,setfileStructureCheck}}/>
                <ConnectionParameters setting={setting}
                                      set={setSetting}
                                      param = {{selectidParam,setSelectidParam}}
                    />
            </div>
            <FileLoadStructure param = {{fileLoadStructure,setFileLoadStructure}}/>
        </div>
            <MyButton onClick = {addNewSettings}>Сохранить</MyButton>
            <Link to="/" className={classes.myBtn} >Отменить</Link>
        </>
    );
};

export default PriceSettings;