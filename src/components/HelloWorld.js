// import React, { Component } from 'react';
import React, { useState } from 'react';
import styles from './MyButtonComponent.module.css'

const Button = (props) => {
    return (
    <button onClick={props.handleClick}>Clicked {props.count} times</button>
    )
}

const HelloWorld = props => {
    // const [state, setState] = useState({
    //     clickCount: 0
    // });

    // const handleClick = e => {
    //     e.preventDefault();
    //     setState({
    //         clickCount: state.clickCount + 1
    //     });
    // }
    const [count, setCount] = useState(0);
 
    const handleClick = e => {
        e.preventDefault();
        setCount(count + 1);
    }
 
    return(
        <div>
            {count}
            <button className={styles.myButton} onClick={handleClick}>Click Me</button>
        </div>
    )
}   
// class HelloWorld extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             clickCount: 0
//         }
//     }

//     handleClick = () => {
//         this.setState({
//             clickCount: this.state.clickCount + 1
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <p>{this.props.someText}</p>
//                 {this.props.children}
//                 <Button handleClick={this.handleClick} count={this.state.clickCount}/>
//             </div>
//         );
//     }
// }

export default HelloWorld;