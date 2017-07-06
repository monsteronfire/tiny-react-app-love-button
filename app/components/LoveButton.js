import React from 'react';
import Button from './Button';
import Description from './Description';

class LoveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log('click');
  }

  render() {
    return (
      <div className='love-button'>
        <Button text='♥' onClick={this.handleClick} />
        <Description />
      </div>
    )
  }
}

export default LoveButton;
