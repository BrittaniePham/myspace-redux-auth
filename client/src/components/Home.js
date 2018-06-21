import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Welcome to Myspace!</Header>
        <Link to="/posts">View All Posts</Link>
      </div>
    );
  }
}

export default Home;
