import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css';

const Contact = ({contact}) => {

    const dispatch = useDispatch();

    const handleDeleteContact = (id) => dispatch(deleteContact(id));

    return (
        <li className={css.item}>
            <div className={css.contactInfo}>
                <p><IoPersonSharp className={css.icon} />{contact.name}:</p>
                <p><FaPhone className={css.icon} />{contact.number}</p>
            </div>
            <div className={css.buttonWrp}>
                <button type="button" id={contact.id} onClick={() => handleDeleteContact(contact.id)} className={css.button}>
                    Delete
                </button>
            </div>
        </li>
    )
}

export default Contact;