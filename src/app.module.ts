import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { UsersModule } from './users/users.module';
import { TrainingsModule } from './trainings/trainings.module';
import { HistoricsModule } from './historics/historics.module';
import { SectorsModule } from './sectors/sectors.module';

@Module({
  imports: [UsersModule, AuthModule, TrainingsModule, HistoricsModule, SectorsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule {}
