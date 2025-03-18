import { Controller, Get, Query } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './schemas/message.schema';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  async getMessages(@Query('campaign') campaign?: string): Promise<Message[]> {
    if (campaign) {
      return this.messagesService.findByCampaign(campaign);
    }
    return this.messagesService.findAll();
  }
}
