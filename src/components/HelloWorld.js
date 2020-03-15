import React, { Component } from 'react';

const Button = (props) => {
    return (
    <button onClick={props.handleClick}>Clicked {props.count} times</button>
    )
}

class HelloWorld extends Component {
    constructor(props){
        super(props);
        this.state = {
            clickCount: 0
        }
    }

    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    }

    render() {
        return (
            <div>
                <p>{this.props.someText}</p>
                {this.props.children}
                <Button handleClick={this.handleClick} count={this.state.clickCount}/>
            </div>
        );
    }
}

export default HelloWorld;