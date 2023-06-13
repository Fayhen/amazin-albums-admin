/**
 * Album data returned by the API.
 */
export interface Album {
  /**
   * Bandcamp's album caption used in their album player.
   */
  albumCaption: string;
  /**
   * Bandcamp's URL address to the album cover art.
   */
  albumCover: string;
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
  releaseDate: string;
  /**
   * Number of album visualizations in the Amazing Album's website.
   */
  views: number;
}
