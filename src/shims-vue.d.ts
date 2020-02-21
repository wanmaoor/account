declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}

declare module "*.svg" {
  const content: string
  export default content
}

declare module "@wanmaoor/giaoui" {
  const Button: Function
  const Tab: Function
  const TabPanel: Function
}
