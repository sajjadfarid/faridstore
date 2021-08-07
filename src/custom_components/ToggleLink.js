import React from 'react';
import {Route, Link} from 'react-router-dom';

export class ToggleLink extends React.Component{
    constructor(props) {
        super(props);
    }
    render=() => <Route path={this.props.to} exact={this.props.exact}
                        children={routeProps=> {
                            const baseClasses = this.props.className || 'm-2 btn d-block';
                            const activeClass = this.props.activeClass || 'btn-primary';
                            const inActiveClass = this.props.inActiveClass || 'btn-secondary';
                            const combinedClasses = `${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`;
                            return <Link to={this.props.to} className={combinedClasses}>{this.props.children}</Link>
                        }} />
}
