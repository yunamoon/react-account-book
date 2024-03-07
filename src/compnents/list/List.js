import React, { Component } from 'react';
import './List.css';
import Item from '../item/Item';
import { MdDelete } from 'react-icons/md';

export class List extends Component {
  render() {

    return (
      <>
        <ul className='list'>
        {this.props.initialCharges.map(item=>  {
          return (      
          <Item key={item.id} 
          initialCharges={item} 
          handleDelete={this.props.handleDelete}/>
          )
    
        })}
      
        </ul>
        <div className='btn-container'>
        <button className='btn'>
          전체 삭제 <MdDelete className='btn-icon'/>
        </button>
        </div>
     
      </>
    )
  }
}

export default List
