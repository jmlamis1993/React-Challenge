export const  numberConvert = (number:number) => {
    const aux = number.toFixed(2);
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    console.log(rep);
    return aux.toString().replace(exp,rep);
  }