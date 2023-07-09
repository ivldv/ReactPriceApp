import React, {useEffect, useState} from 'react';
import {Link, useLoaderData, useNavigate} from "react-router-dom";
import ErrorBlock from "../component/errorBlock/ErrorBlock";
import PriseSettingsHeader from "../component/priseSettings/PriseSettingsHeader";
import PriceDescription from "../component/priseSettings/PriceDescription";
import FileStructureCheck from "../component/priseSettings/fileStructureCheck/FileStructureCheck";
import ConnectionParameters from "../component/priseSettings/ParametrsConection/ConnectionParameters";
import FileLoadStructure from "../component/priseSettings/fileLoadStructure/FileLoadStructure";
import MyButton from "../UI/MyButton";
import classes from "../UI/css/MyButton.module.css";
import axios from "axios";

const Settings = () => {
    const settings = useLoaderData()
    //console.log('Settings->param',settings);
    const {fileLoadStructureResp,fileStructureCheckResp,flagsResp,selectidParamResp,respons}=settings;
    //console.log('Settings->param',respons);
    const [setting,setSetting] = useState({
        name:'',
        code1c:'',
        packed:false,
        arc_name:'',
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
        load:false,
        resp:respons
    })
    const [selectidParam,setSelectidParam] = useState({
        selectidEmail:{},
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
    const goMain = () => navigate('/',{replase:true});
    //console.log('Settings->setting',setting);

    useEffect(() => {
        console.log('Settings->idLines---------->',respons);
        if (fileLoadStructureResp===undefined){setSetting({...setting,resp:respons});}
        else {
            setSetting({...flagsResp, resp: respons});
            setSelectidParam(selectidParamResp);
            setfileStructureCheck(fileStructureCheckResp);
            setFileLoadStructure(fileLoadStructureResp);
        }},[]);


    function addNewSettings (e) {
        e.preventDefault();
        //console.log('addNewSettings ',setting);

        let err = [];
        if ((setting.name === '') || (setting.code1c === ''))
            err.push({id:Date.now(),text:'Не заполнены обязательные поля Наименование настройки или невыбран поставщик.'});
        if (((setting.fileLocation === 'FTP')||(setting.fileLocation === 'SFTP') ) && ((selectidParam.serverFtp === '')||
            (selectidParam.userFtp === '') || (selectidParam.passwordFtp === '')||(selectidParam.filePriceFtp === '')))
            err.push({id:Date.now(),text:'Не заполнены один или несколько параметров FTP.'});
        if ((setting.fileLocation === 'EMAIL') && ((selectidParam.selectidEmail === '') ||
            //(selectidParam.selectedTopic === '') ||
            //(selectidParam.attachedFile === '') ||
            (selectidParam.priceListSender.length === 0) || (selectidParam.priceListSender[0].email === '')))
            err.push({id:Date.now(),text:'Не заполнены один или несколько параметров EMAIL.'});
        if ((setting.fileLocation === 'URL') && ((selectidParam.urlHost === '')
            //||
            //(selectidParam.urlLoginForm === '') || (selectidParam.urlLogin === '') ||
           //(selectidParam.urlPasswordForm === '') || (selectidParam.urlPassword === '')
            ))
            err.push({id:Date.now(),text:'Не заполнены один или несколько параметров URL.'});
        /*if ((selectidParam.timeCount.length === 0) ||(selectidParam.timeCount[0].time === ''))
            err.push({id:Date.now(),text:'Не заполнен интервал обработки.'});*/
        //console.log('addNewSettings->err',err);
        const flag = (err.length !== 0);
        setError({flag:flag,errortext:err});

        if (flag) return 0;
        const {resp,...asetting} = setting;
        //console.log('addNewSettings',error);
        /*        axios.post('http://el.loc/ivldv/Api1.php', selectidParam)
                    .then(response => console.log('norm!',response))
                    .catch(error => {
                        console.error('There was an error!', error);
                    });*/
        /*await axios.postForm('http://el.loc/ivldv/Api1.php', selectidParam,
            {headers: {'content-type': 'application/x-www-form-urlencoded'}}
        );*/
        const params = new URLSearchParams({ setting: JSON.stringify(asetting) });
        params.append('selectidParam', JSON.stringify(selectidParam));
        params.append('fileStructureCheck', JSON.stringify(fileStructureCheck));
        params.append('fileLoadStructure', JSON.stringify(fileLoadStructure));
        axios.post('https://el.center/ivldv/Api1.php', params);
        //axios.post('http://el.loc/ivldv/Api1.php', params);
        //navigate('/');
        goMain();

    }

    return (
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
                <FileLoadStructure param = {{fileLoadStructure,setFileLoadStructure,setting}}/>
            </div>
            <MyButton onClick = {addNewSettings}>Сохранить</MyButton>
            <Link to="/" className={classes.myBtn} >Отменить</Link>
        </>
    );
};
const settingsLoader = async ({params})=>{
    const ddd =  params.id?'&id='+params.id:'';
    const apiUrl = 'https://el.center/ivldv/Api.php?q=select'+ddd;
    //console.log('settingsLoader',params.id,apiUrl);
    const res = await fetch(apiUrl);
    const resp = await res.json();
    const fileLoadStructureResp = resp.fileLoadStructure;
    const fileStructureCheckResp = resp.fileStructureCheck;
    const flagsResp = resp.flags;
    const selectidParamResp = resp.selectidParam;
    const {fileLoadStructure,fileStructureCheck,flags,selectidParam,...respons} = resp;
    //console.log('settingsLoader',resp)

    return {fileLoadStructureResp,fileStructureCheckResp,flagsResp,selectidParamResp,respons};
}

export {Settings,settingsLoader};