import { Person } from './person.model';

function add(val1: number, val2: number) {
  return val1 + val2;
}

add(1, 2);

function sayHello(p: Person) {
  return `Say hello to my friend: ${p.firstName}`;
}

sayHello(new Person({ firstName: 'zhaoayang' }));
