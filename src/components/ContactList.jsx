import React from "react";
import Card from "./Card";
import contacts from "../contacts";

/* Leo la lista de contactos y creo un componente Card */
function ContactList(){
    return (
        <div>
        {contacts.map(contact => (
            <Card 
            key={contact.id}
            name={contact.name} 
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}      
            />
        ))}
        </div>
    );
}

export default ContactList;
