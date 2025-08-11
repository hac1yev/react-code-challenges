import React, { useState } from 'react';
import InputMask from 'react-input-mask';

function PhoneInput() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPhone(e.target.value);
    if (error) setError('');
  };

  const handleBlur = () => {
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (phone && !phonePattern.test(phone)) {
      setError('Invalid phone number format.');
    }
  };

  return (
    <div>
      <InputMask
        mask="(999) 999-9999"
        value={phone}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        {(inputProps) => <input {...inputProps} type="text" />}
      </InputMask>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default PhoneInput;
