import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }


  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // const limitPosts = response.data.slice(0, 6)
        //! This allows you to control how many posts you receive
        const updatedPosts = response.data.slice(0, 10).map(post => {
          return {
            ...post,
            author: 'Author Name Here'
          }
        })
        this.setState({ posts: updatedPosts })
        console.log(response)
      })
      .catch(error => {
        this.setState({ error: true })
        console.error('This Is My Personal Error Message:::', error)
      })
  }

  postSelectedHandler = (id) => {
    this.setState({
      selectedPostId: id
    })
  }

  render() {
    let posts = <p style={{ textAlign: 'center', color: 'red' }}>Something is a foot, hold on while we figure this out!</p>

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post
          key={post.id}
          title={post.title}
          author={post.author}
          whenClicked={() => this.postSelectedHandler(post.id)}
        />
      })
    }




    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <section>
          <FullPost
            id={this.state.selectedPostId}
            title={this.state.posts}
          />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
