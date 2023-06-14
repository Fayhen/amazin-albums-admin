import { IsNotEmpty, IsBoolean } from 'class-validator';

/**
 * Album update DTO.
 */
export class UpdateAlbumDto {
  /**
   * Bandcamp's album caption used in their album player.
   */
  @IsNotEmpty()
  readonly albumCaption: string;
  /**
   * Bandcamp's URL address to the album cover art.
   */
  @IsNotEmpty()
  readonly albumCover: string;
  /**
   * Albums's UUID in Firestore.
   */
  @IsNotEmpty()
  readonly albumId: string;
  /**
   * Album's name.
   */
  @IsNotEmpty()
  readonly albumName: string;
  /**
   * Album's Bandcamp URL address.
   */
  @IsNotEmpty()
  readonly albumUrl: string;
  /**
   * Author's Firestore UUID.
   */
  @IsNotEmpty()
  readonly artistId: string;
  /**
   * Album's author.
   */
  @IsNotEmpty()
  readonly artistName: string;
  /**
   * `true` if the album is featured. Featured albums appear on a
   * dedicated section in the Amazing Album's website.
   */
  @IsBoolean()
  readonly featured: boolean;
  /**
   * Bandcamp's iframe `src` attribute used in their album player.
   */
  @IsNotEmpty()
  readonly iframeSrc: string;
  /**
   * Timestamp of album's release date.
   */
  @IsNotEmpty()
  readonly releaseDate: string;
}
