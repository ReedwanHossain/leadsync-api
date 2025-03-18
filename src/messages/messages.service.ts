import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async findAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  async findByCampaign(campaign: string): Promise<Message[]> {
    return this.messageModel.find({ campaignName: campaign }).exec();
  }
}
