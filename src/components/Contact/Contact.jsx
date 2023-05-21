import contactImg from './img/contact.png';

function Contact(props) {

    return (
        <div className='contact'>
            <div className='contact-mini'>
                <img src={contactImg} alt='contact'/>
                <div className='name'>
                    {props.firstName + ' ' + props.lastName}
                </div>
            </div>
            <div className='contact-more'>
                <div className='contact-phone'>Phone: {props.phone}.</div>
                <div className='contact-gender'>Gender: {props.gender}.</div>
            </div>
        </div>
    );

}

export default Contact;