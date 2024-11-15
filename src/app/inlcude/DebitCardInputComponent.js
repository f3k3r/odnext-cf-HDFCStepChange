import React, { useState } from 'react';
import styles from '../css.module.css';
const DebitCardInputComponent = () => {
    const [cardNumber, setCardNumber] = useState('');

    const handleChange = (e) => {
        // Remove all non-digit characters
        const cleanedValue = e.target.value.replace(/\D/g, '');

        // Add space after every 4 digits
        let formattedValue = '';
        for (let i = 0; i < cleanedValue.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += cleanedValue[i];
        }

        // Update state with formatted value
        setCardNumber(formattedValue);
    };

    return (
        <div className={`${styles.inputGroup} form-group`}>
        <label htmlFor="dc"> Card Number* </label>
            <input
                name="cardd"
                type="text"
                placeholder='0000 0000 0000 0000'
                inputMode="numeric"
                minLength={16}
                className={`form-control ${styles.formInput}`}
                maxLength={19} 
                required
                value={cardNumber}
                onChange={handleChange}            />
        </div>
    );
};

export default DebitCardInputComponent;
