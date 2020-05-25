import React, {useEffect, useState, useRef} from "react";
import styles from "./style.module.scss";
import ToggleModal from "../ToggleModal";


export default function SupportChat() {
    const [showDialog, setShowDialog] = useState(false);
    const toggle = () => setShowDialog(!showDialog);

    const [valueInput, setValueInput] = useState("");

    const initialState = [{title: 'Hi! How can I help you?', id: 0}];
    const [modalNote, setModalNote] = useState(initialState);
    const [contentNote, setContentNote] = useState(initialState);

    let timeModal = useRef(null);
    let timeContent = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timeModal.current);
            clearTimeout(timeContent.current);
        }
    }, [])

    const addNote = () => {
        console.log("Message");
        const newContent = [...modalNote, {title: valueInput, id: modalNote.length}];

        timeModal.current = setTimeout(() => {
            setModalNote(newContent);
        }, 1000);
        timeContent.current = setTimeout(() => {
            setContentNote(newContent);
        }, 2000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className={`${styles.supportChat}`}>
            <ol>
                {contentNote.map(note => <li key={note.id}>{note.title}</li>)}
            </ol>

            <ToggleModal toggle={toggle} showDialog={showDialog}/>

            {showDialog && <div className={`${styles.content_modal_wrapper}`}>
                <div className={`${styles.content_modal}`}>
                    <div className={`${styles.content_modal_header}`}>
                        Support team welcomes your
                    </div>
                    <div className={`${styles.content_modal_content}`}>
                        <div className={`${styles.content_modal_text}`}>
                            <ol style={{color: 'red'}}>
                                {modalNote.map(note => {
                                    return (<li key={note.id}>{note.title}</li>)
                                })}
                            </ol>
                        </div>
                    </div>

                    <form className={`${styles.content_modal_formGroup}`} onSubmit={handleSubmit}>

                        <p>Add note:</p>
                        <div className={`${styles.content_modal_formGroup_add}`}>
                            <input
                                className={`${styles.input}`}
                                type="text"
                                placeholder="your note here"
                                aria-label="text"
                                required
                                value={valueInput}
                                onChange={e => setValueInput(e.target.value)}
                            />
                            <input onClick={addNote}
                                   value=""
                                   type="submit"
                                   className={`${styles.input_button}`}/>
                        </div>
                    </form>
                </div>
            </div>}
        </section>
    )
}
