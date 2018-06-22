import React from 'react';
import { connect } from 'react-redux'; //connects store and dispatch to props??
import { Container, Header, Card } from 'semantic-ui-react';
import PostForm from './PostForm';
import Post from './Post';

class Posts extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
      this.setState({ showForm: !this.state.showForm })
  }

  render() {
    // const { showForm } = this.state
    return (
      <Container>
        <Header as="h1" textAlign="center">Myspace</Header>
        <PostForm />
          <Header as="h3" textAlign="center">Posts</Header>
            <Card.Group itemsPerRow={1}>
              {this.props.posts.map(post =>
              <Post key={post.id} {...post}/>)}
            </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts, user: state.user } //FRANKLIN
}

export default connect(mapStateToProps)(Posts)