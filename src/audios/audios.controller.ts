import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateAudioDto } from './dto/create-audio.dto';
import { AudiosService } from './audios.service';

@Controller('audios')
export class AudiosController {
    constructor(private readonly audiosService: AudiosService) {}
    // GET /
    @Get('/')
    getAll() {
        return this.audiosService.getAudios();
    }
    
    // DELETE /:id
    @Delete(':id')
    deleteById(@Param('id') id: string) {
        return this.audiosService.deleteById(id);
    }

    // POST /
    @Post()
    uploadAudio(@Body() cad: CreateAudioDto) {
        return this.audiosService.createAudio(cad);
    }
}
