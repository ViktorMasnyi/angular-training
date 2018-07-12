export class Product {
  constructor(
    public id: number,
    public productName: string,
    public productDescr: string,
    public productIngridients: string[],
    public productPrice: number,
    public productCategory: string
  ) {}
}
