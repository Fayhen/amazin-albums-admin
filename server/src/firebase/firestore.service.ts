import { Injectable } from '@nestjs/common';
import { App, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, Firestore, Timestamp } from 'firebase-admin/firestore';
import { v4 as uuidV4 } from 'uuid';
import { SetAlbumDto } from './dto/set-album.dto';
import { SetArtistDto } from './dto/set-artist.dto';
import { FirestoreAlbum } from './interfaces/firestore-album.interface';

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

  /**
   * Generates a Firestore document UUID by combining an arbitrary
   * document name with a v4 UUID.
   *
   * The purpose of combining an UUID with an arbitrary name is to
   * facilitate visual human navigation on Firestore.
   *
   * Passing an empty string will simply return a normal v4 UUID.
   *
   * @param name Arbitrary document name or an empty string.
   * @returns Custom Firestore document UUID.
   */
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

  /**
   * Fetches an album from its UUID in Firestore, returning `null`
   * if it is not found.
   *
   * @param uuid Album Firestore UUID.
   * @returns Firestore Album data or `null`.
   */
  async fetchAlbumById(uuid: string): Promise<FirestoreAlbum | null> {
    const albumRef = this.db.collection('albums').doc(uuid);
    const albumSnapshot = await albumRef.get();
    if (!albumSnapshot.exists) {
      return null;
    }
    return albumSnapshot.data() as FirestoreAlbum;
  }

  /**
   * Creates a new album in Firestore.
   *
   * Returns the newly created album data.
   *
   * @param album New album data.
   * @returns Firestore album data.
   */
  async createAlbum(album: SetAlbumDto): Promise<FirestoreAlbum> {
    const albumId = this.generateDocumentUuid(album.albumName);
    const albumRef = this.db.collection('albums').doc(albumId);
    const newAlbum: FirestoreAlbum = {
      ...album,
      albumId,
      releaseDate: Timestamp.fromDate(new Date(album.releaseDate)),
      created: Timestamp.now(),
      updated: Timestamp.now(),
      views: 0,
    };
    await albumRef.set(newAlbum);
    return newAlbum;
  }

  /**
   * Updates an existing album on Firestore.
   *
   * Returns the updated album data, or `null` if it is not found.
   *
   * The `views` and `created` properties, if present, are overwritten
   * by the previously existing data. The `views` property is updated
   * via user visualization on the frontend.
   *
   * @param album Album data to update.
   * @returns Firestore album data or `null`.
   */
  async setAlbum(album: SetAlbumDto): Promise<FirestoreAlbum> {
    const albumRef = this.db.collection('albums').doc(album.albumId);
    const previousData = await this.fetchAlbumById(album.albumId);
    if (!previousData) {
      return null;
    }
    const { albumId, created, views } = previousData;
    const updatedData: FirestoreAlbum = {
      ...album,
      albumId: album.albumId || albumId,
      created,
      releaseDate: Timestamp.fromDate(new Date(album.releaseDate)),
      updated: Timestamp.now(),
      views,
    };
    await albumRef.set(updatedData);
    return updatedData;
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
