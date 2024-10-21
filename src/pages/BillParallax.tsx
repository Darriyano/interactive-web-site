import React, {useState, useEffect} from 'react';
import BILLPARALLAX from '../images/arts-drafts/animations/bill-parallax.gif'
import '../styles/gif-page.css'


const BillParallax = () => {
    const [showGif, setShowGif] = useState(true);

    // Устанавливаем таймер для переключения на статичный элемент
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGif(false); // Скрываем GIF и показываем статичный элемент
        }, 2500); // Время показа GIF (например, 5 секунд)

        return () => clearTimeout(timer); // Очищаем таймер при размонтировании компонента
    }, []);

    return (
        <div className='gif-container'>
            {showGif ? (
                    <img className='loading-gif' src={BILLPARALLAX} alt="Loading..."/>
                ) :
                <></>
            };
        </div>)
}

export default BillParallax;
