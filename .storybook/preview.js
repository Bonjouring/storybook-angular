
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      { name: 'white', value: '#fff'},
      { name: 'dark', value: '#000'},
      { name: 'theme1', value: '#121a2a'},
      { name: 'theme2', value: '#f05b72'},
    ]
  }
}

// export const decorators = [
//   (storyFunc) => {
//     const story = storyFunc();

//     return {
//       ...story,
//       template: `<div style="margin: 3em">${story.template}</div>`,
//     };
//   },
// ];