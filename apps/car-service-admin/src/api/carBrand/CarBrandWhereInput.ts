import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CarBrandWhereInput = {
  brandName?: StringNullableFilter;
  id?: StringFilter;
};
