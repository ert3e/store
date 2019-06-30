import React, { Component } from 'react';
import PageTop from '../untils/page_top';

import { frets } from '../untils/Form/fixed_categories';

import { connect } from 'react-redux';
import {getWoods, getBrands } from '../../actions/products_actions';

import CollapseCheckbox from '../untils/collapseCheckbox'

class Shop extends Component {

    state = {
        grid:'',
        limit:6,
        skip:0,
        filters:{
            brand:[],
            frets:[],
            wood:[],
            price:[]
        }
    }

    componentDidMount =() =>{
        this.props.dispatch(getWoods());
        this.props.dispatch(getBrands());
    }
    handleFilters = (filters, category) => {
        const newFilters = {...this.state.filters}
        newFilters[category] = filters;

        this.setState({
            filters: newFilters
        })
    }
    render() {
        console.log(this.state)
        const products = this.props.products;
        return (
            <div>
                <PageTop
                    title="Browse Products"
                />
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            <CollapseCheckbox
                                initState={true}
                                title="Brands"
                                list={products.brands}
                                handleFilters={(filters)=> this.handleFilters(filters, 'brand')}
                            />
                             <CollapseCheckbox
                                initState={false}
                                title="Frets"
                                list={frets}
                                handleFilters={(filters)=> this.handleFilters(filters, 'frets')}
                            />
                            <CollapseCheckbox
                                initState={false}
                                title="Wood"
                                list={products.woods}
                                handleFilters={(filters)=> this.handleFilters(filters, 'wood')}
                            />
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
        products: state.products
    }
}

export default connect(mapStateToProps)(Shop);
