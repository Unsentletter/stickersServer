/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as Context from "../context"
import * as prisma from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  StickersCreateManyWithoutUsersInput: { // input type
    connect?: NexusGenInputs['StickersWhereUniqueInput'][] | null; // [StickersWhereUniqueInput!]
    create?: NexusGenInputs['StickersCreateWithoutUsersInput'][] | null; // [StickersCreateWithoutUsersInput!]
  }
  StickersCreateWithoutUsersInput: { // input type
    created_at?: any | null; // DateTime
    parent?: string | null; // String
    tally?: number | null; // Int
  }
  StickersWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  UsersCreateInput: { // input type
    created_at?: any | null; // DateTime
    email: string; // String!
    ischild?: boolean | null; // Boolean
    name?: string | null; // String
    password: string; // String!
    Stickers?: NexusGenInputs['StickersCreateManyWithoutUsersInput'] | null; // StickersCreateManyWithoutUsersInput
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Mutation: {};
  Query: {};
  Users: prisma.Users;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  StickersCreateManyWithoutUsersInput: NexusGenInputs['StickersCreateManyWithoutUsersInput'];
  StickersCreateWithoutUsersInput: NexusGenInputs['StickersCreateWithoutUsersInput'];
  StickersWhereUniqueInput: NexusGenInputs['StickersWhereUniqueInput'];
  UsersCreateInput: NexusGenInputs['UsersCreateInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    signupUser: NexusGenRootTypes['Users']; // Users!
  }
  Query: { // field return type
    ok: boolean; // Boolean!
  }
  Users: { // field return type
    created_at: any; // DateTime!
    email: string; // String!
    id: number; // Int!
    ischild: boolean; // Boolean!
    name: string | null; // String
    password: string; // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    signupUser: { // args
      data: NexusGenInputs['UsersCreateInput']; // UsersCreateInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Query" | "Users";

export type NexusGenInputNames = "StickersCreateManyWithoutUsersInput" | "StickersCreateWithoutUsersInput" | "StickersWhereUniqueInput" | "UsersCreateInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}