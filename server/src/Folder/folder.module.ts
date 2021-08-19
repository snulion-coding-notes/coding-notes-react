import { Module, Controller } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FolderController } from './folder.controller';
import { Folder } from './folder.entity';
import { FolderService } from './folder.service';

@Module({
  providers: [FolderService],
  imports: [TypeOrmModule.forFeature([Folder])],
  controllers: [FolderController],
})
export class FolderModule {}
