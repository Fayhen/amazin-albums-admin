import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { FirestoreService } from 'src/firebase/firestore.service';
import { Artist } from './interfaces/artist.interface';

@Injectable()
export class ArtistsService {
  constructor(private firestoreService: FirestoreService) {}

  async createArtist(artist: CreateArtistDto): Promise<Artist> {
    const artistData = await this.firestoreService.createArtist(artist);
    const artistAlbums = await this.firestoreService.fetchArtistAlbumUuids(
      artistData.artistId,
    );
    return {
      ...artistData,
      artistId: artistData.artistId,
      albums: artistAlbums,
    };
  }

  async updateArtist(artist: UpdateArtistDto): Promise<Artist> {
    const artistData = await this.firestoreService.setArtist(artist);
    const artistAlbums = await this.firestoreService.fetchArtistAlbumUuids(
      artistData.artistId,
    );
    return {
      ...artistData,
      artistId: artistData.artistId,
      albums: artistAlbums,
    };
  }
}
