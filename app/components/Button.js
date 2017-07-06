import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className='love'>{this.props.text}</button>
    )
  }
}

export default Button;
