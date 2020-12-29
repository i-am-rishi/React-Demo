import React from 'react';
import Like from './like';

const Moviedisplay = (props) => {

    const {movies, dolike, dodelete,Sort }=props;

    return ( 
        <div className="container">
        <table className="table">
  <thead>
    <tr>
      <th onClick={()=> Sort('id')} style={{cursor:'pointer'}} scope="col">Id</th>
      <th onClick={()=> Sort('name')} style={{cursor:'pointer'}} scope="col">Name</th>
      <th onClick={()=> Sort('rating')} style={{cursor:'pointer'}} scope="col">Rating</th>
      <th style={{cursor:'pointer'}} scope="col">Like</th>
      <th style={{cursor:'pointer'}} scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {movies.map(e=> (
        <tr key={e.id}>
        <th scope="row">{e.id}</th>
        <td>{e.name}</td>
        <td>{e.rating}</td>
    <td><Like property={e.like} onClick={()=> dolike(e)} /></td>
        <td><button onClick={()=> dodelete(e.id)} className="btn btn-danger btn-sm">Delete</button></td>
      </tr>
    ))}
  </tbody>
</table>
</div>
     );
}
 
export default Moviedisplay;