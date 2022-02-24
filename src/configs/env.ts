import dotenv from 'dotenv';

dotenv.config();

export const env = Object.freeze({
  APP_PORT: parseInt(process.env.APP_PORT || '1000', 10)
});
