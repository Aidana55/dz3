import React from 'react';
import Description from "../../Components/Description/Description";
import style from'./aboutPage.module.css'

const AboutPage = () => {
    return (
        <div className={style.close}>
            <Description iq ={ {title: "Title", description: "description"}}/>

        </div>
    );
};

export default AboutPage;