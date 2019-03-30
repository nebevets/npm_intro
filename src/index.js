import sQuery, { addToDom, makeElement } from './helpers';
import add from './add';
import MyPromise from './promise';

addToDom('this is here because we made it be here');

addToDom(`5 + 8 = ${add(5,8)}`);

makeElement('h2', 'this is a h2');

sQuery.makeElement('p', 'paragraph boy')

function pause(delay){
  return function(callback){
    setTimeout(callback, delay);
  }
}

var promise = new MyPromise(pause(5000));

function logValue(value){
  return function(){
    console.log(value);
  }
}

promise.then(logValue('as promised, you have been assilimated'));
