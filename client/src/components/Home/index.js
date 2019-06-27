import React, { Component } from 'react';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';
import { connect } from 'react-redux';

import  CardBlock  from '../untils/card_block';
import { getProductBySell, getProductByArrival } from '../../actions/products_actions';

class Home extends Component {
    componentDidMount(){
        this.props.dispatch(getProductBySell());
        this.props.dispatch(getProductByArrival());
    }
    render() {
        return (
            <div>
                <HomeSlider/>
                <CardBlock
                    list={this.props.products.bySell}
                    title="Best Sell"
                />
                <HomePromotion/>
                <CardBlock
                    list={this.props.products.byArrival}
                    title="New arrival"
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(Home);
