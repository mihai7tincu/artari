export enum ProductType {
  Acer = 1,
  Ginkgo,
  Kaki
}

export const ProductTypeNames: Readonly<Record<ProductType, string>> = {
  [ProductType.Acer]: "Acer",
  [ProductType.Ginkgo]: "Ginkgo",
  [ProductType.Kaki]: "Kaki"
}

export const ProductTypeShortNames: Readonly<Record<ProductType, string>> = {
  [ProductType.Acer]: "A.",
  [ProductType.Ginkgo]: "G.",
  [ProductType.Kaki]: "K."
}

export enum ProductSpecies {
  Palmatum = 1,
  PalmatumDissectum,
  Shirasawanum,
  Japonicum
}

export const ProductSpeciesNames: Readonly<Record<ProductSpecies, string>> = {
  [ProductSpecies.Palmatum]: "Palmatum",
  [ProductSpecies.PalmatumDissectum]: "Palmatum Dissectum",
  [ProductSpecies.Shirasawanum]: "Shirasawanum",
  [ProductSpecies.Japonicum]: "Japonicum"
}

export const ProductSpeciesShortNames: Readonly<Record<ProductSpecies, string>> = {
  [ProductSpecies.Palmatum]: "P.",
  [ProductSpecies.PalmatumDissectum]: "P.D.",
  [ProductSpecies.Shirasawanum]: "S.",
  [ProductSpecies.Japonicum]: "J."
}
