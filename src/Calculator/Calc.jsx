import React, { useEffect, useState } from "react";
import "./Calc.css";
import './Midea.css'

export function Calculator() {
    const [values, setvalue] = useState('0');
    const [togglePosition, setTogglePosition] = useState(0);

    function handleToggle() {
        setTogglePosition((prev) => {
            const newPosition = (prev === 2 ? 0 : prev + 1);

            let backgroundColor;
            if (newPosition === 0) {
                backgroundColor = '#3B4664';  // Dark blue
            } else if (newPosition === 1) {
                backgroundColor = '#E6E6E6';  // Light gray
            } else if (newPosition === 2) {
                backgroundColor = '#17062A';  // Dark purple
            }
            document.body.style.backgroundColor = backgroundColor;
            return newPosition;
        });
    }

    useEffect(() => {
        applyTheme();
    }, [togglePosition]);

    function applyTheme() {
        const buttons = document.querySelectorAll('button');
        const display = document.querySelector('.display');
        const mainContainer = document.querySelector('.main-container');
        const headerText = document.querySelector('p')

        let backgroundColor, btnShadow, textColor, displayBg, displayColor, containerColor , hcolor;

        if (togglePosition === 1) {
            backgroundColor = '#E5E4E0';
            btnShadow = '0px 4px hsl(185, 58%, 25%)';
            textColor = '#3D3F34';
            displayBg = '#FFF';
            containerColor = '#D3CDCD';
            displayColor = '#3A3A32';
            hcolor = '#3D3F34';

        } else if (togglePosition === 2) {
            backgroundColor = '#17062A';
            btnShadow = '0px 4px hsl(285, 91%, 52%)';
            textColor = '#FFE940';
            displayBg = '#1E0836';
            displayColor = '#FFEB59';
            containerColor = '#1E0836';
            hcolor = '#FFE940';
        } else {
            backgroundColor = '';
            btnShadow = '';
            textColor = '';
            displayBg = '';
            displayColor = '';
            containerColor = '';
            hcolor = '';
        }

        buttons.forEach((btn) => {
            btn.style.backgroundColor = backgroundColor;
            btn.style.boxShadow = btnShadow;
            btn.style.color = textColor;
        });
        display.style.backgroundColor = displayBg;
        display.style.color = displayColor;
        mainContainer.style.backgroundColor = containerColor;
        headerText.style.color = hcolor;
    }

    function insertValue(e) {
        if (values === '0') {
            setvalue(e.target.innerText);
        } else {
            setvalue((prev) => prev + e.target.innerText);
        }
    }

    function calculate() {
        try {
            setvalue(eval(values).toString());
        } catch {
            setvalue('Error');
        }
    }

    function reset() {
        setvalue('0');
    }

    return (
        <>
            <div className="header" >
                <p >Calc</p>
                <div id="switchBtn">
                <div className={`switch toggle-${togglePosition}`} onClick={handleToggle}></div>
            </div>
            </div>
            <div className="display">{values}</div>
            <div className="main-container">
                <div className="allBtn">
                    <div>
                        <button onClick={insertValue}>7</button>
                        <button onClick={insertValue}>8</button>
                        <button onClick={insertValue}>9</button>
                        <button onClick={() => setvalue(values.length > 1 ? values.slice(0, -1) : '0')} id="delBtn">DEL</button>
                    </div>

                    <div>
                        <button onClick={insertValue}>4</button>
                        <button onClick={insertValue}>5</button>
                        <button onClick={insertValue}>6</button>
                        <button onClick={insertValue} className="operator">+</button>
                    </div>

                    <div>
                        <button onClick={insertValue}>1</button>
                        <button onClick={insertValue}>2</button>
                        <button onClick={insertValue}>3</button>
                        <button onClick={insertValue} className="operator">-</button>
                    </div>

                    <div>
                        <button onClick={insertValue}>.</button>
                        <button onClick={insertValue}>0</button>
                        <button onClick={insertValue} className="operator">/</button>
                        <button onClick={insertValue} className="operator">*</button>
                    </div>

                    <div className="reset-equal">
                        <button id="btn" onClick={reset}>RESET</button>
                        <button className="equal" onClick={calculate}>=</button>
                    </div>
                </div>
            </div>
        </>
    );
}
