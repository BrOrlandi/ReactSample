import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
    id: 1,
    name: 'Luke Skywalker',
    phone: '555 555 555'
}, {
    id: 2,
    name: 'Anakin Skywalker',
    phone: '4444'
}, {
    id:3,
    name: 'Obi Wan Kenobi',
    phone: '50 23124 666'
}
];

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Contacts List</h1>
            <ContactsList contacts={this.props.contacts}/>
            </div>
        )
    }
}


ReactDOM.render(<App contacts={contacts}/>,document.getElementById('app'));
