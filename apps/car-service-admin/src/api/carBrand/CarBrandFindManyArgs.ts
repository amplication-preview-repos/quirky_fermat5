import { CarBrandWhereInput } from "./CarBrandWhereInput";
import { CarBrandOrderByInput } from "./CarBrandOrderByInput";

export type CarBrandFindManyArgs = {
  where?: CarBrandWhereInput;
  orderBy?: Array<CarBrandOrderByInput>;
  skip?: number;
  take?: number;
};
