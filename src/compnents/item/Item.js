import React, { Component } from 'react'
import './Item.css'
import {MdEdit , MdDelete} from 'react-icons/md'
export class Item extends Component {
  render() {
    return (
      <div>
        <li className='item'>
          <div className='info'>
            <span className='expenditure'>{this.props.initialCharges.expenditure}</span>
            <span className='charge'>{this.props.initialCharges.charge}원</span>
          </div>
          <div className='button'>
            <button className='edit-btn'><MdEdit/></button>
            <button className='delete-btn' onClick={()=> this.props.handleDelete(this.props.initialCharges.id)}><MdDelete/></button>
          </div>
        </li>
      </div>
    )
  }
}

export default Item
