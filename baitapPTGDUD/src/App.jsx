import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Mycomponent from './components/Mycomponent';
import Contact from './components/Contact';  // Import Contact

function App() {
  const [count, setCount] = useState(0);

  const contact = {
    name: "Nguyễn Thị Kiều Trang",
    email: "22642451.trang@student.iuh.edu.vn",
    phone: "0912345678"
  };

  return (
    <>
      <div>
        Hello Trang_22642451!!!
        <Mycomponent />
        <Contact name={contact.name} email={contact.email} phone={contact.phone} /> {/* Gọi Contact */}
      </div>
    </>
  );
}

export default App;

//bai_2, 3
// import { useState } from "react";
// import "./App.css";
// import ContactList from "./components/ContactList";
// import { INITIAL_CONTACTS } from "./components/data";

// function App() {
//   const [contacts, setContacts] = useState(INITIAL_CONTACTS);

//   return (
//     <div className="app-container">
//       <h1>Contact List</h1>
//       <ContactList contacts={contacts} />
//     </div>
//   );
// }

// export default App;
