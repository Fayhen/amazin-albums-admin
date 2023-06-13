/**
 * Artist Creation DTO.
 */
export class CreateArtistDto {
  /**
   * Artist's name.
   */
  readonly artistName: string;
  /**
   * Artist's Bandcamp link.
   */
  readonly bandcamp: string;
  /**
   * Artist's Facebook profile link, if any.
   */
  readonly facebook?: string;
  /**
   * Artist's online site, if any.
   */
  readonly homepage?: string;
  /**
   * Artist's Instagram link, if any.
   */
  readonly instagram?: string;
  /**
   * Artist's TikTok link, if any.
   */
  readonly tiktok?: string;
  /**
   * Artist's Twitch link, if any.
   */
  readonly twitch?: string;
  /**
   * Artist's Twitter link, if any.
   */
  readonly twitter?: string;
  /**
   * Artist's YouTube channel, if any.
   */
  readonly youtube?: string;
}
