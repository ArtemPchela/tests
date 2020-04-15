import React, {useState} from "react";
import styles from "../DialogWindow/style.module.scss";
import dialog from "../DialogWindow/icon/dialog.svg";
import add from "../DialogWindow/icon/add.svg";


export default function ToggleModal() {
    const [showDialog, setShowDialog] = useState(false);
    const toggle = () => setShowDialog(!showDialog);

    return (
        <div className={`${styles.icon}`} onClick={toggle}>
            <img className={`${showDialog ? " " : styles.icon_toggle}`} src={showDialog ? dialog : add}
                 alt="icon"/>
        </div>
    )
}
