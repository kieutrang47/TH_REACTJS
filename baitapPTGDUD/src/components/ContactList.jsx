// import React from "react";

// const Contact = ({ name, email, phone }) => {
//   return (
//     <div>
//       <h2>Contact Information</h2>
//       <p><strong>Name:</strong> {name}</p>
//       <p><strong>Email:</strong> {email}</p>
//       <p><strong>Phone:</strong> {phone}</p>
//     </div>
//   );
// };

// export default Contact;
//bai2
import React from "react";
import Contact from "./Contact";
import "./ContactList.css"; // Import CSS cho danh sách

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <Contact 
          key={contact.id} 
          firstName={contact.firstName} 
          lastName={contact.lastName} 
          phone={contact.phone} 
          address={contact.address} 
        />
      ))}
    </div>
  );
};

export default ContactList;

//bai_3
// import React, { useState } from "react";
// import "./ContactList.css"; // Nếu có CSS riêng

// const ContactList = () => {
//   // Danh sách liên hệ mẫu
//   const [contacts, setContacts] = useState([
//     {
//       id: 1,
//       firstName: "Chidi",
//       lastName: "Anagonye",
//       phone: "555-366-8987",
//       address: "St. John's University, Sydney, Australia",
//     },
//     {
//       id: 2,
//       firstName: "Eleanor",
//       lastName: "Shellstrop",
//       phone: "555-483-1457",
//       address: "335 Avalon St, Apt 2C, Pheonix, Arizona",
//     },
//     {
//       id: 3,
//       firstName: "Tahani",
//       lastName: "Al-Jamil",
//       phone: "555-276-7991",
//       address: "1 Lancaster Terrace, London, England",
//     },
//     {
//       id: 4,
//       firstName: "Jason",
//       lastName: "Mendoza",
//       phone: "555-113-8388",
//       address: "779 William St, Miami, Florida",
//     },
//   ]);

//   // Hàm xóa 1 liên hệ
//   const deleteContact = (id) => {
//     setContacts(contacts.filter((contact) => contact.id !== id));
//   };

//   // Hàm xóa tất cả liên hệ
//   const deleteAllContacts = () => {
//     setContacts([]);
//   };

//   return (
//     <div className="contact-container">
//       {contacts.map((contact) => (
//         <div key={contact.id} className="contact-card">
//           <h3>{contact.firstName}</h3>
//           <p><strong>{contact.lastName}</strong></p>
//           <p><strong>Phone:</strong> {contact.phone}</p>
//           <p><strong>Address:</strong> {contact.address}</p>
//           <button className="delete-btn" onClick={() => deleteContact(contact.id)}>Delete</button>
//         </div>
//       ))}
//       {contacts.length > 0 && (
//         <button className="delete-all-btn" onClick={deleteAllContacts}>Delete All</button>
//       )}
//     </div>
//   );
// };

// export default ContactList;

// // test_bai_3
// import React, { useState } from "react";
// import { INITIAL_CONTACTS } from "./data";

// const ContactList = () => {
//   const [contacts, setContacts] = useState(INITIAL_CONTACTS);

//   // Xóa 1 liên hệ
//   const deleteContact = (id) => {
//     setContacts(contacts.filter(contact => contact.id !== id));
//   };

//   // Xóa tất cả liên hệ
//   const deleteAllContacts = () => {
//     setContacts([]);
//   };

//   return (
//     <div>
//       <h2>Contact List</h2>
//       {contacts.length > 0 ? (
//         <table border="1" className="contact-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.map((contact) => (
//               <tr key={contact.id}>
//                 <td>{contact.name}</td>
//                 <td>{contact.email}</td>
//                 <td>{contact.phone}</td>
//                 <td>
//                   <button className="delete-btn" onClick={() => deleteContact(contact.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No contacts available.</p>
//       )}
//       {contacts.length > 0 && <button className="delete-all-btn" onClick={deleteAllContacts}>Delete All</button>}
//     </div>
//   );
// };

// export default ContactList;
