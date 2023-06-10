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
   * Album's author.
   */
  artist: string;
  /**
   * Album's author Firestore ID.
   */
  artistId: string;
  /**
   * Timestamp of album's creation in Firestore.
   */
  created: string;
  /**
   * `true` if the album is featured. Featured albums appear on a
   * dedicated section in the Amazing Album's website.
   */
  readonly featured: boolean;
  /**
   * Bandcamp's iframe `src` attribute used in their album player.
   */
  iframeSrc: string;
  /**
   * Timestamp of album's release date.
   */
  releaseDate: string;
  /**
   * Number of times this album was visualized in the Amazing Album's
   * website.
   */
  views: number;
}
