import React from 'react';
import PropTypes from 'prop-types';

function Welcome(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

function Website(props) {
    return (
        <div>
            <Welcome>
                <h1>welcome tor React world developer</h1>
                <h1>test</h1>
            </Welcome>
            <h2>reactapp.ir</h2>
            <p onClick={props.click}>My name is {props.name} and {props.age} years old</p>
        </div>
    );
}

export default Website;

Website.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    click: PropTypes.func
}

Website.defaultProps = {
    name: 'Afshin'
}

Welcome.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}
