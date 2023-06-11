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
    let parsed = name
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z\s]+/g, '')
      .replace(/\s/g, '_');

    if (parsed.length === 0) {
      parsed = uuidV4();
    }

    return parsed;
  }

  async saveAlbum(album: SetAlbumDto) {
    const albumId = album.albumId || this.generateDocumentUuid(album.albumName);
    const albumRef = this.db.collection('albums').doc(albumId);
    await albumRef.set(album);
  }

  async saveArtist(artist: SetArtistDto) {
    const artistId = artist.artistId || this.generateDocumentUuid(artist.name);
    const artistRef = this.db.collection('artists').doc(artistId);
    await artistRef.set(artist);
  }
}
