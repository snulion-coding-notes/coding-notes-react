import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FolderService {
  constructor(@InjectRepository(Folder))
}
