import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import {
  Card,
  Button,
} from 'semantic-ui-react'
import PostForm from './PostForm'
import { deletePost } from '../reducers/posts'

class Post extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    const { username, user_id, body, id } = this.props
    const { showForm } = this.state
    const post = { user_id, body, id }
    return(
      <Fragment>
        {showForm ?
          <PostForm toggleForm={this.toggleForm} {...post}/>
          :
          <Fragment>
            <Card>
              <Card.Content>
                <Card.Meta>
                  <span>
                    { username }
                  </span>
                </Card.Meta>
                <Card.Description>
                  { body }
                </Card.Description>
                <Button onClick={this.toggleForm}>
                  { showForm ? 'Cancel' : 'Edit' }
                </Button>
                <Button onClick={() => this.props.dispatch(deletePost(id))}>
                  delete
                </Button>
              </Card.Content>
            </Card>
          </Fragment>
          }
      </Fragment>
    )
  }
}

export default connect()(Post);