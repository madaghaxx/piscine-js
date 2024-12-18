const clone1 = person
Object.freeze(clone1.age,clone1.name,clone1.country)
const clone2 = person
Object.freeze(clone2.age,clone2.name,clone2.country)
const samePerson = person
person.age = 78
