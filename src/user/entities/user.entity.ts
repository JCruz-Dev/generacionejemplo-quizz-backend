import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ schema: 'user-management' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 70,
  })
  firstname: string;

  @Column({
    type: 'varchar',
    length: 70,
  })
  lastname: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  email: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => `CURRENT_TIMESTAMP`,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => `CURRENT_TIMESTAMP`,
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
    default: null,
    nullable: true,
  })
  deletedAt: Date;
}
