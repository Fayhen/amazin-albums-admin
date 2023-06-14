import { Controller, Body, Post, Put, NotFoundException } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { AlbumsService } from './albums.service';
import { Album } from './interfaces/album.interface';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumService: AlbumsService) {}

  @Post()
  async create(@Body() createAlbumDto: CreateAlbumDto): Promise<Album> {
    return await this.albumService.createAlbum(createAlbumDto);
  }

  @Put()
  async update(@Body() updateAlbumDto: UpdateAlbumDto): Promise<Album> {
    const album = await this.albumService.updateAlbum(updateAlbumDto);
    if (!album) {
      throw new NotFoundException();
    }
    return album;
  }
}
