import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';

/**
 * A plugin for @atillaguzel/jupyterlab-calm-theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@atillaguzel/jupyterlab-calm-theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    manager.register({
      name: 'JupyterLab calm',
      isLight: false,
      load: function() {
        let meta: HTMLMetaElement = document.createElement("meta");
        meta.name = "theme-color";
        meta.id = "theme-color-calm"
        meta.content = "#1C1E26";
        document.getElementsByTagName("head")[0].appendChild(meta);
        return manager.loadCSS('@atillaguzel/jupyterlab-calm-theme/index.css');
      },
      unload: function() {
        let meta: HTMLElement = document.getElementById("theme-color-calm");
        meta.parentNode.removeChild(meta);
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};

export default plugin;
