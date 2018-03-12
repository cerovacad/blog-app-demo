import React, { Component } from 'react'
import { fetchPosts } from '../actions/index'
import { connect } from 'react-redux'

class BlogPostList extends Component {

  componentWillMount = () => {
    this.props.fetchPosts()
  }

  renderPosts = () => {
    return this.props.posts.map((post) => {
      return (
        <li className='list-group-item' key={post.id}>
          <span className='float-right'>{post.categories}</span>
          <strong>{post.title}</strong> 
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps, { fetchPosts })(BlogPostList)

