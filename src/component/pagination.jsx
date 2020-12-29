import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const {length,size,currentPage}=props;
    let NumPage=Math.ceil((length/size)+1);
    if(NumPage===1) return null;
    const page=_.range(1,NumPage);
    

    return ( <React.Fragment>
        <div className="container" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
        <nav aria-label="Page navigation example">
  <ul className="pagination">
    {page.map(e=> (<li key={e} style={{cursor:'pointer'}}  className={e===currentPage? "page-item active": "page-item"}><a  className="page-link" onClick={()=>props.handlePageChange(e)}>{e}</a></li>))}
  </ul>
</nav>
</div>
    </React.Fragment> );

}
export default Pagination;
