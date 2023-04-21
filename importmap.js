const importmap = {
  imports: {
    "@browser-modules/dictionary":
      "./node_modules/@browser-modules/dictionary/lib/dictionary.js",
    "@browser-modules/events":
      "./node_modules/@browser-modules/events/lib/events.js",
    "@browser-modules/machine":
      "./node_modules/@browser-modules/machine/lib/machine.js",
    "@browser-modules/web.component":
      "./node_modules/@browser-modules/web.component/lib/component.js",
    "@browser-modules/buttons":
      "./node_modules/@browser-modules/buttons/lib/Buttons.js",
    "@browser-modules/taskbar":
      "./node_modules/@browser-modules/buttons/lib/Taskbar.js",
  },
};

const injectImportmap = (importmap) => {
  const element = document.createElement("script");
  element.type = "importmap";
  element.textContent = JSON.stringify(importmap);
  document.head.appendChild(element);
};

injectImportmap(importmap);