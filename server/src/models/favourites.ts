import mongoose from "mongoose";

interface Spell {
  id: string;
}

interface FavouritesAttrs {
  userId: string;
  spells: Array<Spell>;
}

interface FavouritesDoc extends mongoose.Document {
  userId: string;
  spells: Array<Spell>;
}

interface FavouritesModel extends mongoose.Model<FavouritesDoc> {
  build(attrs: FavouritesAttrs): FavouritesDoc;
}

const favouritesSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    spells: {
      type: [{ type: String }],
      required: false,
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

favouritesSchema.statics.build = (attrs: FavouritesAttrs) => {
  return new Favourites(attrs);
};

const Favourites = mongoose.model<FavouritesDoc, FavouritesModel>(
  "Favourites",
  favouritesSchema
);

export { Favourites };
