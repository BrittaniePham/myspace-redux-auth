import React from 'react';
import { connect } from 'react-redux'; //connects store and dispatch to props??
import { Link } from 'react-router-dom';
import { getPosts } from '../reducers/posts';
import { Container, Header, Card, Button} from 'semantic-ui-react';
import PostForm from './PostForm';
import Post from './Post';

class Posts extends React.Component {

  render() {
    return (
      <Container>
      <PostForm/>
        <Header as="h3" textAlign="center">Posts</Header>
        <Card.Group itemsPerRow={1}>
          {this.props.posts.map(post =>
          <Post {...post}/>)}
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts, user: state.user } //FRANKLIN
}

export default connect(mapStateToProps)(Posts)