import { DashingjsConfig } from "../app/dashboard/interfaces/dashingjs-config";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const dashingjsConfig : DashingjsConfig = {
  items: [
    {cols: 1, rows: 2, widget: {icon: null, class: 'bg-primary'}},
    {cols: 1, rows: 1, widget: {icon: null, class: null}},
    {cols: 1, rows: 1, widget: {icon: null, class: "bg-success"}},
    {cols: 1, rows: 1, widget: {icon: null, class: null}},
    {cols: 1, rows: 1, widget: {icon: null, class: "bg-warning text-dark"}},
    {cols: 1, rows: 1, widget: {icon: null, class: null}},
    {cols: 2, rows: 1, widget: {icon: null, class: "bg-sky"}},
    {cols: 1, rows: 1, widget: {icon: null, class: null}},
    {cols: 1, rows: 1, widget: {icon: null, class: "bg-white text-dark"}},
    {cols: 1, rows: 1, widget: {icon: null, class: null}},
    {cols: 1, rows: 1, widget: {icon: null, class: "bg-purple"}},
    {cols: 1, rows: 1, widget: {icon: null, class: ""}},
    {cols: 1, rows: 1, widget: {icon: null, class: null}}
  ]
};

export const environment = {
  production: false,
  dashingjsConfig : dashingjsConfig
};
