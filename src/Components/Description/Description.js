import React from 'react';
import style from './description.module.css'

const Description = ({iq}) => {
    return (
        <div>
            <p className={style.info}>{iq.title}</p>
            <h2>{iq.description}</h2>
            
        </div>
    );
};

export default Description;