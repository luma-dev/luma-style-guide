declare module 'mod-a' {
  import type * as fs from 'fs';
  import type * as jest from 'jest';
  import type * as util from 'util';

  export declare type fs = fs;
  export declare type util = util;
  export declare type jest = jest;
}

declare module 'mod-b' {
  import type * as fs from 'fs';
  import type * as jest from 'jest';
  import type * as util from 'util';

  // TODO: inconsistent declare
  export type fs = fs;
  export type util = util;
  export type jest = jest;
}
