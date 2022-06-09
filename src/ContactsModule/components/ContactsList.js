
import { useMemo } from "react";
import { ContactItem } from "./ContactItem";
export function ContactsList ({onContactEdit, showPopup, onContactItemDelete, contacts, searchValue}) {
    const showingList = useMemo(() => 
        contacts.map(contact => <ContactItem key={contact.id} contact={contact} showPopup={showPopup} onContactItemDelete={onContactItemDelete} onContactEdit={onContactEdit}/> ),
    [contacts]);
    const filteredListPredicate = (contactItem, searchValue) => contactItem.name.toLowerCase().includes(searchValue.toLowerCase())  || contactItem.surname.toLowerCase().includes(searchValue.toLowerCase())  || contactItem.phoneNumber.toLowerCase().includes(searchValue.toLowerCase()) ;
    const contactsItemMapper = (contact) => (<ContactItem key={contact.id} contact={contact} showPopup={showPopup} onContactItemDelete={onContactItemDelete} onContactEdit={onContactEdit}/>);
    const showingFilteredList = useMemo(() => contacts
    .filter((contact) => filteredListPredicate(contact, searchValue))
    .map(contactsItemMapper), [searchValue])
    return (
        <div>
            {searchValue ? showingFilteredList : showingList} 
        </div>
    )
}