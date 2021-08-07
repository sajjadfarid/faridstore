import React from "react";
import * as ShopActions from "../data/ActionCreators";
import {connect} from "react-redux";
import {Switch, Route, Redirect} from 'react-router-dom';
import Shop from "./Shop";
import {DataTypes} from "../data/Types";
import * as CartActions from "../data/CartActionCreators";
import CartDetails from "./CartDetails";
import DataGetter from "../data/DataGetter";
import Checkout from "./Checkout";
import Thanks from "./Thanks";

const mapDispatchToProps = {
    ...ShopActions, ...CartActions
};

/*const mapStateToProps = (dataStore) => ({
    ...dataStore
});*/

/*const filterProducts = (products = [], category)=> (!category || category==='All')
   ? products
   : products.filter(p=> p.category.toLowerCase() === category.toLowerCase());*/

const ShopConnector = connect(ds => ds, mapDispatchToProps)(
    class extends React.Component{

        selectComponent = (routeProps) => {
            const wrap = (Component, Content) =>
                <Component {...this.props} {...routeProps}>
                    {Content && wrap(Content)}
                </Component>
            switch (routeProps.match.params.section){
                case 'products':
                    return wrap(DataGetter, Shop);
                case 'cart':
                    return wrap(CartDetails);
                case 'checkout':
                    return wrap(Checkout);
                case 'thanks':
                    return wrap(Thanks);
                default:
                    return <Redirect to='/shop/products/all/1'/>
            }
        }

        /*render=()=> <Switch>
            <Redirect from='/shop/products/:category' to='/shop/products/:category/1' exact={true}/>
            <Route path='/shop/products/:category/:page' render={(routeProps)=>
                <DataGetter {...this.props} {...routeProps}>
                    <Shop {...this.props} {...routeProps} />
                </DataGetter> }/>
            <Route path='/shop/cart' render={(routeProps)=> <CartDetails {...this.props} {...routeProps} />}/>
            <Route path='/shop/checkout' render={routeProps => <Checkout {...this.props} {...routeProps} /> }/>
            <Route path='/shop/thanks' render={routeProps=> <Thanks {...this.props} {...routeProps} /> } />
            <Redirect to='/shop/products/all/1' />
        </Switch>*/

        render = ()=><Switch>
            <Redirect from='/shop/products/:category' to='/shop/products/:category/1' exact={true}/>
            <Route path='/shop/:section?/:category?/:page?' render={routeProps=> this.selectComponent(routeProps)}/>
        </Switch>

        componentDidMount() {
            this.props.loadData(DataTypes.CATEGORIES);
            //this.props.loadData(DataTypes.PRODUCTS);
        }
    }
)

export default ShopConnector;
