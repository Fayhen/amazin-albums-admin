import { Injectable } from '@nestjs/common';
import { Album } from './interfaces/album.interface';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { FirestoreService } from 'src/firebase/firestore.service';

@Injectable()
export class AlbumsService {
  constructor(private firestoreService: FirestoreService) {}

  private readonly albums: Album[] = [
    {
      albumCaption: 'string',
      albumCover: 'string',
      albumName: 'album1',
      albumUrl: 'string',
      artist: 'string',
      artistId: 'string',
      featured: false,
      iframeSrc: 'string',
      releaseDate: 'string',
      created: 'string',
      views: 1,
    },
    {
      albumCaption: 'string',
      albumCover: 'string',
      albumName: 'album2',
      albumUrl: 'string',
      artist: 'string',
      artistId: 'string',
      featured: false,
      iframeSrc: 'string',
      releaseDate: 'string',
      created: 'string',
      views: 1,
    },
  ];

  findAll(): Album[] {
    return this.albums;
  }

  findByName(name: string): Album | null {
    return (
      this.albums.find((album) => {
        return (album.albumName = name);
      }) || null
    );
  }

  async createAlbum(album: CreateAlbumDto) {
    return await this.firestoreService.createAlbum(album);
  }

  async updateAlbum(album: UpdateAlbumDto) {
    return await this.firestoreService.setAlbum(album);
  }
}
