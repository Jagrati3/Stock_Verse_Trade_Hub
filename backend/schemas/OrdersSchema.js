const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = { OrdersSchema };

// const mongoose = require("mongoose");

// const OrdersSchema = new mongoose.Schema({
//   name: String,
//   qty: Number,
//   price: Number,
//   mode: String,
// });

// const OrdersModel = mongoose.model("Orders", OrdersSchema);

// module.exports = { OrdersModel };
