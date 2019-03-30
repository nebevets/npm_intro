import sQuery, { addToDom, makeElement } from './helpers';
import add from './add';

addToDom('this is here because we made it be here');

addToDom(`5 + 8 = ${add(5,8)}`);

makeElement('h2', 'this is a h2');

sQuery.makeElement('p', 'paragraph boy')