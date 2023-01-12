import mongoose from "mongoose";

// An interface that describes the properties
// that are required to make a new Profile
interface ProfileAttrs {
  userId: string;
  description: string;
  picture: string;
}

// An interface that describes the properties
// that a Profile Model has
interface ProfileModel extends mongoose.Model<ProfileDoc> {
  build(attrs: ProfileAttrs): ProfileDoc;
}

// An interface that describes the properties
// that a Profile Model has
interface ProfileDoc extends mongoose.Document {
  userId: string;
  description: string;
  picture: string;
}

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    picture: {
      type: String,
      required: false,
    },
  },
  {
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

userSchema.statics.build = (attrs: ProfileAttrs) => {
  return new Profile(attrs);
};

const Profile = mongoose.model<ProfileDoc, ProfileModel>("Profile", userSchema);

export { Profile };
