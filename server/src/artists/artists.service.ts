import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { FirestoreService } from 'src/firebase/firestore.service';
import { Artist } from './interfaces/artist.interface';

@Injectable()
export class ArtistsService {
  constructor(private firestoreService: FirestoreService) {}

  /**
   * Created a new artist.
   *
   * Returns the new artist data, parsing it as needed.
   *
   * @param artist New artist data.
   * @returns Parsed artist data.
   */
  async createArtist(artist: CreateArtistDto): Promise<Artist> {
    const newArtist = await this.firestoreService.createArtist(artist);
    const artistAlbums = await this.firestoreService.fetchArtistAlbums(
      newArtist.artistId,
    );
    delete newArtist.created;
    delete newArtist.updated;
    return {
      ...newArtist,
      albums: artistAlbums,
    };
  }

  /**
   * Updates an existing artist.
   *
   * Returns the updated artist data, parsing it as needed.
   *
   * @param artist Artist data to updated.
   * @returns parsed artist data.
   */
  async updateArtist(artist: UpdateArtistDto): Promise<Artist | null> {
    const updatedArtist = await this.firestoreService.setArtist(artist);
    if (!updatedArtist) {
      return null;
    }
    const artistAlbums = await this.firestoreService.fetchArtistAlbums(
      updatedArtist.artistId,
    );
    delete updatedArtist.created;
    delete updatedArtist.updated;
    return {
      ...updatedArtist,
      albums: artistAlbums,
    };
  }
}
