import { Task } from 'src/tasks/task.entity';
import { Repository, EntityRepository } from 'typeorm';
import { AuthCredentialsDto } from './dto/authCredentials.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const user = new User();

    user.username = username;
    user.password = password;

    await user.save();
  }
}
