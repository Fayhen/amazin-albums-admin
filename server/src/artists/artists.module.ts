import { Module } from '@nestjs/common';
import { ArtistsController } from './artists.controller';
import { ArtistsService } from './artists.service';
import { FirestoreModule } from 'src/firebase/firestore.module';

@Module({
  imports: [FirestoreModule],
  controllers: [ArtistsController],
  providers: [ArtistsService],
})
export class AlbumsModule {}
