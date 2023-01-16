module.exports = {
  multipleMongooseObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject: function (mongooses) {
    return mongooses ? mongooses.toObject() : mongooses;
  },
};
