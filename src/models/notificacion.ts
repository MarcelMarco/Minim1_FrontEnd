import { ObjectId, Schema, model } from "mongoose";

export interface Notificacion {
    _id: string;
    name: string;
    descr: string;
    prioridad: number;
    enviada: boolean;
};