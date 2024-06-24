import { SortOrder } from "../../util/SortOrder";

export type CarBrandOrderByInput = {
  brandName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
