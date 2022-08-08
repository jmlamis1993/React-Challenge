import { Actiontype, IState } from "../interfaces/index";
import data from "../components/cartView/data";

const initialState = {
    cart: data,
    activePackage: null,
    totalAmount : 0
};

export default (state:IState = initialState, action: Actiontype) => {
  switch (action.type) {
    case 'DeletePackage':
      return{
        ... state,
        cart : state.cart.filter(             
          e => (e.id !== state.activePackage?.id)                
        ),
        activeEvent: null 
     };
    case 'EditPackage':
      return { ...state };
    case 'SetActivePackage':
      return { ...state, activePackage: action.payload };
    case 'ClearActivePackage':
      return { ...state, activePackage:null };
    default:
      return state;
  }
};
