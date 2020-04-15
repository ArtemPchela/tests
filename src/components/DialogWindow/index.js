import React, {useState} from "react";
import Header from "../Header";
import ToggleModal from "../ToggleModal";
import dialog from "./icon/dialog.svg";
import add from "./icon/add.svg";
import styles from "./style.module.scss";

export default function DialogWindow() {
    const [showDialog, setShowDialog] = useState(false);
    const toggle = () => setShowDialog(!showDialog);
    const [showModal, setShowModal] = useState(false);

        const open = () => {
            setShowModal(true)
        }

        const close = () => {
            setShowModal(false)
        }



    return (
        <>
            <Header />
            <div className={`${styles.content}`}>
                <div className={`${styles.content_text}`}>


                </div>

                {/*<div className={`${styles.content_icon}`} onClick={toggle}>*/}
                {/*    <img className={`${showDialog ? " " : styles.content_icon_toggle}`} src={showDialog ? dialog : add} alt="icon"/>*/}
                {/*</div>*/}
                <ToggleModal />

                <div className={`${styles.content_modal}`} >
                    <div className={`${styles.content_modal_header}`}>
                        Support team welcomes your
                    </div>
                    <div className={`${styles.content_modal_content}`}>
                        <div className={`${styles.content_modal_text}`}>
                            <p>Some text</p>
                        </div>
                    </div>
                    <div className={`${styles.content_modal_formGroup}`}>
                        <label className={`${styles.content_modal_formGroup_add}`} type="text">Add note:</label>
                            <input type="text"
                                   placeholder="Your answer here:"
                                   aria-label="Search"
                                   value=""/>

                        <button className={`${styles.content_modal_button}`}></button>
                    </div>
                </div>
            </div>
        </>
    )
}
