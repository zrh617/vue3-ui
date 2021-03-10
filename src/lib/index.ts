import Switch  from './Switch.vue';
import Button  from './Button.vue';
import Select  from './Select.vue';
import Tabs  from './Tabs.vue';
import Tab  from './Tab.vue';
import Dialog  from './Dialog.vue';
export { openDialog as openDialog } from './openDialog';

export const CloudSwitch = {
  install: undefined
};
export const CloudButton = {
  install: undefined
};
export const CloudSelect = {
  install: undefined
};
export const CloudTabs = {
  install: undefined
};
export const CloudTab = {
  install: undefined
};
export const CloudDialog = {
  install: undefined
};
CloudSwitch.install = Vue => Vue.component(Switch.name, Switch);
CloudButton.install = Vue => Vue.component(Button.name, Button);
CloudSelect.install = Vue => Vue.component(Select.name, Select);
CloudTabs.install = Vue => Vue.component(Tabs.name, Tabs);
CloudTab.install = Vue => Vue.component(Tab.name, Tab);
CloudDialog.install = Vue => Vue.component(Dialog.name, Dialog);

const COMPONENTS = [
  Switch,
  Button,
  Select,
  Tabs,
  Tab,
  Dialog
]

const CloudUI = {
  install: undefined
};

CloudUI.install = function (Vue) {
  COMPONENTS.forEach((component) => {
    Vue.component(component.name, component);
  })
}

export default CloudUI;