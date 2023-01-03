
import { evaluate } from 'mathjs';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/css/button.css';
import { result, update } from '../slices/valueSlice';

const isOperator = (value) => isNaN( value ) && ( value !== '.');

const Button = ({ children }) => {
  
  const state = useSelector( state => state.myValue.value);
  
  const dispatch = useDispatch();

  return (
    <button 
      className={
        `button-container ${isOperator(children) 
          ? 'button-operator' 
          : null}`}
      onClick={
        (children === '=') 
          ? () => dispatch( result( evaluate(state)) ) 
          : (children === 'C')
            ? () => dispatch( result(''))
            : () => dispatch( update( children ))}
    >
      {children}
    </button> 
  );
};

export default Button;
