const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const characterSchema = new Schema(
  {
    name: {
      type: String,

    },
    occupation: {
      type: String,
    },
    weapon: {
        type: String,
      },
    debt: {
        type: Boolean,
      }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Character = model("Character", characterSchema);

module.exports = Character;