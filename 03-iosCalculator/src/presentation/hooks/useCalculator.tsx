import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract= '-',
    multiply = 'x',
    divide = '/',
}

export const useCalculator = () => {
    
    const [formula, setFormula] = useState('');

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>();

    useEffect(() => {
        if( lastOperation.current){
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        }else {
            setFormula(number);
        }
    }, [number]);
    

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        lastOperation.current = undefined;
        setFormula('');
    }

    const deleteOperation = () => {
        let currentSign = '';
        let temporalNumber = number;
        if(number.includes('-')){
            currentSign = '-';
            temporalNumber = number.substring(1);
        }
        if(temporalNumber.length > 1){
            return setNumber(currentSign + temporalNumber.slice(0,-1));
        }
        setNumber('0');
    }

    const toggleSign = () => {
        if(number.includes('-')){
            return setNumber(number.replace('-',''))
        }
        setNumber('-' + number)
    }

    const buildNumber = (numberString : string) => {
        if(number.includes('.') &&  numberString === '.') return;
        
        if(number.startsWith('0') || number.startsWith('-0')){
            // solo un punto decinal
            if(numberString === '.'){
                return setNumber(number + numberString);
            }

            // evaluar si es otro cero y no hay punto
            if( numberString === '0' && number.includes('.')){
                return setNumber(number + numberString);
            }

            // evaluar si es diferente de cero, no hay punto y es el primer numero
            if( numberString !== '0' && !number.includes('.')){
                return setNumber(numberString);
            }

            // evitar multiples ceros antes del punto
            if( numberString === '0' && !number.includes('.')){
                return;
            }
            return setNumber( number + numberString);
        }
        setNumber(number + numberString);
    }

    const setLastNumber = () => {
        if(number.endsWith('.')){
            setPrevNumber(number.slice(0,-1));
        }else{
            setPrevNumber(number);
        }
        setNumber('0');
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }
    
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }
    

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);
        lastOperation.current = undefined;
        setPrevNumber('0');
    }

    const calculateSubResult = () : number=> {
        const [ firstValue, operation, secondValue] = formula.split(' ');
        const n1 = Number(firstValue);
        const n2 = Number(secondValue);

        // si no se ha escrito un segundo numero
        if(isNaN(n2)) return n1;

        switch(operation) {
            case Operator.add:
                return n1 + n2;
            case Operator.subtract:
                return n1 - n2;
            case Operator.multiply:
                return n1 * n2;
            case Operator.divide:
                return n1 / n2;
            default:
                throw new Error('Operation not implemented');
        }
    }

    return {
        // propiedades
        number,
        prevNumber,
        formula,
        // metodos
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult,
    }
}
