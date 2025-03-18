import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class SeederService implements OnModuleInit {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async onModuleInit() {
    await this.seedMessages();
  }

  async seedMessages() {
    const count = await this.messageModel.countDocuments();
    if (count > 0) {
      console.log('Database already seeded');
      return;
    }

    const messages = [
      {
        leadName: 'Jese Leos',
        campaignName: 'Grow Connection',
        reply: 'Hi Abdullah, thanks for reaching out!',
        joinedAt: new Date('2014-08-01'),
      },
      {
        leadName: 'Sarah Connor',
        campaignName: 'Real Estate',
        reply: 'Hello, are you looking for a property?',
        joinedAt: new Date('2023-05-12'),
      },
      {
        leadName: 'John Doe',
        campaignName: 'Campaign Growth',
        reply: 'Let’s schedule a meeting!',
        joinedAt: new Date('2022-11-20'),
      },

      {
        leadName: 'Jane Doe',
        campaignName: 'Campaign Growth',
        reply: 'Sure, let’s discuss further!',
        joinedAt: new Date('2022-11-20'),
      },
    ];

    await this.messageModel.insertMany(messages);
    console.log('Database seeded successfully');
  }
}
