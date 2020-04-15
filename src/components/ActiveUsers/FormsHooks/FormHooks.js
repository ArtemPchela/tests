import React, {useState} from 'react';
import styles from './style.module.scss';
import {useForm} from "react-hook-form";

export default function FormHooks({addNewUserHandler}) {
    const {register, errors} = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formUser = {
            "name": name,
            "lastName": lastName,
            "age": age,
            "course": course,
        };
        addNewUserHandler(formUser);
    };

    const [name, setName] = useState("");

    const [lastName, setLastName] = useState("");

    const [age, setAge] = useState("");

    const [course, setCourse] = useState("");


    return (
        <form className={`${styles.newUser}`} onSubmit={handleSubmit}>
            <p><sup>*</sup>- field necessary to field</p>
            <label className={`${styles.inputForm}`}>
                Name <sup>*</sup> <br/>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value = {name}
                    ref={register}
                    name="name"
                    type="name"
                    required
                    placeholder="name"/>
            </label>
            {errors.name && errors.name.type === "minLength" && (<p>Minimal length 2 letters</p>)}
            <label className={`${styles.inputForm}`}>
                LastName <sup>*</sup> <br/>
                <input
                    onChange={(e) => setLastName(e.target.value)}
                    ref={register({required: true, minLength: 2 })}
                    value = {lastName}
                    name="lastName"
                    required
                    placeholder="lastName"/>
                {errors.lastName && errors.lastName.type === "minLength" && (<p>Minimal length 2 letters</p>)}
            </label>

            <label className={`${styles.inputForm}`}>
                Age <sup>*</sup> <br/>
                <input
                    onChange={(e) => setAge(e.target.value)}
                    value = {age}
                    ref={register}
                    type="age"
                    name="age"
                    required
                    placeholder="age"/>
                {errors.age && (<p></p>)}
            </label>
            <label className={`${styles.inputForm}`}>
                Course <sup>*</sup> <br/>
                <select
                    onChange={(e) => setCourse(e.target.value)}
                    value = {course}
                    ref={register}
                    type="course"
                    name="course"
                    placeholder="course">
                    <option value="">Select course</option>
                    <option value="javaScript">JavaScript</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="php">php</option>
                    <option value="html">HTML</option>
                    <option value="go">Go</option>
                </select>
            </label>
            <button className={`${styles.formSubmit}`} onClick={handleSubmit}>Submit</button>
        </form>
    )
}
