import React, {useEffect, useState} from "react";
import styles from "./style.module.scss"
import titlesArray from "../../title";
import Header from "../Header/index";
import FormHooks from "./FormsHooks/FormHooks";
// import userEvent from "@testing-library/user-event";

export default function ActiveUsers() {

    const [titles, setTitles] = useState(titlesArray);
    const [ageSum, setAgeSum] = useState(0);

    const calculateAgeSum = () => {
        const sum = titles.reduce((acc, element) => {
            return acc + Number(element.age)
        }, 0);
        setAgeSum(sum)
    };

    const [onlyJS, setOnlyJS] = useState(true);

    useEffect(() => {
        checkIfOnlyJS();
    }, [titles]);

    const checkIfOnlyJS = () => {
        const textJS = titles.every((element) => {
            return element.course === "JavaScript";
        });
        setOnlyJS(textJS)
    };

    const [someJS, setSomeJS] = useState(false);

    useEffect(() => {
        checkIfSomeJS();
    }, [titles]);

    const checkIfSomeJS = () => {
        const textJS = titles.some((element) => {
            return element.course === "JavaScript";
        });
        setSomeJS(textJS)
    };

    useEffect(() => {
        calculateAgeSum();
    }, [titles]);

    const searchHandler = (event) => {
        const value = event.target.value;
        const newTitles = titlesArray.filter((elem) => {
            return elem.name.includes(value);
        });
        setTitles(newTitles)
    };


    const deleteHandler = (id, e) => {
        console.log(e);
        const newTitles = titles.filter((elem) => {
            return elem.id !== id
        });
        setTitles(newTitles);
    };


    const cloneHandler = (id) => {
        const item = titles.find((elem) => {
            return elem.id === id
        });
        const newItem = {...item, id: titles.length};
        console.log(item, newItem);
        const newTitles = [...titles, newItem];
        setTitles(newTitles);
    };

    useEffect(() => {
        console.log(styles.change);
        const themeButton = document.querySelector('.button-change');
        themeButton.addEventListener('click', (event) => {
            document.body.classList.toggle('change');
            console.log(event);

        });
    }, []);

    const addNewUser = function (newUser) {
        const newItem = {...newUser, id: titles.length};
        setTitles([...titles, newItem]);
        console.log(newUser);
        console.log(newItem);
    };

    return (
        <>
            <Header/>
            <div className={`${styles.table}`}>
                <div className="container">
                    <div className={`${styles.table_header}`}>
                        <div className={`${styles.table_header_col} ${styles.table_header_col_name}`}>Name</div>
                        <div className={`${styles.table_header_col} ${styles.table_header_col_lastName}`}>Last Name
                        </div>
                        <div className={`${styles.table_header_col} ${styles.table_header_col_age}`}>Age</div>
                        <div className={`${styles.table_header_col} ${styles.table_header_col_course}`}>Course</div>
                        <div className={`${styles.table_header_col} ${styles.table_header_col_id}`}>id</div>
                        <div className={`${styles.table_header_col} ${styles.table_header_col_action}`}>Action</div>
                    </div>
                    <div className={`${styles.table_body}`}>
                        {titles.map(
                            title => <div className={styles.table_body_row}
                                          key={title.id}
                            >
                                <div
                                    className={`${styles.table_body_col} ${styles.table_body_col_name}`}>{title.name}</div>
                                <div
                                    className={`${styles.table_body_col} ${styles.table_body_col_lastName}`}>{title.lastName}</div>
                                <div
                                    className={`${styles.table_body_col} ${styles.table_body_col_age}`}>{title.age}</div>
                                <div
                                    className={`${styles.table_body_col} ${styles.table_body_col_course}`}>{title.course}</div>
                                <div className={`${styles.table_body_col} ${styles.table_body_col_id}`}>{title.id}</div>
                                <button onClick={(e) => deleteHandler(title.id, e)}
                                        className={`${styles.table_body_col} ${styles.table_body_col_delete} `}>Delete
                                </button>
                                <button onClick={() => cloneHandler(title.id)}
                                        className={`${styles.table_body_col} ${styles.table_body_col_clone}`}>Clone
                                </button>
                            </div>
                        )}
                    </div>
                    <div>Sum age: {ageSum}</div>
                </div>
                <input type="text" placeholder='search' onChange={searchHandler}/>
                <button className='button-change'>Theme</button>
                {titles.length === 0 ? <span>No items</span> :
                    <React.Fragment>
                        {onlyJS ? <p>{'Only JavaScript'}</p> : <p>{'All technologies'}</p>}
                        {someJS ? <p>{'Some JavaScript'}</p> : <p>{'No any JavaScript'}</p>}
                    </React.Fragment>
                }
                <FormHooks addNewUserHandler={addNewUser}/>
            </div>
        </>
    )
}



