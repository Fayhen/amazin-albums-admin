import { Injectable } from '@nestjs/common';
import { App, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { v4 as uuidV4 } from 'uuid';
import { SetAlbumDto } from './dto/set-album.dto';
import { SetArtistDto } from './dto/set-artist.dto';

@Injectable()
export class FirestoreService {
  private defaultApp: App;
  readonly db: Firestore;

  constructor() {
    this.defaultApp = initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      }),
    });
    this.db = getFirestore(this.defaultApp);
    console.log({
      app: this.defaultApp.name,
      config: JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS),
    });
  }

  private generateDocumentUuid(name: string): string {
    const uuid = uuidV4();
    const parsedName = name
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z\s]+/g, '')
      .replace(/\s/g, '_');

    if (parsedName.length === 0) {
      return uuid;
    }

    const fragment = parsedName.slice(0, 5);
    return `${fragment}-${uuid}`;
  }

  async createAlbum(album: SetAlbumDto): Promise<SetAlbumDto> {
    const albumId = this.generateDocumentUuid(album.albumName);
    const albumRef = this.db.collection('albums').doc(albumId);
    const newAlbum: SetAlbumDto = { ...album, albumId };
    await albumRef.set(newAlbum);
    return newAlbum;
  }

  async setAlbum(album: SetAlbumDto): Promise<SetAlbumDto> {
    const albumRef = this.db.collection('albums').doc(album.albumId);
    await albumRef.set(album);
    return album;
  }

  async createArtist(artist: SetArtistDto): Promise<SetArtistDto> {
    const artistId = this.generateDocumentUuid(artist.artistName);
    const artistRef = this.db.collection('artists').doc(artistId);
    const newArtist = { ...artist, artistId };
    await artistRef.set(newArtist);
    return newArtist;
  }

  async setArtist(artist: SetArtistDto): Promise<SetArtistDto> {
    const artistRef = this.db.collection('artists').doc(artist.artistId);
    await artistRef.set(artist);
    return artist;
  }

  async fetchArtistAlbumUuids(artistUuid: string): Promise<string[]> {
    const albumsQueryRef = this.db
      .collection('artists')
      .doc(artistUuid)
      .collection('albums');
    const albumsQuerySnapshot = await albumsQueryRef.get();
    const albumUuids = albumsQuerySnapshot.docs.map((doc) => {
      return doc.id;
    });
    return albumUuids;
  }
}
