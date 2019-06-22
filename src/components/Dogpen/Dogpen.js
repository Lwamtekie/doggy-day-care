import React from 'react';

import Dog from '../dog/dogs';

import './Dogpen.scss';

class Dogpen extends React.Component {
  render() {
    const { dogs } = this.props;
    const makeDogs = dogs.map(dog => (
      <Dog key={dog.id} dog={dog} />
    ));

    return (
      <div className="Dogpen d-flex flex-wrap">
        { makeDogs }
      </div>
    );
  }
}

export default Dogpen;
