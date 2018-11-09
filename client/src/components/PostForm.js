import React from 'react';
import { connect } from 'react-redux';
import { updatePost, addPost } from '../reducers/posts';
import { Form } from 'semantic-ui-react';

class PostForm extends React.Component {
  initialState = {
    body: ''
  }
  state = {...this.initialState}

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = {...this.state}
    const { toggleForm, dispatch } = this.props
    // const func = this.props.id ? updatePost : addPost
    if (this.props.id){
      dispatch(updatePost(post))
      this.setState({...this.initialState})
      toggleForm()
    } else {
      dispatch(addPost(post))
      this.setState({...this.initialState})
    } 
  }

  render() {
    const { body } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="body"
          value={body}
          onChange={this.handleChange}
          label="post"
          required
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm)