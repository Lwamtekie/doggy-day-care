import React from 'react';
import myDogs from '../../App/dogs';
import DogPen from '../Dogpen/Dogpen';
import mySitters from '../../App/sitter';
import SittersPen from '../Sitterpen/Sitterpen';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';


class Home extends React.Component {
  state = {
    dogs: [],
    sitters: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
    this.setState({ sitters: mySitters });
  }

  render() {
    const { dogs } = this.state;
    const { sitters } = this.state;
    return (
       <div className="Home">
        <h1 className="section-title">Doggy Daycare</h1>
        <DogPen dogs={ dogs }/>
        <h1 className="section-title">Doggy Sitters</h1>
        <SittersPen sitters={ sitters }/>

       </div>
    );
  }
}

export default Home;
