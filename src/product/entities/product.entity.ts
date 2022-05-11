import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false, default: 0 })
  count: number;
}
