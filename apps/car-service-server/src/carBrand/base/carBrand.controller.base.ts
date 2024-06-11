/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CarBrandService } from "../carBrand.service";
import { CarBrandCreateInput } from "./CarBrandCreateInput";
import { CarBrand } from "./CarBrand";
import { CarBrandFindManyArgs } from "./CarBrandFindManyArgs";
import { CarBrandWhereUniqueInput } from "./CarBrandWhereUniqueInput";
import { CarBrandUpdateInput } from "./CarBrandUpdateInput";

export class CarBrandControllerBase {
  constructor(protected readonly service: CarBrandService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CarBrand })
  async createCarBrand(
    @common.Body() data: CarBrandCreateInput
  ): Promise<CarBrand> {
    return await this.service.createCarBrand({
      data: data,
      select: {
        brandName: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CarBrand] })
  @ApiNestedQuery(CarBrandFindManyArgs)
  async carBrands(@common.Req() request: Request): Promise<CarBrand[]> {
    const args = plainToClass(CarBrandFindManyArgs, request.query);
    return this.service.carBrands({
      ...args,
      select: {
        brandName: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CarBrand })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async carBrand(
    @common.Param() params: CarBrandWhereUniqueInput
  ): Promise<CarBrand | null> {
    const result = await this.service.carBrand({
      where: params,
      select: {
        brandName: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CarBrand })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCarBrand(
    @common.Param() params: CarBrandWhereUniqueInput,
    @common.Body() data: CarBrandUpdateInput
  ): Promise<CarBrand | null> {
    try {
      return await this.service.updateCarBrand({
        where: params,
        data: data,
        select: {
          brandName: true,
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CarBrand })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCarBrand(
    @common.Param() params: CarBrandWhereUniqueInput
  ): Promise<CarBrand | null> {
    try {
      return await this.service.deleteCarBrand({
        where: params,
        select: {
          brandName: true,
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}