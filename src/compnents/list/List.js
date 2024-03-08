import React from 'react';
import './List.css';
import Item from '../item/Item';
import { MdDelete } from 'react-icons/md';


const List = ( {charges, handleDelete , hadleEdit , handleClear }) => {

    return (
      <>
        <ul className='list'>
        {charges.map(item=>  {
          return (      
          <Item key={item.id} 
          charge={item} 
          handleDelete={handleDelete}
          hadleEdit={hadleEdit}/>
          )
    
        })}
      
        </ul>
        {charges.length > 0 &&
        <div className='btn-container'>
        <button className='btn' onClick={handleClear}>
          전체 삭제 <MdDelete className='btn-icon'/>
        </button>
        </div>
        }
      </>
    )
  }


export default List
