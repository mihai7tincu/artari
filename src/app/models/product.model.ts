import { ProductSpecies, ProductType } from "./product-type.enum";

export interface Product {
  id: number;
  type: ProductType; //acer, ginkgo, kaki
  species: ProductSpecies; //palmatum, palmatum dissectum, shirasawanum, japonicum
  cultivar: string; //aureum, pixie, jordan
  name: string;
  description: string;
  price: number;
  height: string;
  propagation: string;
  imageUrl: string;
  priority: number;
  isNew: boolean;
  isSoldout: boolean;

  typeName: string;
  speciesName: string;
}
