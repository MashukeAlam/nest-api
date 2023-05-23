import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import axios from 'axios';



@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}

    @Post() 
    @UseInterceptors(FileInterceptor('fileAudio', {
        
        storage: diskStorage({
            destination: './front/uploads',
            filename: (req, file, cb) => {
                const newFileName = `${file.originalname}-${Date.now()}.${extname(file.originalname)}`;
                cb(null, newFileName);
            }
        })
    }))
    uploadSingleAudio(@UploadedFile() file: Express.Multer.File) {
        
        
        
        
        
        return file;
    }
}
