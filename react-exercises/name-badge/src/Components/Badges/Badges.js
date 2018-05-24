import React from 'react';

import Badge from './Badge/Badge';

import './Badges.css';

const Badges = (props) => {
    let alternate = true;
    const mappedData = props.data.map((badge, i) => {
        alternate = !alternate;
        return (
            <Badge
                key={badge.firstName + i}
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                birthPlace={badge.birthPlace}
                phone={badge.phone}
                food={badge.food}
                info={badge.info}
                color={alternate ? 'red' : 'blue'}
            />
        )
    });
    return (
        <div className="badges-wrapper">
            { mappedData }
        </div>
    )
}

export default Badges;