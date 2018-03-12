import axios from 'axios'


export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'


const URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=superluxhd123456'

export const fetchPosts = () => {
  const req = axios.get(`${URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: req
  }
}

export const createPost = (props) => {
  const req = axios.post(`${URL}/posts${API_KEY}`, props)
  return {
    type: CREATE_POST,
    payload: req
  }
}