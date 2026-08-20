// Components bundle — 9 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 37144:1925 [M]Checkbox (6 variants)
const __venc_MCheckbox = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_MCheckbox = p => "checked=" + __venc_MCheckbox(p.checked) + '|' + "indeterminate=" + __venc_MCheckbox(p.indeterminate) + '|' + "disable=" + __venc_MCheckbox(p.disable) + '|' + "hovering=" + __venc_MCheckbox(p.hovering);
function MCheckbox(_p = {}) {
  const props = {
    ..._p,
    checked: _p.checked ?? false,
    indeterminate: _p.indeterminate ?? false,
    disable: _p.disable ?? false,
    hovering: _p.hovering ?? false
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 2,
      backgroundColor: "var(--color-white-100)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "var(--colors-background-page)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-primary-default)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--colors-text-tertiary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Label"));
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
      borderRadius: 2,
      backgroundColor: "var(--color-white-100)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "var(--color-white-100)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-primary-default)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--colors-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Label"));
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
      color: "var(--color-white-100)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 2,
      backgroundColor: "var(--color-white-100)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "var(--color-white-100)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-primary-default)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px var(--colors-icon-brand-default)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 7.836,
    height: 5.622,
    viewBox: "0 0 7.836 5.622",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.082,
      top: 7,
      width: 7.836,
      height: 5.622
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.258 5.609 L 3.245 5.622 L 0 2.376 L 1.057 1.32 L 3.258 3.521 L 6.78 0 L 7.836 1.057 L 3.271 5.622 L 3.258 5.609 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--colors-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Label"));
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
      color: "var(--colors-text-tertiary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 2,
      backgroundColor: "var(--color-white-100)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "var(--colors-background-page)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-primary-default)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 10.624,
    height: 7.622,
    viewBox: "0 0 10.624 7.622",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.688,
      top: 5,
      width: 10.624,
      height: 7.622
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.417 7.604 L 4.4 7.622 L 0 3.222 L 1.433 1.789 L 4.418 4.774 L 9.192 0 L 10.624 1.433 L 4.435 7.622 L 4.417 7.604 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--colors-text-tertiary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Label"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
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
      borderRadius: 2,
      backgroundColor: "var(--color-white-100)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
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
      borderRadius: 2,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "var(--color-white-100)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-primary-default)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8,
      height: 8,
      backgroundColor: "var(--colors-icon-brand-default)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--colors-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Label"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--color-white-100)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 2,
      backgroundColor: "var(--color-white-100)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "var(--colors-icon-brand-default)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -4,
      top: -4,
      width: 24,
      height: 24,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgba(20,30,210,0)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 10.624,
    height: 7.622,
    viewBox: "0 0 10.624 7.622",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.688,
      top: 5,
      width: 10.624,
      height: 7.622
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.417 7.604 L 4.4 7.622 L 0 3.222 L 1.433 1.789 L 4.418 4.774 L 9.192 0 L 10.624 1.433 L 4.435 7.622 L 4.417 7.604 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--colors-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Label"));
  const __impls = {
    // figma: Checked=false, Indeterminate=false, Disable=true, Hovering=false
    "checked=false|indeterminate=false|disable=true|hovering=false": __body0,
    // figma: Checked=false, Indeterminate=false, Disable=false, Hovering=false
    "checked=false|indeterminate=false|disable=false|hovering=false": __body1,
    // figma: Checked=false, Indeterminate=false, Disable=false, Hovering=true
    "checked=false|indeterminate=false|disable=false|hovering=true": __body2,
    // figma: Checked=true, Indeterminate=false, Disable=true, Hovering=false
    "checked=true|indeterminate=false|disable=true|hovering=false": __body3,
    // figma: Checked=false, Indeterminate=true, Disable=false, Hovering=false
    "checked=false|indeterminate=true|disable=false|hovering=false": __body4,
    // figma: Checked=true, Indeterminate=false, Disable=false, Hovering=false
    "checked=true|indeterminate=false|disable=false|hovering=false": __body5
  };
  return (__impls[__vkey_MCheckbox(props)] ?? __body1)();
}

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

// figma node: 820:30334 Check
function Check3(_p = {}) {
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
    width: 32.787,
    height: 25.869,
    viewBox: "0 0 32.787 25.869",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.608,
      top: 5.063,
      width: 32.787,
      height: 25.869
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32.465 0 L 29.656 0 C 29.263 0 28.889 0.181 28.648 0.49 L 12.082 21.475 L 4.139 11.411 C 4.019 11.258 3.866 11.135 3.691 11.05 C 3.516 10.965 3.325 10.921 3.131 10.921 L 0.322 10.921 C 0.053 10.921 -0.096 11.23 0.069 11.439 L 11.074 25.381 C 11.588 26.032 12.577 26.032 13.095 25.381 L 32.718 0.514 C 32.883 0.309 32.734 0 32.465 0 L 32.465 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 842:30226 checkbox (12 variants)
const __venc_Checkbox2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Checkbox2 = p => "checked=" + __venc_Checkbox2(p.checked) + '|' + "indeterminate=" + __venc_Checkbox2(p.indeterminate) + '|' + "disable=" + __venc_Checkbox2(p.disable) + '|' + "hovering=" + __venc_Checkbox2(p.hovering) + '|' + "label=" + __venc_Checkbox2(p.label);
function Checkbox2(_p = {}) {
  const props = {
    ..._p,
    checked: _p.checked ?? true,
    indeterminate: _p.indeterminate ?? true,
    disable: _p.disable ?? true,
    hovering: _p.hovering ?? true,
    label: _p.label ?? false
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Label"));
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
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      flexShrink: 0
    }
  })));
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
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Label"));
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
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      flexShrink: 0
    }
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
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
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(24,144,255)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 7.836,
    height: 5.622,
    viewBox: "0 0 7.836 5.622",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.082,
      top: 7,
      width: 7.836,
      height: 5.622
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.258 5.609 L 3.245 5.622 L 0 2.376 L 1.057 1.32 L 3.258 3.521 L 6.78 0 L 7.836 1.057 L 3.271 5.622 L 3.258 5.609 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Label"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
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
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(24,144,255)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 7.836,
    height: 5.622,
    viewBox: "0 0 7.836 5.622",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.082,
      top: 7,
      width: 7.836,
      height: 5.622
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.258 5.609 L 3.245 5.622 L 0 2.376 L 1.057 1.32 L 3.258 3.521 L 6.78 0 L 7.836 1.057 L 3.271 5.622 L 3.258 5.609 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
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
      color: "rgba(0,0,0,0.25)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 10.624,
    height: 7.622,
    viewBox: "0 0 10.624 7.622",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.688,
      top: 5,
      width: 10.624,
      height: 7.622
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.417 7.604 L 4.4 7.622 L 0 3.222 L 1.433 1.789 L 4.418 4.774 L 9.192 0 L 10.624 1.433 L 4.435 7.622 L 4.417 7.604 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Label"));
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
      color: "rgba(0,0,0,0.25)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 10.624,
    height: 7.622,
    viewBox: "0 0 10.624 7.622",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.688,
      top: 5,
      width: 10.624,
      height: 7.622
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.417 7.604 L 4.4 7.622 L 0 3.222 L 1.433 1.789 L 4.418 4.774 L 9.192 0 L 10.624 1.433 L 4.435 7.622 L 4.417 7.604 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
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
      borderRadius: 2,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8,
      height: 8,
      backgroundColor: "rgb(24,144,255)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Label"));
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      overflow: "hidden",
      borderRadius: 2,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8,
      height: 8,
      backgroundColor: "rgb(24,144,255)"
    }
  }))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
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
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -4,
      top: -4,
      width: 24,
      height: 24,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgba(24,144,255,0)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 10.624,
    height: 7.622,
    viewBox: "0 0 10.624 7.622",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.688,
      top: 5,
      width: 10.624,
      height: 7.622
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.417 7.604 L 4.4 7.622 L 0 3.222 L 1.433 1.789 L 4.418 4.774 L 9.192 0 L 10.624 1.433 L 4.435 7.622 L 4.417 7.604 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Label"));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
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
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -4,
      top: -4,
      width: 24,
      height: 24,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgba(24,144,255,0)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 10.624,
    height: 7.622,
    viewBox: "0 0 10.624 7.622",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.688,
      top: 5,
      width: 10.624,
      height: 7.622
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.417 7.604 L 4.4 7.622 L 0 3.222 L 1.433 1.789 L 4.418 4.774 L 9.192 0 L 10.624 1.433 L 4.435 7.622 L 4.417 7.604 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Checked=false, Indeterminate=false, Disable=true, Hovering=false, Label=true
    "checked=false|indeterminate=false|disable=true|hovering=false|label=true": __body0,
    // figma: Checked=false, Indeterminate=false, Disable=true, Hovering=false, Label=false
    "checked=false|indeterminate=false|disable=true|hovering=false|label=false": __body1,
    // figma: Checked=false, Indeterminate=false, Disable=false, Hovering=false, Label=true
    "checked=false|indeterminate=false|disable=false|hovering=false|label=true": __body2,
    // figma: Checked=false, Indeterminate=false, Disable=false, Hovering=false, Label=false
    "checked=false|indeterminate=false|disable=false|hovering=false|label=false": __body3,
    // figma: Checked=false, Indeterminate=false, Disable=false, Hovering=true, Label=true
    "checked=false|indeterminate=false|disable=false|hovering=true|label=true": __body4,
    // figma: Checked=false, Indeterminate=false, Disable=false, Hovering=true, Label=false
    "checked=false|indeterminate=false|disable=false|hovering=true|label=false": __body5,
    // figma: Checked=true, Indeterminate=false, Disable=true, Hovering=false, Label=true
    "checked=true|indeterminate=false|disable=true|hovering=false|label=true": __body6,
    // figma: Checked=true, Indeterminate=false, Disable=true, Hovering=false, Label=false
    "checked=true|indeterminate=false|disable=true|hovering=false|label=false": __body7,
    // figma: Checked=false, Indeterminate=true, Disable=false, Hovering=false, Label=true
    "checked=false|indeterminate=true|disable=false|hovering=false|label=true": __body8,
    // figma: Checked=false, Indeterminate=true, Disable=false, Hovering=false, Label=false
    "checked=false|indeterminate=true|disable=false|hovering=false|label=false": __body9,
    // figma: Checked=true, Indeterminate=false, Disable=false, Hovering=false, Label=true
    "checked=true|indeterminate=false|disable=false|hovering=false|label=true": __body10,
    // figma: Checked=true, Indeterminate=false, Disable=false, Hovering=false, Label=false
    "checked=true|indeterminate=false|disable=false|hovering=false|label=false": __body11
  };
  return (__impls[__vkey_Checkbox2(props)] ?? __body0)();
}

// figma node: 842:30153 Right
function Right2(_p = {}) {
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
    width: 19.125,
    height: 30.456,
    viewBox: "0 0 19.125 30.456",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.563,
      top: 2.773,
      width: 19.125,
      height: 30.456
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.631 14.215 L 0.518 0.069 C 0.471 0.031 0.414 0.008 0.354 0.002 C 0.294 -0.005 0.234 0.006 0.18 0.032 C 0.126 0.059 0.08 0.1 0.048 0.151 C 0.016 0.202 0 0.262 0 0.322 L 0 3.428 C 0 3.624 0.092 3.813 0.245 3.934 L 14.709 15.228 L 0.245 26.522 C 0.088 26.643 0 26.832 0 27.028 L 0 30.134 C 0 30.403 0.309 30.552 0.518 30.387 L 18.631 16.24 C 18.785 16.12 18.909 15.967 18.995 15.791 C 19.081 15.616 19.125 15.423 19.125 15.228 C 19.125 15.033 19.081 14.84 18.995 14.665 C 18.909 14.489 18.785 14.336 18.631 14.215 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 842:30285 User
function User2(_p = {}) {
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
    width: 30.214,
    height: 31.982,
    viewBox: "0 0 30.214 31.982",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.892,
      top: 2.004,
      width: 30.214,
      height: 31.982
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.029 26.1 C 28.271 24.305 27.171 22.674 25.791 21.299 C 24.414 19.919 22.784 18.82 20.989 18.06 C 20.973 18.052 20.957 18.048 20.941 18.04 C 23.444 16.232 25.072 13.287 25.072 9.964 C 25.072 4.46 20.612 0 15.107 0 C 9.603 0 5.143 4.46 5.143 9.964 C 5.143 13.287 6.77 16.232 9.273 18.044 C 9.257 18.052 9.241 18.056 9.225 18.064 C 7.425 18.824 5.81 19.913 4.424 21.303 C 3.044 22.679 1.945 24.31 1.185 26.104 C 0.439 27.861 0.037 29.744 0 31.653 C -0.001 31.696 0.007 31.738 0.022 31.778 C 0.038 31.818 0.061 31.854 0.091 31.885 C 0.121 31.916 0.157 31.94 0.197 31.957 C 0.236 31.974 0.279 31.982 0.322 31.982 L 2.732 31.982 C 2.909 31.982 3.05 31.842 3.054 31.669 C 3.134 28.567 4.38 25.662 6.581 23.46 C 8.859 21.182 11.885 19.929 15.107 19.929 C 18.33 19.929 21.355 21.182 23.633 23.46 C 25.835 25.662 27.08 28.567 27.161 31.669 C 27.165 31.846 27.305 31.982 27.482 31.982 L 29.893 31.982 C 29.936 31.982 29.978 31.974 30.018 31.957 C 30.057 31.94 30.093 31.916 30.123 31.885 C 30.153 31.854 30.177 31.818 30.192 31.778 C 30.208 31.738 30.215 31.696 30.214 31.653 C 30.174 29.732 29.776 27.864 29.029 26.1 L 29.029 26.1 Z M 15.107 16.875 C 13.263 16.875 11.527 16.156 10.222 14.85 C 8.916 13.544 8.197 11.808 8.197 9.964 C 8.197 8.12 8.916 6.384 10.222 5.079 C 11.527 3.773 13.263 3.054 15.107 3.054 C 16.951 3.054 18.687 3.773 19.993 5.079 C 21.299 6.384 22.018 8.12 22.018 9.964 C 22.018 11.808 21.299 13.544 19.993 14.85 C 18.687 16.156 16.951 16.875 15.107 16.875 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 842:30288 _components/dropdown/menu-item (29 variants)
const __venc_ComponentsDropdownMenuItem = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ComponentsDropdownMenuItem = p => "icon=" + __venc_ComponentsDropdownMenuItem(p.icon) + '|' + "arrow=" + __venc_ComponentsDropdownMenuItem(p.arrow) + '|' + "hover=" + __venc_ComponentsDropdownMenuItem(p.hover) + '|' + "selected=" + __venc_ComponentsDropdownMenuItem(p.selected) + '|' + "danger=" + __venc_ComponentsDropdownMenuItem(p.danger) + '|' + "disabled=" + __venc_ComponentsDropdownMenuItem(p.disabled) + '|' + "checkable=" + __venc_ComponentsDropdownMenuItem(p.checkable) + '|' + "checked=" + __venc_ComponentsDropdownMenuItem(p.checked) + '|' + "multiSelect=" + __venc_ComponentsDropdownMenuItem(p.multiSelect);
function ComponentsDropdownMenuItem(_p = {}) {
  const props = {
    ..._p,
    icon: _p.icon ?? true,
    arrow: _p.arrow ?? true,
    hover: _p.hover ?? true,
    selected: _p.selected ?? true,
    danger: _p.danger ?? true,
    disabled: _p.disabled ?? true,
    checkable: _p.checkable ?? true,
    checked: _p.checked ?? true,
    multiSelect: _p.multiSelect ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
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
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Checkbox2, {
    style: {
      position: "relative",
      width: 91,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "menu item",
    checked: true,
    indeterminate: false,
    disable: true,
    hovering: false,
    label: true
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Checkbox2, {
    style: {
      position: "relative",
      width: 91,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "menu item",
    checked: false,
    indeterminate: false,
    disable: true,
    hovering: false,
    label: true
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -4,
      top: -4,
      width: 24,
      height: 24,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgba(24,144,255,0)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 10.624,
    height: 7.622,
    viewBox: "0 0 10.624 7.622",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.688,
      top: 5,
      width: 10.624,
      height: 7.622,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.417 7.604 L 4.4 7.622 L 0 3.222 L 1.433 1.789 L 4.418 4.774 L 9.192 0 L 10.624 1.433 L 4.435 7.622 L 4.417 7.604 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "menu item")));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Checkbox2, {
    style: {
      position: "relative",
      width: 91,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "menu item",
    checked: false,
    indeterminate: false,
    disable: false,
    hovering: false,
    label: true
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,77,79)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(User2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item")));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,77,79)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(230,247,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -4,
      top: -4,
      width: 24,
      height: 24,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgba(24,144,255,0)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 10.624,
    height: 7.622,
    viewBox: "0 0 10.624 7.622",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.688,
      top: 5,
      width: 10.624,
      height: 7.622,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.417 7.604 L 4.4 7.622 L 0 3.222 L 1.433 1.789 L 4.418 4.774 L 9.192 0 L 10.624 1.433 L 4.435 7.622 L 4.417 7.604 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "menu item")));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Checkbox2, {
    style: {
      position: "relative",
      width: 91,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "menu item",
    checked: false,
    indeterminate: false,
    disable: false,
    hovering: false,
    label: true
  }));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(User2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,77,79)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item")));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
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
      color: "rgb(255,77,79)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item"));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(User2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Right2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      padding: "5px 12px 5px 12px",
      justifyContent: "space-between",
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Right2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(User2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item")));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item"));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(230,247,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(User2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Right2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(230,247,255)",
      display: "flex",
      flexDirection: "row",
      padding: "5px 12px 5px 12px",
      justifyContent: "space-between",
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Right2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(230,247,255)",
      display: "flex",
      flexDirection: "row",
      padding: "5px 12px 5px 12px",
      justifyContent: "space-between",
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Check3, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(230,247,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(User2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item")));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(230,247,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item"));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(User2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "menu item")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Right2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      padding: "5px 12px 5px 12px",
      justifyContent: "space-between",
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
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Right2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(User2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "menu item")));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
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
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item"));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(User2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "menu item")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Right2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      padding: "5px 12px 5px 12px",
      justifyContent: "space-between",
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
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "menu item"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Right2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(User2, {
    style: {
      transform: "scale(0.333, 0.333)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "menu item")));
  const __impls = {
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mu
    "icon=false|arrow=false|hover=false|selected=false|danger=false|disabled=false|checkable=false|checked=false|multiSelect=true": __body0,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=true, Checkable=true, ↳ Checked=true, Multi
    "icon=false|arrow=false|hover=false|selected=false|danger=false|disabled=true|checkable=true|checked=true|multiSelect=false": __body1,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=true, Checkable=true, ↳ Checked=false, Mult
    "icon=false|arrow=false|hover=false|selected=false|danger=false|disabled=true|checkable=true|checked=false|multiSelect=false": __body2,
    // figma: Icon=false, Arrow=false, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=true, ↳ Checked=true, Multi
    "icon=false|arrow=false|hover=true|selected=false|danger=false|disabled=false|checkable=true|checked=true|multiSelect=false": __body3,
    // figma: Icon=false, Arrow=false, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=true, ↳ Checked=false, Mult
    "icon=false|arrow=false|hover=true|selected=false|danger=false|disabled=false|checkable=true|checked=false|multiSelect=false": __body4,
    // figma: Icon=true, Arrow=false, Hover=true, Selected=false, Danger=true, Disabled=false, Checkable=false, ↳ Checked=false, Multi
    "icon=true|arrow=false|hover=true|selected=false|danger=true|disabled=false|checkable=false|checked=false|multiSelect=false": __body5,
    // figma: Icon=false, Arrow=false, Hover=true, Selected=false, Danger=true, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "icon=false|arrow=false|hover=true|selected=false|danger=true|disabled=false|checkable=false|checked=false|multiSelect=false": __body6,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=true, ↳ Checked=true, Mult
    "icon=false|arrow=false|hover=false|selected=false|danger=false|disabled=false|checkable=true|checked=true|multiSelect=false": __body7,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=true, ↳ Checked=false, Mul
    "icon=false|arrow=false|hover=false|selected=false|danger=false|disabled=false|checkable=true|checked=false|multiSelect=false": __body8,
    // figma: Icon=true, Arrow=false, Hover=false, Selected=false, Danger=true, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "icon=true|arrow=false|hover=false|selected=false|danger=true|disabled=false|checkable=false|checked=false|multiSelect=false": __body9,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=true, Disabled=false, Checkable=false, ↳ Checked=false, Mul
    "icon=false|arrow=false|hover=false|selected=false|danger=true|disabled=false|checkable=false|checked=false|multiSelect=false": __body10,
    // figma: Icon=true, Arrow=true, Hover=false, Selected=false, Danger=false, Disabled=true, Checkable=false, ↳ Checked=false, Multi
    "icon=true|arrow=true|hover=false|selected=false|danger=false|disabled=true|checkable=false|checked=false|multiSelect=false": __body11,
    // figma: Icon=false, Arrow=true, Hover=false, Selected=false, Danger=false, Disabled=true, Checkable=false, ↳ Checked=false, Mult
    "icon=false|arrow=true|hover=false|selected=false|danger=false|disabled=true|checkable=false|checked=false|multiSelect=false": __body12,
    // figma: Icon=true, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=true, Checkable=false, ↳ Checked=false, Mult
    "icon=true|arrow=false|hover=false|selected=false|danger=false|disabled=true|checkable=false|checked=false|multiSelect=false": __body13,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=true, Checkable=false, ↳ Checked=false, Mul
    "icon=false|arrow=false|hover=false|selected=false|danger=false|disabled=true|checkable=false|checked=false|multiSelect=false": __body14,
    // figma: Icon=true, Arrow=true, Hover=false, Selected=true, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Multi
    "icon=true|arrow=true|hover=false|selected=true|danger=false|disabled=false|checkable=false|checked=false|multiSelect=false": __body15,
    // figma: Icon=false, Arrow=true, Hover=false, Selected=true, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "icon=false|arrow=true|hover=false|selected=true|danger=false|disabled=false|checkable=false|checked=false|multiSelect=false": __body16,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=true, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false,Mult
    "icon=false|arrow=false|hover=false|selected=true|danger=false|disabled=false|checkable=false|checked=false|multiSelect=true": __body17,
    // figma: Icon=true, Arrow=false, Hover=false, Selected=true, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "icon=true|arrow=false|hover=false|selected=true|danger=false|disabled=false|checkable=false|checked=false|multiSelect=false": __body18,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=true, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mul
    "icon=false|arrow=false|hover=false|selected=true|danger=false|disabled=false|checkable=false|checked=false|multiSelect=false": __body19,
    // figma: Icon=true, Arrow=true, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Multi
    "icon=true|arrow=true|hover=true|selected=false|danger=false|disabled=false|checkable=false|checked=false|multiSelect=false": __body20,
    // figma: Icon=false, Arrow=true, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "icon=false|arrow=true|hover=true|selected=false|danger=false|disabled=false|checkable=false|checked=false|multiSelect=false": __body21,
    // figma: Icon=true, Arrow=false, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "icon=true|arrow=false|hover=true|selected=false|danger=false|disabled=false|checkable=false|checked=false|multiSelect=false": __body22,
    // figma: Icon=false, Arrow=false, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mul
    "icon=false|arrow=false|hover=true|selected=false|danger=false|disabled=false|checkable=false|checked=false|multiSelect=false": __body23,
    // figma: Icon=false, Arrow=false, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false,Mult
    "icon=false|arrow=false|hover=true|selected=false|danger=false|disabled=false|checkable=false|checked=false|multiSelect=true": __body23,
    // figma: Icon=true, Arrow=true, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "icon=true|arrow=true|hover=false|selected=false|danger=false|disabled=false|checkable=false|checked=false|multiSelect=false": __body24,
    // figma: Icon=false, Arrow=true, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mul
    "icon=false|arrow=true|hover=false|selected=false|danger=false|disabled=false|checkable=false|checked=false|multiSelect=false": __body25,
    // figma: Icon=true, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mul
    "icon=true|arrow=false|hover=false|selected=false|danger=false|disabled=false|checkable=false|checked=false|multiSelect=false": __body26,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mu
    "icon=false|arrow=false|hover=false|selected=false|danger=false|disabled=false|checkable=false|checked=false|multiSelect=false": __body0
  };
  return (__impls[__vkey_ComponentsDropdownMenuItem(props)] ?? __body0)();
}

// Globals for scripts loaded after this file.
window.MCheckbox = MCheckbox;
window.IconAlert = IconAlert;
window.Warning2 = Warning2;
window.Alert = Alert;
window.Check3 = Check3;
window.Checkbox2 = Checkbox2;
window.Right2 = Right2;
window.User2 = User2;
window.ComponentsDropdownMenuItem = ComponentsDropdownMenuItem;