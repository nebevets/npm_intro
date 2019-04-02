import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

// const h1 = React.createElement('h1', {}, 'welcome to react');
// const p = React.createElement('p', {}, 'this is a paragraph');
// const container = React.createElement('div', {}, [h1, p]);

// const container = (
//   <div>
//     <h1>really nice h1</h1>
//     <p>followed by a fairly nice paragraph</p>
//   </div>
// );

// const user1 = {
//   firstName: 'Mike',
//   lastName: 'Jibrony',
//   prefix: 'Mr.'
// }

// function properLastName(user){
//   return `${user.prefix} ${user.lastName}`;
// }

// const greeting = <h1>Hello {properLastName(user1)}, welcome to our site.</h1>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
