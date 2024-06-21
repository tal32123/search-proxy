import { ApiProperty } from "@nestjs/swagger";

export class HistoryDto {
    @ApiProperty({ description: 'The search query', example: 'example search query' })
    search: string;
  }
  