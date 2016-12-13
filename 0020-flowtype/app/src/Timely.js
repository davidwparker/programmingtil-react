/* @flow */
import React from 'react';

type TimelyProps = {
  date: Date,
  name: string,
  excited: boolean
};

class Timely extends React.Component<void, TimelyProps, void> {
  render() {
    const hours = this.props.date.getHours();
    const timeOfDay =
      hours > 17 ? 'Evening' : hours > 12 ? 'Afternoon' : 'Morning';

    return (
      <div>
        Good {timeOfDay} {this.props.name} {this.props.excited ? '!' : ''}
      </div>
    );
  }
}

export default Timely;
