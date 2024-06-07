import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice.js'
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';

const ContactList = () => {

    const visibleContacts = useSelector(selectFilteredContacts);
    
    return (
        <ul className={css.list}>
                {visibleContacts.map((contact) => {
                    return (
                        <Contact
                        key={contact.id}
                        contact={contact}
                        />
                    )
                })}
        </ul>
    )    
};

export default ContactList;