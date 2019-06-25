import React from 'react';

import PropTypes from 'prop-types';

import sittersShape from '../../helpers/propz/sittersShape';

import './Sitters.scss';

class Sitter extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(sittersShape.employeeShape),
  }

  render() {
    const { sitter } = this.props;
    return (
      <div className="Sitters col-3">
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{sitter.name}</h5>
                <img className="card-img-sitter" src={sitter.imageUrl} alt="Card cap"/>
                <p className="card-text"><dog>{sitter.dog}</dog></p>
            </div>
        </div>
      </div>
    );
  }
}

export default Sitter;
