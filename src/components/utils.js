import { template, templateSettings } from "lodash-es";
export default {
  template(html, data) {
    templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    return template(html)(data);
  }
}