import React from "react";
import styles from "./style.module.scss";
import dialog from "../SupportChat/icon/dialog.svg";
import add from "../SupportChat/icon/add.svg";


export default function ToggleModal({toggle, showDialog}) {

    return (
        <div className={`${styles.iconWrapper}`} onClick={toggle}>
            <img className={`${showDialog ? styles.icon_toggle : " "} ${styles.icon}`} src={showDialog ? add : dialog}
                 alt="icon"/>
        </div>
    )
}
