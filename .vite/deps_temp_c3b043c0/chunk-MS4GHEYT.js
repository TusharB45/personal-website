import {
  require_react_dom
} from "./chunk-JNWZWNEI.js";
import {
  __commonJS
} from "./chunk-AC2VUBZ6.js";

// project_3D_developer_portfolio-main/node_modules/react-dom/client.js
var require_client = __commonJS({
  "project_3D_developer_portfolio-main/node_modules/react-dom/client.js"(exports) {
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

export {
  require_client
};
//# sourceMappingURL=chunk-MS4GHEYT.js.map
