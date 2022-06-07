import { useEffect, useState } from "react";
import '../styles/SelectedContact.css'

export function SelectedContact ( {editableContact, onEditComplete, onCancelComplete} ) {
    const [surname, setSurname] = useState(editableContact.surname);
    const [name, setName] = useState(editableContact.name);
    const [phoneNumber, setPhoneNumber] = useState(editableContact.phoneNumber);
    const [ savedIndicator, setSavedIndicator ] = useState('saved');
    const [ cancelIndicator, setCancelIndicator ] = useState(false);
    const onSave = () => {
        savedIndicator === 'unsaved' && onEditComplete ({   
            id: editableContact.id,
            surname,
            name,
            phoneNumber
        });
        setSavedIndicator('saved');
    };

    const onCancel = () => {
        onCancelComplete();
    }

    const onCancelInite = () => {
        setCancelIndicator(true);
    }

    const onChangeFieldHandler = ( field, value ) => {
        switch (field) {
            case 'surname': {
                setSurname (value);
                break;
            }
            case 'name': {
                setName (value);
                break;
            }
            case 'phoneNumber': {
                setPhoneNumber(value);
                break;
            }
        }
        
       
    }

    useEffect (() => {
        setSavedIndicator('unsaved');
    }, [ surname, name, phoneNumber])
    
    return (
        <div className="selected-contact">
        <div className="selected-contact-container">
            <div className="selected-contact-header">
                <span className="selected-contact-header-title">Edit Contact: </span>
                <span className="selected-contact-header-contact-data">{editableContact.surname} {editableContact.name}</span>
                <button onClick={()=> onCancelInite()} className="selected-contact-header-close-btn">x</button>
            </div>
            <div className="selected-contact-container-content">
                <div className="selected-contact-content-img"></div>
                <div className="selected-contact-content-form">
                    <span className="selected-contact-content-form-label">Last Name</span>
                    <input type='text' value={surname} onChange={({target}) => onChangeFieldHandler('surname', target.value)} className="selected-contact-content-form-surname-input"></input>
                    <span className="selected-contact-content-form-label">Name</span>
                    <input type='text' value={name} onChange={({target}) => onChangeFieldHandler('name', target.value)} className="selected-contact-content-form-name-input"></input>
                    <span className="selected-contact-content-form-label">Phone number</span>
                    <input type='text' value={phoneNumber} onChange={({target}) => onChangeFieldHandler('phoneNumber', target.value)} className="selected-contact-content-form-phone-input"></input>
                    <button onClick={() => onSave()} className="selected-contact-content-form-btn">Save</button>

                </div>
            </div>
            <div className={cancelIndicator ? 'cancel-box' : 'no-cancel-box'}>
              <p className="selected-contact-content-cancel-box-message">Do you want cancel edition?</p>
              <button onClick={() => onSave()} className='selected-contact-content-cancel-box-btn'>No, save</button>
              <button onClick={() => onCancel()} className='selected-contact-content-cancel-box-btn'>Cancel</button>
            </div>
         </div>
        </div>
    )
}