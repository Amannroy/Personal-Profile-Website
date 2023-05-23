// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Profile from './Profile';
import Skills from './Skills';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';
import './App.css';



function App() {
  return (
    <div className="App">
      <Profile />
      <Skills /> {/* Include the Skills component */}
      <ContactForm />
      <SocialMedia />  
    </div>
  );
}

export default App;
