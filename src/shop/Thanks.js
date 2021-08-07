import React from "react";
import {Link} from "react-router-dom";

export default class Thanks extends React.Component{
    render=()=><div>
        <div className='col bg-dark text-white'>
            <div className='navbar-brand'>Farid Store</div>
        </div>
        <div className='m-2 text-center'>
            <h2>Thanks</h2>
            <p>Thanks for placing your.</p>
            <p>Your order is #{this.props.order ? this.props.order.id : 0}</p>
            <p>We'll ship your goods as soon as possible.</p>
            <Link to='/shop' className='btn btn-primary'>
                Return to Store
            </Link>
        </div>
    </div>
}
