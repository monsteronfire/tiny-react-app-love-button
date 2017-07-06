import React from 'react';
import Button from './Button';
import Description from './Description';

class LoveButton extends React.Component {
  render() {
    return (
      <div className='love-button'>
        <Button text='♥' />
        <Description />
      </div>
    )
  }
}

export default LoveButton;
