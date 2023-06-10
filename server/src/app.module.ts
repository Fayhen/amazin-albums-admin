import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsController } from './albums/albums.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, AlbumsController],
  providers: [AppService],
})
export class AppModule {}
