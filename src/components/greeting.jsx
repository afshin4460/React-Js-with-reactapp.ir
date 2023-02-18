import React, {useEffect} from 'react';

function Greeting(props) {
    useEffect(() => {
        console.log('Greeting Updated');
    }, [props.isLoggedIn]);

    const UserGreeting = () => {return <h1>Welcome Back</h1>};
    const GuestGreeting = () => {return <h1>Please Sign Up</h1>};
    let text = <GuestGreeting />;
    if (props.isLoggedIn) {
        text = <UserGreeting />;
    }
    return (
        <div>
            {text}
        </div>
    );
}

export default React.memo(Greeting);
