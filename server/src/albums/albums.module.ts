import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';
import { FirestoreModule } from 'src/firebase/firestore.module';

@Module({
  imports: [FirestoreModule],
  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumsModule {}
