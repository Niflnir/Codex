import mongoose from "mongoose";
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

export interface SpellAttrs{
  userId: string;
  title: string;
  body: string;
  imagePaths: Array<string>;
}

interface SpellDoc extends mongoose.Document{
  userId: string;
  title: string;
  body: string;
  imagePaths: Array<string>;
  version: number;
}

interface SpellModel extends mongoose.Model<SpellDoc>{
  build(attrs: SpellAttrs): SpellDoc;
} 

const spellSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  imagePaths: {
    type: Array<String>,
    required: false
  },
},{
  toJSON: {
    transform(_, ret){
      ret.id = ret._id;
      delete ret._id;
    }
  }
});

spellSchema.set('versionKey', 'version');
spellSchema.plugin(updateIfCurrentPlugin);

spellSchema.statics.build = (attrs: SpellAttrs) => {
  return new Spell(attrs);
}

const Spell = mongoose.model<SpellDoc, SpellModel>('Spell', spellSchema);

export { Spell };
