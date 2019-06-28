import React, { Component } from 'react';
import PageTop from '../untils/page_top';

import { connect } from 'react-redux';
import{getWoods, getBrands} from '../../actions/products_actions';
import CollapseCheckbox from '../untils/collapseCheckbox'

class Shop extends Component {
    componentDidMount(){
        this.props.dispatch(getWoods());
        this.props.dispatch(getBrands());
    }
    render() {
        const products = this.props.products;
        return (
            <div>
                <PageTop
                    title="Browse Products"
                />
            <div className="container">
                <div className="shop_wrapper">
                    <div className="left">
                        left
                    </div>
                    <div className="right">
                        rights
                    </div>
                </div>

            </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.prop
    }
}

export default connect(mapStateToProps)(Shop);
