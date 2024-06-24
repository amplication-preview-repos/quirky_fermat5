import * as graphql from "@nestjs/graphql";
import { CarBrandResolverBase } from "./base/carBrand.resolver.base";
import { CarBrand } from "./base/CarBrand";
import { CarBrandService } from "./carBrand.service";

@graphql.Resolver(() => CarBrand)
export class CarBrandResolver extends CarBrandResolverBase {
  constructor(protected readonly service: CarBrandService) {
    super(service);
  }
}
