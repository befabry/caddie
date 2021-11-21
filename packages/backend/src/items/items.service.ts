import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item)
    private itemRepository: typeof Item,
  ) {}

  create(createItemDto: CreateItemDto) {
    return this.itemRepository.create(createItemDto);
  }

  findAll() {
    return this.itemRepository.findAll();
  }

  async findOne(id: number) {
    const item = await this.itemRepository.findByPk(id);
    if (!item) {
      throw new NotFoundException('Item not found');
    }

    return item;
  }

  async update(id: number, updateItemDto: Partial<Item>) {
    const item = await this.itemRepository.findByPk(id);
    if (!item) {
      throw new NotFoundException('Item not found');
    }

    return this.itemRepository.update({ ...updateItemDto }, { where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
