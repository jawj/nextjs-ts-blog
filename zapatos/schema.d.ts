/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos, and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 - 2022 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module 'zapatos/schema' {

  import type * as db from 'zapatos/db';

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary { version: 104 }


  /* === schema: public === */

  /* --- enums --- */
  /* (none) */

  /* --- tables --- */

  /**
   * **x**
   * - Table in database
   */
  export namespace x {
    export type Table = 'x';
    export interface Selectable {
      /**
      * **x.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('x_id_seq'::regclass)`
      */
    id: number;
      /**
      * **x.name**
      * - `text` in database
      * - Nullable, no default
      */
    name: string | null;
      /**
      * **x.awesome**
      * - `bool` in database
      * - `NOT NULL`, default: `false`
      */
    awesome: boolean;
    }
    export interface JSONSelectable {
      /**
      * **x.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('x_id_seq'::regclass)`
      */
    id: number;
      /**
      * **x.name**
      * - `text` in database
      * - Nullable, no default
      */
    name: string | null;
      /**
      * **x.awesome**
      * - `bool` in database
      * - `NOT NULL`, default: `false`
      */
    awesome: boolean;
    }
    export interface Whereable {
      /**
      * **x.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('x_id_seq'::regclass)`
      */
    id?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **x.name**
      * - `text` in database
      * - Nullable, no default
      */
    name?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **x.awesome**
      * - `bool` in database
      * - `NOT NULL`, default: `false`
      */
    awesome?: boolean | db.Parameter<boolean> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, boolean | db.Parameter<boolean> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **x.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('x_id_seq'::regclass)`
      */
    id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment;
      /**
      * **x.name**
      * - `text` in database
      * - Nullable, no default
      */
    name?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment;
      /**
      * **x.awesome**
      * - `bool` in database
      * - `NOT NULL`, default: `false`
      */
    awesome?: boolean | db.Parameter<boolean> | db.DefaultType | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **x.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('x_id_seq'::regclass)`
      */
    id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.DefaultType | db.SQLFragment>;
      /**
      * **x.name**
      * - `text` in database
      * - Nullable, no default
      */
    name?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **x.awesome**
      * - `bool` in database
      * - `NOT NULL`, default: `false`
      */
    awesome?: boolean | db.Parameter<boolean> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, boolean | db.Parameter<boolean> | db.DefaultType | db.SQLFragment>;
    }
    export type UniqueIndex = never;
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* --- aggregate types --- */

  export namespace public {  
    export type Table = x.Table;
    export type Selectable = x.Selectable;
    export type JSONSelectable = x.JSONSelectable;
    export type Whereable = x.Whereable;
    export type Insertable = x.Insertable;
    export type Updatable = x.Updatable;
    export type UniqueIndex = x.UniqueIndex;
    export type Column = x.Column;
  
    export type AllBaseTables = [x.Table];
    export type AllForeignTables = [];
    export type AllViews = [];
    export type AllMaterializedViews = [];
    export type AllTablesAndViews = [x.Table];
  }



  /* === global aggregate types === */

  export type Schema = 'public';
  export type Table = public.Table;
  export type Selectable = public.Selectable;
  export type JSONSelectable = public.JSONSelectable;
  export type Whereable = public.Whereable;
  export type Insertable = public.Insertable;
  export type Updatable = public.Updatable;
  export type UniqueIndex = public.UniqueIndex;
  export type Column = public.Column;

  export type AllSchemas = ['public'];
  export type AllBaseTables = [...public.AllBaseTables];
  export type AllForeignTables = [...public.AllForeignTables];
  export type AllViews = [...public.AllViews];
  export type AllMaterializedViews = [...public.AllMaterializedViews];
  export type AllTablesAndViews = [...public.AllTablesAndViews];


  /* === lookups === */

  export type SelectableForTable<T extends Table> = {
    "x": x.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    "x": x.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    "x": x.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    "x": x.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    "x": x.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    "x": x.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    "x": x.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    "x": x.SQL;
  }[T];

}
