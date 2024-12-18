const clone1 = {
    name: 'Rick',
    age: 77,
    country: 'US',
}
const clone2 = {
    name: 'Rick',
    age: 77,
    country: 'US',
}
  
const samePerson = person
Object.freeze(samePerson)
Object.freeze(samePerson.name)
Object.freeze(samePerson.age)
Object.freeze(samePerson.country)