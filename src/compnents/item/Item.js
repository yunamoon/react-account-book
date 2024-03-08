import React from 'react'
import './Item.css'
import {MdEdit , MdDelete} from 'react-icons/md'

const Item = ({charge, handleDelete , hadleEdit}) => {

    return (
      <div>
        <li className='item'>
          <div className='info'>
            <span className='expenditure'>{charge.expenditure}</span>
            <span className='charge'>{charge.charge}원</span>
          </div>
          <div className='button'>
            <button className='edit-btn' onClick={()=>hadleEdit(charge.id)}><MdEdit/></button>
            <button className='delete-btn' onClick={()=> handleDelete(charge.id)}><MdDelete/></button>
          </div>
        </li>
      </div>
    )
  }


export default Item
