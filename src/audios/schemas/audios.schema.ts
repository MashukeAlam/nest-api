import * as mongoose from 'mongoose';

export const AudioSchema = new mongoose.Schema({
    name: String,
    len: Number,
    id: Number
});

export interface Audio {
    id: number;
    name: string;
    len: number;
}