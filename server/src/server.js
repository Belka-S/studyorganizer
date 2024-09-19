const app = require('./app');
const { connectDB, DB_HOST } = require('./db');

const { PORT = 3000 } = process.env;

/* eslint-disable no-console */
(async () => {
  try {
    await connectDB(DB_HOST, { enableUtf8Validation: true });
    console.info('  -> Connected to MongoDB!');
    app.listen(PORT, () => console.log(`  -> Server:  http://localhost:${PORT}/`));
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
})();

// mongoose.connect(DB_HOST).then(app.listen(PORT, () => console.log(`Server started on port ${PORT}`))).catch(err => console.log(err));
