import React from 'react';

function MailBox(props) {
    return (
        <div>
            <h1>Hello</h1>
            {
                props.unreadMessage.length > 0 && 
                <h2>Yot have {props.unreadMessage.length} unread messages</h2>
            }
        </div>
    );
}

export default MailBox;
