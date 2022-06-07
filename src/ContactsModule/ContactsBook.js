import { ContactsList } from "./components/ContactsList";
import {useState} from 'react';
import { SelectedContact } from "./components/SelectedContact";
import { Search } from "./components/Search";
import './styles/ContactsBook.css';
const contactsList = [
    {
        id: 1,
        name: 'Alex',
        surname: 'Alexandrov',
        phoneNumber: '0987634562'
    },
    {
        id: 2,
        name: 'Sam',
        surname: 'Samov',
        phoneNumber: '0654965123'
    },
    {
        id: 3,
        name: 'Sam21',
        surname: 'Samov21',
        phoneNumber: '0654965123'
    }
];
export function ContactsBook () {

    const [contacts, setContacts] = useState(contactsList);
    const [showPopup, setShowPopup] = useState(false);
    const [editableContact, setEditableContact] = useState();
   
    
    const onContactItemDeleteHandler = (id, e) => {
        setContacts(contacts.filter((contact) => contact.id !== id))
      
    }

    const onContactItemEditHandler = (id, e) => {
        setShowPopup(true); 
        setEditableContact(contacts.find((contact) => contact.id === id));
    }

    const onContactItemEditCompleteHandler = (changedContact) => {
        const item = contacts.find((contact) => contact.id ===changedContact.id);
        const updatedContact = {id: changedContact.id, surname: changedContact.surname, name: changedContact.name, phoneNumber: changedContact.phoneNumber};
        setContacts(contacts.map((contact)=> contact.id ===changedContact.id ? updatedContact : contact));
        setShowPopup(false);
    }

    const onCancelCompleteHandler = () => {
        setShowPopup(false);
    }

    const onSearchingHandler = (searchValue) => {
        console.log(searchValue);
       let filteredContacts = contacts.filter(contact => {
           return contact.name.toLowerCase().includes(searchValue.toLowerCase()) 
           || contact.surname.toLowerCase().includes(searchValue.toLowerCase())
           ||contact.phoneNumber.toLowerCase().includes(searchValue.toLowerCase())
       })
       creatingNewContactList(filteredContacts);
    }

    const creatingNewContactList = (value) => {
        console.log(value);
        setContacts (value);
    }
 
           
     
  
    return (
        <div className="contact-book-container">
            <Search placeholder={'Search...'} onSearching={onSearchingHandler}/>
            <ContactsList 
                 contacts = {contacts}
                 onContactItemDelete = {onContactItemDeleteHandler}
                 onContactEdit = {onContactItemEditHandler}
                 showPopup = {showPopup}
            />
            { showPopup 
            ?  <SelectedContact editableContact={editableContact} onEditComplete={onContactItemEditCompleteHandler} onCancelComplete={onCancelCompleteHandler}/>
            : <></>
             }
        </div>
    );
}
