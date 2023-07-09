import React from 'react';
import css from './css/MyInput1.module.css';
import img from '../images/remove.png'
import MyInput from "./MyInput";
const Myinput1 = ({children,del,idDiv,deleteTimeCount,changeMyinput1,...props}) => {
    //console.log('Myinput1',changeMyinput1.selectidParam)
    const changeMy = (e)=>{
        //console.log(e)
        let arr = Object.assign({}, changeMyinput1.selectidParam);
        if(e.target.parentElement.id === '') arr[e.target.name]=e.target.value;
        else{
            let index = arr[e.target.name].findIndex(item => item.id === Number(e.target.parentElement.id));
            arr[e.target.name][index]={id:Number(e.target.parentElement.id),time:e.target.value};
        }
        changeMyinput1.setSelectidParam(arr);
    }

    return (
        <div className={css.priceFormLay}>
            <span className={css.priceFormTitle}><span>{children}</span>*</span>
            {del !== undefined ?
                <div className={css.withdel} id={idDiv}>
                    <MyInput type="text" className="styler priceFormValue requare"
                             onChange={e=>changeMy(e)}
                             {...props}/>
                    <img src={img} alt="Удалить"
                         onClick={deleteTimeCount}
                         className={css.removeTime}/>
                </div>
                :<MyInput type="text" className="styler priceFormValue requare"
                          onChange={e=>changeMy(e)}
                          {...props}/>
            }
        </div>
    );
};

export default Myinput1;