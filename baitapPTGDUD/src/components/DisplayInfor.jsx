// import React, {useState} from "react";
// class DisplayInfor extends React.Component{
    
//     render(){
//         return (
//             <div>
//               {this.props.listUser && this.props.listUser.length > 0 ? (
//                 this.props.listUser.map((user) => (
//                   <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
//                     <div>User name is: {user.Name}</div>
//                     <div>User Age: {user.Age}</div>
//                     <button onClick={() => {
//                     this.props.handleDeleteUser(user.id)
//                     }}>Delete</button>

//                     <hr />
//                   </div>
//                 ))
//               ) : (
//                 <div>No users found</div>
//               )}
//             </div>
//           );
//     }
// }
// export default DisplayInfor;

import React from "react";

class DisplayInfor extends React.Component {
  render() {
    return (
      <div>
        {this.props.listUser.length > 0 ? (
          <div>
            <button onClick={this.props.handleDeleteAllUsers}>
              Delete All
            </button>
            <table border="1" width="100%">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.listUser.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.Name}</td>
                    <td style={{ color: user.Age < 18 ? "red" : "blue" }}>
                      {user.Age}
                    </td>
                    <td>
                      <button onClick={() => this.props.handleDeleteUser(user.id)}>
                        Delete 
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No contacts available.</div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
