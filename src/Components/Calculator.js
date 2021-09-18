import React, { useState, useEffect } from 'react'
import './Calculator.css';

const Calculator = () => {

    const [ resultado, setResultado ] = useState("0")
    const [ history, setHistory ] = useState([])

    const handleClick = (e) => {
        if(resultado === "Math Error"){
            setResultado("")
            setResultado(e.target.name);
        } else if(resultado === "0") {
            setResultado(e.target.name);
        } else {
            setResultado(resultado.concat(e.target.name));
        }
    }

    const Limpiar = () => {
        if(resultado === "0"){
            setResultado("0");
        } else {
            setResultado("0");
        };
    };

    const Borrar = () => {
        if(resultado === ""){
            setResultado("0");
        } else if(resultado === "0") {
            setResultado("0")
        } else {
            setResultado(resultado.slice(0, -1));
        };
    };
    
    const Result = () => {
        try {
            if(resultado === "0"){
                return
            } else if( resultado === eval(resultado).toString()){
                return
            } else {
                setHistory([
                {operacion: resultado,
                resFin: eval(resultado).toString()
                },
                ...history 
                ])
                setResultado(eval(resultado).toString())
            }

        } catch (error) {
            setResultado("Math Error")
        }
    }

    useEffect(() => {
        if(resultado === ""){
            setResultado("0")
        } else if(resultado === "Math Error") {
            setTimeout(() => {
                setResultado("0");
            }, [2000])
        } else if(resultado === "0"){
            return
        };
    }, [resultado]);

    return (
        <div className="main-container">
            <div className="container-viewer">             
                <input type="text" value={resultado} readOnly/>
                <button className="button-option delete" onClick={ () => Borrar() } >
                <span className="delete_icon">
                </span>
                </button>
             </div>
            <div>
                <div>
                    <button className="button-option"  name="" onClick={ () => Limpiar() }>C</button>
                    <button className="button-option" name="(" onClick={ (e) => handleClick(e) }>(</button>
                    <button className="button-option" name=")" onClick={ (e) => handleClick(e) }>)</button>
                    <button className="button-option" name="/" onClick={ (e) => handleClick(e) }>&divide;</button>
                </div>
                <div>
                    <button className="button-option" name="7" onClick={ (e) => handleClick(e) }>7</button>
                    <button className="button-option" name="8" onClick={ (e) => handleClick(e) }>8</button>
                    <button className="button-option" name="9" onClick={ (e) => handleClick(e) }>9</button>
                    <button className="button-option"  name="*" onClick={ (e) => handleClick(e) }>&times;</button>
                </div>
                <div>
                    <button className="button-option" name="4" onClick={ (e) => handleClick(e) }>4</button>
                    <button className="button-option" name="5" onClick={ (e) => handleClick(e) }>5</button>
                    <button className="button-option" name="6" onClick={ (e) => handleClick(e) }>6</button>
                    <button className="button-option"  name="-" onClick={ (e) => handleClick(e) }>&ndash;</button>
                </div>
                <div>
                    <button className="button-option"  name="1" onClick={ (e) => handleClick(e) }>1</button>
                    <button className="button-option"  name="2" onClick={ (e) => handleClick(e) }>2</button>
                    <button className="button-option"  name="3" onClick={ (e) => handleClick(e) }>3</button>
                    <button className="button-option"  name="+" onClick={ (e) => handleClick(e) }>+</button>
                </div>
                <div>
                    <button className="button-option" name="." onClick={ (e) => handleClick(e) }>.</button>
                    <button className="button-option" name="0" onClick={ (e) => handleClick(e) }>0</button>
                    <button className="button-option result" onClick={ () => Result() }>=</button>
                </div>
               
            </div>
                { history
                ? 
                    history.map((operation) => (
                    <p key={ operation.id }>{ operation.operacion} = { operation.resFin }</p>))
                : <h2>renderiza algo</h2> }
        </div>

    )
}

export default Calculator
