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
    this.setState({
      like: !(this.state.like),
    });
  }

  render() {
    const description = this.state.like ? 'loved' : 'unloved';
    const status = this.state.like ? 'love' : null;

    return (
      <div className='love-button'>
        <Button text='♥' className={status} onClick={this.handleClick} />
        <Description description={description} />
      </div>
    )
  }
}

export default LoveButton;
