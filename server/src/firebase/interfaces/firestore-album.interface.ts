import { Timestamp } from 'firebase-admin/firestore';

/**
 * Album data saved in Firestore.
 */
export interface FirestoreAlbum {
  /**
   * Bandcamp's album caption used in their album player.
   */
  albumCaption: string;
  /**
   * Bandcamp's URL address to the album cover art.
   */
  albumCover: string;
  /**
   * Album's UUID in Firestore.
   */
  albumId: string;
  /**
   * Album's name.
   */
  albumName: string;
  /**
   * Album's Bandcamp URL address.
   */
  albumUrl: string;
  /**
   * Album's author Firestore ID.
   */
  artistId: string;
  /**
   * Album's author.
   */
  artistName: string;
  /**
   * Timestamp of the album's creation in Firestore.
   */
  created: Timestamp;
  /**
   * `true` if the album is featured. Featured albums appear on a
   * dedicated section in the Amazing Album's website.
   */
  featured: boolean;
  /**
   * Bandcamp's iframe `src` attribute used in their album player.
   */
  iframeSrc: string;
  /**
   * Timestamp of album's release date.
   */
  releaseDate: Timestamp;
  /**
   * Timestamp of the album's last update Firestore.
   */
  updated: Timestamp;
  /**
   * Number of album visualizations in the Amazing Album's website.
   */
  views: number;
}
