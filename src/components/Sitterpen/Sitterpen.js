import React from 'react';

import Sitter from '../Sitters/Sitters';

import './Sitterpen.scss';

class Sitterpen extends React.Component {
  render() {
    const { sitters } = this.props;
    const makeSitters = sitters.map(sitter => (
      <Sitter key={sitter.id} sitter={sitter} />
    ));

    return (
      <div className="Sitterpen d-flex flex-wrap">
        { makeSitters }
      </div>
    );
  }
}

export default Sitterpen;
