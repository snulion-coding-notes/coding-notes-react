import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FolderModule } from './Folder/folder.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'conf',
      database: 'coding-notes',
      entities: [],
      synchronize: true,
    }),
    // FolderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
