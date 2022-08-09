import { Actiontype, IPackage, IState } from "../interfaces/index";
import data from "../components/cartview/data";

const initialState = {
    cart: data,
    activePackage: null,
    totalAmount : data.map(({quantity,price}) => quantity*price).reduce((a,c)=> a+c)
};

export default (state:IState = initialState, action: Actiontype) => {
  switch (action.type) {
    
    case 'DeletePackage':
      return{
        ... state,
        cart : state.cart.filter(             
          e => (e.id !== state.activePackage!.id)                
        ),
        activeEvent: null 
     };
    case 'EditPackage':
      return { ...state };
    case 'SetActivePackage':
      return { ...state, activePackage: action.payload };
    case 'ClearActivePackage':
      return { ...state, activePackage:null };
      case 'UpdateTotalAmount':
        return { ...state, totalAmount :action.payload };
    default:
      return state;
  }
};
