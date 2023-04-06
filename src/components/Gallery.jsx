import './gallery.css';
import cat1 from '../assets/img/cat1.jpeg';
import cat2 from '../assets/img/cat2.jpeg';
import cat3 from '../assets/img/cat3.jpg';
import cat4 from '../assets/img/cat4.jpeg';
import cat5 from '../assets/img/cat5.jpeg';
import { useState } from 'react';
import Bordered from './Bordered';


const Gallery = () => {
    const [columns, setColumns] = useState(2);

    let galleryClass = 'images';

    switch(columns) {
        case 1 :
            galleryClass += ' one-column';
            break;
        case 2 : 
            galleryClass += ' two-column';
            break;
        case 3 :
            galleryClass += ' three-column';
            break;
        default:
            galleryClass += ' two-column';
    }


    return (
        <div className='gallery'>


            <Bordered>
                <div className='buttons'>
                    <button onClick={() => setColumns(1)}>One Column</button>
                    <button onClick={() => setColumns(2)}>Two Column</button>
                    <button onClick={() => setColumns(3)}>Three Column</button>
                </div>
            </Bordered>

            <div className={galleryClass}>
                <img src={cat1} alt="cat 1" />
                <img src={cat2} alt="cat 2" />
                <img src={cat3} alt="cat 3" />
                <img src={cat4} alt="cat 4" />
                <img src={cat5} alt="cat 5" />
            </div>
        </div>
    )
}

export default Gallery;