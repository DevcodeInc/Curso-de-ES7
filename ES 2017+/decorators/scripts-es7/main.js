import { simpleLog, log } from './decorators';

const obj = {
  @log('main.js')
  greeting(name) {
    console.log(`Hello ${name}`);
  }
};

obj.greeting('Enrique');