import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarBrandServiceBase } from "./base/carBrand.service.base";

@Injectable()
export class CarBrandService extends CarBrandServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
