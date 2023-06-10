import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsController } from './albums/albums.controller';
import { AlbumsService } from './albums/albums.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, AlbumsController],
  providers: [AppService, AlbumsService],
})
export class AppModule {}
