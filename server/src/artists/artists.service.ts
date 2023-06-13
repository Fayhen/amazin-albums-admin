import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { FirestoreService } from 'src/firebase/firestore.service';

@Injectable()
export class ArtistsService {
  constructor(private firestoreService: FirestoreService) {}

  async createArtist(artist: CreateArtistDto) {
    return await this.firestoreService.createArtist(artist);
  }

  async updateArtist(artist: UpdateArtistDto) {
    return await this.firestoreService.setArtist(artist);
  }
}
