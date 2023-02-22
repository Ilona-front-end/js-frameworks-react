const user = {
  name: 'John',
  id: 30,
  colors: ['red', 'green', 'blue'],
  parents: {
    father: 'John Sr.',
    mother: 'Jane'
  }
}

const { name, id } = user;

function logStuff({ name, id }) {
  console.log(name, id);
}
