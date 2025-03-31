import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';

function generateUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    users.push({
      id: faker.string.uuid(),
      firstName,
      lastName,
      age: faker.number.int({ min: 18, max: 80 }),
      email: faker.internet.email({ firstName, lastName }),
    });
  }
  return users;
}

const users = generateUsers(1000000);
writeFileSync('./backend/users.json', JSON.stringify(users));
console.log('Файл users.json создан');