import React, {useState, useEffect} from "react";
import Header from "../Header";
import styles from "./style.module.scss";
import Modal from "../Modal";

export default function Slider() {

    const [slides, setSlides] = useState([]);
    const [current, setCurrent] = useState(slides[0]);
    const [active, setActive] = useState(0);
    const [modal, setModal] = useState(false);
    const [modalInner, setModalInner] = useState("");
    let timeOut = null;

    useEffect(() => {
        fetchData()
    }, []);

    const urlAddress = 'http://localhost:3001/users';
    const fetchData = () => {
      fetch(urlAddress)
          .then(response => response.json())
          .then(slides => setSlides(slides))
    };

    const handleSetClick = (event) => {
        setCurrent(slides[event.target.getAttribute("data-quote")]);
        setActive(event.target.getAttribute("data-quote"))
    };

    const handleNext = () => {
        console.log(slides.length, active);
      clearTimeout(timeOut);
      const nextActive = Number(active) === slides.length-1 ? 0 : Number(active)+1;
      setCurrent(slides[nextActive]);
      setActive(nextActive);
      console.log(nextActive);
    };

    const handlePreview = () => {
        clearTimeout(timeOut);
        const previewActive = Number(active) === 0 ? slides.length-1 : Number(active)-1;
        setCurrent(slides[previewActive]);
        setActive(previewActive);
        console.log(previewActive);
    };

    useEffect(() => {
        clearTimeout(timeOut);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timeOut = setTimeout(
            handleNext
        , 2000);
        return () => clearTimeout(timeOut)
    }, [active]);

    const modalToggleHandler = (value) => {
        setModal(!modal);
        setModalInner(value)
        // setInner(current.backgroundImage);
    };


    return (
        <>
            {modal && <Modal closeHandler={modalToggleHandler} src={modalInner}/> }
            <Header/>
            <div className={`${styles.container}`} onClick={() => modalToggleHandler(current.backgroundImage)}>
                {current && <div className={`${styles.slider}`} style={{backgroundImage: `url(${current.backgroundImg})`}}>
                    <p>{current.header}</p>
                    <p>{current.introduction}</p>
                    <div className={`${styles.dots}`}>
                        {Object.keys(slides).map(index => (
                            <span
                                className={`${styles.dots_style} ${index === active ? styles.styles_active : ""}`}
                                onClick={event => handleSetClick(event)}
                                data-quote={index}
                                key={index}
                            />
                        ))}
                    </div>
                    <div className={`${styles.arrow} ${styles.arrow_left}`} onClick={handlePreview}/>
                    <div className={`${styles.arrow} ${styles.arrow_right}`} onClick={handleNext}/>
                </div>}
            </div>
        </>
    )
}


// методы массивов (мутирующие и не) map, filter, reduce, find, findIndex, some, every, forEach, splice, join
// slider three dots, сколько карточек столько и точек. стрелки
// slider [
//  {
//      header: "",
//      intro: "",
//      backgroundcolor: "" (backgroundImg)
//  }
// ]
// отдельный компонет для точки
// отдельный компонент для стрелки
// общий компонент слайдера
// карточка отдельно
// по нажатию на точку переходит к слайду
// по стрелке вперёд и назад
// авто смена слайдов
