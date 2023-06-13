import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsController } from './albums/albums.controller';
import { AlbumsService } from './albums/albums.service';
import { ArtistsController } from './artists/artists.controller';
import { ArtistsService } from './artists/artists.service';
import { FirestoreService } from './firebase/firestore.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, AlbumsController, ArtistsController],
  providers: [AppService, AlbumsService, ArtistsService, FirestoreService],
})
export class AppModule {}
