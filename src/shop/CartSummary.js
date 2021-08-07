import React from 'react';
import {Link} from "react-router-dom";

export default class CartSummary extends React.Component{
    getSummary=()=>{
        if(this.props.cartItems > 0){
            return <span>
                {this.props.cartItems} items(s),
                ${this.props.cartPrice.toFixed(2)}
            </span>
        }
        else{
            return <span>Your cart: (empty)</span>
        }
    }

    getLinkClasses=() => `btn btn-sm bg-dark text-white ${this.props.cartItems === 0 ? 'disabled' : ''}`

    render = () => <div className='float-end'>
        <small>
            {this.getSummary()}
            <Link className={this.getLinkClasses()} to='/shop/cart'><i className='fa fa-shopping-cart'></i></Link>
        </small>
    </div>
}
