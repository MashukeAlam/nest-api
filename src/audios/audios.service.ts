import { Injectable } from '@nestjs/common';
import { CreateAudioDto } from './dto/create-audio.dto';

@Injectable()
export class AudiosService {
    private audios = [
        {id: 1, name: "Hailee"},
        {id: 2, name: "Jane"}
    ];

    getAudios() {
        return this.audios;
    }

    getSingle(id: number) {
        return this.audios.find(el => el.id == id);
    }

    createAudio(cad: CreateAudioDto) {
        const newAudio = {
            ...cad, id: Date.now()
        }

        this.audios.push(newAudio);
    }
}
