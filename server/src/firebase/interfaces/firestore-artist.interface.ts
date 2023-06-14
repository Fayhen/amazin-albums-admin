import { Timestamp } from 'firebase-admin/firestore';

/**
 * Artist data saved in Firestore.
 */
export interface FirestoreArtist {
  /**
   * Artist's UUID in Firestore.
   */
  artistId: string;
  /**
   * Artist's name.
   */
  artistName: string;
  /**
   * Artist's Bandcamp link.
   */
  bandcamp: string;
  /**
   * Timestamp of the album's creation in Firestore.
   */
  created: Timestamp;
  /**
   * Artist's Facebook profile link, if any.
   */
  facebook?: string;
  /**
   * Artist's online site, if any.
   */
  homepage?: string;
  /**
   * Artist's Instagram link, if any.
   */
  instagram?: string;
  /**
   * Artist's TikTok link, if any.
   */
  tiktok?: string;
  /**
   * Artist's Twitch link, if any.
   */
  twitch?: string;
  /**
   * Artist's Twitter link, if any.
   */
  twitter?: string;
  /**
   * Timestamp of the artist's last update in Firestore.
   */
  updated: Timestamp;
  /**
   * Artist's YouTube channel, if any.
   */
  youtube?: string;
}
