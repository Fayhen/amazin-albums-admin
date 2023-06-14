import { IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

/**
 * Artist Creation DTO.
 */
export class CreateArtistDto {
  /**
   * Artist's name.
   */
  @IsNotEmpty()
  readonly artistName: string;
  /**
   * Artist's Bandcamp link.
   */
  @IsUrl()
  readonly bandcamp: string;
  /**
   * Artist's Facebook profile link, if any.
   */
  @IsOptional()
  @IsUrl()
  readonly facebook: string;
  /**
   * Artist's online site, if any.
   */
  @IsOptional()
  @IsUrl()
  readonly homepage: string;
  /**
   * Artist's Instagram link, if any.
   */
  @IsOptional()
  @IsUrl()
  readonly instagram: string;
  /**
   * Artist's TikTok link, if any.
   */
  @IsOptional()
  @IsUrl()
  readonly tiktok: string;
  /**
   * Artist's Twitch link, if any.
   */
  @IsOptional()
  @IsUrl()
  readonly twitch: string;
  /**
   * Artist's Twitter link, if any.
   */
  @IsOptional()
  @IsUrl()
  readonly twitter: string;
  /**
   * Artist's YouTube channel, if any.
   */
  @IsOptional()
  @IsUrl()
  readonly youtube: string;
}
