import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// TODO - Fix all the anys
export interface Context {
  prisma: PrismaClient;
  request: any;
}

export function createContext(request: any): Context {
  return { prisma, request };
}
