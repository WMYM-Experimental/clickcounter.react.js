import { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0);

    const handleClickMinus = () => {
        return setNum(num - 1);
    };
    const handleClickPlus = () => {
        return setNum(num + 1);
    };

    return (
        <div className="container">
            <div className="clickCounterContainer">
                <div className="counterTitle">
                    <h1 className="title">Click Counter</h1>
                </div>

                <div className="num">
                    <h6>{num}</h6>
                </div>

                <div className="counterConsole">
                    <div className="minus">
                        <button onClick={handleClickMinus}>-</button>
                    </div>
                    <div className="plus">
                        <button onClick={handleClickPlus}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
