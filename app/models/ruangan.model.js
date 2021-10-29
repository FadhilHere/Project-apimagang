module.exports = (mongoose) => {
  const Ruangan = mongoose.model(
    "ruangan",
    mongoose.Schema(
      {
        ruangan: String,
      },
      {
        timestamps: true,
      }
    )
  );
  return Ruangan;
};
