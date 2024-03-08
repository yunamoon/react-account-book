import React from 'react'
import "./Form.css"
import { MdSend } from 'react-icons/md'


const Form = ({charge, handleCharge, expenditure, handleExpend, handleSubmit , edit}) => {
 
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-center'>
            <div className='form-group'>
              <label htmlFor='expenditure'>지출 항목</label>
              <input 
              type='text' 
              className='form-control' 
              id='expenditure'
              name='expenditure' 
              placeholder='지출 항목을 입력해 주세요.'
              value={expenditure}
              onChange={handleExpend}
              >
              </input>
            </div>
            <div className='form-group'>
              <label htmlFor='charge'>지출 비용</label>
              <input 
              type='number' 
              className='form-control' 
              id='charge'
              name='charge' 
              placeholder='예상 비용을 입력해 주세요.'
              value={charge}
              onChange={handleCharge}>
              </input>
          </div>
        </div>
        
        <div className='btn-container'>
        <button type='submit' className='btn'>
          {!edit ? "저장" : "수정" }
          <MdSend className='btn-icon'/>
        </button>
        </div>
      </form>
    )
  }

export default Form
