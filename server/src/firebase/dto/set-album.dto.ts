/**
 * Album Firestore creation/update DTO.
 */
export class SetAlbumDto {
  /**
   * Albums's UUID in Firestore.
   */
  readonly albumId?: string;
  /**
   * Bandcamp's album caption used in their album player.
   */
  readonly albumCaption: string;
  /**
   * Bandcamp's URL address to the album cover art.
   */
  readonly albumCover: string;
  /**
   * Album's name.
   */
  readonly albumName: string;
  /**
   * Album's Bandcamp URL address.
   */
  readonly albumUrl: string;
  /**
   * Album's author.
   */
  readonly artist: string;
  /**
   * `true` if the album is featured. Featured albums appear on a
   * dedicated section in the Amazing Album's website.
   */
  readonly featured: boolean;
  /**
   * Bandcamp's iframe `src` attribute used in their album player.
   */
  readonly iframeSrc: string;
  /**
   * Timestamp of album's release date.
   */
  readonly releaseDate: string;
}
