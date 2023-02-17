import React, {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    const [name, setName] = useState('');
    const handleChange = (e) => {
        const v = e.target.value;
        setName(v);
        console.log(name);
    };

    return (
        <div>
            <p>You are {count} clicked</p>
            <button onClick={handleClick}>click me</button>
            <input type="text" name='name' value={name} onChange={handleChange} />
        </div>
    );
}

/* class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ''
        };
    }
    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }
    handleChange = (e) => {
        this.setState({name: e.target.value})
        console.log(this.state.name);
    }
    render() {
        return (
            <div>
                <p>You are {this.state.count} times clicked</p>
                <button onClick={this.handleClick}>click me</button>
                <input type="text" name='name' value={this.state.name} onChange={this.handleChange} />
            </div>
        );
    }
} */

export default Counter;
