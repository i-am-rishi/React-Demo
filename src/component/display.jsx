import React, { Component } from 'react';
import Moviedisplay from './moviedisplay';
import Movies from './movies';
import Pagination from './pagination';
import _ from 'lodash';
export default class Display extends Component {
    state = { 
      movies:Movies(),
      currentPage:1,
      prev:0,
      next:3,
      size:3,
      sortColumn:{path:'id', order: 'asc'}
     }

     sort=(e)=>{
       const sortColumn={...this.state.sortColumn};
       if(sortColumn.path===e)
       sortColumn.order=(sortColumn.order === 'asc')? 'desc': 'asc';
       else{
         sortColumn.path=e;
         sortColumn.order='asc';
       }
     this.setState({sortColumn});
     }

    delete=(m)=>{
    const movies=this.state.movies.filter(e=> e.id!==m);
    this.setState({movies});
    }


    handlelike= c=>{
    const movies=[...this.state.movies];
    const index=movies.indexOf(c);
    movies[index]={...movies[index]};
    movies[index].like=!movies[index].like;
    this.setState({movies});
    }

    handlePageChange= page=>{
      this.setState({currentPage:page,prev:page*this.state.size-3,next:page*this.state.size});
    }

    render() { 
      const {size,sortColumn,currentPage,movies:mo,prev,next}=this.state;
      const sorted=_.orderBy(mo,[sortColumn.path],[sortColumn.order]);
      const movies=sorted.slice(prev,next);
    return ( <React.Fragment>
        
    <Moviedisplay 
    movies={movies} 
    dolike={this.handlelike} 
    dodelete={this.delete} 
    Sort={this.sort}
    />

    <Pagination 
    length={mo.length} 
    size={size} 
    currentPage={currentPage}
    handlePageChange={this.handlePageChange}
    />

    </React.Fragment> );
    }
}
 
