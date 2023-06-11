import { Controller, Body, Get, Post } from '@nestjs/common';
import { SaveAlbumDto } from './dto/create-album.dto';
import { AlbumsService } from './albums.service';
import { Album } from './interfaces/album.interface';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumService: AlbumsService) {}

  @Get()
  findAll(): Album[] {
    return this.albumService.findAll();
  }

  @Post()
  async create(@Body() saveAlbumDto: SaveAlbumDto) {
    return await this.albumService.saveAlbum(saveAlbumDto);
  }
}
