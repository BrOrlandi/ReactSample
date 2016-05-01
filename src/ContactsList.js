import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component{

    constructor(){
        super();
        this.state = {
            search: ''
        }
    }

    updateSearch(event){
        this.setState({search: event.target.value});
    }

    render(){

        let filtered = this.props.contacts.filter((contact)=>{
            return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        return (
            <div >
                Search:
                <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                <ul>
                    {filtered.map((contact)=>{
                        return <Contact key={contact.id} contact={contact}/>
                    })
                    }
                </ul>
            </div>
        )
    }
};

export default ContactsList;
