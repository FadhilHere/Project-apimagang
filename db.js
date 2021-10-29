const url = `mongodb://FadhilTesting:RSnKtLQr9LLkLh26@cluster0-shard-00-00.gcoyp.mongodb.net:27017,cluster0-shard-00-01.gcoyp.mongodb.net:27017,cluster0-shard-00-02.gcoyp.mongodb.net:27017/Project?ssl=true&replicaSet=atlas-orbbz0-shard-0&authSource=admin&retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
