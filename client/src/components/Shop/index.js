import React, { Component } from 'react';
import PageTop from '../untils/page_top';

import { frets, price } from '../untils/Form/fixed_categories';

import { connect } from 'react-redux';
import { getProductsToShop, getWoods, getBrands } from '../../actions/products_actions';

import CollapseCheckbox from '../untils/collapseCheckbox'
import CollapseRadio from '../untils/collapseRadio';

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

    componentDidMount = () =>{
        this.props.dispatch(getWoods());
        this.props.dispatch(getBrands());

        this.props.dispatch(getProductsToShop(
            this.state.skip,
            this.state.limit,
            this.state.filters,
        ))
    }
    handlePrice = (value) => {
        const data = price;
        let array = [];
        for(let key in data){
            if(data[key]._id === parseInt(value,10)){
                array = data[key].array
            }
        }
        return array;
    }
    handleFilters = (filters, category) => {
        const newFilters = {...this.state.filters}
        newFilters[category] = filters;

        if(category === "price"){
            let priceValues = this.handlePrice(filters);
            newFilters[category] = priceValues;
        }
        this.showFilteredResults(newFilters);
        this.setState({
            filters: newFilters
        })
    }
    showFilteredResults = (filters) => {
        this.props.dispatch(getProductsToShop(
            0,
            this.state.limit,
            filters
        )).then(()=>{
            this.setState({
                skip:0
            })
        })
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
                            <CollapseRadio
                                initState={false}
                                title="Price"
                                list={price}
                                handleFilters={(filters)=> this.handleFilters(filters, 'Price')}
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
