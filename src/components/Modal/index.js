import React from 'react';
import styles  from './slyle.module.scss';


export default function Modal({text, src, component, closeHandler}) {

    return (

        <div className={`${styles.modal}`}>
            <div className={`${styles.close}`} onClick={closeHandler}>

            </div>
            {text && <p>{text}</p>}
            {src && <img src={src} alt="img" />}
        </div>
    )
}
