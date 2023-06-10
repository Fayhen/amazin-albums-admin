import { Injectable } from '@nestjs/common';
import { Album } from './interfaces/album.interface';

@Injectable()
export class AlbumsService {
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
}
