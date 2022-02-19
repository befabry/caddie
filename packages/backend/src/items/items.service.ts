import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items } from '@prisma/client';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createItemDto: CreateItemDto): Promise<Items> {
    return this.prisma.items.create({ data: createItemDto });
  }

  findAll(): Promise<Items[]> {
    return this.prisma.items.findMany();
  }

  async findOne(id: number): Promise<Items> {
    const item = await this.prisma.items.findUnique({ where: { id } });
    if (!item) {
      throw new NotFoundException('Item not found');
    }

    return item;
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<Items> {
    const item = await this.prisma.items.findUnique({ where: { id } });
    if (!item) {
      throw new NotFoundException('Item not found');
    }

    return this.prisma.items.update({
      where: { id },
      data: { ...updateItemDto },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
