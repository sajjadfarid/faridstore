import React from 'react';
import {ToggleLink} from "../custom_components/ToggleLink";

export default class CategoryNavigation extends React.Component {
    render = () => <React.Fragment>
        <ToggleLink to={`${this.props.baseUrl}/all`} exact={false}>All</ToggleLink>
        {this.props.categories && this.props.categories.map(cat=>
            <ToggleLink key={cat} to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>{cat}</ToggleLink>
        )}
    </React.Fragment>
}
