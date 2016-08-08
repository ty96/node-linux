import style from './style.css';
import { Input, Button } from 'antd';
import React, { Component, PropTypes } from 'react';

class Message extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  static contextTypes = {
    fooActions: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      message: this.props.message,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleClick() {
    this.context.fooActions.randomName(this.state.message);
  }

  render() {
    const { message } = this.state;
    return (
      <div className={style.title}>
        <Input value={message} onChange={this.handleChange} />
        <Button onClick={this.handleClick} >submit</Button>
        <br />
        <br />
        <br />
        <span>返回结果:</span>
        <br />
        <span>{this.props.message}</span>
      </div>
    );
  }
}

export default Message;
