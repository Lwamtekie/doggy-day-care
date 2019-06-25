import React from 'react';
import myDogs from './dogs';
import DogPen from '../components/Dogpen/Dogpen';
import mySitters from './sitter';
import SittersPen from '../components/Sitterpen/Sitterpen';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


class App extends React.Component {
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
       <div className="App">
        <h1 className="section-title">Doggy Daycare</h1>
        <DogPen dogs={ dogs }/>
        <h1 className="section-title">Doggy Sitters</h1>
        <SittersPen sitters={ sitters }/>

       </div>
    );
  }
}

export default App;
