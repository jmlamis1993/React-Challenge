

export interface IPackage {
    id: number;
    name: string;
    quantity: number;
    price: number;
    productList?: IProduct[];
  }

  export interface IProduct{
    id:number;
    name: string;
    category: string;

  }
   export interface IState{
    cart: IPackage[];
    activePackage: IPackage|null;
    totalAmount : number
   }
   export interface PropsProductView {
    product: IPackage;
    
   }

  export type Actiontype = 
  |{type:"DeletePackage"}
  |{type:"EditPackage"}
  |{type:"SetActivePackage",payload:IPackage}
  |{type:"ClearActivePackage"}