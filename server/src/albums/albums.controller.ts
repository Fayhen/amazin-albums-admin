import { Controller, Post, Body } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';

@Controller('albums')
export class AlbumsController {
  @Post()
  create(@Body() createItemDto: CreateAlbumDto): string {
    return JSON.stringify(createItemDto);
  }
}
