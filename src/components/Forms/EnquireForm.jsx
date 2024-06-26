import React from 'react'

const EnquireForm = (props) => {
  return (
      <form className='enquireFormBody'>
          <label htmlFor="">Name:</label>
          <input type="text" />
          <label htmlFor="">Name:</label>
          <input type="text" />
          <label htmlFor="">Name:</label>
          <input type="text" />
          <label htmlFor="">Name:</label>
          <input type="text" />
          <label htmlFor="">Name:</label>
          <input type="text" disabled defaultValue={'props id'}/>
      </form>
  )
  //submission of form is important
}

export default EnquireForm