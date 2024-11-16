
const jwt = require('jsonwebtoken');
const key = 'partner';
const expiration = '5h';


const userdata = {
id: 56,
name: "kinza",
age: 23,
mail: "kinza@gmail.com"
}

const values = jwt.sign(userdata, key,{expiresIn: expiration});
console.log(values);



console.log("Hello");
console.log("Good");

