import React from "react";
import {DataTypes} from "./Types";

export default class DataGetter extends React.Component{
    render=()=> <React.Fragment>{this.props.children}</React.Fragment>

    componentDidMount=()=> this.getData();
    componentDidUpdate = () => this.getData();

    getData=()=>{
        const dsData = this.props.products_params || {};
        const rtData = {
            _limit : this.props.pageSize || 5,
            _sort: this.props.sortKey || 'name',
            _page: this.props.match.params.page || 1,
            category_like: (this.props.match.params.category || '') === 'all'
                ? '' : this.props.match.params.category
        };
        if(Object.keys(rtData).find(key=> dsData[key] !== rtData[key])){
            this.props.loadData(DataTypes.PRODUCTS, rtData);
        }
    }

}
