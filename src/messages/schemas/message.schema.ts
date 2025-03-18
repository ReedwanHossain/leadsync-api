import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema({ timestamps: true })
export class Message {
  @Prop({ required: true })
  leadName: string;

  @Prop({ required: true })
  campaignName: string;

  @Prop({ required: true })
  reply: string;

  @Prop({ required: true })
  joinedAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
