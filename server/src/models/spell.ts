import mongoose from "mongoose";

export interface SpellAttrs {
  userId: string;
  title: string;
  tags: Array<string>;
  body: string;
  favouriteCount: number;
}

interface SpellDoc extends mongoose.Document {
  userId: string;
  title: string;
  tags: Array<string>;
  body: string;
  favouriteCount: number;
}

interface SpellModel extends mongoose.Model<SpellDoc> {
  build(attrs: SpellAttrs): SpellDoc;
}

const spellSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array<String>,
      required: false,
    },
    body: {
      type: String,
      required: true,
    },
    favouriteCount: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

spellSchema.statics.build = (attrs: SpellAttrs) => {
  return new Spell(attrs);
};

const Spell = mongoose.model<SpellDoc, SpellModel>("Spell", spellSchema);

export { Spell };
