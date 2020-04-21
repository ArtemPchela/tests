// import React from "react";
//
//
//
// export default function SupportChat() {
//     const [showDialog, setShowDialog] = useState(false);
//     const toggle = () => setShowDialog(!showDialog);
//
//     const [valueInput, setValueInput] = useState("");
//
//     // const [newNote, setNewNote] = useState([{
//     //     id: [],
//     //     title: ""
//     // }]);
//     // const note = (e) => {
//     //     setNewNote(...valueInput)
//     // }
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(valueInput);
//     }
//
//     return (
//         <section className={`${styles.supportChat}`}>
//             <div className={`${styles.content}`}>
//                 <div className={`${styles.content_text}`}>
//                     <ul>
//                         {newNote}
//                     </ul>
//                 </div>
//                 <ToggleModal toggle={toggle} showDialog={showDialog}/>
//
//                 {showDialog && <div className={`${styles.content_modal}`}>
//                     <div className={`${styles.content_modal_header}`}>
//                         Support team welcomes your
//                     </div>
//                     <div className={`${styles.content_modal_content}`}>
//                         <div className={`${styles.content_modal_text}`}>
//                             <p>Some text</p>
//                         </div>
//                     </div>
//
//                     <form className={`${styles.content_modal_formGroup}`} onSubmit={handleSubmit}>
//                         <label className={`${styles.content_modal_formGroup_add}`} type="text">
//                             <p>Add note:</p>
//                             <input
//                                 className={`${styles.input}`}
//                                 type="text"
//                                 placeholder="your note here"
//                                 aria-label="text"
//                                 required
//                                 value={valueInput}
//                                 onChange={e => setValueInput(e.target.value)}
//                             />
//                             <input
//                                 type="submit"
//                                 className={`${styles.input_button}`} />
//                         </label>
//                     </form>
//                 </div>}
//             </div>
//         </section>
//     )
// }
