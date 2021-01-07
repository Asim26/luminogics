import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    state = {
        number: 0
      }
    
      inc = () => {
        this.setState({ number: this.state.number + 1 })
      }
    
      dec = () => {
        this.setState({ number: this.state.number - 1 })
      }

    //   Life Cycle Methods
    
    // 1-Mounting Phase
    constructor(props){
        super(props);
        console.log('I am constructor');
    }

    

    componentDidMount() {
       console.log('I am componentDidMount');
    }

    static getDerivedStateFromProps(props,state){
        console.log('I am getDerivedStateFromProps');
    }

    // 2-Updation Phase

    // static getDerivedStateFromProps(props, state) {
    //     console.log('I am getDerivedStateFromProps');
    // }

    shouldComponentUpdate() {
        return true;
        console.log("I am shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('I am getSnapshotBeforeUpdate');
    }

    componentDidUpdate() {
        console.log('I am componentDidUpdate');
    }
    

    // 3- Unmounting Phase
    componentWillUnmount(){
        console.log('I am componentWillUnmount');
    }

    render() {
      return (
        <div>
            <h1>{this.state.number}</h1>
                <button onClick={this.dec}>
                    -
                </button>
                <button onClick={this.inc}>
                    +
                </button>
        </div>
      );
    }
  }
export default Header;