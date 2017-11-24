// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
/**
 * 通用的，定义了哪些文件需要定义.
 * 就这里来说，表名了production: false这个值必须在每种环境里都有
 * @type {{production: boolean}}
 */
export const environment = {
  production: false,
  version: 'V1.0.0 Dev'
};
