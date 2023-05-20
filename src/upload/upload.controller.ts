import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadSingleAudio(@UploadedFile() file) {
        const response = {
            name: file.originalName
        }

        console.log(file);
        

        return response;
    }
}
