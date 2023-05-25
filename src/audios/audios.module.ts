import { Module } from '@nestjs/common';
import { AudiosController } from './audios.controller';
import { AudiosService } from './audios.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AudioSchema } from './schemas/audios.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017', {useNewUrlParser: true}),
    MongooseModule.forFeature([{name: 'Audio', schema: AudioSchema}])
  ],
  controllers: [AudiosController],
  providers: [AudiosService]
})
export class AudiosModule {}
