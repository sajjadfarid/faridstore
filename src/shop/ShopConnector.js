import React from "react";
import {loadData} from "../data/ActionCreators";
import {connect} from "react-redux";
import {Switch, Route, Redirect} from 'react-router-dom';
import Shop from "./Shop";
import {DataTypes} from "../data/Types";
import {addToCart, updateCartQuantity, removeFromCart, clearCart} from "../data/CartActionCreators";
import CartDetails from "./CartDetails";
import DataGetter from "../data/DataGetter";

const mapStateToProps = (dataStore) => ({
    ...dataStore
});

const mapDispatchToProps = {
    loadData, addToCart, updateCartQuantity, removeFromCart, clearCart
};

//const filterProducts = (products = [], category)=> (!category || category==='All')
//    ? products
//    : products.filter(p=> p.category.toLowerCase() === category.toLowerCase());

const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(class extends React.Component{
    render=()=> <Switch>
        <Redirect from='/shop/products/:category' to='/shop/products/:category/1' exact={true}/>
        <Route path='/shop/products/:category/:page' render={(routeProps)=>
            <DataGetter {...this.props} {...routeProps}>
                <Shop {...this.props} {...routeProps} />
            </DataGetter> }/>
        <Route path='/shop/cart' render={(routeProps)=> <CartDetails {...this.props} {...routeProps} />}/>
        <Redirect to='/shop/products/all/1' />
    </Switch>

    componentDidMount() {
        this.props.loadData(DataTypes.CATEGORIES);
        //this.props.loadData(DataTypes.PRODUCTS);
    }
})

export default ShopConnector;
