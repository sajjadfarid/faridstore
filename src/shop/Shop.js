import React from "react";
import CategoryNavigation from "./CategoryNavigation";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

export default class Shop extends React.Component {

    handleAddToCart = (...args) =>{
        this.props.addToCart(...args);
        this.props.history.push('/shop/cart');
    }

    render = () => <div className='container-fluid'>
        <div className='row'>
            <div className='col bg-dark text-white'>
                <div className='navbar-brand float-start'>Farid Store</div>
                <CartSummary {...this.props} />
            </div>
        </div>
        <div className='row'>
            <div className='col-3 p-2'>
                <CategoryNavigation baseUrl='/shop/products' categories={this.props.categories}/>
            </div>
            <div className='col-9 p-2'>
                <ProductList products={this.props.products} addToCart={this.handleAddToCart}/>
            </div>
        </div>
    </div>
}