import '../components/Calculator'
import '../assets/css/calculator.css'
import Button from './Button';
import Screen from './Screen';
import { useDispatch, useSelector } from 'react-redux';
import { evaluate } from 'mathjs';
import { result } from '../slices/valueSlice';

function Calculator() {

  // const state = useSelector( state => state.myValue.value);
  // const dispatch = useDispatch();

  // const results = () => {
  //   dispatch( result ( evaluate( state ) ))
  // }


  return (
    <section className="container">
      <Screen />
      <section className="row">
        <Button>C</Button>
        <Button>+/-</Button>
        <Button>%</Button>
        <Button>/</Button>
      </section>
      <section className="row">
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>*</Button>
      </section>
      <section className="row">
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
      </section>
      <section className="row">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
      </section>
      <section className="row">
        <Button>0</Button>
        <Button>.</Button>
        <Button>=</Button>
      </section>
    </section>  
  );
};

export default Calculator;
