import { IPackage } from "../interfaces";

export const ClearActivePackage = () => ({
    type: 'ClearActivePackage',
  });
  export const DeletePackage = () => ({    
    type: 'DeletePackage',
  });
  export const UpdateTotalAmount = (total:number) => ({    
    type: 'UpdateTotalAmount',
    payload : total
  });
  export const SetActivePackage = ( pack:IPackage) => ({
    type: 'SetActivePackage',
    payload : pack
  });  