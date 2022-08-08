import  cartReducer  from '../reducers/cartReducer';
import { createStore, compose, applyMiddleware } from 'redux';


export const store = createStore(
    cartReducer, 
  
  )
