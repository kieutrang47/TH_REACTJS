import React, { useState } from "react";

const ChildComponent = ({ Name, Age, handleOnChangeInput, handleOnSubmit }) => {
    const [valueInput, setValueInput] = useState("");

    const handleInput = (event) => {
        console.log(event.target.value);
        setValueInput(event.target.value);
    };

    return (
        <div>
            <span>{valueInput}</span>
            <form onSubmit={handleOnSubmit}>
                <div>
                    Your name:
                    <input
                        type="text"
                        name="Name"
                        value={Name}
                        onChange={handleOnChangeInput}
                    />
                </div>
                <div>
                    Your Age:
                    <input
                        type="text"
                        name="Age"
                        value={Age}
                        onChange={handleOnChangeInput}
                    />
                </div>
                <button type="submit">Submit</button>
                <hr />
            </form>
        </div>
    );
};

export default ChildComponent;
