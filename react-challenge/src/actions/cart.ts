import { IPackage } from "../interfaces";

export const ClearActivePackage = () => ({
    type: 'ClearActivePackage',
  });
  export const SetActivePackage = ( pack:IPackage) => ({
    type: 'ClearActivePackage',
    payload : pack
  });  