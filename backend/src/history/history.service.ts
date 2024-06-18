import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistoryEntity } from './entities/history.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoryEntity)
    private historyRepository: Repository<HistoryEntity>,
  ) {}

  async create(query: string): Promise<HistoryEntity> {
    const history = this.historyRepository.create({ query, createdAt: new Date() });
    return this.historyRepository.save(history);
  }

  async findAll(): Promise<HistoryEntity[]> {
    return this.historyRepository.find();
  }

  async findOne(id: number): Promise<HistoryEntity> {
    return this.historyRepository.findOne({ where: { id } });
  }
}
