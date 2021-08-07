import React from "react";
import PaginationButtons from "./PaginationButtons";

export default class paginationControls extends React.Component{
    constructor(props) {
        super(props);
        this.pageSizes = this.props.sizes || [5, 10, 25, 100];
        this.sortKeys = this.props.keys || ['Name', 'Price'];
    }

    handlePageSizeChange = (ev) => {
        this.props.setPageSize(ev.target.value);
    }

    handleSortPropertyChange = (ev)=> {
        this.props.setSortProperty(ev.target.value);
    }

    render=()=> <div className='m-2'>
        <div className='text-center m-1'>
            <PaginationButtons currentPage={this.props.currentPage} pageCount={this.props.pageCount}
                               navigate={this.props.navigateToPage}/>
        </div>
        <div className='row justify-content-center g-2'>
            <div className='col-2'>
                <select className='form-control' onChange={this.handlePageSizeChange} value={this.props.pageSize || this.pageSizes[0]}>
                    {this.pageSizes.map(s=> <option value={s} key={s}>{s} per page</option>)}
                </select>
            </div>
            <div  className='col-2'>
                <select className='form-control' onChange={this.handleSortPropertyChange} value={this.props.sortKey || this.sortKeys[0]}>
                    {this.sortKeys.map(k=> <option value={k.toLowerCase()} key={k}>Sort By {k}</option>)}
                </select>
            </div>
        </div>
    </div>
}
