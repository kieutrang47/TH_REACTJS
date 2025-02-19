import React, {useState} from "react";

class Childcomponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            valueInput:'' //Gia tri mac dinh
        };
    }
    
    //Dinh nghia ham handle input (event)
    handleInput= (event)=>{
        console.log(event.target.value);
        this.setState({ //Hien thi gia tri duoc nhap vao
            valueInput:event.target.value //target la textbox, value la gia tri nhap vap textbox
        });
    }
    render(){
        return(
            <div>
                
                 <span>{this.state.valueInput}</span>
                  <form onSubmit={this.props.handleOnSubmit}>
                    <div>Your name:
                    <input
                        type="text"
                        name="Name"
                        value={this.props.Name}
                        onChange={this.props.handleOnchangeInput}/>
                    </div>
                    <div>Your Age:
                    <input
                        type="text"
                        name = "Age"
                        value={this.props.Age}
                        onChange={this.props.handleOnchangeInput}/>
                    </div>
                                
                                 <button type="submit">Submit</button>
                                 <hr />
                             </form>
            </div>
        )
    }
    
}
export default Childcomponent;