import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { PrismaService } from './infrastructure/persistence/prisma/prisma.service';
import { UserRepository } from './infrastructure/persistence/prisma/repositories/user.repository';
import { UserService } from './application/services/user.service';
import { UserController } from './presentation/controllers/user.controller';
import { keycloakConfig } from './infrastructure/auth/keycloak/keycloak.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KeycloakConnectModule.register(keycloakConfig),
  ],
  controllers: [UserController],
  providers: [
    PrismaService,
    UserRepository,
    UserService,
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
})
export class AppModule {}