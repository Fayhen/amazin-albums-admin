import { Controller, Body, Get, Post, Put } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistService: ArtistsService) {}

  @Get()
  findAll() {
    return 'To be implemented';
  }

  @Post()
  async create(@Body() createArtistDto: CreateArtistDto) {
    return await this.artistService.createArtist(createArtistDto);
  }

  @Put()
  async update(@Body() updateArtistDto: UpdateArtistDto) {
    return await this.artistService.updateArtist(updateArtistDto);
  }
}
