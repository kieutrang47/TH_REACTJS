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
 

import React, { useState } from "react";

const DisplayInfor = ({ listUser, handleDeleteUser, handleDeleteAllUsers }) => {
    const [isShowHideListUser, setShowHideListUser] = useState(true); // Quản lý trạng thái hiển thị danh sách

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser); // Đảo trạng thái hiển thị
    };

    return (
        <div>
            {/*  Nút Show/Hide danh sách */}
            <button onClick={handleShowHideListUser} style={{ marginBottom: "10px" }}>
                {isShowHideListUser ? "Hide list User" : "Show list User"}
            </button>

            {isShowHideListUser && listUser.length > 0 ? (
                <div>
                    {/* Nút xóa tất cả User */}
                    <button onClick={handleDeleteAllUsers} style={{ marginBottom: "10px" }}>
                        Delete All
                    </button>

                    {/* Hiển thị danh sách User trong bảng */}
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
                            {listUser.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.Name}</td>
                                    <td style={{ color: user.Age < 18 ? "red" : "blue" }}>
                                        {user.Age}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user.id)}>
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
};

export default DisplayInfor;







//Dùng class => code trên chuyển thành function
// import React from "react";

// class DisplayInfor extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.listUser.length > 0 ? (
//           <div>
//             <button onClick={this.props.handleDeleteAllUsers}>
//               Delete All
//             </button>
//             <table border="1" width="100%">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Age</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.props.listUser.map((user) => (
//                   <tr key={user.id}>
//                     <td>{user.id}</td>
//                     <td>{user.Name}</td>
//                     <td style={{ color: user.Age < 18 ? "red" : "blue" }}>
//                       {user.Age}
//                     </td>
//                     <td>
//                       <button onClick={() => this.props.handleDeleteUser(user.id)}>
//                         Delete 
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div>No contacts available.</div>
//         )}
//       </div>
//     );
//   }
// }

// export default DisplayInfor;
