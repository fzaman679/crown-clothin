import React from 'react';

import './menu-item.styles.scss';

//use function to return the menu item
const MenuItem = ({title, imageUrl, size}) => ( //the same thing as writing props.title, we are destructuring making it shorter, pulling value
    <div

    
        className={`${size} menu-item`}>
        
            <div className='background-image' 
                style= {{
                    backgroundImage: `url(${imageUrl})`
            }} />

            <div className="content">
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>Shop</span>
            </div>
    </div>
);


export default MenuItem;