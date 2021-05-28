import dotenv from 'dotenv';

dotenv.config();

export const env = {
  PORT: parseInt(process.env.PORT || '1000', 10),
  SECRET_KEY: process.env.SECRET_KEY as string
};
