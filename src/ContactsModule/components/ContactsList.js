import { useEffect } from "react";
import { ContactItem } from "./ContactItem";


export function ContactsList ({contacts, onContactEdit, showPopup, onContactItemDelete}) {
    return (
        <div onClick={() => console.log(contacts.id)}>
            {contacts.map(contact => <ContactItem key={contact.id} contact={contact} showPopup={showPopup} onContactItemDelete={onContactItemDelete} onContactEdit={onContactEdit}/> )}
        </div>
    )
}