import React from 'react';

class Description extends React.Component {
  render() {
    return (
      <p className='description'>{this.props.description}</p>
    )
  }
}

export default Description;
