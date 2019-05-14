import { app } from './app';

const port = 4000;

app.listen(port, (err: string) => {
  if (err) {
    console.error(`Failed to start server: ${err}`);

    return;
  }

  console.info(`Server started successfully`);
});
