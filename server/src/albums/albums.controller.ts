import { Controller, Body, Get, Post, Put } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
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
  async create(@Body() createAlbumDto: CreateAlbumDto) {
    return await this.albumService.createAlbum(createAlbumDto);
  }

  @Put()
  async update(@Body() updateAlbumDto: UpdateAlbumDto) {
    return await this.albumService.updateAlbum(updateAlbumDto);
  }
}
