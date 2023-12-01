console.clear();

const person = {
    name: 'Kajal Rana',
    age: 22,
    city: 'Saharanpur',
    occupation: 'Frontend Engineer',
    isStudent: true,
    hobbies: ['Reading','Cooking']
  };
  
  for(let key in person){
    const values = person[key]
    console.log(values);
  }
