import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  query: string;

  @Column()
  createdAt: Date;
}
