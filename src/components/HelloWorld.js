import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <div>
                <p>{this.props.someText}</p>
                {this.props.children}
            </div>
        );
    }
}

export default HelloWorld;