const clone1 = person, clone2 = person, samePerson = person
Object.freeze(clone1)
Object.freeze(clone2)
person.age = 78
person.country = 'FR'


