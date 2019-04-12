import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';


class FullPost extends Component {
  state = {
    loadedPost: null
  }

  componentDidUpdate() {
    if (this.props.id) {
      axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
        .then(res => {
          this.setState({
            loadedPost: res.data
          })
          console.log('[FullPost.js] res.data:', res.data);
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <p style={{ color: '#3d3d92' }}>Post Number: {this.props.id}</p>
          <h1>Title: {this.state.loadedPost.title}</h1>
          <span style={{ fontWeight: 'bold' }}>Content:</span>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
