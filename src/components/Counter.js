import { useState } from "react";

const Counter = () => {
    const signs = [`<`, `>`];
    const [num, setNum] = useState(0);

    const handleClickMinus = (n) => {
        return setNum(num - 1);
    };
    const handleClickPlus = (n) => {
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
                        <button onClick={handleClickMinus}>{signs[0]}</button>
                    </div>
                    <div className="plus">
                        <button onClick={handleClickPlus}>{signs[1]}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
