import { Module } from '@nestjs/common';
import { DuckDuckGoService } from './duckduckgo.service';
import { DuckDuckGoController } from './duckduckgo.controller';
import { HttpModule } from '@nestjs/axios';
import { HistoryModule } from 'src/history/history.module';

@Module({
  imports: [HttpModule, HistoryModule],
  controllers: [DuckDuckGoController],
  providers: [DuckDuckGoService],
})
export class DuckDuckGoModule {}
