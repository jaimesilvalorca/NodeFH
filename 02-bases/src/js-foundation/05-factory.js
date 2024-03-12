const {v4:uuidv4} = require('uuid')
const {getAge}= require('../plugins/get-age.plugin')

const obj = {name:'Jaime',birthdate:'1992-10-09'}

const BuildPerson = ({name,birthdate})=>{
    
    return{
        id:uuidv4(),
        name:name,
        birthdate:birthdate,
        age: getAge(birthdate),
    }
}


const john = BuildPerson(obj)

console.log(john)