import { ContactsList } from "./ContactsList"
import '../styles/ContactItem.css';
export function ContactItem ( {contact, onContactEdit, onContactItemDelete}) {
    return (
        <div className="contact-item-container">
            <div className="img-place"></div>
            <div className="content-container">
                <div>{contact.surname} {contact.name}</div>
                 <div>{contact.phoneNumber}</div>
            </div>
            <div className="btn-area">
             <button onClick={() => onContactEdit(contact.id)} className='btn-edit'>✍🏻</button>
             <button onClick={(event) => onContactItemDelete(contact.id, event)} className='btn-delete'>❌</button>
            </div>
        </div>
    )
}