import { Module } from "@nestjs/common";
import { CarBrandModuleBase } from "./base/carBrand.module.base";
import { CarBrandService } from "./carBrand.service";
import { CarBrandController } from "./carBrand.controller";
import { CarBrandResolver } from "./carBrand.resolver";

@Module({
  imports: [CarBrandModuleBase],
  controllers: [CarBrandController],
  providers: [CarBrandService, CarBrandResolver],
  exports: [CarBrandService],
})
export class CarBrandModule {}
