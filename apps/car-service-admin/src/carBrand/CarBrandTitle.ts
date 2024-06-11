import { CarBrand as TCarBrand } from "../api/carBrand/CarBrand";

export const CARBRAND_TITLE_FIELD = "brandName";

export const CarBrandTitle = (record: TCarBrand): string => {
  return record.brandName?.toString() || String(record.id);
};
