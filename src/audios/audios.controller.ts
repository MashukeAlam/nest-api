import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateAudioDto } from './dto/create-audio.dto';
import { AudiosService } from './audios.service';

@Controller('audios')
export class AudiosController {
    constructor(private readonly audiosService: AudiosService) {}
    // GET /
    @Get()
    getAll() {
        return this.audiosService.getAudios();
    }
    // GET /:id
    @Get(':id')
    getOneAudio(@Param('id') id: number) {
        return this.audiosService.getSingle(id); 
    }
    // DELETE /:id
    // POST /
    @Post()
    uploadAudio(@Body() cad: CreateAudioDto) {
        return this.audiosService.createAudio(cad);
    }
}
