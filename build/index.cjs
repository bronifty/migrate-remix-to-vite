"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const node_stream = require("node:stream");
const node = require("@remix-run/node");
const react = require("react");
const isbot = require("isbot");
const server = require("react-dom/server");
const react$1 = require("@remix-run/react");
const LiveReload = process.env.NODE_ENV !== "development" ? () => null : () => react.createElement("script", {
  type: "module",
  suppressHydrationWarning: true,
  dangerouslySetInnerHTML: { __html: `
   import RefreshRuntime from "/@id/__x00__virtual:hmr-runtime"
   RefreshRuntime.injectIntoGlobalHook(window)
   window.$RefreshReg$ = () => {}
   window.$RefreshSig$ = () => (type) => type
   window.__vite_plugin_react_preamble_installed__ = true
 ` }
});
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = server.renderToPipeableStream(
      /* @__PURE__ */ jsxRuntime.jsx(
        react$1.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new node_stream.PassThrough();
          const stream = node.createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = server.renderToPipeableStream(
      /* @__PURE__ */ jsxRuntime.jsx(
        react$1.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new node_stream.PassThrough();
          const stream = node.createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const tailwind = "";
function Navigation() {
  return /* @__PURE__ */ jsxRuntime.jsxs("ul", {
    className: "text-red-500",
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsx(react$1.Link, { to: "test", children: "Go to test!" }) }),
      /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsx(react$1.Link, { to: "/", children: "Go bacc!" }) })
    ]
  });
}
function App() {
  return /* @__PURE__ */ jsxRuntime.jsxs("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ jsxRuntime.jsxs("head", {
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("meta", { charSet: "utf-8" }),
          /* @__PURE__ */ jsxRuntime.jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
          /* @__PURE__ */ jsxRuntime.jsx(react$1.Meta, {}),
          /* @__PURE__ */ jsxRuntime.jsx(react$1.Links, {})
        ]
      }),
      /* @__PURE__ */ jsxRuntime.jsxs("body", {
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Navigation, {}),
          /* @__PURE__ */ jsxRuntime.jsx(react$1.Outlet, {}),
          /* @__PURE__ */ jsxRuntime.jsx(react$1.ScrollRestoration, {}),
          /* @__PURE__ */ jsxRuntime.jsx(LiveReload, {}),
          /* @__PURE__ */ jsxRuntime.jsx(react$1.Scripts, {})
        ]
      })
    ]
  });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};
function Index() {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx("div", { children: "index file datas test" }) });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "title": "Hello from MDX"
};
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsx(_components.h1, {
      children: "hello mdx"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "Another line"
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function Test() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("h1", { children: [
      "frontmatter.title: ",
      frontmatter.title
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(MDXContent, {})
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Test
}, Symbol.toStringTag, { value: "Module" }));
const _virtual_serverManifest = { "entry": { "module": "/build/assets/entry.client-1dd82fdc.js", "imports": ["/build/assets/jsx-runtime-26afeca0.js", "/build/assets/components-eb3f5fdc.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasErrorBoundary": false, "module": "/build/assets/root-680ef93c.js", "imports": ["/build/assets/jsx-runtime-26afeca0.js", "/build/assets/components-eb3f5fdc.js"], "css": ["/build/assets/root-308c5a7d.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasErrorBoundary": false, "module": "/build/assets/_index-47773d94.js", "imports": ["/build/assets/jsx-runtime-26afeca0.js"], "css": [] }, "routes/test": { "id": "routes/test", "parentId": "root", "path": "test", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasErrorBoundary": false, "module": "/build/assets/test-32ab98eb.js", "imports": ["/build/assets/jsx-runtime-26afeca0.js"], "css": [] } }, "url": "/build/manifest-a4029441.js", "version": "a4029441" };
const assetsBuildDirectory = "public/build";
const future = { "v3_fetcherPersist": false };
const publicPath = "/build/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/test": {
    id: "routes/test",
    parentId: "root",
    path: "test",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
exports.assets = _virtual_serverManifest;
exports.assetsBuildDirectory = assetsBuildDirectory;
exports.entry = entry;
exports.future = future;
exports.publicPath = publicPath;
exports.routes = routes;
