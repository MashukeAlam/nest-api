import { Injectable } from '@nestjs/common';
import { CreateAudioDto } from './dto/create-audio.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Audio, AudioSchema } from './schemas/audios.schema';

@Injectable()
export class AudiosService {
    constructor (@InjectModel('Audio') private readonly audio: Model <Audio>) {}
    

    getAudios() {
        const result = this.audio.find();
        return result;
    }

    getSingle(id: number) {
        
    }

    async createAudio(cad: CreateAudioDto) {
        const newAudio = {
            ...cad, id: Date.now()


        };
        console.log(cad.name, cad.len);
        
        const brandNewAudio = new this.audio(cad);
        console.log(await brandNewAudio.save());
    }
}
