import React from 'react'
import AddNewPostForm from './AddNewPostForm'
import { createPost } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class AddNewPage extends React.Component {
  state = {
    fireRedirect: false
  }

  handleFormSubmit = (values) => {
    this.props.createPost(values)
    setTimeout(()=>{this.setState({ fireRedirect: true})}, 500)
  }

  render() {
    return ( 
      <div>
        <AddNewPostForm onSubmit={this.handleFormSubmit}/>
        {this.state.fireRedirect && (
          <Redirect to='/'/>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createPost}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddNewPage)