import mongoose from "mongoose";

// An interface that describes the properties
// that are required to make a new User
interface UserAttrs {
  email: string;
  username: string;
  description: string;
  picture: string;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Model has
interface UserDoc extends mongoose.Document {
  email: string;
  username: string;
  description: string;
  picture: string;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    picture: {
      type: String,
      required: false,
    }
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

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
