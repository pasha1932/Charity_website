// declare module '*.module.scss' {
//   const classes: { [key: string]: string };
//   export default classes;
// }
declare module '*.scss';
declare module '*.css';
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  const value: string;
  export default value;
}