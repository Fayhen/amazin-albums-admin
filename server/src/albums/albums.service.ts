import { Injectable } from '@nestjs/common';
import { Album } from './interfaces/album.interface';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { FirestoreService } from 'src/firebase/firestore.service';

@Injectable()
export class AlbumsService {
  constructor(private firestoreService: FirestoreService) {}

  /**
   * Creates a new album.
   *
   * Returns the new album data, parsing it as needed.
   *
   * @param album New album data.
   * @returns Parsed album data.
   */
  async createAlbum(album: CreateAlbumDto): Promise<Album> {
    const newAlbum = await this.firestoreService.createAlbum(album);
    delete newAlbum.created;
    delete newAlbum.updated;
    return {
      ...newAlbum,
      releaseDate: newAlbum.releaseDate.toDate().toISOString(),
    };
  }

  /**
   * Updates an existing album.
   *
   * Returns the updated album data, parsing it as needed.
   *
   * @param album Album data to update.
   * @returns Parsed album data.
   */
  async updateAlbum(album: UpdateAlbumDto): Promise<Album | null> {
    const updatedAlbum = await this.firestoreService.setAlbum(album);
    if (!updatedAlbum) {
      return null;
    }
    delete updatedAlbum.created;
    delete updatedAlbum.updated;
    return {
      ...updatedAlbum,
      releaseDate: updatedAlbum.releaseDate.toDate().toISOString(),
    };
  }
}
