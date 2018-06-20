import React from 'react';
import { connect } from 'react-redux'
import {
  Divider,
  Container,
  Table,
  Button,
  Header,
  Card,
} from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import PostForm from './PostForm'
import { deletePost } from '../reducers/posts'

class Post extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    const { user_id, body, dispatch } = this.props
    const { showForm } = this.state
    return(
      <Card>
        <Card.Content>
          <Card.Meta>
            <span>
              {user_id}
            </span>
          </Card.Meta>
          <Card.Description>
            {body}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default connect()(Post);