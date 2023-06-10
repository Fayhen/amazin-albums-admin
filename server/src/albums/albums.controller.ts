import { Controller, Body, Get, Post } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
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
  create(@Body() createItemDto: CreateAlbumDto): string {
    return JSON.stringify(createItemDto);
  }
}
