import express from 'express';
import cors from 'cors';

const expressApp = express();

expressApp.use(cors());

export const app = express();
