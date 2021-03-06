import React from "react";

export default class ValidationError extends React.Component{
    render() {
        if(this.props.errors){
            return this.props.errors.map(err=> <h6 className='text-danger' key={err}>{err}</h6> )
        }
        return null;
    }
}
