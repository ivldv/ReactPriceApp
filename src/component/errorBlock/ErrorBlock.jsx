import React from 'react';
import css from '../../styles/error.module.css';
const ErrorBlock = ({err,setErr}) => {
    const clearError = ()=>setErr({flag:false,errortext:[]});
    if (err.flag)
    return (
        <div className={css.blure}>
            <div className={css.window}>
                <ul>
                    <h3>При заполнении формы допущены ошибки</h3>
                    {err.errortext.map(item =>
                        <li key={item.id}>{item.text}</li>
                    )}
                </ul>
                <div className={css.button} onClick={clearError}>Назад</div>
            </div>
        </div>
    );
};

export default ErrorBlock;