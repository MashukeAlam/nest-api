import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';



@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}

    @Post() 
    @UseInterceptors(FileInterceptor('fileAudio', {
        storage: diskStorage({
            filename: (req, file, cb) => {
                const newFileName = `${file.originalname}-${Date.now()}.${extname(file.originalname)}`;
                cb(null, newFileName);
            }
        })
    }))
    uploadSingleAudio(@UploadedFile() file: Express.Multer.File) {
        
        
        console.log(file.originalname);
        
        return "response";
    }
}
