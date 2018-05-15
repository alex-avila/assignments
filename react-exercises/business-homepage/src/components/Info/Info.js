import React from 'react';

import './Info.css';

const Info = () => {
    return (
        <section className="info">
            <div className='info-wrapper content-wrap'>
                <div className="info__image"></div>
                <div className="info__text">
                    <h1 className="info__text__title">Lorem Ipsum</h1>
                    <p className="info__text__paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada aliquam leo, vitae mollis enim feugiat id. Cras aliquet convallis consequat. Ut et luctus neque, sed vulputate arcu. 
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Info;