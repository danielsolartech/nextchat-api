import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import User from '@Models/user';
import { TokenType } from '@Core/users/enums';

@Entity('user_tokens')
class UserToken {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => User)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;

  @Column()
  type: string;

  @Column({
    type: 'enum',
    enum: TokenType,
    nullable: false,
  })
  token: TokenType;

  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created: string;

  @Column({
    type: 'timestamp',
    nullable: false,
  })
  expire: number;
}

export default UserToken;
