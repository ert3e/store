import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShopingBag  from '@fortawesome/fontawesome-free-solid/faShoppingBag';
const MyButton = (props) => {

    const buttons = () => {
        let template = '';

        switch(props.type){
            case "default":
                    template= <Link
                        className={!props.altClass ? 'Link_default': props.altClass}
                        to={props.linkTo}
                        {...props.addStyles}
                    >
                        {props.title}
                    </Link>
                break;
                case "bag_link":
                    template =
                        <div className="bag_link"
                            onClick={()=>{
                                props.runAction();
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faShopingBag}
                            />
                        </div>
                break;
                default:
                    template='';
        }
        return template;
    }
    return (
        <div className="my_link">
            {buttons()}
        </div>
    );
};

export default MyButton;