import { Module, Injectable } from '@nestjs/common';
import { FirestoreService } from './firestore.service';

@Injectable()
@Module({
  exports: [FirestoreService],
  providers: [FirestoreService],
})
export class FirestoreModule {}
