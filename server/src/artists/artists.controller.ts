import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './interfaces/artist.interface';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistService: ArtistsService) {}

  @Get()
  findAll() {
    return 'To be implemented';
  }

  @Post()
  async create(@Body() createArtistDto: CreateArtistDto): Promise<Artist> {
    return await this.artistService.createArtist(createArtistDto);
  }

  @Put()
  async update(@Body() updateArtistDto: UpdateArtistDto): Promise<Artist> {
    const artist = await this.artistService.updateArtist(updateArtistDto);
    if (!artist) {
      throw new NotFoundException();
    }
    return artist;
  }
}
