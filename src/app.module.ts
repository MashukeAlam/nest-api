import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthModule} from './auth/auth.module';
import { AudiosModule } from './audios/audios.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [AuthModule, AudiosModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
