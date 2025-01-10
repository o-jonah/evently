import { model, models, Schema } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description: string;
  date: Date;
  location: Location;
  createAt: Date;
  ImageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url: string;
  category: Schema.Types.ObjectId;
  organizer: Schema.Types.ObjectId;
 
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  ImageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String, },
  isFree: { type: Boolean, default: false },
  url: { type: String, },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Event = models.Event || model('Event', EventSchema);

export default Event;