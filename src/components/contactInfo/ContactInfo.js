import React from 'react';
import styles from '../../../styles/Contact.module.css';


const ContactInfo = ({icon, title, info, className}) => {
  return (
    <>
        <div className={className}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.title}>
                <h1>{title}</h1>
                <p>{info}</p>
            </div>
        </div>
    </>
  )
}

export default ContactInfo