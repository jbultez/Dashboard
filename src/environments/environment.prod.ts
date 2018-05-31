import { DashingjsConfig } from "../app/dashboard/interfaces/dashingjs-config";

const dashingjsConfig : DashingjsConfig = {
  items: [
    {cols: 1, rows: 2, widget: {icon: "fa fa-magic", class: 'bg-primary'}},
    {cols: 1, rows: 1, widget: {icon: "fa fa-google", class: 'bg-white text-dark'}},
    {cols: 1, rows: 1, widget: {icon: null, class: "bg-success"}},
    {cols: 1, rows: 1, widget: {icon: "fa fa-youtube", class: "bg-danger"}},
    {cols: 1, rows: 1, widget: {icon: null, class: "bg-warning text-dark"}},
    {cols: 1, rows: 1, widget: {icon: null, class: "bg-info text-dark"}},
    {cols: 2, rows: 1, widget: {icon: "fa fa-cloud", class: "bg-sky"}},
    {cols: 1, rows: 1, widget: {icon: "fa fa-bitcoin", class: "bg-orange"}},
    {cols: 1, rows: 1, widget: {icon: "fa fa-download", class: "bg-white text-dark"}},
    {cols: 1, rows: 1, widget: {icon: "fa fa-github", class: "bg-primary"}},
    {cols: 1, rows: 1, widget: {icon: "fa fa-camera-retro", class: "bg-purple"}},
    {cols: 1, rows: 1, widget: {icon: "", class: ""}},
    {cols: 1, rows: 1, widget: {icon: null, class: null}}
  ]
};


export const environment = {
  production: true,
  dashingjsConfig : dashingjsConfig
};
