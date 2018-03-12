import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'



class AddNewPost extends Component {
  render() {
    return (
        <form onSubmit={this.props.handleSubmit}>
          <h3>Create new blog post</h3>
          <div className='form-group'>
            <label>Title</label>
            <Field name="title" component="input" type="text" className='form-control'/>
          </div>
          <div className='form-group'>
            <label>Categories</label>
            <Field name="categories" component="input" type="text" className='form-control'/>
          </div>
          <div className='form-group'>
            <label>Content</label>
            <Field name="content" component="textarea" type="text" className='form-control'/>
          </div>

          <button style={{marginRight: '1em'}} type='submit' className='btn btn-primary' >Submit</button>
          <button className='btn btn-danger'>Cancel</button>
        </form>
    );
  }
}

export default reduxForm({
  form: 'addNewPostForm',
})(AddNewPost)