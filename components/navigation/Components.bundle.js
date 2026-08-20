// Components bundle — 84 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 3407:89015 Filters (2 variants)
const __venc_Filters = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Filters = p => "choose=" + __venc_Filters(p.choose);
function Filters(_p = {}) {
  const props = {
    ..._p,
    choose: _p.choose ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(30,94,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "All Customers"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 3,
      backgroundColor: "rgb(30,94,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(110,113,145)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "All Customers"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 3,
      backgroundColor: "rgba(110,113,145,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __impls = {
    // figma: choose=Yes
    "choose=true": __body0,
    // figma: choose=No
    "choose=false": __body1
  };
  return (__impls[__vkey_Filters(props)] ?? __body0)();
}

// figma node: 3407:89127 Filters
function Filters2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1018,
      height: 383,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 383,
      top: 137,
      width: 266,
      height: 80,
      overflow: "hidden",
      borderRadius: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 20,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(30,94,255)",
      flexShrink: 0
    }
  }, "All Customers"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 3,
      backgroundColor: "rgb(30,94,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 144,
      top: 20,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, "All Customers"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 3,
      backgroundColor: "rgba(110,113,145,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 134,
      top: 256,
      width: 248,
      height: 24,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(0,0,0)"
    }
  }, "Component Tabs"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 134,
      top: 59,
      width: 280,
      height: 60,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: "60px",
      color: "rgb(0,0,0)"
    }
  }, "Filters"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 134,
      top: 157,
      width: 284,
      height: 24,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(0,0,0)"
    }
  }, "Component Tabs - Active"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 403,
      top: 256,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Filters, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    choose: true
  }), /*#__PURE__*/React.createElement(Filters, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    choose: false
  }), /*#__PURE__*/React.createElement(Filters, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    choose: false
  }), /*#__PURE__*/React.createElement(Filters, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    choose: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "rgb(230,233,244)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
}

// figma node: 821:38284 app_settings_alt (5 variants)
const __venc_AppSettingsAlt = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_AppSettingsAlt = p => "style2=" + __venc_AppSettingsAlt(p.style2);
function AppSettingsAlt(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.965,
    height: 22,
    viewBox: "0 0 16.965 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.518,
      top: 1,
      width: 16.965,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.81 11.74 L 15.99 11.11 L 15.99 10.89 L 16.79 10.26 C 16.95 10.14 16.99 9.92 16.89 9.75 L 16.04 8.27 C 15.97 8.14 15.83 8.07 15.69 8.07 C 15.64 8.07 15.59 8.08 15.54 8.1 L 14.59 8.48 C 14.51 8.43 14.48 8.41 14.4 8.37 L 14.25 7.36 C 14.22 7.15 14.05 7 13.85 7 L 12.14 7 C 11.94 7 11.77 7.15 11.74 7.34 L 11.6 8.35 C 11.57 8.37 11.53 8.38 11.5 8.4 L 11.41 8.46 L 10.46 8.08 C 10.41 8.06 10.36 8.05 10.31 8.05 C 10.17 8.05 10.04 8.12 9.96 8.25 L 9.11 9.73 C 9.01 9.9 9.05 10.12 9.21 10.24 L 10.01 10.87 L 10.01 11.1 L 9.21 11.73 C 9.05 11.85 9.01 12.07 9.11 12.24 L 9.96 13.72 C 10.03 13.85 10.17 13.92 10.31 13.92 C 10.36 13.92 10.41 13.91 10.46 13.89 L 11.41 13.52 C 11.49 13.57 11.53 13.59 11.61 13.63 L 11.76 14.64 C 11.79 14.84 11.96 14.98 12.16 14.98 L 13.87 14.98 C 14.07 14.98 14.24 14.83 14.27 14.64 L 14.42 13.63 C 14.45 13.61 14.49 13.6 14.52 13.58 L 14.61 13.52 L 15.56 13.9 C 15.61 13.92 15.66 13.93 15.71 13.93 C 15.85 13.93 15.98 13.86 16.06 13.73 L 16.91 12.25 C 17.01 12.08 16.97 11.86 16.81 11.74 Z M 13 12.5 C 12.17 12.5 11.5 11.83 11.5 11 C 11.5 10.17 12.17 9.5 13 9.5 C 13.83 9.5 14.5 10.17 14.5 11 C 14.5 11.83 13.83 12.5 13 12.5 Z M 12 16 L 14 16 L 14 20 C 14 21.1 13.1 22 12 22 L 2 22 C 0.9 22 0 21.1 0 20 L 0 2 C 0 0.9 0.9 0 2 0 L 12 0 C 13.1 0 14 0.9 14 2 L 14 6 L 12 6 L 12 5 L 2 5 L 2 17 L 12 17 L 12 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.965,
    height: 22,
    viewBox: "0 0 16.965 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.518,
      top: 1,
      width: 16.965,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.81 11.74 L 15.99 11.11 C 15.99 11.02 15.99 10.98 15.99 10.89 L 16.79 10.26 C 16.95 10.14 16.99 9.92 16.89 9.75 L 16.04 8.27 C 15.97 8.14 15.83 8.07 15.69 8.07 C 15.64 8.07 15.59 8.08 15.54 8.1 L 14.59 8.48 C 14.51 8.43 14.48 8.41 14.4 8.37 L 14.25 7.36 C 14.22 7.15 14.05 7 13.85 7 L 12.14 7 C 11.94 7 11.77 7.15 11.74 7.34 L 11.6 8.35 C 11.57 8.37 11.53 8.38 11.5 8.4 C 11.47 8.42 11.44 8.44 11.41 8.46 L 10.46 8.08 C 10.41 8.06 10.36 8.05 10.31 8.05 C 10.17 8.05 10.04 8.12 9.96 8.25 L 9.11 9.73 C 9.01 9.9 9.05 10.12 9.21 10.24 L 10.01 10.87 C 10.01 10.96 10.01 11 10.01 11.1 L 9.21 11.73 C 9.05 11.85 9.01 12.07 9.11 12.24 L 9.96 13.72 C 10.03 13.85 10.17 13.92 10.31 13.92 C 10.36 13.92 10.41 13.91 10.46 13.89 L 11.41 13.52 C 11.49 13.57 11.53 13.59 11.61 13.63 L 11.76 14.64 C 11.79 14.84 11.96 14.98 12.16 14.98 L 13.87 14.98 C 14.07 14.98 14.24 14.83 14.27 14.64 L 14.42 13.63 C 14.45 13.61 14.49 13.6 14.52 13.58 C 14.55 13.56 14.58 13.54 14.61 13.52 L 15.56 13.9 C 15.61 13.92 15.66 13.93 15.71 13.93 C 15.85 13.93 15.98 13.86 16.06 13.73 L 16.91 12.25 C 17.01 12.08 16.97 11.86 16.81 11.74 Z M 13 12.5 C 12.17 12.5 11.5 11.83 11.5 11 C 11.5 10.17 12.17 9.5 13 9.5 C 13.83 9.5 14.5 10.17 14.5 11 C 14.5 11.83 13.83 12.5 13 12.5 Z M 12 17 L 2 17 L 2 5 L 12 5 L 12 6 L 14 6 L 14 2 C 14 0.9 13.1 0 12 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 20 C 0 21.1 0.9 22 2 22 L 12 22 C 13.1 22 14 21.1 14 20 L 14 16 L 12 16 L 12 17 Z M 2 2 L 12 2 L 12 3 L 2 3 L 2 2 Z M 12 20 L 2 20 L 2 19 L 12 19 L 12 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.839,
    height: 22,
    viewBox: "0 0 16.839 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.581,
      top: 1,
      width: 16.839,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 17 L 2 17 L 2 5 L 12 5 L 12 6 L 14 6 L 14 2 C 14 0.9 13.1 0 12 0 L 2 0.01 C 0.9 0.01 0 0.9 0 2 L 0 20 C 0 21.1 0.9 22 2 22 L 12 22 C 13.1 22 14 21.1 14 20 L 14 16 L 12 16 L 12 17 Z M 16 11 C 16 10.87 15.98 10.74 15.96 10.61 L 16.6 10.13 C 16.8 9.98 16.86 9.69 16.73 9.47 L 16.16 8.51 C 16.03 8.3 15.77 8.21 15.54 8.31 L 14.82 8.61 C 14.62 8.46 14.4 8.32 14.17 8.22 L 14.07 7.45 C 14.04 7.2 13.83 7.02 13.58 7.01 L 12.46 6.99 C 12.2 6.99 11.99 7.17 11.96 7.43 L 11.86 8.22 C 11.62 8.32 11.41 8.45 11.21 8.61 L 10.49 8.31 C 10.26 8.21 9.99 8.3 9.87 8.51 L 9.3 9.47 C 9.17 9.69 9.22 9.97 9.43 10.13 L 10.07 10.61 C 10.02 10.74 10 10.87 10 11 C 10 11.13 10.02 11.25 10.04 11.37 L 9.4 11.86 C 9.2 12.01 9.14 12.29 9.27 12.51 L 9.83 13.48 C 9.96 13.7 10.22 13.79 10.46 13.69 L 11.19 13.38 C 11.39 13.54 11.61 13.68 11.86 13.78 L 11.96 14.55 C 11.99 14.8 12.2 14.99 12.46 14.99 L 13.58 14.99 C 13.83 14.99 14.04 14.8 14.08 14.55 L 14.18 13.78 C 14.42 13.68 14.64 13.54 14.85 13.38 L 15.58 13.69 C 15.81 13.79 16.08 13.7 16.21 13.48 L 16.77 12.51 C 16.9 12.29 16.84 12.01 16.64 11.86 L 16 11.37 C 15.98 11.25 16 11.13 16 11 Z M 13 12.5 C 12.17 12.5 11.5 11.83 11.5 11 C 11.5 10.17 12.17 9.5 13 9.5 C 13.83 9.5 14.5 10.17 14.5 11 C 14.5 11.83 13.83 12.5 13 12.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.965,
    height: 22,
    viewBox: "0 0 16.965 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.518,
      top: 1,
      width: 16.965,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.81 11.74 L 15.99 11.11 C 15.99 11.02 15.99 10.98 15.99 10.89 L 16.79 10.26 C 16.95 10.14 16.99 9.92 16.89 9.75 L 16.04 8.27 C 15.97 8.14 15.83 8.07 15.69 8.07 C 15.64 8.07 15.59 8.08 15.54 8.1 L 14.59 8.48 C 14.51 8.43 14.48 8.41 14.4 8.37 L 14.25 7.36 C 14.22 7.15 14.05 7 13.85 7 L 12.14 7 C 11.94 7 11.77 7.15 11.74 7.34 L 11.6 8.35 C 11.57 8.37 11.53 8.38 11.5 8.4 C 11.47 8.42 11.44 8.44 11.41 8.46 L 10.46 8.08 C 10.41 8.06 10.36 8.05 10.31 8.05 C 10.17 8.05 10.04 8.12 9.96 8.25 L 9.11 9.73 C 9.01 9.9 9.05 10.12 9.21 10.24 L 10.01 10.87 C 10.01 10.96 10.01 11 10.01 11.1 L 9.21 11.73 C 9.05 11.85 9.01 12.07 9.11 12.24 L 9.96 13.72 C 10.03 13.85 10.17 13.92 10.31 13.92 C 10.36 13.92 10.41 13.91 10.46 13.89 L 11.41 13.52 C 11.49 13.57 11.53 13.59 11.61 13.63 L 11.76 14.64 C 11.79 14.84 11.96 14.98 12.16 14.98 L 13.87 14.98 C 14.07 14.98 14.24 14.83 14.27 14.64 L 14.42 13.63 C 14.45 13.61 14.49 13.6 14.52 13.58 C 14.55 13.56 14.58 13.54 14.61 13.52 L 15.56 13.9 C 15.61 13.92 15.66 13.93 15.71 13.93 C 15.85 13.93 15.98 13.86 16.06 13.73 L 16.91 12.25 C 17.01 12.08 16.97 11.86 16.81 11.74 Z M 13 12.5 C 12.17 12.5 11.5 11.83 11.5 11 C 11.5 10.17 12.17 9.5 13 9.5 C 13.83 9.5 14.5 10.17 14.5 11 C 14.5 11.83 13.83 12.5 13 12.5 Z M 0 22 L 0 0 L 14 0 L 14 6 L 12 6 L 12 5 L 2 5 L 2 17 L 12 17 L 12 16 L 14 16 L 14 22 L 0 22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 1,
      width: 16.965,
      height: 22,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.965,
      height: 22,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.965,
    height: 22,
    viewBox: "0 0 16.965 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.965,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.81 11.74 L 15.99 11.11 C 15.99 11.02 15.99 10.98 15.99 10.89 L 16.79 10.26 C 16.95 10.14 16.99 9.92 16.89 9.75 L 16.04 8.27 C 15.97 8.14 15.83 8.07 15.69 8.07 C 15.64 8.07 15.59 8.08 15.54 8.1 L 14.59 8.48 C 14.51 8.43 14.48 8.41 14.4 8.37 L 14.25 7.36 C 14.22 7.15 14.05 7 13.85 7 L 12.14 7 C 11.94 7 11.77 7.15 11.74 7.34 L 11.6 8.35 C 11.57 8.37 11.53 8.38 11.5 8.4 C 11.47 8.42 11.44 8.44 11.41 8.46 L 10.46 8.08 C 10.41 8.06 10.36 8.05 10.31 8.05 C 10.17 8.05 10.04 8.12 9.96 8.25 L 9.11 9.73 C 9.01 9.9 9.05 10.12 9.21 10.24 L 10.01 10.87 C 10.01 10.96 10.01 11 10.01 11.1 L 9.21 11.73 C 9.05 11.85 9.01 12.07 9.11 12.24 L 9.96 13.72 C 10.03 13.85 10.17 13.92 10.31 13.92 C 10.36 13.92 10.41 13.91 10.46 13.89 L 11.41 13.52 C 11.49 13.57 11.53 13.59 11.61 13.63 L 11.76 14.64 C 11.79 14.84 11.96 14.98 12.16 14.98 L 13.87 14.98 C 14.07 14.98 14.24 14.83 14.27 14.64 L 14.42 13.63 C 14.45 13.61 14.49 13.6 14.52 13.58 C 14.55 13.56 14.58 13.54 14.61 13.52 L 15.56 13.9 C 15.61 13.92 15.66 13.93 15.71 13.93 C 15.85 13.93 15.98 13.86 16.06 13.73 L 16.91 12.25 C 17.01 12.08 16.97 11.86 16.81 11.74 Z M 13 12.5 C 12.17 12.5 11.5 11.83 11.5 11 C 11.5 10.17 12.17 9.5 13 9.5 C 13.83 9.5 14.5 10.17 14.5 11 C 14.5 11.83 13.83 12.5 13 12.5 Z M 12 17 L 2 17 L 2 5 L 12 5 L 12 6 L 14 6 L 14 2 C 14 0.9 13.1 0 12 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 20 C 0 21.1 0.9 22 2 22 L 12 22 C 13.1 22 14 21.1 14 20 L 14 16 L 12 16 L 12 17 Z M 2 2 L 12 2 L 12 3 L 2 3 L 2 2 Z M 12 20 L 2 20 L 2 19 L 12 19 L 12 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1,
    viewBox: "0 0 10 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 10,
      height: 1,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 L 0 0 L 0 1 L 10 1 L 10 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1,
    viewBox: "0 0 10 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 19,
      width: 10,
      height: 1,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 L 0 0 L 0 1 L 10 1 L 10 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_AppSettingsAlt(props)] ?? __body0)();
}

// figma node: 821:38299 apps (5 variants)
const __venc_Apps = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Apps = p => "style2=" + __venc_Apps(p.style2);
function Apps(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 L 4 4 L 4 0 L 0 0 L 0 4 Z M 6 16 L 10 16 L 10 12 L 6 12 L 6 16 Z M 0 16 L 4 16 L 4 12 L 0 12 L 0 16 Z M 0 10 L 4 10 L 4 6 L 0 6 L 0 10 Z M 6 10 L 10 10 L 10 6 L 6 6 L 6 10 Z M 12 0 L 12 4 L 16 4 L 16 0 L 12 0 Z M 6 4 L 10 4 L 10 0 L 6 0 L 6 4 Z M 12 10 L 16 10 L 16 6 L 12 6 L 12 10 Z M 12 16 L 16 16 L 16 12 L 12 12 L 12 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body0,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_Apps(props)] ?? __body0)();
}

// figma node: 821:38310 apps_outage (5 variants)
const __venc_AppsOutage = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_AppsOutage = p => "style2=" + __venc_AppsOutage(p.style2);
function AppsOutage(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 L 4 8 L 4 4 L 0 4 L 0 8 Z M 6 20 L 10 20 L 10 16 L 6 16 L 6 20 Z M 0 20 L 4 20 L 4 16 L 0 16 L 0 20 Z M 0 14 L 4 14 L 4 10 L 0 10 L 0 14 Z M 6 14 L 10 14 L 10 10 L 6 10 L 6 14 Z M 12 20 L 16 20 L 16 16 L 12 16 L 12 20 Z M 15 0 C 12.24 0 10 2.24 10 5 C 10 7.76 12.24 10 15 10 C 17.76 10 20 7.76 20 5 C 20 2.24 17.76 0 15 0 Z M 15.5 8 L 14.5 8 L 14.5 7 L 15.5 7 L 15.5 8 Z M 15.5 6 L 14.5 6 L 14.5 2 L 15.5 2 L 15.5 6 Z M 12 14 L 16 14 L 16 11.93 C 15.67 11.98 15.34 12 15 12 C 13.93 12 12.91 11.76 12 11.32 L 12 14 Z M 6 4 L 6 8 L 8.68 8 C 8.24 7.09 8 6.07 8 5 C 8 4.66 8.02 4.33 8.07 4 L 6 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 8 C 3.1 8 4 7.1 4 6 C 4 4.9 3.1 4 2 4 C 0.9 4 0 4.9 0 6 C 0 7.1 0.9 8 2 8 Z M 8 20 C 9.1 20 10 19.1 10 18 C 10 16.9 9.1 16 8 16 C 6.9 16 6 16.9 6 18 C 6 19.1 6.9 20 8 20 Z M 2 20 C 3.1 20 4 19.1 4 18 C 4 16.9 3.1 16 2 16 C 0.9 16 0 16.9 0 18 C 0 19.1 0.9 20 2 20 Z M 2 14 C 3.1 14 4 13.1 4 12 C 4 10.9 3.1 10 2 10 C 0.9 10 0 10.9 0 12 C 0 13.1 0.9 14 2 14 Z M 8 14 C 9.1 14 10 13.1 10 12 C 10 10.9 9.1 10 8 10 C 6.9 10 6 10.9 6 12 C 6 13.1 6.9 14 8 14 Z M 8.07 4 C 8.05 4 8.02 4 8 4 C 6.9 4 6 4.9 6 6 C 6 7.1 6.9 8 8 8 C 8.22 8 8.43 7.96 8.63 7.9 C 8.22 7.01 8 6.03 8 5 C 8 4.66 8.02 4.33 8.07 4 Z M 15 12 C 13.97 12 12.99 11.78 12.1 11.37 C 12.04 11.57 12 11.78 12 12 C 12 13.1 12.9 14 14 14 C 15.1 14 16 13.1 16 12 C 16 11.98 16 11.95 16 11.93 C 15.67 11.98 15.34 12 15 12 Z M 14 20 C 15.1 20 16 19.1 16 18 C 16 16.9 15.1 16 14 16 C 12.9 16 12 16.9 12 18 C 12 19.1 12.9 20 14 20 Z M 15 0 C 12.24 0 10 2.24 10 5 C 10 7.76 12.24 10 15 10 C 17.76 10 20 7.76 20 5 C 20 2.24 17.76 0 15 0 Z M 15.5 7.5 C 15.5 7.78 15.28 8 15 8 C 14.73 8 14.5 7.78 14.5 7.5 C 14.5 7.22 14.72 7 15 7 C 15.28 7 15.5 7.22 15.5 7.5 Z M 15 6 C 14.72 6 14.5 5.78 14.5 5.5 L 14.5 2.5 C 14.5 2.22 14.72 2 15 2 C 15.28 2 15.5 2.22 15.5 2.5 L 15.5 5.5 C 15.5 5.78 15.28 6 15 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 L 4 8 L 4 4 L 0 4 L 0 8 Z M 6 20 L 10 20 L 10 16 L 6 16 L 6 20 Z M 0 20 L 4 20 L 4 16 L 0 16 L 0 20 Z M 0 14 L 4 14 L 4 10 L 0 10 L 0 14 Z M 6 14 L 10 14 L 10 10 L 6 10 L 6 14 Z M 12 20 L 16 20 L 16 16 L 12 16 L 12 20 Z M 15 0 C 12.24 0 10 2.24 10 5 C 10 7.76 12.24 10 15 10 C 17.76 10 20 7.76 20 5 C 20 2.24 17.76 0 15 0 Z M 15.5 8 L 14.5 8 L 14.5 7 L 15.5 7 L 15.5 8 Z M 15.5 6 L 14.5 6 L 14.5 2 L 15.5 2 L 15.5 6 Z M 12 14 L 16 14 L 16 11.93 C 15.67 11.98 15.34 12 15 12 C 13.93 12 12.91 11.76 12 11.32 L 12 14 Z M 6 4 L 6 8 L 8.68 8 C 8.24 7.09 8 6.07 8 5 C 8 4.66 8.02 4.33 8.07 4 L 6 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_AppsOutage(props)] ?? __body0)();
}

// figma node: 821:38321 arrow_back (5 variants)
const __venc_ArrowBack = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ArrowBack = p => "style2=" + __venc_ArrowBack(p.style2);
function ArrowBack(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 7 L 3.83 7 L 9.42 1.41 L 8 0 L 0 8 L 8 16 L 9.41 14.59 L 3.83 9 L 16 9 L 16 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.582,
    height: 15.175,
    viewBox: "0 0 15.582 15.175",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.209,
      top: 4.412,
      width: 15.582,
      height: 15.175
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.582 6.593 L 3.412 6.593 L 8.292 1.713 C 8.682 1.323 8.682 0.683 8.292 0.292 C 7.902 -0.097 7.273 -0.097 6.883 0.292 L 0.292 6.883 C -0.097 7.273 -0.097 7.902 0.292 8.292 L 6.883 14.883 C 7.273 15.273 7.902 15.273 8.292 14.883 C 8.682 14.493 8.682 13.862 8.292 13.472 L 3.412 8.592 L 14.582 8.592 C 15.132 8.592 15.582 8.142 15.582 7.593 C 15.582 7.043 15.132 6.593 14.582 6.593 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_ArrowBack(props)] ?? __body0)();
}

// figma node: 821:38332 arrow_back_ios (5 variants)
const __venc_ArrowBackIos = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ArrowBackIos = p => "style2=" + __venc_ArrowBackIos(p.style2);
function ArrowBackIos(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.670,
    height: 19.800,
    viewBox: "0 0 11.670 19.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.165,
      top: 2.1,
      width: 11.67,
      height: 19.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.67 1.77 L 9.9 0 L 0 9.9 L 9.9 19.8 L 11.67 18.03 L 3.54 9.9 L 11.67 1.77 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.670,
    height: 19.800,
    viewBox: "0 0 11.670 19.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.165,
      top: 2.1,
      width: 11.67,
      height: 19.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.67 1.77 L 9.89 0 L 0 9.9 L 9.9 19.8 L 11.67 18.03 L 3.54 9.9 L 11.67 1.77 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.741,
    height: 18.765,
    viewBox: "0 0 10.741 18.765",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.629,
      top: 2.617,
      width: 10.741,
      height: 18.765
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.373 0.368 C 9.883 -0.123 9.092 -0.123 8.602 0.368 L 0.292 8.677 C -0.097 9.068 -0.097 9.697 0.292 10.087 L 8.602 18.398 C 9.092 18.888 9.883 18.888 10.373 18.398 C 10.863 17.908 10.863 17.118 10.373 16.628 L 3.133 9.377 L 10.382 2.128 C 10.862 1.648 10.863 0.847 10.373 0.368 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.670,
    height: 19.800,
    viewBox: "0 0 11.670 19.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.84,
      top: 2.1,
      width: 11.67,
      height: 19.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.67 1.77 L 9.89 0 L 0 9.9 L 9.9 19.8 L 11.67 18.03 L 3.54 9.9 L 11.67 1.77 L 11.67 1.77 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body1,
    // figma: Style=Two Tone
    "style2=two tone": __body3
  };
  return (__impls[__vkey_ArrowBackIos(props)] ?? __body0)();
}

// figma node: 821:38343 arrow_back_ios_new (5 variants)
const __venc_ArrowBackIosNew = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ArrowBackIosNew = p => "style2=" + __venc_ArrowBackIosNew(p.style2);
function ArrowBackIosNew(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.770,
    height: 20,
    viewBox: "0 0 11.770 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.115,
      top: 2,
      width: 11.77,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.77 1.77 L 10 0 L 0 10 L 10 20 L 11.77 18.23 L 3.54 10 L 11.77 1.77 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.841,
    height: 18.965,
    viewBox: "0 0 10.841 18.965",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.579,
      top: 2.517,
      width: 10.841,
      height: 18.965
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.472 0.368 C 9.982 -0.123 9.192 -0.123 8.702 0.368 L 0.292 8.778 C -0.097 9.168 -0.097 9.797 0.292 10.188 L 8.702 18.597 C 9.192 19.087 9.982 19.087 10.472 18.597 C 10.962 18.108 10.962 17.317 10.472 16.827 L 3.133 9.488 L 10.482 2.138 C 10.962 1.648 10.962 0.858 10.472 0.368 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 2,
      width: 11.77,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.770,
    height: 20,
    viewBox: "0 0 11.770 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.77,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.77 1.77 L 10 0 L 0 10 L 10 20 L 11.77 18.23 L 3.54 10 L 11.77 1.77 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_ArrowBackIosNew(props)] ?? __body0)();
}

// figma node: 821:38355 arrow_downward (5 variants)
const __venc_ArrowDownward = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ArrowDownward = p => "style2=" + __venc_ArrowDownward(p.style2);
function ArrowDownward(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 8 L 14.59 6.59 L 9 12.17 L 9 0 L 7 0 L 7 12.17 L 1.42 6.58 L 0 8 L 8 16 L 16 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.175,
    height: 15.583,
    viewBox: "0 0 15.175 15.583",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.412,
      top: 4.209,
      width: 15.175,
      height: 15.583
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.593 1 L 6.593 12.17 L 1.713 7.29 C 1.323 6.9 0.683 6.9 0.292 7.29 C -0.097 7.68 -0.097 8.31 0.292 8.7 L 6.883 15.29 C 7.273 15.68 7.902 15.68 8.292 15.29 L 14.883 8.7 C 15.273 8.31 15.273 7.68 14.883 7.29 C 14.493 6.9 13.862 6.9 13.472 7.29 L 8.592 12.17 L 8.592 1 C 8.592 0.45 8.142 0 7.593 0 C 7.043 0 6.593 0.45 6.593 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_ArrowDownward(props)] ?? __body0)();
}

// figma node: 821:38366 arrow_drop_down (5 variants)
const __venc_ArrowDropDown = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ArrowDropDown = p => "style2=" + __venc_ArrowDropDown(p.style2);
function ArrowDropDown(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 9.5,
      width: 10,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5 5 L 10 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.180,
    height: 4.593,
    viewBox: "0 0 7.180 4.593",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.41,
      top: 9.704,
      width: 7.18,
      height: 4.593
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.296 1.71 L 2.886 4.3 C 3.276 4.69 3.906 4.69 4.296 4.3 L 6.886 1.71 C 7.516 1.08 7.066 0 6.176 0 L 0.996 0 C 0.106 0 -0.334 1.08 0.296 1.71 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 10,
      width: 10,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5 5 L 10 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_ArrowDropDown(props)] ?? __body0)();
}

// figma node: 821:38377 arrow_drop_down_circle (5 variants)
const __venc_ArrowDropDownCircle = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ArrowDropDownCircle = p => "style2=" + __venc_ArrowDropDownCircle(p.style2);
function ArrowDropDownCircle(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 12 L 6 8 L 14 8 L 10 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 Z M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 13 L 6 9 L 14 9 L 10 13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 9.65 12.65 L 6.86 9.86 C 6.54 9.54 6.76 9 7.21 9 L 12.8 9 C 13.25 9 13.47 9.54 13.15 9.85 L 10.36 12.64 C 10.16 12.84 9.84 12.84 9.65 12.65 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 13 L 6 9 L 14 9 L 10 13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 C 3.59 0 0 3.59 0 8 C 0 12.41 3.59 16 8 16 C 12.41 16 16 12.41 16 8 C 16 3.59 12.41 0 8 0 Z M 8 11 L 4 7 L 12 7 L 8 11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z M 10 13 L 14 9 L 6 9 L 10 13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_ArrowDropDownCircle(props)] ?? __body0)();
}

// figma node: 821:38389 arrow_drop_up (5 variants)
const __venc_ArrowDropUp = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ArrowDropUp = p => "style2=" + __venc_ArrowDropUp(p.style2);
function ArrowDropUp(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 9.5,
      width: 10,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5 L 5 0 L 10 5 L 0 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.180,
    height: 4.593,
    viewBox: "0 0 7.180 4.593",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.41,
      top: 9.704,
      width: 7.18,
      height: 4.593
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.296 2.883 L 2.886 0.292 C 3.276 -0.097 3.906 -0.097 4.296 0.292 L 6.886 2.883 C 7.516 3.513 7.066 4.593 6.176 4.593 L 0.996 4.593 C 0.106 4.593 -0.334 3.513 0.296 2.883 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 9,
      width: 10,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5 L 5 0 L 10 5 L 0 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_ArrowDropUp(props)] ?? __body0)();
}

// figma node: 522:7341 arrow_forward (5 variants)
const __venc_ArrowForward = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ArrowForward = p => "style2=" + __venc_ArrowForward(p.style2);
function ArrowForward(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 L 6.59 1.41 L 12.17 7 L 0 7 L 0 9 L 12.17 9 L 6.59 14.59 L 8 16 L 16 8 L 8 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.583,
    height: 15.185,
    viewBox: "0 0 15.583 15.185",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.209,
      top: 4.408,
      width: 15.583,
      height: 15.185
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 8.592 L 12.17 8.592 L 7.29 13.472 C 6.9 13.862 6.9 14.502 7.29 14.892 C 7.68 15.282 8.31 15.282 8.7 14.892 L 15.29 8.302 C 15.68 7.912 15.68 7.283 15.29 6.893 L 8.71 0.292 C 8.32 -0.097 7.69 -0.097 7.3 0.292 C 6.91 0.683 6.91 1.313 7.3 1.703 L 12.17 6.593 L 1 6.593 C 0.45 6.593 0 7.043 0 7.593 C 0 8.142 0.45 8.592 1 8.592 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_ArrowForward(props)] ?? __body0)();
}

// figma node: 821:38400 arrow_forward_ios (5 variants)
const __venc_ArrowForwardIos = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ArrowForwardIos = p => "style2=" + __venc_ArrowForwardIos(p.style2);
function ArrowForwardIos(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.770,
    height: 20,
    viewBox: "0 0 11.770 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.115,
      top: 2,
      width: 11.77,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.23 L 1.77 20 L 11.77 10 L 1.77 0 L 0 1.77 L 8.23 10 L 0 18.23 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.741,
    height: 18.765,
    viewBox: "0 0 10.741 18.765",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.629,
      top: 2.617,
      width: 10.741,
      height: 18.765
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.369 18.398 C 0.859 18.888 1.649 18.888 2.139 18.398 L 10.449 10.087 C 10.839 9.697 10.839 9.068 10.449 8.677 L 2.139 0.368 C 1.649 -0.123 0.859 -0.123 0.369 0.368 C -0.121 0.858 -0.121 1.648 0.369 2.138 L 7.609 9.387 L 0.359 16.638 C -0.121 17.118 -0.121 17.918 0.369 18.398 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.23,
      top: 2,
      width: 11.77,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.770,
    height: 20,
    viewBox: "0 0 11.770 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.77,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.23 L 1.77 20 L 11.77 10 L 1.77 0 L 0 1.77 L 8.23 10 L 0 18.23 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_ArrowForwardIos(props)] ?? __body0)();
}

// figma node: 821:38412 arrow_left (5 variants)
const __venc_ArrowLeft = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ArrowLeft = p => "style2=" + __venc_ArrowLeft(p.style2);
function ArrowLeft(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 10,
    viewBox: "0 0 5 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.5,
      top: 7,
      width: 5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 L 0 5 L 5 10 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.593,
    height: 7.180,
    viewBox: "0 0 4.593 7.180",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.704,
      top: 8.41,
      width: 4.593,
      height: 7.18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.883 0.296 L 0.292 2.886 C -0.097 3.276 -0.097 3.906 0.292 4.296 L 2.883 6.886 C 3.513 7.516 4.593 7.066 4.593 6.176 L 4.593 0.996 C 4.593 0.106 3.513 -0.334 2.883 0.296 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 10,
    viewBox: "0 0 5 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 7,
      width: 5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 L 0 5 L 5 10 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_ArrowLeft(props)] ?? __body0)();
}

// figma node: 821:38423 arrow_right (5 variants)
const __venc_ArrowRight = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ArrowRight = p => "style2=" + __venc_ArrowRight(p.style2);
function ArrowRight(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 10,
    viewBox: "0 0 5 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.5,
      top: 7,
      width: 5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10 L 5 5 L 0 0 L 0 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.593,
    height: 7.176,
    viewBox: "0 0 4.593 7.176",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.704,
      top: 8.412,
      width: 4.593,
      height: 7.176
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.71 6.88 L 4.3 4.29 C 4.69 3.9 4.69 3.27 4.3 2.88 L 1.71 0.29 C 1.08 -0.33 0 0.11 0 1 L 0 6.17 C 0 7.07 1.08 7.51 1.71 6.88 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 10,
    viewBox: "0 0 5 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 7,
      width: 5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10 L 5 5 L 0 0 L 0 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_ArrowRight(props)] ?? __body0)();
}

// figma node: 821:38434 arrow_upward (5 variants)
const __venc_ArrowUpward = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ArrowUpward = p => "style2=" + __venc_ArrowUpward(p.style2);
function ArrowUpward(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 L 1.41 9.41 L 7 3.83 L 7 16 L 9 16 L 9 3.83 L 14.58 9.42 L 16 8 L 8 0 L 0 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.185,
    height: 15.582,
    viewBox: "0 0 15.185 15.582",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.408,
      top: 4.209,
      width: 15.185,
      height: 15.582
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.592 14.582 L 8.592 3.412 L 13.472 8.292 C 13.862 8.682 14.502 8.682 14.892 8.292 C 15.282 7.902 15.282 7.273 14.892 6.883 L 8.302 0.292 C 7.912 -0.097 7.283 -0.097 6.893 0.292 L 0.292 6.872 C -0.097 7.262 -0.097 7.892 0.292 8.282 C 0.683 8.672 1.313 8.672 1.703 8.282 L 6.593 3.412 L 6.593 14.582 C 6.593 15.132 7.043 15.582 7.593 15.582 C 8.142 15.582 8.592 15.132 8.592 14.582 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_ArrowUpward(props)] ?? __body0)();
}

// figma node: 821:38445 assistant_direction (5 variants)
const __venc_AssistantDirection = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_AssistantDirection = p => "style2=" + __venc_AssistantDirection(p.style2);
function AssistantDirection(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13 9 L 8 9 C 7.4 9 7 9.4 7 10 L 7 14 L 9 14 L 9 11 L 13 11 L 13 13.5 L 16.5 10 L 13 6.5 L 13 9 Z M 11 0 C 4.9 0 0 4.9 0 11 C 0 17.1 4.9 22 11 22 C 17.1 22 22 17.1 22 11 C 22 4.9 17.1 0 11 0 Z M 18.73 11.58 L 11.54 18.8 C 11.19 19.07 10.75 19.07 10.39 18.8 L 3.2 11.58 C 2.93 11.22 2.93 10.78 3.2 10.42 L 10.39 3.2 C 10.74 2.93 11.18 2.93 11.54 3.2 L 18.73 10.42 C 19.09 10.69 19.09 11.22 18.73 11.58 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11 0 C 4.9 0 0 4.9 0 11 C 0 17.1 4.9 22 11 22 C 17.1 22 22 17.1 22 11 C 22 4.9 17.1 0 11 0 Z M 11 20 C 6.01 20 2 15.99 2 11 C 2 6.01 6.01 2 11 2 C 15.99 2 20 6.01 20 11 C 20 15.99 15.99 20 11 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.73 10.42 L 11.54 3.2 C 11.18 2.93 10.74 2.93 10.39 3.2 L 3.2 10.42 C 2.93 10.78 2.93 11.22 3.2 11.58 L 10.39 18.8 C 10.75 19.07 11.19 19.07 11.54 18.8 L 18.73 11.58 C 19.09 11.22 19.09 10.69 18.73 10.42 Z M 12.5 13.5 L 11.09 12.09 L 12.17 11 L 9 11 L 9 14 L 7 14 L 7 10 C 7 9.4 7.4 9 8 9 L 12.17 9 L 11.08 7.91 L 12.5 6.5 L 16 10 L 12.5 13.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.5 9 L 8 9 C 7.45 9 7 9.45 7 10 L 7 13 C 7 13.55 7.45 14 8 14 C 8.55 14 9 13.55 9 13 L 9 11 L 12.5 11 L 12.5 12.29 C 12.5 12.74 13.04 12.96 13.35 12.64 L 15.64 10.35 C 15.84 10.15 15.84 9.84 15.64 9.64 L 13.35 7.35 C 13.04 7.04 12.5 7.26 12.5 7.7 L 12.5 9 Z M 11 0 C 4.9 0 0 4.9 0 11 C 0 17.1 4.9 22 11 22 C 17.1 22 22 17.1 22 11 C 22 4.9 17.1 0 11 0 Z M 18.73 11.58 L 11.54 18.8 C 11.19 19.07 10.75 19.07 10.39 18.8 L 3.2 11.58 C 2.93 11.22 2.93 10.78 3.2 10.42 L 10.39 3.2 C 10.74 2.93 11.18 2.93 11.54 3.2 L 18.73 10.42 C 19.09 10.69 19.09 11.22 18.73 11.58 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.5 9 L 7 9 L 7 14 L 9 14 L 9 11 L 12.5 11 L 12.5 13.5 L 16 10 L 12.5 6.5 L 12.5 9 Z M 11 0 C 4.9 0 0 4.9 0 11 C 0 17.1 4.9 22 11 22 C 17.1 22 22 17.1 22 11 C 22 4.9 17.1 0 11 0 Z M 19.31 11 L 10.97 19.37 L 2.62 11 L 10.96 2.63 L 19.31 11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 22,
      height: 22,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 22,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 18,
      height: 18,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 C 4.01 0 0 4.01 0 9 C 0 13.99 4.01 18 9 18 C 13.99 18 18 13.99 18 9 C 18 4.01 13.99 0 9 0 Z M 9.54 16.8 C 9.19 17.07 8.75 17.07 8.39 16.8 L 1.2 9.58 C 0.93 9.22 0.93 8.78 1.2 8.42 L 8.39 1.2 C 8.74 0.93 9.18 0.93 9.54 1.2 L 16.73 8.42 C 17.09 8.69 17.09 9.22 16.73 9.58 L 9.54 16.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11 0 C 4.9 0 0 4.9 0 11 C 0 17.1 4.9 22 11 22 C 17.1 22 22 17.1 22 11 C 22 4.9 17.1 0 11 0 Z M 11 20 C 6.01 20 2 15.99 2 11 C 2 6.01 6.01 2 11 2 C 15.99 2 20 6.01 20 11 C 20 15.99 15.99 20 11 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.003,
    height: 16.005,
    viewBox: "0 0 16.003 16.005",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.997,
      top: 2.997,
      width: 16.003,
      height: 16.005
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.733 7.423 L 8.543 0.203 C 8.183 -0.067 7.743 -0.067 7.393 0.203 L 0.203 7.423 C -0.067 7.783 -0.067 8.223 0.203 8.583 L 7.393 15.802 C 7.753 16.073 8.193 16.073 8.543 15.802 L 15.733 8.583 C 16.093 8.223 16.093 7.693 15.733 7.423 Z M 9.503 10.503 L 9.503 8.003 L 6.003 8.003 L 6.003 11.003 L 4.003 11.003 L 4.003 7.003 C 4.003 6.403 4.403 6.003 5.003 6.003 L 9.503 6.003 L 9.503 3.503 L 13.003 7.003 L 9.503 10.503 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_AssistantDirection(props)] ?? __body0)();
}

// figma node: 821:38460 campaign (5 variants)
const __venc_Campaign = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Campaign = p => "style2=" + __venc_Campaign(p.style2);
function Campaign(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 16,
    viewBox: "0 0 20 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 4,
      width: 20,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 7 L 16 9 L 20 9 L 20 7 L 16 7 Z M 14 13.61 C 14.96 14.32 16.21 15.26 17.2 16 C 17.6 15.47 18 14.93 18.4 14.4 C 17.41 13.66 16.16 12.72 15.2 12 C 14.8 12.54 14.4 13.08 14 13.61 Z M 18.4 1.6 C 18 1.07 17.6 0.53 17.2 0 C 16.21 0.74 14.96 1.68 14 2.4 C 14.4 2.93 14.8 3.47 15.2 4 C 16.16 3.28 17.41 2.35 18.4 1.6 Z M 2 5 C 0.9 5 0 5.9 0 7 L 0 9 C 0 10.1 0.9 11 2 11 L 3 11 L 3 15 L 5 15 L 5 11 L 6 11 L 11 14 L 11 2 L 6 5 L 2 5 Z M 13.5 8 C 13.5 6.67 12.92 5.47 12 4.65 L 12 11.34 C 12.92 10.53 13.5 9.33 13.5 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 16,
    viewBox: "0 0 20 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 4,
      width: 20,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 7 C 16 7.67 16 8.33 16 9 C 17.2 9 18.76 9 20 9 C 20 8.33 20 7.67 20 7 C 18.76 7 17.2 7 16 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14 13.61 C 14.96 14.32 16.21 15.26 17.2 16 C 17.6 15.47 18 14.93 18.4 14.4 C 17.41 13.66 16.16 12.72 15.2 12 C 14.8 12.54 14.4 13.08 14 13.61 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.4 1.6 C 18 1.07 17.6 0.53 17.2 0 C 16.21 0.74 14.96 1.68 14 2.4 C 14.4 2.93 14.8 3.47 15.2 4 C 16.16 3.28 17.41 2.35 18.4 1.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2 5 C 0.9 5 0 5.9 0 7 L 0 9 C 0 10.1 0.9 11 2 11 L 3 11 L 3 15 L 5 15 L 5 11 L 6 11 L 11 14 L 11 2 L 6 5 L 2 5 Z M 7.03 6.71 L 9 5.53 L 9 10.47 L 7.03 9.29 L 6.55 9 L 2 9 L 2 7 L 6.55 7 L 7.03 6.71 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.5 8 C 13.5 6.67 12.92 5.47 12 4.65 L 12 11.34 C 12.92 10.53 13.5 9.33 13.5 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 15.208,
    viewBox: "0 0 20 15.208",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 4.396,
      width: 20,
      height: 15.208
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 7.609 C 16 8.159 16.45 8.609 17 8.609 L 19 8.609 C 19.55 8.609 20 8.159 20 7.609 C 20 7.059 19.55 6.609 19 6.609 L 17 6.609 C 16.45 6.609 16 7.059 16 7.609 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.59 12.429 C 14.26 12.869 14.35 13.479 14.79 13.799 C 15.32 14.189 15.88 14.609 16.41 15.009 C 16.85 15.339 17.47 15.249 17.79 14.809 C 17.79 14.799 17.8 14.799 17.8 14.789 C 18.13 14.349 18.04 13.729 17.6 13.409 C 17.07 13.009 16.51 12.589 15.99 12.199 C 15.55 11.869 14.93 11.969 14.6 12.409 C 14.6 12.419 14.59 12.429 14.59 12.429 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.81 0.419 C 17.81 0.409 17.8 0.409 17.8 0.399 C 17.47 -0.041 16.85 -0.131 16.42 0.199 C 15.89 0.599 15.32 1.019 14.8 1.419 C 14.36 1.749 14.28 2.369 14.61 2.799 C 14.61 2.809 14.62 2.809 14.62 2.819 C 14.95 3.259 15.56 3.349 16 3.019 C 16.53 2.629 17.09 2.199 17.62 1.799 C 18.05 1.479 18.13 0.859 17.81 0.419 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6 4.609 L 2 4.609 C 0.9 4.609 0 5.509 0 6.609 L 0 8.609 C 0 9.709 0.9 10.609 2 10.609 L 3 10.609 L 3 13.609 C 3 14.159 3.45 14.609 4 14.609 C 4.55 14.609 5 14.159 5 13.609 L 5 10.609 L 6 10.609 L 11 13.609 L 11 1.609 L 6 4.609 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.5 7.609 C 13.5 6.279 12.92 5.079 12 4.259 L 12 10.949 C 12.92 10.139 13.5 8.939 13.5 7.609 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 16,
    viewBox: "0 0 20 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 4,
      width: 20,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 7 C 16 7.67 16 8.33 16 9 C 17.2 9 18.76 9 20 9 C 20 8.33 20 7.67 20 7 C 18.76 7 17.2 7 16 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14 13.61 C 14.96 14.32 16.21 15.26 17.2 16 C 17.6 15.47 18 14.93 18.4 14.4 C 17.41 13.66 16.16 12.72 15.2 12 C 14.8 12.54 14.4 13.08 14 13.61 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.4 1.6 C 18 1.07 17.6 0.53 17.2 0 C 16.21 0.74 14.96 1.68 14 2.4 C 14.4 2.93 14.8 3.47 15.2 4 C 16.16 3.28 17.41 2.35 18.4 1.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6 5 L 0 5 L 0 11 L 3 11 L 3 15 L 5 15 L 5 11 L 6 11 L 11 14 L 11 2 L 6 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.5 8 C 13.5 6.67 12.92 5.47 12 4.65 L 12 11.34 C 12.92 10.53 13.5 9.33 13.5 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 2,
    viewBox: "0 0 4 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 11,
      width: 4,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0 0.67 0 1.33 0 2 C 1.2 2 2.76 2 4 2 C 4 1.33 4 0.67 4 0 C 2.76 0 1.2 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.400,
    height: 4,
    viewBox: "0 0 4.400 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      width: 4.4,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.61 C 0.96 2.32 2.21 3.26 3.2 4 C 3.6 3.47 4 2.93 4.4 2.4 C 3.41 1.66 2.16 0.72 1.2 0 C 0.8 0.54 0.4 1.08 0 1.61 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.400,
    height: 4,
    viewBox: "0 0 4.400 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 16,
      top: 4,
      width: 4.4,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.4 1.6 C 4 1.07 3.6 0.53 3.2 0 C 2.21 0.74 0.96 1.68 0 2.4 C 0.4 2.93 0.8 3.47 1.2 4 C 2.16 3.28 3.41 2.35 4.4 1.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 13,
    viewBox: "0 0 11 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 6,
      width: 11,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 3 C 0.9 3 0 3.9 0 5 L 0 7 C 0 8.1 0.9 9 2 9 L 3 9 L 3 13 L 5 13 L 5 9 L 6 9 L 11 12 L 11 0 L 6 3 L 2 3 Z M 7.03 4.71 L 9 3.53 L 9 8.47 L 7.03 7.29 L 6.55 7 L 6 7 L 2 7 L 2 5 L 6 5 L 6.55 5 L 7.03 4.71 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.500,
    height: 6.690,
    viewBox: "0 0 1.500 6.690",
    fill: "none",
    style: {
      position: "absolute",
      left: 14,
      top: 8.65,
      width: 1.5,
      height: 6.69
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.5 3.35 C 1.5 2.02 0.92 0.82 0 0 L 0 6.69 C 0.92 5.88 1.5 4.68 1.5 3.35 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 4.940,
    viewBox: "0 0 7 4.940",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 9.53,
      width: 7,
      height: 4.94,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.03 1.18 L 7 0 L 7 4.94 L 5.03 3.76 L 4.55 3.47 L 4 3.47 L 0 3.47 L 0 1.47 L 4 1.47 L 4.55 1.47 L 5.03 1.18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_Campaign(props)] ?? __body0)();
}

// figma node: 821:38476 cancel (5 variants)
const __venc_Cancel = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Cancel = p => "style2=" + __venc_Cancel(p.style2);
function Cancel(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.47 0 0 4.47 0 10 C 0 15.53 4.47 20 10 20 C 15.53 20 20 15.53 20 10 C 20 4.47 15.53 0 10 0 Z M 15 13.59 L 13.59 15 L 10 11.41 L 6.41 15 L 5 13.59 L 8.59 10 L 5 6.41 L 6.41 5 L 10 8.59 L 13.59 5 L 15 6.41 L 11.41 10 L 15 13.59 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.47 0 0 4.47 0 10 C 0 15.53 4.47 20 10 20 C 15.53 20 20 15.53 20 10 C 20 4.47 15.53 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z M 13.59 5 L 10 8.59 L 6.41 5 L 5 6.41 L 8.59 10 L 5 13.59 L 6.41 15 L 10 11.41 L 13.59 15 L 15 13.59 L 11.41 10 L 15 6.41 L 13.59 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.47 0 0 4.47 0 10 C 0 15.53 4.47 20 10 20 C 15.53 20 20 15.53 20 10 C 20 4.47 15.53 0 10 0 Z M 14.3 14.3 C 13.91 14.69 13.28 14.69 12.89 14.3 L 10 11.41 L 7.11 14.3 C 6.72 14.69 6.09 14.69 5.7 14.3 C 5.31 13.91 5.31 13.28 5.7 12.89 L 8.59 10 L 5.7 7.11 C 5.31 6.72 5.31 6.09 5.7 5.7 C 6.09 5.31 6.72 5.31 7.11 5.7 L 10 8.59 L 12.89 5.7 C 13.28 5.31 13.91 5.31 14.3 5.7 C 14.69 6.09 14.69 6.72 14.3 7.11 L 11.41 10 L 14.3 12.89 C 14.68 13.27 14.68 13.91 14.3 14.3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 C 3.59 0 0 3.59 0 8 C 0 12.41 3.59 16 8 16 C 12.41 16 16 12.41 16 8 C 16 3.59 12.41 0 8 0 Z M 13 11.59 L 11.59 13 L 8 9.41 L 4.41 13 L 3 11.59 L 6.59 8 L 3 4.41 L 4.41 3 L 8 6.59 L 11.59 3 L 13 4.41 L 9.41 8 L 13 11.59 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.47 0 0 4.47 0 10 C 0 15.53 4.47 20 10 20 C 15.53 20 20 15.53 20 10 C 20 4.47 15.53 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z M 13.59 5 L 10 8.59 L 6.41 5 L 5 6.41 L 8.59 10 L 5 13.59 L 6.41 15 L 10 11.41 L 13.59 15 L 15 13.59 L 11.41 10 L 15 6.41 L 13.59 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body3
  };
  return (__impls[__vkey_Cancel(props)] ?? __body0)();
}

// figma node: 821:38488 check (5 variants)
const __venc_Check = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Check = p => "style2=" + __venc_Check(p.style2);
function Check(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.590,
    height: 13.410,
    viewBox: "0 0 17.590 13.410",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.205,
      top: 5.295,
      width: 17.59,
      height: 13.41
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.59 10.58 L 1.42 6.41 L 0 7.82 L 5.59 13.41 L 17.59 1.41 L 16.18 0 L 5.59 10.58 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.755,
    height: 12.575,
    viewBox: "0 0 16.755 12.575",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.622,
      top: 5.713,
      width: 16.755,
      height: 12.575
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.173 10.162 L 1.703 6.692 C 1.313 6.302 0.683 6.302 0.292 6.692 C -0.097 7.082 -0.097 7.712 0.292 8.102 L 4.473 12.283 C 4.863 12.673 5.493 12.673 5.883 12.283 L 16.463 1.702 C 16.853 1.312 16.853 0.683 16.463 0.292 C 16.073 -0.097 15.442 -0.097 15.052 0.292 L 5.173 10.162 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.590,
    height: 13.410,
    viewBox: "0 0 17.590 13.410",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.41,
      top: 5.59,
      width: 17.59,
      height: 13.41
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.59 10.58 L 1.42 6.41 L 0 7.82 L 5.59 13.41 L 17.59 1.41 L 16.18 0 L 5.59 10.58 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_Check(props)] ?? __body0)();
}

// figma node: 821:38499 chevron_left (5 variants)
const __venc_ChevronLeft = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ChevronLeft = p => "style2=" + __venc_ChevronLeft(p.style2);
function ChevronLeft(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.410,
    height: 12,
    viewBox: "0 0 7.410 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.295,
      top: 6,
      width: 7.41,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.41 1.41 L 6 0 L 0 6 L 6 12 L 7.41 10.59 L 2.83 6 L 7.41 1.41 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.585,
    height: 11.175,
    viewBox: "0 0 6.585 11.175",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.708,
      top: 6.413,
      width: 6.585,
      height: 11.175
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.293 0.292 C 5.903 -0.097 5.273 -0.097 4.883 0.292 L 0.292 4.883 C -0.097 5.273 -0.097 5.903 0.292 6.293 L 4.883 10.882 C 5.273 11.272 5.903 11.272 6.293 10.882 C 6.682 10.492 6.682 9.863 6.293 9.472 L 2.412 5.582 L 6.293 1.702 C 6.682 1.312 6.673 0.673 6.293 0.292 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.410,
    height: 12,
    viewBox: "0 0 7.410 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 6,
      width: 7.41,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.41 1.41 L 6 0 L 0 6 L 6 12 L 7.41 10.59 L 2.83 6 L 7.41 1.41 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_ChevronLeft(props)] ?? __body0)();
}

// figma node: 821:38510 chevron_right (5 variants)
const __venc_ChevronRight = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ChevronRight = p => "style2=" + __venc_ChevronRight(p.style2);
function ChevronRight(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.410,
    height: 12,
    viewBox: "0 0 7.410 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.295,
      top: 6,
      width: 7.41,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.41 0 L 0 1.41 L 4.58 6 L 0 10.59 L 1.41 12 L 7.41 6 L 1.41 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.585,
    height: 11.166,
    viewBox: "0 0 6.585 11.166",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.708,
      top: 6.417,
      width: 6.585,
      height: 11.166
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.292 0.294 C -0.097 0.684 -0.097 1.314 0.292 1.704 L 4.173 5.584 L 0.292 9.464 C -0.097 9.854 -0.097 10.484 0.292 10.874 C 0.683 11.264 1.312 11.264 1.702 10.874 L 6.293 6.284 C 6.682 5.894 6.682 5.264 6.293 4.874 L 1.702 0.284 C 1.322 -0.096 0.683 -0.096 0.292 0.294 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.410,
    height: 12,
    viewBox: "0 0 7.410 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.59,
      top: 6,
      width: 7.41,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.41 0 L 0 1.41 L 4.58 6 L 0 10.59 L 1.41 12 L 7.41 6 L 1.41 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_ChevronRight(props)] ?? __body0)();
}

// figma node: 821:38521 close (5 variants)
const __venc_Close = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Close = p => "style2=" + __venc_Close(p.style2);
function Close(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 1.41 L 12.59 0 L 7 5.59 L 1.41 0 L 0 1.41 L 5.59 7 L 0 12.59 L 1.41 14 L 7 8.41 L 12.59 14 L 14 12.59 L 8.41 7 L 14 1.41 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.185,
    height: 13.185,
    viewBox: "0 0 13.185 13.185",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.408,
      top: 5.408,
      width: 13.185,
      height: 13.185
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.892 0.303 C 12.502 -0.087 11.872 -0.087 11.482 0.303 L 6.593 5.183 L 1.703 0.292 C 1.313 -0.097 0.683 -0.097 0.292 0.292 C -0.097 0.683 -0.097 1.313 0.292 1.703 L 5.183 6.593 L 0.292 11.482 C -0.097 11.872 -0.097 12.502 0.292 12.892 C 0.683 13.282 1.313 13.282 1.703 12.892 L 6.593 8.002 L 11.482 12.892 C 11.872 13.282 12.502 13.282 12.892 12.892 C 13.282 12.502 13.282 11.872 12.892 11.482 L 8.002 6.593 L 12.892 1.703 C 13.272 1.323 13.272 0.683 12.892 0.303 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_Close(props)] ?? __body0)();
}

// figma node: 821:38532 double_arrow (5 variants)
const __venc_DoubleArrow = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DoubleArrow = p => "style2=" + __venc_DoubleArrow(p.style2);
function DoubleArrow(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.500,
    height: 14,
    viewBox: "0 0 16.500 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.75,
      top: 5,
      width: 16.5,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 0 L 7 0 L 12 7 L 7 14 L 11.5 14 L 16.5 7 L 11.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.5 0 L 0 0 L 5 7 L 0 14 L 4.5 14 L 9.5 7 L 4.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.545,
    height: 14,
    viewBox: "0 0 14.545 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.727,
      top: 5,
      width: 14.545,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.356 6.42 L 10.316 0.77 C 9.976 0.29 9.426 0 8.836 0 C 7.346 0 6.486 1.68 7.346 2.89 L 10.276 7 L 7.346 11.11 C 6.476 12.32 7.346 14 8.836 14 C 9.426 14 9.986 13.71 10.326 13.23 L 14.366 7.58 C 14.606 7.23 14.606 6.77 14.356 6.42 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.356 6.42 L 3.326 0.77 C 2.976 0.29 2.426 0 1.836 0 C 0.346 0 -0.524 1.68 0.346 2.89 L 3.276 7 L 0.346 11.11 C -0.524 12.32 0.346 14 1.836 14 C 2.426 14 2.986 13.71 3.326 13.23 L 7.366 7.58 C 7.606 7.23 7.606 6.77 7.356 6.42 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 16.5,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.5,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.500,
    height: 14,
    viewBox: "0 0 9.500 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 0,
      width: 9.5,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.5 0 L 0 0 L 5 7 L 0 14 L 4.5 14 L 9.5 7 L 4.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.500,
    height: 14,
    viewBox: "0 0 9.500 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.5,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.5 0 L 0 0 L 5 7 L 0 14 L 4.5 14 L 9.5 7 L 4.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_DoubleArrow(props)] ?? __body0)();
}

// figma node: 821:38546 east (5 variants)
const __venc_East = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_East = p => "style2=" + __venc_East(p.style2);
function East(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 14,
    viewBox: "0 0 20 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 5,
      width: 20,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13 0 L 11.59 1.41 L 16.17 6 L 0 6 L 0 8 L 16.17 8 L 11.58 12.59 L 13 14 L 20 7 L 13 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.592,
    height: 13.165,
    viewBox: "0 0 19.592 13.165",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.204,
      top: 5.418,
      width: 19.592,
      height: 13.165
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.29 0.292 C 11.9 0.683 11.9 1.312 12.29 1.702 L 16.17 5.582 L 1 5.582 C 0.45 5.582 0 6.032 0 6.582 C 0 7.133 0.45 7.582 1 7.582 L 16.18 7.582 L 12.3 11.462 C 11.91 11.852 11.91 12.483 12.3 12.873 C 12.69 13.263 13.32 13.263 13.71 12.873 L 19.3 7.282 C 19.69 6.892 19.69 6.262 19.3 5.872 L 13.7 0.292 C 13.32 -0.097 12.68 -0.097 12.29 0.292 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_East(props)] ?? __body0)();
}

// figma node: 821:38557 expand_circle_down (5 variants)
const __venc_ExpandCircleDown = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ExpandCircleDown = p => "style2=" + __venc_ExpandCircleDown(p.style2);
function ExpandCircleDown(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 13.5 L 5.5 9 L 6.92 7.59 L 10 10.67 L 13.08 7.59 L 14.5 9 L 10 13.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.08 7.59 L 10 10.67 L 6.92 7.59 L 5.5 9 L 10 13.5 L 14.5 9 L 13.08 7.59 Z M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 13.79 9.71 L 10.71 12.79 C 10.32 13.18 9.69 13.18 9.29 12.79 L 6.21 9.71 C 5.82 9.32 5.82 8.68 6.21 8.29 C 6.6 7.9 7.23 7.9 7.62 8.29 L 10 10.67 L 12.38 8.29 C 12.77 7.9 13.4 7.9 13.79 8.29 C 14.18 8.68 14.18 9.32 13.79 9.71 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 C 3.58 0 0 3.58 0 8 C 0 12.42 3.58 16 8 16 C 12.42 16 16 12.42 16 8 C 16 3.58 12.42 0 8 0 Z M 8 11.5 L 3.5 7 L 4.92 5.59 L 8 8.67 L 11.08 5.59 L 12.5 7 L 8 11.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.08 7.59 L 10 10.67 L 6.92 7.59 L 5.5 9 L 10 13.5 L 14.5 9 L 13.08 7.59 Z M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body3
  };
  return (__impls[__vkey_ExpandCircleDown(props)] ?? __body0)();
}

// figma node: 821:38591 first_page (5 variants)
const __venc_FirstPage = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_FirstPage = p => "style2=" + __venc_FirstPage(p.style2);
function FirstPage(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.410,
    height: 12,
    viewBox: "0 0 12.410 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.795,
      top: 6,
      width: 12.41,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.41 10.59 L 7.82 6 L 12.41 1.41 L 11 0 L 5 6 L 11 12 L 12.41 10.59 Z M 0 0 L 2 0 L 2 12 L 0 12 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.002,
    height: 12,
    viewBox: "0 0 12.002 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.999,
      top: 6,
      width: 12.002,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.7 9.89 L 7.82 6 L 11.71 2.11 C 12.1 1.72 12.1 1.09 11.71 0.7 C 11.32 0.31 10.69 0.31 10.3 0.7 L 5.71 5.29 C 5.32 5.68 5.32 6.31 5.71 6.7 L 10.3 11.29 C 10.69 11.68 11.32 11.68 11.71 11.29 C 12.09 10.91 12.09 10.27 11.7 9.89 Z M 1 0 C 1.55 0 2 0.45 2 1 L 2 11 C 2 11.55 1.55 12 1 12 C 0.45 12 0 11.55 0 11 L 0 1 C 0 0.45 0.45 0 1 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.410,
    height: 12,
    viewBox: "0 0 12.410 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 12.41,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.41 10.59 L 7.82 6 L 12.41 1.41 L 11 0 L 5 6 L 11 12 L 12.41 10.59 Z M 0 0 L 2 0 L 2 12 L 0 12 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_FirstPage(props)] ?? __body0)();
}

// figma node: 821:38602 fullscreen (5 variants)
const __venc_Fullscreen = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Fullscreen = p => "style2=" + __venc_Fullscreen(p.style2);
function Fullscreen(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 9 L 0 9 L 0 14 L 5 14 L 5 12 L 2 12 L 2 9 Z M 0 5 L 2 5 L 2 2 L 5 2 L 5 0 L 0 0 L 0 5 Z M 12 12 L 9 12 L 9 14 L 14 14 L 14 9 L 12 9 L 12 12 Z M 9 0 L 9 2 L 12 2 L 12 5 L 14 5 L 14 0 L 9 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 9 C 0.45 9 0 9.45 0 10 L 0 13 C 0 13.55 0.45 14 1 14 L 4 14 C 4.55 14 5 13.55 5 13 C 5 12.45 4.55 12 4 12 L 2 12 L 2 10 C 2 9.45 1.55 9 1 9 Z M 1 5 C 1.55 5 2 4.55 2 4 L 2 2 L 4 2 C 4.55 2 5 1.55 5 1 C 5 0.45 4.55 0 4 0 L 1 0 C 0.45 0 0 0.45 0 1 L 0 4 C 0 4.55 0.45 5 1 5 Z M 12 12 L 10 12 C 9.45 12 9 12.45 9 13 C 9 13.55 9.45 14 10 14 L 13 14 C 13.55 14 14 13.55 14 13 L 14 10 C 14 9.45 13.55 9 13 9 C 12.45 9 12 9.45 12 10 L 12 12 Z M 9 1 C 9 1.55 9.45 2 10 2 L 12 2 L 12 4 C 12 4.55 12.45 5 13 5 C 13.55 5 14 4.55 14 4 L 14 1 C 14 0.45 13.55 0 13 0 L 10 0 C 9.45 0 9 0.45 9 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_Fullscreen(props)] ?? __body0)();
}

// figma node: 821:38613 fullscreen_exit (5 variants)
const __venc_FullscreenExit = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_FullscreenExit = p => "style2=" + __venc_FullscreenExit(p.style2);
function FullscreenExit(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 11 L 3 11 L 3 14 L 5 14 L 5 9 L 0 9 L 0 11 Z M 3 3 L 0 3 L 0 5 L 5 5 L 5 0 L 3 0 L 3 3 Z M 9 14 L 11 14 L 11 11 L 14 11 L 14 9 L 9 9 L 9 14 Z M 11 3 L 11 0 L 9 0 L 9 5 L 14 5 L 14 3 L 11 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 11 L 3 11 L 3 13 C 3 13.55 3.45 14 4 14 C 4.55 14 5 13.55 5 13 L 5 10 C 5 9.45 4.55 9 4 9 L 1 9 C 0.45 9 0 9.45 0 10 C 0 10.55 0.45 11 1 11 Z M 3 3 L 1 3 C 0.45 3 0 3.45 0 4 C 0 4.55 0.45 5 1 5 L 4 5 C 4.55 5 5 4.55 5 4 L 5 1 C 5 0.45 4.55 0 4 0 C 3.45 0 3 0.45 3 1 L 3 3 Z M 10 14 C 10.55 14 11 13.55 11 13 L 11 11 L 13 11 C 13.55 11 14 10.55 14 10 C 14 9.45 13.55 9 13 9 L 10 9 C 9.45 9 9 9.45 9 10 L 9 13 C 9 13.55 9.45 14 10 14 Z M 11 3 L 11 1 C 11 0.45 10.55 0 10 0 C 9.45 0 9 0.45 9 1 L 9 4 C 9 4.55 9.45 5 10 5 L 13 5 C 13.55 5 14 4.55 14 4 C 14 3.45 13.55 3 13 3 L 11 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_FullscreenExit(props)] ?? __body0)();
}

// figma node: 821:38624 home_work (5 variants)
const __venc_HomeWork = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_HomeWork = p => "style2=" + __venc_HomeWork(p.style2);
function HomeWork(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 18,
    viewBox: "0 0 22 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 3,
      width: 22,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.17 2.7 L 0 7.48 L 0 18 L 5 18 L 5 10 L 9 10 L 9 18 L 14 18 L 14 7.25 L 7.17 2.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 L 9 1.51 L 11 2.84 L 12.73 4 L 14 4 L 14 4.85 L 16 6.19 L 16 8 L 18 8 L 18 10 L 16 10 L 16 12 L 18 12 L 18 14 L 16 14 L 16 18 L 22 18 L 22 0 L 9 0 Z M 18 6 L 16 6 L 16 4 L 18 4 L 18 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 18,
    viewBox: "0 0 22 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 3,
      width: 22,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 12 L 18 12 L 18 14 L 16 14 L 16 12 Z M 16 8 L 18 8 L 18 10 L 16 10 L 16 8 Z M 16 4 L 18 4 L 18 6 L 16 6 L 16 4 Z M 12.74 4 L 14 4.84 L 14 4 L 12.74 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 L 9 1.51 L 11 2.84 L 11 2 L 20 2 L 20 16 L 16 16 L 16 18 L 22 18 L 22 0 L 9 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.17 2.7 L 14 7.25 L 14 18 L 0 18 L 0 7.48 L 7.17 2.7 Z M 9 16 L 12 16 L 12 8.16 L 7.17 5.09 L 2 8.38 L 2 16 L 5 16 L 5 10 L 9 10 L 9 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17 0 L 9 0 C 8.45 0 8 0.45 8 1 L 8 2.61 C 8 2.61 8 2.61 8.01 2.62 L 13.01 7.12 C 13.64 7.68 14 8.5 14 9.35 L 14 10 L 16 10 L 16 12 L 14 12 L 14 14 L 16 14 L 16 16 L 14 16 L 14 18 L 17 18 C 17.55 18 18 17.55 18 17 L 18 1 C 18 0.45 17.55 0 17 0 Z M 12 4 L 10 4 L 10 2 L 12 2 L 12 4 Z M 16 8 L 14 8 L 14 6 L 16 6 L 16 8 Z M 16 4 L 14 4 L 14 2 L 16 2 L 16 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12 17 L 12 9.35 C 12 9.07 11.88 8.8 11.67 8.61 L 6.67 4.11 C 6.48 3.93 6.24 3.85 6 3.85 C 5.76 3.85 5.52 3.94 5.33 4.11 L 0.33 8.61 C 0.12 8.79 0 9.06 0 9.35 L 0 17 C 0 17.55 0.45 18 1 18 L 3 18 C 3.55 18 4 17.55 4 17 L 4 13 L 8 13 L 8 17 C 8 17.55 8.45 18 9 18 L 11 18 C 11.55 18 12 17.55 12 17 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.260,
    height: 10,
    viewBox: "0 0 5.260 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.74,
      top: 7,
      width: 5.26,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.26 8 L 5.26 8 L 5.26 10 L 3.26 10 L 3.26 8 Z M 3.26 4 L 5.26 4 L 5.26 6 L 3.26 6 L 3.26 4 Z M 3.26 0 L 5.26 0 L 5.26 2 L 3.26 2 L 3.26 0 Z M 0 0 L 1.26 0.84 L 1.26 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 18,
    viewBox: "0 0 13 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 3,
      width: 13,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 1.51 L 2 2.84 L 2 2 L 11 2 L 11 16 L 7 16 L 7 18 L 13 18 L 13 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 15.300,
    viewBox: "0 0 14 15.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 5.7,
      width: 14,
      height: 15.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.17 0 L 14 4.55 L 14 15.3 L 0 15.3 L 0 4.78 L 7.17 0 Z M 9 13.3 L 12 13.3 L 12 5.46 L 7.17 2.39 L 2 5.68 L 2 13.3 L 5 13.3 L 5 7.3 L 9 7.3 L 9 13.3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10.910,
    viewBox: "0 0 10 10.910",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 8.09,
      width: 10,
      height: 10.91,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 10.91 L 10 10.91 L 10 3.07 L 5.17 0 L 0 3.29 L 0 10.91 L 3 10.91 L 3 4.91 L 7 4.91 L 7 10.91 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body3
  };
  return (__impls[__vkey_HomeWork(props)] ?? __body0)();
}

// figma node: 821:38638 last_page (5 variants)
const __venc_LastPage = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_LastPage = p => "style2=" + __venc_LastPage(p.style2);
function LastPage(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.410,
    height: 12,
    viewBox: "0 0 12.410 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.795,
      top: 6,
      width: 12.41,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.41 L 4.59 6 L 0 10.59 L 1.41 12 L 7.41 6 L 1.41 0 L 0 1.41 Z M 10.41 0 L 12.41 0 L 12.41 12 L 10.41 12 L 10.41 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.002,
    height: 12,
    viewBox: "0 0 12.002 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.999,
      top: 6,
      width: 12.002,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.292 2.11 L 4.183 6 L 0.292 9.89 C -0.097 10.28 -0.097 10.91 0.292 11.3 C 0.683 11.69 1.312 11.69 1.702 11.3 L 6.293 6.71 C 6.682 6.32 6.682 5.69 6.293 5.3 L 1.702 0.7 C 1.312 0.31 0.683 0.31 0.292 0.7 C -0.088 1.09 -0.088 1.73 0.292 2.11 Z M 11.002 0 C 11.552 0 12.002 0.45 12.002 1 L 12.002 11 C 12.002 11.55 11.552 12 11.002 12 C 10.452 12 10.002 11.55 10.002 11 L 10.002 1 C 10.002 0.45 10.452 0 11.002 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.410,
    height: 12,
    viewBox: "0 0 12.410 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.59,
      top: 6,
      width: 12.41,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.41 L 4.59 6 L 0 10.59 L 1.41 12 L 7.41 6 L 1.41 0 L 0 1.41 Z M 10.41 0 L 12.41 0 L 12.41 12 L 10.41 12 L 10.41 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_LastPage(props)] ?? __body0)();
}

// figma node: 821:38649 legend_toggle (5 variants)
const __venc_LegendToggle = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_LegendToggle = p => "style2=" + __venc_LegendToggle(p.style2);
function LegendToggle(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 14,
    viewBox: "0 0 16 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 16,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 10 L 0 10 L 0 8 L 16 8 L 16 10 Z M 16 12 L 0 12 L 0 14 L 16 14 L 16 12 Z M 11 6 L 16 2.45 L 16 0 L 11 3.55 L 6 0 L 0 3.66 L 0 6 L 5.92 2.39 L 11 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 14,
    viewBox: "0 0 16 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 16,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 10 L 1 10 C 0.45 10 0 9.55 0 9 C 0 8.45 0.45 8 1 8 L 15 8 C 15.55 8 16 8.45 16 9 C 16 9.55 15.55 10 15 10 Z M 15 12 L 1 12 C 0.45 12 0 12.45 0 13 C 0 13.55 0.45 14 1 14 L 15 14 C 15.55 14 16 13.55 16 13 C 16 12.45 15.55 12 15 12 Z M 11 6 L 15.58 2.75 C 15.84 2.56 16 2.26 16 1.94 C 16 1.13 15.08 0.65 14.42 1.12 L 11 3.55 L 6 0 L 0.48 3.36 C 0.18 3.55 0 3.87 0 4.22 C 0 5 0.85 5.48 1.52 5.07 L 5.92 2.39 L 11 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 16,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 14,
    viewBox: "0 0 16 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 10 L 0 10 L 0 8 L 16 8 L 16 10 Z M 16 12 L 0 12 L 0 14 L 16 14 L 16 12 Z M 11 6 L 16 2.45 L 16 0 L 11 3.55 L 6 0 L 0 3.66 L 0 6 L 5.92 2.39 L 11 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_LegendToggle(props)] ?? __body0)();
}

// figma node: 821:38661 maps_home_work (5 variants)
const __venc_MapsHomeWork = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_MapsHomeWork = p => "style2=" + __venc_MapsHomeWork(p.style2);
function MapsHomeWork(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 18,
    viewBox: "0 0 22 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 3,
      width: 22,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 L 0 18 L 5 18 L 5 12 L 9 12 L 9 18 L 14 18 L 14 8 L 7 3 L 0 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 L 9 1.97 L 16 6.97 L 16 8 L 18 8 L 18 10 L 16 10 L 16 12 L 18 12 L 18 14 L 16 14 L 16 18 L 22 18 L 22 0 L 9 0 Z M 18 6 L 16 6 L 16 4 L 18 4 L 18 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 18,
    viewBox: "0 0 22 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 3,
      width: 22,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 4 L 16 4 L 16 6 L 18 6 L 18 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18 8 L 16 8 L 16 10 L 18 10 L 18 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18 12 L 16 12 L 16 14 L 18 14 L 18 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 L 0 18 L 6 18 L 6 13 L 8 13 L 8 18 L 14 18 L 14 8 L 7 3 L 0 8 Z M 12 16 L 10 16 L 10 11 L 4 11 L 4 16 L 2 16 L 2 9 L 7 5.5 L 12 9 L 12 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 L 9 1.97 L 11 3.4 L 11 2 L 20 2 L 20 16 L 16 16 L 16 18 L 22 18 L 22 0 L 9 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 18,
    viewBox: "0 0 22 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 3,
      width: 22,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.16 7.4 L 8.16 3.83 C 7.46 3.33 6.53 3.33 5.84 3.83 L 0.84 7.4 C 0.31 7.78 0 8.38 0 9.03 L 0 17 C 0 17.55 0.45 18 1 18 L 5 18 L 5 12 L 9 12 L 9 18 L 13 18 C 13.55 18 14 17.55 14 17 L 14 9.03 C 14 8.38 13.69 7.78 13.16 7.4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 20.03 0 L 10.97 0 C 9.88 0 9 0.88 9 1.97 L 9.09 2.06 C 9.17 2.11 9.25 2.15 9.33 2.2 L 14.33 5.77 C 15.09 6.31 15.63 7.11 15.87 8 L 18 8 L 18 10 L 16 10 L 16 12 L 18 12 L 18 14 L 16 14 L 16 18 L 20.03 18 C 21.12 18 22 17.12 22 16.03 L 22 1.97 C 22 0.88 21.12 0 20.03 0 Z M 18 6 L 16 6 L 16 4 L 18 4 L 18 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 3,
      width: 22,
      height: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 14,
    viewBox: "0 0 9 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 11,
      top: 2,
      width: 9,
      height: 14,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 6 L 7 6 L 7 8 L 5 8 L 5 10 L 7 10 L 7 12 L 5 12 L 5 14 L 9 14 L 9 0 L 0 0 L 0 1.4 L 5 4.97 L 5 6 Z M 5 2 L 7 2 L 7 4 L 5 4 L 5 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 18,
    viewBox: "0 0 13 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 0,
      width: 13,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 1.97 L 0.96 2.66 L 2 3.4 L 2 2 L 11 2 L 11 16 L 7 16 L 7 18 L 13 18 L 13 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10.500,
    viewBox: "0 0 10 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 5.5,
      width: 10,
      height: 10.5,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.5 L 0 10.5 L 2 10.5 L 2 5.5 L 8 5.5 L 8 10.5 L 10 10.5 L 10 3.5 L 5 0 L 0 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 2,
    viewBox: "0 0 2 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 16,
      top: 4,
      width: 2,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 0 0 L 0 2 L 2 2 L 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 2,
    viewBox: "0 0 2 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 16,
      top: 8,
      width: 2,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 0 0 L 0 2 L 2 2 L 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 2,
    viewBox: "0 0 2 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 16,
      top: 12,
      width: 2,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 0 0 L 0 2 L 2 2 L 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 15,
    viewBox: "0 0 14 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 3,
      width: 14,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5 L 0 15 L 6 15 L 6 10 L 8 10 L 8 15 L 14 15 L 14 5 L 7 0 L 0 5 Z M 12 13 L 10 13 L 10 8 L 4 8 L 4 13 L 2 13 L 2 6 L 7 2.5 L 12 6 L 12 13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body3
  };
  return (__impls[__vkey_MapsHomeWork(props)] ?? __body0)();
}

// figma node: 821:38680 menu (5 variants)
const __venc_Menu = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Menu = p => "style2=" + __venc_Menu(p.style2);
function Menu(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 18,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 L 18 12 L 18 10 L 0 10 L 0 12 Z M 0 7 L 18 7 L 18 5 L 0 5 L 0 7 Z M 0 0 L 0 2 L 18 2 L 18 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 18,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 12 L 17 12 C 17.55 12 18 11.55 18 11 C 18 10.45 17.55 10 17 10 L 1 10 C 0.45 10 0 10.45 0 11 C 0 11.55 0.45 12 1 12 Z M 1 7 L 17 7 C 17.55 7 18 6.55 18 6 C 18 5.45 17.55 5 17 5 L 1 5 C 0.45 5 0 5.45 0 6 C 0 6.55 0.45 7 1 7 Z M 0 1 C 0 1.55 0.45 2 1 2 L 17 2 C 17.55 2 18 1.55 18 1 C 18 0.45 17.55 0 17 0 L 1 0 C 0.45 0 0 0.45 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_Menu(props)] ?? __body0)();
}

// figma node: 821:38691 menu_open (5 variants)
const __venc_MenuOpen = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_MenuOpen = p => "style2=" + __venc_MenuOpen(p.style2);
function MenuOpen(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 18,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 L 13 12 L 13 10 L 0 10 L 0 12 Z M 0 7 L 10 7 L 10 5 L 0 5 L 0 7 Z M 0 0 L 0 2 L 13 2 L 13 0 L 0 0 Z M 18 9.59 L 14.42 6 L 18 2.41 L 16.59 1 L 11.59 6 L 16.59 11 L 18 9.59 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.592,
    height: 12,
    viewBox: "0 0 17.592 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.204,
      top: 6,
      width: 17.592,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 12 L 12 12 C 12.55 12 13 11.55 13 11 C 13 10.45 12.55 10 12 10 L 1 10 C 0.45 10 0 10.45 0 11 C 0 11.55 0.45 12 1 12 Z M 1 7 L 9 7 C 9.55 7 10 6.55 10 6 C 10 5.45 9.55 5 9 5 L 1 5 C 0.45 5 0 5.45 0 6 C 0 6.55 0.45 7 1 7 Z M 0 1 C 0 1.55 0.45 2 1 2 L 12 2 C 12.55 2 13 1.55 13 1 C 13 0.45 12.55 0 12 0 L 1 0 C 0.45 0 0 0.45 0 1 Z M 17.3 8.88 L 14.42 6 L 17.3 3.12 C 17.69 2.73 17.69 2.1 17.3 1.71 C 16.91 1.32 16.28 1.32 15.89 1.71 L 12.3 5.3 C 11.91 5.69 11.91 6.32 12.3 6.71 L 15.89 10.3 C 16.28 10.69 16.91 10.69 17.3 10.3 C 17.68 9.91 17.69 9.27 17.3 8.88 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_MenuOpen(props)] ?? __body0)();
}

// figma node: 821:38702 more_horiz (5 variants)
const __venc_MoreHoriz = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_MoreHoriz = p => "style2=" + __venc_MoreHoriz(p.style2);
function MoreHoriz(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 4,
    viewBox: "0 0 16 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 10,
      width: 16,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 C 0.9 0 0 0.9 0 2 C 0 3.1 0.9 4 2 4 C 3.1 4 4 3.1 4 2 C 4 0.9 3.1 0 2 0 Z M 14 0 C 12.9 0 12 0.9 12 2 C 12 3.1 12.9 4 14 4 C 15.1 4 16 3.1 16 2 C 16 0.9 15.1 0 14 0 Z M 8 0 C 6.9 0 6 0.9 6 2 C 6 3.1 6.9 4 8 4 C 9.1 4 10 3.1 10 2 C 10 0.9 9.1 0 8 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body0,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_MoreHoriz(props)] ?? __body0)();
}

// figma node: 821:38713 more_vert (5 variants)
const __venc_MoreVert = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_MoreVert = p => "style2=" + __venc_MoreVert(p.style2);
function MoreVert(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 16,
    viewBox: "0 0 4 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 4,
      width: 4,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 4 C 3.1 4 4 3.1 4 2 C 4 0.9 3.1 0 2 0 C 0.9 0 0 0.9 0 2 C 0 3.1 0.9 4 2 4 Z M 2 6 C 0.9 6 0 6.9 0 8 C 0 9.1 0.9 10 2 10 C 3.1 10 4 9.1 4 8 C 4 6.9 3.1 6 2 6 Z M 2 12 C 0.9 12 0 12.9 0 14 C 0 15.1 0.9 16 2 16 C 3.1 16 4 15.1 4 14 C 4 12.9 3.1 12 2 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body0,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_MoreVert(props)] ?? __body0)();
}

// figma node: 821:38724 north (5 variants)
const __venc_North = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_North = p => "style2=" + __venc_North(p.style2);
function North(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 20,
    viewBox: "0 0 14 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 2,
      width: 14,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 7 L 1.41 8.41 L 6 3.83 L 6 20 L 8 20 L 8 3.83 L 12.59 8.42 L 14 7 L 7 0 L 0 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.165,
    height: 19.593,
    viewBox: "0 0 13.165 19.593",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.418,
      top: 2.204,
      width: 13.165,
      height: 19.593
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.292 7.292 C 0.683 7.682 1.312 7.682 1.702 7.292 L 5.582 3.422 L 5.582 18.593 C 5.582 19.142 6.032 19.593 6.582 19.593 C 7.133 19.593 7.582 19.142 7.582 18.593 L 7.582 3.422 L 11.462 7.302 C 11.852 7.692 12.483 7.692 12.873 7.302 C 13.263 6.912 13.263 6.282 12.873 5.892 L 7.282 0.292 C 6.892 -0.097 6.262 -0.097 5.872 0.292 L 0.292 5.882 C -0.097 6.272 -0.097 6.912 0.292 7.292 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_North(props)] ?? __body0)();
}

// figma node: 821:38735 north_east (5 variants)
const __venc_NorthEast = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_NorthEast = p => "style2=" + __venc_NorthEast(p.style2);
function NorthEast(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 4.5,
      width: 15,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 L 5 2 L 11.59 2 L 0 13.59 L 1.41 15 L 13 3.41 L 13 10 L 15 10 L 15 0 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.592,
    height: 14.592,
    viewBox: "0 0 14.592 14.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.704,
      top: 4.704,
      width: 14.592,
      height: 14.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.593 1 C 4.593 1.56 5.043 2 5.593 2 L 11.182 2 L 0.292 12.89 C -0.097 13.28 -0.097 13.91 0.292 14.3 C 0.683 14.69 1.313 14.69 1.703 14.3 L 12.592 3.41 L 12.592 9 C 12.592 9.55 13.042 10 13.592 10 C 14.142 10 14.592 9.55 14.592 9 L 14.592 1 C 14.592 0.45 14.142 0 13.592 0 L 5.593 0 C 5.043 0 4.593 0.45 4.593 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 15,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 L 5 2 L 11.59 2 L 0 13.59 L 1.41 15 L 13 3.41 L 13 10 L 15 10 L 15 0 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_NorthEast(props)] ?? __body0)();
}

// figma node: 821:38746 north_west (5 variants)
const __venc_NorthWest = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_NorthWest = p => "style2=" + __venc_NorthWest(p.style2);
function NorthWest(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 4.5,
      width: 15,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10 L 2 10 L 2 3.41 L 13.59 15 L 15 13.59 L 3.41 2 L 10 2 L 10 0 L 0 0 L 0 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.592,
    height: 14.592,
    viewBox: "0 0 14.592 14.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.704,
      top: 4.704,
      width: 14.592,
      height: 14.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 10 C 1.56 10 2 9.55 2 9 L 2 3.41 L 12.89 14.3 C 13.28 14.69 13.91 14.69 14.3 14.3 C 14.69 13.91 14.69 13.28 14.3 12.89 L 3.41 2 L 9 2 C 9.55 2 10 1.55 10 1 C 10 0.45 9.55 0 9 0 L 1 0 C 0.45 0 0 0.45 0 1 L 0 9 C 0 9.55 0.45 10 1 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 15,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10 L 2 10 L 2 3.41 L 13.59 15 L 15 13.59 L 3.41 2 L 10 2 L 10 0 L 0 0 L 0 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_NorthWest(props)] ?? __body0)();
}

// figma node: 821:38757 offline_share (5 variants)
const __venc_OfflineShare = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_OfflineShare = p => "style2=" + __venc_OfflineShare(p.style2);
function OfflineShare(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 22,
    viewBox: "0 0 16 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 1,
      width: 16,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.6 9.26 L 10.6 10.57 L 13 8.33 L 10.6 6.1 L 10.6 7.38 C 8.27 7.7 7.34 9.3 7 10.9 C 7.83 9.77 8.93 9.26 10.6 9.26 Z M 12 22 L 2 22 C 0.9 22 0 21.1 0 20 L 0 4 L 2 4 L 2 20 L 12 20 L 12 22 Z M 14 0 L 6 0 C 4.9 0 4 0.9 4 2 L 4 16 C 4 17.1 4.9 18 6 18 L 14 18 C 15.1 18 16 17.1 16 16 L 16 2 C 16 0.9 15.1 0 14 0 Z M 14 15 L 6 15 L 6 3 L 14 3 L 14 15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 22,
    viewBox: "0 0 16 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 1,
      width: 16,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 4 L 0 4 L 0 20 C 0 21.1 0.9 22 2 22 L 12 22 L 12 20 L 2 20 L 2 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14 0 L 6 0 C 4.9 0 4 0.9 4 2 L 4 16 C 4 17.1 4.9 18 6 18 L 14 18 C 15.1 18 16 17.1 16 16 L 16 2 C 16 0.9 15.1 0 14 0 Z M 14 16 L 6 16 L 6 15 L 14 15 L 14 16 Z M 14 13 L 6 13 L 6 5 L 14 5 L 14 13 Z M 14 3 L 6 3 L 6 2 L 14 2 L 14 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.5 9.25 L 10.13 9.25 L 9.44 9.94 L 10.5 11 L 13 8.5 L 10.5 6 L 9.44 7.06 L 10.13 7.75 L 8 7.75 C 7.45 7.75 7 8.2 7 8.75 L 7 11 L 8.5 11 L 8.5 9.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 22,
    viewBox: "0 0 16 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 1,
      width: 16,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 4 C 0.45 4 0 4.45 0 5 L 0 20 C 0 21.1 0.9 22 2 22 L 11 22 C 11.55 22 12 21.55 12 21 C 12 20.45 11.55 20 11 20 L 2 20 L 2 5 C 2 4.45 1.55 4 1 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14 0 L 6 0 C 4.9 0 4 0.9 4 2 L 4 16 C 4 17.1 4.9 18 6 18 L 14 18 C 15.1 18 16 17.1 16 16 L 16 2 C 16 0.9 15.1 0 14 0 Z M 14 14 L 6 14 L 6 4 L 14 4 L 14 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.5 9.25 L 10.5 9.25 L 10.5 9.79 C 10.5 10.24 11.04 10.46 11.35 10.14 L 12.64 8.85 C 12.84 8.65 12.84 8.34 12.64 8.14 L 11.35 6.85 C 11.04 6.54 10.5 6.76 10.5 7.2 L 10.5 7.74 L 8 7.74 C 7.45 7.74 7 8.19 7 8.74 L 7 10.24 C 7 10.65 7.34 10.99 7.75 10.99 C 8.16 10.99 8.5 10.65 8.5 10.24 L 8.5 9.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 22,
    viewBox: "0 0 16 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 1,
      width: 16,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 4 L 0 4 L 0 22 L 12 22 L 12 20 L 2 20 L 2 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 4 0 L 4 18 L 16 18 L 16 0 Z M 14 14 L 6 14 L 6 4 L 14 4 L 14 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.5 9.25 L 10.5 9.25 L 10.5 11 L 13 8.5 L 10.5 6 L 10.5 7.75 L 7 7.75 L 7 11 L 8.5 11 L 8.5 9.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 1,
      width: 16,
      height: 22,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 22,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4,
      width: 12,
      height: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 18,
    viewBox: "0 0 12 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 0 0 L 0 16 C 0 17.1 0.9 18 2 18 L 12 18 L 12 16 L 2 16 L 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 0,
      width: 12,
      height: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 18,
    viewBox: "0 0 12 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 16 C 0 17.1 0.9 18 2 18 L 10 18 C 11.1 18 12 17.1 12 16 L 12 2 C 12 0.9 11.1 0 10 0 Z M 10 16 L 2 16 L 2 15 L 10 15 L 10 16 Z M 10 13 L 2 13 L 2 5 L 10 5 L 10 13 Z M 10 3 L 2 3 L 2 2 L 10 2 L 10 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 6,
      width: 6,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 5,
    viewBox: "0 0 6 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.5 3.25 L 3.5 3.25 L 3.5 5 L 6 2.5 L 3.5 0 L 3.5 1.75 L 1 1.75 C 0.45 1.75 0 2.2 0 2.75 L 0 5 L 1.5 5 L 1.5 3.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_OfflineShare(props)] ?? __body0)();
}

// figma node: 821:38775 payments (5 variants)
const __venc_Payments = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Payments = p => "style2=" + __venc_Payments(p.style2);
function Payments(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 16,
    viewBox: "0 0 22 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 4,
      width: 22,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 10 L 18 2 C 18 0.9 17.1 0 16 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 10 C 0 11.1 0.9 12 2 12 L 16 12 C 17.1 12 18 11.1 18 10 Z M 9 9 C 7.34 9 6 7.66 6 6 C 6 4.34 7.34 3 9 3 C 10.66 3 12 4.34 12 6 C 12 7.66 10.66 9 9 9 Z M 22 3 L 22 14 C 22 15.1 21.1 16 20 16 L 3 16 L 3 14 L 20 14 L 20 3 L 22 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 16,
    viewBox: "0 0 22 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 4,
      width: 22,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 10 L 18 2 C 18 0.9 17.1 0 16 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 10 C 0 11.1 0.9 12 2 12 L 16 12 C 17.1 12 18 11.1 18 10 Z M 16 10 L 2 10 L 2 2 L 16 2 L 16 10 Z M 9 3 C 7.34 3 6 4.34 6 6 C 6 7.66 7.34 9 9 9 C 10.66 9 12 7.66 12 6 C 12 4.34 10.66 3 9 3 Z M 22 3 L 22 14 C 22 15.1 21.1 16 20 16 L 3 16 C 3 15 3 15.1 3 14 L 20 14 L 20 3 C 21.1 3 21 3 22 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 16,
    viewBox: "0 0 22 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 4,
      width: 22,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22 4 L 22 14 C 22 15.1 21.1 16 20 16 L 4 16 C 3.45 16 3 15.55 3 15 C 3 14.45 3.45 14 4 14 L 20 14 L 20 4 C 20 3.45 20.45 3 21 3 C 21.55 3 22 3.45 22 4 Z M 3 12 C 1.34 12 0 10.66 0 9 L 0 3 C 0 1.34 1.34 0 3 0 L 15 0 C 16.66 0 18 1.34 18 3 L 18 10 C 18 11.1 17.1 12 16 12 L 3 12 Z M 6 6 C 6 7.66 7.34 9 9 9 C 10.66 9 12 7.66 12 6 C 12 4.34 10.66 3 9 3 C 7.34 3 6 4.34 6 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 16,
    viewBox: "0 0 22 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 4,
      width: 22,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22 3 L 22 16 L 3 16 L 3 14 L 20 14 L 20 3 L 22 3 Z M 18 12 L 0 12 L 0 0 L 18 0 L 18 12 Z M 12 6 C 12 4.34 10.66 3 9 3 C 7.34 3 6 4.34 6 6 C 6 7.66 7.34 9 9 9 C 10.66 9 12 7.66 12 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 4,
      width: 22,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 8,
    viewBox: "0 0 14 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 14,
      height: 8,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 0 L 0 0 L 0 8 L 14 8 L 14 0 Z M 7 7 C 5.34 7 4 5.66 4 4 C 4 2.34 5.34 1 7 1 C 8.66 1 10 2.34 10 4 C 10 5.66 8.66 7 7 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 10 C 0 11.1 0.9 12 2 12 L 16 12 C 17.1 12 18 11.1 18 10 L 18 2 C 18 0.9 17.1 0 16 0 Z M 2 10 L 2 2 L 16 2 L 16 10 L 2 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 3,
      width: 6,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 C 1.34 0 0 1.34 0 3 C 0 4.66 1.34 6 3 6 C 4.66 6 6 4.66 6 3 C 6 1.34 4.66 0 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 19,
    height: 13,
    viewBox: "0 0 19 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 19,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19 0 L 19 11 C 19 12.1 18.1 13 17 13 L 0 13 C 0 12 0 12.1 0 11 L 17 11 L 17 0 C 18.1 0 18 0 19 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_Payments(props)] ?? __body0)();
}

// figma node: 821:38791 pivot_table_chart (5 variants)
const __venc_PivotTableChart = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_PivotTableChart = p => "style2=" + __venc_PivotTableChart(p.style2);
function PivotTableChart(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19,
    height: 19,
    viewBox: "0 0 19 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 19,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 5 L 18 5 L 18 2 C 18 0.9 17.1 0 16 0 L 7 0 L 7 5 Z M 0 5 L 5 5 L 5 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 5 Z M 2 18 L 5 18 L 5 7 L 0 7 L 0 16 C 0 17.1 0.9 18 2 18 Z M 10 19 L 6 15 L 10 11 L 10 19 Z M 11 10 L 15 6 L 19 10 L 11 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.58 16 L 10 16 L 10 14 L 11.58 14 C 12.91 14 14 12.92 14 11.58 L 14 10 L 16 10 L 16 11.58 C 16 14.02 14.02 16 11.58 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19,
    height: 19,
    viewBox: "0 0 19 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 19,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 2 C 18 0.9 17.1 0 16 0 L 7 0 L 7 5 L 18 5 L 18 2 Z M 0 16 C 0 17.1 0.9 18 2 18 L 5 18 L 5 7 L 0 7 L 0 16 Z M 0 2 L 0 5 L 5 5 L 5 0 L 2 0 C 0.9 0 0 0.9 0 2 Z M 15 5.99 L 11 10 L 12.41 11.41 L 14 9.81 L 14 12 C 14 13.1 13.1 14 12 14 L 9.83 14 L 11.42 12.41 L 10 11 L 6 15 L 10 19 L 11.41 17.59 L 9.83 16 L 12 16 C 14.21 16 16 14.21 16 12 L 16 9.82 L 17.59 11.42 L 19 10 L 15 5.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.292,
    height: 18.295,
    viewBox: "0 0 18.292 18.295",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.854,
      top: 2.853,
      width: 18.292,
      height: 18.295
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 2 C 18 0.9 17.1 0 16 0 L 7 0 L 7 5 L 18 5 L 18 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 16 C 0 17.1 0.9 18 2 18 L 5 18 L 5 7 L 0 7 L 0 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 2 L 0 5 L 5 5 L 5 0 L 2 0 C 0.9 0 0 0.9 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.65 6.35 L 11.86 9.14 C 11.54 9.46 11.76 10 12.21 10 L 14 10 L 14 12 C 14 13.1 13.1 14 12 14 L 10 14 L 10 12.21 C 10 11.76 9.46 11.54 9.15 11.86 L 6.36 14.65 C 6.16 14.85 6.16 15.16 6.36 15.36 L 9.15 18.15 C 9.46 18.46 10 18.24 10 17.8 L 10 16 L 12 16 C 14.21 16 16 14.21 16 12 L 16 10 L 17.79 10 C 18.24 10 18.46 9.46 18.14 9.15 L 15.35 6.36 C 15.16 6.16 14.84 6.16 14.65 6.35 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19,
    height: 19,
    viewBox: "0 0 19 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 19,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 0 L 7 0 L 7 5 L 18 5 L 18 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 7 L 0 7 L 0 18 L 5 18 L 5 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 L 0 0 L 0 5 L 5 5 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15 6 L 11 10 L 14 10 L 14 14 L 10 14 L 10 11 L 6 15 L 10 19 L 10 16 L 16 16 L 16 10 L 19 10 L 15 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 19,
      height: 19,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19,
      height: 19,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 5,
    viewBox: "0 0 11 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 0,
      width: 11,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11 2 C 11 0.9 10.1 0 9 0 L 0 0 L 0 5 L 11 5 L 11 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 11,
    viewBox: "0 0 5 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 7,
      width: 5,
      height: 11
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 10.1 0.9 11 2 11 L 5 11 L 5 0 L 0 0 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 5,
    viewBox: "0 0 5 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2 L 0 5 L 5 5 L 5 0 L 2 0 C 0.9 0 0 0.9 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 L 5 4 L 8 4 L 8 6 C 8 7.1 7.1 8 6 8 L 4 8 L 4 5 L 0 9 L 4 13 L 4 10 L 6 10 C 8.21 10 10 8.21 10 6 L 10 4 L 13 4 L 9 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_PivotTableChart(props)] ?? __body0)();
}

// figma node: 821:38807 refresh (5 variants)
const __venc_Refresh = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Refresh = p => "style2=" + __venc_Refresh(p.style2);
function Refresh(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.990,
    height: 16,
    viewBox: "0 0 15.990 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.005,
      top: 4,
      width: 15.99,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.64 2.35 C 12.19 0.9 10.2 0 7.99 0 C 3.57 0 0 3.58 0 8 C 0 12.42 3.57 16 7.99 16 C 11.72 16 14.83 13.45 15.72 10 L 13.64 10 C 12.82 12.33 10.6 14 7.99 14 C 4.68 14 1.99 11.31 1.99 8 C 1.99 4.69 4.68 2 7.99 2 C 9.65 2 11.13 2.69 12.21 3.78 L 8.99 7 L 15.99 7 L 15.99 0 L 13.64 2.35 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.984,
    height: 16.003,
    viewBox: "0 0 15.984 16.003",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.008,
      top: 3.999,
      width: 15.984,
      height: 16.003
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.634 2.353 C 12.004 0.723 9.694 -0.217 7.154 0.043 C 3.484 0.413 0.464 3.393 0.054 7.063 C -0.496 11.913 3.254 16.003 7.984 16.003 C 11.174 16.003 13.914 14.133 15.194 11.443 C 15.514 10.773 15.034 10.003 14.294 10.003 C 13.924 10.003 13.574 10.203 13.414 10.533 C 12.284 12.963 9.574 14.503 6.614 13.843 C 4.394 13.353 2.604 11.543 2.134 9.323 C 1.294 5.443 4.244 2.003 7.984 2.003 C 9.644 2.003 11.124 2.693 12.204 3.783 L 10.694 5.293 C 10.064 5.923 10.504 7.003 11.394 7.003 L 14.984 7.003 C 15.534 7.003 15.984 6.553 15.984 6.003 L 15.984 2.413 C 15.984 1.523 14.904 1.073 14.274 1.703 L 13.634 2.353 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.990,
    height: 16,
    viewBox: "0 0 15.990 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.01,
      top: 4,
      width: 15.99,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.64 2.35 C 12.19 0.9 10.2 0 7.99 0 C 3.57 0 0 3.58 0 8 C 0 12.42 3.57 16 7.99 16 C 11.72 16 14.83 13.45 15.72 10 L 13.64 10 C 12.82 12.33 10.6 14 7.99 14 C 4.68 14 1.99 11.31 1.99 8 C 1.99 4.69 4.68 2 7.99 2 C 9.65 2 11.13 2.69 12.21 3.78 L 8.99 7 L 15.99 7 L 15.99 0 L 13.64 2.35 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_Refresh(props)] ?? __body0)();
}

// figma node: 821:38818 south (5 variants)
const __venc_South = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_South = p => "style2=" + __venc_South(p.style2);
function South(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 20,
    viewBox: "0 0 14 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 2,
      width: 14,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 13 L 12.59 11.59 L 8 16.17 L 8 0 L 6 0 L 6 16.17 L 1.41 11.58 L 0 13 L 7 20 L 14 13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.167,
    height: 19.592,
    viewBox: "0 0 13.167 19.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.416,
      top: 2.204,
      width: 13.167,
      height: 19.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.882 12.29 C 12.492 11.9 11.862 11.9 11.472 12.29 L 7.582 16.17 L 7.582 1 C 7.582 0.45 7.133 0 6.582 0 C 6.032 0 5.582 0.45 5.582 1 L 5.582 16.18 L 1.702 12.3 C 1.312 11.91 0.683 11.91 0.292 12.3 C -0.097 12.69 -0.097 13.32 0.292 13.71 L 5.883 19.3 C 6.273 19.69 6.903 19.69 7.293 19.3 L 12.882 13.71 C 13.262 13.32 13.262 12.68 12.882 12.29 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_South(props)] ?? __body0)();
}

// figma node: 821:38829 south_east (5 variants)
const __venc_SouthEast = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_SouthEast = p => "style2=" + __venc_SouthEast(p.style2);
function SouthEast(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 4.5,
      width: 15,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 5 L 13 5 L 13 11.59 L 1.41 0 L 0 1.41 L 11.59 13 L 5 13 L 5 15 L 15 15 L 15 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.582,
    height: 14.592,
    viewBox: "0 0 14.582 14.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.709,
      top: 4.704,
      width: 14.582,
      height: 14.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.582 4.593 C 13.022 4.593 12.582 5.043 12.582 5.593 L 12.582 11.182 L 1.702 0.292 C 1.312 -0.097 0.683 -0.097 0.292 0.292 C -0.097 0.683 -0.097 1.313 0.292 1.703 L 11.172 12.592 L 5.582 12.592 C 5.032 12.592 4.582 13.042 4.582 13.592 C 4.582 14.142 5.032 14.592 5.582 14.592 L 13.582 14.592 C 14.132 14.592 14.582 14.142 14.582 13.592 L 14.582 5.593 C 14.582 5.043 14.132 4.593 13.582 4.593 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 15,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 5 L 13 5 L 13 11.59 L 1.41 0 L 0 1.41 L 11.59 13 L 5 13 L 5 15 L 15 15 L 15 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_SouthEast(props)] ?? __body0)();
}

// figma node: 821:38840 south_west (5 variants)
const __venc_SouthWest = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_SouthWest = p => "style2=" + __venc_SouthWest(p.style2);
function SouthWest(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 4.5,
      width: 15,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 15 L 10 13 L 3.41 13 L 15 1.41 L 13.59 0 L 2 11.59 L 2 5 L 0 5 L 0 15 L 10 15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.592,
    height: 14.592,
    viewBox: "0 0 14.592 14.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.704,
      top: 4.704,
      width: 14.592,
      height: 14.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 13.592 C 10 13.032 9.55 12.592 9 12.592 L 3.41 12.592 L 14.3 1.703 C 14.69 1.313 14.69 0.683 14.3 0.292 C 13.91 -0.097 13.28 -0.097 12.89 0.292 L 2 11.182 L 2 5.593 C 2 5.043 1.55 4.593 1 4.593 C 0.45 4.593 0 5.043 0 5.593 L 0 13.592 C 0 14.142 0.45 14.592 1 14.592 L 9 14.592 C 9.55 14.592 10 14.142 10 13.592 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 15,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 15 L 10 13 L 3.41 13 L 15 1.41 L 13.59 0 L 2 11.59 L 2 5 L 0 5 L 0 15 L 10 15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_SouthWest(props)] ?? __body0)();
}

// figma node: 821:38851 subdirectory_arrow_left (5 variants)
const __venc_SubdirectoryArrowLeft = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_SubdirectoryArrowLeft = p => "style2=" + __venc_SubdirectoryArrowLeft(p.style2);
function SubdirectoryArrowLeft(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 17,
    viewBox: "0 0 15 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 3.5,
      width: 15,
      height: 17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 5 L 7.42 6.42 L 3.83 10 L 13 10 L 13 0 L 15 0 L 15 12 L 3.83 12 L 7.42 15.58 L 6 17 L 0 11 L 6 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.582,
    height: 16.583,
    viewBox: "0 0 14.582 16.583",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.709,
      top: 3.709,
      width: 14.582,
      height: 16.583
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.292 11.71 L 4.872 16.29 C 5.262 16.68 5.903 16.68 6.293 16.29 C 6.682 15.9 6.682 15.26 6.293 14.87 L 3.412 12 L 13.582 12 C 14.132 12 14.582 11.55 14.582 11 L 14.582 1 C 14.582 0.45 14.132 0 13.582 0 C 13.032 0 12.582 0.45 12.582 1 L 12.582 10 L 3.412 10 L 6.293 7.13 C 6.682 6.74 6.682 6.1 6.293 5.71 C 5.903 5.32 5.262 5.32 4.872 5.71 L 0.292 10.29 C -0.097 10.68 -0.097 11.32 0.292 11.71 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 17,
    viewBox: "0 0 15 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 15,
      height: 17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 5 L 7.42 6.42 L 3.83 10 L 13 10 L 13 0 L 15 0 L 15 12 L 3.83 12 L 7.42 15.58 L 6 17 L 0 11 L 6 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_SubdirectoryArrowLeft(props)] ?? __body0)();
}

// figma node: 821:38862 subdirectory_arrow_right (5 variants)
const __venc_SubdirectoryArrowRight = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_SubdirectoryArrowRight = p => "style2=" + __venc_SubdirectoryArrowRight(p.style2);
function SubdirectoryArrowRight(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 17,
    viewBox: "0 0 15 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 3.5,
      width: 15,
      height: 17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 11 L 9 17 L 7.58 15.58 L 11.17 12 L 0 12 L 0 0 L 2 0 L 2 10 L 11.17 10 L 7.58 6.42 L 9 5 L 15 11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.583,
    height: 16.583,
    viewBox: "0 0 14.583 16.583",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.709,
      top: 3.709,
      width: 14.583,
      height: 16.583
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.29 11.71 L 9.71 16.29 C 9.32 16.68 8.68 16.68 8.29 16.29 C 7.9 15.9 7.9 15.26 8.29 14.87 L 11.17 12 L 1 12 C 0.45 12 0 11.55 0 11 L 0 1 C 0 0.45 0.45 0 1 0 C 1.55 0 2 0.45 2 1 L 2 10 L 11.17 10 L 8.29 7.13 C 7.9 6.74 7.9 6.1 8.29 5.71 C 8.68 5.32 9.32 5.32 9.71 5.71 L 14.29 10.29 C 14.68 10.68 14.68 11.32 14.29 11.71 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 17,
    viewBox: "0 0 15 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 15,
      height: 17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 11 L 9 17 L 7.58 15.58 L 11.17 12 L 0 12 L 0 0 L 2 0 L 2 10 L 11.17 10 L 7.58 6.42 L 9 5 L 15 11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_SubdirectoryArrowRight(props)] ?? __body0)();
}

// figma node: 821:38873 switch_left (5 variants)
const __venc_SwitchLeft = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_SwitchLeft = p => "style2=" + __venc_SwitchLeft(p.style2);
function SwitchLeft(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 14,
    viewBox: "0 0 18 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5,
      width: 18,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.5 3.62 L 5.5 10.38 L 2.12 7 L 5.5 3.62 Z M 7 0 L 0 7 L 7 14 L 7 0 Z M 11 0 L 11 14 L 18 7 L 11 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.175,
    height: 11.180,
    viewBox: "0 0 17.175 11.180",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.413,
      top: 6.41,
      width: 17.175,
      height: 11.18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.082 2.214 L 5.082 8.974 L 1.702 5.594 L 5.082 2.214 Z M 0.292 4.884 C -0.097 5.274 -0.097 5.904 0.292 6.294 L 4.883 10.884 C 5.503 11.514 6.582 11.074 6.582 10.184 L 6.582 1.004 C 6.582 0.114 5.503 -0.336 4.872 0.294 L 0.292 4.884 Z M 10.582 1.004 L 10.582 10.174 C 10.582 11.064 11.662 11.514 12.292 10.884 L 16.882 6.294 C 17.272 5.904 17.272 5.274 16.882 4.884 L 12.292 0.294 C 11.662 -0.326 10.582 0.114 10.582 1.004 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.380,
    height: 6.760,
    viewBox: "0 0 3.380 6.760",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.12,
      top: 8.62,
      width: 3.38,
      height: 6.76,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.38 0 L 3.38 6.76 L 0 3.38 L 3.38 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 14,
    viewBox: "0 0 18 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5,
      width: 18,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.5 3.62 L 5.5 10.38 L 2.12 7 L 5.5 3.62 Z M 7 0 L 0 7 L 7 14 L 7 0 Z M 11 0 L 11 14 L 18 7 L 11 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_SwitchLeft(props)] ?? __body0)();
}

// figma node: 821:38885 switch_right (5 variants)
const __venc_SwitchRight = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_SwitchRight = p => "style2=" + __venc_SwitchRight(p.style2);
function SwitchRight(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 14,
    viewBox: "0 0 18 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5,
      width: 18,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.5 10.38 L 12.5 3.62 L 15.88 7 L 12.5 10.38 Z M 11 14 L 18 7 L 11 0 L 11 14 Z M 7 14 L 7 0 L 0 7 L 7 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.175,
    height: 11.180,
    viewBox: "0 0 17.175 11.180",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.412,
      top: 6.41,
      width: 17.175,
      height: 11.18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.092 8.974 L 12.092 2.214 L 15.472 5.594 L 12.092 8.974 Z M 16.883 6.304 C 17.273 5.914 17.273 5.284 16.883 4.894 L 12.292 0.304 C 11.672 -0.326 10.592 0.114 10.592 1.004 L 10.592 10.174 C 10.592 11.064 11.672 11.514 12.302 10.884 L 16.883 6.304 Z M 6.592 10.184 L 6.592 1.004 C 6.592 0.114 5.512 -0.336 4.882 0.294 L 0.292 4.884 C -0.097 5.274 -0.097 5.904 0.292 6.294 L 4.882 10.884 C 5.512 11.514 6.592 11.074 6.592 10.184 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.380,
    height: 6.760,
    viewBox: "0 0 3.380 6.760",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.5,
      top: 8.62,
      width: 3.38,
      height: 6.76,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.76 L 0 0 L 3.38 3.38 L 0 6.76 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 14,
    viewBox: "0 0 18 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5,
      width: 18,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.5 10.38 L 12.5 3.62 L 15.88 7 L 12.5 10.38 Z M 11 14 L 18 7 L 11 0 L 11 14 Z M 7 14 L 7 0 L 0 7 L 7 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_SwitchRight(props)] ?? __body0)();
}

// figma node: 821:38897 unfold_less (5 variants)
const __venc_UnfoldLess = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_UnfoldLess = p => "style2=" + __venc_UnfoldLess(p.style2);
function UnfoldLess(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.180,
    height: 16,
    viewBox: "0 0 9.180 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.41,
      top: 4,
      width: 9.18,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.59 L 1.42 16 L 4.59 12.83 L 7.76 16 L 9.17 14.59 L 4.59 10 L 0 14.59 Z M 9.18 1.41 L 7.76 0 L 4.59 3.17 L 1.42 0 L 0 1.41 L 4.59 6 L 9.18 1.41 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.345,
    height: 15.185,
    viewBox: "0 0 8.345 15.185",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.828,
      top: 4.408,
      width: 8.345,
      height: 15.185
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.292 14.892 C 0.683 15.282 1.312 15.282 1.702 14.892 L 4.173 12.422 L 6.643 14.892 C 7.033 15.282 7.662 15.282 8.052 14.892 C 8.443 14.502 8.443 13.872 8.052 13.482 L 4.883 10.313 C 4.493 9.922 3.863 9.922 3.473 10.313 L 0.303 13.482 C -0.097 13.862 -0.097 14.502 0.292 14.892 Z M 8.052 0.292 C 7.662 -0.097 7.033 -0.097 6.643 0.292 L 4.173 2.763 L 1.702 0.292 C 1.312 -0.097 0.683 -0.097 0.292 0.292 C -0.097 0.683 -0.097 1.323 0.292 1.713 L 3.463 4.883 C 3.852 5.273 4.483 5.273 4.872 4.883 L 8.042 1.713 C 8.442 1.323 8.443 0.683 8.052 0.292 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_UnfoldLess(props)] ?? __body0)();
}

// figma node: 821:38908 unfold_more (5 variants)
const __venc_UnfoldMore = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_UnfoldMore = p => "style2=" + __venc_UnfoldMore(p.style2);
function UnfoldMore(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.180,
    height: 18,
    viewBox: "0 0 9.180 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.41,
      top: 3,
      width: 9.18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.59 2.83 L 7.76 6 L 9.17 4.59 L 4.59 0 L 0 4.59 L 1.42 6 L 4.59 2.83 Z M 4.59 15.17 L 1.42 12 L 0.01 13.41 L 4.59 18 L 9.18 13.41 L 7.76 12 L 4.59 15.17 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.345,
    height: 17.185,
    viewBox: "0 0 8.345 17.185",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.828,
      top: 3.408,
      width: 8.345,
      height: 17.185
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.173 2.422 L 6.633 4.882 C 7.023 5.272 7.652 5.272 8.042 4.882 C 8.432 4.492 8.432 3.863 8.042 3.473 L 4.872 0.292 C 4.483 -0.097 3.852 -0.097 3.463 0.292 L 0.292 3.473 C -0.097 3.863 -0.097 4.492 0.292 4.882 C 0.683 5.272 1.312 5.272 1.702 4.882 L 4.173 2.422 Z M 4.173 14.762 L 1.713 12.302 C 1.323 11.912 0.693 11.912 0.303 12.302 C -0.087 12.693 -0.087 13.323 0.303 13.713 L 3.473 16.892 C 3.863 17.282 4.493 17.282 4.883 16.892 L 8.052 13.722 C 8.443 13.332 8.443 12.703 8.052 12.313 C 7.662 11.922 7.033 11.922 6.643 12.313 L 4.173 14.762 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_UnfoldMore(props)] ?? __body0)();
}

// figma node: 821:38919 waterfall_chart (5 variants)
const __venc_WaterfallChart = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_WaterfallChart = p => "style2=" + __venc_WaterfallChart(p.style2);
function WaterfallChart(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 16,
    viewBox: "0 0 18 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 4,
      width: 18,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 0 L 18 0 L 18 16 L 15 16 L 15 0 Z M 0 9 L 3 9 L 3 16 L 0 16 L 0 9 Z M 11 0 L 14 0 L 14 3 L 11 3 L 11 0 Z M 7 1 L 10 1 L 10 5 L 7 5 L 7 1 Z M 4 6 L 7 6 L 7 10 L 4 10 L 4 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 16,
    viewBox: "0 0 18 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 4,
      width: 18,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.5 0 C 17.33 0 18 0.67 18 1.5 L 18 14.5 C 18 15.33 17.33 16 16.5 16 C 15.67 16 15 15.33 15 14.5 L 15 1.5 C 15 0.67 15.67 0 16.5 0 Z M 1.5 9 C 2.33 9 3 9.67 3 10.5 L 3 14.5 C 3 15.33 2.33 16 1.5 16 C 0.67 16 0 15.33 0 14.5 L 0 10.5 C 0 9.67 0.67 9 1.5 9 Z M 12.5 0 C 13.33 0 14 0.67 14 1.5 C 14 2.33 13.33 3 12.5 3 C 11.67 3 11 2.33 11 1.5 C 11 0.67 11.67 0 12.5 0 Z M 8.5 1 C 9.33 1 10 1.67 10 2.5 L 10 3.5 C 10 4.33 9.33 5 8.5 5 C 7.67 5 7 4.33 7 3.5 L 7 2.5 C 7 1.67 7.67 1 8.5 1 Z M 5.5 6 C 6.33 6 7 6.67 7 7.5 L 7 8.5 C 7 9.33 6.33 10 5.5 10 C 4.67 10 4 9.33 4 8.5 L 4 7.5 C 4 6.67 4.67 6 5.5 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 4,
      width: 18,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 16,
    viewBox: "0 0 18 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 0 L 18 0 L 18 16 L 15 16 L 15 0 Z M 0 9 L 3 9 L 3 16 L 0 16 L 0 9 Z M 11 0 L 14 0 L 14 3 L 11 3 L 11 0 Z M 7 1 L 10 1 L 10 5 L 7 5 L 7 1 Z M 4 6 L 7 6 L 7 10 L 4 10 L 4 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_WaterfallChart(props)] ?? __body0)();
}

// figma node: 821:38932 west (5 variants)
const __venc_West = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_West = p => "style2=" + __venc_West(p.style2);
function West(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 14,
    viewBox: "0 0 20 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 5,
      width: 20,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 14 L 8.41 12.59 L 3.83 8 L 20 8 L 20 6 L 3.83 6 L 8.42 1.41 L 7 0 L 0 7 L 7 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.593,
    height: 13.167,
    viewBox: "0 0 19.593 13.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.204,
      top: 5.416,
      width: 19.593,
      height: 13.167
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.292 12.882 C 7.682 12.492 7.682 11.862 7.292 11.472 L 3.422 7.582 L 18.593 7.582 C 19.142 7.582 19.593 7.133 19.593 6.582 C 19.593 6.032 19.142 5.582 18.593 5.582 L 3.422 5.582 L 7.302 1.702 C 7.692 1.312 7.692 0.683 7.302 0.292 C 6.912 -0.097 6.282 -0.097 5.892 0.292 L 0.292 5.883 C -0.097 6.273 -0.097 6.903 0.292 7.293 L 5.882 12.882 C 6.272 13.262 6.912 13.262 7.292 12.882 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_West(props)] ?? __body0)();
}

// figma node: 1657:45998 Component 4 (61 variants)
const __venc_Component4 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Component4 = p => "property1=" + __venc_Component4(p.property1);
function Component4(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "app_settings_alt"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(AppSettingsAlt, {
    style2: "outlined"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Apps, {
    style2: "outlined"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(AppsOutage, {
    style2: "outlined"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowBack, {
    style2: "outlined"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowBackIos, {
    style2: "outlined"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowBackIosNew, {
    style2: "outlined"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowDownward, {
    style2: "outlined"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowDropDown, {
    style2: "outlined"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowDropDownCircle, {
    style2: "outlined"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowDropUp, {
    style2: "outlined"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowForward, {
    style2: "outlined"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowForwardIos, {
    style2: "outlined"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowLeft, {
    style2: "outlined"
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowRight, {
    style2: "outlined"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowUpward, {
    style2: "outlined"
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(AssistantDirection, {
    style2: "outlined"
  })));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Campaign, {
    style2: "outlined"
  })));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Cancel, {
    style2: "outlined"
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Check, {
    style2: "outlined"
  })));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ChevronLeft, {
    style2: "outlined"
  })));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ChevronRight, {
    style2: "outlined"
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Close, {
    style2: "outlined"
  })));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DoubleArrow, {
    style2: "outlined"
  })));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(East, {
    style2: "outlined"
  })));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ExpandCircleDown, {
    style2: "outlined"
  })));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(20,20,43)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 7.410,
    viewBox: "0 0 12 7.410",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 7.295,
      width: 12,
      height: 7.41
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 0 L 0 6 L 1.41 7.41 L 6 2.83 L 10.59 7.41 L 12 6 L 6 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(20,20,43)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 7.410,
    viewBox: "0 0 12 7.410",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 9.295,
      width: 12,
      height: 7.41
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.59 0 L 6 4.58 L 1.41 0 L 0 1.41 L 6 7.41 L 12 1.41 L 10.59 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(FirstPage, {
    style2: "outlined"
  })));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Fullscreen, {
    style2: "outlined"
  })));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(FullscreenExit, {
    style2: "outlined"
  })));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HomeWork, {
    style2: "outlined"
  })));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(LastPage, {
    style2: "outlined"
  })));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(LegendToggle, {
    style2: "outlined"
  })));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(MapsHomeWork, {
    style2: "outlined"
  })));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Menu, {
    style2: "outlined"
  })));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(MenuOpen, {
    style2: "outlined"
  })));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      transform: "matrix(-1,0,0,1,24,0)",
      transformOrigin: "0 0"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component4, {
    property1: "menu_open"
  })));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(MoreHoriz, {
    style2: "outlined"
  })));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(MoreVert, {
    style2: "outlined"
  })));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(North, {
    style2: "outlined"
  })));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(NorthEast, {
    style2: "outlined"
  })));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(NorthWest, {
    style2: "outlined"
  })));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(OfflineShare, {
    style2: "outlined"
  })));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Payments, {
    style2: "outlined"
  })));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(PivotTableChart, {
    style2: "outlined"
  })));
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Refresh, {
    style2: "outlined"
  })));
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(South, {
    style2: "outlined"
  })));
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SouthEast, {
    style2: "outlined"
  })));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SouthWest, {
    style2: "outlined"
  })));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SubdirectoryArrowLeft, {
    style2: "outlined"
  })));
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SubdirectoryArrowRight, {
    style2: "outlined"
  })));
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SwitchLeft, {
    style2: "outlined"
  })));
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SwitchRight, {
    style2: "outlined"
  })));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(UnfoldLess, {
    style2: "outlined"
  })));
  const __body54 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(UnfoldMore, {
    style2: "outlined"
  })));
  const __body55 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(WaterfallChart, {
    style2: "outlined"
  })));
  const __body56 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(West, {
    style2: "outlined"
  })));
  const __body57 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.979,
    height: 18.001,
    viewBox: "0 0 17.979 18.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,10.729,-0.724)",
      transformOrigin: "0 0",
      width: 17.979,
      height: 18.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.772 0.218 C 17.67 0.118 17.542 0.048 17.403 0.017 C 17.263 -0.013 17.118 -0.003 16.984 0.046 L 0.484 6.046 C 0.342 6.1 0.219 6.196 0.133 6.321 C 0.046 6.446 0 6.595 0 6.747 C 0 6.899 0.046 7.048 0.133 7.173 C 0.219 7.298 0.342 7.394 0.484 7.448 L 6.927 10.021 L 11.682 5.251 L 12.739 6.308 L 7.962 11.086 L 10.542 17.528 C 10.597 17.668 10.693 17.788 10.818 17.872 C 10.942 17.956 11.089 18.001 11.239 18.001 C 11.391 17.998 11.538 17.949 11.661 17.86 C 11.784 17.772 11.878 17.649 11.929 17.506 L 17.929 1.006 C 17.98 0.873 17.992 0.729 17.965 0.589 C 17.937 0.45 17.87 0.321 17.772 0.218 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body58 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,86)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 13,
    viewBox: "0 0 11 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 16,
      top: 14,
      width: 11,
      height: 13,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 11 0 L 11 13 L 0 13 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 1,
      width: 17,
      height: 22,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.119,
      top: 1.885,
      width: 7,
      height: 7,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7,
      height: 7,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.24,
      top: 0.199,
      width: 6.599,
      height: 6.627,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.724,
    height: 3.751,
    viewBox: "0 0 3.724 3.751",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.876,
      top: 0,
      width: 3.724,
      height: 3.751
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.691 1.206 C 3.662 1.146 3.617 1.095 3.562 1.057 C 3.507 1.02 3.443 0.998 3.376 0.993 L 3.048 0.963 L 3.626 0.38 C 3.662 0.343 3.683 0.292 3.682 0.239 C 3.682 0.187 3.661 0.136 3.623 0.099 C 3.586 0.062 3.535 0.041 3.483 0.041 C 3.43 0.041 3.38 0.062 3.342 0.099 L 2.761 0.685 L 2.73 0.348 C 2.726 0.281 2.704 0.217 2.666 0.162 C 2.629 0.107 2.578 0.062 2.518 0.033 C 2.451 0.002 2.376 -0.007 2.303 0.006 C 2.231 0.019 2.164 0.054 2.112 0.107 L 1.681 0.537 C 1.661 0.558 1.645 0.583 1.635 0.611 C 1.625 0.638 1.621 0.668 1.624 0.697 L 1.699 1.512 C 1.705 1.582 1.696 1.653 1.672 1.719 C 1.649 1.785 1.611 1.845 1.561 1.894 L 0.058 3.411 C 0.04 3.429 0.025 3.452 0.015 3.476 C 0.005 3.5 0 3.526 0 3.553 C 0 3.579 0.005 3.605 0.016 3.629 C 0.026 3.654 0.041 3.676 0.059 3.694 C 0.078 3.712 0.1 3.727 0.124 3.737 C 0.148 3.747 0.174 3.752 0.2 3.751 C 0.226 3.751 0.252 3.746 0.276 3.736 C 0.301 3.726 0.323 3.712 0.341 3.693 L 1.853 2.168 C 1.903 2.118 1.964 2.079 2.03 2.055 C 2.097 2.03 2.168 2.021 2.238 2.028 L 3.027 2.1 C 3.033 2.101 3.039 2.101 3.045 2.101 C 3.071 2.101 3.097 2.096 3.122 2.086 C 3.146 2.076 3.168 2.061 3.187 2.042 L 3.617 1.612 C 3.67 1.56 3.705 1.493 3.718 1.42 C 3.731 1.348 3.722 1.273 3.691 1.206 L 3.691 1.206 Z M 2.97 1.694 L 2.109 1.614 L 2.03 0.754 L 2.338 0.446 L 2.402 1.141 C 2.406 1.188 2.427 1.231 2.46 1.264 C 2.493 1.297 2.536 1.318 2.583 1.322 L 3.278 1.386 L 2.97 1.694 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.277,
    height: 2.277,
    viewBox: "0 0 2.277 2.277",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.932,
      top: 2.417,
      width: 2.277,
      height: 2.277
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.532 0.07 C 1.288 -0.02 1.021 -0.023 0.774 0.06 C 0.528 0.143 0.318 0.308 0.178 0.527 C 0.039 0.747 -0.022 1.007 0.007 1.265 C 0.036 1.524 0.152 1.764 0.337 1.947 C 0.522 2.13 0.763 2.245 1.022 2.271 C 1.28 2.298 1.54 2.236 1.758 2.094 C 1.976 1.953 2.14 1.741 2.221 1.494 C 2.302 1.247 2.296 0.98 2.204 0.737 L 1.477 1.47 C 1.389 1.558 1.269 1.608 1.143 1.608 C 1.018 1.608 0.898 1.559 0.809 1.47 C 0.72 1.382 0.67 1.262 0.67 1.136 C 0.669 1.011 0.718 0.891 0.807 0.802 L 1.532 0.07 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.153,
    height: 6.153,
    viewBox: "0 0 6.153 6.153",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.475,
      width: 6.153,
      height: 6.153
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.877 1.898 L 5.088 1.826 C 5.082 1.825 5.076 1.825 5.07 1.825 C 5.014 1.825 4.962 1.847 4.923 1.886 L 4.752 2.058 C 5.002 2.469 5.094 2.958 5.008 3.431 C 4.923 3.905 4.668 4.331 4.29 4.629 C 3.912 4.927 3.439 5.077 2.958 5.05 C 2.478 5.022 2.024 4.82 1.682 4.482 C 1.341 4.143 1.135 3.69 1.104 3.21 C 1.072 2.73 1.218 2.255 1.513 1.875 C 1.808 1.495 2.232 1.236 2.705 1.147 C 3.178 1.058 3.667 1.145 4.08 1.392 L 4.242 1.228 C 4.264 1.206 4.28 1.18 4.29 1.152 C 4.3 1.124 4.304 1.093 4.301 1.063 L 4.226 0.248 C 4.226 0.239 4.227 0.231 4.227 0.223 C 3.568 -0.042 2.837 -0.072 2.159 0.14 C 1.481 0.352 0.897 0.792 0.507 1.385 C 0.116 1.979 -0.057 2.689 0.017 3.396 C 0.09 4.102 0.406 4.762 0.911 5.262 C 1.416 5.762 2.078 6.072 2.785 6.139 C 3.492 6.206 4.201 6.027 4.791 5.631 C 5.381 5.235 5.815 4.647 6.021 3.967 C 6.227 3.287 6.191 2.557 5.919 1.9 C 5.905 1.9 5.891 1.9 5.877 1.898 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 1,
    viewBox: "0 0 1 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.283,
      top: 12,
      width: 1,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 1 C 0.776 1 1 0.776 1 0.5 C 1 0.224 0.776 0 0.5 0 C 0.224 0 0 0.224 0 0.5 C 0 0.776 0.224 1 0.5 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 12,
      width: 9.896,
      height: 1,
      borderRadius: 4,
      backgroundColor: "rgb(0,0,86)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 1,
    viewBox: "0 0 1 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.283,
      top: 15,
      width: 1,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 1 C 0.776 1 1 0.776 1 0.5 C 1 0.224 0.776 0 0.5 0 C 0.224 0 0 0.224 0 0.5 C 0 0.776 0.224 1 0.5 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 1,
    viewBox: "0 0 1 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.283,
      top: 18,
      width: 1,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 1 C 0.776 1 1 0.776 1 0.5 C 1 0.224 0.776 0 0.5 0 C 0.224 0 0 0.224 0 0.5 C 0 0.776 0.224 1 0.5 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 15,
      width: 9.896,
      height: 1,
      borderRadius: 4,
      backgroundColor: "rgb(0,0,86)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 18,
      width: 9.896,
      height: 1,
      borderRadius: 4,
      backgroundColor: "rgb(0,0,86)"
    }
  })));
  const __body59 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 22,
      height: 22,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 14,
    viewBox: "0 0 15 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 2,
      width: 15,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.661 7.314 C 16.075 6.949 16.116 6.317 15.751 5.902 C 15.386 5.488 14.754 5.448 14.339 5.813 L 15.661 7.314 Z M 7.908 12.806 L 7.248 12.055 L 7.248 12.055 L 7.908 12.806 Z M 4.633 14 L 4.633 15 L 4.633 14 Z M 0 9.922 L -1 9.922 L 0 9.922 Z M 1.357 7.039 L 2.018 7.789 L 1.357 7.039 Z M 8.449 0.796 L 7.788 0.046 L 8.449 0.796 Z M 13.721 2.719 L 14.721 2.719 L 13.721 2.719 Z M 12.816 4.641 L 13.477 5.392 L 13.477 5.392 L 12.816 4.641 Z M 5.717 10.883 L 5.056 10.132 L 5.056 10.133 L 5.717 10.883 Z M 4.625 11.281 L 4.625 12.281 L 4.625 11.281 Z M 3.081 9.922 L 2.081 9.922 L 3.081 9.922 Z M 3.533 8.961 L 2.873 8.21 L 2.872 8.21 L 3.533 8.961 Z M 10.745 3.952 C 11.16 3.587 11.2 2.955 10.835 2.541 C 10.471 2.126 9.839 2.085 9.424 2.45 L 10.745 3.952 Z M 14.339 5.813 L 7.248 12.055 L 8.569 13.556 L 15.661 7.314 L 14.339 5.813 Z M 7.248 12.055 C 6.573 12.649 5.634 13 4.633 13 L 4.633 15 C 6.088 15 7.506 14.492 8.569 13.556 L 7.248 12.055 Z M 4.633 13 C 3.631 13 2.692 12.649 2.018 12.055 L 0.696 13.556 C 1.759 14.492 3.177 15 4.633 15 L 4.633 13 Z M 2.018 12.055 C 1.347 11.465 1 10.694 1 9.922 L -1 9.922 C -1 11.313 -0.371 12.617 0.696 13.556 L 2.018 12.055 Z M 1 9.922 C 1 9.15 1.347 8.379 2.018 7.789 L 0.696 6.288 C -0.371 7.228 -1 8.531 -1 9.922 L 1 9.922 Z M 2.018 7.789 L 9.109 1.547 L 7.788 0.046 L 0.696 6.288 L 2.018 7.789 Z M 9.109 1.547 C 9.494 1.208 10.04 1 10.632 1 L 10.632 -1 C 9.586 -1 8.561 -0.635 7.788 0.046 L 9.109 1.547 Z M 10.632 1 C 11.224 1 11.771 1.208 12.155 1.547 L 13.477 0.046 C 12.703 -0.635 11.678 -1 10.632 -1 L 10.632 1 Z M 12.155 1.547 C 12.536 1.882 12.721 2.307 12.721 2.719 L 14.721 2.719 C 14.721 1.688 14.255 0.73 13.477 0.046 L 12.155 1.547 Z M 12.721 2.719 C 12.721 3.13 12.536 3.555 12.155 3.89 L 13.477 5.392 C 14.255 4.707 14.721 3.749 14.721 2.719 L 12.721 2.719 Z M 12.156 3.89 L 5.056 10.132 L 6.377 11.634 L 13.476 5.392 L 12.156 3.89 Z M 5.056 10.133 C 4.961 10.216 4.807 10.281 4.625 10.281 L 4.625 12.281 C 5.261 12.281 5.893 12.06 6.378 11.634 L 5.056 10.133 Z M 4.625 10.281 C 4.442 10.281 4.289 10.216 4.194 10.133 L 2.872 11.634 C 3.356 12.06 3.988 12.281 4.625 12.281 L 4.625 10.281 Z M 4.194 10.133 C 4.103 10.053 4.081 9.973 4.081 9.922 L 2.081 9.922 C 2.081 10.592 2.384 11.204 2.872 11.634 L 4.194 10.133 Z M 4.081 9.922 C 4.081 9.871 4.103 9.792 4.194 9.712 L 2.872 8.21 C 2.384 8.64 2.081 9.252 2.081 9.922 L 4.081 9.922 Z M 4.193 9.712 L 10.745 3.952 L 9.424 2.45 L 2.873 8.21 L 4.193 9.712 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Property 1=app_settings_alt
    "property1=app_settings_alt": __body0,
    // figma: Property 1=apps
    "property1=apps": __body1,
    // figma: Property 1=apps_outage
    "property1=apps_outage": __body2,
    // figma: Property 1=arrow_back
    "property1=arrow_back": __body3,
    // figma: Property 1=arrow_back_ios
    "property1=arrow_back_ios": __body4,
    // figma: Property 1=arrow_back_ios_new
    "property1=arrow_back_ios_new": __body5,
    // figma: Property 1=arrow_downward
    "property1=arrow_downward": __body6,
    // figma: Property 1=arrow_drop_down
    "property1=arrow_drop_down": __body7,
    // figma: Property 1=arrow_drop_down_circle
    "property1=arrow_drop_down_circle": __body8,
    // figma: Property 1=arrow_drop_up
    "property1=arrow_drop_up": __body9,
    // figma: Property 1=arrow_forward
    "property1=arrow_forward": __body10,
    // figma: Property 1=arrow_forward_ios
    "property1=arrow_forward_ios": __body11,
    // figma: Property 1=arrow_left
    "property1=arrow_left": __body12,
    // figma: Property 1=arrow_right
    "property1=arrow_right": __body13,
    // figma: Property 1=arrow_upward
    "property1=arrow_upward": __body14,
    // figma: Property 1=assistant_direction
    "property1=assistant_direction": __body15,
    // figma: Property 1=campaign
    "property1=campaign": __body16,
    // figma: Property 1=cancel
    "property1=cancel": __body17,
    // figma: Property 1=check
    "property1=check": __body18,
    // figma: Property 1=chevron_left
    "property1=chevron_left": __body19,
    // figma: Property 1=chevron_right
    "property1=chevron_right": __body20,
    // figma: Property 1=close
    "property1=close": __body21,
    // figma: Property 1=double_arrow
    "property1=double_arrow": __body22,
    // figma: Property 1=east
    "property1=east": __body23,
    // figma: Property 1=Variant58
    "property1=variant58": __body23,
    // figma: Property 1=expand_circle_down
    "property1=expand_circle_down": __body24,
    // figma: Property 1=expand_less
    "property1=expand_less": __body25,
    // figma: Property 1=expand_more
    "property1=expand_more": __body26,
    // figma: Property 1=first_page
    "property1=first_page": __body27,
    // figma: Property 1=fullscreen
    "property1=fullscreen": __body28,
    // figma: Property 1=fullscreen_exit
    "property1=fullscreen_exit": __body29,
    // figma: Property 1=home_work
    "property1=home_work": __body30,
    // figma: Property 1=last_page
    "property1=last_page": __body31,
    // figma: Property 1=legend_toggle
    "property1=legend_toggle": __body32,
    // figma: Property 1=maps_home_work
    "property1=maps_home_work": __body33,
    // figma: Property 1=menu
    "property1=menu": __body34,
    // figma: Property 1=menu_open
    "property1=menu_open": __body35,
    // figma: Property 1=menu_close
    "property1=menu_close": __body36,
    // figma: Property 1=more_horiz
    "property1=more_horiz": __body37,
    // figma: Property 1=more_vert
    "property1=more_vert": __body38,
    // figma: Property 1=north
    "property1=north": __body39,
    // figma: Property 1=north_east
    "property1=north_east": __body40,
    // figma: Property 1=north_west
    "property1=north_west": __body41,
    // figma: Property 1=offline_share
    "property1=offline_share": __body42,
    // figma: Property 1=payments
    "property1=payments": __body43,
    // figma: Property 1=pivot_table_chart
    "property1=pivot_table_chart": __body44,
    // figma: Property 1=refresh
    "property1=refresh": __body45,
    // figma: Property 1=south
    "property1=south": __body46,
    // figma: Property 1=south_east
    "property1=south_east": __body47,
    // figma: Property 1=south_west
    "property1=south_west": __body48,
    // figma: Property 1=subdirectory_arrow_left
    "property1=subdirectory_arrow_left": __body49,
    // figma: Property 1=subdirectory_arrow_right
    "property1=subdirectory_arrow_right": __body50,
    // figma: Property 1=switch_left
    "property1=switch_left": __body51,
    // figma: Property 1=switch_right
    "property1=switch_right": __body52,
    // figma: Property 1=unfold_less
    "property1=unfold_less": __body53,
    // figma: Property 1=unfold_more
    "property1=unfold_more": __body54,
    // figma: Property 1=waterfall_chart
    "property1=waterfall_chart": __body55,
    // figma: Property 1=west
    "property1=west": __body56,
    // figma: Property 1=Send email
    "property1=send email": __body57,
    // figma: Property 1=Quản trị mục tiêu
    "property1=quản trị mục tiêu": __body58,
    // figma: Property 1=papper clip
    "property1=papper clip": __body59
  };
  return (__impls[__vkey_Component4(props)] ?? __body0)();
}

// figma node: 1717:46517 emoji_objects (5 variants)
const __venc_EmojiObjects = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_EmojiObjects = p => "style2=" + __venc_EmojiObjects(p.style2);
function EmojiObjects(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.003,
    height: 19,
    viewBox: "0 0 14.003 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.998,
      top: 2.5,
      width: 14.003,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.003 0 C 6.543 0 6.073 0.04 5.603 0.14 C 2.843 0.67 0.643 2.9 0.123 5.66 C -0.357 8.27 0.603 10.67 2.343 12.22 C 2.773 12.6 3.003 13.13 3.003 13.69 L 3.003 16 C 3.003 17.1 3.903 18 5.003 18 L 5.283 18 C 5.633 18.6 6.263 19 7.003 19 C 7.743 19 8.383 18.6 8.723 18 L 9.003 18 C 10.103 18 11.003 17.1 11.003 16 L 11.003 13.69 C 11.003 13.14 11.223 12.6 11.643 12.23 C 13.093 10.95 14.003 9.08 14.003 7 C 14.003 3.13 10.873 0 7.003 0 Z M 9.003 16 L 5.003 16 L 5.003 15 L 9.003 15 L 9.003 16 Z M 9.003 14 L 5.003 14 L 5.003 13 L 9.003 13 L 9.003 14 Z M 7.503 8.41 L 7.503 11 L 6.503 11 L 6.503 8.41 L 4.673 6.59 L 5.383 5.88 L 7.003 7.5 L 8.623 5.88 L 9.333 6.59 L 7.503 8.41 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.003,
    height: 19,
    viewBox: "0 0 14.003 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.998,
      top: 2.5,
      width: 14.003,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.003 0 C 6.543 0 6.073 0.04 5.603 0.14 C 2.843 0.67 0.643 2.9 0.123 5.66 C -0.357 8.27 0.603 10.67 2.343 12.22 C 2.773 12.6 3.003 13.13 3.003 13.69 L 3.003 16 C 3.003 17.1 3.903 18 5.003 18 L 5.283 18 C 5.633 18.6 6.263 19 7.003 19 C 7.743 19 8.383 18.6 8.723 18 L 9.003 18 C 10.103 18 11.003 17.1 11.003 16 L 11.003 13.69 C 11.003 13.14 11.223 12.6 11.643 12.23 C 13.093 10.95 14.003 9.08 14.003 7 C 14.003 3.13 10.873 0 7.003 0 Z M 9.003 14 L 5.003 14 L 5.003 13 L 9.003 13 L 9.003 14 Z M 5.003 16 L 5.003 15 L 9.003 15 L 9.003 16 L 5.003 16 Z M 10.313 10.74 C 10.223 10.82 10.153 10.92 10.073 11 L 3.923 11 C 3.843 10.91 3.773 10.81 3.683 10.73 C 2.363 9.55 1.773 7.79 2.093 6.03 C 2.453 4.09 4.053 2.48 5.983 2.1 C 6.323 2.03 6.663 2 7.003 2 C 9.763 2 12.003 4.24 12.003 7 C 12.003 8.43 11.393 9.79 10.313 10.74 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.503 8 L 6.503 8 L 6.503 11 L 7.503 11 L 7.503 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.383 5.874 L 4.676 6.581 L 6.797 8.702 L 7.504 7.995 L 5.383 5.874 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.504 8.005 L 7.211 8.712 L 9.333 6.591 L 8.626 5.884 L 6.504 8.005 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.003,
    height: 19,
    viewBox: "0 0 14.003 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.998,
      top: 2.5,
      width: 14.003,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.003 0 C 6.543 0 6.073 0.04 5.603 0.14 C 2.843 0.67 0.643 2.9 0.123 5.66 C -0.357 8.27 0.603 10.67 2.343 12.22 C 2.773 12.6 3.003 13.13 3.003 13.69 L 3.003 16 C 3.003 17.1 3.903 18 5.003 18 L 5.283 18 C 5.633 18.6 6.263 19 7.003 19 C 7.743 19 8.383 18.6 8.723 18 L 9.003 18 C 10.103 18 11.003 17.1 11.003 16 L 11.003 13.69 C 11.003 13.14 11.223 12.6 11.643 12.23 C 13.093 10.95 14.003 9.08 14.003 7 C 14.003 3.13 10.873 0 7.003 0 Z M 7.503 11 L 6.503 11 L 6.503 8.41 L 4.673 6.59 L 5.383 5.88 L 7.003 7.5 L 8.623 5.88 L 9.333 6.59 L 7.503 8.42 L 7.503 11 Z M 8.503 16 C 8.493 16 8.483 15.99 8.473 15.99 L 8.473 16 L 5.533 16 L 5.533 15.99 C 5.523 15.99 5.513 16 5.503 16 C 5.223 16 5.003 15.78 5.003 15.5 C 5.003 15.22 5.223 15 5.503 15 C 5.513 15 5.523 15.01 5.533 15.01 L 5.533 15 L 8.473 15 L 8.473 15.01 C 8.483 15.01 8.493 15 8.503 15 C 8.783 15 9.003 15.22 9.003 15.5 C 9.003 15.78 8.783 16 8.503 16 Z M 8.503 14 L 5.503 14 C 5.223 14 5.003 13.78 5.003 13.5 C 5.003 13.22 5.223 13 5.503 13 L 8.503 13 C 8.783 13 9.003 13.22 9.003 13.5 C 9.003 13.78 8.783 14 8.503 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.003,
    height: 19,
    viewBox: "0 0 14.003 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.998,
      top: 2.5,
      width: 14.003,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.003 0 C 6.583 0 6.153 0.04 5.723 0.11 C 2.913 0.61 0.643 2.86 0.123 5.66 C -0.357 8.27 0.603 10.67 2.343 12.22 C 2.773 12.6 3.003 13.13 3.003 13.69 C 3.003 15.21 3.003 18 3.003 18 L 5.283 18 C 5.633 18.6 6.263 19 7.003 19 C 7.743 19 8.383 18.6 8.723 18 L 11.003 18 L 11.003 13.69 C 11.003 13.14 11.223 12.6 11.643 12.23 C 13.093 10.95 14.003 9.08 14.003 7 C 14.003 3.13 10.873 0 7.003 0 Z M 9.003 16 L 5.003 16 L 5.003 15 L 9.003 15 L 9.003 16 Z M 9.003 14 L 5.003 14 L 5.003 13 L 9.003 13 L 9.003 14 Z M 7.503 8.41 L 7.503 11 L 6.503 11 L 6.503 8.41 L 4.673 6.59 L 5.383 5.88 L 7.003 7.5 L 8.623 5.88 L 9.333 6.59 L 7.503 8.41 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.997,
      top: 3,
      width: 14.003,
      height: 19,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.003,
      height: 19,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 1,
    viewBox: "0 0 4 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.003,
      top: 15,
      width: 4,
      height: 1,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 0 L 0 0 L 0 1 L 4 1 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 1,
    viewBox: "0 0 4 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.003,
      top: 13,
      width: 4,
      height: 1,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 0 L 0 0 L 0 1 L 4 1 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.003,
    height: 19,
    viewBox: "0 0 14.003 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.003,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.003 0 C 6.543 0 6.073 0.04 5.603 0.14 C 2.843 0.67 0.643 2.9 0.123 5.66 C -0.357 8.27 0.603 10.67 2.343 12.22 C 2.773 12.6 3.003 13.13 3.003 13.69 L 3.003 16 C 3.003 17.1 3.903 18 5.003 18 L 5.283 18 C 5.633 18.6 6.263 19 7.003 19 C 7.743 19 8.383 18.6 8.723 18 L 9.003 18 C 10.103 18 11.003 17.1 11.003 16 L 11.003 13.69 C 11.003 13.14 11.223 12.6 11.643 12.23 C 13.093 10.95 14.003 9.08 14.003 7 C 14.003 3.13 10.873 0 7.003 0 Z M 9.003 16 L 5.003 16 L 5.003 15 L 9.003 15 L 9.003 16 Z M 9.003 14 L 5.003 14 L 5.003 13 L 9.003 13 L 9.003 14 Z M 10.313 10.74 C 10.223 10.82 10.153 10.92 10.073 11 L 3.923 11 C 3.843 10.91 3.773 10.81 3.683 10.73 C 2.363 9.55 1.773 7.79 2.093 6.03 C 2.453 4.09 4.053 2.48 5.983 2.1 C 6.323 2.03 6.663 2 7.003 2 C 9.763 2 12.003 4.24 12.003 7 C 12.003 8.43 11.393 9.79 10.313 10.74 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.676,
      top: 5.874,
      width: 4.657,
      height: 5.126,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 3,
    viewBox: "0 0 1 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.828,
      top: 2.126,
      width: 1,
      height: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 0 0 L 0 3 L 1 3 L 1 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 3,
    viewBox: "0 0 1 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,-0.707,0.707,0.707,0,0.707)",
      transformOrigin: "0 0",
      width: 1,
      height: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 0 0 L 0 3 L 1 3 L 1 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 3,
    viewBox: "0 0 1 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.707,-0.707,0.707,-0.707,2.536,2.839)",
      transformOrigin: "0 0",
      width: 1,
      height: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 0 0 L 0 3 L 1 3 L 1 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_EmojiObjects(props)] ?? __body0)();
}

// figma node: 706:26905 add (5 variants)
const __venc_Add = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Add = p => "style2=" + __venc_Add(p.style2);
function Add(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 8 L 8 8 L 8 14 L 6 14 L 6 8 L 0 8 L 0 6 L 6 6 L 6 0 L 8 0 L 8 6 L 14 6 L 14 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13 8 L 8 8 L 8 13 C 8 13.55 7.55 14 7 14 C 6.45 14 6 13.55 6 13 L 6 8 L 1 8 C 0.45 8 0 7.55 0 7 C 0 6.45 0.45 6 1 6 L 6 6 L 6 1 C 6 0.45 6.45 0 7 0 C 7.55 0 8 0.45 8 1 L 8 6 L 13 6 C 13.55 6 14 6.45 14 7 C 14 7.55 13.55 8 13 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_Add(props)] ?? __body0)();
}

// figma node: 1030:44094 add_circle_outline (5 variants)
const __venc_AddCircleOutline = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_AddCircleOutline = p => "style2=" + __venc_AddCircleOutline(p.style2);
function AddCircleOutline(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11 5 L 9 5 L 9 9 L 5 9 L 5 11 L 9 11 L 9 15 L 11 15 L 11 11 L 15 11 L 15 9 L 11 9 L 11 5 Z M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 5 C 9.45 5 9 5.45 9 6 L 9 9 L 6 9 C 5.45 9 5 9.45 5 10 C 5 10.55 5.45 11 6 11 L 9 11 L 9 14 C 9 14.55 9.45 15 10 15 C 10.55 15 11 14.55 11 14 L 11 11 L 14 11 C 14.55 11 15 10.55 15 10 C 15 9.45 14.55 9 14 9 L 11 9 L 11 6 C 11 5.45 10.55 5 10 5 Z M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_AddCircleOutline(props)] ?? __body0)();
}

// figma node: 959:39971 border_color (5 variants)
const __venc_BorderColor = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_BorderColor = p => "style2=" + __venc_BorderColor(p.style2);
function BorderColor(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 22.003,
    viewBox: "0 0 20 22.003",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 0.999,
      width: 20,
      height: 22.003
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20 22.003 L 0 22.003 L 0 18.003 L 20 18.003 L 20 22.003 Z M 11.06 3.193 L 14.81 6.942 L 5.75 16.003 L 2 16.003 L 2 12.252 L 11.06 3.193 Z M 15.88 5.872 L 12.13 2.122 L 13.96 0.292 C 14.35 -0.097 14.98 -0.097 15.37 0.292 L 17.71 2.633 C 18.1 3.023 18.1 3.653 17.71 4.043 L 15.88 5.872 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 22,
    viewBox: "0 0 20 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 1,
      width: 20,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.81 6.94 L 11.06 3.19 L 2 12.25 L 2 16 L 5.75 16 L 14.81 6.94 Z M 4 14 L 4 13.08 L 11.06 6.02 L 11.98 6.94 L 4.92 14 L 4 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.71 4.04 C 18.1 3.65 18.1 3.02 17.71 2.63 L 15.37 0.29 C 15.17 0.09 14.92 0 14.66 0 C 14.41 0 14.15 0.1 13.96 0.29 L 12.13 2.12 L 15.88 5.87 L 17.71 4.04 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 20 18 L 0 18 L 0 22 L 20 22 L 20 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 22.003,
    viewBox: "0 0 20 22.003",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 0.999,
      width: 20,
      height: 22.003
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 22.003 L 2 22.003 C 0.9 22.003 0 21.103 0 20.003 C 0 18.903 0.9 18.003 2 18.003 L 18 18.003 C 19.1 18.003 20 18.903 20 20.003 C 20 21.103 19.1 22.003 18 22.003 Z M 11.06 3.193 L 14.81 6.942 L 6.04 15.712 C 5.86 15.902 5.6 16.003 5.34 16.003 L 3 16.003 C 2.45 16.003 2 15.552 2 15.002 L 2 12.662 C 2 12.392 2.11 12.142 2.29 11.952 L 11.06 3.193 Z M 15.88 5.872 L 12.13 2.122 L 13.96 0.292 C 14.35 -0.097 14.98 -0.097 15.37 0.292 L 17.71 2.633 C 18.1 3.023 18.1 3.653 17.71 4.043 L 15.88 5.872 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 22.420,
    viewBox: "0 0 20 22.420",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 0.79,
      width: 20,
      height: 22.42
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20 22.42 L 0 22.42 L 0 18.42 L 20 18.42 L 20 22.42 Z M 11.06 3.61 L 14.81 7.36 L 5.75 16.42 L 2 16.42 L 2 12.67 L 11.06 3.61 Z M 15.88 6.29 L 12.13 2.54 L 14.66 0 L 18.41 3.75 L 15.88 6.29 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 22,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 22,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.810,
    height: 12.810,
    viewBox: "0 0 12.810 12.810",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3.19,
      width: 12.81,
      height: 12.81
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.81 3.75 L 9.06 0 L 0 9.06 L 0 12.81 L 3.75 12.81 L 12.81 3.75 Z M 2 10.81 L 2 9.89 L 9.06 2.83 L 9.98 3.75 L 2.92 10.81 L 2 10.81 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.872,
    height: 5.870,
    viewBox: "0 0 5.872 5.870",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.13,
      top: 0,
      width: 5.872,
      height: 5.87
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.58 4.04 C 5.97 3.65 5.97 3.02 5.58 2.63 L 3.24 0.29 C 3.04 0.09 2.79 0 2.53 0 C 2.28 0 2.02 0.1 1.83 0.29 L 0 2.12 L 3.75 5.87 L 5.58 4.04 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 4,
    viewBox: "0 0 20 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 18,
      width: 20,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20 0 L 0 0 L 0 4 L 20 4 L 20 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_BorderColor(props)] ?? __body0)();
}

// figma node: 842:42972 calendar_today (5 variants)
const __venc_CalendarToday = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_CalendarToday = p => "style2=" + __venc_CalendarToday(p.style2);
function CalendarToday(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 22,
    viewBox: "0 0 20 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 1,
      width: 20,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 2 L 17 2 L 17 0 L 15 0 L 15 2 L 5 2 L 5 0 L 3 0 L 3 2 L 2 2 C 0.9 2 0 2.9 0 4 L 0 20 C 0 21.1 0.9 22 2 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 4 C 20 2.9 19.1 2 18 2 Z M 18 20 L 2 20 L 2 7 L 18 7 L 18 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 22,
    viewBox: "0 0 20 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 1,
      width: 20,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 2 L 17 2 L 17 0 L 15 0 L 15 2 L 5 2 L 5 0 L 3 0 L 3 2 L 2 2 C 0.9 2 0 2.9 0 4 L 0 20 C 0 21.1 0.9 22 2 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 4 C 20 2.9 19.1 2 18 2 Z M 18 20 L 2 20 L 2 9 L 18 9 L 18 20 Z M 18 7 L 2 7 L 2 4 L 18 4 L 18 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 22,
    viewBox: "0 0 20 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 1,
      width: 20,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 2 L 17 2 L 17 1 C 17 0.45 16.55 0 16 0 C 15.45 0 15 0.45 15 1 L 15 2 L 5 2 L 5 1 C 5 0.45 4.55 0 4 0 C 3.45 0 3 0.45 3 1 L 3 2 L 2 2 C 0.9 2 0 2.9 0 4 L 0 20 C 0 21.1 0.9 22 2 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 4 C 20 2.9 19.1 2 18 2 Z M 17 20 L 3 20 C 2.45 20 2 19.55 2 19 L 2 7 L 18 7 L 18 19 C 18 19.55 17.55 20 17 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 22,
    viewBox: "0 0 20 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 1,
      width: 20,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20 2 L 17 2 L 17 0 L 15 0 L 15 2 L 5 2 L 5 0 L 3 0 L 3 2 L 0 2 L 0 22 L 20 22 L 20 2 Z M 18 20 L 2 20 L 2 7 L 18 7 L 18 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 22,
    viewBox: "0 0 20 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 1,
      width: 20,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 2 L 17 2 L 17 0 L 15 0 L 15 2 L 5 2 L 5 0 L 3 0 L 3 2 L 2 2 C 0.9 2 0 2.9 0 4 L 0 20 C 0 21.1 0.9 22 2 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 4 C 20 2.9 19.1 2 18 2 Z M 18 4 L 18 7 L 2 7 L 2 4 L 18 4 Z M 2 20 L 2 9 L 18 9 L 18 20 L 2 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 2.990,
    viewBox: "0 0 16 2.990",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5.01,
      width: 16,
      height: 2.99,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 2.99 L 0 2.99 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_CalendarToday(props)] ?? __body0)();
}

// figma node: 1036:59449 check_box (5 variants)
const __venc_CheckBox = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_CheckBox = p => "style2=" + __venc_CheckBox(p.style2);
function CheckBox(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 2 0 C 0.89 0 0 0.9 0 2 L 0 16 C 0 17.1 0.89 18 2 18 L 16 18 C 17.11 18 18 17.1 18 16 L 18 2 C 18 0.9 17.11 0 16 0 Z M 7 14 L 2 9 L 3.41 7.59 L 7 11.17 L 14.59 3.58 L 16 5 L 7 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 16 C 0 17.1 0.9 18 2 18 L 16 18 C 17.1 18 18 17.1 18 16 L 18 2 C 18 0.9 17.1 0 16 0 Z M 16 16 L 2 16 L 2 2 L 16 2 L 16 16 Z M 14.99 6 L 13.58 4.58 L 6.99 11.17 L 4.41 8.6 L 2.99 10.01 L 6.99 14 L 14.99 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 16 C 0 17.1 0.9 18 2 18 L 16 18 C 17.1 18 18 17.1 18 16 L 18 2 C 18 0.9 17.1 0 16 0 Z M 7.71 13.29 C 7.32 13.68 6.69 13.68 6.3 13.29 L 2.71 9.7 C 2.32 9.31 2.32 8.68 2.71 8.29 C 3.1 7.9 3.73 7.9 4.12 8.29 L 7 11.17 L 13.88 4.29 C 14.27 3.9 14.9 3.9 15.29 4.29 C 15.68 4.68 15.68 5.31 15.29 5.7 L 7.71 13.29 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 0 L 0 0 L 0 18 L 18 18 L 18 0 Z M 7 14 L 2 9 L 3.41 7.59 L 7 11.17 L 14.59 3.58 L 16 5 L 7 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14 L 14 14 L 14 0 L 0 0 L 0 14 Z M 2.41 6.6 L 4.99 9.18 L 11.58 2.59 L 12.99 4 L 4.99 12 L 1 8.01 L 2.41 6.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 16 C 0 17.1 0.9 18 2 18 L 16 18 C 17.1 18 18 17.1 18 16 L 18 2 C 18 0.9 17.1 0 16 0 Z M 16 16 L 2 16 L 2 2 L 16 2 L 16 16 Z M 14.99 6 L 13.58 4.58 L 6.99 11.17 L 4.41 8.6 L 2.99 10.01 L 6.99 14 L 14.99 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_CheckBox(props)] ?? __body0)();
}

// figma node: 1036:59461 check_box_outline_blank (5 variants)
const __venc_CheckBoxOutlineBlank = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_CheckBoxOutlineBlank = p => "style2=" + __venc_CheckBoxOutlineBlank(p.style2);
function CheckBoxOutlineBlank(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 2 L 16 16 L 2 16 L 2 2 L 16 2 Z M 16 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 16 C 0 17.1 0.9 18 2 18 L 16 18 C 17.1 18 18 17.1 18 16 L 18 2 C 18 0.9 17.1 0 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 16 L 3 16 C 2.45 16 2 15.55 2 15 L 2 3 C 2 2.45 2.45 2 3 2 L 15 2 C 15.55 2 16 2.45 16 3 L 16 15 C 16 15.55 15.55 16 15 16 Z M 16 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 16 C 0 17.1 0.9 18 2 18 L 16 18 C 17.1 18 18 17.1 18 16 L 18 2 C 18 0.9 17.1 0 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 2 L 16 16 L 2 16 L 2 2 L 16 2 Z M 18 0 L 0 0 L 0 18 L 18 18 L 18 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body2,
    // figma: Style=Two Tone
    "style2=two tone": __body0
  };
  return (__impls[__vkey_CheckBoxOutlineBlank(props)] ?? __body0)();
}

// figma node: 502:7473 check_circle (5 variants)
const __venc_CheckCircle = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_CheckCircle = p => "style2=" + __venc_CheckCircle(p.style2);
function CheckCircle(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 8 15 L 3 10 L 4.41 8.59 L 8 12.17 L 15.59 4.58 L 17 6 L 8 15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z M 14.59 5.58 L 8 12.17 L 5.41 9.59 L 4 11 L 8 15 L 16 7 L 14.59 5.58 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 7.29 14.29 L 3.7 10.7 C 3.31 10.31 3.31 9.68 3.7 9.29 C 4.09 8.9 4.72 8.9 5.11 9.29 L 8 12.17 L 14.88 5.29 C 15.27 4.9 15.9 4.9 16.29 5.29 C 16.68 5.68 16.68 6.31 16.29 6.7 L 8.7 14.29 C 8.32 14.68 7.68 14.68 7.29 14.29 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 C 3.59 0 0 3.59 0 8 C 0 12.41 3.59 16 8 16 C 12.41 16 16 12.41 16 8 C 16 3.59 12.41 0 8 0 Z M 6 13 L 2 9 L 3.41 7.59 L 6 10.17 L 12.59 3.58 L 14 5 L 6 13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z M 14.59 5.58 L 8 12.17 L 5.41 9.59 L 4 11 L 8 15 L 16 7 L 14.59 5.58 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body3
  };
  return (__impls[__vkey_CheckCircle(props)] ?? __body0)();
}

// figma node: 1036:59623 delete (5 variants)
const __venc_Delete = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Delete = p => "style2=" + __venc_Delete(p.style2);
function Delete(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 18,
    viewBox: "0 0 14 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 3,
      width: 14,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 16 C 1 17.1 1.9 18 3 18 L 11 18 C 12.1 18 13 17.1 13 16 L 13 4 L 1 4 L 1 16 Z M 14 1 L 10.5 1 L 9.5 0 L 4.5 0 L 3.5 1 L 0 1 L 0 3 L 14 3 L 14 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 18,
    viewBox: "0 0 14 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 3,
      width: 14,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11 6 L 11 16 L 3 16 L 3 6 L 11 6 Z M 9.5 0 L 4.5 0 L 3.5 1 L 0 1 L 0 3 L 14 3 L 14 1 L 10.5 1 L 9.5 0 Z M 13 4 L 1 4 L 1 16 C 1 17.1 1.9 18 3 18 L 11 18 C 12.1 18 13 17.1 13 16 L 13 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 18,
    viewBox: "0 0 14 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 3,
      width: 14,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 16 C 1 17.1 1.9 18 3 18 L 11 18 C 12.1 18 13 17.1 13 16 L 13 6 C 13 4.9 12.1 4 11 4 L 3 4 C 1.9 4 1 4.9 1 6 L 1 16 Z M 13 1 L 10.5 1 L 9.79 0.29 C 9.61 0.11 9.35 0 9.09 0 L 4.91 0 C 4.65 0 4.39 0.11 4.21 0.29 L 3.5 1 L 1 1 C 0.45 1 0 1.45 0 2 C 0 2.55 0.45 3 1 3 L 13 3 C 13.55 3 14 2.55 14 2 C 14 1.45 13.55 1 13 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 18,
    viewBox: "0 0 14 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 3,
      width: 14,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 18 L 13 18 L 13 4 L 1 4 L 1 18 Z M 14 1 L 10.5 1 L 9.5 0 L 4.5 0 L 3.5 1 L 0 1 L 0 3 L 14 3 L 14 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 10,
    viewBox: "0 0 8 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 9,
      width: 8,
      height: 10,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 8 0 L 8 10 L 0 10 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 18,
    viewBox: "0 0 14 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 3,
      width: 14,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.5 1 L 9.5 0 L 4.5 0 L 3.5 1 L 0 1 L 0 3 L 14 3 L 14 1 L 10.5 1 Z M 1 16 C 1 17.1 1.9 18 3 18 L 11 18 C 12.1 18 13 17.1 13 16 L 13 4 L 1 4 L 1 16 Z M 3 6 L 11 6 L 11 16 L 3 16 L 3 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_Delete(props)] ?? __body0)();
}

// figma node: 502:7497 highlight_off (5 variants)
const __venc_HighlightOff = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_HighlightOff = p => "style2=" + __venc_HighlightOff(p.style2);
function HighlightOff(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.59 6 L 10 8.59 L 7.41 6 L 6 7.41 L 8.59 10 L 6 12.59 L 7.41 14 L 10 11.41 L 12.59 14 L 14 12.59 L 11.41 10 L 14 7.41 L 12.59 6 Z M 10 0 C 4.47 0 0 4.47 0 10 C 0 15.53 4.47 20 10 20 C 15.53 20 20 15.53 20 10 C 20 4.47 15.53 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.89 6.7 L 10 8.59 L 8.11 6.7 C 7.72 6.31 7.09 6.31 6.7 6.7 C 6.31 7.09 6.31 7.72 6.7 8.11 L 8.59 10 L 6.7 11.89 C 6.31 12.28 6.31 12.91 6.7 13.3 C 7.09 13.69 7.72 13.69 8.11 13.3 L 10 11.41 L 11.89 13.3 C 12.28 13.69 12.91 13.69 13.3 13.3 C 13.69 12.91 13.69 12.28 13.3 11.89 L 11.41 10 L 13.3 8.11 C 13.69 7.72 13.69 7.09 13.3 6.7 C 12.91 6.32 12.27 6.32 11.89 6.7 Z M 10 0 C 4.47 0 0 4.47 0 10 C 0 15.53 4.47 20 10 20 C 15.53 20 20 15.53 20 10 C 20 4.47 15.53 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 C 3.59 0 0 3.59 0 8 C 0 12.41 3.59 16 8 16 C 12.41 16 16 12.41 16 8 C 16 3.59 12.41 0 8 0 Z M 12 10.59 L 10.59 12 L 8 9.41 L 5.41 12 L 4 10.59 L 6.59 8 L 4 5.41 L 5.41 4 L 8 6.59 L 10.59 4 L 12 5.41 L 9.41 8 L 12 10.59 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.59 6 L 10 8.59 L 7.41 6 L 6 7.41 L 8.59 10 L 6 12.59 L 7.41 14 L 10 11.41 L 12.59 14 L 14 12.59 L 11.41 10 L 14 7.41 L 12.59 6 Z M 10 0 C 4.47 0 0 4.47 0 10 C 0 15.53 4.47 20 10 20 C 15.53 20 20 15.53 20 10 C 20 4.47 15.53 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_HighlightOff(props)] ?? __body0)();
}

// figma node: 502:7429 home (5 variants)
const __venc_Home = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Home = p => "style2=" + __venc_Home(p.style2);
function Home(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 17,
    viewBox: "0 0 20 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3.5,
      width: 20,
      height: 17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 17 L 8 11 L 12 11 L 12 17 L 17 17 L 17 9 L 20 9 L 10 0 L 0 9 L 3 9 L 3 17 L 8 17 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 17,
    viewBox: "0 0 20 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3.5,
      width: 20,
      height: 17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 2.69 L 15 7.19 L 15 15 L 13 15 L 13 9 L 7 9 L 7 15 L 5 15 L 5 7.19 L 10 2.69 Z M 10 0 L 0 9 L 3 9 L 3 17 L 9 17 L 9 11 L 11 11 L 11 17 L 17 17 L 17 9 L 20 9 L 10 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.400,
    height: 16.655,
    viewBox: "0 0 18.400 16.655",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.8,
      top: 3.672,
      width: 18.4,
      height: 16.655
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.198 15.655 L 7.198 10.655 L 11.198 10.655 L 11.198 15.655 C 11.198 16.205 11.648 16.655 12.198 16.655 L 15.198 16.655 C 15.748 16.655 16.198 16.205 16.198 15.655 L 16.198 8.655 L 17.898 8.655 C 18.358 8.655 18.578 8.085 18.228 7.785 L 9.868 0.255 C 9.488 -0.085 8.908 -0.085 8.528 0.255 L 0.168 7.785 C -0.172 8.085 0.038 8.655 0.498 8.655 L 2.198 8.655 L 2.198 15.655 C 2.198 16.205 2.648 16.655 3.198 16.655 L 6.198 16.655 C 6.748 16.655 7.198 16.205 7.198 15.655 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 17,
    viewBox: "0 0 20 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3,
      width: 20,
      height: 17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 L 0 9 L 3 9 L 3 17 L 9 17 L 9 11 L 11 11 L 11 17 L 17 17 L 17 9 L 20 9 L 10 0 Z M 15 15 L 13 15 L 13 9 L 7 9 L 7 15 L 5 15 L 5 7.19 L 10 2.69 L 15 7.19 L 15 15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 12.310,
    viewBox: "0 0 10 12.310",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 5.69,
      width: 10,
      height: 12.31,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.5 L 0 12.31 L 2 12.31 L 2 6.31 L 8 6.31 L 8 12.31 L 10 12.31 L 10 4.5 L 5 0 L 0 4.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body3
  };
  return (__impls[__vkey_Home(props)] ?? __body0)();
}

// figma node: 799:26505 notifications (5 variants)
const __venc_Notifications = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Notifications = p => "style2=" + __venc_Notifications(p.style2);
function Notifications(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 19.500,
    viewBox: "0 0 16 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2.25,
      width: 16,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 19.5 C 9.1 19.5 10 18.6 10 17.5 L 6 17.5 C 6 18.6 6.89 19.5 8 19.5 Z M 14 13.5 L 14 8.5 C 14 5.43 12.36 2.86 9.5 2.18 L 9.5 1.5 C 9.5 0.67 8.83 0 8 0 C 7.17 0 6.5 0.67 6.5 1.5 L 6.5 2.18 C 3.63 2.86 2 5.42 2 8.5 L 2 13.5 L 0 15.5 L 0 16.5 L 16 16.5 L 16 15.5 L 14 13.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 19.500,
    viewBox: "0 0 16 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2.25,
      width: 16,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 19.5 C 9.1 19.5 10 18.6 10 17.5 L 6 17.5 C 6 18.6 6.9 19.5 8 19.5 Z M 14 13.5 L 14 8.5 C 14 5.43 12.37 2.86 9.5 2.18 L 9.5 1.5 C 9.5 0.67 8.83 0 8 0 C 7.17 0 6.5 0.67 6.5 1.5 L 6.5 2.18 C 3.64 2.86 2 5.42 2 8.5 L 2 13.5 L 0 15.5 L 0 16.5 L 16 16.5 L 16 15.5 L 14 13.5 Z M 12 14.5 L 4 14.5 L 4 8.5 C 4 6.02 5.51 4 8 4 C 10.49 4 12 6.02 12 8.5 L 12 14.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.170,
    height: 19.500,
    viewBox: "0 0 15.170 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.415,
      top: 2.25,
      width: 15.17,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.586 19.5 C 8.686 19.5 9.586 18.6 9.586 17.5 L 5.586 17.5 C 5.586 18.6 6.476 19.5 7.586 19.5 Z M 13.586 13.5 L 13.586 8.5 C 13.586 5.43 11.946 2.86 9.086 2.18 L 9.086 1.5 C 9.086 0.67 8.416 0 7.586 0 C 6.756 0 6.086 0.67 6.086 1.5 L 6.086 2.18 C 3.216 2.86 1.586 5.42 1.586 8.5 L 1.586 13.5 L 0.296 14.79 C -0.334 15.42 0.106 16.5 0.996 16.5 L 14.166 16.5 C 15.056 16.5 15.506 15.42 14.876 14.79 L 13.586 13.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 19.500,
    viewBox: "0 0 16 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2.25,
      width: 16,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 19.5 C 9.1 19.5 10 18.6 10 17.5 L 6 17.5 C 6 18.6 6.89 19.5 8 19.5 Z M 14 13.5 L 14 8.5 C 14 5.43 12.36 2.86 9.5 2.18 L 9.5 0 L 6.5 0 L 6.5 2.18 C 3.63 2.86 2 5.42 2 8.5 L 2 13.5 L 0 15.5 L 0 16.5 L 16 16.5 L 16 15.5 L 14 13.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 10.500,
    viewBox: "0 0 8 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 6.5,
      width: 8,
      height: 10.5,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 0 C 1.51 0 0 2.02 0 4.5 L 0 10.5 L 8 10.5 L 8 4.5 C 8 2.02 6.49 0 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 19.500,
    viewBox: "0 0 16 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2.5,
      width: 16,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 19.5 C 9.1 19.5 10 18.6 10 17.5 L 6 17.5 C 6 18.6 6.9 19.5 8 19.5 Z M 14 13.5 L 14 8.5 C 14 5.43 12.37 2.86 9.5 2.18 L 9.5 1.5 C 9.5 0.67 8.83 0 8 0 C 7.17 0 6.5 0.67 6.5 1.5 L 6.5 2.18 C 3.64 2.86 2 5.42 2 8.5 L 2 13.5 L 0 15.5 L 0 16.5 L 16 16.5 L 16 15.5 L 14 13.5 Z M 12 14.5 L 4 14.5 L 4 8.5 C 4 6.02 5.51 4 8 4 C 10.49 4 12 6.02 12 8.5 L 12 14.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_Notifications(props)] ?? __body0)();
}

// figma node: 1717:46991 notifications (5 variants)
const __venc_Notifications2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Notifications2 = p => "style2=" + __venc_Notifications2(p.style2);
function Notifications2(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 19.500,
    viewBox: "0 0 16 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2.25,
      width: 16,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 19.5 C 9.1 19.5 10 18.6 10 17.5 L 6 17.5 C 6 18.6 6.89 19.5 8 19.5 Z M 14 13.5 L 14 8.5 C 14 5.43 12.36 2.86 9.5 2.18 L 9.5 1.5 C 9.5 0.67 8.83 0 8 0 C 7.17 0 6.5 0.67 6.5 1.5 L 6.5 2.18 C 3.63 2.86 2 5.42 2 8.5 L 2 13.5 L 0 15.5 L 0 16.5 L 16 16.5 L 16 15.5 L 14 13.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 19.500,
    viewBox: "0 0 16 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2.25,
      width: 16,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 19.5 C 9.1 19.5 10 18.6 10 17.5 L 6 17.5 C 6 18.6 6.9 19.5 8 19.5 Z M 14 13.5 L 14 8.5 C 14 5.43 12.37 2.86 9.5 2.18 L 9.5 1.5 C 9.5 0.67 8.83 0 8 0 C 7.17 0 6.5 0.67 6.5 1.5 L 6.5 2.18 C 3.64 2.86 2 5.42 2 8.5 L 2 13.5 L 0 15.5 L 0 16.5 L 16 16.5 L 16 15.5 L 14 13.5 Z M 12 14.5 L 4 14.5 L 4 8.5 C 4 6.02 5.51 4 8 4 C 10.49 4 12 6.02 12 8.5 L 12 14.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.170,
    height: 19.500,
    viewBox: "0 0 15.170 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.415,
      top: 2.25,
      width: 15.17,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.586 19.5 C 8.686 19.5 9.586 18.6 9.586 17.5 L 5.586 17.5 C 5.586 18.6 6.476 19.5 7.586 19.5 Z M 13.586 13.5 L 13.586 8.5 C 13.586 5.43 11.946 2.86 9.086 2.18 L 9.086 1.5 C 9.086 0.67 8.416 0 7.586 0 C 6.756 0 6.086 0.67 6.086 1.5 L 6.086 2.18 C 3.216 2.86 1.586 5.42 1.586 8.5 L 1.586 13.5 L 0.296 14.79 C -0.334 15.42 0.106 16.5 0.996 16.5 L 14.166 16.5 C 15.056 16.5 15.506 15.42 14.876 14.79 L 13.586 13.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 19.500,
    viewBox: "0 0 16 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2.25,
      width: 16,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 19.5 C 9.1 19.5 10 18.6 10 17.5 L 6 17.5 C 6 18.6 6.89 19.5 8 19.5 Z M 14 13.5 L 14 8.5 C 14 5.43 12.36 2.86 9.5 2.18 L 9.5 0 L 6.5 0 L 6.5 2.18 C 3.63 2.86 2 5.42 2 8.5 L 2 13.5 L 0 15.5 L 0 16.5 L 16 16.5 L 16 15.5 L 14 13.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 10.500,
    viewBox: "0 0 8 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 6.5,
      width: 8,
      height: 10.5,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 0 C 1.51 0 0 2.02 0 4.5 L 0 10.5 L 8 10.5 L 8 4.5 C 8 2.02 6.49 0 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 19.500,
    viewBox: "0 0 16 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2.5,
      width: 16,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 19.5 C 9.1 19.5 10 18.6 10 17.5 L 6 17.5 C 6 18.6 6.9 19.5 8 19.5 Z M 14 13.5 L 14 8.5 C 14 5.43 12.37 2.86 9.5 2.18 L 9.5 1.5 C 9.5 0.67 8.83 0 8 0 C 7.17 0 6.5 0.67 6.5 1.5 L 6.5 2.18 C 3.64 2.86 2 5.42 2 8.5 L 2 13.5 L 0 15.5 L 0 16.5 L 16 16.5 L 16 15.5 L 14 13.5 Z M 12 14.5 L 4 14.5 L 4 8.5 C 4 6.02 5.51 4 8 4 C 10.49 4 12 6.02 12 8.5 L 12 14.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_Notifications2(props)] ?? __body0)();
}

// figma node: 799:26517 notifications_active (5 variants)
const __venc_NotificationsActive = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_NotificationsActive = p => "style2=" + __venc_NotificationsActive(p.style2);
function NotificationsActive(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.940,
    height: 19.500,
    viewBox: "0 0 19.940 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.03,
      top: 2.25,
      width: 19.94,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.55 1.58 L 4.12 0.15 C 1.72 1.98 0.14 4.8 0 8 L 2 8 C 2.15 5.35 3.51 3.03 5.55 1.58 Z M 17.94 8 L 19.94 8 C 19.79 4.8 18.21 1.98 15.82 0.15 L 14.4 1.58 C 16.42 3.03 17.79 5.35 17.94 8 Z M 15.97 8.5 C 15.97 5.43 14.33 2.86 11.47 2.18 L 11.47 1.5 C 11.47 0.67 10.8 0 9.97 0 C 9.14 0 8.47 0.67 8.47 1.5 L 8.47 2.18 C 5.6 2.86 3.97 5.42 3.97 8.5 L 3.97 13.5 L 1.97 15.5 L 1.97 16.5 L 17.97 16.5 L 17.97 15.5 L 15.97 13.5 L 15.97 8.5 Z M 9.97 19.5 C 10.11 19.5 10.24 19.49 10.37 19.46 C 11.02 19.32 11.55 18.88 11.81 18.28 C 11.91 18.04 11.96 17.78 11.96 17.5 L 7.96 17.5 C 7.97 18.6 8.86 19.5 9.97 19.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.940,
    height: 19.500,
    viewBox: "0 0 19.940 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.03,
      top: 2.25,
      width: 19.94,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.97 19.5 C 11.07 19.5 11.97 18.6 11.97 17.5 L 7.97 17.5 C 7.97 18.6 8.87 19.5 9.97 19.5 Z M 15.97 13.5 L 15.97 8.5 C 15.97 5.43 14.34 2.86 11.47 2.18 L 11.47 1.5 C 11.47 0.67 10.8 0 9.97 0 C 9.14 0 8.47 0.67 8.47 1.5 L 8.47 2.18 C 5.61 2.86 3.97 5.42 3.97 8.5 L 3.97 13.5 L 1.97 15.5 L 1.97 16.5 L 17.97 16.5 L 17.97 15.5 L 15.97 13.5 Z M 13.97 14.5 L 5.97 14.5 L 5.97 8.5 C 5.97 6.02 7.48 4 9.97 4 C 12.46 4 13.97 6.02 13.97 8.5 L 13.97 14.5 Z M 5.55 1.58 L 4.12 0.15 C 1.72 1.98 0.14 4.8 0 8 L 2 8 C 2.15 5.35 3.51 3.03 5.55 1.58 Z M 17.94 8 L 19.94 8 C 19.79 4.8 18.21 1.98 15.82 0.15 L 14.4 1.58 C 16.42 3.03 17.79 5.35 17.94 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.734,
    height: 19.500,
    viewBox: "0 0 19.734 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.133,
      top: 2.25,
      width: 19.734,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.871 13.5 L 15.871 8.5 C 15.871 5.43 14.231 2.86 11.371 2.18 L 11.371 1.5 C 11.371 0.67 10.691 0 9.861 0 C 9.031 0 8.371 0.67 8.371 1.5 L 8.371 2.18 C 5.501 2.86 3.871 5.42 3.871 8.5 L 3.871 13.5 L 2.571 14.79 C 1.941 15.42 2.381 16.5 3.271 16.5 L 16.441 16.5 C 17.331 16.5 17.781 15.42 17.151 14.79 L 15.871 13.5 Z M 9.861 19.5 C 10.961 19.5 11.861 18.6 11.861 17.5 L 7.861 17.5 C 7.861 18.6 8.751 19.5 9.861 19.5 Z M 4.641 2.23 C 5.061 1.85 5.071 1.2 4.671 0.8 C 4.291 0.42 3.671 0.41 3.281 0.78 C 1.571 2.34 0.391 4.46 0.011 6.84 C -0.079 7.45 0.391 8 1.011 8 C 1.491 8 1.911 7.65 1.991 7.17 C 2.291 5.23 3.251 3.5 4.641 2.23 Z M 16.471 0.78 C 16.071 0.41 15.451 0.42 15.071 0.8 C 14.671 1.2 14.691 1.84 15.101 2.22 C 16.481 3.49 17.451 5.22 17.751 7.16 C 17.821 7.64 18.241 7.99 18.731 7.99 C 19.341 7.99 19.821 7.44 19.721 6.83 C 19.341 4.46 18.171 2.35 16.471 0.78 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.940,
    height: 19.500,
    viewBox: "0 0 19.940 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.03,
      top: 2.25,
      width: 19.94,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.55 1.58 L 4.12 0.15 C 1.72 1.98 0.14 4.8 0 8 L 2 8 C 2.15 5.35 3.51 3.03 5.55 1.58 Z M 17.94 8 L 19.94 8 C 19.79 4.8 18.21 1.98 15.82 0.15 L 14.4 1.58 C 16.42 3.03 17.79 5.35 17.94 8 Z M 15.97 8.5 C 15.97 5.43 14.33 2.86 11.47 2.18 L 11.47 0 L 8.47 0 L 8.47 2.18 C 5.6 2.86 3.97 5.42 3.97 8.5 L 3.97 13.5 L 1.97 15.5 L 1.97 16.5 L 17.97 16.5 L 17.97 15.5 L 15.97 13.5 L 15.97 8.5 Z M 9.97 19.5 C 10.11 19.5 10.24 19.49 10.37 19.46 C 11.02 19.32 11.55 18.88 11.81 18.28 C 11.91 18.04 11.96 17.78 11.96 17.5 L 7.96 17.5 C 7.97 18.6 8.86 19.5 9.97 19.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 10.500,
    viewBox: "0 0 8 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 6.5,
      width: 8,
      height: 10.5,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 0 C 1.51 0 0 2.02 0 4.5 L 0 10.5 L 8 10.5 L 8 4.5 C 8 2.02 6.49 0 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.940,
    height: 19.500,
    viewBox: "0 0 19.940 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.03,
      top: 2.5,
      width: 19.94,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.97 19.5 C 11.07 19.5 11.97 18.6 11.97 17.5 L 7.97 17.5 C 7.97 18.6 8.87 19.5 9.97 19.5 Z M 15.97 8.5 C 15.97 5.43 14.34 2.86 11.47 2.18 L 11.47 1.5 C 11.47 0.67 10.8 0 9.97 0 C 9.14 0 8.47 0.67 8.47 1.5 L 8.47 2.18 C 5.61 2.86 3.97 5.42 3.97 8.5 L 3.97 13.5 L 1.97 15.5 L 1.97 16.5 L 17.97 16.5 L 17.97 15.5 L 15.97 13.5 L 15.97 8.5 Z M 13.97 14.5 L 5.97 14.5 L 5.97 8.5 C 5.97 6.02 7.48 4 9.97 4 C 12.46 4 13.97 6.02 13.97 8.5 L 13.97 14.5 Z M 5.55 1.58 L 4.12 0.15 C 1.72 1.98 0.14 4.8 0 8 L 2 8 C 2.15 5.35 3.51 3.03 5.55 1.58 L 5.55 1.58 Z M 17.94 8 L 19.94 8 C 19.79 4.8 18.21 1.98 15.82 0.15 L 14.4 1.58 C 16.42 3.03 17.79 5.35 17.94 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body2,
    // figma: Style=Sharp
    "style2=sharp": __body3,
    // figma: Style=Two Tone
    "style2=two tone": __body4
  };
  return (__impls[__vkey_NotificationsActive(props)] ?? __body0)();
}

// figma node: 1536:46725 Radio Button/No
function RadioButtonNo(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 1536:46723 Radio Button/Yes
function RadioButtonYes(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(62,102,251)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 5 C 7.24 5 5 7.24 5 10 C 5 12.76 7.24 15 10 15 C 12.76 15 15 12.76 15 10 C 15 7.24 12.76 5 10 5 Z M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 1063:54013 remove_red_eye (5 variants)
const __venc_RemoveRedEye = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_RemoveRedEye = p => "style2=" + __venc_RemoveRedEye(p.style2);
function RemoveRedEye(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 15,
    viewBox: "0 0 22 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 4.5,
      width: 22,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11 0 C 6 0 1.73 3.11 0 7.5 C 1.73 11.89 6 15 11 15 C 16 15 20.27 11.89 22 7.5 C 20.27 3.11 16 0 11 0 Z M 11 12.5 C 8.24 12.5 6 10.26 6 7.5 C 6 4.74 8.24 2.5 11 2.5 C 13.76 2.5 16 4.74 16 7.5 C 16 10.26 13.76 12.5 11 12.5 Z M 11 4.5 C 9.34 4.5 8 5.84 8 7.5 C 8 9.16 9.34 10.5 11 10.5 C 12.66 10.5 14 9.16 14 7.5 C 14 5.84 12.66 4.5 11 4.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 15,
    viewBox: "0 0 22 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 4.5,
      width: 22,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11 2 C 14.79 2 18.17 4.13 19.82 7.5 C 18.17 10.87 14.8 13 11 13 C 7.2 13 3.83 10.87 2.18 7.5 C 3.83 4.13 7.21 2 11 2 Z M 11 0 C 6 0 1.73 3.11 0 7.5 C 1.73 11.89 6 15 11 15 C 16 15 20.27 11.89 22 7.5 C 20.27 3.11 16 0 11 0 Z M 11 5 C 12.38 5 13.5 6.12 13.5 7.5 C 13.5 8.88 12.38 10 11 10 C 9.62 10 8.5 8.88 8.5 7.5 C 8.5 6.12 9.62 5 11 5 Z M 11 3 C 8.52 3 6.5 5.02 6.5 7.5 C 6.5 9.98 8.52 12 11 12 C 13.48 12 15.5 9.98 15.5 7.5 C 15.5 5.02 13.48 3 11 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.640,
    height: 11,
    viewBox: "0 0 17.640 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.18,
      top: 6.5,
      width: 17.64,
      height: 11,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.82 0 C 5.03 0 1.65 2.13 0 5.5 C 1.65 8.87 5.02 11 8.82 11 C 12.62 11 15.99 8.87 17.64 5.5 C 15.99 2.13 12.61 0 8.82 0 Z M 8.82 10 C 6.34 10 4.32 7.98 4.32 5.5 C 4.32 3.02 6.34 1 8.82 1 C 11.3 1 13.32 3.02 13.32 5.5 C 13.32 7.98 11.3 10 8.82 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 15,
    viewBox: "0 0 22 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 4.5,
      width: 22,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11 0 C 6 0 1.73 3.11 0 7.5 C 1.73 11.89 6 15 11 15 C 16 15 20.27 11.89 22 7.5 C 20.27 3.11 16 0 11 0 Z M 11 13 C 7.21 13 3.83 10.87 2.18 7.5 C 3.83 4.13 7.21 2 11 2 C 14.79 2 18.17 4.13 19.82 7.5 C 18.17 10.87 14.79 13 11 13 Z M 11 3 C 8.52 3 6.5 5.02 6.5 7.5 C 6.5 9.98 8.52 12 11 12 C 13.48 12 15.5 9.98 15.5 7.5 C 15.5 5.02 13.48 3 11 3 Z M 11 10 C 9.62 10 8.5 8.88 8.5 7.5 C 8.5 6.12 9.62 5 11 5 C 12.38 5 13.5 6.12 13.5 7.5 C 13.5 8.88 12.38 10 11 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body0,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_RemoveRedEye(props)] ?? __body0)();
}

// figma node: 801:26858 search (5 variants)
const __venc_Search = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Search = p => "style2=" + __venc_Search(p.style2);
function Search(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.490,
    height: 17.490,
    viewBox: "0 0 17.490 17.490",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.255,
      top: 3.255,
      width: 17.49,
      height: 17.49
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.5 11 L 11.71 11 L 11.43 10.73 C 12.41 9.59 13 8.11 13 6.5 C 13 2.91 10.09 0 6.5 0 C 2.91 0 0 2.91 0 6.5 C 0 10.09 2.91 13 6.5 13 C 8.11 13 9.59 12.41 10.73 11.43 L 11 11.71 L 11 12.5 L 16 17.49 L 17.49 16 L 12.5 11 Z M 6.5 11 C 4.01 11 2 8.99 2 6.5 C 2 4.01 4.01 2 6.5 2 C 8.99 2 11 4.01 11 6.5 C 11 8.99 8.99 11 6.5 11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.048,
    height: 17.058,
    viewBox: "0 0 17.048 17.058",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.476,
      top: 3.471,
      width: 17.048,
      height: 17.058
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.501 11.001 L 11.711 11.001 L 11.431 10.731 C 12.631 9.331 13.251 7.421 12.911 5.391 C 12.441 2.611 10.121 0.391 7.321 0.051 C 3.091 -0.469 -0.469 3.091 0.051 7.321 C 0.391 10.121 2.611 12.441 5.391 12.911 C 7.421 13.251 9.331 12.631 10.731 11.431 L 11.001 11.711 L 11.001 12.501 L 15.251 16.751 C 15.661 17.161 16.331 17.161 16.741 16.751 C 17.151 16.341 17.151 15.671 16.741 15.261 L 12.501 11.001 Z M 6.501 11.001 C 4.011 11.001 2.001 8.991 2.001 6.501 C 2.001 4.011 4.011 2.001 6.501 2.001 C 8.991 2.001 11.001 4.011 11.001 6.501 C 11.001 8.991 8.991 11.001 6.501 11.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.490,
    height: 17.490,
    viewBox: "0 0 17.490 17.490",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 17.49,
      height: 17.49
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.5 11 L 11.71 11 L 11.43 10.73 C 12.41 9.59 13 8.11 13 6.5 C 13 2.91 10.09 0 6.5 0 C 2.91 0 0 2.91 0 6.5 C 0 10.09 2.91 13 6.5 13 C 8.11 13 9.59 12.41 10.73 11.43 L 11 11.71 L 11 12.5 L 16 17.49 L 17.49 16 L 12.5 11 L 12.5 11 Z M 6.5 11 C 4.01 11 2 8.99 2 6.5 C 2 4.01 4.01 2 6.5 2 C 8.99 2 11 4.01 11 6.5 C 11 8.99 8.99 11 6.5 11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body1,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body2
  };
  return (__impls[__vkey_Search(props)] ?? __body0)();
}

// figma node: 799:26551 textsms (5 variants)
const __venc_Textsms = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Textsms = p => "style2=" + __venc_Textsms(p.style2);
function Textsms(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 0 L 2 0 C 0.9 0 0.01 0.9 0.01 2 L 0 20 L 4 16 L 18 16 C 19.1 16 20 15.1 20 14 L 20 2 C 20 0.9 19.1 0 18 0 Z M 7 9 L 5 9 L 5 7 L 7 7 L 7 9 Z M 11 9 L 9 9 L 9 7 L 11 7 L 11 9 Z M 15 9 L 13 9 L 13 7 L 15 7 L 15 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 20 L 4 16 L 18 16 C 19.1 16 20 15.1 20 14 L 20 2 C 20 0.9 19.1 0 18 0 Z M 18 14 L 4 14 L 2 16 L 2 2 L 18 2 L 18 14 Z M 5 7 L 7 7 L 7 9 L 5 9 L 5 7 Z M 9 7 L 11 7 L 11 9 L 9 9 L 9 7 Z M 13 7 L 15 7 L 15 9 L 13 9 L 13 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20 0 L 0.01 0 L 0 20 L 4 16 L 20 16 L 20 0 Z M 7 9 L 5 9 L 5 7 L 7 7 L 7 9 Z M 11 9 L 9 9 L 9 7 L 11 7 L 11 9 Z M 15 9 L 13 9 L 13 7 L 15 7 L 15 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 14,
    viewBox: "0 0 16 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 14,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14 L 2 12 L 16 12 L 16 0 L 0 0 L 0 14 Z M 11 5 L 13 5 L 13 7 L 11 7 L 11 5 Z M 7 5 L 9 5 L 9 7 L 7 7 L 7 5 Z M 3 5 L 5 5 L 5 7 L 3 7 L 3 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 20 L 4 16 L 18 16 C 19.1 16 20 15.1 20 14 L 20 2 C 20 0.9 19.1 0 18 0 Z M 18 14 L 4 14 L 2 16 L 2 2 L 18 2 L 18 14 Z M 5 7 L 7 7 L 7 9 L 5 9 L 5 7 Z M 9 7 L 11 7 L 11 9 L 9 9 L 9 7 Z M 13 7 L 15 7 L 15 9 L 13 9 L 13 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body1,
    // figma: Style=Round
    "style2=round": __body0,
    // figma: Style=Sharp
    "style2=sharp": __body2,
    // figma: Style=Two Tone
    "style2=two tone": __body3
  };
  return (__impls[__vkey_Textsms(props)] ?? __body0)();
}

// figma node: 1657:45997 icon other (44 variants)
const __venc_IconOther = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconOther = p => "property1=" + __venc_IconOther(p.property1);
function IconOther(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "component 1"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.125,
      top: 1.125,
      width: 21.75,
      height: 21.75,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21.75,
      height: 21.75,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.250,
    height: 0.750,
    viewBox: "0 0 2.250 0.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 9,
      width: 2.25,
      height: 0.75,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2.25 0 L 2.25 0.75 L 0 0.75 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.136,
    height: 6.750,
    viewBox: "0 0 5.136 6.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 10.5,
      width: 5.136,
      height: 6.75,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.136 0 L 2.22 0 C 2.055 1.147 1.147 2.055 0 2.22 L 0 4.53 C 1.147 4.695 2.055 5.603 2.22 6.75 L 2.999 6.75 L 3 4.5 C 3 4.162 3.153 3.862 3.389 3.656 C 3.382 3.563 3.375 3.47 3.375 3.375 C 3.375 1.98 4.073 0.747 5.136 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.250,
    height: 0.750,
    viewBox: "0 0 5.250 0.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 21,
      width: 5.25,
      height: 0.75,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.25 0 L 5.25 0.75 L 0 0.75 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.250,
    height: 2.250,
    viewBox: "0 0 2.250 2.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 6,
      width: 2.25,
      height: 2.25,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2.25 0 L 2.25 2.25 L 0 2.25 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.750,
    height: 6.750,
    viewBox: "0 0 6.750 6.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.125,
      top: 10.5,
      width: 6.75,
      height: 6.75
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.875 5.25 C 1.875 4.216 1.034 3.375 0 3.375 C 0 1.514 1.514 0 3.375 0 C 5.236 0 6.75 1.514 6.75 3.375 C 6.75 5.236 5.236 6.75 3.375 6.75 L 2.83 6.75 C 2.641 6.32 2.307 5.963 1.875 5.75 L 1.875 5.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.250,
    height: 0.750,
    viewBox: "0 0 2.250 0.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 9,
      width: 2.25,
      height: 0.75,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2.25 0 L 2.25 0.75 L 0 0.75 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.250,
    height: 2.250,
    viewBox: "0 0 2.250 2.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 2.25,
      height: 2.25,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2.25 0 L 2.25 2.25 L 0 2.25 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.500,
    height: 2.250,
    viewBox: "0 0 1.500 2.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.25,
      top: 0,
      width: 1.5,
      height: 2.25,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.375 2.25 L 1.125 2.25 C 1.332 2.25 1.5 2.082 1.5 1.875 L 1.5 0.375 C 1.5 0.168 1.332 0 1.125 0 L 0.375 0 C 0.168 0 0 0.168 0 0.375 L 0 1.875 C 0 2.082 0.168 2.25 0.375 2.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.500,
    height: 2.250,
    viewBox: "0 0 1.500 2.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 0,
      width: 1.5,
      height: 2.25,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.375 2.25 L 1.125 2.25 C 1.332 2.25 1.5 2.082 1.5 1.875 L 1.5 0.375 C 1.5 0.168 1.332 0 1.125 0 L 0.375 0 C 0.168 0 0 0.168 0 0.375 L 0 1.875 C 0 2.082 0.168 2.25 0.375 2.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.500,
    height: 2.250,
    viewBox: "0 0 1.500 2.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.5,
      top: 0,
      width: 1.5,
      height: 2.25,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.375 2.25 L 1.125 2.25 C 1.332 2.25 1.5 2.082 1.5 1.875 L 1.5 0.375 C 1.5 0.168 1.332 0 1.125 0 L 0.375 0 C 0.168 0 0 0.168 0 0.375 L 0 1.875 C 0 2.082 0.168 2.25 0.375 2.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.500,
    height: 2.250,
    viewBox: "0 0 1.500 2.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.75,
      top: 0,
      width: 1.5,
      height: 2.25,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.375 2.25 L 1.125 2.25 C 1.332 2.25 1.5 2.082 1.5 1.875 L 1.5 0.375 C 1.5 0.168 1.332 0 1.125 0 L 0.375 0 C 0.168 0 0 0.168 0 0.375 L 0 1.875 C 0 2.082 0.168 2.25 0.375 2.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.462,
    height: 1.462,
    viewBox: "0 0 1.462 1.462",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 10.5,
      width: 1.462,
      height: 1.462,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.462 0 L 0 0 L 0 1.462 C 0.734 1.312 1.313 0.734 1.462 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.462,
    height: 1.462,
    viewBox: "0 0 1.462 1.462",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 15.788,
      width: 1.462,
      height: 1.462,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 1.462 L 1.462 1.462 C 1.313 0.729 0.734 0.15 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.500,
    height: 4.500,
    viewBox: "0 0 4.500 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.25,
      top: 9,
      width: 4.5,
      height: 4.5,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.25 C 0 3.491 1.009 4.5 2.25 4.5 C 3.491 4.5 4.5 3.491 4.5 2.25 C 4.5 1.009 3.491 0 2.25 0 C 1.009 0 0 1.009 0 2.25 Z M 1.39 1.985 L 1.875 2.47 L 3.109 1.235 L 3.64 1.765 L 1.875 3.53 L 0.86 2.515 L 1.39 1.985 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.250,
    height: 2.250,
    viewBox: "0 0 2.250 2.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 6,
      width: 2.25,
      height: 2.25,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2.25 0 L 2.25 2.25 L 0 2.25 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.500,
    height: 0.849,
    viewBox: "0 0 1.500 0.849",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.75,
      top: 14.151,
      width: 1.5,
      height: 0.849,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.849 L 1.5 0.849 L 1.5 0 C 1.26 0.062 1.01 0.099 0.75 0.099 C 0.491 0.099 0.24 0.062 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.250,
    height: 2.250,
    viewBox: "0 0 2.250 2.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 6,
      width: 2.25,
      height: 2.25,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2.25 0 L 2.25 2.25 L 0 2.25 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.250,
    height: 6,
    viewBox: "0 0 2.250 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 9,
      width: 2.25,
      height: 6,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.5 2.25 C 1.5 3.357 0.895 4.324 0 4.844 L 0 6 L 2.25 6 L 2.25 0 L 0.478 0 C 1.103 0.55 1.5 1.354 1.5 2.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.250,
    height: 2.250,
    viewBox: "0 0 17.250 2.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 1.5,
      width: 17.25,
      height: 2.25,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.875 0 L 15.75 0 L 15.75 0.375 C 15.75 0.995 15.245 1.5 14.625 1.5 L 13.875 1.5 C 13.255 1.5 12.75 0.995 12.75 0.375 L 12.75 0 L 12 0 L 12 0.375 C 12 0.995 11.495 1.5 10.875 1.5 L 10.125 1.5 C 9.505 1.5 9 0.995 9 0.375 L 9 0 L 8.25 0 L 8.25 0.375 C 8.25 0.995 7.745 1.5 7.125 1.5 L 6.375 1.5 C 5.755 1.5 5.25 0.995 5.25 0.375 L 5.25 0 L 4.5 0 L 4.5 0.375 C 4.5 0.995 3.995 1.5 3.375 1.5 L 2.625 1.5 C 2.005 1.5 1.5 0.995 1.5 0.375 L 1.5 0 L 0.375 0 C 0.168 0 0 0.168 0 0.375 L 0 2.25 L 17.25 2.25 L 17.25 0.375 C 17.25 0.168 17.082 0 16.875 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.250,
    height: 12,
    viewBox: "0 0 17.250 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 4.5,
      width: 17.25,
      height: 12,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.25 L 0.75 5.25 L 0.75 0.75 L 16.5 0.75 L 16.5 11.25 L 11.25 11.25 L 11.25 12 L 16.875 12 C 17.082 12 17.25 11.832 17.25 11.625 L 17.25 0 L 0 0 L 0 5.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.250,
    height: 2.250,
    viewBox: "0 0 2.250 2.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 12,
      top: 6,
      width: 2.25,
      height: 2.25,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2.25 0 L 2.25 2.25 L 0 2.25 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.136,
    height: 6.750,
    viewBox: "0 0 5.136 6.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.864,
      top: 10.5,
      width: 5.136,
      height: 6.75,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.636 0.75 C 3.636 0.491 3.672 0.24 3.735 0 L 0 0 C 1.063 0.747 1.761 1.98 1.761 3.375 C 1.761 4.77 1.063 6.003 0 6.75 L 2.916 6.75 C 3.081 5.603 3.989 4.695 5.136 4.53 L 5.136 3.344 C 4.241 2.824 3.636 1.857 3.636 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 5.875,
      top: 12.875,
      width: 5,
      height: 3,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 900,
      fontSize: 2,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)"
    }
  }, props.text1 ?? "VND"), /*#__PURE__*/React.createElement("svg", {
    width: 2.522,
    height: 0.750,
    viewBox: "0 0 2.522 0.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 12,
      top: 9,
      width: 2.522,
      height: 0.75,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.75 L 1.906 0.75 C 2.07 0.468 2.279 0.215 2.522 0 L 0 0 L 0 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.462,
    height: 1.462,
    viewBox: "0 0 1.462 1.462",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.538,
      top: 15.788,
      width: 1.462,
      height: 1.462,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.462 L 1.462 1.462 L 1.462 0 C 0.729 0.15 0.15 0.729 0 1.462 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.747,
    height: 5.625,
    viewBox: "0 0 6.747 5.625",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.748,
      top: 14.625,
      width: 6.747,
      height: 5.625,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.625 3.371 C 2.599 2.85 2.258 2.397 1.758 2.231 L 1.502 2.145 L 1.502 1.125 C 1.502 0.505 0.997 0 0.377 0 C 0.17 0 0.002 0.168 0.002 0.375 L 0 3.336 C 0 3.76 0.146 4.175 0.411 4.506 L 1.305 5.625 L 5.445 5.625 L 6.339 4.507 C 6.596 4.187 6.738 3.786 6.747 3.375 C 6.747 3.375 2.627 3.393 2.625 3.371 L 2.625 3.371 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckCircle, {
    style2: "outlined"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(160,163,189)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 9,
      top: 2,
      width: 6,
      height: 20,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "rgb(160,163,189)"
    }
  }, props.text1 ?? "1")));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(160,163,189)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 2,
      width: 8,
      height: 20,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "rgb(160,163,189)"
    }
  }, props.text1 ?? "2"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(160,163,189)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 2,
      width: 8,
      height: 20,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "rgb(160,163,189)"
    }
  }, props.text1 ?? "3"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(160,163,189)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 2,
      width: 9,
      height: 20,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "rgb(160,163,189)"
    }
  }, props.text1 ?? "4"));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HighlightOff, {
    style2: "outlined"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowForward, {
    style2: "outlined"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Textsms, {
    style2: "outlined"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconOther, {
    icon1: /*#__PURE__*/React.createElement(Textsms, {
      style2: "filled",
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    property1: "messenger_none"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Textsms, {
    style2: "outlined"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15,
      top: -19,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4,
      borderRadius: 4,
      backgroundColor: "rgb(237,46,126)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4px 0px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "12"))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 11,
      width: 20,
      height: 2,
      borderRadius: 11,
      backgroundColor: "rgb(20,20,43)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 5,
      width: 10,
      height: 2,
      borderRadius: 11,
      backgroundColor: "rgb(20,20,43)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 17,
      width: 14,
      height: 2,
      borderRadius: 11,
      backgroundColor: "rgb(20,20,43)"
    }
  }));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Notifications, {
    style2: "outlined"
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Notifications2, {
    style2: "outlined"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconOther, {
    icon1: /*#__PURE__*/React.createElement(Notifications, {
      style2: "filled",
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    property1: "notifications_none"
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 34,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(NotificationsActive, {
    style2: "outlined"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15,
      top: -15,
      width: 19,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      borderRadius: 4,
      backgroundColor: "rgb(196,196,196)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4px 0px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "0.500px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text1 ?? "12"))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Search, {
    style2: "outlined"
  })));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 9,
      top: 2,
      width: 6,
      height: 21,
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "0.250px",
      color: "rgb(110,113,145)"
    }
  }, props.text1 ?? "/"));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Home, {
    style2: "outlined"
  })));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CalendarToday, {
    style2: "outlined",
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Add, {
    style2: "outlined"
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 0.25,
      width: 12,
      height: 23,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 23,
    viewBox: "0 0 12 23",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 23
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.366 5.236 L 12 5.236 L 12 17.226 C 12 18.824 11.413 20.186 10.238 21.312 C 9.064 22.437 7.651 23 6 23 C 4.349 23 2.936 22.437 1.762 21.312 C 0.587 20.186 0 18.824 0 17.226 L 0 4.209 C 0 3.034 0.426 2.039 1.277 1.223 C 2.128 0.408 3.157 0 4.366 0 C 5.574 0 6.604 0.408 7.455 1.223 C 8.306 2.039 8.732 3.034 8.732 4.209 L 8.732 15.17 C 8.732 15.888 8.46 16.5 7.915 17.005 C 7.37 17.511 6.723 17.764 5.974 17.764 C 5.226 17.764 4.587 17.511 4.06 17.005 C 3.532 16.5 3.268 15.888 3.268 15.17 L 3.268 5.236 L 4.902 5.236 L 4.902 15.17 C 4.902 15.431 5.013 15.668 5.234 15.88 C 5.455 16.092 5.711 16.198 6 16.198 C 6.289 16.198 6.545 16.092 6.766 15.88 C 6.987 15.668 7.098 15.431 7.098 15.17 L 7.098 4.209 C 7.098 3.491 6.826 2.871 6.281 2.349 C 5.736 1.827 5.089 1.566 4.34 1.566 C 3.591 1.566 2.953 1.827 2.426 2.349 C 1.898 2.871 1.634 3.491 1.634 4.209 L 1.634 17.226 C 1.634 18.4 2.06 19.395 2.911 20.211 C 3.762 21.026 4.791 21.434 6 21.434 C 7.209 21.434 8.238 21.026 9.089 20.211 C 9.94 19.395 10.366 18.4 10.366 17.226 L 10.366 5.236 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 0,
      width: 18,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 24,
    viewBox: "0 0 18 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 24,
      color: "rgb(239,83,80)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.44 C 0 0.645 0.645 0 1.44 0 L 12 0 L 18 5.04 L 18 22.56 C 18 23.355 17.355 24 16.56 24 L 1.44 24 C 0.645 24 0 23.355 0 22.56 L 0 1.44 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 5,
    viewBox: "0 0 6 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 12,
      top: 0,
      width: 6,
      height: 5,
      color: "rgb(211,47,47)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 3.571 C 0 4.36 0.645 5 1.44 5 L 6 5",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.106,
      top: 12,
      width: 11,
      height: 4.343,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.353,
    height: 4.343,
    viewBox: "0 0 3.353 4.343",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.353,
      height: 4.343,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.566 2.901 L 1.079 2.901 L 1.079 4.343 L 0 4.343 L 0 0 L 1.423 0 C 2.651 0 3.353 0.464 3.353 1.416 C 3.353 2.438 2.632 2.901 1.566 2.901 Z M 1.436 0.739 L 1.079 0.739 L 1.079 2.149 L 1.475 2.149 C 1.962 2.149 2.242 1.923 2.242 1.416 C 2.242 0.959 1.975 0.739 1.436 0.739 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.405,
    height: 4.343,
    viewBox: "0 0 3.405 4.343",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.833,
      top: 0,
      width: 3.405,
      height: 4.343,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.222 4.343 L 0 4.343 L 0 0 L 1.144 0 C 2.301 0 3.405 0.357 3.405 2.15 C 3.405 3.916 2.346 4.343 1.222 4.343 Z M 1.299 0.752 L 1.079 0.752 L 1.079 3.591 L 1.299 3.591 C 1.891 3.591 2.287 3.284 2.287 2.149 C 2.288 0.99 1.865 0.752 1.299 0.752 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.970,
    height: 4.343,
    viewBox: "0 0 2.970 4.343",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.03,
      top: 0,
      width: 2.97,
      height: 4.343,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.085 0.739 L 1.085 1.88 L 2.658 1.88 L 2.658 2.626 L 1.085 2.626 L 1.085 4.343 L 0 4.343 L 0 0 L 2.97 0 L 2.859 0.739 L 1.085 0.739 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.026,
      top: 0,
      width: 17.947,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 17.947,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.947,
    height: 24,
    viewBox: "0 0 17.947 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 17.947,
      height: 24,
      color: "rgb(0,115,59)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.118 0 L 11.15 0 L 17.947 7.095 L 17.947 20.873 C 17.947 22.599 16.555 24 14.829 24 L 3.118 24 C 1.401 24 0 22.599 0 20.873 L 0 3.118 C 0 1.401 1.401 0 3.118 0 L 3.118 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.53,
      top: 0,
      width: 14.418,
      height: 16.458,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.806,
    height: 7.034,
    viewBox: "0 0 6.806 7.034",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.612,
      top: 0,
      width: 6.806,
      height: 7.034,
      opacity: 0.302,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 7.034 L 6.806 7.034 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.896,
    height: 4.458,
    viewBox: "0 0 10.896 4.458",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 12,
      width: 10.896,
      height: 4.458,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.933 4.406 L 2.768 4.406 L 1.971 3.066 L 1.174 4.406 L 0 4.406 L 1.384 2.076 L 0.166 0.053 L 1.34 0.053 L 1.971 1.104 L 2.593 0.053 L 3.766 0.053 L 2.558 2.085 L 3.933 4.406 Z M 4.345 4.406 L 4.345 0.053 L 5.457 0.053 L 5.457 3.46 L 7.349 3.46 L 7.349 4.406 L 4.345 4.406 L 4.345 4.406 Z M 9.188 4.458 C 8.75 4.458 8.365 4.318 8.032 4.047 C 7.708 3.784 7.524 3.451 7.498 3.057 L 8.453 2.777 C 8.479 2.987 8.566 3.171 8.715 3.311 C 8.873 3.451 9.048 3.521 9.241 3.521 C 9.399 3.521 9.53 3.486 9.635 3.416 C 9.731 3.346 9.784 3.25 9.784 3.136 C 9.784 3.039 9.74 2.961 9.661 2.891 C 9.582 2.829 9.477 2.777 9.355 2.733 C 9.232 2.689 9.083 2.645 8.934 2.61 C 8.777 2.566 8.619 2.514 8.47 2.444 C 8.312 2.382 8.172 2.304 8.05 2.207 C 7.918 2.12 7.822 1.988 7.743 1.822 C 7.664 1.664 7.62 1.472 7.62 1.253 C 7.62 0.893 7.769 0.596 8.076 0.359 C 8.382 0.114 8.75 0 9.179 0 C 9.609 0 9.985 0.105 10.301 0.307 C 10.616 0.517 10.817 0.788 10.896 1.121 L 9.898 1.542 C 9.854 1.358 9.766 1.209 9.644 1.095 C 9.521 0.99 9.363 0.928 9.179 0.928 C 9.039 0.928 8.934 0.964 8.847 1.016 C 8.768 1.069 8.733 1.147 8.733 1.244 C 8.733 1.331 8.785 1.41 8.89 1.472 C 8.996 1.524 9.136 1.568 9.293 1.594 C 9.451 1.62 9.626 1.664 9.81 1.726 C 10.003 1.796 10.169 1.866 10.336 1.962 C 10.493 2.05 10.625 2.199 10.73 2.391 C 10.844 2.593 10.896 2.829 10.896 3.101 C 10.896 3.504 10.739 3.837 10.423 4.082 C 10.108 4.327 9.696 4.458 9.188 4.458 L 9.188 4.458 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 24,
    viewBox: "0 0 18 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 0,
      width: 18,
      height: 24,
      color: "rgb(41,121,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.44 C 0 0.645 0.645 0 1.44 0 L 12 0 L 18 5.04 L 18 22.56 C 18 23.355 17.355 24 16.56 24 L 1.44 24 C 0.645 24 0 23.355 0 22.56 L 0 1.44 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 5.040,
    viewBox: "0 0 6 5.040",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 6,
      height: 5.04,
      color: "rgb(41,98,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 3.6 C 0 4.395 0.645 5.04 1.44 5.04 L 6 5.04",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 12,
      width: 11,
      height: 4.606,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.315,
    height: 4.384,
    viewBox: "0 0 3.315 4.384",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.114,
      width: 3.315,
      height: 4.384,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.189 4.384 L 0 4.384 L 0 0 L 1.113 0 C 2.24 0 3.315 0.361 3.315 2.17 C 3.315 3.953 2.284 4.384 1.189 4.384 Z M 1.265 0.759 L 1.05 0.759 L 1.05 3.625 L 1.265 3.625 C 1.841 3.625 2.227 3.315 2.227 2.17 C 2.227 1 1.816 0.759 1.265 0.759 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.518,
    height: 4.605,
    viewBox: "0 0 3.518 4.605",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.611,
      top: 0.001,
      width: 3.518,
      height: 4.605,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.759 4.605 C 0.608 4.605 0 3.726 0 2.303 C 0 0.911 0.608 0 1.759 0 C 2.91 0 3.518 0.879 3.518 2.303 C 3.518 3.694 2.91 4.605 1.759 4.605 Z M 1.759 0.765 C 1.272 0.765 1.076 1.227 1.076 2.303 C 1.076 3.377 1.278 3.84 1.759 3.84 C 2.259 3.84 2.442 3.365 2.442 2.303 C 2.442 1.227 2.246 0.765 1.759 0.765 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.524,
    height: 4.606,
    viewBox: "0 0 3.524 4.606",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.476,
      top: 0,
      width: 3.524,
      height: 4.606,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.954 1.095 C 2.714 0.899 2.461 0.778 2.126 0.778 C 1.525 0.778 1.095 1.228 1.095 2.297 C 1.095 3.347 1.5 3.796 2.101 3.796 C 2.531 3.796 2.803 3.619 3.05 3.429 L 3.524 4.036 C 3.201 4.346 2.727 4.606 2.031 4.606 C 0.823 4.606 0 3.802 0 2.297 C 0 0.829 0.879 0 2.05 0 C 2.682 0 3.1 0.19 3.466 0.487 L 2.954 1.095 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(AddCircleOutline, {
    style2: "outlined"
  })));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckBox, {
    style2: "outlined"
  })));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      color: "rgb(160,163,189)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckBoxOutlineBlank, {
    style2: "outlined"
  })));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Delete, {
    style2: "outlined"
  })));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(BorderColor, {
    style2: "outlined"
  })));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RemoveRedEye, {
    style2: "outlined"
  })));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Check, {
    style2: "outlined"
  })));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 32,
      backgroundColor: "rgb(20,30,210)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1.5,
      top: -1,
      width: 27,
      height: 26,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px rgb(217,219,233)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1.5,
      top: -1,
      width: 27,
      height: 26,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px rgb(20,30,210)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8.5,
      top: 1,
      width: 8,
      height: 20,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "rgb(255,255,255)"
    }
  }, props.text1 ?? "2"));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 32,
      backgroundColor: "rgb(20,30,210)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1.5,
      top: -1,
      width: 27,
      height: 26,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px rgb(217,219,233)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1.5,
      top: -1,
      width: 27,
      height: 26,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px rgb(20,30,210)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8.5,
      top: 1,
      width: 8,
      height: 20,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "rgb(255,255,255)"
    }
  }, props.text1 ?? "3"));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 32,
      backgroundColor: "rgb(20,30,210)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1.5,
      top: -1,
      width: 27,
      height: 26,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px rgb(217,219,233)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1.5,
      top: -1,
      width: 27,
      height: 26,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px rgb(20,30,210)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8.5,
      top: 1,
      width: 9,
      height: 20,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      color: "rgb(255,255,255)"
    }
  }, props.text1 ?? "4"));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RadioButtonYes, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -3,
      top: 0,
      width: 24,
      height: 24,
      color: "rgb(160,163,189)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(RadioButtonNo, null)));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 4,
    viewBox: "0 0 8 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,14,8)",
      transformOrigin: "0 0",
      width: 8,
      height: 4,
      color: "rgb(44,62,80)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.53 0.53 C 8.823 0.237 8.823 -0.237 8.53 -0.53 C 8.237 -0.823 7.763 -0.823 7.47 -0.53 L 8.53 0.53 Z M 4 4 L 3.47 4.53 C 3.763 4.823 4.237 4.823 4.53 4.53 L 4 4 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 7.47 -0.53 L 3.47 3.47 L 4.53 4.53 L 8.53 0.53 L 7.47 -0.53 Z M 4.53 3.47 L 0.53 -0.53 L -0.53 0.53 L 3.47 4.53 L 4.53 3.47 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 4,
    viewBox: "0 0 8 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,10,16)",
      transformOrigin: "0 0",
      width: 8,
      height: 4,
      color: "rgb(20,20,43)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.53 0.53 C 8.823 0.237 8.823 -0.237 8.53 -0.53 C 8.237 -0.823 7.763 -0.823 7.47 -0.53 L 8.53 0.53 Z M 4 4 L 3.47 4.53 C 3.763 4.823 4.237 4.823 4.53 4.53 L 4 4 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 7.47 -0.53 L 3.47 3.47 L 4.53 4.53 L 8.53 0.53 L 7.47 -0.53 Z M 4.53 3.47 L 0.53 -0.53 L -0.53 0.53 L 3.47 4.53 L 4.53 3.47 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(37,132,80)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.408 0.007 L 0.265 1.707 C 0.111 1.736 0 1.873 0 2.027 L 0 13.97 C 0 14.123 0.111 14.261 0.265 14.29 L 9.408 15.99 C 9.429 15.994 9.449 16 9.469 16 C 9.545 16 9.615 15.977 9.673 15.93 C 9.749 15.869 9.796 15.775 9.796 15.68 L 9.796 0.317 C 9.796 0.222 9.749 0.128 9.673 0.067 C 9.598 0.005 9.504 -0.011 9.408 0.007 Z M 10.449 1.917 L 10.449 4.157 L 11.102 4.157 L 11.102 4.798 L 10.449 4.798 L 10.449 6.398 L 11.102 6.398 L 11.102 7.038 L 10.449 7.038 L 10.449 8.638 L 11.102 8.638 L 11.102 9.279 L 10.449 9.279 L 10.449 11.199 L 11.102 11.199 L 11.102 11.839 L 10.449 11.839 L 10.449 14.08 L 15.347 14.08 C 15.707 14.08 16 13.792 16 13.439 L 16 2.557 C 16 2.205 15.707 1.917 15.347 1.917 L 10.449 1.917 Z M 11.755 4.157 L 14.367 4.157 L 14.367 4.798 L 11.755 4.798 L 11.755 4.157 Z M 2.184 5.018 L 3.857 5.018 L 4.735 6.808 C 4.804 6.949 4.865 7.123 4.918 7.318 L 4.929 7.318 C 4.963 7.202 5.029 7.019 5.122 6.788 L 6.092 5.018 L 7.622 5.018 L 5.796 7.978 L 7.673 10.999 L 6.051 10.999 L 4.99 9.049 C 4.95 8.976 4.909 8.842 4.867 8.648 L 4.857 8.648 C 4.837 8.74 4.788 8.882 4.714 9.069 L 3.653 10.999 L 2.02 10.999 L 3.969 8.008 L 2.184 5.018 Z M 11.755 6.398 L 14.367 6.398 L 14.367 7.038 L 11.755 7.038 L 11.755 6.398 Z M 11.755 8.638 L 14.367 8.638 L 14.367 9.279 L 11.755 9.279 L 11.755 8.638 Z M 11.755 11.199 L 14.367 11.199 L 14.367 11.839 L 11.755 11.839 L 11.755 11.199 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(40,60,130)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.449 0.001 L 9.449 1.489 C 11.392 1.5 13.517 1.468 15.461 1.5 C 15.529 1.488 15.6 1.492 15.666 1.513 C 15.733 1.533 15.794 1.569 15.844 1.618 C 15.895 1.667 15.934 1.727 15.958 1.794 C 15.981 1.861 15.99 1.933 15.982 2.004 C 16.013 5.668 15.974 9.542 16 13.206 C 15.989 13.44 16.005 13.86 15.97 14.094 C 15.925 14.391 15.795 14.449 15.503 14.489 C 15.339 14.512 15.066 14.509 14.906 14.516 C 13.31 14.508 11.716 14.51 10.121 14.511 L 9.449 14.511 L 9.449 16 L 0 14.509 L 0 1.492 L 9.449 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 11.905,
    viewBox: "0 0 14 11.905",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.625,
      top: 2.047,
      width: 14,
      height: 11.905,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.984 0 L 14 0 L 14 11.905 L 7.984 11.905 L 7.984 10.417 L 12.722 10.417 L 12.722 9.673 L 7.984 9.673 L 7.984 8.743 L 12.722 8.743 L 12.722 7.999 L 7.984 7.999 L 7.984 7.069 L 12.722 7.069 L 12.722 6.325 L 7.984 6.325 L 7.984 5.395 L 12.722 5.395 L 12.722 4.65 L 7.984 4.65 L 7.984 3.72 L 12.722 3.72 L 12.722 2.976 L 7.984 2.976 L 7.984 2.046 L 12.722 2.046 L 12.722 1.302 L 7.984 1.302 L 7.984 0 Z M 2.276 3.287 C 2.62 3.267 2.969 3.252 3.315 3.233 C 3.557 4.489 3.805 5.743 4.068 6.993 C 4.273 5.702 4.501 4.415 4.722 3.126 C 5.086 3.112 5.45 3.093 5.813 3.067 C 5.402 4.87 5.041 6.687 4.591 8.479 C 4.287 8.641 3.831 8.471 3.47 8.498 C 3.228 7.266 2.945 6.042 2.728 4.805 C 2.515 6.011 2.238 7.199 1.994 8.394 C 1.644 8.375 1.293 8.353 0.94 8.329 C 0.638 6.691 0.282 5.066 0 3.425 C 0.312 3.411 0.625 3.397 0.937 3.386 C 1.125 4.571 1.338 5.75 1.502 6.937 C 1.758 5.72 2.021 4.504 2.276 3.287",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.001,
    height: 9,
    viewBox: "0 0 24.001 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 15,
      width: 24.001,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.554 0.38 C 23.062 -0.122 22.296 -0.089 21.779 0.38 L 17.929 3.844 C 17.458 4.27 16.871 4.5 16.262 4.5 L 11.333 4.5 C 10.967 4.5 10.667 4.162 10.667 3.75 C 10.667 3.338 10.967 3 11.333 3 L 14.596 3 C 15.258 3 15.875 2.489 15.983 1.753 C 16.121 0.816 15.479 0 14.667 0 L 8 0 C 6.875 0 5.787 0.436 4.912 1.233 L 2.975 3 L 0.667 3 C 0.3 3 0 3.338 0 3.75 L 0 8.25 C 0 8.663 0.3 9 0.667 9 L 15.533 9 C 16.137 9 16.725 8.77 17.2 8.344 L 23.5 2.672 C 24.133 2.105 24.183 1.017 23.554 0.38 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 0,
      width: 14,
      height: 14,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 3,
      width: 8,
      height: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.667,
    height: 2.667,
    viewBox: "0 0 2.667 2.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.667,
      top: 1.333,
      width: 2.667,
      height: 2.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.333 2.667 C 2.07 2.667 2.667 2.07 2.667 1.333 C 2.667 0.597 2.07 0 1.333 0 C 0.597 0 0 0.597 0 1.333 C 0 2.07 0.597 2.667 1.333 2.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.333,
    height: 2.667,
    viewBox: "0 0 5.333 2.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 4.333,
      width: 5.333,
      height: 2.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.333 2 L 5.333 2.333 C 5.333 2.422 5.298 2.507 5.236 2.569 C 5.173 2.632 5.088 2.667 5 2.667 L 0.333 2.667 C 0.245 2.667 0.16 2.632 0.098 2.569 C 0.035 2.507 0 2.422 0 2.333 L 0 2 C 0 1.47 0.211 0.961 0.586 0.586 C 0.961 0.211 1.47 0 2 0 L 3.333 0 C 3.864 0 4.372 0.211 4.748 0.586 C 5.123 0.961 5.333 1.47 5.333 2 L 5.333 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.168,
    height: 19.000,
    viewBox: "0 0 21.168 19.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.415,
      top: 2,
      width: 21.168,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.835 15.25 L 12.75 1.25 C 12.531 0.87 12.215 0.554 11.835 0.335 C 11.455 0.116 11.024 0 10.585 0 C 10.146 0 9.715 0.116 9.335 0.335 C 8.955 0.554 8.639 0.87 8.42 1.25 L 0.335 15.25 C 0.115 15.63 0 16.061 0 16.5 C 0 16.939 0.116 17.371 0.335 17.751 C 0.555 18.131 0.871 18.446 1.251 18.666 C 1.632 18.885 2.063 19 2.502 19 L 18.668 19 C 19.107 19 19.538 18.884 19.918 18.665 C 20.298 18.446 20.614 18.13 20.833 17.75 C 21.052 17.37 21.168 16.939 21.168 16.5 C 21.168 16.061 21.052 15.63 20.833 15.25 L 20.835 15.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.293,
    height: 8.500,
    viewBox: "0 0 3.293 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.355,
      top: 6.5,
      width: 3.293,
      height: 8.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.645 8.5 C 1.907 8.501 2.16 8.404 2.354 8.229 C 2.549 8.053 2.67 7.811 2.695 7.55 L 3.285 1.65 C 3.306 1.441 3.283 1.23 3.217 1.031 C 3.152 0.832 3.045 0.648 2.904 0.493 C 2.763 0.337 2.591 0.213 2.399 0.128 C 2.207 0.043 2 0 1.79 0 L 1.5 0 C 1.29 0 1.083 0.044 0.891 0.129 C 0.7 0.214 0.528 0.338 0.388 0.494 C 0.247 0.649 0.14 0.832 0.075 1.032 C 0.01 1.231 -0.013 1.441 0.008 1.65 L 0.598 7.55 C 0.622 7.81 0.744 8.052 0.937 8.228 C 1.131 8.403 1.383 8.501 1.645 8.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 3.500,
    viewBox: "0 0 3.500 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.25,
      top: 15.5,
      width: 3.5,
      height: 3.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.75 3.5 C 2.716 3.5 3.5 2.716 3.5 1.75 C 3.5 0.784 2.716 0 1.75 0 C 0.784 0 0 0.784 0 1.75 C 0 2.716 0.784 3.5 1.75 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Property 1=Salary
    "property1=salary": __body0,
    // figma: Property 1=check_circle
    "property1=check_circle": __body1,
    // figma: Property 1=circle_1
    "property1=circle_1": __body2,
    // figma: Property 1=circle_2
    "property1=circle_2": __body3,
    // figma: Property 1=circle_3
    "property1=circle_3": __body4,
    // figma: Property 1=circle_4
    "property1=circle_4": __body5,
    // figma: Property 1=close
    "property1=close": __body6,
    // figma: Property 1=arrow_right
    "property1=arrow_right": __body7,
    // figma: Property 1=messenger_none
    "property1=messenger_none": __body8,
    // figma: Property 1=messenger_active
    "property1=messenger_active": __body9,
    // figma: Property 1=messenger_on
    "property1=messenger_on": __body10,
    // figma: Property 1=Component 1
    "property1=component 1": __body11,
    // figma: Property 1=notifications_none
    "property1=notifications_none": __body12,
    // figma: Property 1=notifications_none_small
    "property1=notifications_none_small": __body13,
    // figma: Property 1=notifications_active
    "property1=notifications_active": __body14,
    // figma: Property 1=notifications_on
    "property1=notifications_on": __body15,
    // figma: Property 1=search
    "property1=search": __body16,
    // figma: Property 1=slash
    "property1=slash": __body17,
    // figma: Property 1=home
    "property1=home": __body18,
    // figma: Property 1=calendar_today
    "property1=calendar_today": __body19,
    // figma: Property 1=add
    "property1=add": __body20,
    // figma: Property 1=attachment-alt
    "property1=attachment-alt": __body21,
    // figma: Property 1=pdf
    "property1=pdf": __body22,
    // figma: Property 1=excel 2
    "property1=excel 2": __body23,
    // figma: Property 1=doc
    "property1=doc": __body24,
    // figma: Property 1=add_circle_outline
    "property1=add_circle_outline": __body25,
    // figma: Property 1=check_box
    "property1=check_box": __body26,
    // figma: Property 1=check_box_outline_blank
    "property1=check_box_outline_blank": __body27,
    // figma: Property 1=delete
    "property1=delete": __body28,
    // figma: Property 1=border_color
    "property1=border_color": __body29,
    // figma: Property 1=remove_red_eye
    "property1=remove_red_eye": __body30,
    // figma: Property 1=check
    "property1=check": __body31,
    // figma: Property 1=2
    "property1=2": __body32,
    // figma: Property 1=3
    "property1=3": __body33,
    // figma: Property 1=4
    "property1=4": __body34,
    // figma: Property 1=Component 2
    "property1=component 2": __body35,
    // figma: Property 1=arrow_left_small
    "property1=arrow_left_small": __body36,
    // figma: Property 1=arrow_right_small
    "property1=arrow_right_small": __body37,
    // figma: Property 1=arrow_bottom_small
    "property1=arrow_bottom_small": __body37,
    // figma: Property 1=arrow_above_small
    "property1=arrow_above_small": __body37,
    // figma: Property 1=excel
    "property1=excel": __body38,
    // figma: Property 1=word
    "property1=word": __body39,
    // figma: Property 1=Sell services
    "property1=sell services": __body40,
    // figma: Property 1=warning
    "property1=warning": __body41
  };
  return (__impls[__vkey_IconOther(props)] ?? __body11)();
}

// figma node: 35217:220 Components/Input-Affix (3 variants)
const __venc_ComponentsInputAffix2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ComponentsInputAffix2 = p => "type=" + __venc_ComponentsInputAffix2(p.type);
function ComponentsInputAffix2(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "icon-14px"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "rgba(21,17,50,0.45)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.002,
      top: 0.003,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 14,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgba(21,17,50,0.45)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.253,
    height: 13.999,
    viewBox: "0 0 13.253 13.999",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.373,
      top: 0.003,
      width: 13.253,
      height: 13.999
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.078 8.779 L 12.055 7.904 C 12.103 7.607 12.128 7.304 12.128 7.001 C 12.128 6.698 12.103 6.395 12.055 6.098 L 13.078 5.223 C 13.155 5.157 13.211 5.069 13.237 4.97 C 13.262 4.872 13.258 4.768 13.223 4.673 L 13.209 4.632 C 12.928 3.845 12.506 3.115 11.964 2.477 L 11.936 2.445 C 11.87 2.367 11.783 2.312 11.685 2.285 C 11.587 2.259 11.483 2.263 11.387 2.296 L 10.117 2.748 C 9.648 2.363 9.125 2.06 8.559 1.848 L 8.314 0.52 C 8.296 0.42 8.247 0.328 8.175 0.256 C 8.103 0.184 8.011 0.136 7.911 0.118 L 7.869 0.11 C 7.055 -0.037 6.198 -0.037 5.384 0.11 L 5.342 0.118 C 5.242 0.136 5.15 0.184 5.078 0.256 C 5.006 0.328 4.958 0.42 4.939 0.52 L 4.692 1.854 C 4.131 2.067 3.609 2.37 3.145 2.751 L 1.866 2.296 C 1.77 2.262 1.666 2.258 1.568 2.285 C 1.47 2.311 1.383 2.367 1.317 2.445 L 1.289 2.477 C 0.748 3.115 0.326 3.845 0.044 4.632 L 0.03 4.673 C -0.041 4.868 0.017 5.087 0.175 5.223 L 1.211 6.107 C 1.162 6.401 1.139 6.701 1.139 6.999 C 1.139 7.299 1.162 7.599 1.211 7.892 L 0.175 8.776 C 0.098 8.842 0.043 8.93 0.017 9.028 C -0.009 9.126 -0.005 9.23 0.03 9.326 L 0.044 9.367 C 0.327 10.154 0.745 10.881 1.289 11.521 L 1.317 11.554 C 1.383 11.631 1.47 11.687 1.568 11.713 C 1.666 11.74 1.77 11.736 1.866 11.702 L 3.145 11.248 C 3.611 11.631 4.131 11.934 4.692 12.145 L 4.939 13.479 C 4.958 13.579 5.006 13.671 5.078 13.743 C 5.15 13.814 5.242 13.862 5.342 13.881 L 5.384 13.888 C 6.206 14.036 7.047 14.036 7.869 13.888 L 7.911 13.881 C 8.011 13.862 8.103 13.814 8.175 13.743 C 8.247 13.671 8.296 13.579 8.314 13.479 L 8.559 12.151 C 9.125 11.939 9.651 11.635 10.117 11.251 L 11.387 11.702 C 11.483 11.736 11.587 11.74 11.685 11.714 C 11.783 11.687 11.87 11.631 11.936 11.554 L 11.964 11.521 C 12.508 10.879 12.927 10.154 13.209 9.367 L 13.223 9.326 C 13.294 9.134 13.236 8.915 13.078 8.779 L 13.078 8.779 Z M 10.945 6.282 C 10.984 6.518 11.005 6.76 11.005 7.002 C 11.005 7.245 10.984 7.487 10.945 7.723 L 10.842 8.349 L 12.009 9.348 C 11.832 9.755 11.609 10.141 11.344 10.498 L 9.894 9.984 L 9.403 10.387 C 9.03 10.693 8.614 10.934 8.164 11.102 L 7.569 11.326 L 7.289 12.842 C 6.848 12.892 6.402 12.892 5.961 12.842 L 5.681 11.323 L 5.091 11.096 C 4.645 10.927 4.231 10.687 3.861 10.382 L 3.37 9.977 L 1.911 10.496 C 1.645 10.138 1.423 9.752 1.245 9.346 L 2.425 8.338 L 2.323 7.713 C 2.286 7.481 2.266 7.24 2.266 7.002 C 2.266 6.763 2.284 6.524 2.323 6.292 L 2.425 5.667 L 1.245 4.659 C 1.422 4.251 1.645 3.867 1.911 3.509 L 3.37 4.027 L 3.861 3.623 C 4.231 3.318 4.645 3.077 5.091 2.909 L 5.683 2.685 L 5.962 1.167 C 6.402 1.117 6.85 1.117 7.291 1.167 L 7.57 2.682 L 8.166 2.906 C 8.614 3.074 9.031 3.315 9.405 3.621 L 9.895 4.024 L 11.345 3.51 C 11.611 3.868 11.833 4.254 12.011 4.66 L 10.844 5.659 L 10.945 6.282 Z M 6.628 4.096 C 5.109 4.096 3.878 5.327 3.878 6.846 C 3.878 8.365 5.109 9.596 6.628 9.596 C 8.147 9.596 9.378 8.365 9.378 6.846 C 9.378 5.327 8.147 4.096 6.628 4.096 Z M 7.866 8.084 C 7.703 8.246 7.51 8.376 7.298 8.464 C 7.086 8.551 6.858 8.597 6.628 8.596 C 6.161 8.596 5.722 8.413 5.391 8.084 C 5.228 7.921 5.099 7.728 5.011 7.516 C 4.923 7.304 4.878 7.076 4.878 6.846 C 4.878 6.379 5.061 5.94 5.391 5.609 C 5.722 5.277 6.161 5.096 6.628 5.096 C 7.095 5.096 7.534 5.277 7.866 5.609 C 8.028 5.771 8.157 5.964 8.245 6.176 C 8.333 6.389 8.378 6.616 8.378 6.846 C 8.378 7.313 8.195 7.752 7.866 8.084 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? ".com"));
  const __impls = {
    // figma: Type=icon-16px
    "type=icon-16px": __body0,
    // figma: Type=icon-14px
    "type=icon-14px": __body1,
    // figma: Type=text
    "type=text": __body2
  };
  return (__impls[__vkey_ComponentsInputAffix2(props)] ?? __body1)();
}

// figma node: 35217:237 Input-Addon/Cursor (2 variants)
const __venc_InputAddonCursor2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_InputAddonCursor2 = p => "state=" + __venc_InputAddonCursor2(p.state);
function InputAddonCursor2(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "normal"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1,
      height: 18,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1,
      height: 18,
      backgroundColor: "rgb(26,31,49)"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1,
      height: 18,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1,
      height: 18,
      backgroundColor: "rgb(255,255,255)"
    }
  }));
  const __impls = {
    // figma: State=normal
    "state=normal": __body0,
    // figma: State=blinked
    "state=blinked": __body1
  };
  return (__impls[__vkey_InputAddonCursor2(props)] ?? __body0)();
}

// figma node: 35217:235 Input-Addon/Icon
function InputAddonIcon2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(172,175,188)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "9px 9px 9px 9px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  })));
}

// figma node: 35217:217 Input-Addon/Label
function InputAddonLabel2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(172,175,188)",
      display: "flex",
      flexDirection: "row",
      gap: 11,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.85)",
      flexShrink: 0
    }
  }, props.text1 ?? "http://")));
}

// figma node: 35217:69 Input (18 variants)
const __venc_Input4 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Input4 = p => "size=" + __venc_Input4(p.size) + '|' + "state=" + __venc_Input4(p.state) + '|' + "filled=" + __venc_Input4(p.filled);
function Input4(_p = {}) {
  const props = {
    ..._p,
    prefix: _p.prefix ?? false,
    size: _p.size ?? "lg",
    state: _p.state ?? "normal",
    filled: _p.filled ?? false,
    placeholder: _p.placeholder ?? "example",
    value: _p.value ?? "example",
    suffix: _p.suffix ?? false,
    addonAfter: _p.addonAfter ?? false,
    addonBefore: _p.addonBefore ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 222,
      borderRadius: 4,
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLabel2, {
    text1: "https://"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 8px 5px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.placeholder)), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  }))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 24,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 222,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLabel2, {
    text1: "https://"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(20,30,210), 0px 0px 0px 2px rgba(48,59,246,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 8px 5px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 18,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InputAddonCursor2, {
    state: "normal"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.placeholder)), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  })))), props.addonAfter && /*#__PURE__*/React.createElement(InputAddonIcon2, {
    style: {
      position: "relative",
      width: 38,
      height: 24,
      flexShrink: 0
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 222,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLabel2, {
    text1: "https://"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 8px 5px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.placeholder)), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  }))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 24,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 222,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement(InputAddonLabel2, {
    style: {
      position: "relative",
      width: 76,
      height: 40,
      flexShrink: 0
    },
    text1: "https://"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.placeholder)), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  }))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 40,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 222,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement(InputAddonLabel2, {
    style: {
      position: "relative",
      width: 76,
      height: 40,
      flexShrink: 0
    },
    text1: "https://"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(67,75,219), 0px 0px 0px 2px rgba(48,59,246,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 18,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(InputAddonCursor2, {
    state: "normal"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.placeholder)), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  })))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 40,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 222,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement(InputAddonLabel2, {
    style: {
      position: "relative",
      width: 76,
      height: 40,
      flexShrink: 0
    },
    text1: "https://"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.placeholder)), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  }))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 40,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 222,
      borderRadius: 4,
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLabel2, {
    text1: "https://"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 12px 9px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.placeholder)), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  }))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 222,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLabel2, {
    text1: "https://"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(67,75,219), 0px 0px 0px 2px rgba(48,59,246,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 12px 9px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 18,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InputAddonCursor2, {
    state: "normal"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.placeholder)), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  })))), props.addonAfter && /*#__PURE__*/React.createElement(InputAddonIcon2, {
    style: {
      position: "relative",
      width: 38,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 221,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLabel2, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 12px 9px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.placeholder)), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  }))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 216,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLabel2, {
    text1: "https://"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 8px 5px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.25)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.value), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  }))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 24,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 216,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLabel2, {
    text1: "https://"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(67,75,219), 0px 0px 0px 2px rgba(48,59,246,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 8px 5px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value), /*#__PURE__*/React.createElement(InputAddonCursor2, {
    style: {
      position: "relative",
      height: 18,
      flexGrow: 1,
      width: "auto"
    },
    state: "normal"
  }), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  })))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 24,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 216,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLabel2, {
    text1: "https://"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 8px 5px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.85)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.value), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  }))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 24,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 216,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement(InputAddonLabel2, {
    style: {
      position: "relative",
      width: 89,
      height: 40,
      flexShrink: 0
    },
    text1: "https://"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.25)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.value), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  }))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 40,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 216,
      borderRadius: 5,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement(InputAddonLabel2, {
    style: {
      position: "relative",
      width: 76,
      height: 40,
      flexShrink: 0
    },
    text1: "https://"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(67,75,219), 0px 0px 0px 2px rgba(48,59,246,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value), /*#__PURE__*/React.createElement(InputAddonCursor2, {
    style: {
      position: "relative",
      height: 18,
      flexGrow: 1,
      width: "auto"
    },
    state: "normal"
  }), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  })))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 40,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 216,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement(InputAddonLabel2, {
    style: {
      position: "relative",
      width: 76,
      height: 40,
      flexShrink: 0
    },
    text1: "https://"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.85)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.value), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  }))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 40,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 216,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLabel2, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(239,239,247)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 12px 9px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.25)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.value), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  }))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 216,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLabel2, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(67,75,219), 0px 0px 0px 2px rgba(48,59,246,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 12px 9px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value), /*#__PURE__*/React.createElement(InputAddonCursor2, {
    style: {
      position: "relative",
      height: 18,
      flexGrow: 1,
      width: "auto"
    },
    state: "normal"
  }), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  })))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 216,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.addonBefore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLabel2, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 12px 9px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.750,
    height: 12.438,
    viewBox: "0 0 11.750 12.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.126,
      top: 0.782,
      width: 11.75,
      height: 12.438,
      color: "rgba(21,17,50,0.45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      letterSpacing: "-0.002em",
      color: "rgba(21,17,50,0.85)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.value), props.suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(ComponentsInputAffix2, {
    type: "icon-14px"
  }))), props.addonAfter && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InputAddonIcon2, null)));
  const __impls = {
    // figma: Size=small, State=disabled, Filled=false
    "size=sm|state=disabled|filled=false": __body0,
    // figma: Size=small, State=focused, Filled=false
    "size=sm|state=focused|filled=false": __body1,
    // figma: Size=small, State=normal, Filled=false
    "size=sm|state=normal|filled=false": __body2,
    // figma: Size=large, State=disabled, Filled=false
    "size=lg|state=disabled|filled=false": __body3,
    // figma: Size=large, State=focused, Filled=false
    "size=lg|state=focused|filled=false": __body4,
    // figma: Size=large, State=normal, Filled=false
    "size=lg|state=normal|filled=false": __body5,
    // figma: Size=medium, State=disabled, Filled=false
    "size=md|state=disabled|filled=false": __body6,
    // figma: Size=medium, State=focused, Filled=false
    "size=md|state=focused|filled=false": __body7,
    // figma: Size=medium, State=normal, Filled=false
    "size=md|state=normal|filled=false": __body8,
    // figma: Size=small, State=disabled, Filled=true
    "size=sm|state=disabled|filled=true": __body9,
    // figma: Size=small, State=focused, Filled=true
    "size=sm|state=focused|filled=true": __body10,
    // figma: Size=small, State=normal, Filled=true
    "size=sm|state=normal|filled=true": __body11,
    // figma: Size=large, State=disabled, Filled=true
    "size=lg|state=disabled|filled=true": __body12,
    // figma: Size=large, State=focused, Filled=true
    "size=lg|state=focused|filled=true": __body13,
    // figma: Size=large, State=normal, Filled=true
    "size=lg|state=normal|filled=true": __body14,
    // figma: Size=medium, State=disabled, Filled=true
    "size=md|state=disabled|filled=true": __body15,
    // figma: Size=medium, State=focused, Filled=true
    "size=md|state=focused|filled=true": __body16,
    // figma: Size=medium, State=normal, Filled=true
    "size=md|state=normal|filled=true": __body17
  };
  return (__impls[__vkey_Input4(props)] ?? __body5)();
}

// figma node: 4139:119511 paginnation/screen small
function PaginnationScreenSmall(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 408,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 264,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(EmojiObjects, {
    style2: "outlined"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 8px 0px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(78,75,102)",
      flexShrink: 0
    }
  }, props.text1 ?? "Tìm thấy 3 kết quả , hiển thị từ 1 - 5")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 224,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(212,215,231)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconOther, {
    property1: "arrow_left_small"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 0,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(20,30,210)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "1px 7px 1px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(20,30,210)",
      flexShrink: 0
    }
  }, props.text2 ?? "1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: 4,
      width: 24,
      height: 24
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(Component4, {
    property1: "more_horiz"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 112,
      top: 0,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(212,215,231)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "1px 7px 1px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text3 ?? "4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 152,
      top: 0,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(212,215,231)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "1px 7px 1px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text4 ?? "5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 192,
      top: 0,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(212,215,231)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(IconOther, {
    property1: "arrow_right_small"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 93,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Input4, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    suffix: false,
    addonBefore: false,
    addonAfter: false,
    value: "Nhập",
    size: "md",
    state: "normal",
    filled: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 62,
      top: 1,
      width: 30,
      height: 30,
      borderRadius: 8,
      backgroundColor: "rgb(20,30,210)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.583,
    height: 15.185,
    viewBox: "0 0 15.583 15.185",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.209,
      top: 4.408,
      width: 15.583,
      height: 15.185,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 8.592 L 12.17 8.592 L 7.29 13.472 C 6.9 13.862 6.9 14.502 7.29 14.892 C 7.68 15.282 8.31 15.282 8.7 14.892 L 15.29 8.302 C 15.68 7.912 15.68 7.283 15.29 6.893 L 8.71 0.292 C 8.32 -0.097 7.69 -0.097 7.3 0.292 C 6.91 0.683 6.91 1.313 7.3 1.703 L 12.17 6.593 L 1 6.593 C 0.45 6.593 0 7.043 0 7.593 C 0 8.142 0.45 8.592 1 8.592 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))));
}

// figma node: 37889:99 paginnation/screen small
function PaginnationScreenSmall2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement(PaginnationScreenSmall, {
    className: props.className,
    style: {
      position: "relative",
      width: "fit-content",
      ...props.style
    }
  });
}

// Globals for scripts loaded after this file.
window.Filters = Filters;
window.Filters2 = Filters2;
window.AppSettingsAlt = AppSettingsAlt;
window.Apps = Apps;
window.AppsOutage = AppsOutage;
window.ArrowBack = ArrowBack;
window.ArrowBackIos = ArrowBackIos;
window.ArrowBackIosNew = ArrowBackIosNew;
window.ArrowDownward = ArrowDownward;
window.ArrowDropDown = ArrowDropDown;
window.ArrowDropDownCircle = ArrowDropDownCircle;
window.ArrowDropUp = ArrowDropUp;
window.ArrowForward = ArrowForward;
window.ArrowForwardIos = ArrowForwardIos;
window.ArrowLeft = ArrowLeft;
window.ArrowRight = ArrowRight;
window.ArrowUpward = ArrowUpward;
window.AssistantDirection = AssistantDirection;
window.Campaign = Campaign;
window.Cancel = Cancel;
window.Check = Check;
window.ChevronLeft = ChevronLeft;
window.ChevronRight = ChevronRight;
window.Close = Close;
window.DoubleArrow = DoubleArrow;
window.East = East;
window.ExpandCircleDown = ExpandCircleDown;
window.FirstPage = FirstPage;
window.Fullscreen = Fullscreen;
window.FullscreenExit = FullscreenExit;
window.HomeWork = HomeWork;
window.LastPage = LastPage;
window.LegendToggle = LegendToggle;
window.MapsHomeWork = MapsHomeWork;
window.Menu = Menu;
window.MenuOpen = MenuOpen;
window.MoreHoriz = MoreHoriz;
window.MoreVert = MoreVert;
window.North = North;
window.NorthEast = NorthEast;
window.NorthWest = NorthWest;
window.OfflineShare = OfflineShare;
window.Payments = Payments;
window.PivotTableChart = PivotTableChart;
window.Refresh = Refresh;
window.South = South;
window.SouthEast = SouthEast;
window.SouthWest = SouthWest;
window.SubdirectoryArrowLeft = SubdirectoryArrowLeft;
window.SubdirectoryArrowRight = SubdirectoryArrowRight;
window.SwitchLeft = SwitchLeft;
window.SwitchRight = SwitchRight;
window.UnfoldLess = UnfoldLess;
window.UnfoldMore = UnfoldMore;
window.WaterfallChart = WaterfallChart;
window.West = West;
window.Component4 = Component4;
window.EmojiObjects = EmojiObjects;
window.Add = Add;
window.AddCircleOutline = AddCircleOutline;
window.BorderColor = BorderColor;
window.CalendarToday = CalendarToday;
window.CheckBox = CheckBox;
window.CheckBoxOutlineBlank = CheckBoxOutlineBlank;
window.CheckCircle = CheckCircle;
window.Delete = Delete;
window.HighlightOff = HighlightOff;
window.Home = Home;
window.Notifications = Notifications;
window.Notifications2 = Notifications2;
window.NotificationsActive = NotificationsActive;
window.RadioButtonNo = RadioButtonNo;
window.RadioButtonYes = RadioButtonYes;
window.RemoveRedEye = RemoveRedEye;
window.Search = Search;
window.Textsms = Textsms;
window.IconOther = IconOther;
window.ComponentsInputAffix2 = ComponentsInputAffix2;
window.InputAddonCursor2 = InputAddonCursor2;
window.InputAddonIcon2 = InputAddonIcon2;
window.InputAddonLabel2 = InputAddonLabel2;
window.Input4 = Input4;
window.PaginnationScreenSmall = PaginnationScreenSmall;
window.PaginnationScreenSmall2 = PaginnationScreenSmall2;