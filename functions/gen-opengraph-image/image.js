'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@emotion/core');
var Textfit = _interopDefault(require('react-textfit'));

/** @jsx jsx */
function App() {
  return core.jsx("div", {
    css: {
      width: 1200,
      height: 630,
      backgroundColor: "#DE3C4B",
      position: "absolute",
      display: "flex",
      overflow: "hidden"
    }
  }, core.jsx(core.Global, {
    styles: {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        fontFamily: "system-ui"
      }
    }
  }), core.jsx("div", {
    css: {
      background: "#121212",
      margin: "40px",
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: 15,
      padding: "2rem",
      boxShadow: "\n            0 4.6px 1.9px rgba(0, 0, 0, 0.036),\n            0 9.4px 4.5px rgba(0, 0, 0, 0.052),\n            0 14.8px 8.1px rgba(0, 0, 0, 0.064),\n            0 21.5px 13.5px rgba(0, 0, 0, 0.076),\n            0 31.4px 22.2px rgba(0, 0, 0, 0.088),\n            0 49.6px 38.8px rgba(0, 0, 0, 0.104),\n            0 105px 84px rgba(0, 0, 0, 0.14)"
    }
  }, core.jsx("h1", {
    css: {
      color: "#F2F2F2",
      height: "100%"
    }
  }, core.jsx(Textfit, {
    max: 256,
    min: 24,
    style: {
      minHeight: "80%",
      maxHeight: "80%",
      maxWidth: "80%",
      lineHeight: 1
    }
  }, "How I made opengraph images with serverless functions")), core.jsx("div", {
    css: {
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 24
    }
  }, core.jsx("ul", {
    css: {
      listStyle: "none",
      display: "flex",
      "& li": {
        marginRight: ".5rem",
        "&:not(:last-child):after": {
          content: "'•'",
          marginLeft: ".5rem"
        }
      }
    }
  }, core.jsx("li", null, "ideas"), core.jsx("li", null, "blogging"), core.jsx("li", null, "thoughts")), core.jsx("span", null, "@studio_hungry"))));
}

module.exports = App;
