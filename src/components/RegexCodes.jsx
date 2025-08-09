import React from 'react'

const RegexCodes = () => {
    console.log((/\S+@\S+\.\S+/).test("ilkinhaciyev955@gmail.com")) // Email
    console.log((/\(\+994\)\s(55|50|70|77)\s\d{3}\s\d{2}\s\d{2}/).test("(+994) 55 352 11 98")) // Phone
    console.log((/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/).test("Hilkin08!")); // Password
    console.log((/(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/).test("2025-01-09")) // Date
    console.log((/(http|https):\/\/\S+\.\S+/).test("https://example.com")) // URL
    console.log((/#[a-fA-F0-9]{6}/).test("#a1b2c3")); // Hex color
    console.log((/^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/).test("192.168.1.1")) // IPv4 Address


    return (
        <div>RegexCodes</div>
    );
};

export default RegexCodes;