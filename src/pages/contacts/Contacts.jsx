import './Contacts.css';
import Contact from "../../components/Contact/Contact";
import {useState, useEffect} from 'react';

import { faBars, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const  contactsList =[
    {
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
    },
    {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female",
    },
    {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666",
    },
    {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female",
    },
    {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male",
    },
    {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male"
    }
];

const filter = (searchText, listOfContacts) => {

    if (!searchText) {
        return listOfContacts;
    }

    return listOfContacts.filter(
        el => el.lastName.toLowerCase().includes(searchText.toLowerCase())
    );
}

function Contacts() {

    const [search, handleSearchChange] = useState('');
    const [contacts, setContacts] = useState(contactsList);

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredContacts = filter(search, contactsList);
            setContacts(filteredContacts);
        }, 300);

        return () => clearTimeout(Debounce);
    }, [search]);

    return (
        <div className="contacts">
            <div className='contacts-header'>
                <div className='burger'>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <input placeholder='Search for people and places'
                       onChange={(e)=>{handleSearchChange(e.target.value)}}
                />
                <div className='option'>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
            </div>
            <div className="contacts-wrapper">
                {contacts.map((contact, index) => {
                    return (
                        <Contact
                            firstName={contact.firstName}
                            lastName={contact.lastName}
                            phone={contact.phone}
                            gender={contact.gender}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    );

}

export default Contacts;