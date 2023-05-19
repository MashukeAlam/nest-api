import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('audios')
export class AudiosController {
    // GET /
    @Get()
    getAll() {
        return [];
    }
    // GET /:id
    @Get(':id')
    getOneAudio(@Param('id') id: string) {
        return {
            id
        };
    }
    // DELETE /:id
    // POST /
    @Post()
    uploadAudio(@Body())
}
