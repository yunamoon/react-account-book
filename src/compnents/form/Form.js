import React, { Component } from 'react'
import "./Form.css"
import { MdSend } from 'react-icons/md'
export class Form extends Component {
  render() {
    return (
      <form>
        <div className='form-center'>
            <div className='form-group'>
              <label htmlFor='expenditure'>지출 비용</label>
              <input 
              type='text' 
              className='form-control' 
              id='expenditure'
              name='expenditure' placeholder='지출 항목을 입력해 주세요.'>
              </input>
            </div>
            <div className='form-group'>
              <label htmlFor='charge'>지출 비용</label>
              <input 
              type='number' 
              className='form-control' 
              id='charge'
              name='charge' placeholder='예상 비용을 입력해 주세요.'>
              </input>
          </div>
        </div>
        
        <div className='btn-container'>
        <button type='submit' className='btn'>
          저장 <MdSend className='btn-icon'/>
        </button>
        </div>
      </form>
    )
  }
}

export default Form
