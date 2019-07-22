import React from 'react';
import CardBlockShop from '../untils/card_block_shop';

const LoadmoreCards = (props) => {
    console.log(props);
    return (
        <div>
            <div>
                <CardBlockShop
                    grid={props.grid}
                    list={props.products}
                />
            </div>
        </div>
    );
}

export default LoadmoreCards;
