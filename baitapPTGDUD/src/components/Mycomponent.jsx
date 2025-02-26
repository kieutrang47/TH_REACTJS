// import React from "react";
// import Childcomponent from './Childcomponent';
// import DisplayInfor from './DisplayInfor';
// import AddUserInfor from './AddUserInfor';

// class MyComponents extends React.Component {
//    state = {
//         Name: '',
//         listUser: [
//             { id: 1, Name: "Minh", Age: 49 },
//             { id: 2, Name: "Anh", Age: 15 },
//             { id: 3, Name: "Viet", Age: 32 },
//             { id: 4, Name: "Hoa", Age: 32 }
//         ]
//     };

//     handleOnchangeInput = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     };

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         const newUser = {
//             id: Math.floor((Math.random() * 100) + 1) + "user",
//             Name: this.state.Name,
//             Age: this.state.Age
//         };
//         this.handleAddnewUser(newUser);
//         this.setState({ Name: "", Age: "" });
//     };

//     handleAddnewUser = (userObject) => {
//         this.setState({
//             listUser: [userObject, ...this.state.listUser]
//         });
//     };

//     handleDeleteUser = (userID) => {
//         let listUserClone = this.state.listUser.filter(item => item.id !== userID);
//         this.setState({
//             listUser: listUserClone
//         });
//     };

//     //Thêm hàm xóa toàn bộ user
//     handleDeleteAllUsers = () => {
//         this.setState({ listUser: [] });
//     };

//     render() {
//         return (
//             <> 
//                 <div>
//                     <h2>MyComponent</h2>
//                     <Childcomponent 
//                         Name={this.state.Name}
//                         handleOnchangeInput={this.handleOnchangeInput}
//                         handleOnSubmit={this.handleOnSubmit}
//                     />
                   
//                     <DisplayInfor 
//                         listUser={this.state.listUser}
//                         handleDeleteUser={this.handleDeleteUser}
//                         handleDeleteAllUsers={this.handleDeleteAllUsers} // ✅ Truyền hàm vào
//                     />

//                     <AddUserInfor />
//                 </div>
//             </>
//         );
//     }
// }

// export default MyComponents;

//chuyển class thành function component_TTHỰC HÀNH TRÊN LỚP
import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

const MyComponents = () => {
  const [listUser, setListUser] = useState([
    { id: 1, Name: "Minh", Age: 49 },
    { id: 2, Name: "Anh", Age: 15 },
    { id: 3, Name: "Viet", Age: 32 },
    { id: 4, Name: "Hoa", Age: 32 }
  ]);

  const handleAddnewUser = (userObject) => {
    if (listUser.length < 10) {
      setListUser([userObject, ...listUser]);
    } else {
      alert("Không thể thêm quá 10 người dùng!");
    }
  };

  const handleDeleteUser = (userID) => {
    if (listUser.length <= 1) {
      alert("Không thể xóa! Phải có ít nhất một người trong danh sách.");
      return;
    }
    setListUser(listUser.filter(user => user.id !== userID));
  };

  const handleDeleteAllUsers = () => {
    if (listUser.length <= 1) {
      alert("Không thể xóa! Phải có ít nhất một người trong danh sách.");
      return;
    }
    setListUser([]);
  };

  return (
    <div>
      <h2>MyComponent</h2>
      <AddUserInfor handleAddnewUser={handleAddnewUser} userCount={listUser.length} />
      <DisplayInfor 
        listUser={listUser} 
        handleDeleteUser={handleDeleteUser} 
        handleDeleteAllUsers={handleDeleteAllUsers} 
      />
    </div>
  );
};

export default MyComponents;






// code cũ
// import React, {useState} from "react";

// import Childcomponent from './Childcomponent';

// import DisplayInfor from './DisplayInfor'
// import AddUserInfor from './AddUserInfor'
// class MyComponents extends React.Component{
  
//    state={
//         Name:'',
//         listUser:[
//             {id:1,Name:"Minh",Age:49},
//             {id:2,Name:"Anh",Age:15},
//             {id:3,Name:"Viet",Age:32},
//             {id:4,Name:"Hoa",Age:32}
//         ]
//     }
//     // state={
//     //     name: 'Trang',
//     //     age:21
//     // }
//      parent = "This is my parents"
//      handleOnchangeInput = (event) => {
//         this.setState({
//             ...this.state,
//             [event.target.name]: event.target.value
//         });
//     };
    

//     handleOnSubmit = (event) => {
//         event.preventDefault(); // Ngăn tải lại trang
//         console.log(this.state.Name);
//         console.log(this.state.Age); // In giá trị nhập vào
//         const newUser ={
//             id: Math.floor((Math.random() * 100) + 1) + "user",
//             Name: this.state.Name,
//             Age: this.state.Age
//         };
//         this.handleAddnewUser(newUser);
//         this.setState({ name: "", age: "" });
//     };
//     handleAddnewUser = (userObject) => {
//         this.setState({
//             listUser: [userObject, ...this.state.listUser]
//         })
//     };
//      //Xoa 1 User
//      handleDeleteUser= (userID)=>{
//         let listUserClone= this.state.listUser;
//         listUserClone= listUserClone.filter(item => item.id!==userID)
//      this.setState({
//         listUser:listUserClone
//      })
//     }
    
//     render(){
        
//         return(
//             <> 
//             <div>
//             <h2>MyComponent</h2>
//             <Childcomponent 
//                     Name={this.state.Name}
//                     handleOnchangeInput={this.handleOnchangeInput}
//                     handleOnSubmit={this.handleOnSubmit}
//                 />
               
//                <DisplayInfor listUser={this.state.listUser}
//               handleDeleteUser={this.handleDeleteUser}>

//                 </DisplayInfor>

//                 <AddUserInfor ></AddUserInfor>
              
//                 </div>

//             </>
           
//         );
//     }
// }
// export default MyComponents;