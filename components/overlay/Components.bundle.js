// Components bundle — 8 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (tokens/colors.css, tokens/typography.css, tokens/spacing.css — fig-tokens.css / fig-typography.css removed 2026-08-25, never had any consumer).

// figma node: 1630:45833 icon alert (12 variants)
const __venc_IconAlert = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconAlert = p => "property1=" + __venc_IconAlert(p.property1) + '|' + "property2=" + __venc_IconAlert(p.property2) + '|' + "property3=" + __venc_IconAlert(p.property3);
function IconAlert(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "checkbox",
    property2: _p.property2 ?? "radio button",
    property3: _p.property3 ?? "enabled selected"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(82,196,26)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 9.563,
    height: 7.545,
    viewBox: "0 0 9.563 7.545",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 6,
      width: 9.563,
      height: 7.545
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.469 0 L 8.65 0 C 8.535 0 8.426 0.053 8.356 0.143 L 3.524 6.264 L 1.207 3.328 C 1.172 3.284 1.128 3.248 1.077 3.223 C 1.026 3.198 0.97 3.185 0.913 3.185 L 0.094 3.185 C 0.015 3.185 -0.028 3.275 0.02 3.336 L 3.23 7.403 C 3.38 7.593 3.668 7.593 3.819 7.403 L 9.543 0.15 C 9.591 0.09 9.547 0 9.469 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.356 0.143 L 8.591 0.329 L 8.592 0.327 L 8.356 0.143 Z M 3.524 6.264 L 3.289 6.45 L 3.524 6.748 L 3.759 6.45 L 3.524 6.264 Z M 1.207 3.328 L 0.972 3.514 L 0.972 3.514 L 1.207 3.328 Z M 0.913 3.185 L 0.913 2.885 L 0.913 2.885 L 0.913 3.185 Z M 0.02 3.336 L -0.215 3.522 L -0.215 3.522 L 0.02 3.336 Z M 3.23 7.403 L 2.994 7.589 L 2.994 7.589 L 3.23 7.403 Z M 3.819 7.403 L 4.054 7.59 L 4.055 7.589 L 3.819 7.403 Z M 9.543 0.15 L 9.309 -0.038 L 9.307 -0.036 L 9.543 0.15 Z M 9.469 -0.3 L 8.65 -0.3 L 8.65 0.3 L 9.469 0.3 L 9.469 -0.3 Z M 8.65 -0.3 C 8.444 -0.3 8.247 -0.205 8.119 -0.041 L 8.592 0.327 C 8.605 0.311 8.626 0.3 8.65 0.3 L 8.65 -0.3 Z M 8.12 -0.043 L 3.289 6.078 L 3.759 6.45 L 8.591 0.329 L 8.12 -0.043 Z M 3.76 6.078 L 1.443 3.142 L 0.972 3.514 L 3.289 6.45 L 3.76 6.078 Z M 1.443 3.143 C 1.38 3.062 1.299 2.998 1.208 2.953 L 0.945 3.493 C 0.956 3.498 0.965 3.505 0.972 3.514 L 1.443 3.143 Z M 1.208 2.953 C 1.116 2.908 1.015 2.885 0.913 2.885 L 0.913 3.485 C 0.924 3.485 0.935 3.488 0.945 3.493 L 1.208 2.953 Z M 0.913 2.885 L 0.094 2.885 L 0.094 3.485 L 0.913 3.485 L 0.913 2.885 Z M 0.094 2.885 C -0.235 2.885 -0.419 3.264 -0.215 3.522 L 0.256 3.151 C 0.363 3.287 0.266 3.485 0.094 3.485 L 0.094 2.885 Z M -0.215 3.522 L 2.994 7.589 L 3.465 7.217 L 0.256 3.15 L -0.215 3.522 Z M 2.994 7.589 C 3.265 7.931 3.783 7.93 4.054 7.59 L 3.585 7.216 C 3.553 7.255 3.495 7.254 3.465 7.217 L 2.994 7.589 Z M 4.055 7.589 L 9.778 0.336 L 9.307 -0.036 L 3.584 7.217 L 4.055 7.589 Z M 9.777 0.338 C 9.987 0.077 9.793 -0.3 9.469 -0.3 L 9.469 0.3 C 9.302 0.3 9.195 0.104 9.309 -0.038 L 9.777 0.338 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Default success"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(24,144,255)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 3,
      width: 4,
      height: 14,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(255,255,255)"
    }
  }, props.text1 ?? "i")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Informational Notes"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(250,173,20)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 3,
      width: 4,
      height: 14,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(255,255,255)"
    }
  }, props.text1 ?? "i")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Warning"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(195,0,82)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.167,
    height: 8.167,
    viewBox: "0 0 8.167 8.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.917,
      top: 2.917,
      width: 8.167,
      height: 8.167,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.167 0.822 L 7.344 0 L 4.083 3.261 L 0.822 0 L 0 0.822 L 3.261 4.083 L 0 7.344 L 0.822 8.167 L 4.083 4.906 L 7.344 8.167 L 8.167 7.344 L 4.906 4.083 L 8.167 0.822 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Error"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(82,196,26)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 9.563,
    height: 7.545,
    viewBox: "0 0 9.563 7.545",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 6,
      width: 9.563,
      height: 7.545
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.469 0 L 8.65 0 C 8.535 0 8.426 0.053 8.356 0.143 L 3.524 6.264 L 1.207 3.328 C 1.172 3.284 1.128 3.248 1.077 3.223 C 1.026 3.198 0.97 3.185 0.913 3.185 L 0.094 3.185 C 0.015 3.185 -0.028 3.275 0.02 3.336 L 3.23 7.403 C 3.38 7.593 3.668 7.593 3.819 7.403 L 9.543 0.15 C 9.591 0.09 9.547 0 9.469 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.356 0.143 L 8.591 0.329 L 8.592 0.327 L 8.356 0.143 Z M 3.524 6.264 L 3.289 6.45 L 3.524 6.748 L 3.759 6.45 L 3.524 6.264 Z M 1.207 3.328 L 0.972 3.514 L 0.972 3.514 L 1.207 3.328 Z M 0.913 3.185 L 0.913 2.885 L 0.913 2.885 L 0.913 3.185 Z M 0.02 3.336 L -0.215 3.522 L -0.215 3.522 L 0.02 3.336 Z M 3.23 7.403 L 2.994 7.589 L 2.994 7.589 L 3.23 7.403 Z M 3.819 7.403 L 4.054 7.59 L 4.055 7.589 L 3.819 7.403 Z M 9.543 0.15 L 9.309 -0.038 L 9.307 -0.036 L 9.543 0.15 Z M 9.469 -0.3 L 8.65 -0.3 L 8.65 0.3 L 9.469 0.3 L 9.469 -0.3 Z M 8.65 -0.3 C 8.444 -0.3 8.247 -0.205 8.119 -0.041 L 8.592 0.327 C 8.605 0.311 8.626 0.3 8.65 0.3 L 8.65 -0.3 Z M 8.12 -0.043 L 3.289 6.078 L 3.759 6.45 L 8.591 0.329 L 8.12 -0.043 Z M 3.76 6.078 L 1.443 3.142 L 0.972 3.514 L 3.289 6.45 L 3.76 6.078 Z M 1.443 3.143 C 1.38 3.062 1.299 2.998 1.208 2.953 L 0.945 3.493 C 0.956 3.498 0.965 3.505 0.972 3.514 L 1.443 3.143 Z M 1.208 2.953 C 1.116 2.908 1.015 2.885 0.913 2.885 L 0.913 3.485 C 0.924 3.485 0.935 3.488 0.945 3.493 L 1.208 2.953 Z M 0.913 2.885 L 0.094 2.885 L 0.094 3.485 L 0.913 3.485 L 0.913 2.885 Z M 0.094 2.885 C -0.235 2.885 -0.419 3.264 -0.215 3.522 L 0.256 3.151 C 0.363 3.287 0.266 3.485 0.094 3.485 L 0.094 2.885 Z M -0.215 3.522 L 2.994 7.589 L 3.465 7.217 L 0.256 3.15 L -0.215 3.522 Z M 2.994 7.589 C 3.265 7.931 3.783 7.93 4.054 7.59 L 3.585 7.216 C 3.553 7.255 3.495 7.254 3.465 7.217 L 2.994 7.589 Z M 4.055 7.589 L 9.778 0.336 L 9.307 -0.036 L 3.584 7.217 L 4.055 7.589 Z M 9.777 0.338 C 9.987 0.077 9.793 -0.3 9.469 -0.3 L 9.469 0.3 C 9.302 0.3 9.195 0.104 9.309 -0.038 L 9.777 0.338 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(82,196,26)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 7.650,
    height: 6.036,
    viewBox: "0 0 7.650 6.036",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4.8,
      width: 7.65,
      height: 6.036
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.575 0 L 6.92 0 C 6.828 0 6.741 0.042 6.685 0.114 L 2.819 5.011 L 0.966 2.662 C 0.938 2.627 0.902 2.598 0.861 2.578 C 0.82 2.558 0.776 2.548 0.73 2.548 L 0.075 2.548 C 0.012 2.548 -0.022 2.62 0.016 2.669 L 2.584 5.922 C 2.704 6.074 2.935 6.074 3.055 5.922 L 7.634 0.12 C 7.673 0.072 7.638 0 7.575 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.685 0.114 L 6.92 0.3 L 6.921 0.299 L 6.685 0.114 Z M 2.819 5.011 L 2.584 5.197 L 2.819 5.495 L 3.055 5.197 L 2.819 5.011 Z M 0.966 2.662 L 0.73 2.848 L 0.73 2.848 L 0.966 2.662 Z M 0.73 2.548 L 0.731 2.248 L 0.73 2.248 L 0.73 2.548 Z M 0.016 2.669 L -0.219 2.855 L -0.219 2.855 L 0.016 2.669 Z M 2.584 5.922 L 2.348 6.108 L 2.349 6.108 L 2.584 5.922 Z M 3.055 5.922 L 3.29 6.109 L 3.291 6.108 L 3.055 5.922 Z M 7.634 0.12 L 7.4 -0.068 L 7.399 -0.066 L 7.634 0.12 Z M 7.575 -0.3 L 6.92 -0.3 L 6.92 0.3 L 7.575 0.3 L 7.575 -0.3 Z M 6.92 -0.3 C 6.737 -0.3 6.562 -0.216 6.448 -0.07 L 6.921 0.299 C 6.92 0.3 6.919 0.3 6.92 0.3 L 6.92 -0.3 Z M 6.449 -0.072 L 2.584 4.825 L 3.055 5.197 L 6.92 0.3 L 6.449 -0.072 Z M 3.055 4.825 L 1.201 2.477 L 0.73 2.848 L 2.584 5.197 L 3.055 4.825 Z M 1.201 2.477 C 1.145 2.406 1.074 2.348 0.992 2.308 L 0.73 2.848 L 0.73 2.848 L 1.201 2.477 Z M 0.992 2.308 C 0.911 2.269 0.821 2.248 0.731 2.248 L 0.73 2.848 L 0.73 2.848 L 0.992 2.308 Z M 0.73 2.248 L 0.075 2.248 L 0.075 2.848 L 0.73 2.848 L 0.73 2.248 Z M 0.075 2.248 C -0.238 2.248 -0.413 2.609 -0.219 2.855 L 0.252 2.483 C 0.369 2.632 0.263 2.848 0.075 2.848 L 0.075 2.248 Z M -0.219 2.855 L 2.348 6.108 L 2.819 5.736 L 0.252 2.483 L -0.219 2.855 Z M 2.349 6.108 C 2.589 6.413 3.05 6.411 3.29 6.109 L 2.821 5.735 C 2.82 5.736 2.82 5.736 2.82 5.736 C 2.82 5.736 2.82 5.736 2.819 5.736 C 2.819 5.736 2.818 5.736 2.819 5.736 C 2.82 5.737 2.82 5.737 2.819 5.736 L 2.349 6.108 Z M 3.291 6.108 L 7.87 0.306 L 7.399 -0.066 L 2.82 5.736 L 3.291 6.108 Z M 7.868 0.308 C 8.068 0.059 7.883 -0.3 7.575 -0.3 L 7.575 0.3 C 7.393 0.3 7.277 0.086 7.4 -0.068 L 7.868 0.308 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(24,144,255)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 3,
      width: 4,
      height: 14,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(255,255,255)"
    }
  }, props.text1 ?? "i"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(24,144,255)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 6.4,
      top: 2.4,
      width: 3.2,
      height: 11.2,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(255,255,255)"
    }
  }, props.text1 ?? "i"));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(250,173,20)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 3,
      width: 4,
      height: 14,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(255,255,255)"
    }
  }, props.text1 ?? "i"));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(250,173,20)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 6.4,
      top: 2.4,
      width: 3.2,
      height: 11.2,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(255,255,255)"
    }
  }, props.text1 ?? "i"));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(195,0,82)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.167,
    height: 8.167,
    viewBox: "0 0 8.167 8.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.917,
      top: 2.917,
      width: 8.167,
      height: 8.167,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.167 0.822 L 7.344 0 L 4.083 3.261 L 0.822 0 L 0 0.822 L 3.261 4.083 L 0 7.344 L 0.822 8.167 L 4.083 4.906 L 7.344 8.167 L 8.167 7.344 L 4.906 4.083 L 8.167 0.822 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(195,0,82)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.4,
      top: 2.4,
      width: 11.2,
      height: 11.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.2,
      height: 11.2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.533,
    height: 6.533,
    viewBox: "0 0 6.533 6.533",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.333,
      top: 2.333,
      width: 6.533,
      height: 6.533
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.533 0.658 L 5.875 0 L 3.267 2.609 L 0.658 0 L 0 0.658 L 2.609 3.267 L 0 5.875 L 0.658 6.533 L 3.267 3.925 L 5.875 6.533 L 6.533 5.875 L 3.925 3.267 L 6.533 0.658 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Property 1=Checkbox, Property 2=Radio Button, Property 3=Enabled Selected
    "property1=checkbox|property2=radio button|property3=enabled selected": __body0,
    // figma: Property 1=Checkbox, Property 2=Radio Button, Property 3=Informational
    "property1=checkbox|property2=radio button|property3=informational": __body1,
    // figma: Property 1=Checkbox, Property 2=Radio Button, Property 3=Warning
    "property1=checkbox|property2=radio button|property3=warning": __body2,
    // figma: Property 1=Checkbox, Property 2=Radio Button, Property 3=error
    "property1=checkbox|property2=radio button|property3=error": __body3,
    // figma: Property 1=success_icon
    "property1=success_icon|property2=|property3=": __body4,
    // figma: Property 1=success_small
    "property1=success_small|property2=|property3=": __body5,
    // figma: Property 1=Informational_icon
    "property1=informational_icon|property2=|property3=": __body6,
    // figma: Property 1=Informational_small
    "property1=informational_small|property2=|property3=": __body7,
    // figma: Property 1=Warning_icon
    "property1=warning_icon|property2=|property3=": __body8,
    // figma: Property 1=Warning_small
    "property1=warning_small|property2=|property3=": __body9,
    // figma: Property 1=error_icon
    "property1=error_icon|property2=|property3=": __body10,
    // figma: Property 1=error_small
    "property1=error_small|property2=|property3=": __body11
  };
  return (__impls[__vkey_IconAlert(props)] ?? __body0)();
}

// figma node: 1169:106899 Warning
function Warning2(_p = {}) {
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
    width: 22,
    height: 19,
    viewBox: "0 0 22 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 2,
      width: 22,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 19 L 22 19 L 11 0 L 0 19 Z M 12 16 L 10 16 L 10 14 L 12 14 L 12 16 Z M 12 12 L 10 12 L 10 8 L 12 8 L 12 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 4530:106321 Alert (8 variants)
const __venc_Alert = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Alert = p => "status=" + __venc_Alert(p.status) + '|' + "info=" + __venc_Alert(p.info);
function Alert(_p = {}) {
  const props = {
    ..._p,
    status: _p.status ?? "success",
    info: _p.info ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
      height: 48,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 100px 160px -114px rgba(0,0,0,0.09), 0px 26.790px 55.877px 0px rgba(0,0,0,0.0606), 0px 7.570px 25.772px 0px rgba(0,0,0,0.049), 0px 0.998px 10.865px 0px rgba(0,0,0,0.0353)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 4,
      backgroundColor: "rgb(6,165,97)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(0,186,136)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 7.650,
    height: 6.036,
    viewBox: "0 0 7.650 6.036",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4.8,
      width: 7.65,
      height: 6.036,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.575 0 L 6.92 0 C 6.828 0 6.741 0.042 6.685 0.114 L 2.819 5.011 L 0.966 2.662 C 0.938 2.627 0.902 2.598 0.861 2.578 C 0.82 2.558 0.776 2.548 0.73 2.548 L 0.075 2.548 C 0.012 2.548 -0.022 2.62 0.016 2.669 L 2.584 5.922 C 2.704 6.074 2.935 6.074 3.055 5.922 L 7.634 0.12 C 7.673 0.072 7.638 0 7.575 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.685 0.114 L 6.92 0.3 L 6.921 0.299 L 6.685 0.114 Z M 2.819 5.011 L 2.584 5.197 L 2.819 5.495 L 3.055 5.197 L 2.819 5.011 Z M 0.966 2.662 L 0.73 2.848 L 0.73 2.848 L 0.966 2.662 Z M 0.73 2.548 L 0.731 2.248 L 0.73 2.248 L 0.73 2.548 Z M 0.016 2.669 L -0.219 2.855 L -0.219 2.855 L 0.016 2.669 Z M 2.584 5.922 L 2.348 6.108 L 2.349 6.108 L 2.584 5.922 Z M 3.055 5.922 L 3.29 6.109 L 3.291 6.108 L 3.055 5.922 Z M 7.634 0.12 L 7.4 -0.068 L 7.399 -0.066 L 7.634 0.12 Z M 7.575 -0.3 L 6.92 -0.3 L 6.92 0.3 L 7.575 0.3 L 7.575 -0.3 Z M 6.92 -0.3 C 6.737 -0.3 6.562 -0.216 6.448 -0.07 L 6.921 0.299 C 6.92 0.3 6.919 0.3 6.92 0.3 L 6.92 -0.3 Z M 6.449 -0.072 L 2.584 4.825 L 3.055 5.197 L 6.92 0.3 L 6.449 -0.072 Z M 3.055 4.825 L 1.201 2.477 L 0.73 2.848 L 2.584 5.197 L 3.055 4.825 Z M 1.201 2.477 C 1.145 2.406 1.074 2.348 0.992 2.308 L 0.73 2.848 L 0.73 2.848 L 1.201 2.477 Z M 0.992 2.308 C 0.911 2.269 0.821 2.248 0.731 2.248 L 0.73 2.848 L 0.73 2.848 L 0.992 2.308 Z M 0.73 2.248 L 0.075 2.248 L 0.075 2.848 L 0.73 2.848 L 0.73 2.248 Z M 0.075 2.248 C -0.238 2.248 -0.413 2.609 -0.219 2.855 L 0.252 2.483 C 0.369 2.632 0.263 2.848 0.075 2.848 L 0.075 2.248 Z M -0.219 2.855 L 2.348 6.108 L 2.819 5.736 L 0.252 2.483 L -0.219 2.855 Z M 2.349 6.108 C 2.589 6.413 3.05 6.411 3.29 6.109 L 2.821 5.735 C 2.82 5.736 2.82 5.736 2.82 5.736 C 2.82 5.736 2.82 5.736 2.819 5.736 C 2.819 5.736 2.818 5.736 2.819 5.736 C 2.82 5.737 2.82 5.737 2.819 5.736 L 2.349 6.108 Z M 3.291 6.108 L 7.87 0.306 L 7.399 -0.066 L 2.82 5.736 L 3.291 6.108 Z M 7.868 0.308 C 8.068 0.059 7.883 -0.3 7.575 -0.3 L 7.575 0.3 C 7.393 0.3 7.277 0.086 7.4 -0.068 L 7.868 0.308 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgb(20,20,43)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Phê duyệt thành công")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 100px 160px -114px rgba(0,0,0,0.09), 0px 26.790px 55.877px 0px rgba(0,0,0,0.0606), 0px 7.570px 25.772px 0px rgba(0,0,0,0.049), 0px 0.998px 10.865px 0px rgba(0,0,0,0.0353)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "0px 28px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 4,
      backgroundColor: "rgb(6,165,97)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "error_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgb(20,20,43)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Phê duyệt thành công")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 276,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 24px 0px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 252,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, props.text2 ?? "Detailed description and advice about successful copywriting."))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 100px 160px -114px rgba(0,0,0,0.09), 0px 26.790px 55.877px 0px rgba(0,0,0,0.0606), 0px 7.570px 25.772px 0px rgba(0,0,0,0.049), 0px 0.998px 10.865px 0px rgba(0,0,0,0.0353)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "0px 28px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 4,
      backgroundColor: "rgb(250,11,11)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(194,201,209)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Warning2, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgb(20,20,43)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Phê duyệt thành công")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 276,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 24px 0px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 252,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, props.text2 ?? "Detailed description and advice about successful copywriting."))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 100px 160px -114px rgba(0,0,0,0.09), 0px 26.790px 55.877px 0px rgba(0,0,0,0.0606), 0px 7.570px 25.772px 0px rgba(0,0,0,0.049), 0px 0.998px 10.865px 0px rgba(0,0,0,0.0353)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "0px 28px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 4,
      backgroundColor: "rgb(255,193,34)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "informational_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgb(20,20,43)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Phê duyệt thành công")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 276,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 24px 0px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 252,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, props.text2 ?? "Detailed description and advice about successful copywriting."))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
      height: 48,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 100px 160px -114px rgba(0,0,0,0.09), 0px 26.790px 55.877px 0px rgba(0,0,0,0.0606), 0px 7.570px 25.772px 0px rgba(0,0,0,0.049), 0px 0.998px 10.865px 0px rgba(0,0,0,0.0353)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 344,
      height: 48,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 48,
      top: 13,
      width: 268,
      height: 21,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgb(255,193,34)"
    }
  }, props.text1 ?? "Cảnh bảo"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 16,
      width: 16,
      height: 16,
      color: "rgb(194,201,209)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Warning2, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -1,
      width: 4,
      height: 50,
      backgroundColor: "rgb(244,183,64)"
    }
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
      height: 48,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 100px 160px -114px rgba(0,0,0,0.09), 0px 26.790px 55.877px 0px rgba(0,0,0,0.0606), 0px 7.570px 25.772px 0px rgba(0,0,0,0.049), 0px 0.998px 10.865px 0px rgba(0,0,0,0.0353)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 344,
      height: 48,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 48,
      top: 13,
      width: 268,
      height: 21,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgb(20,20,43)"
    }
  }, props.text1 ?? "Thông tin"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 16,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,193,34)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 6.4,
      top: 2.4,
      width: 3.2,
      height: 11.2,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(255,255,255)"
    }
  }, "i")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -1,
      width: 4,
      height: 50,
      backgroundColor: "rgb(255,193,34)"
    }
  }));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
      height: 48,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 100px 160px -114px rgba(0,0,0,0.09), 0px 26.790px 55.877px 0px rgba(0,0,0,0.0606), 0px 7.570px 25.772px 0px rgba(0,0,0,0.049), 0px 0.998px 10.865px 0px rgba(0,0,0,0.0353)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 344,
      height: 48,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 48,
      top: 13,
      width: 268,
      height: 21,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgb(20,20,43)"
    }
  }, props.text1 ?? "Đã có lỗi xảy ra"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 16,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "error_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -1,
      width: 4,
      height: 50,
      backgroundColor: "rgb(102,202,255)"
    }
  }));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 100px 160px -114px rgba(0,0,0,0.09), 0px 26.790px 55.877px 0px rgba(0,0,0,0.0606), 0px 7.570px 25.772px 0px rgba(0,0,0,0.049), 0px 0.998px 10.865px 0px rgba(0,0,0,0.0353)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "0px 28px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 4,
      backgroundColor: "rgb(6,165,97)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(0,186,136)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 7.650,
    height: 6.036,
    viewBox: "0 0 7.650 6.036",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4.8,
      width: 7.65,
      height: 6.036,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.575 0 L 6.92 0 C 6.828 0 6.741 0.042 6.685 0.114 L 2.819 5.011 L 0.966 2.662 C 0.938 2.627 0.902 2.598 0.861 2.578 C 0.82 2.558 0.776 2.548 0.73 2.548 L 0.075 2.548 C 0.012 2.548 -0.022 2.62 0.016 2.669 L 2.584 5.922 C 2.704 6.074 2.935 6.074 3.055 5.922 L 7.634 0.12 C 7.673 0.072 7.638 0 7.575 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.685 0.114 L 6.92 0.3 L 6.921 0.299 L 6.685 0.114 Z M 2.819 5.011 L 2.584 5.197 L 2.819 5.495 L 3.055 5.197 L 2.819 5.011 Z M 0.966 2.662 L 0.73 2.848 L 0.73 2.848 L 0.966 2.662 Z M 0.73 2.548 L 0.731 2.248 L 0.73 2.248 L 0.73 2.548 Z M 0.016 2.669 L -0.219 2.855 L -0.219 2.855 L 0.016 2.669 Z M 2.584 5.922 L 2.348 6.108 L 2.349 6.108 L 2.584 5.922 Z M 3.055 5.922 L 3.29 6.109 L 3.291 6.108 L 3.055 5.922 Z M 7.634 0.12 L 7.4 -0.068 L 7.399 -0.066 L 7.634 0.12 Z M 7.575 -0.3 L 6.92 -0.3 L 6.92 0.3 L 7.575 0.3 L 7.575 -0.3 Z M 6.92 -0.3 C 6.737 -0.3 6.562 -0.216 6.448 -0.07 L 6.921 0.299 C 6.92 0.3 6.919 0.3 6.92 0.3 L 6.92 -0.3 Z M 6.449 -0.072 L 2.584 4.825 L 3.055 5.197 L 6.92 0.3 L 6.449 -0.072 Z M 3.055 4.825 L 1.201 2.477 L 0.73 2.848 L 2.584 5.197 L 3.055 4.825 Z M 1.201 2.477 C 1.145 2.406 1.074 2.348 0.992 2.308 L 0.73 2.848 L 0.73 2.848 L 1.201 2.477 Z M 0.992 2.308 C 0.911 2.269 0.821 2.248 0.731 2.248 L 0.73 2.848 L 0.73 2.848 L 0.992 2.308 Z M 0.73 2.248 L 0.075 2.248 L 0.075 2.848 L 0.73 2.848 L 0.73 2.248 Z M 0.075 2.248 C -0.238 2.248 -0.413 2.609 -0.219 2.855 L 0.252 2.483 C 0.369 2.632 0.263 2.848 0.075 2.848 L 0.075 2.248 Z M -0.219 2.855 L 2.348 6.108 L 2.819 5.736 L 0.252 2.483 L -0.219 2.855 Z M 2.349 6.108 C 2.589 6.413 3.05 6.411 3.29 6.109 L 2.821 5.735 C 2.82 5.736 2.82 5.736 2.82 5.736 C 2.82 5.736 2.82 5.736 2.819 5.736 C 2.819 5.736 2.818 5.736 2.819 5.736 C 2.82 5.737 2.82 5.737 2.819 5.736 L 2.349 6.108 Z M 3.291 6.108 L 7.87 0.306 L 7.399 -0.066 L 2.82 5.736 L 3.291 6.108 Z M 7.868 0.308 C 8.068 0.059 7.883 -0.3 7.575 -0.3 L 7.575 0.3 C 7.393 0.3 7.277 0.086 7.4 -0.068 L 7.868 0.308 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(20,20,43)",
      flexShrink: 0
    }
  }, props.text1 ?? "Phê duyệt thành công")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 276,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 24px 0px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 252,
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgb(78,75,102)",
      flexShrink: 0
    }
  }, props.text2 ?? "Detailed description and advice about successful copywriting."))));
  const __impls = {
    // figma: Status=Success, Info=No
    "status=success|info=false": __body0,
    // figma: Status= Error, Info=Yes
    "status=error|info=true": __body1,
    // figma: Status= Warning, Info=Yes
    "status=warning|info=true": __body2,
    // figma: Status= Infomation, Info=Yes
    "status=infomation|info=true": __body3,
    // figma: Status=Warning, Info=No
    "status=warning|info=false": __body4,
    // figma: Status=Informational, Info=No
    "status=informational|info=false": __body5,
    // figma: Status=Error, Info=No
    "status=error|info=false": __body6,
    // figma: Status= Success, Info=Yes
    "status=success|info=true": __body7
  };
  return (__impls[__vkey_Alert(props)] ?? __body7)();
}

// figma node: 31219:103627 Alert
function Alert3(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement(Alert, {
    className: props.className,
    style: {
      position: "relative",
      width: 344,
      height: 48,
      ...props.style
    },
    status: "error",
    info: false
  });
}

// figma node: 1668:45950 spinning (15 variants)
const __venc_Spinning = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Spinning = p => "size=" + __venc_Spinning(p.size) + '|' + "value=" + __venc_Spinning(p.value);
function Spinning(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "lg",
    value: _p.value ?? "0"
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
      borderRadius: "50%",
      backgroundColor: "rgb(229,233,242)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,24)",
      transformOrigin: "0 0",
      width: 24,
      height: 24,
      borderRadius: "50%",
      backgroundColor: "rgb(64,143,236)"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      borderRadius: "50%",
      backgroundColor: "rgb(229,233,242)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,32)",
      transformOrigin: "0 0",
      width: 32,
      height: 32,
      borderRadius: "50%",
      backgroundColor: "rgb(64,143,236)"
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      borderRadius: "50%",
      backgroundColor: "rgb(229,233,242)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,40)",
      transformOrigin: "0 0",
      width: 40,
      height: 40,
      borderRadius: "50%",
      backgroundColor: "rgb(64,143,236)"
    }
  }));
  const __impls = {
    // figma: size=sm, value=100%
    "size=sm|value=100%25": __body0,
    // figma: size=sm, value=75%
    "size=sm|value=75%25": __body0,
    // figma: size=sm, value=50%
    "size=sm|value=50%25": __body0,
    // figma: size=sm, value=25%
    "size=sm|value=25%25": __body0,
    // figma: size=sm, value=0
    "size=sm|value=0": __body0,
    // figma: size=md, value=100%
    "size=md|value=100%25": __body1,
    // figma: size=md, value=75%
    "size=md|value=75%25": __body1,
    // figma: size=md, value=50%
    "size=md|value=50%25": __body1,
    // figma: size=md, value=25%
    "size=md|value=25%25": __body1,
    // figma: size=md, value=0
    "size=md|value=0": __body1,
    // figma: size=lg, value=100%
    "size=lg|value=100%25": __body2,
    // figma: size=lg, value=75%
    "size=lg|value=75%25": __body2,
    // figma: size=lg, value=50%
    "size=lg|value=50%25": __body2,
    // figma: size=lg, value=25%
    "size=lg|value=25%25": __body2,
    // figma: size=lg, value=0
    "size=lg|value=0": __body2
  };
  return (__impls[__vkey_Spinning(props)] ?? __body2)();
}

// figma node: 820:27974 Edit
function Edit2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 36,
      height: 36,
      overflow: "hidden",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 32.143,
    height: 32.143,
    viewBox: "0 0 32.143 32.143",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.928,
      top: 1.925,
      width: 32.143,
      height: 32.143
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.854 25.714 C 5.934 25.714 6.015 25.706 6.095 25.694 L 12.853 24.509 C 12.933 24.493 13.01 24.457 13.066 24.396 L 30.098 7.365 C 30.135 7.328 30.165 7.283 30.185 7.235 C 30.205 7.186 30.215 7.134 30.215 7.081 C 30.215 7.029 30.205 6.977 30.185 6.928 C 30.165 6.88 30.135 6.835 30.098 6.798 L 23.42 0.117 C 23.344 0.04 23.243 0 23.135 0 C 23.026 0 22.926 0.04 22.85 0.117 L 5.818 17.148 C 5.758 17.208 5.721 17.281 5.705 17.361 L 4.52 24.119 C 4.481 24.334 4.495 24.556 4.561 24.765 C 4.627 24.973 4.742 25.163 4.898 25.317 C 5.163 25.574 5.496 25.714 5.854 25.714 L 5.854 25.714 Z M 8.562 18.707 L 23.135 4.138 L 26.08 7.083 L 11.507 21.652 L 7.935 22.283 L 8.562 18.707 L 8.562 18.707 Z M 30.857 29.089 L 1.286 29.089 C 0.575 29.089 0 29.664 0 30.375 L 0 31.821 C 0 31.998 0.145 32.143 0.321 32.143 L 31.821 32.143 C 31.998 32.143 32.143 31.998 32.143 31.821 L 32.143 30.375 C 32.143 29.664 31.568 29.089 30.857 29.089 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 820:27978 text/text (10 variants)
const __venc_TextText = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_TextText = p => "hierarchy=" + __venc_TextText(p.hierarchy) + '|' + "bullet=" + __venc_TextText(p.bullet) + '|' + "editable=" + __venc_TextText(p.editable) + '|' + "copyable=" + __venc_TextText(p.copyable);
function TextText(_p = {}) {
  const props = {
    ..._p,
    hierarchy: _p.hierarchy ?? "primary",
    bullet: _p.bullet ?? true,
    editable: _p.editable ?? true,
    copyable: _p.copyable ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 4px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "￮"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Principles"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 4px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "￮"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Principles"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 4px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "￮"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.45)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Principles"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Text"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Text"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.45)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Text"));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is an editable text."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Edit2, {
    style: {
      transform: "scale(0.444, 0.444)",
      transformOrigin: "0 0"
    }
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.45)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is an editable text."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Edit2, {
    style: {
      transform: "scale(0.444, 0.444)",
      transformOrigin: "0 0"
    }
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is a copyable text."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 14,
    viewBox: "0 0 11 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.5,
      top: 0,
      width: 11,
      height: 14,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.5 0 L 2.125 0 C 2.056 0 2 0.056 2 0.125 L 2 1 C 2 1.069 2.056 1.125 2.125 1.125 L 9.875 1.125 L 9.875 11.875 C 9.875 11.944 9.931 12 10 12 L 10.875 12 C 10.944 12 11 11.944 11 11.875 L 11 0.5 C 11 0.223 10.777 0 10.5 0 Z M 8.5 2 L 0.5 2 C 0.223 2 0 2.223 0 2.5 L 0 10.792 C 0 10.925 0.053 11.052 0.147 11.145 L 2.855 13.853 C 2.889 13.887 2.928 13.916 2.97 13.939 L 2.97 13.969 L 3.036 13.969 C 3.091 13.989 3.148 14 3.208 14 L 8.5 14 C 8.777 14 9 13.777 9 13.5 L 9 2.5 C 9 2.223 8.777 2 8.5 2 Z M 2.969 12.378 L 1.623 11.031 L 2.969 11.031 L 2.969 12.378 Z M 7.875 12.875 L 3.969 12.875 L 3.969 10.656 C 3.969 10.311 3.689 10.031 3.344 10.031 L 1.125 10.031 L 1.125 3.125 L 7.875 3.125 L 7.875 12.875 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.45)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is a copyable text."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 14,
    viewBox: "0 0 11 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.5,
      top: 0,
      width: 11,
      height: 14,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.5 0 L 2.125 0 C 2.056 0 2 0.056 2 0.125 L 2 1 C 2 1.069 2.056 1.125 2.125 1.125 L 9.875 1.125 L 9.875 11.875 C 9.875 11.944 9.931 12 10 12 L 10.875 12 C 10.944 12 11 11.944 11 11.875 L 11 0.5 C 11 0.223 10.777 0 10.5 0 Z M 8.5 2 L 0.5 2 C 0.223 2 0 2.223 0 2.5 L 0 10.792 C 0 10.925 0.053 11.052 0.147 11.145 L 2.855 13.853 C 2.889 13.887 2.928 13.916 2.97 13.939 L 2.97 13.969 L 3.036 13.969 C 3.091 13.989 3.148 14 3.208 14 L 8.5 14 C 8.777 14 9 13.777 9 13.5 L 9 2.5 C 9 2.223 8.777 2 8.5 2 Z M 2.969 12.378 L 1.623 11.031 L 2.969 11.031 L 2.969 12.378 Z M 7.875 12.875 L 3.969 12.875 L 3.969 10.656 C 3.969 10.311 3.689 10.031 3.344 10.031 L 1.125 10.031 L 1.125 3.125 L 7.875 3.125 L 7.875 12.875 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Hierarchy=link, Bullet=true, Editable=false, Copyable=false
    "hierarchy=link|bullet=true|editable=false|copyable=false": __body0,
    // figma: Hierarchy=primary, Bullet=true, Editable=false, Copyable=false
    "hierarchy=primary|bullet=true|editable=false|copyable=false": __body1,
    // figma: Hierarchy=secondary, Bullet=true, Editable=false, Copyable=false
    "hierarchy=secondary|bullet=true|editable=false|copyable=false": __body2,
    // figma: Hierarchy=primary, Bullet=false, Editable=false, Copyable=false
    "hierarchy=primary|bullet=false|editable=false|copyable=false": __body3,
    // figma: Hierarchy=link, Bullet=false, Editable=false, Copyable=false
    "hierarchy=link|bullet=false|editable=false|copyable=false": __body4,
    // figma: Hierarchy=secondary, Bullet=false, Editable=false, Copyable=false
    "hierarchy=secondary|bullet=false|editable=false|copyable=false": __body5,
    // figma: Hierarchy=primary, Bullet=false, Editable=true, Copyable=false
    "hierarchy=primary|bullet=false|editable=true|copyable=false": __body6,
    // figma: Hierarchy=secondary, Bullet=false, Editable=true, Copyable=false
    "hierarchy=secondary|bullet=false|editable=true|copyable=false": __body7,
    // figma: Hierarchy=primary, Bullet=false, Editable=false, Copyable=true
    "hierarchy=primary|bullet=false|editable=false|copyable=true": __body8,
    // figma: Hierarchy=secondary, Bullet=false, Editable=false, Copyable=true
    "hierarchy=secondary|bullet=false|editable=false|copyable=true": __body9
  };
  return (__impls[__vkey_TextText(props)] ?? __body0)();
}

// figma node: 1668:46071 popconfirm (12 variants)
const __venc_Popconfirm = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Popconfirm = p => "placement=" + __venc_Popconfirm(p.placement);
function Popconfirm(_p = {}) {
  const props = {
    ..._p,
    placement: _p.placement ?? "right bottom"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 260,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 23px 0px 23px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      height: 7.071,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.142,
    height: 7.071,
    viewBox: "0 0 14.142 7.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,7.142,0)",
      transformOrigin: "0 0",
      width: 14.142,
      height: 7.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.142 7.071 L 7.071 0 L 0 7.071 L 14.142 7.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "warning_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Are you sure delete this file?",
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(160,163,189)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, "H\u1EE7y"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(62,102,251)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "OK")))))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 260,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      height: 7.071,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.142,
    height: 7.071,
    viewBox: "0 0 14.142 7.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,7.142,0)",
      transformOrigin: "0 0",
      width: 14.142,
      height: 7.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.142 7.071 L 7.071 0 L 0 7.071 L 14.142 7.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "warning_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Are you sure delete this file?",
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(160,163,189)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, "H\u1EE7y"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(62,102,251)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "OK")))))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 260,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 23px 0px 23px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      height: 7.071,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.142,
    height: 7.071,
    viewBox: "0 0 14.142 7.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,7.142,0)",
      transformOrigin: "0 0",
      width: 14.142,
      height: 7.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.142 7.071 L 7.071 0 L 0 7.071 L 14.142 7.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "warning_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Are you sure delete this file?",
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(160,163,189)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, "H\u1EE7y"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(62,102,251)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "OK")))))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 260,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "warning_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Are you sure delete this file?",
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(160,163,189)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, "H\u1EE7y"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(62,102,251)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "OK")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 0px 23px 0px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,-1,0,0)",
      width: 8,
      height: 0.001,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.142,
    height: 7.071,
    viewBox: "0 0 14.142 7.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,1,0,1,-7)",
      transformOrigin: "0 0",
      width: 14.142,
      height: 7.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.142 7.071 L 7.071 0 L 0 7.071 L 14.142 7.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 260,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 0px 23px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,-1,0,0)",
      width: 8,
      height: 0.001,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.142,
    height: 7.071,
    viewBox: "0 0 14.142 7.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,7.071,-7)",
      transformOrigin: "0 0",
      width: 14.142,
      height: 7.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.142 7.071 L 7.071 0 L 0 7.071 L 14.142 7.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "warning_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Are you sure delete this file?",
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(160,163,189)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, "H\u1EE7y"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(62,102,251)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "OK")))))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 260,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "warning_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Are you sure delete this file?",
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(160,163,189)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, "H\u1EE7y"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(62,102,251)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "OK")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,-1,0,0)",
      width: 8,
      height: 0.001,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.142,
    height: 7.071,
    viewBox: "0 0 14.142 7.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,1,0,1,-7)",
      transformOrigin: "0 0",
      width: 14.142,
      height: 7.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.142 7.071 L 7.071 0 L 0 7.071 L 14.142 7.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 260,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,-1,0,0)",
      width: 8,
      height: 0.001,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.142,
    height: 7.071,
    viewBox: "0 0 14.142 7.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,7.071,-7)",
      transformOrigin: "0 0",
      width: 14.142,
      height: 7.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.142 7.071 L 7.071 0 L 0 7.071 L 14.142 7.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "warning_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Are you sure delete this file?",
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(160,163,189)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, "H\u1EE7y"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(62,102,251)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "OK")))))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 260,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "warning_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Are you sure delete this file?",
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(160,163,189)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, "H\u1EE7y"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(62,102,251)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "OK"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "23px 0px 23px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,-1,0,0)",
      width: 8,
      height: 0.001,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.142,
    height: 7.071,
    viewBox: "0 0 14.142 7.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,1,0,1,-7)",
      transformOrigin: "0 0",
      width: 14.142,
      height: 7.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.142 7.071 L 7.071 0 L 0 7.071 L 14.142 7.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 260,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "23px 0px 23px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,-1,0,0)",
      width: 8,
      height: 0.001,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.142,
    height: 7.071,
    viewBox: "0 0 14.142 7.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,7.071,-7)",
      transformOrigin: "0 0",
      width: 14.142,
      height: 7.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.142 7.071 L 7.071 0 L 0 7.071 L 14.142 7.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "warning_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Are you sure delete this file?",
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(160,163,189)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, "H\u1EE7y"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(62,102,251)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "OK")))))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 260,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "warning_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Are you sure delete this file?",
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(160,163,189)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, "H\u1EE7y"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(62,102,251)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "OK")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 23px 0px 23px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      height: 7.071,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.142,
    height: 7.071,
    viewBox: "0 0 14.142 7.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,7.142,7.071)",
      transformOrigin: "0 0",
      width: 14.142,
      height: 7.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.142 7.071 L 7.071 0 L 0 7.071 L 14.142 7.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 260,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "warning_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Are you sure delete this file?",
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(160,163,189)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, "H\u1EE7y"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(62,102,251)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "OK")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      height: 7.071,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.142,
    height: 7.071,
    viewBox: "0 0 14.142 7.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,7.142,7.071)",
      transformOrigin: "0 0",
      width: 14.142,
      height: 7.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.142 7.071 L 7.071 0 L 0 7.071 L 14.142 7.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 260,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconAlert, {
    property1: "warning_small",
    property2: "",
    property3: ""
  })), /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Are you sure delete this file?",
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(160,163,189)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, "H\u1EE7y"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(62,102,251)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.250px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "OK")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 23px 0px 23px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      height: 7.071,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.142,
    height: 7.071,
    viewBox: "0 0 14.142 7.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,7.142,7.071)",
      transformOrigin: "0 0",
      width: 14.142,
      height: 7.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.142 7.071 L 7.071 0 L 0 7.071 L 14.142 7.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Placement=bottom right
    "placement=bottom right": __body0,
    // figma: Placement=bottom
    "placement=bottom": __body1,
    // figma: Placement=bottom left
    "placement=bottom left": __body2,
    // figma: Placement=left bottom
    "placement=left bottom": __body3,
    // figma: Placement=right bottom
    "placement=right bottom": __body4,
    // figma: Placement=left
    "placement=left": __body5,
    // figma: Placement=right
    "placement=right": __body6,
    // figma: Placement=left top
    "placement=left top": __body7,
    // figma: Placement=right top
    "placement=right top": __body8,
    // figma: Placement=top right
    "placement=top right": __body9,
    // figma: Placement=top
    "placement=top": __body10,
    // figma: Placement=top left
    "placement=top left": __body11
  };
  return (__impls[__vkey_Popconfirm(props)] ?? __body4)();
}

// Globals for scripts loaded after this file.
window.IconAlert = IconAlert;
window.Warning2 = Warning2;
window.Alert = Alert;
window.Alert3 = Alert3;
window.Spinning = Spinning;
window.Edit2 = Edit2;
window.TextText = TextText;
window.Popconfirm = Popconfirm;