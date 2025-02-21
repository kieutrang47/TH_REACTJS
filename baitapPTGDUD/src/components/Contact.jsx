import React from "react";
import "./Contact.css"; // Import CSS để tạo style

//     //bài_1
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

//bài_2,3
const Contact = ({ name, email, phone }) => {
  return (
    <div className="contact-card">
      <h3>👤: {name}</h3>
      <p>📞 <strong>Phone:</strong> {phone}</p>
      <p>📧 <strong>Email:</strong> {email}</p>
    </div>
  );
};

export default Contact;

