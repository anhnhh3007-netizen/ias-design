// Components bundle — 4 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (tokens/colors.css, tokens/typography.css, tokens/spacing.css — fig-tokens.css / fig-typography.css removed 2026-08-25, never had any consumer).

// figma node: 24598:411852 Avatar (8 variants)
const __venc_Avatar = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Avatar = p => "type=" + __venc_Avatar(p.type) + '|' + "state=" + __venc_Avatar(p.state);
function Avatar(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "avatar",
    state: _p.state ?? "thank you 3000"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 150,
      height: 120,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.625,
    height: 2.959,
    viewBox: "0 0 2.625 2.959",
    fill: "none",
    style: {
      position: "absolute",
      left: 95.956,
      top: 70.971,
      width: 2.625,
      height: 2.959,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.369 2.959 C 2.251 2.959 2.134 2.901 2.075 2.783 C 1.548 1.432 0.14 0.61 0.14 0.552 C 0.023 0.493 -0.036 0.258 0.023 0.14 C 0.082 0.023 0.258 -0.036 0.433 0.023 C 0.492 0.082 2.017 0.963 2.603 2.489 C 2.662 2.666 2.603 2.783 2.427 2.842 C 2.427 2.901 2.427 2.959 2.369 2.959 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14.478,
      top: 40.743,
      width: 121.818,
      height: 73.212,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 61.152,
      top: 0,
      width: 60.666,
      height: 73.199,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.248,
      top: 0,
      width: 51.419,
      height: 73.199,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 51.419,
    height: 73.199,
    viewBox: "0 0 51.419 73.199",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 51.419,
      height: 73.199,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.715 38.531 C 25.057 64.84 3.947 51.92 0.428 61.61 C -2.328 69.244 16.613 60.788 20.777 64.957 C 25.468 69.655 23.005 73.061 27.403 73.061 C 30.042 73.061 52.384 74.412 51.211 68.657 C 50.918 67.248 52.15 43.464 50.684 29.37 C 49.687 19.916 39.366 -1.343 27.755 0.067 C 25.937 0.302 25.057 1.065 24.764 2.24 C 23.122 1.3 21.422 0.83 19.721 0.948 C 17.2 1.124 17.024 2.533 17.786 5.117 C 16.496 4.354 13.916 3.473 12.332 3.532 C 6.292 3.943 13.388 8.993 18.079 15.335 C 21.95 20.562 23.591 26.375 23.591 26.375 C 23.591 26.375 15.323 13.926 2.07 21.384 C -7.606 26.845 19.663 22.441 21.715 38.531 Z M 28.048 22.734 C 28.224 23.028 28.341 23.263 28.283 23.322 C 28.283 23.439 28.165 23.204 28.048 22.734 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.659,
    height: 27.312,
    viewBox: "0 0 16.659 27.312",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.074,
      top: 5.053,
      width: 16.659,
      height: 27.312,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.366 27.312 C 16.249 27.312 16.073 27.195 16.073 27.077 C 13.786 10.4 0.24 0.651 0.123 0.534 C 0.005 0.416 -0.053 0.24 0.064 0.123 C 0.181 0.005 0.357 -0.053 0.474 0.064 C 0.592 0.181 14.314 10.047 16.659 27.019 C 16.659 27.136 16.542 27.312 16.366 27.312 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.214,
    height: 28.504,
    viewBox: "0 0 19.214 28.504",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.096,
      top: 1.747,
      width: 19.214,
      height: 28.504,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.905 28.504 C 18.73 28.504 18.612 28.387 18.612 28.211 C 16.912 10.006 0.316 0.61 0.14 0.552 C 0.023 0.493 -0.036 0.317 0.023 0.14 C 0.082 0.023 0.258 -0.036 0.433 0.023 C 0.609 0.14 17.439 9.654 19.199 28.152 C 19.257 28.328 19.14 28.446 18.905 28.504 C 18.964 28.504 18.964 28.504 18.905 28.504 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.275,
    height: 3.993,
    viewBox: "0 0 6.275 3.993",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.419,
      top: 19.211,
      width: 6.275,
      height: 3.993,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.052 3.993 C 1.466 3.993 0.88 3.935 0.235 3.758 C 0.059 3.7 0 3.582 0 3.406 C 0.059 3.23 0.176 3.171 0.352 3.171 C 2.111 3.582 3.518 3.406 4.457 2.643 C 5.63 1.762 5.688 0.294 5.688 0.294 C 5.688 0.117 5.864 0 5.981 0 C 6.157 0 6.275 0.117 6.275 0.294 C 6.275 0.352 6.157 1.997 4.809 3.054 C 4.105 3.7 3.167 3.993 2.052 3.993 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.210,
    height: 3.304,
    viewBox: "0 0 1.210 3.304",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.884,
      top: 21.838,
      width: 1.21,
      height: 3.304,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.315 3.304 C 0.257 3.304 0.257 3.304 0.198 3.304 C 0.022 3.245 -0.037 3.069 0.022 2.951 C 0.374 1.836 0.608 0.309 0.608 0.25 C 0.608 0.074 0.784 -0.043 0.96 0.015 C 1.136 0.015 1.253 0.191 1.195 0.368 C 1.195 0.426 1.019 1.953 0.608 3.186 C 0.55 3.245 0.432 3.304 0.315 3.304 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.145,
    height: 3.812,
    viewBox: "0 0 5.145 3.812",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.99,
      top: 61.086,
      width: 5.145,
      height: 3.812,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.129 3.812 C 1.012 3.812 0.895 3.754 0.836 3.636 C 0.778 3.46 0.836 3.343 1.012 3.284 C 2.361 2.814 4.355 1.875 4.531 1.287 C 4.589 1.052 4.531 0.994 4.472 0.935 C 4.003 0.406 1.774 0.583 0.367 0.876 C 0.191 0.876 0.074 0.818 0.015 0.641 C -0.043 0.465 0.074 0.348 0.25 0.289 C 0.895 0.172 4.12 -0.416 4.941 0.524 C 5.117 0.7 5.234 0.994 5.058 1.464 C 4.707 2.462 1.774 3.578 1.188 3.812 C 1.188 3.754 1.129 3.812 1.129 3.812 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.366,
    height: 3.523,
    viewBox: "0 0 1.366 3.523",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.66,
      top: 22.793,
      width: 1.366,
      height: 3.523,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.298 3.523 C 0.24 3.523 0.181 3.523 0.123 3.465 C 0.005 3.347 -0.053 3.171 0.064 3.054 C 0.944 1.82 0.768 0.352 0.768 0.352 C 0.768 0.176 0.885 0.059 1.002 0 C 1.178 0 1.295 0.117 1.354 0.235 C 1.354 0.294 1.53 1.938 0.533 3.406 C 0.474 3.465 0.416 3.523 0.298 3.523 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.113,
    height: 4.116,
    viewBox: "0 0 5.113 4.116",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.417,
      top: 4.818,
      width: 5.113,
      height: 4.116,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.841 4.116 C 2.199 4.116 0.147 1.943 0.088 1.826 C -0.029 1.708 -0.029 1.532 0.088 1.415 C 0.205 1.297 0.381 1.297 0.498 1.415 C 1.026 2.002 2.727 3.529 3.841 3.529 C 4.134 3.529 4.369 3.411 4.545 3.235 C 4.545 3 3.782 1.708 2.785 0.475 C 2.668 0.358 2.727 0.181 2.844 0.064 C 2.961 -0.053 3.137 0.005 3.255 0.123 C 4.779 2.002 5.366 3.176 5.014 3.646 C 4.721 3.94 4.31 4.116 3.841 4.116 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.122,
    height: 4.351,
    viewBox: "0 0 6.122 4.351",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.288,
      top: 1.823,
      width: 6.122,
      height: 4.351,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.89 4.351 C 3.307 4.351 0.785 3.118 0.023 1.826 C -0.036 1.708 0.023 1.532 0.14 1.415 C 0.258 1.356 0.433 1.415 0.551 1.532 C 1.254 2.824 4.48 4.116 5.359 3.646 C 5.477 3.587 5.711 3.47 5.477 2.942 C 5.301 2.472 3.776 1.238 2.838 0.534 C 2.72 0.416 2.662 0.24 2.779 0.123 C 2.896 0.005 3.072 -0.053 3.19 0.064 C 3.6 0.358 5.711 1.943 6.004 2.765 C 6.356 3.764 5.828 4.116 5.594 4.233 C 5.418 4.292 5.183 4.351 4.89 4.351 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.067,
    height: 3.488,
    viewBox: "0 0 6.067 3.488",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.926,
      top: 1.042,
      width: 6.067,
      height: 3.488,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.048 3.488 C 3.641 3.488 1.002 1.726 0.123 1.08 C 0.005 0.963 -0.053 0.786 0.064 0.669 C 0.181 0.552 0.357 0.493 0.474 0.61 C 2.468 2.02 4.99 3.253 5.342 2.842 C 5.4 2.783 5.459 2.666 5.4 2.548 C 5.283 1.902 4.169 0.963 3.465 0.552 C 3.348 0.493 3.289 0.258 3.406 0.14 C 3.465 0.023 3.7 -0.036 3.817 0.023 C 4.052 0.14 5.869 1.374 6.045 2.431 C 6.104 2.724 6.045 2.959 5.869 3.194 C 5.576 3.429 5.342 3.488 5.048 3.488 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.289,
    height: 2.173,
    viewBox: "0 0 3.289 2.173",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.53,
      top: 16.51,
      width: 3.289,
      height: 2.173,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.645 2.173 C 0.528 2.173 0.41 2.173 0.293 2.173 C 0.117 2.173 0 1.997 0 1.879 C 0 1.703 0.176 1.586 0.293 1.586 C 2.346 1.762 2.697 0.294 2.697 0.235 C 2.756 0.059 2.873 0 3.049 0 C 3.225 0.059 3.284 0.176 3.284 0.352 C 3.343 0.411 2.932 2.173 0.645 2.173 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.289,
    height: 2.173,
    viewBox: "0 0 3.289 2.173",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.113,
      top: 18.682,
      width: 3.289,
      height: 2.173,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.645 2.173 C 0.528 2.173 0.41 2.173 0.293 2.173 C 0.117 2.173 0 1.997 0 1.879 C 0 1.703 0.176 1.586 0.293 1.586 C 2.346 1.762 2.697 0.294 2.697 0.235 C 2.756 0.059 2.873 0 3.049 0 C 3.225 0.059 3.284 0.176 3.284 0.352 C 3.343 0.352 2.873 2.173 0.645 2.173 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.289,
    height: 2.173,
    viewBox: "0 0 3.289 2.173",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.326,
      top: 14.161,
      width: 3.289,
      height: 2.173,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.645 2.173 C 0.528 2.173 0.41 2.173 0.293 2.173 C 0.117 2.173 0 1.997 0 1.879 C 0 1.703 0.176 1.586 0.293 1.586 C 2.346 1.762 2.697 0.294 2.697 0.235 C 2.756 0.059 2.873 0 3.049 0 C 3.225 0.059 3.284 0.176 3.284 0.352 C 3.343 0.411 2.932 2.173 0.645 2.173 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.284,
    height: 2.173,
    viewBox: "0 0 3.284 2.173",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.147,
      top: 16.51,
      width: 3.284,
      height: 2.173,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.645 2.173 C 0.528 2.173 0.41 2.173 0.293 2.173 C 0.117 2.173 0 1.997 0 1.879 C 0 1.703 0.176 1.586 0.293 1.586 C 2.346 1.762 2.697 0.294 2.697 0.235 C 2.756 0.059 2.873 0 3.049 0 C 3.225 0.059 3.284 0.176 3.284 0.352 C 3.284 0.411 2.873 2.173 0.645 2.173 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.284,
    height: 2.173,
    viewBox: "0 0 3.284 2.173",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.597,
      top: 12.81,
      width: 3.284,
      height: 2.173,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.645 2.173 C 0.528 2.173 0.41 2.173 0.293 2.173 C 0.117 2.173 0 1.997 0 1.879 C 0 1.703 0.176 1.586 0.293 1.586 C 2.346 1.762 2.697 0.294 2.697 0.235 C 2.756 0.059 2.873 0 3.049 0 C 3.225 0.059 3.284 0.176 3.284 0.352 C 3.284 0.352 2.873 2.173 0.645 2.173 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.284,
    height: 2.173,
    viewBox: "0 0 3.284 2.173",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.77,
      top: 15.159,
      width: 3.284,
      height: 2.173,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.645 2.173 C 0.528 2.173 0.41 2.173 0.293 2.173 C 0.117 2.173 0 1.997 0 1.879 C 0 1.703 0.176 1.586 0.293 1.586 C 2.346 1.762 2.697 0.294 2.697 0.235 C 2.756 0.059 2.873 0 3.049 0 C 3.225 0.059 3.284 0.176 3.284 0.352 C 3.284 0.352 2.873 2.173 0.645 2.173 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.077,
    height: 7.405,
    viewBox: "0 0 4.077 7.405",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.293,
      top: 26.076,
      width: 4.077,
      height: 7.405,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.817 7.405 C 3.758 7.405 3.758 7.346 3.817 7.405 C 3.582 7.346 3.524 7.228 3.524 7.052 C 3.7 6.054 1.53 2.472 0.064 0.475 C -0.053 0.358 0.005 0.181 0.123 0.064 C 0.24 -0.053 0.416 0.005 0.533 0.123 C 0.944 0.651 4.403 5.584 4.052 7.17 C 4.052 7.287 3.934 7.405 3.817 7.405 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.364,
    height: 4.126,
    viewBox: "0 0 1.364 4.126",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.125,
      top: 57.425,
      width: 1.364,
      height: 4.126,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.071 4.126 C 0.895 4.126 0.778 4.009 0.778 3.833 C 0.778 3.245 0.25 1.131 0.016 0.368 C -0.043 0.192 0.074 0.074 0.192 0.016 C 0.367 -0.043 0.485 0.074 0.543 0.192 C 0.602 0.309 1.364 3.011 1.364 3.774 C 1.364 4.009 1.247 4.126 1.071 4.126 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.181,
    height: 3.487,
    viewBox: "0 0 1.181 3.487",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.949,
      top: 58.241,
      width: 1.181,
      height: 3.487,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.902 3.487 L 0.843 3.487 C 0.667 3.428 0.608 3.311 0.608 3.134 C 0.726 2.606 0.315 1.197 0.022 0.374 C -0.037 0.198 0.022 0.081 0.198 0.022 C 0.374 -0.037 0.491 0.022 0.55 0.198 C 0.608 0.433 1.371 2.488 1.136 3.311 C 1.136 3.428 1.019 3.487 0.902 3.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 25.689,
      width: 25.519,
      height: 40.086,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.519,
    height: 40.086,
    viewBox: "0 0 25.519 40.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.519,
      height: 40.086,
      color: "rgb(255,26,18)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.351 4.386 C 1.351 4.386 9.619 -2.25 18.767 0.803 C 27.915 3.857 27.622 19.36 18.767 27.64 C 9.913 35.921 1.644 41.441 0.53 39.796 C -0.584 38.152 0.237 5.208 1.351 4.386 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.836,
    height: 2.883,
    viewBox: "0 0 10.836 2.883",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.078,
      top: 2.266,
      width: 10.836,
      height: 2.883,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.258 2.883 C 0.14 2.883 0.023 2.824 0.023 2.707 C -0.036 2.589 0.023 2.413 0.14 2.295 C 0.433 2.119 7.06 -1.287 10.696 0.534 C 10.813 0.592 10.872 0.769 10.813 0.945 C 10.754 1.062 10.578 1.121 10.402 1.062 C 7.06 -0.641 0.492 2.765 0.433 2.824 C 0.375 2.824 0.316 2.883 0.258 2.883 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 63.801,
      height: 73.212,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 51.432,
      height: 73.212,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 51.432,
    height: 73.212,
    viewBox: "0 0 51.432 73.212",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 51.432,
      height: 73.212,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 49.365 21.384 C 36.112 13.926 27.844 26.375 27.844 26.375 C 27.844 26.375 29.486 20.562 33.356 15.335 C 38.047 8.993 45.143 3.943 39.103 3.532 C 37.52 3.414 34.881 4.354 33.649 5.117 C 34.412 2.533 34.236 1.124 31.714 0.948 C 30.013 0.83 28.313 1.359 26.671 2.24 C 26.378 1.065 25.498 0.302 23.68 0.067 C 12.069 -1.343 1.748 19.916 0.752 29.37 C -0.714 43.464 0.458 67.248 0.224 68.657 C -0.949 74.471 21.452 73.061 24.032 73.061 C 28.43 73.061 25.967 69.655 30.659 64.957 C 34.763 60.847 53.763 69.244 51.007 61.61 C 47.489 51.92 26.378 64.84 29.72 38.531 C 31.714 22.441 59.041 26.845 49.365 21.384 Z M 23.152 23.322 C 23.152 23.263 23.211 23.028 23.387 22.734 C 23.27 23.204 23.152 23.439 23.152 23.322 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.659,
    height: 27.371,
    viewBox: "0 0 16.659 27.371",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.702,
      top: 4.994,
      width: 16.659,
      height: 27.371,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.293 27.371 C 0.117 27.371 0 27.195 0 27.019 C 2.346 10.047 16.068 0.181 16.185 0.064 C 16.302 -0.053 16.478 0.005 16.595 0.123 C 16.713 0.24 16.654 0.416 16.537 0.534 C 16.42 0.651 2.873 10.4 0.586 27.077 C 0.586 27.253 0.469 27.371 0.293 27.371 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.199,
    height: 28.446,
    viewBox: "0 0 19.199 28.446",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.082,
      top: 1.805,
      width: 19.199,
      height: 28.446,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.293 28.446 C 0.117 28.446 0 28.269 0 28.152 C 1.759 9.595 18.589 0.082 18.765 0.023 C 18.882 -0.036 19.058 0.023 19.176 0.14 C 19.234 0.258 19.176 0.434 19.058 0.552 C 18.882 0.669 2.346 10.006 0.586 28.211 C 0.586 28.328 0.469 28.446 0.293 28.446 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.290,
    height: 3.876,
    viewBox: "0 0 6.290 3.876",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.683,
      top: 19.328,
      width: 6.29,
      height: 3.876,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.222 3.876 C 3.108 3.876 2.17 3.582 1.466 3.054 C 0.117 1.997 0 0.352 0 0.294 C 0 0.117 0.117 0 0.293 0 C 0.469 0 0.586 0.117 0.586 0.294 C 0.586 0.294 0.645 1.762 1.818 2.643 C 2.756 3.347 4.105 3.523 5.923 3.171 C 6.099 3.112 6.216 3.23 6.275 3.406 C 6.333 3.582 6.216 3.7 6.04 3.758 C 5.395 3.758 4.809 3.876 4.222 3.876 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.188,
    height: 3.347,
    viewBox: "0 0 1.188 3.347",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.297,
      top: 21.795,
      width: 1.188,
      height: 3.347,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.88 3.347 C 0.762 3.347 0.645 3.289 0.586 3.171 C 0.176 1.997 0 0.411 0 0.352 C 0 0.176 0.117 0.059 0.235 0 C 0.41 0 0.528 0.117 0.586 0.235 C 0.586 0.235 0.762 1.762 1.173 2.936 C 1.231 3.112 1.114 3.23 0.997 3.289 C 0.938 3.347 0.938 3.347 0.88 3.347 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.118,
    height: 3.812,
    viewBox: "0 0 5.118 3.812",
    fill: "none",
    style: {
      position: "absolute",
      left: 42.254,
      top: 61.086,
      width: 5.118,
      height: 3.812,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.062 3.812 C 4.003 3.812 4.003 3.812 3.945 3.812 C 3.358 3.578 0.368 2.462 0.074 1.464 C -0.101 0.994 0.074 0.7 0.192 0.524 C 1.013 -0.416 4.238 0.172 4.883 0.289 C 5.059 0.348 5.118 0.465 5.118 0.641 C 5.059 0.818 4.942 0.876 4.766 0.876 C 3.3 0.583 1.071 0.406 0.661 0.935 C 0.602 0.994 0.544 1.052 0.602 1.287 C 0.778 1.816 2.772 2.755 4.121 3.284 C 4.297 3.343 4.355 3.519 4.297 3.636 C 4.297 3.695 4.179 3.812 4.062 3.812 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.376,
    height: 3.539,
    viewBox: "0 0 1.376 3.539",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.34,
      top: 22.778,
      width: 1.376,
      height: 3.539,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.078 3.539 C 0.96 3.539 0.902 3.48 0.843 3.421 C -0.212 1.953 0.022 0.368 0.022 0.25 C 0.022 0.074 0.198 -0.043 0.374 0.015 C 0.55 0.015 0.667 0.191 0.609 0.368 C 0.609 0.368 0.433 1.836 1.312 3.069 C 1.43 3.186 1.371 3.363 1.254 3.48 C 1.195 3.539 1.136 3.539 1.078 3.539 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.054,
    height: 4.149,
    viewBox: "0 0 5.054 4.149",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.905,
      top: 4.785,
      width: 5.054,
      height: 4.149,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.272 4.149 C 1.272 4.149 1.213 4.149 1.272 4.149 C 0.803 4.149 0.392 3.973 0.099 3.621 C -0.253 3.21 0.334 2.035 1.858 0.097 C 1.975 -0.02 2.151 -0.02 2.269 0.039 C 2.386 0.156 2.386 0.332 2.327 0.45 C 1.33 1.683 0.509 2.975 0.568 3.268 C 0.744 3.445 0.979 3.562 1.213 3.562 C 2.327 3.562 4.028 2.035 4.556 1.448 C 4.673 1.331 4.849 1.331 4.966 1.448 C 5.083 1.565 5.083 1.742 4.966 1.859 C 4.966 1.976 2.855 4.149 1.272 4.149 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.122,
    height: 4.351,
    viewBox: "0 0 6.122 4.351",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.967,
      top: 1.823,
      width: 6.122,
      height: 4.351,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.29 4.351 C 0.997 4.351 0.763 4.292 0.528 4.233 C 0.293 4.116 -0.234 3.764 0.118 2.765 C 0.411 2.002 2.522 0.416 2.932 0.064 C 3.05 -0.053 3.226 0.005 3.343 0.123 C 3.46 0.24 3.401 0.416 3.284 0.534 C 2.346 1.238 0.821 2.472 0.645 2.942 C 0.411 3.529 0.645 3.646 0.763 3.646 C 1.701 4.057 4.867 2.824 5.571 1.532 C 5.63 1.415 5.806 1.356 5.982 1.415 C 6.099 1.473 6.158 1.65 6.099 1.826 C 5.454 3.118 2.874 4.351 1.29 4.351 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.067,
    height: 3.500,
    viewBox: "0 0 6.067 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.56,
      top: 1.03,
      width: 6.067,
      height: 3.5,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.902 3.5 C 0.608 3.5 0.315 3.441 0.198 3.206 C 0.022 2.971 -0.037 2.736 0.022 2.443 C 0.198 1.386 2.016 0.153 2.25 0.035 C 2.368 -0.024 2.544 -0.024 2.661 0.153 C 2.719 0.27 2.719 0.446 2.602 0.564 C 1.899 1.033 0.726 1.973 0.667 2.56 C 0.667 2.678 0.667 2.795 0.726 2.854 C 1.078 3.324 3.599 2.032 5.593 0.622 C 5.71 0.505 5.886 0.564 6.003 0.681 C 6.121 0.799 6.062 0.975 5.945 1.092 C 4.948 1.797 2.309 3.5 0.902 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.299,
    height: 2.188,
    viewBox: "0 0 3.299 2.188",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.489,
      top: 16.494,
      width: 3.299,
      height: 2.188,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.713 2.188 C 0.484 2.188 0.074 0.368 0.015 0.368 C -0.043 0.191 0.074 0.074 0.25 0.015 C 0.426 -0.043 0.543 0.074 0.602 0.25 C 0.602 0.309 0.954 1.777 3.006 1.601 C 3.182 1.601 3.299 1.718 3.299 1.894 C 3.299 2.071 3.182 2.188 3.006 2.188 C 3.006 2.188 2.83 2.188 2.713 2.188 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.299,
    height: 2.188,
    viewBox: "0 0 3.299 2.188",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.964,
      top: 18.667,
      width: 3.299,
      height: 2.188,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.713 2.188 C 0.484 2.188 0.074 0.368 0.015 0.368 C -0.043 0.191 0.074 0.074 0.25 0.015 C 0.426 -0.043 0.543 0.074 0.602 0.25 C 0.602 0.309 1.012 1.777 3.006 1.601 C 3.182 1.601 3.299 1.718 3.299 1.894 C 3.299 2.071 3.182 2.188 3.006 2.188 C 2.947 2.188 2.83 2.188 2.713 2.188 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.299,
    height: 2.188,
    viewBox: "0 0 3.299 2.188",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.693,
      top: 14.145,
      width: 3.299,
      height: 2.188,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.713 2.188 C 0.484 2.188 0.074 0.368 0.015 0.368 C -0.043 0.191 0.074 0.074 0.25 0.015 C 0.426 -0.043 0.543 0.074 0.602 0.25 C 0.602 0.309 0.954 1.777 3.006 1.601 C 3.182 1.601 3.299 1.718 3.299 1.894 C 3.299 2.071 3.182 2.188 3.006 2.188 C 3.006 2.188 2.83 2.188 2.713 2.188 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.299,
    height: 2.188,
    viewBox: "0 0 3.299 2.188",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.931,
      top: 16.494,
      width: 3.299,
      height: 2.188,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.713 2.188 C 0.484 2.188 0.074 0.368 0.015 0.368 C -0.043 0.191 0.074 0.074 0.25 0.015 C 0.426 -0.043 0.543 0.074 0.602 0.25 C 0.602 0.309 0.954 1.777 3.006 1.601 C 3.182 1.601 3.299 1.718 3.299 1.894 C 3.299 2.071 3.182 2.188 3.006 2.188 C 2.947 2.188 2.83 2.188 2.713 2.188 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.299,
    height: 2.188,
    viewBox: "0 0 3.299 2.188",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.48,
      top: 12.795,
      width: 3.299,
      height: 2.188,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.713 2.188 C 0.484 2.188 0.074 0.368 0.015 0.368 C -0.043 0.191 0.074 0.074 0.25 0.015 C 0.426 -0.043 0.543 0.074 0.602 0.25 C 0.602 0.309 1.012 1.777 3.006 1.601 C 3.182 1.601 3.299 1.718 3.299 1.894 C 3.299 2.071 3.182 2.188 3.006 2.188 C 2.947 2.188 2.83 2.188 2.713 2.188 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.299,
    height: 2.188,
    viewBox: "0 0 3.299 2.188",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.307,
      top: 15.144,
      width: 3.299,
      height: 2.188,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.713 2.188 C 0.484 2.188 0.074 0.368 0.015 0.368 C -0.043 0.191 0.074 0.074 0.25 0.015 C 0.426 -0.043 0.543 0.074 0.602 0.25 C 0.602 0.309 1.012 1.777 3.006 1.601 C 3.182 1.601 3.299 1.718 3.299 1.894 C 3.299 2.071 3.182 2.188 3.006 2.188 C 2.947 2.188 2.83 2.188 2.713 2.188 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.069,
    height: 7.405,
    viewBox: "0 0 4.069 7.405",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.014,
      top: 26.076,
      width: 4.069,
      height: 7.405,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.311 7.405 C 0.194 7.405 0.076 7.287 0.018 7.17 C -0.276 5.643 3.184 0.71 3.536 0.123 C 3.653 0.005 3.829 -0.053 3.947 0.064 C 4.064 0.181 4.122 0.358 4.005 0.475 C 2.539 2.472 0.369 6.054 0.545 7.052 C 0.663 7.17 0.545 7.346 0.311 7.405 C 0.311 7.405 0.369 7.346 0.311 7.405 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.371,
    height: 4.074,
    viewBox: "0 0 1.371 4.074",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.946,
      top: 57.477,
      width: 1.371,
      height: 4.074,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.293 4.074 C 0.117 4.074 0 3.957 0 3.78 C 0 2.958 0.762 0.316 0.821 0.198 C 0.88 0.022 1.056 -0.037 1.173 0.022 C 1.349 0.081 1.407 0.257 1.349 0.374 C 1.114 1.138 0.586 3.193 0.586 3.839 C 0.586 3.957 0.469 4.074 0.293 4.074 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.181,
    height: 3.545,
    viewBox: "0 0 1.181 3.545",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.246,
      top: 58.182,
      width: 1.181,
      height: 3.545,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.338 3.545 C 0.221 3.545 0.103 3.428 0.045 3.311 C -0.19 2.488 0.572 0.433 0.631 0.198 C 0.69 0.022 0.866 -0.037 0.983 0.022 C 1.159 0.081 1.218 0.257 1.159 0.374 C 0.866 1.196 0.455 2.606 0.572 3.134 C 0.631 3.311 0.514 3.428 0.338 3.487 C 0.397 3.546 0.338 3.545 0.338 3.545 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 38.282,
      top: 25.689,
      width: 25.519,
      height: 40.086,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.519,
    height: 40.086,
    viewBox: "0 0 25.519 40.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25.519,
      height: 40.086,
      color: "rgb(255,26,18)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.168 4.386 C 24.168 4.386 15.9 -2.25 6.752 0.803 C -2.397 3.857 -2.103 19.36 6.752 27.64 C 15.606 35.921 23.875 41.441 24.989 39.796 C 26.103 38.152 25.282 5.208 24.168 4.386 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.542,
    height: 2.416,
    viewBox: "0 0 10.542 2.416",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.082,
      top: 2.146,
      width: 10.542,
      height: 2.416,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.278 2.416 C 10.219 2.416 10.102 2.357 10.043 2.298 C 7.287 -0.756 0.426 1.182 0.367 1.182 C 0.192 1.241 0.074 1.124 0.016 1.006 C -0.043 0.83 0.074 0.713 0.192 0.654 C 0.485 0.595 7.463 -1.402 10.454 1.887 C 10.571 2.004 10.571 2.181 10.454 2.298 C 10.395 2.357 10.336 2.416 10.278 2.416 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 26,
      top: 8,
      width: 94,
      height: 28,
      fontFamily: "SVN-Cookies, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: 0.9828906059265137,
      color: "rgb(0,0,0)"
    }
  }, props.text1 ?? "Thank you 3000!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 136.23,
      top: 18.092,
      width: 6.317,
      height: 7.337,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.785,
    height: 6.793,
    viewBox: "0 0 5.785 6.793",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.26,
      top: 0.258,
      width: 5.785,
      height: 6.793,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.793 C 0 6.793 6.521 4.92 5.716 2.787 C 4.91 0.627 0.598 3.879 1.897 4.139 C 3.17 4.4 3.248 0.159 1.637 0.003 C 0.026 -0.154 0 6.793 0 6.793 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.317,
    height: 7.337,
    viewBox: "0 0 6.317 7.337",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.317,
      height: 7.337,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.26 7.311 C 0.208 7.311 0.156 7.285 0.104 7.259 C 0.026 7.207 0 7.129 0 7.051 C 0 5.386 0.156 0 1.845 0 C 1.845 0 1.897 0 1.923 0 C 2.884 0.078 3.352 1.249 3.378 2.472 C 3.793 2.264 4.339 2.055 4.884 2.055 C 5.534 2.055 6.002 2.368 6.235 2.966 C 6.365 3.33 6.339 3.721 6.158 4.085 C 5.248 5.906 0.546 7.285 0.338 7.337 C 0.286 7.311 0.286 7.311 0.26 7.311 Z M 1.845 0.52 C 1.065 0.52 0.572 3.643 0.52 6.687 C 2.001 6.218 5.04 5.048 5.664 3.825 C 5.794 3.591 5.794 3.356 5.716 3.122 C 5.586 2.758 5.3 2.576 4.858 2.576 C 4.443 2.576 3.871 2.758 3.326 3.096 C 3.222 4.085 2.806 4.683 2.234 4.683 C 2.182 4.683 2.13 4.683 2.078 4.657 C 1.741 4.579 1.663 4.345 1.637 4.267 C 1.559 3.799 2.182 3.2 2.806 2.784 C 2.858 1.717 2.52 0.572 1.845 0.52 Z M 2.182 4.111 C 2.208 4.111 2.234 4.111 2.26 4.111 C 2.442 4.111 2.598 3.877 2.702 3.512 C 2.39 3.773 2.208 4.007 2.182 4.111 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.353,-0.936,0.935,0.354,4,74.141)",
      transformOrigin: "0 0",
      width: 6.323,
      height: 7.331,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.790,
    height: 6.787,
    viewBox: "0 0 5.790 6.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,-0.000,-0.000,1,0.261,0.258)",
      transformOrigin: "0 0",
      width: 5.79,
      height: 6.787,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.787 C 0 6.787 6.527 4.915 5.721 2.784 C 4.915 0.626 0.598 3.876 1.898 4.136 C 3.172 4.396 3.25 0.159 1.638 0.003 C 0.026 -0.153 0 6.787 0 6.787 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.322,
    height: 7.330,
    viewBox: "0 0 6.322 7.330",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,-0.000,-0.000,1,0.001,0.001)",
      transformOrigin: "0 0",
      width: 6.322,
      height: 7.33,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.26 7.304 C 0.208 7.304 0.156 7.278 0.104 7.252 C 0.026 7.2 0 7.122 0 7.044 C 0 5.381 0.156 0 1.846 0 C 1.846 0 1.898 0 1.924 0 C 2.886 0.078 3.354 1.248 3.38 2.469 C 3.797 2.261 4.343 2.054 4.889 2.054 C 5.539 2.054 6.007 2.365 6.241 2.963 C 6.371 3.327 6.345 3.717 6.163 4.081 C 5.253 5.901 0.546 7.278 0.338 7.33 C 0.286 7.304 0.286 7.304 0.26 7.304 Z M 1.846 0.52 C 1.066 0.52 0.572 3.639 0.52 6.681 C 2.002 6.213 5.045 5.043 5.669 3.821 C 5.799 3.587 5.799 3.353 5.721 3.119 C 5.591 2.755 5.305 2.573 4.863 2.573 C 4.447 2.573 3.875 2.755 3.328 3.093 C 3.224 4.081 2.808 4.679 2.236 4.679 C 2.184 4.679 2.132 4.679 2.08 4.653 C 1.742 4.575 1.664 4.341 1.638 4.263 C 1.56 3.795 2.184 3.197 2.808 2.781 C 2.86 1.716 2.522 0.572 1.846 0.52 Z M 2.184 4.107 C 2.21 4.107 2.236 4.107 2.262 4.107 C 2.444 4.107 2.6 3.873 2.704 3.509 C 2.392 3.769 2.21 4.003 2.184 4.107 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 3.740,
    height: 3.737,
    viewBox: "0 0 3.740 3.737",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.46,
      top: 6.046,
      width: 3.74,
      height: 3.737,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.235 3.151 C 2.534 3.905 1.339 3.931 0.585 3.229 C -0.168 2.526 -0.194 1.355 0.507 0.601 C 0.845 0.237 1.313 0.028 1.806 0.002 C 2.3 -0.024 2.768 0.159 3.131 0.523 C 3.911 1.225 3.937 2.396 3.235 3.151 Z M 0.923 0.965 C 0.429 1.512 0.455 2.344 0.975 2.838 C 1.495 3.333 2.352 3.307 2.846 2.786 L 3.053 2.969 L 2.846 2.786 C 3.339 2.266 3.313 1.407 2.794 0.913 C 2.534 0.679 2.196 0.549 1.858 0.549 C 1.495 0.549 1.157 0.705 0.923 0.965 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.740,
    height: 3.737,
    viewBox: "0 0 3.740 3.737",
    fill: "none",
    style: {
      position: "absolute",
      left: 142.561,
      top: 105.583,
      width: 3.74,
      height: 3.737,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.235 3.151 C 2.534 3.905 1.339 3.931 0.585 3.229 C -0.168 2.526 -0.194 1.355 0.507 0.601 C 0.845 0.237 1.313 0.028 1.806 0.002 C 2.3 -0.024 2.768 0.159 3.131 0.523 C 3.911 1.225 3.937 2.396 3.235 3.151 Z M 0.923 0.965 C 0.429 1.512 0.455 2.344 0.975 2.838 C 1.495 3.333 2.352 3.307 2.846 2.786 L 3.053 2.969 L 2.846 2.786 C 3.339 2.266 3.313 1.407 2.794 0.913 C 2.534 0.679 2.196 0.549 1.858 0.549 C 1.495 0.549 1.157 0.705 0.923 0.965 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 150,
      height: 120,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 2,
      width: 124,
      height: 118,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.316,
      top: 7.647,
      width: 113.225,
      height: 102.798,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.831,
      top: 18.15,
      width: 4.725,
      height: 4.861,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 0.519,
    height: 4.861,
    viewBox: "0 0 0.519 4.861",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.285,
      top: 0,
      width: 0.519,
      height: 4.861,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.26 4.861 C 0.104 4.861 0 4.757 0 4.602 L 0 0.259 C 0 0.103 0.104 0 0.26 0 C 0.415 0 0.519 0.103 0.519 0.259 L 0.519 4.602 C 0.519 4.757 0.363 4.861 0.26 4.861 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.112,
    height: 3.004,
    viewBox: "0 0 4.112 3.004",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.515,
      top: 0.926,
      width: 4.112,
      height: 3.004,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 3.004 C 0.16 3.004 0.109 2.952 0.057 2.9 C -0.047 2.797 0.005 2.642 0.109 2.538 L 3.691 0.056 C 3.795 -0.047 3.951 0.005 4.055 0.108 C 4.159 0.211 4.107 0.367 4.003 0.47 L 0.42 2.952 C 0.368 3.004 0.316 3.004 0.264 3.004 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.271,
    height: 3.387,
    viewBox: "0 0 3.271 3.387",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.961,
      top: 0.698,
      width: 3.271,
      height: 3.387,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.986 3.387 C 2.934 3.387 2.83 3.335 2.778 3.284 L 0.078 0.44 C -0.026 0.336 -0.026 0.181 0.078 0.078 C 0.182 -0.026 0.338 -0.026 0.441 0.078 L 3.193 2.973 C 3.297 3.077 3.297 3.232 3.193 3.335 C 3.09 3.387 3.038 3.387 2.986 3.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.725,
    height: 0.569,
    viewBox: "0 0 4.725 0.569",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 2.068,
      width: 4.725,
      height: 0.569,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.26 0.569 C 0.104 0.569 0 0.465 0 0.31 C 0 0.155 0.104 0.052 0.26 0.052 L 4.466 0 C 4.621 0 4.725 0.103 4.725 0.259 C 4.725 0.414 4.621 0.517 4.466 0.517 L 0.26 0.569 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 105.255,
      top: 50.571,
      width: 4.725,
      height: 4.861,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 0.519,
    height: 4.861,
    viewBox: "0 0 0.519 4.861",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.233,
      top: 0,
      width: 0.519,
      height: 4.861,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.26 4.861 C 0.104 4.861 0 4.757 0 4.602 L 0 0.259 C 0 0.103 0.104 0 0.26 0 C 0.415 0 0.519 0.103 0.519 0.259 L 0.519 4.602 C 0.519 4.757 0.415 4.861 0.26 4.861 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.112,
    height: 3.004,
    viewBox: "0 0 4.112 3.004",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.463,
      top: 0.926,
      width: 4.112,
      height: 3.004,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 3.004 C 0.16 3.004 0.109 2.952 0.057 2.9 C -0.047 2.797 0.005 2.642 0.109 2.538 L 3.691 0.056 C 3.795 -0.047 3.951 0.005 4.055 0.108 C 4.159 0.211 4.107 0.367 4.003 0.47 L 0.42 2.952 C 0.368 2.952 0.316 3.004 0.264 3.004 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.271,
    height: 3.439,
    viewBox: "0 0 3.271 3.439",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.857,
      top: 0.646,
      width: 3.271,
      height: 3.439,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.038 3.439 C 2.986 3.439 2.882 3.387 2.83 3.335 L 0.078 0.44 C -0.026 0.336 -0.026 0.181 0.078 0.078 C 0.182 -0.026 0.338 -0.026 0.441 0.078 L 3.193 2.973 C 3.297 3.077 3.297 3.232 3.193 3.335 C 3.193 3.439 3.09 3.439 3.038 3.439 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.725,
    height: 0.569,
    viewBox: "0 0 4.725 0.569",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 2.068,
      width: 4.725,
      height: 0.569,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.26 0.569 C 0.104 0.569 0 0.465 0 0.31 C 0 0.155 0.104 0.052 0.26 0.052 L 4.466 0 C 4.621 0 4.725 0.103 4.725 0.259 C 4.725 0.414 4.621 0.517 4.466 0.517 L 0.26 0.569 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 5.816,
    height: 5.791,
    viewBox: "0 0 5.816 5.791",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.571,
      top: 45.039,
      width: 5.816,
      height: 5.791,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.856 5.791 C 2.648 5.791 2.492 5.791 1.973 3.775 C 0.26 3.465 0.104 3.258 0.052 3.206 C 0 3.154 0 2.999 0 2.947 C 0.052 2.844 0.104 2.585 2.077 1.81 C 2.752 0 3.012 0 3.168 0 C 3.271 0 3.375 0.052 3.427 0.103 C 3.531 0.259 3.687 0.724 3.843 1.396 C 3.894 1.603 3.946 1.862 3.998 2.017 C 4.102 2.068 4.31 2.12 4.518 2.223 C 5.504 2.585 5.764 2.689 5.816 2.947 C 5.816 3.051 5.764 3.154 5.712 3.206 C 5.504 3.413 4.518 3.723 4.05 3.93 C 3.168 5.791 3.012 5.791 2.856 5.791 Z M 0.727 2.999 C 1.09 3.103 1.714 3.258 2.233 3.361 C 2.337 3.361 2.389 3.465 2.441 3.568 C 2.596 4.137 2.752 4.757 2.908 5.119 C 3.116 4.757 3.375 4.188 3.635 3.671 C 3.687 3.62 3.739 3.568 3.791 3.516 C 4.258 3.361 4.777 3.154 5.089 2.999 C 4.881 2.896 4.57 2.792 4.362 2.741 C 3.791 2.534 3.687 2.482 3.583 2.379 C 3.531 2.275 3.479 2.172 3.323 1.551 C 3.271 1.344 3.168 0.982 3.116 0.776 C 2.96 1.086 2.7 1.655 2.544 2.12 C 2.544 2.172 2.441 2.223 2.389 2.275 C 1.765 2.482 1.039 2.792 0.727 2.999 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.816,
    height: 5.791,
    viewBox: "0 0 5.816 5.791",
    fill: "none",
    style: {
      position: "absolute",
      left: 107.072,
      top: 60.396,
      width: 5.816,
      height: 5.791,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.856 5.791 C 2.648 5.791 2.492 5.791 1.973 3.775 C 0.26 3.465 0.104 3.258 0.052 3.206 C 0 3.154 0 2.999 0 2.947 C 0.052 2.844 0.104 2.585 2.077 1.81 C 2.752 0 3.012 0 3.168 0 C 3.271 0 3.375 0.052 3.427 0.103 C 3.531 0.259 3.687 0.724 3.843 1.396 C 3.894 1.603 3.946 1.862 3.998 2.017 C 4.102 2.068 4.31 2.12 4.518 2.223 C 5.504 2.585 5.764 2.689 5.816 2.947 C 5.816 3.051 5.764 3.154 5.712 3.206 C 5.504 3.413 4.518 3.723 4.05 3.93 C 3.219 5.791 3.012 5.791 2.856 5.791 Z M 0.727 2.999 C 1.09 3.103 1.714 3.258 2.233 3.361 C 2.337 3.361 2.389 3.465 2.441 3.568 C 2.596 4.137 2.752 4.757 2.908 5.119 C 3.116 4.757 3.375 4.188 3.635 3.671 C 3.687 3.62 3.739 3.568 3.791 3.516 C 4.258 3.361 4.777 3.154 5.089 2.999 C 4.881 2.896 4.57 2.792 4.362 2.741 C 3.791 2.534 3.687 2.482 3.583 2.379 C 3.531 2.275 3.479 2.172 3.323 1.551 C 3.271 1.344 3.168 0.982 3.116 0.776 C 2.96 1.086 2.7 1.655 2.544 2.12 C 2.544 2.172 2.441 2.223 2.389 2.275 C 1.765 2.482 1.09 2.792 0.727 2.999 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.635,
    height: 3.568,
    viewBox: "0 0 3.635 3.568",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 37.179,
      width: 3.635,
      height: 3.568,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.817 3.568 C 0.831 3.568 0 2.741 0 1.758 C 0 0.776 0.831 0 1.817 0 C 2.285 0 2.752 0.207 3.116 0.517 C 3.427 0.879 3.635 1.293 3.635 1.758 C 3.583 2.741 2.804 3.568 1.817 3.568 Z M 1.817 0.517 C 1.09 0.517 0.519 1.086 0.519 1.758 C 0.519 2.482 1.09 3.051 1.765 3.051 L 1.765 3.309 L 1.765 3.051 C 2.441 3.051 3.064 2.482 3.064 1.81 C 3.064 1.448 2.908 1.138 2.7 0.931 C 2.492 0.621 2.129 0.517 1.817 0.517 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.635,
    height: 3.568,
    viewBox: "0 0 3.635 3.568",
    fill: "none",
    style: {
      position: "absolute",
      left: 79.032,
      top: 97.834,
      width: 3.635,
      height: 3.568,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.817 3.568 C 0.831 3.568 0 2.741 0 1.758 C 0 0.776 0.831 0 1.817 0 C 2.285 0 2.752 0.207 3.116 0.517 C 3.427 0.879 3.635 1.293 3.635 1.758 C 3.635 2.792 2.804 3.568 1.817 3.568 Z M 1.817 0.517 C 1.09 0.517 0.519 1.086 0.519 1.758 C 0.519 2.482 1.09 3.051 1.765 3.051 L 1.765 3.309 L 1.765 3.051 C 2.441 3.051 3.064 2.482 3.064 1.81 C 3.064 1.448 2.908 1.138 2.7 0.931 C 2.492 0.672 2.181 0.517 1.817 0.517 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.859,
      top: 5.386,
      width: 13.736,
      height: 14.522,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.736,
    height: 14.522,
    viewBox: "0 0 13.736 14.522",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.736,
      height: 14.522,
      color: "rgb(255,26,18)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.135 4.084 C 6.135 4.084 7.588 -0.932 9.094 0.154 C 11.431 1.809 8.367 6.773 8.108 6.1 C 7.9 5.428 12.21 2.429 13.56 4.601 C 14.91 6.773 8.056 8.117 8.575 7.238 C 9.042 6.411 13.664 7.962 13.716 9.824 C 13.716 11.685 6.238 9.617 8.004 8.479 C 9.665 7.393 8.99 16.391 6.394 14.167 C 3.746 11.892 6.602 6.98 6.238 8.221 C 5.875 9.513 0.786 11.478 0.059 9.306 C -0.668 7.135 5.563 5.221 4.784 6.204 C 4.006 7.186 0.942 2.946 1.877 2.067 C 3.85 0.206 6.861 3.618 6.394 4.756 C 5.979 5.945 6.135 4.084 6.135 4.084 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.946,
    height: 3.930,
    viewBox: "0 0 3.946 3.930",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.252,
      top: 4.911,
      width: 3.946,
      height: 3.93,
      color: "rgb(232,192,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.973 3.93 C 3.063 3.93 3.946 3.05 3.946 1.965 C 3.946 0.88 3.063 0 1.973 0 C 0.883 0 0 0.88 0 1.965 C 0 3.05 0.883 3.93 1.973 3.93 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.153,
    height: 2.487,
    viewBox: "0 0 2.153 2.487",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.897,
      top: 3.2,
      width: 2.153,
      height: 2.487,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.926 2.487 C 1.822 2.487 1.718 2.435 1.666 2.332 C 1.251 1.349 0.109 0.47 0.109 0.47 C 0.005 0.367 -0.047 0.212 0.057 0.108 C 0.16 0.005 0.316 -0.047 0.42 0.056 C 0.472 0.108 1.666 0.987 2.134 2.125 C 2.186 2.28 2.134 2.383 1.978 2.487 C 2.03 2.487 1.978 2.487 1.926 2.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.653,
    height: 1.363,
    viewBox: "0 0 2.653 1.363",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.807,
      top: 7.013,
      width: 2.653,
      height: 1.363,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 1.363 C 0.16 1.363 0.109 1.311 0.057 1.259 C -0.047 1.156 0.005 1.001 0.109 0.897 C 0.368 0.742 1.77 -0.137 2.445 0.018 C 2.601 0.07 2.653 0.173 2.653 0.329 C 2.601 0.484 2.497 0.535 2.341 0.535 C 2.03 0.484 0.991 1.001 0.42 1.363 C 0.368 1.363 0.316 1.363 0.264 1.363 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.719,
    height: 2.844,
    viewBox: "0 0 0.719 2.844",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.649,
      top: 8.634,
      width: 0.719,
      height: 2.844,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 2.844 C 0.212 2.844 0.16 2.844 0.109 2.792 C 0.005 2.689 -0.047 2.534 0.057 2.43 C 0.212 2.223 0.212 1.138 0.16 0.259 C 0.16 0.103 0.264 0 0.42 0 C 0.576 0 0.68 0.103 0.68 0.259 C 0.732 0.724 0.784 2.327 0.472 2.792 C 0.42 2.792 0.368 2.844 0.264 2.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.415,
    height: 1.404,
    viewBox: "0 0 2.415 1.404",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.627,
      top: 7.644,
      width: 2.415,
      height: 1.404,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.129 1.404 C 2.077 1.404 1.973 1.352 1.921 1.3 C 1.921 1.3 1.09 0.473 0.26 0.525 C 0.104 0.525 0 0.421 0 0.266 C 0 0.111 0.104 0.008 0.26 0.008 C 1.35 -0.096 2.337 0.887 2.337 0.938 C 2.441 1.042 2.441 1.197 2.337 1.3 C 2.285 1.404 2.181 1.404 2.129 1.404 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.324,
    height: 1.358,
    viewBox: "0 0 2.324 1.358",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.12,
      top: 4.949,
      width: 2.324,
      height: 1.358,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.286 1.358 C 0.234 1.358 0.13 1.306 0.078 1.254 C -0.026 1.151 -0.026 0.996 0.078 0.893 C 0.753 0.272 1.947 0.013 1.999 0.013 C 2.155 -0.038 2.259 0.065 2.311 0.22 C 2.363 0.375 2.259 0.479 2.103 0.531 C 2.103 0.531 1.013 0.737 0.389 1.254 C 0.389 1.306 0.338 1.358 0.286 1.358 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.887,
    height: 2.741,
    viewBox: "0 0 0.887 2.741",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.688,
      top: 2.326,
      width: 0.887,
      height: 2.741,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 2.741 C 0.212 2.741 0.16 2.741 0.109 2.689 C 0.005 2.585 -0.047 2.43 0.057 2.327 C 0.264 2.017 0.368 0.931 0.368 0.259 C 0.368 0.103 0.472 0 0.628 0 C 0.784 0 0.887 0.103 0.887 0.259 C 0.887 0.569 0.784 2.068 0.472 2.585 C 0.42 2.689 0.316 2.741 0.264 2.741 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 98.912,
      top: 81.281,
      width: 14.313,
      height: 13.934,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.313,
    height: 13.934,
    viewBox: "0 0 14.313 13.934",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.313,
      height: 13.934,
      color: "rgb(255,26,18)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.07 3.47 C 7.07 3.47 9.51 -1.132 10.808 0.264 C 12.781 2.384 8.731 6.572 8.627 5.9 C 8.524 5.228 13.405 3.159 14.235 5.538 C 15.118 7.917 8.16 7.813 8.783 7.089 C 9.406 6.365 13.612 8.847 13.249 10.657 C 12.885 12.467 5.927 8.951 7.952 8.175 C 9.822 7.451 7.277 16.138 5.2 13.398 C 3.123 10.657 6.862 6.365 6.291 7.555 C 5.719 8.744 0.267 9.675 0.008 7.348 C -0.252 5.073 6.239 4.452 5.252 5.279 C 4.317 6.107 2.188 1.35 3.279 0.626 C 5.564 -0.77 7.797 3.159 7.173 4.194 C 6.55 5.279 7.07 3.47 7.07 3.47 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.946,
    height: 3.930,
    viewBox: "0 0 3.946 3.930",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.616,
      top: 4.452,
      width: 3.946,
      height: 3.93,
      color: "rgb(232,192,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.973 3.93 C 3.063 3.93 3.946 3.05 3.946 1.965 C 3.946 0.88 3.063 0 1.973 0 C 0.883 0 0 0.88 0 1.965 C 0 3.05 0.883 3.93 1.973 3.93 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.753,
    height: 2.766,
    viewBox: "0 0 1.753 2.766",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.018,
      top: 2.203,
      width: 1.753,
      height: 2.766,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.48 2.766 C 1.376 2.766 1.272 2.663 1.22 2.56 C 1.013 1.525 0.078 0.44 0.078 0.44 C -0.026 0.336 -0.026 0.181 0.078 0.078 C 0.182 -0.026 0.338 -0.026 0.441 0.078 C 0.493 0.129 1.48 1.267 1.74 2.456 C 1.791 2.611 1.688 2.715 1.532 2.766 C 1.532 2.766 1.48 2.766 1.48 2.766 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.774,
    height: 0.946,
    viewBox: "0 0 2.774 0.946",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.948,
      top: 6.092,
      width: 2.774,
      height: 0.946,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.279 0.946 C 0.175 0.946 0.071 0.894 0.019 0.791 C -0.032 0.636 0.019 0.532 0.175 0.48 C 0.487 0.377 1.993 -0.192 2.616 0.067 C 2.772 0.118 2.823 0.274 2.72 0.429 C 2.668 0.532 2.512 0.636 2.356 0.532 C 2.045 0.377 0.954 0.687 0.331 0.946 C 0.383 0.946 0.331 0.946 0.279 0.946 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.182,
    height: 2.806,
    viewBox: "0 0 1.182 2.806",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.109,
      top: 8.058,
      width: 1.182,
      height: 2.806,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.286 2.806 C 0.234 2.806 0.13 2.754 0.078 2.702 C -0.026 2.599 -0.026 2.444 0.078 2.34 C 0.234 2.185 0.493 1.099 0.649 0.22 C 0.649 0.065 0.805 -0.038 0.961 0.013 C 1.116 0.013 1.22 0.169 1.168 0.324 C 1.116 0.789 0.857 2.392 0.441 2.754 C 0.389 2.806 0.338 2.806 0.286 2.806 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.225,
    height: 1.720,
    viewBox: "0 0 2.225 1.720",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.718,
      top: 7.593,
      width: 2.225,
      height: 1.72,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.935 1.72 C 1.831 1.72 1.779 1.668 1.727 1.616 C 1.727 1.616 1.104 0.634 0.221 0.531 C 0.065 0.531 -0.038 0.375 0.014 0.22 C 0.065 0.065 0.169 -0.038 0.325 0.013 C 1.416 0.117 2.142 1.306 2.194 1.358 C 2.246 1.461 2.246 1.616 2.091 1.72 C 1.987 1.668 1.935 1.72 1.935 1.72 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.472,
    height: 0.931,
    viewBox: "0 0 2.472 0.931",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.635,
      top: 5.383,
      width: 2.472,
      height: 0.931,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.239 0.931 C 0.135 0.931 0.083 0.879 0.031 0.827 C -0.021 0.724 -0.021 0.569 0.135 0.465 C 0.914 0 2.16 0 2.212 0 C 2.368 0 2.472 0.103 2.472 0.259 C 2.472 0.414 2.368 0.517 2.212 0.517 C 2.108 0.517 1.07 0.517 0.395 0.879 C 0.343 0.931 0.291 0.931 0.239 0.931 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.376,
    height: 2.637,
    viewBox: "0 0 1.376 2.637",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.394,
      top: 2.177,
      width: 1.376,
      height: 2.637,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.286 2.637 C 0.234 2.637 0.13 2.585 0.078 2.534 C -0.026 2.43 -0.026 2.275 0.078 2.172 C 0.338 1.913 0.701 0.827 0.857 0.207 C 0.909 0.052 1.013 0 1.168 0 C 1.324 0.052 1.376 0.155 1.376 0.31 C 1.324 0.621 0.909 2.068 0.493 2.482 C 0.441 2.585 0.389 2.637 0.286 2.637 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 38.756,
    height: 9.359,
    viewBox: "0 0 38.756 9.359",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.031,
      top: 93.438,
      width: 38.756,
      height: 9.359,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 34.187 9.359 C 34.031 9.359 33.927 9.256 33.927 9.101 C 33.927 8.946 34.031 8.842 34.187 8.842 L 34.239 8.842 C 34.55 8.842 34.862 8.791 35.174 8.739 C 35.329 8.687 35.433 8.791 35.485 8.946 C 35.537 9.101 35.433 9.204 35.277 9.256 C 34.914 9.359 34.602 9.359 34.187 9.359 Z M 33.148 9.308 C 33.148 9.308 33.097 9.308 33.148 9.308 C 32.785 9.256 32.421 9.152 32.058 9.101 C 31.902 9.049 31.85 8.894 31.902 8.791 C 31.954 8.635 32.058 8.584 32.214 8.635 C 32.525 8.739 32.889 8.791 33.2 8.842 C 33.356 8.842 33.46 8.997 33.408 9.152 C 33.408 9.204 33.252 9.308 33.148 9.308 Z M 36.16 8.946 C 36.056 8.946 35.952 8.894 35.952 8.791 C 35.901 8.687 35.952 8.532 36.056 8.429 C 36.316 8.273 36.576 8.067 36.835 7.86 C 36.939 7.756 37.095 7.756 37.199 7.86 C 37.303 7.963 37.303 8.118 37.199 8.222 C 36.939 8.48 36.628 8.687 36.316 8.894 C 36.264 8.946 36.212 8.946 36.16 8.946 Z M 31.175 8.739 C 31.123 8.739 31.123 8.739 31.071 8.739 C 30.76 8.584 30.448 8.429 30.137 8.273 C 30.033 8.222 29.981 8.067 30.033 7.911 C 30.085 7.808 30.241 7.756 30.396 7.808 C 30.708 7.963 31.019 8.118 31.279 8.273 C 31.435 8.325 31.487 8.48 31.435 8.635 C 31.331 8.635 31.279 8.739 31.175 8.739 Z M 19.492 8.273 C 19.284 8.273 19.024 8.273 18.817 8.222 C 18.661 8.222 18.557 8.17 18.453 8.17 C 18.298 8.17 18.194 8.015 18.246 7.86 C 18.246 7.705 18.401 7.601 18.557 7.653 C 18.661 7.653 18.817 7.705 18.921 7.705 C 19.128 7.705 19.336 7.756 19.544 7.756 C 19.7 7.756 19.803 7.86 19.803 8.015 C 19.751 8.17 19.648 8.273 19.492 8.273 Z M 20.53 8.222 C 20.427 8.222 20.271 8.118 20.271 8.015 C 20.271 7.86 20.375 7.756 20.478 7.705 C 20.79 7.653 21.153 7.601 21.465 7.498 C 21.621 7.446 21.725 7.55 21.777 7.653 C 21.829 7.808 21.725 7.911 21.621 7.963 C 21.257 8.067 20.894 8.17 20.53 8.222 Z M 17.415 7.963 L 17.363 7.963 C 16.999 7.86 16.688 7.756 16.324 7.653 C 16.169 7.601 16.117 7.446 16.169 7.343 C 16.22 7.188 16.376 7.136 16.48 7.188 C 16.792 7.291 17.103 7.394 17.467 7.498 C 17.622 7.55 17.674 7.653 17.674 7.808 C 17.674 7.911 17.571 7.963 17.415 7.963 Z M 29.358 7.705 C 29.306 7.705 29.254 7.705 29.202 7.653 C 28.942 7.446 28.631 7.239 28.371 6.981 C 28.267 6.877 28.267 6.722 28.319 6.619 C 28.371 6.515 28.579 6.515 28.683 6.567 C 28.942 6.774 29.202 6.981 29.462 7.188 C 29.566 7.291 29.617 7.446 29.514 7.55 C 29.514 7.653 29.41 7.705 29.358 7.705 Z M 22.504 7.601 C 22.4 7.601 22.296 7.55 22.296 7.446 C 22.244 7.343 22.296 7.188 22.4 7.084 C 22.711 6.929 22.971 6.774 23.231 6.567 C 23.334 6.464 23.49 6.515 23.594 6.619 C 23.698 6.722 23.646 6.877 23.542 6.981 C 23.231 7.188 22.919 7.394 22.607 7.55 C 22.555 7.601 22.555 7.601 22.504 7.601 Z M 37.666 7.498 C 37.614 7.498 37.562 7.498 37.51 7.446 C 37.406 7.394 37.354 7.239 37.406 7.084 C 37.562 6.826 37.718 6.515 37.822 6.205 C 37.874 6.05 38.03 5.998 38.133 6.05 C 38.289 6.102 38.341 6.257 38.289 6.36 C 38.185 6.722 38.03 7.032 37.822 7.343 C 37.822 7.446 37.718 7.498 37.666 7.498 Z M 6.978 7.394 C 6.874 7.394 6.77 7.394 6.718 7.394 C 6.562 7.394 6.458 7.239 6.458 7.136 C 6.458 6.981 6.614 6.877 6.718 6.877 C 7.03 6.877 7.341 6.877 7.705 6.826 C 7.86 6.774 7.964 6.877 8.016 7.032 C 8.068 7.188 7.964 7.291 7.808 7.343 C 7.549 7.394 7.237 7.394 6.978 7.394 Z M 15.494 7.239 C 15.442 7.239 15.39 7.239 15.39 7.188 C 15.078 7.032 14.767 6.826 14.455 6.619 C 14.351 6.515 14.299 6.36 14.403 6.257 C 14.507 6.153 14.663 6.102 14.767 6.205 C 15.026 6.412 15.338 6.567 15.597 6.722 C 15.701 6.774 15.753 6.929 15.701 7.084 C 15.701 7.188 15.597 7.239 15.494 7.239 Z M 5.679 7.239 L 5.628 7.239 C 5.264 7.136 4.952 7.032 4.589 6.929 C 4.433 6.877 4.381 6.722 4.433 6.619 C 4.485 6.464 4.641 6.412 4.745 6.464 C 5.056 6.567 5.368 6.67 5.679 6.774 C 5.835 6.826 5.887 6.929 5.887 7.084 C 5.939 7.136 5.835 7.239 5.679 7.239 Z M 8.743 7.032 C 8.639 7.032 8.535 6.981 8.483 6.877 C 8.432 6.722 8.483 6.619 8.639 6.515 C 8.951 6.412 9.21 6.205 9.522 6.05 C 9.626 5.947 9.782 5.998 9.885 6.102 C 9.989 6.205 9.937 6.36 9.834 6.464 C 9.522 6.67 9.21 6.826 8.899 6.981 C 8.795 7.032 8.795 7.032 8.743 7.032 Z M 3.758 6.464 C 3.706 6.464 3.654 6.464 3.654 6.412 C 3.343 6.257 3.031 6.05 2.772 5.843 C 2.668 5.74 2.616 5.585 2.72 5.481 C 2.823 5.378 2.979 5.326 3.083 5.429 C 3.343 5.636 3.654 5.791 3.914 5.947 C 4.018 5.998 4.07 6.153 4.018 6.308 C 3.966 6.412 3.862 6.464 3.758 6.464 Z M 24.165 6.412 C 24.113 6.412 24.009 6.36 23.957 6.308 C 23.854 6.205 23.854 6.05 23.957 5.947 C 24.217 5.74 24.425 5.481 24.633 5.223 C 24.736 5.119 24.892 5.067 24.996 5.171 C 25.1 5.274 25.152 5.429 25.048 5.533 C 24.84 5.791 24.581 6.102 24.321 6.308 C 24.321 6.36 24.217 6.412 24.165 6.412 Z M 27.8 6.36 C 27.748 6.36 27.644 6.308 27.592 6.257 C 27.333 5.998 27.125 5.74 26.865 5.481 C 26.762 5.378 26.813 5.223 26.917 5.119 C 27.021 5.016 27.177 5.067 27.281 5.171 C 27.488 5.429 27.696 5.688 27.956 5.947 C 28.06 6.05 28.06 6.205 27.956 6.308 C 27.904 6.308 27.852 6.36 27.8 6.36 Z M 13.832 6.05 C 13.78 6.05 13.728 6.05 13.676 5.998 C 13.416 5.74 13.157 5.481 12.949 5.223 C 12.845 5.119 12.897 4.964 13.001 4.861 C 13.105 4.757 13.261 4.809 13.365 4.912 C 13.572 5.171 13.78 5.429 14.04 5.636 C 14.143 5.74 14.143 5.895 14.04 5.998 C 13.936 5.998 13.884 6.05 13.832 6.05 Z M 10.457 5.895 C 10.405 5.895 10.301 5.843 10.249 5.791 C 10.145 5.688 10.145 5.533 10.301 5.429 C 10.561 5.223 10.82 4.964 11.028 4.757 C 11.132 4.654 11.287 4.654 11.391 4.757 C 11.495 4.861 11.495 5.016 11.391 5.119 C 11.132 5.378 10.872 5.636 10.612 5.843 C 10.612 5.895 10.509 5.895 10.457 5.895 Z M 38.341 5.533 C 38.289 5.533 38.289 5.533 38.341 5.533 C 38.133 5.481 38.081 5.378 38.081 5.223 C 38.133 4.912 38.185 4.55 38.237 4.24 C 38.237 4.085 38.393 3.982 38.497 3.982 C 38.653 3.982 38.756 4.137 38.756 4.24 C 38.705 4.602 38.705 4.964 38.601 5.274 C 38.549 5.481 38.445 5.533 38.341 5.533 Z M 2.097 5.274 C 2.045 5.274 1.993 5.274 1.941 5.223 C 1.681 4.964 1.421 4.706 1.214 4.447 C 1.11 4.344 1.11 4.188 1.266 4.085 C 1.37 3.982 1.525 3.982 1.629 4.137 C 1.837 4.395 2.097 4.654 2.304 4.861 C 2.408 4.964 2.408 5.119 2.304 5.223 C 2.252 5.223 2.148 5.274 2.097 5.274 Z M 25.463 4.809 C 25.411 4.809 25.36 4.809 25.308 4.757 C 25.204 4.706 25.152 4.499 25.204 4.395 C 25.36 4.137 25.515 3.826 25.671 3.568 C 25.671 3.516 25.723 3.413 25.827 3.413 C 25.931 3.361 26.086 3.413 26.19 3.516 C 26.346 3.826 26.502 4.085 26.71 4.395 C 26.813 4.499 26.762 4.654 26.658 4.757 C 26.554 4.861 26.398 4.809 26.294 4.706 C 26.19 4.55 26.086 4.395 25.983 4.24 C 25.879 4.395 25.775 4.55 25.723 4.757 C 25.619 4.757 25.567 4.809 25.463 4.809 Z M 12.534 4.395 C 12.43 4.395 12.378 4.344 12.326 4.24 C 12.326 4.188 12.274 4.137 12.274 4.085 C 12.222 4.137 12.17 4.188 12.17 4.24 C 12.066 4.344 11.911 4.344 11.807 4.292 C 11.703 4.188 11.651 4.033 11.755 3.93 C 11.859 3.826 11.963 3.671 12.066 3.568 C 12.014 3.465 11.963 3.361 11.963 3.258 C 11.911 3.103 12.014 2.999 12.118 2.947 C 12.222 2.896 12.378 2.947 12.43 3.103 C 12.534 3.051 12.638 3.051 12.741 3.103 C 12.845 3.206 12.897 3.361 12.793 3.465 C 12.741 3.516 12.689 3.62 12.638 3.671 C 12.689 3.775 12.741 3.93 12.793 4.033 C 12.845 4.137 12.793 4.292 12.689 4.395 C 12.638 4.395 12.586 4.395 12.534 4.395 Z M 0.746 3.671 C 0.643 3.671 0.591 3.62 0.539 3.568 C 0.175 2.999 0.019 2.637 0.019 2.637 C -0.032 2.482 0.019 2.379 0.175 2.275 C 0.331 2.223 0.435 2.275 0.539 2.43 C 0.539 2.43 0.695 2.792 1.006 3.309 C 1.11 3.413 1.058 3.568 0.954 3.671 C 0.85 3.671 0.798 3.671 0.746 3.671 Z M 38.497 3.465 C 38.341 3.465 38.237 3.361 38.237 3.206 L 38.497 3.206 L 38.237 3.206 C 38.237 2.844 38.237 2.534 38.185 2.172 C 38.185 2.017 38.289 1.913 38.445 1.913 C 38.601 1.913 38.705 2.017 38.705 2.172 C 38.705 2.534 38.756 2.896 38.756 3.206 C 38.756 3.361 38.653 3.465 38.497 3.465 Z M 25.515 2.896 C 25.411 2.896 25.308 2.844 25.256 2.741 C 25.1 2.379 24.996 2.017 24.996 1.706 C 24.996 1.551 25.1 1.448 25.204 1.396 C 25.36 1.396 25.463 1.5 25.515 1.603 C 25.567 1.862 25.619 2.223 25.775 2.534 C 25.827 2.689 25.775 2.792 25.619 2.844 C 25.567 2.896 25.567 2.896 25.515 2.896 Z M 26.294 2.896 L 26.242 2.896 C 26.086 2.844 26.035 2.689 26.086 2.585 C 26.19 2.223 26.242 1.913 26.294 1.603 C 26.294 1.448 26.45 1.344 26.554 1.344 C 26.71 1.344 26.813 1.5 26.813 1.603 C 26.813 1.913 26.71 2.275 26.606 2.689 C 26.502 2.844 26.398 2.896 26.294 2.896 Z M 13.053 2.689 C 13.001 2.689 12.949 2.689 12.949 2.637 C 12.845 2.585 12.793 2.43 12.845 2.275 C 13.001 1.965 13.157 1.655 13.261 1.344 C 13.313 1.189 13.468 1.138 13.572 1.189 C 13.728 1.241 13.78 1.396 13.728 1.5 C 13.624 1.81 13.468 2.12 13.313 2.482 C 13.261 2.637 13.157 2.689 13.053 2.689 Z M 11.963 2.43 C 11.807 2.43 11.703 2.327 11.703 2.172 C 11.703 2.12 11.703 2.068 11.703 1.965 C 11.703 1.603 11.755 1.293 11.859 1.034 C 11.911 0.879 12.066 0.827 12.17 0.879 C 12.326 0.931 12.378 1.086 12.326 1.189 C 12.222 1.396 12.222 1.655 12.222 1.965 C 12.222 2.017 12.222 2.068 12.222 2.12 C 12.222 2.327 12.118 2.43 11.963 2.43 Z M 38.341 1.448 C 38.237 1.448 38.081 1.344 38.081 1.241 C 38.03 0.931 37.978 0.724 37.978 0.724 C 37.926 0.569 38.03 0.465 38.185 0.414 C 38.341 0.362 38.445 0.465 38.497 0.621 C 38.497 0.621 38.549 0.827 38.601 1.189 C 38.653 1.293 38.549 1.396 38.341 1.448 C 38.393 1.448 38.393 1.448 38.341 1.448 Z M 25.411 0.931 C 25.36 0.931 25.308 0.931 25.256 0.879 C 25.152 0.776 25.152 0.621 25.204 0.517 C 25.36 0.362 25.515 0.259 25.723 0.207 C 26.086 0.155 26.346 0.259 26.502 0.465 C 26.606 0.569 26.554 0.724 26.45 0.827 C 26.346 0.931 26.19 0.879 26.086 0.776 C 26.035 0.672 25.931 0.672 25.827 0.672 C 25.723 0.672 25.671 0.724 25.619 0.776 C 25.567 0.879 25.515 0.931 25.411 0.931 Z M 13.624 0.724 C 13.52 0.724 13.416 0.672 13.365 0.569 C 13.365 0.517 13.313 0.465 13.261 0.517 C 13.209 0.517 13.157 0.517 13.053 0.569 C 13.001 0.569 12.897 0.621 12.845 0.672 C 12.741 0.724 12.586 0.724 12.482 0.569 C 12.43 0.465 12.43 0.31 12.586 0.207 C 12.689 0.155 12.793 0.103 12.897 0.052 C 13.053 0 13.157 0 13.261 0 C 13.572 0 13.78 0.155 13.832 0.414 C 13.884 0.569 13.78 0.672 13.676 0.724 C 13.676 0.724 13.624 0.724 13.624 0.724 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.952,
      top: 0,
      width: 98.593,
      height: 92.042,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 45.722,
    height: 58.886,
    viewBox: "0 0 45.722 58.886",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.228,
      top: 0,
      width: 45.722,
      height: 58.886,
      color: "rgb(77,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42.356 42.97 C 39.24 40.85 41.836 40.126 41.681 36.041 C 41.525 31.956 40.279 31.077 38.202 28.388 C 36.176 25.803 39.24 17.684 36.384 11.996 C 38.253 10.859 39.5 8.842 39.5 6.464 C 39.5 2.896 36.592 0 33.009 0 C 29.686 0 26.934 2.482 26.57 5.688 C 24.493 5.223 22.987 5.119 22.987 5.119 C 22.987 5.119 14.315 1.551 5.696 8.687 C -2.976 15.771 0.659 25.699 2.736 29.991 C 4.813 34.231 -2.82 38.161 1.178 47.004 C 5.176 55.897 32.178 63.499 40.486 55.535 C 48.794 47.572 45.471 45.09 42.356 42.97 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26.551,
    height: 47.492,
    viewBox: "0 0 26.551 47.492",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.246,
      top: 9.097,
      width: 26.551,
      height: 47.492,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.489 19.187 C 20.489 19.187 20.801 18.515 21.216 17.429 C 21.268 18.619 21.683 19.653 23.241 19.705 C 26.045 19.756 27.343 15.826 26.045 13.034 C 25.214 11.173 23.553 12.465 22.566 13.448 C 23.709 9.518 14.258 13.861 15.712 0.262 C 15.712 0.262 10.415 -1.548 5.742 4.347 C 3.925 6.622 0.861 16.343 2.782 20.842 C 3.509 22.549 6.781 24.203 8.131 24.617 C 7.923 27.978 7.871 31.649 7.871 31.649 C 7.871 31.649 1.017 33.614 0.082 34.752 C -0.853 35.889 6.417 48.041 10.779 47.472 C 18.827 46.386 24.591 38.216 24.487 37.337 C 24.384 36.458 16.854 32.89 16.439 32.425 C 16.127 32.063 18.152 24.979 19.139 21.566 C 20.126 20.325 20.489 19.187 20.489 19.187 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.578,
    height: 5.227,
    viewBox: "0 0 4.578 5.227",
    fill: "none",
    style: {
      position: "absolute",
      left: 45.75,
      top: 21.093,
      width: 4.578,
      height: 5.227,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.327 5.227 C 3.275 5.227 3.223 5.227 3.223 5.176 C 3.223 5.176 1.25 4.141 0.315 3.935 C 0.055 3.883 0.003 3.676 0.003 3.624 C -0.1 2.952 2.184 1.297 4.158 0.056 C 4.261 -0.047 4.417 0.005 4.521 0.108 C 4.625 0.211 4.573 0.367 4.469 0.47 C 2.756 1.556 0.886 2.952 0.575 3.469 C 1.561 3.779 3.379 4.71 3.482 4.762 C 3.586 4.814 3.638 4.969 3.586 5.124 C 3.534 5.176 3.431 5.227 3.327 5.227 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.823,
    height: 2.896,
    viewBox: "0 0 2.823 2.896",
    fill: "none",
    style: {
      position: "absolute",
      left: 61,
      top: 23.683,
      width: 2.823,
      height: 2.896,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.279 2.896 C 0.227 2.896 0.227 2.896 0.175 2.896 C 0.019 2.844 -0.032 2.689 0.019 2.534 C 0.435 1.551 1.266 0 1.889 0 C 2.616 0.052 2.772 1.344 2.823 1.758 C 2.823 1.913 2.72 2.017 2.564 2.017 C 2.408 2.017 2.304 1.913 2.304 1.758 C 2.252 1.086 1.993 0.465 1.889 0.465 C 1.681 0.517 1.006 1.551 0.487 2.689 C 0.487 2.844 0.383 2.896 0.279 2.896 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.643,
    height: 4.519,
    viewBox: "0 0 3.643 4.519",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.827,
      top: 19.939,
      width: 3.643,
      height: 4.519,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.871 4.519 C 0.819 4.519 0.715 4.519 0.663 4.519 C 0.403 4.467 0.196 4.312 0.092 4.105 C -0.376 3.123 1.078 0.589 1.39 0.124 C 1.442 0.02 1.598 -0.031 1.753 0.02 C 1.857 0.072 1.909 0.227 1.857 0.382 C 1.234 1.416 0.351 3.33 0.611 3.898 C 0.611 3.95 0.663 4.002 0.767 4.002 C 1.701 4.157 2.844 2.451 3.155 1.778 C 3.207 1.675 3.363 1.623 3.519 1.675 C 3.623 1.727 3.675 1.882 3.623 2.037 C 3.467 2.244 2.273 4.519 0.871 4.519 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.081,
    height: 4.053,
    viewBox: "0 0 3.081 4.053",
    fill: "none",
    style: {
      position: "absolute",
      left: 44.042,
      top: 18.286,
      width: 3.081,
      height: 4.053,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.932 4.053 C 0.88 4.053 0.777 4.053 0.725 4.001 C 0.517 3.949 0.309 3.794 0.205 3.587 C -0.314 2.657 0.309 0.433 0.361 0.175 C 0.413 0.019 0.569 -0.032 0.673 0.019 C 0.828 0.071 0.88 0.226 0.828 0.33 C 0.673 0.95 0.257 2.708 0.621 3.329 C 0.673 3.432 0.777 3.484 0.828 3.536 C 1.452 3.691 2.23 1.984 2.594 0.795 C 2.646 0.64 2.802 0.588 2.905 0.64 C 3.061 0.692 3.113 0.847 3.061 0.95 C 2.957 1.467 2.127 4.053 0.932 4.053 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.953,
    height: 4.344,
    viewBox: "0 0 4.953 4.344",
    fill: "none",
    style: {
      position: "absolute",
      left: 46.584,
      top: 26.63,
      width: 4.953,
      height: 4.344,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.765 4.344 C 1.714 4.344 1.61 4.344 1.558 4.344 C 0.675 4.137 0.156 2.844 0 0.259 C 0 0.103 0.104 0 0.26 0 C 0.415 0 0.519 0.103 0.519 0.259 C 0.675 3.206 1.298 3.775 1.662 3.826 C 2.492 3.982 3.791 2.172 4.466 0.982 C 4.518 0.879 4.673 0.827 4.829 0.879 C 4.933 0.931 4.985 1.086 4.933 1.241 C 4.725 1.551 3.168 4.344 1.765 4.344 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.950,
    height: 3.128,
    viewBox: "0 0 10.950 3.128",
    fill: "none",
    style: {
      position: "absolute",
      left: 46.149,
      top: 31.672,
      width: 10.95,
      height: 3.128,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.537 3.128 C 2.148 3.128 0.227 2.353 0.175 2.353 C 0.019 2.301 -0.032 2.146 0.019 1.991 C 0.071 1.836 0.227 1.784 0.383 1.836 C 0.435 1.887 6.614 4.369 10.509 0.078 C 10.612 -0.026 10.768 -0.026 10.872 0.078 C 10.976 0.181 10.976 0.336 10.872 0.44 C 9.003 2.56 6.562 3.128 4.537 3.128 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 98.593,
    height: 47.082,
    viewBox: "0 0 98.593 47.082",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 35.443,
      width: 98.593,
      height: 47.082,
      color: "rgb(180,165,250)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 97.42 29.607 C 92.747 13.164 74.365 8.665 64.239 7.424 C 60.033 6.648 56.554 6.338 56.554 6.338 C 56.554 6.338 57.592 1.943 57.333 0.65 C 57.073 -0.643 45.39 0.392 45.39 0.392 C 43.313 0.133 43.053 3.494 43.053 3.494 C 43.053 3.494 37.964 3.598 32.304 4.322 C 19.479 5.045 1.045 8.51 0.058 22.575 C -1.136 38.967 16.415 35.761 21.867 34.209 C 23.529 33.744 26.333 30.745 29.345 26.867 C 29.604 27.022 29.864 27.073 30.02 27.022 C 31.993 26.608 53.231 31.107 63.252 32.761 C 63.772 34.261 64.135 35.502 64.343 36.278 C 65.745 41.087 77.48 46.258 80.959 46.62 C 84.49 46.93 103.443 50.756 97.42 29.607 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 70.257,
    height: 50.933,
    viewBox: "0 0 70.257 50.933",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.211,
      top: 41.109,
      width: 70.257,
      height: 50.933,
      color: "rgb(20,30,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.166 0 C 7.166 0 70.204 7.136 70.256 8.635 C 70.308 10.083 63.039 50.933 63.039 50.933 L 0 41.936 L 7.166 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.266,
      top: 51.929,
      width: 14.441,
      height: 12.718,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.441,
    height: 12.718,
    viewBox: "0 0 14.441 12.718",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.441,
      height: 12.718,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.814 0.194 C 5.814 0.194 11.422 -0.582 13.083 0.97 C 15.472 3.245 8.41 2.521 8.41 2.521 C 8.41 2.521 13.083 4.227 14.382 6.813 C 15.212 8.519 7.112 5.365 7.112 5.365 C 7.112 5.365 13.499 7.847 13.499 9.657 C 13.499 10.949 7.372 8.364 7.372 8.364 C 7.372 8.364 11.889 9.76 11.162 12.501 C 10.903 13.535 8.41 10.536 3.737 10.794 C -0.937 11.053 -2.235 1.745 5.814 0.194 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.374,
    height: 1.570,
    viewBox: "0 0 5.374 1.570",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.191,
      top: 2.347,
      width: 5.374,
      height: 1.57,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.089 1.57 C 5.037 1.57 4.933 1.518 4.881 1.467 C 3.791 0.277 0.26 0.536 0.26 0.536 C 0.104 0.536 0 0.433 0 0.277 C 0 0.122 0.104 0.019 0.26 0.019 C 0.415 0.019 4.05 -0.24 5.296 1.156 C 5.4 1.26 5.4 1.415 5.296 1.518 C 5.245 1.518 5.193 1.57 5.089 1.57 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.938,
    height: 1.514,
    viewBox: "0 0 4.938 1.514",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.45,
      top: 5.143,
      width: 4.938,
      height: 1.514,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.673 1.514 C 4.57 1.514 4.518 1.463 4.466 1.411 C 3.427 0.066 0.312 0.635 0.312 0.635 C 0.156 0.635 0.052 0.584 0 0.428 C 0 0.273 0.052 0.17 0.208 0.118 C 0.363 0.118 3.687 -0.502 4.881 1.101 C 4.985 1.204 4.933 1.359 4.829 1.463 C 4.777 1.514 4.725 1.514 4.673 1.514 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.239,
    height: 1.214,
    viewBox: "0 0 4.239 1.214",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.904,
      top: 8.287,
      width: 4.239,
      height: 1.214,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.96 1.214 C 3.908 1.214 3.908 1.214 3.856 1.214 C 3.181 0.956 1.156 0.284 0.325 0.542 C 0.17 0.594 0.066 0.491 0.014 0.387 C -0.038 0.232 0.066 0.129 0.17 0.077 C 1.364 -0.285 3.96 0.749 4.064 0.749 C 4.22 0.801 4.272 0.956 4.22 1.059 C 4.168 1.163 4.064 1.214 3.96 1.214 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 65.231,
      top: 58.948,
      width: 14.024,
      height: 14.526,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.024,
    height: 14.526,
    viewBox: "0 0 14.024 14.526",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.024,
      height: 14.526,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.457 4.447 C 12.457 4.447 8.926 0 6.642 0 C 3.318 0 8.978 4.344 8.978 4.344 C 8.978 4.344 4.409 2.379 1.657 3.361 C -0.109 3.982 7.94 7.291 7.94 7.291 C 7.94 7.291 1.553 4.706 0.307 5.998 C -0.628 6.929 5.655 9.256 5.655 9.256 C 5.655 9.256 1.449 7.188 0.047 9.618 C -0.472 10.549 3.422 10.083 6.642 13.496 C 9.861 16.961 17.235 11.117 12.457 4.447 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.751,
    height: 3.106,
    viewBox: "0 0 4.751 3.106",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.59,
      top: 3.617,
      width: 4.751,
      height: 3.106,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.466 3.106 C 4.414 3.106 4.31 3.054 4.258 3.002 C 4.258 3.002 1.869 0.417 0.26 0.52 C 0.104 0.52 0 0.417 0 0.262 C 0 0.106 0.104 0.003 0.26 0.003 C 2.129 -0.1 4.57 2.537 4.673 2.64 C 4.777 2.744 4.777 2.899 4.673 3.002 C 4.57 3.054 4.518 3.106 4.466 3.106 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.315,
    height: 2.972,
    viewBox: "0 0 4.315 2.972",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.772,
      top: 5.715,
      width: 4.315,
      height: 2.972,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.05 2.972 C 3.946 2.972 3.894 2.921 3.843 2.869 C 3.843 2.869 1.973 0.283 0.312 0.542 C 0.156 0.542 0.052 0.49 0 0.335 C 0 0.18 0.052 0.077 0.208 0.025 C 2.181 -0.285 4.154 2.404 4.258 2.559 C 4.362 2.662 4.31 2.817 4.206 2.921 C 4.154 2.921 4.102 2.972 4.05 2.972 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.675,
    height: 2.605,
    viewBox: "0 0 3.675 2.605",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.987,
      top: 7.944,
      width: 3.675,
      height: 2.605,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.447 2.605 C 3.343 2.605 3.291 2.553 3.239 2.45 C 2.823 1.674 0.902 0.795 0.175 0.485 C 0.019 0.433 -0.032 0.278 0.019 0.175 C 0.071 0.019 0.227 -0.032 0.331 0.019 C 0.435 0.071 3.031 1.105 3.654 2.191 C 3.706 2.295 3.654 2.45 3.55 2.553 C 3.55 2.605 3.499 2.605 3.447 2.605 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 5.421,
    height: 9.359,
    viewBox: "0 0 5.421 9.359",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.775,
      top: 9.618,
      width: 5.421,
      height: 9.359,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.193 9.359 C 5.141 9.359 5.089 9.359 5.089 9.308 C 0.052 6.826 0 0.31 0 0.259 C 0 0.103 0.104 0 0.26 0 C 0.415 0 0.519 0.103 0.519 0.259 C 0.519 0.31 0.571 6.464 5.296 8.842 C 5.4 8.894 5.452 9.049 5.4 9.204 C 5.4 9.308 5.296 9.359 5.193 9.359 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 65.918,
      top: 49.382,
      width: 9.147,
      height: 3.258,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.077,
      top: 0,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.644 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.517 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.086 0.294 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.245,
      top: 0.465,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.696 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.517 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.086 0.294 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.75,
      top: 1.965,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.696 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.517 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.034 0.294 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 1.551,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.644 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.517 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.346 1.034 0.294 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.739,
      top: 2.172,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.644 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.517 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.034 0.294 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.146,
      top: 42.867,
      width: 9.147,
      height: 3.206,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.077,
      top: 0,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.644 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.517 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.034 0.346 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.245,
      top: 0.414,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.696 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.517 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.086 0.346 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.75,
      top: 1.913,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.696 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.517 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.034 0.346 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 1.5,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.644 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.517 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.034 0.294 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.739,
      top: 2.12,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.644 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.517 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.034 0.346 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 44.109,
      top: 82.476,
      width: 9.147,
      height: 3.206,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.077,
      top: 0,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.696 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.517 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.086 0.346 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.245,
      top: 0.465,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.644 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.465 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.034 0.346 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.75,
      top: 1.913,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.644 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.517 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.086 0.346 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 1.5,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.696 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.465 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.086 0.294 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.397,
    height: 1.086,
    viewBox: "0 0 2.397 1.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.739,
      top: 2.12,
      width: 2.397,
      height: 1.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.242 1.086 C 0.19 1.086 0.138 1.086 0.086 1.034 C -0.018 0.931 -0.018 0.776 0.034 0.672 C 0.034 0.621 0.605 0 1.28 0 C 1.644 0 2.007 0.155 2.319 0.465 C 2.423 0.569 2.423 0.724 2.319 0.827 C 2.215 0.931 2.059 0.931 1.955 0.827 C 1.748 0.621 1.54 0.517 1.28 0.517 C 0.813 0.517 0.398 0.982 0.398 0.982 C 0.398 1.086 0.346 1.086 0.242 1.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 10.892,
    height: 3.893,
    viewBox: "0 0 10.892 3.893",
    fill: "none",
    style: {
      position: "absolute",
      left: 80.011,
      top: 63.95,
      width: 10.892,
      height: 3.893,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.607 3.893 C 10.555 3.893 10.503 3.893 10.451 3.841 C 10.399 3.789 5.31 -0.709 0.325 0.79 C 0.17 0.842 0.066 0.738 0.014 0.635 C -0.038 0.48 0.066 0.376 0.17 0.325 C 5.466 -1.227 10.607 3.272 10.814 3.479 C 10.918 3.582 10.918 3.738 10.814 3.841 C 10.763 3.841 10.711 3.893 10.607 3.893 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.243,
    height: 1.668,
    viewBox: "0 0 11.243 1.668",
    fill: "none",
    style: {
      position: "absolute",
      left: 44.857,
      top: 36.235,
      width: 11.243,
      height: 1.668,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.493 1.668 C 0.481 1.668 0.066 0.686 0.014 0.531 C -0.038 0.375 0.066 0.272 0.17 0.22 C 0.325 0.169 0.429 0.272 0.481 0.375 C 0.533 0.427 1.52 2.289 10.918 0.013 C 11.074 -0.038 11.178 0.065 11.23 0.22 C 11.282 0.375 11.178 0.479 11.022 0.531 C 7.543 1.41 5.155 1.668 3.493 1.668 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.831,
    height: 1.745,
    viewBox: "0 0 1.831 1.745",
    fill: "none",
    style: {
      position: "absolute",
      left: 87.592,
      top: 54.618,
      width: 1.831,
      height: 1.745,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.572 1.745 C 1.416 1.745 1.312 1.642 1.312 1.487 C 1.26 1.073 1.156 0.763 0.948 0.608 C 0.689 0.401 0.325 0.504 0.325 0.504 C 0.17 0.556 0.066 0.452 0.014 0.349 C -0.038 0.194 0.066 0.09 0.17 0.039 C 0.17 0.039 0.741 -0.116 1.26 0.194 C 1.624 0.452 1.779 0.866 1.831 1.435 C 1.831 1.642 1.727 1.745 1.572 1.745 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.831,
    height: 1.797,
    viewBox: "0 0 1.831 1.797",
    fill: "none",
    style: {
      position: "absolute",
      left: 85.1,
      top: 54.463,
      width: 1.831,
      height: 1.797,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.572 1.797 C 1.416 1.797 1.312 1.693 1.312 1.538 C 1.26 1.125 1.156 0.814 0.948 0.659 C 0.689 0.452 0.325 0.556 0.325 0.556 C 0.17 0.608 0.066 0.504 0.014 0.349 C -0.038 0.194 0.066 0.09 0.17 0.039 C 0.17 0.039 0.741 -0.116 1.26 0.194 C 1.624 0.452 1.779 0.866 1.831 1.435 C 1.831 1.693 1.727 1.797 1.572 1.797 C 1.572 1.797 1.624 1.797 1.572 1.797 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.831,
    height: 1.745,
    viewBox: "0 0 1.831 1.745",
    fill: "none",
    style: {
      position: "absolute",
      left: 84.944,
      top: 51.981,
      width: 1.831,
      height: 1.745,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.572 1.745 C 1.416 1.745 1.312 1.642 1.312 1.487 C 1.26 1.073 1.156 0.763 0.948 0.608 C 0.689 0.401 0.325 0.504 0.325 0.504 C 0.17 0.556 0.066 0.452 0.014 0.349 C -0.038 0.194 0.066 0.09 0.17 0.039 C 0.17 0.039 0.741 -0.116 1.26 0.194 C 1.624 0.452 1.779 0.866 1.831 1.435 C 1.831 1.642 1.727 1.745 1.572 1.745 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.831,
    height: 1.797,
    viewBox: "0 0 1.831 1.797",
    fill: "none",
    style: {
      position: "absolute",
      left: 82.815,
      top: 52.342,
      width: 1.831,
      height: 1.797,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.572 1.797 C 1.416 1.797 1.312 1.693 1.312 1.538 C 1.26 1.125 1.156 0.814 0.948 0.659 C 0.689 0.452 0.325 0.556 0.325 0.556 C 0.17 0.608 0.066 0.504 0.014 0.349 C -0.038 0.194 0.066 0.09 0.17 0.039 C 0.17 0.039 0.741 -0.116 1.26 0.194 C 1.624 0.452 1.779 0.866 1.831 1.435 C 1.831 1.642 1.727 1.797 1.572 1.797 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.831,
    height: 1.797,
    viewBox: "0 0 1.831 1.797",
    fill: "none",
    style: {
      position: "absolute",
      left: 87.332,
      top: 56.686,
      width: 1.831,
      height: 1.797,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.572 1.797 C 1.416 1.797 1.312 1.693 1.312 1.538 C 1.26 1.125 1.156 0.814 0.948 0.659 C 0.689 0.452 0.325 0.556 0.325 0.556 C 0.17 0.608 0.066 0.504 0.014 0.349 C -0.038 0.194 0.066 0.09 0.17 0.039 C 0.17 0.039 0.741 -0.116 1.26 0.194 C 1.624 0.452 1.779 0.866 1.831 1.435 C 1.831 1.642 1.727 1.745 1.572 1.797 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.831,
    height: 1.797,
    viewBox: "0 0 1.831 1.797",
    fill: "none",
    style: {
      position: "absolute",
      left: 89.202,
      top: 56.789,
      width: 1.831,
      height: 1.797,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.572 1.797 C 1.416 1.797 1.312 1.693 1.312 1.538 C 1.26 1.125 1.156 0.814 0.948 0.659 C 0.689 0.452 0.325 0.556 0.325 0.556 C 0.17 0.608 0.066 0.504 0.014 0.349 C -0.038 0.194 0.066 0.09 0.17 0.039 C 0.17 0.039 0.741 -0.116 1.26 0.194 C 1.624 0.452 1.779 0.866 1.831 1.435 C 1.831 1.642 1.727 1.745 1.572 1.797 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.176,
    height: 23.166,
    viewBox: "0 0 10.176 23.166",
    fill: "none",
    style: {
      position: "absolute",
      left: 58.787,
      top: 7.808,
      width: 10.176,
      height: 23.166,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.516 23.166 C 8.464 23.166 8.412 23.166 8.36 23.114 C 8.256 23.011 8.256 22.855 8.36 22.752 C 10.126 20.787 10.022 18.926 7.997 16.805 C 6.595 15.306 6.439 13.134 6.283 10.859 C 6.127 9.049 6.023 7.188 5.296 5.326 C 3.687 1.241 0.26 0.517 0.208 0.517 C 0.052 0.465 0 0.362 0 0.207 C 0 0.052 0.156 0 0.312 0 C 0.467 0.052 4.05 0.776 5.764 5.119 C 6.543 7.032 6.698 9.049 6.802 10.807 C 6.958 13.082 7.114 15.047 8.412 16.443 C 10.645 18.822 10.749 20.942 8.776 23.114 C 8.672 23.114 8.568 23.166 8.516 23.166 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.210,
    height: 9.618,
    viewBox: "0 0 5.210 9.618",
    fill: "none",
    style: {
      position: "absolute",
      left: 66.818,
      top: 32.732,
      width: 5.21,
      height: 9.618,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.951 9.618 C 4.795 9.618 4.691 9.514 4.691 9.359 C 4.691 8.377 4.016 8.015 2.874 7.55 C 1.991 7.188 1.004 6.774 0.537 5.791 C -0.45 3.775 0.225 0.362 0.225 0.207 C 0.277 0.052 0.381 0 0.537 0 C 0.693 0.052 0.745 0.155 0.745 0.31 C 0.745 0.362 0.07 3.723 1.004 5.585 C 1.42 6.412 2.25 6.722 3.081 7.084 C 4.12 7.498 5.21 7.963 5.21 9.359 C 5.21 9.514 5.106 9.618 4.951 9.618 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.019,
    height: 11.086,
    viewBox: "0 0 4.019 11.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 60.908,
      top: 30.385,
      width: 4.019,
      height: 11.086,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.643 11.086 C 3.591 11.086 3.591 11.086 3.643 11.086 C 3.435 11.034 3.383 10.931 3.383 10.776 C 3.643 9.535 3.072 9.224 2.241 8.707 C 1.41 8.19 0.32 7.57 0.112 5.708 C -0.355 2.192 0.787 0.175 0.839 0.124 C 0.891 0.02 1.047 -0.031 1.202 0.02 C 1.306 0.072 1.358 0.227 1.306 0.382 C 1.306 0.382 0.216 2.295 0.631 5.657 C 0.839 7.26 1.722 7.777 2.553 8.294 C 3.383 8.811 4.266 9.328 3.955 10.931 C 3.851 10.983 3.747 11.086 3.643 11.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.136,
    height: 17.667,
    viewBox: "0 0 5.136 17.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 69.709,
      top: 20.443,
      width: 5.136,
      height: 17.667,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.863 17.667 C 4.811 17.667 4.811 17.667 4.863 17.667 C 4.811 17.667 1.592 17.201 1.488 12.186 C 1.436 10.738 1.644 9.342 1.8 8.049 C 2.163 4.946 2.475 2.516 0.086 0.448 C -0.018 0.344 -0.018 0.189 0.034 0.086 C 0.138 -0.018 0.294 -0.018 0.398 0.034 C 3.046 2.257 2.682 4.946 2.319 8.101 C 2.163 9.393 2.007 10.738 2.007 12.186 C 2.111 16.788 4.863 17.201 4.915 17.201 C 5.071 17.201 5.175 17.356 5.123 17.512 C 5.071 17.563 4.967 17.667 4.863 17.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.147,
    height: 8.908,
    viewBox: "0 0 6.147 8.908",
    fill: "none",
    style: {
      position: "absolute",
      left: 63.493,
      top: 7.846,
      width: 6.147,
      height: 8.908,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.887 8.908 C 5.783 8.908 5.628 8.804 5.628 8.701 C 4.745 1.824 0.227 0.479 0.175 0.479 C 0.019 0.427 -0.032 0.272 0.019 0.169 C 0.071 0.065 0.227 -0.038 0.331 0.014 C 0.539 0.065 5.264 1.462 6.147 8.701 C 6.147 8.753 6.043 8.856 5.887 8.908 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.362,
    height: 4.639,
    viewBox: "0 0 4.362 4.639",
    fill: "none",
    style: {
      position: "absolute",
      left: 65.07,
      top: 2.135,
      width: 4.362,
      height: 4.639,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.26 4.639 C 0.104 4.639 0 4.484 0 4.38 C 0 4.277 0.156 1.743 1.662 0.554 C 2.337 0.037 3.168 -0.118 4.154 0.089 C 4.31 0.14 4.362 0.244 4.362 0.399 C 4.31 0.554 4.206 0.606 4.05 0.606 C 3.219 0.399 2.544 0.554 2.025 0.968 C 0.675 1.95 0.571 4.38 0.519 4.38 C 0.519 4.536 0.415 4.639 0.26 4.639 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.875,
    height: 4.654,
    viewBox: "0 0 4.875 4.654",
    fill: "none",
    style: {
      position: "absolute",
      left: 66.51,
      top: 2.792,
      width: 4.875,
      height: 4.654,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.273 4.654 C 0.169 4.654 0.065 4.55 0.014 4.447 C -0.038 4.292 0.065 4.188 0.221 4.137 C 0.273 4.137 4.739 3.154 4.323 0.31 C 4.323 0.155 4.427 0.052 4.531 0 C 4.687 0 4.791 0.103 4.843 0.207 C 5.31 3.516 0.533 4.55 0.325 4.602 C 0.273 4.654 0.273 4.654 0.273 4.654 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.316,
    height: 2.585,
    viewBox: "0 0 5.316 2.585",
    fill: "none",
    style: {
      position: "absolute",
      left: 67.802,
      top: 6.619,
      width: 5.316,
      height: 2.585,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.2 2.585 C 1.162 2.585 0.279 2.275 0.175 2.275 C 0.019 2.223 -0.032 2.068 0.019 1.965 C 0.071 1.81 0.227 1.758 0.331 1.81 C 0.331 1.81 2.356 2.482 3.654 1.758 C 4.226 1.448 4.589 0.931 4.797 0.207 C 4.849 0.052 4.952 0 5.108 0 C 5.264 0.052 5.316 0.155 5.316 0.31 C 5.108 1.189 4.641 1.81 3.914 2.223 C 3.447 2.482 2.823 2.585 2.2 2.585 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.093,
    height: 16.059,
    viewBox: "0 0 13.093 16.059",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.177,
      top: 7.52,
      width: 13.093,
      height: 16.059,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.618 16.059 C 0.514 16.059 0.41 16.007 0.358 15.852 C 0.358 15.8 -1.407 9.595 2.902 4.476 C 7.212 -0.643 12.82 0.029 12.872 0.029 C 13.028 0.029 13.132 0.184 13.08 0.339 C 13.08 0.494 12.924 0.598 12.768 0.546 C 12.716 0.546 7.42 -0.074 3.266 4.838 C -0.888 9.75 0.773 15.645 0.825 15.749 C 0.877 15.904 0.773 16.007 0.67 16.059 C 0.67 16.059 0.618 16.059 0.618 16.059 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.814,
    height: 2.244,
    viewBox: "0 0 5.814 2.244",
    fill: "none",
    style: {
      position: "absolute",
      left: 48.7,
      top: 5.202,
      width: 5.814,
      height: 2.244,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.57 2.244 L 5.518 2.244 C 5.362 2.193 5.31 2.089 5.31 1.934 C 5.31 1.934 5.414 1.469 5.05 1.055 C 4.687 0.693 3.596 0.176 0.325 0.9 C 0.169 0.952 0.065 0.848 0.014 0.693 C -0.038 0.538 0.065 0.435 0.221 0.383 C 2.921 -0.238 4.635 -0.083 5.414 0.693 C 5.985 1.262 5.777 1.986 5.777 2.038 C 5.777 2.193 5.673 2.244 5.57 2.244 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.054,
    height: 7.792,
    viewBox: "0 0 7.054 7.792",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.897,
      top: 72.703,
      width: 7.054,
      height: 7.792,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.932 7.792 C 5.88 7.792 5.828 7.792 5.828 7.74 C 5.62 7.637 0.376 4.896 0.012 2.621 C -0.04 2.104 0.064 1.69 0.48 1.277 C 1.362 0.398 2.557 0.449 3.543 1.38 C 3.907 0.553 4.634 -0.171 5.309 0.036 C 5.88 0.191 6.347 0.553 6.659 1.122 C 7.749 3.19 6.243 7.43 6.192 7.637 C 6.192 7.689 6.088 7.74 6.036 7.792 C 6.036 7.792 5.984 7.792 5.932 7.792 Z M 1.934 1.173 C 1.57 1.173 1.207 1.328 0.843 1.69 C 0.584 1.949 0.48 2.207 0.532 2.569 C 0.791 4.121 4.166 6.292 5.776 7.172 C 6.088 6.189 7.022 2.931 6.192 1.38 C 5.984 0.966 5.62 0.708 5.153 0.553 C 4.79 0.449 4.218 1.018 3.907 1.794 C 4.478 2.466 4.945 3.397 4.738 3.862 C 4.686 4.017 4.53 4.121 4.322 4.121 C 3.803 4.121 3.543 3.862 3.388 3.707 C 3.024 3.138 3.18 2.363 3.336 1.897 C 3.076 1.587 2.505 1.173 1.934 1.173 Z M 3.803 2.414 C 3.699 2.828 3.751 3.242 3.907 3.448 C 4.011 3.604 4.166 3.655 4.374 3.655 C 4.322 3.448 4.166 2.931 3.803 2.414 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.995,0.103,-0.104,0.995,32.727,52)",
      transformOrigin: "0 0",
      width: 48.731,
      height: 36,
      fontFamily: "SVN-Cookies, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: 0.9828906059265137,
      color: "rgb(255,255,255)",
      whiteSpace: "pre-wrap"
    }
  }, props.text1 ?? "Cảm ơn\nnhìu nhìu")));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 150,
      height: 120,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 1,
      width: 129,
      height: 118,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.003,
      top: 9.55,
      width: 125.696,
      height: 78.307,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 73.705,
      height: 78.307,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 48.538,
    height: 56.486,
    viewBox: "0 0 48.538 56.486",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.875,
      top: 10.571,
      width: 48.538,
      height: 56.486,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9.808 C 0 9.808 35.399 -1.148 35.929 0.099 C 38.077 5.139 49.85 44.482 48.418 45.198 C 46.986 45.914 16.864 57.799 14 56.366 C 11.137 54.934 0 9.808 0 9.808 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 56.356,
    height: 57.063,
    viewBox: "0 0 56.356 57.063",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.349,
      top: 10.299,
      width: 56.356,
      height: 57.063,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 51.329 24.46 C 48.28 13.848 44.807 2.759 43.719 0.265 C 43.613 0 43.216 0 43.056 0 C 39.159 0 8.718 9.418 7.419 9.816 C 7.26 9.869 7.18 10.001 7.233 10.161 C 7.552 11.407 8.506 15.334 9.832 20.374 C 7.286 21.435 -0.456 24.804 0.021 26.635 C 0.26 27.563 2.885 35.257 5.43 42.26 C 10.256 55.525 11.184 56.533 11.609 56.533 C 11.662 56.533 11.688 56.533 11.715 56.506 C 12.749 56.241 18.052 54.066 19.537 53.455 C 20.306 55.419 20.969 56.665 21.446 56.904 C 21.658 57.01 21.923 57.063 22.321 57.063 C 27.863 57.063 55.095 46.24 56.129 45.736 C 56.447 45.55 57.269 45.152 51.329 24.46 Z M 11.635 55.923 C 10.203 54.543 1.267 29.341 0.551 26.502 C 0.313 25.574 5.218 22.921 9.965 20.958 C 10.309 22.258 10.654 23.611 11.025 24.99 C 8.957 25.866 4.927 27.723 4.927 28.757 C 4.927 29.42 7.207 35.867 8.745 40.032 C 12.616 50.59 13.067 50.776 13.253 50.829 C 13.332 50.856 13.412 50.882 13.544 50.882 C 14.578 50.882 17.044 49.768 17.999 49.29 C 18.45 50.643 18.874 51.864 19.272 52.925 C 17.893 53.509 12.828 55.604 11.635 55.923 Z M 17.813 48.733 C 16.037 49.582 13.942 50.378 13.491 50.299 C 12.51 49.105 5.536 29.58 5.51 28.757 C 5.589 28.253 8.427 26.741 11.184 25.574 C 13.226 33.32 15.719 42.366 17.813 48.733 Z M 55.758 45.232 C 53.583 46.266 27.518 56.453 22.268 56.453 C 21.897 56.453 21.738 56.4 21.658 56.374 C 21.287 56.188 20.704 55.047 19.988 53.19 C 20.041 53.111 20.067 53.004 20.041 52.898 C 20.014 52.819 19.908 52.739 19.829 52.739 C 17.76 47.221 14.631 36.238 11.715 25.255 C 11.768 25.176 11.794 25.07 11.741 24.964 C 11.715 24.884 11.662 24.831 11.582 24.804 C 10.256 19.764 8.957 14.723 7.843 10.24 C 10.893 9.285 39.424 0.531 43.056 0.531 C 43.136 0.531 43.189 0.531 43.216 0.531 C 45.496 6.022 56.474 43.03 55.758 45.232 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.609,
    height: 63.324,
    viewBox: "0 0 37.609 63.324",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.689,
      top: 0,
      width: 37.609,
      height: 63.324,
      color: "rgb(255,155,75)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 33.167 C 0 33.167 8.087 31.177 11.137 20.22 C 12.489 15.313 4.852 7.46 10.606 7.46 C 16.36 7.46 16.705 10.511 16.705 10.511 C 16.705 10.511 8.087 2.234 13.125 1.518 C 18.163 0.801 22.114 4.383 22.114 6.558 C 22.114 8.733 18.163 -1.003 21.398 0.085 C 24.633 1.173 27.497 11.042 28.584 15.737 C 29.3 18.894 39.986 53.328 37.122 54.787 C 34.259 56.22 11.72 64.311 9.228 63.224 C 6.682 62.109 0 33.167 0 33.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.616,
    height: 27.537,
    viewBox: "0 0 15.616 27.537",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.192,
      top: 31.442,
      width: 15.616,
      height: 27.537,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.191 27.537 C 9.059 27.537 8.952 27.457 8.926 27.351 L 0.017 2.626 C -0.036 2.494 0.043 2.335 0.176 2.255 C 0.68 2.016 5.055 0 5.983 0 C 6.248 0 6.354 0.159 6.38 0.239 L 6.46 0.451 C 16.669 25.468 15.82 25.839 15.396 25.998 C 14.309 26.449 9.43 27.457 9.244 27.51 C 9.218 27.537 9.191 27.537 9.191 27.537 Z M 0.68 2.679 L 9.377 26.9 C 10.358 26.688 14.044 25.892 15.104 25.521 C 15.21 24.3 11.657 14.617 5.956 0.69 L 5.93 0.61 C 5.161 0.69 2.43 1.857 0.68 2.679 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.403,
    height: 27.776,
    viewBox: "0 0 16.403 27.776",
    fill: "none",
    style: {
      position: "absolute",
      left: 42.938,
      top: 27.755,
      width: 16.403,
      height: 27.776,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.149 27.776 C 10.043 27.776 9.91 27.696 9.884 27.59 L 0.02 2.388 C -0.033 2.255 0.02 2.069 0.179 2.016 C 0.365 1.937 4.713 0 6.49 0 C 6.941 0 7.259 0.133 7.391 0.398 C 7.656 0.929 10.096 7.189 12.35 13.317 C 16.911 25.68 16.539 25.919 16.248 26.104 C 15.505 26.555 10.759 27.67 10.229 27.776 C 10.175 27.776 10.149 27.776 10.149 27.776 Z M 0.656 2.441 L 10.335 27.165 C 12.297 26.714 15.134 25.998 15.85 25.653 C 15.797 23.69 7.497 1.884 6.888 0.663 C 6.888 0.637 6.781 0.584 6.516 0.584 C 5.058 0.584 1.611 2.016 0.656 2.441 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.321,
    height: 27.616,
    viewBox: "0 0 14.321 27.616",
    fill: "none",
    style: {
      position: "absolute",
      left: 53.097,
      top: 24.492,
      width: 14.321,
      height: 27.616,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.422 27.616 C 8.29 27.616 8.184 27.537 8.157 27.404 L 0.017 1.99 C -0.036 1.857 0.043 1.698 0.176 1.645 C 0.335 1.565 4.127 0 5.293 0 C 5.426 0 5.532 0.027 5.611 0.053 C 6.725 0.504 14.07 22.788 14.309 25.202 C 14.335 25.494 14.335 25.786 14.123 25.945 C 13.195 26.555 8.952 27.51 8.449 27.616 C 8.475 27.616 8.449 27.616 8.422 27.616 Z M 0.653 2.069 L 8.634 26.98 C 10.04 26.661 13.009 25.919 13.778 25.468 C 13.858 24.804 12.744 20.692 10.066 12.84 C 7.759 6.102 5.824 1.141 5.399 0.557 C 5.373 0.557 5.373 0.557 5.32 0.557 C 4.498 0.584 1.873 1.565 0.653 2.069 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 33.879,
    height: 10.338,
    viewBox: "0 0 33.879 10.338",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.909,
      top: 11.129,
      width: 33.879,
      height: 10.338,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.292 10.338 C 0.133 10.338 0 10.205 0 10.046 C 0 9.887 0.133 9.754 0.292 9.754 C 0.477 9.754 18.853 9.224 33.437 0.045 C 33.569 -0.035 33.755 -0.008 33.834 0.124 C 33.914 0.257 33.887 0.443 33.755 0.522 C 19.012 9.781 0.504 10.338 0.292 10.338 C 0.292 10.338 0.318 10.338 0.292 10.338 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.837,
    height: 5.813,
    viewBox: "0 0 5.837 5.813",
    fill: "none",
    style: {
      position: "absolute",
      left: 47.569,
      top: 3.292,
      width: 5.837,
      height: 5.813,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.519 5.813 C 5.36 5.813 5.227 5.681 5.227 5.521 C 5.227 0.905 0.481 0.587 0.269 0.587 C 0.109 0.587 -0.023 0.428 0.003 0.269 C 0.003 0.11 0.136 -0.023 0.322 0.003 C 0.375 0.003 5.837 0.375 5.837 5.521 C 5.81 5.681 5.678 5.813 5.519 5.813 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.810,
    height: 5.521,
    viewBox: "0 0 5.810 5.521",
    fill: "none",
    style: {
      position: "absolute",
      left: 42.928,
      top: 8.81,
      width: 5.81,
      height: 5.521,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.519 5.521 C 5.36 5.521 5.227 5.389 5.227 5.23 C 5.227 1.038 0.454 0.587 0.269 0.587 C 0.109 0.561 -0.023 0.428 0.003 0.269 C 0.003 0.11 0.162 -0.023 0.322 0.003 C 0.375 0.003 5.81 0.507 5.81 5.23 C 5.81 5.389 5.678 5.521 5.519 5.521 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.922,
    height: 7.398,
    viewBox: "0 0 2.922 7.398",
    fill: "none",
    style: {
      position: "absolute",
      left: 54.231,
      top: 3.59,
      width: 2.922,
      height: 7.398,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.489 7.398 C 2.463 7.398 2.436 7.398 2.41 7.398 C 2.251 7.345 2.171 7.186 2.198 7.054 C 3.02 3.897 0.103 0.528 0.077 0.474 C -0.03 0.342 -0.03 0.183 0.103 0.077 C 0.236 -0.03 0.395 -0.03 0.501 0.103 C 0.633 0.262 3.656 3.738 2.755 7.213 C 2.755 7.319 2.622 7.398 2.489 7.398 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 32.265,
    height: 49.340,
    viewBox: "0 0 32.265 49.340",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.295,
      top: 28.967,
      width: 32.265,
      height: 49.34,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.409 6.003 C 11.409 6.003 15.916 -1.266 17.083 0.194 C 21.962 6.295 15.916 11.389 15.916 11.389 C 16.341 13.723 21.883 8.338 25.064 11.389 C 28.273 14.44 24.189 15.899 24.189 15.899 C 24.189 15.899 27.398 14.599 28.114 17.941 C 28.83 21.284 26.655 22 26.655 22 C 26.655 22 29.996 21.284 30.447 23.751 C 30.898 26.218 28.565 27.253 28.565 27.253 C 28.565 27.253 31.19 25.369 32.197 27.969 C 33.205 30.596 22.758 37.281 20.716 39.032 C 18.674 40.783 22.174 48.476 17.799 49.219 C 13.424 49.962 3.454 47.123 0.352 45.584 C -1.398 44.709 3.984 27.837 3.401 22.451 C 2.818 17.066 11.409 6.003 11.409 6.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.338,
    height: 2.923,
    viewBox: "0 0 4.338 2.923",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.602,
      top: 31.331,
      width: 4.338,
      height: 2.923,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.469 2.923 C 0.727 2.923 0.17 2.605 0.143 2.578 C 0.011 2.498 -0.042 2.313 0.037 2.18 C 0.117 2.047 0.303 1.994 0.435 2.074 C 0.435 2.074 1.257 2.525 2.106 2.233 C 2.822 1.968 3.378 1.305 3.776 0.19 C 3.829 0.031 3.988 -0.048 4.147 0.031 C 4.306 0.084 4.386 0.243 4.306 0.403 C 3.829 1.676 3.14 2.472 2.265 2.79 C 2 2.896 1.708 2.923 1.469 2.923 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.781,
    height: 2.762,
    viewBox: "0 0 4.781 2.762",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.43,
      top: 43.695,
      width: 4.781,
      height: 2.762,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.297 2.762 C 0.191 2.762 0.085 2.709 0.032 2.603 C -0.048 2.444 0.032 2.285 0.164 2.205 C 0.191 2.179 3.346 0.746 4.327 0.056 C 4.46 -0.05 4.646 0.003 4.725 0.136 C 4.831 0.269 4.778 0.454 4.646 0.534 C 3.611 1.277 0.509 2.683 0.376 2.736 C 0.376 2.762 0.323 2.762 0.297 2.762 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.670,
    height: 2.935,
    viewBox: "0 0 4.670 2.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.755,
      top: 49.492,
      width: 4.67,
      height: 2.935,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.305 2.935 C 0.173 2.935 0.067 2.855 0.014 2.722 C -0.039 2.563 0.067 2.404 0.226 2.351 C 1.578 1.98 3.806 1.051 4.097 0.202 C 4.15 0.043 4.309 -0.037 4.468 0.016 C 4.628 0.069 4.707 0.229 4.654 0.388 C 4.177 1.794 0.783 2.802 0.385 2.908 C 0.332 2.935 0.305 2.935 0.305 2.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.919,
    height: 3.787,
    viewBox: "0 0 4.919 3.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.949,
      top: 54.449,
      width: 4.919,
      height: 3.787,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.285 3.787 C 0.179 3.787 0.073 3.707 0.02 3.601 C -0.033 3.442 0.02 3.283 0.179 3.23 C 0.205 3.203 3.706 1.797 4.368 0.179 C 4.422 0.02 4.607 -0.033 4.74 0.02 C 4.899 0.073 4.952 0.259 4.899 0.391 C 4.13 2.222 0.524 3.681 0.391 3.76 C 0.338 3.787 0.312 3.787 0.285 3.787 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21.739,
    height: 7.677,
    viewBox: "0 0 21.739 7.677",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.76,
      top: 65.097,
      width: 21.739,
      height: 7.677,
      color: "rgb(20,30,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.13 7.677 C 14.198 7.677 2.69 5.634 0.967 4.149 C 0.251 3.512 -0.068 2.849 0.012 2.159 C 0.171 0.885 1.682 0.063 1.762 0.037 C 1.895 -0.043 2.08 0.01 2.16 0.169 C 2.239 0.302 2.186 0.488 2.027 0.567 C 2.027 0.567 0.701 1.283 0.595 2.238 C 0.542 2.716 0.807 3.22 1.364 3.724 C 3.592 5.661 19.74 7.863 20.88 6.934 C 21.675 6.138 20.323 4.732 20.297 4.732 C 20.191 4.626 20.191 4.44 20.297 4.308 C 20.403 4.175 20.588 4.202 20.721 4.308 C 20.8 4.387 22.524 6.138 21.304 7.332 C 21.039 7.571 20.27 7.677 19.13 7.677 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.380,
    height: 6.238,
    viewBox: "0 0 22.380 6.238",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 70.012,
      width: 22.38,
      height: 6.238,
      color: "rgb(20,30,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.916 6.238 C 16.495 6.238 9.23 4.566 6.101 3.77 C 0.268 2.258 0.109 1.754 0.056 1.542 C -0.077 1.091 0.056 0.773 0.162 0.587 C 0.48 0.11 1.09 0.03 1.169 0.003 C 1.328 -0.023 1.461 0.11 1.487 0.269 C 1.514 0.428 1.381 0.56 1.222 0.587 C 1.116 0.614 0.772 0.693 0.639 0.905 C 0.559 1.038 0.559 1.171 0.612 1.383 C 1.222 2.073 14.003 5.442 19.518 5.654 C 20.897 5.707 21.162 5.521 21.215 5.468 C 21.666 5.017 21.878 4.646 21.799 4.381 C 21.746 4.142 21.48 4.062 21.454 4.062 C 21.295 4.009 21.215 3.85 21.268 3.691 C 21.321 3.532 21.48 3.452 21.64 3.505 C 21.852 3.585 22.249 3.824 22.356 4.248 C 22.462 4.726 22.223 5.256 21.613 5.866 C 21.374 6.132 20.765 6.238 19.916 6.238 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.147,
    height: 13.275,
    viewBox: "0 0 4.147 13.275",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.685,
      top: 44.324,
      width: 4.147,
      height: 13.275,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.292 13.275 C 0.133 13.275 0 13.143 0 12.983 C 0 12.745 0 7.227 0.663 5.555 C 1.326 3.937 3.527 0.303 3.606 0.144 C 3.686 0.011 3.871 -0.042 4.004 0.037 C 4.136 0.117 4.19 0.303 4.11 0.435 C 4.083 0.462 1.83 4.176 1.22 5.768 C 0.61 7.333 0.583 12.93 0.583 12.983 C 0.557 13.143 0.451 13.275 0.292 13.275 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.657,
    height: 3.028,
    viewBox: "0 0 0.657 3.028",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.932,
      top: 59.48,
      width: 0.657,
      height: 3.028,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.362 3.001 C 0.23 3.001 0.124 2.922 0.097 2.815 C -0.088 2.285 0.044 0.587 0.071 0.269 C 0.071 0.11 0.23 -0.023 0.389 0.003 C 0.548 0.03 0.681 0.163 0.654 0.322 C 0.601 1.065 0.548 2.338 0.627 2.656 C 0.681 2.815 0.601 2.975 0.442 3.028 C 0.415 2.975 0.389 3.001 0.362 3.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 52.057,
      top: 0,
      width: 73.639,
      height: 78.301,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 48.538,
    height: 56.486,
    viewBox: "0 0 48.538 56.486",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.273,
      top: 10.571,
      width: 48.538,
      height: 56.486,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.538 9.808 C 48.538 9.808 13.14 -1.148 12.609 0.099 C 10.462 5.139 -1.311 44.482 0.12 45.198 C 1.552 45.914 31.674 57.799 34.538 56.366 C 37.402 54.934 48.538 9.808 48.538 9.808 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 56.386,
    height: 57.063,
    viewBox: "0 0 56.386 57.063",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 10.299,
      width: 56.386,
      height: 57.063,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 46.505 20.374 C 47.804 15.307 48.785 11.407 49.103 10.161 C 49.13 10.001 49.05 9.869 48.918 9.816 C 47.619 9.418 17.178 0 13.28 0 C 13.121 0 12.75 0 12.618 0.265 C 11.557 2.759 8.057 13.848 5.007 24.46 C -0.932 45.125 -0.11 45.55 0.261 45.736 C 1.269 46.24 28.501 57.063 34.069 57.063 C 34.467 57.063 34.732 57.01 34.944 56.904 C 35.421 56.665 36.058 55.419 36.853 53.455 C 38.311 54.066 43.641 56.268 44.675 56.506 C 44.702 56.506 44.755 56.533 44.781 56.533 C 45.206 56.533 46.134 55.525 50.96 42.26 C 53.505 35.257 56.13 27.563 56.369 26.635 C 56.793 24.831 49.05 21.435 46.505 20.374 Z M 34.679 56.4 C 34.599 56.453 34.414 56.48 34.069 56.48 C 28.819 56.48 2.754 46.293 0.579 45.258 C -0.137 43.056 10.841 6.049 13.121 0.584 C 13.148 0.584 13.201 0.584 13.28 0.584 C 16.913 0.584 45.418 9.365 48.494 10.293 C 47.38 14.777 46.107 19.817 44.755 24.857 C 44.702 24.884 44.622 24.937 44.596 25.017 C 44.543 25.123 44.569 25.229 44.622 25.308 C 41.706 36.291 38.577 47.274 36.508 52.792 C 36.429 52.819 36.323 52.872 36.296 52.951 C 36.243 53.058 36.27 53.164 36.349 53.243 C 35.633 55.047 35.05 56.188 34.679 56.4 Z M 45.153 25.574 C 47.91 26.768 50.747 28.28 50.827 28.757 C 50.8 29.606 43.827 49.131 42.846 50.299 C 42.395 50.378 40.3 49.582 38.524 48.733 C 40.618 42.366 43.111 33.32 45.153 25.574 Z M 44.702 55.923 C 43.535 55.578 38.444 53.482 37.039 52.898 C 37.436 51.837 37.861 50.617 38.311 49.264 C 39.293 49.715 41.759 50.856 42.766 50.856 C 42.872 50.856 42.978 50.829 43.058 50.803 C 43.217 50.723 43.694 50.564 47.566 40.005 C 49.103 35.84 51.384 29.394 51.384 28.731 C 51.384 27.696 47.353 25.839 45.285 24.964 C 45.656 23.558 46.001 22.205 46.346 20.931 C 51.066 22.894 55.971 25.574 55.759 26.476 C 55.07 29.367 46.134 54.543 44.702 55.923 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.582,
    height: 63.324,
    viewBox: "0 0 37.582 63.324",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.415,
      top: 0,
      width: 37.582,
      height: 63.324,
      color: "rgb(255,155,75)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.582 33.167 C 37.582 33.167 29.495 31.177 26.446 20.22 C 25.093 15.313 32.73 7.46 26.976 7.46 C 21.222 7.46 20.877 10.511 20.877 10.511 C 20.877 10.511 29.495 2.234 24.483 1.518 C 19.472 0.801 15.494 4.383 15.494 6.558 C 15.494 8.733 19.445 -1.003 16.21 0.085 C 12.975 1.173 10.112 11.042 9.025 15.737 C 8.309 18.894 -2.377 53.328 0.486 54.787 C 3.35 56.247 25.889 64.311 28.381 63.224 C 30.9 62.109 37.582 33.167 37.582 33.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.620,
    height: 27.510,
    viewBox: "0 0 15.620 27.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.875,
      top: 31.469,
      width: 15.62,
      height: 27.51,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.428 27.51 C 6.402 27.51 6.402 27.51 6.375 27.51 C 6.163 27.457 1.311 26.449 0.224 25.998 C -0.201 25.812 -1.076 25.468 9.16 0.451 L 9.239 0.239 C 9.266 0.159 9.372 0 9.637 0 C 10.565 0 14.94 2.016 15.444 2.255 C 15.576 2.308 15.656 2.467 15.603 2.626 L 6.72 27.351 C 6.667 27.431 6.561 27.51 6.428 27.51 Z M 0.542 25.494 C 1.603 25.892 5.262 26.661 6.269 26.874 L 14.967 2.653 C 13.19 1.83 10.459 0.663 9.743 0.557 L 9.716 0.637 C 3.989 14.591 0.436 24.247 0.542 25.494 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.400,
    height: 27.776,
    viewBox: "0 0 16.400 27.776",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.371,
      top: 27.755,
      width: 16.4,
      height: 27.776,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.228 27.776 C 6.201 27.776 6.175 27.776 6.175 27.776 C 5.644 27.643 0.898 26.555 0.156 26.104 C -0.136 25.919 -0.507 25.68 4.053 13.317 C 6.307 7.189 8.747 0.929 9.012 0.398 C 9.144 0.133 9.436 0 9.913 0 C 11.69 0 16.039 1.91 16.224 2.016 C 16.357 2.069 16.436 2.255 16.383 2.388 L 6.519 27.59 C 6.466 27.723 6.36 27.776 6.228 27.776 Z M 0.553 25.653 C 1.243 25.972 4.08 26.688 6.069 27.165 L 15.747 2.441 C 14.792 2.016 11.345 0.61 9.913 0.61 C 9.622 0.61 9.542 0.663 9.542 0.69 C 8.906 1.884 0.606 23.69 0.553 25.653 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.321,
    height: 27.616,
    viewBox: "0 0 14.321 27.616",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.242,
      top: 24.492,
      width: 14.321,
      height: 27.616,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.925 27.616 C 5.899 27.616 5.872 27.616 5.872 27.616 C 5.395 27.51 1.126 26.555 0.198 25.945 C -0.014 25.812 -0.014 25.521 0.012 25.202 C 0.251 22.788 7.622 0.504 8.709 0.053 C 8.789 0.027 8.895 0 9.027 0 C 10.221 0 13.986 1.592 14.145 1.645 C 14.278 1.698 14.357 1.857 14.304 1.99 L 6.164 27.404 C 6.164 27.537 6.058 27.616 5.925 27.616 Z M 0.569 25.468 C 1.338 25.919 4.308 26.661 5.713 26.98 L 13.694 2.069 C 12.475 1.565 9.849 0.557 9.027 0.557 C 9.001 0.557 8.974 0.557 8.948 0.557 C 8.524 1.141 6.588 6.102 4.281 12.84 C 1.603 20.692 0.489 24.804 0.569 25.468 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 33.891,
    height: 10.323,
    viewBox: "0 0 33.891 10.323",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.913,
      top: 11.144,
      width: 33.891,
      height: 10.323,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.573 10.323 C 33.387 10.323 14.852 9.766 0.136 0.534 C 0.003 0.454 -0.05 0.269 0.056 0.136 C 0.136 0.003 0.322 -0.05 0.454 0.056 C 15.038 9.209 33.413 9.739 33.599 9.766 C 33.758 9.766 33.891 9.899 33.891 10.058 C 33.864 10.19 33.732 10.323 33.573 10.323 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.834,
    height: 5.810,
    viewBox: "0 0 5.834 5.810",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.307,
      top: 3.295,
      width: 5.834,
      height: 5.81,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.292 5.81 C 0.133 5.81 0 5.677 0 5.518 C 0 0.371 5.462 0 5.515 0 C 5.674 0 5.807 0.106 5.834 0.265 C 5.834 0.424 5.727 0.557 5.568 0.584 C 5.356 0.584 0.61 0.929 0.61 5.518 C 0.583 5.677 0.451 5.81 0.292 5.81 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.810,
    height: 5.521,
    viewBox: "0 0 5.810 5.521",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.947,
      top: 8.81,
      width: 5.81,
      height: 5.521,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.292 5.521 C 0.133 5.521 0 5.389 0 5.23 C 0 0.507 5.436 0.003 5.489 0.003 C 5.648 -0.023 5.78 0.11 5.807 0.269 C 5.834 0.428 5.701 0.561 5.542 0.587 C 5.33 0.614 0.583 1.065 0.583 5.23 C 0.583 5.389 0.451 5.521 0.292 5.521 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.922,
    height: 7.425,
    viewBox: "0 0 2.922 7.425",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.507,
      top: 3.563,
      width: 2.922,
      height: 7.425,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.459 7.425 C 0.327 7.425 0.221 7.345 0.168 7.213 C -0.734 3.764 2.289 0.262 2.421 0.103 C 2.528 -0.03 2.713 -0.03 2.819 0.077 C 2.952 0.183 2.952 0.368 2.846 0.474 C 2.819 0.501 -0.098 3.897 0.724 7.054 C 0.777 7.213 0.671 7.372 0.512 7.398 C 0.512 7.425 0.486 7.425 0.459 7.425 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 32.265,
    height: 49.333,
    viewBox: "0 0 32.265 49.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.126,
      top: 28.967,
      width: 32.265,
      height: 49.333,
      color: "rgb(234,163,123)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.857 6.003 C 20.857 6.003 16.349 -1.266 15.182 0.194 C 10.303 6.295 16.349 11.389 16.349 11.389 C 15.925 13.723 10.383 8.338 7.201 11.389 C 3.993 14.44 8.076 15.899 8.076 15.899 C 8.076 15.899 4.868 14.599 4.152 17.941 C 3.436 21.284 5.61 22 5.61 22 C 5.61 22 2.269 21.284 1.818 23.751 C 1.368 26.218 3.701 27.253 3.701 27.253 C 3.701 27.253 1.076 25.369 0.068 27.969 C -0.939 30.596 9.508 37.281 11.55 39.032 C 13.591 40.783 10.091 48.476 14.466 49.219 C 18.815 49.935 28.812 47.123 31.914 45.584 C 33.664 44.709 28.281 27.837 28.865 22.451 C 29.448 17.066 20.857 6.003 20.857 6.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.350,
    height: 2.908,
    viewBox: "0 0 4.350 2.908",
    fill: "none",
    style: {
      position: "absolute",
      left: 54.735,
      top: 31.346,
      width: 4.35,
      height: 2.908,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.88 2.908 C 2.615 2.908 2.35 2.882 2.058 2.776 C 1.183 2.457 0.494 1.661 0.017 0.388 C -0.036 0.229 0.043 0.07 0.176 0.017 C 0.335 -0.036 0.494 0.043 0.547 0.176 C 0.971 1.29 1.528 1.98 2.244 2.219 C 3.119 2.537 3.914 2.059 3.914 2.059 C 4.047 1.98 4.233 2.033 4.312 2.165 C 4.392 2.298 4.339 2.484 4.206 2.563 C 4.206 2.59 3.649 2.908 2.88 2.908 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.775,
    height: 2.751,
    viewBox: "0 0 4.775 2.751",
    fill: "none",
    style: {
      position: "absolute",
      left: 46.434,
      top: 43.707,
      width: 4.775,
      height: 2.751,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.526 2.751 C 4.473 2.751 4.446 2.751 4.393 2.724 C 4.261 2.671 1.158 1.239 0.124 0.522 C -0.008 0.416 -0.035 0.257 0.045 0.124 C 0.124 -0.008 0.31 -0.035 0.442 0.045 C 1.424 0.735 4.579 2.194 4.605 2.194 C 4.765 2.273 4.818 2.432 4.738 2.592 C 4.738 2.698 4.632 2.751 4.526 2.751 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.662,
    height: 2.908,
    viewBox: "0 0 4.662 2.908",
    fill: "none",
    style: {
      position: "absolute",
      left: 44.288,
      top: 49.518,
      width: 4.662,
      height: 2.908,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.365 2.908 C 4.338 2.908 4.312 2.908 4.285 2.908 C 3.888 2.802 0.494 1.82 0.016 0.388 C -0.037 0.229 0.043 0.069 0.202 0.016 C 0.361 -0.037 0.52 0.043 0.573 0.202 C 0.865 1.051 3.092 1.953 4.445 2.351 C 4.604 2.404 4.683 2.563 4.657 2.722 C 4.604 2.828 4.471 2.908 4.365 2.908 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.919,
    height: 3.787,
    viewBox: "0 0 4.919 3.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.818,
      top: 54.449,
      width: 4.919,
      height: 3.787,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.634 3.787 C 4.607 3.787 4.554 3.787 4.528 3.76 C 4.368 3.707 0.762 2.248 0.02 0.391 C -0.033 0.232 0.02 0.073 0.179 0.02 C 0.338 -0.033 0.497 0.02 0.55 0.179 C 1.213 1.797 4.713 3.203 4.74 3.23 C 4.899 3.283 4.952 3.469 4.899 3.601 C 4.872 3.734 4.766 3.787 4.634 3.787 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21.713,
    height: 7.687,
    viewBox: "0 0 21.713 7.687",
    fill: "none",
    style: {
      position: "absolute",
      left: 51.214,
      top: 65.087,
      width: 21.713,
      height: 7.687,
      color: "rgb(255,26,18)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.583 7.687 C 1.443 7.687 0.674 7.581 0.435 7.342 C -0.785 6.122 0.939 4.398 1.018 4.318 C 1.125 4.212 1.31 4.212 1.416 4.318 C 1.522 4.424 1.522 4.61 1.416 4.716 C 1.39 4.742 0.037 6.122 0.833 6.918 C 1.973 7.846 18.121 5.644 20.349 3.708 C 20.905 3.204 21.171 2.726 21.118 2.222 C 21.011 1.4 20.057 0.737 19.686 0.551 C 19.553 0.471 19.5 0.312 19.553 0.153 C 19.633 0.02 19.792 -0.033 19.951 0.02 C 20.004 0.047 21.542 0.869 21.701 2.143 C 21.78 2.832 21.462 3.496 20.746 4.132 C 19.023 5.644 7.515 7.687 2.583 7.687 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.359,
    height: 6.181,
    viewBox: "0 0 22.359 6.181",
    fill: "none",
    style: {
      position: "absolute",
      left: 51.28,
      top: 70.068,
      width: 22.359,
      height: 6.181,
      color: "rgb(255,26,18)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.49 6.181 C 1.642 6.181 1.032 6.075 0.767 5.836 C 0.157 5.226 -0.082 4.696 0.024 4.218 C 0.13 3.794 0.528 3.555 0.74 3.475 C 0.899 3.422 1.059 3.502 1.112 3.661 C 1.165 3.82 1.085 3.979 0.926 4.032 C 0.926 4.032 0.634 4.138 0.581 4.377 C 0.528 4.643 0.74 5.014 1.165 5.465 C 1.218 5.518 1.483 5.704 2.862 5.651 C 8.35 5.438 21.131 2.069 21.767 1.326 C 21.794 1.167 21.794 1.008 21.714 0.902 C 21.582 0.69 21.237 0.61 21.131 0.584 C 20.972 0.557 20.866 0.424 20.866 0.265 C 20.892 0.106 21.025 0 21.184 0 C 21.264 0 21.874 0.106 22.192 0.584 C 22.324 0.769 22.43 1.088 22.298 1.539 C 22.245 1.724 22.086 2.255 16.252 3.767 C 13.203 4.51 5.911 6.181 2.49 6.181 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.559,
    height: 13.597,
    viewBox: "0 0 2.559 13.597",
    fill: "none",
    style: {
      position: "absolute",
      left: 65.45,
      top: 46.603,
      width: 2.559,
      height: 13.597,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.241 13.597 C 2.082 13.597 1.949 13.464 1.949 13.305 C 1.949 13.252 1.949 6.646 1.154 4.126 C 0.358 1.552 0.014 0.385 0.014 0.385 C -0.039 0.226 0.067 0.067 0.226 0.014 C 0.385 -0.039 0.544 0.067 0.597 0.226 C 0.597 0.226 0.942 1.393 1.737 3.967 C 2.559 6.593 2.559 13.039 2.559 13.331 C 2.533 13.464 2.4 13.597 2.241 13.597 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.105,
    height: 3.332,
    viewBox: "0 0 1.105 3.332",
    fill: "none",
    style: {
      position: "absolute",
      left: 67.86,
      top: 62.703,
      width: 1.105,
      height: 3.332,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.785 3.332 C 0.759 3.332 0.732 3.332 0.706 3.332 C 0.547 3.306 0.467 3.147 0.494 2.988 C 0.6 2.563 0.255 1.157 0.016 0.388 C -0.037 0.229 0.043 0.069 0.202 0.016 C 0.361 -0.037 0.52 0.043 0.573 0.202 C 0.679 0.573 1.236 2.43 1.077 3.12 C 1.05 3.253 0.918 3.332 0.785 3.332 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 90,
      width: 96,
      height: 12,
      fontFamily: "SVN-Cookies, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: 0.9828906059265137,
      color: "rgb(0,0,0)"
    }
  }, props.text1 ?? "Thích gì tui bao"), /*#__PURE__*/React.createElement("svg", {
    width: 6.753,
    height: 6.982,
    viewBox: "0 0 6.753 6.982",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.076,
      top: 13.53,
      width: 6.753,
      height: 6.982,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.157 4.552 C 2.331 5.379 2.592 6.642 2.679 6.838 C 2.722 6.947 2.875 7.012 2.984 6.969 C 3.092 6.925 3.288 6.86 4.289 4.9 C 5.465 5.074 6.466 5.183 6.466 5.183 C 6.531 5.183 6.618 5.161 6.662 5.118 C 6.901 4.856 6.749 4.377 5.247 2.919 C 5.552 2.265 5.987 1.264 6.03 0.937 C 6.052 0.828 6.009 0.719 5.922 0.654 C 5.769 0.545 5.552 0.545 5.116 0.698 C 4.638 0.85 4.028 1.155 3.549 1.394 C 2.875 0.807 2.244 0.284 1.982 0.066 C 1.895 0.001 1.808 -0.021 1.721 0.023 C 1.525 0.088 1.373 0.132 1.743 2.374 C 1.025 2.788 0.22 3.311 0.045 3.572 C 0.002 3.659 -0.02 3.768 0.024 3.855 C 0.133 4.007 0.372 4.225 2.157 4.552 Z M 6.248 4.704 C 5.9 4.661 5.247 4.573 4.529 4.486 C 4.703 4.116 4.899 3.746 5.073 3.376 C 5.835 4.116 6.139 4.508 6.248 4.704 Z M 5.269 1.111 C 5.399 1.068 5.486 1.046 5.53 1.046 C 5.443 1.307 5.247 1.786 4.899 2.592 C 4.594 2.309 4.268 2.026 3.919 1.699 C 4.485 1.416 4.942 1.22 5.269 1.111 Z M 1.982 0.632 C 2.265 0.872 2.679 1.22 3.114 1.59 C 2.809 1.743 2.483 1.917 2.157 2.113 C 2.048 1.329 2.004 0.894 1.982 0.632 Z M 2.244 2.592 C 2.657 2.352 3.071 2.135 3.484 1.917 C 3.941 2.309 4.355 2.679 4.703 3.027 C 4.485 3.485 4.268 3.964 4.028 4.399 C 3.462 4.312 2.962 4.247 2.527 4.16 C 2.439 3.637 2.331 3.093 2.244 2.592 Z M 2.635 4.639 C 3.005 4.704 3.397 4.769 3.832 4.835 C 3.419 5.619 3.158 6.098 3.005 6.337 C 2.918 6.011 2.788 5.423 2.635 4.639 Z M 1.83 2.832 C 1.895 3.245 1.982 3.659 2.069 4.073 C 1.112 3.877 0.72 3.746 0.546 3.681 C 0.72 3.528 1.134 3.245 1.83 2.832 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.070,
    height: 4.202,
    viewBox: "0 0 4.070 4.202",
    fill: "none",
    style: {
      position: "absolute",
      left: 107.124,
      top: 105.585,
      width: 4.07,
      height: 4.202,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.83 1.807 L 2.96 1.807 L 3.874 1.176 C 3.983 1.11 4.004 0.958 3.939 0.871 C 3.874 0.762 3.722 0.74 3.634 0.806 L 2.394 1.677 L 2.394 0.218 C 2.394 0.087 2.285 0 2.176 0 C 2.046 0 1.959 0.109 1.959 0.218 L 1.959 1.502 L 1.175 0.675 C 1.088 0.588 0.958 0.588 0.849 0.675 C 0.762 0.762 0.762 0.915 0.849 1.002 L 1.654 1.851 L 0.218 1.873 C 0.087 1.873 0 1.981 0 2.09 C 0 2.221 0.109 2.308 0.218 2.308 L 1.545 2.286 L 0.522 3.005 C 0.414 3.07 0.392 3.223 0.457 3.31 C 0.501 3.375 0.566 3.397 0.653 3.397 C 0.696 3.397 0.74 3.375 0.783 3.353 L 1.959 2.526 L 1.959 3.985 C 1.959 4.115 2.068 4.202 2.176 4.202 C 2.307 4.202 2.394 4.094 2.394 3.985 L 2.394 2.591 L 3.221 3.462 C 3.265 3.506 3.33 3.527 3.395 3.527 C 3.46 3.527 3.504 3.506 3.547 3.462 C 3.635 3.375 3.635 3.223 3.547 3.135 L 2.677 2.221 L 3.852 2.199 C 3.983 2.199 4.07 2.09 4.07 1.981 C 4.048 1.916 3.939 1.807 3.83 1.807 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.042,
    height: 5.073,
    viewBox: "0 0 5.042 5.073",
    fill: "none",
    style: {
      position: "absolute",
      left: 111.102,
      top: 14.856,
      width: 5.042,
      height: 5.073,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.468 5.073 C 2.294 5.073 2.141 5.073 1.706 3.331 C 0.226 3.048 0.096 2.874 0.052 2.809 C 0.009 2.744 -0.013 2.656 0.009 2.591 C 0.03 2.504 0.096 2.286 1.793 1.59 C 2.403 0 2.598 0 2.751 0 C 2.816 0 2.925 0.044 2.968 0.109 C 3.077 0.261 3.186 0.631 3.317 1.241 C 3.36 1.437 3.425 1.655 3.447 1.764 C 3.534 1.807 3.73 1.873 3.904 1.938 C 4.775 2.243 4.992 2.352 5.036 2.569 C 5.058 2.656 5.014 2.765 4.949 2.809 C 4.775 2.961 3.926 3.288 3.491 3.44 C 2.773 5.073 2.62 5.073 2.468 5.073 C 2.468 5.073 2.49 5.073 2.468 5.073 Z M 0.618 2.613 C 0.923 2.7 1.445 2.831 1.924 2.918 C 2.011 2.939 2.076 3.005 2.098 3.092 C 2.228 3.571 2.381 4.137 2.49 4.464 C 2.664 4.159 2.903 3.636 3.099 3.179 C 3.121 3.114 3.164 3.07 3.23 3.048 C 3.643 2.896 4.078 2.722 4.361 2.613 C 4.165 2.526 3.882 2.439 3.708 2.373 C 3.208 2.199 3.121 2.156 3.055 2.069 C 2.99 2.003 2.968 1.873 2.838 1.372 C 2.794 1.176 2.729 0.893 2.664 0.675 C 2.511 0.958 2.315 1.437 2.141 1.851 C 2.12 1.916 2.076 1.96 2.011 1.981 C 1.532 2.177 0.944 2.439 0.618 2.613 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.133,
    height: 3.127,
    viewBox: "0 0 3.133 3.127",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.235,
      top: 105.054,
      width: 3.133,
      height: 3.127,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.71 2.637 C 2.123 3.268 1.121 3.29 0.49 2.702 C -0.141 2.114 -0.163 1.134 0.425 0.503 C 0.708 0.198 1.1 0.024 1.513 0.002 C 1.927 -0.02 2.318 0.133 2.623 0.438 C 3.276 1.025 3.298 2.005 2.71 2.637 Z M 0.773 0.808 C 0.36 1.265 0.381 1.962 0.817 2.375 C 1.252 2.789 1.97 2.767 2.384 2.332 L 2.558 2.484 L 2.384 2.332 C 2.797 1.896 2.775 1.178 2.34 0.764 C 2.123 0.568 1.84 0.459 1.557 0.459 C 1.252 0.459 0.969 0.59 0.773 0.808 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 150,
      height: 120,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 0,
      width: 129,
      height: 120,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.853,
    height: 5.011,
    viewBox: "0 0 4.853 5.011",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.887,
      top: 3.505,
      width: 4.853,
      height: 5.011,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.567 2.155 L 3.529 2.155 L 4.619 1.402 C 4.749 1.324 4.775 1.142 4.697 1.039 C 4.619 0.909 4.438 0.883 4.334 0.961 L 2.855 1.999 L 2.855 0.26 C 2.855 0.104 2.725 0 2.595 0 C 2.439 0 2.336 0.13 2.336 0.26 L 2.336 1.791 L 1.401 0.805 C 1.298 0.701 1.142 0.701 1.012 0.805 C 0.908 0.909 0.908 1.09 1.012 1.194 L 1.972 2.207 L 0.26 2.233 C 0.104 2.233 0 2.363 0 2.492 C 0 2.648 0.13 2.752 0.26 2.752 L 1.842 2.726 L 0.623 3.583 C 0.493 3.661 0.467 3.843 0.545 3.946 C 0.597 4.024 0.675 4.05 0.779 4.05 C 0.83 4.05 0.882 4.024 0.934 3.998 L 2.336 3.012 L 2.336 4.751 C 2.336 4.907 2.465 5.011 2.595 5.011 C 2.751 5.011 2.855 4.881 2.855 4.751 L 2.855 3.09 L 3.841 4.128 C 3.893 4.18 3.97 4.206 4.048 4.206 C 4.126 4.206 4.178 4.18 4.23 4.128 C 4.334 4.024 4.334 3.843 4.23 3.739 L 3.192 2.648 L 4.593 2.622 C 4.749 2.622 4.853 2.492 4.853 2.363 C 4.853 2.259 4.723 2.155 4.567 2.155 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.853,
    height: 5.011,
    viewBox: "0 0 4.853 5.011",
    fill: "none",
    style: {
      position: "absolute",
      left: 112.366,
      top: 67.504,
      width: 4.853,
      height: 5.011,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.567 2.155 L 3.529 2.155 L 4.619 1.402 C 4.749 1.324 4.775 1.142 4.697 1.039 C 4.619 0.909 4.438 0.883 4.334 0.961 L 2.855 1.999 L 2.855 0.26 C 2.855 0.104 2.725 0 2.595 0 C 2.439 0 2.336 0.13 2.336 0.26 L 2.336 1.791 L 1.401 0.805 C 1.298 0.701 1.142 0.701 1.012 0.805 C 0.908 0.909 0.908 1.09 1.012 1.194 L 1.972 2.207 L 0.26 2.233 C 0.104 2.233 0 2.363 0 2.492 C 0 2.648 0.13 2.752 0.26 2.752 L 1.842 2.726 L 0.623 3.583 C 0.493 3.661 0.467 3.843 0.545 3.946 C 0.597 4.024 0.675 4.05 0.779 4.05 C 0.83 4.05 0.882 4.024 0.934 3.998 L 2.336 3.012 L 2.336 4.751 C 2.336 4.907 2.465 5.011 2.595 5.011 C 2.751 5.011 2.855 4.881 2.855 4.751 L 2.855 3.09 L 3.841 4.128 C 3.893 4.18 3.97 4.206 4.048 4.206 C 4.126 4.206 4.178 4.18 4.23 4.128 C 4.334 4.024 4.334 3.843 4.23 3.739 L 3.192 2.648 L 4.593 2.622 C 4.749 2.622 4.853 2.492 4.853 2.363 C 4.827 2.285 4.697 2.155 4.567 2.155 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.012,
    height: 6.049,
    viewBox: "0 0 6.012 6.049",
    fill: "none",
    style: {
      position: "absolute",
      left: 115.999,
      top: 52.705,
      width: 6.012,
      height: 6.049,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.943 6.049 C 2.735 6.049 2.553 6.049 2.034 3.972 C 0.27 3.635 0.114 3.427 0.062 3.349 C 0.01 3.271 -0.016 3.168 0.01 3.09 C 0.036 2.986 0.114 2.726 2.138 1.895 C 2.865 0 3.098 0 3.28 0 C 3.358 0 3.488 0.052 3.539 0.13 C 3.669 0.312 3.799 0.753 3.955 1.48 C 4.007 1.714 4.084 1.973 4.11 2.103 C 4.214 2.155 4.448 2.233 4.655 2.311 C 5.693 2.674 5.953 2.804 6.005 3.064 C 6.031 3.168 5.979 3.297 5.901 3.349 C 5.693 3.531 4.681 3.92 4.162 4.102 C 3.306 6.049 3.124 6.049 2.943 6.049 C 2.943 6.049 2.969 6.049 2.943 6.049 Z M 0.737 3.116 C 1.1 3.219 1.723 3.375 2.294 3.479 C 2.398 3.505 2.475 3.583 2.501 3.687 C 2.657 4.258 2.839 4.933 2.969 5.322 C 3.176 4.959 3.462 4.336 3.695 3.791 C 3.721 3.713 3.773 3.661 3.851 3.635 C 4.344 3.453 4.863 3.245 5.2 3.116 C 4.967 3.012 4.629 2.908 4.422 2.83 C 3.825 2.622 3.721 2.57 3.643 2.466 C 3.565 2.389 3.539 2.233 3.384 1.636 C 3.332 1.402 3.254 1.064 3.176 0.805 C 2.994 1.142 2.761 1.714 2.553 2.207 C 2.527 2.285 2.475 2.337 2.398 2.363 C 1.827 2.596 1.126 2.908 0.737 3.116 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.011,
    height: 6.049,
    viewBox: "0 0 6.011 6.049",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.633,
      top: 68.828,
      width: 6.011,
      height: 6.049,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.943 6.049 C 2.735 6.049 2.553 6.049 2.034 3.972 C 0.27 3.635 0.114 3.427 0.062 3.349 C 0.01 3.271 -0.016 3.168 0.01 3.09 C 0.036 2.986 0.114 2.726 2.138 1.895 C 2.865 0 3.098 0 3.28 0 C 3.358 0 3.488 0.052 3.539 0.13 C 3.669 0.312 3.799 0.753 3.955 1.48 C 4.007 1.714 4.084 1.973 4.11 2.103 C 4.214 2.155 4.448 2.233 4.655 2.311 C 5.693 2.674 5.953 2.804 6.005 3.064 C 6.031 3.168 5.979 3.297 5.901 3.349 C 5.693 3.531 4.681 3.92 4.162 4.102 C 3.306 6.023 3.124 6.023 2.943 6.049 Z M 0.737 3.116 C 1.1 3.219 1.723 3.375 2.294 3.479 C 2.398 3.505 2.475 3.583 2.501 3.687 C 2.657 4.258 2.839 4.933 2.969 5.322 C 3.176 4.959 3.462 4.336 3.695 3.791 C 3.721 3.713 3.773 3.661 3.851 3.635 C 4.344 3.453 4.863 3.245 5.2 3.116 C 4.967 3.012 4.629 2.908 4.422 2.83 C 3.825 2.622 3.721 2.57 3.643 2.466 C 3.565 2.389 3.539 2.233 3.384 1.636 C 3.332 1.402 3.254 1.064 3.176 0.805 C 2.994 1.142 2.761 1.714 2.553 2.207 C 2.527 2.285 2.475 2.337 2.398 2.363 C 1.827 2.57 1.1 2.908 0.737 3.116 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.735,
    height: 3.729,
    viewBox: "0 0 3.735 3.729",
    fill: "none",
    style: {
      position: "absolute",
      left: 72.129,
      top: 113.82,
      width: 3.735,
      height: 3.729,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.232 3.144 C 2.531 3.897 1.337 3.923 0.585 3.222 C -0.168 2.521 -0.194 1.353 0.507 0.6 C 0.844 0.236 1.311 0.028 1.804 0.002 C 2.297 -0.024 2.764 0.158 3.128 0.522 C 3.906 1.223 3.932 2.391 3.232 3.144 Z M 0.922 0.937 C 0.429 1.482 0.455 2.313 0.974 2.806 C 1.493 3.3 2.349 3.274 2.842 2.755 L 3.05 2.936 L 2.842 2.755 C 3.335 2.235 3.309 1.378 2.79 0.885 C 2.531 0.652 2.194 0.522 1.856 0.522 C 1.493 0.548 1.155 0.703 0.922 0.937 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.726,
    height: 3.729,
    viewBox: "0 0 3.726 3.729",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.461,
      top: 93.127,
      width: 3.726,
      height: 3.729,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.232 3.144 C 2.531 3.897 1.337 3.923 0.585 3.222 C -0.168 2.521 -0.194 1.353 0.507 0.6 C 0.844 0.236 1.311 0.028 1.804 0.002 C 2.297 -0.024 2.764 0.158 3.128 0.522 C 3.88 1.223 3.932 2.417 3.232 3.144 Z M 0.922 0.963 C 0.429 1.508 0.455 2.339 0.974 2.832 C 1.493 3.326 2.349 3.3 2.842 2.78 L 3.05 2.962 L 2.842 2.78 C 3.335 2.261 3.309 1.404 2.79 0.911 C 2.531 0.677 2.194 0.548 1.856 0.548 C 1.493 0.574 1.155 0.703 0.922 0.963 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.726,
    height: 3.729,
    viewBox: "0 0 3.726 3.729",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.913,
      top: 21.417,
      width: 3.726,
      height: 3.729,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.232 3.144 C 2.531 3.897 1.337 3.923 0.585 3.222 C -0.168 2.521 -0.194 1.353 0.507 0.6 C 0.844 0.236 1.311 0.028 1.804 0.002 C 2.297 -0.024 2.764 0.158 3.128 0.522 C 3.88 1.223 3.932 2.391 3.232 3.144 Z M 0.922 0.963 C 0.429 1.508 0.455 2.339 0.974 2.832 C 1.493 3.326 2.349 3.3 2.842 2.78 L 3.05 2.962 L 2.842 2.78 C 3.335 2.261 3.309 1.404 2.79 0.911 C 2.531 0.677 2.194 0.548 1.856 0.548 C 1.493 0.548 1.155 0.703 0.922 0.963 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.735,
    height: 3.729,
    viewBox: "0 0 3.735 3.729",
    fill: "none",
    style: {
      position: "absolute",
      left: 115.492,
      top: 35.411,
      width: 3.735,
      height: 3.729,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.232 3.144 C 2.531 3.897 1.337 3.923 0.585 3.222 C -0.168 2.521 -0.194 1.353 0.507 0.6 C 0.844 0.236 1.311 0.028 1.804 0.002 C 2.297 -0.024 2.764 0.158 3.128 0.522 C 3.906 1.223 3.932 2.391 3.232 3.144 Z M 0.922 0.963 C 0.429 1.508 0.455 2.339 0.974 2.832 C 1.493 3.326 2.349 3.3 2.842 2.781 L 3.05 2.962 L 2.842 2.781 C 3.335 2.261 3.309 1.404 2.79 0.911 C 2.531 0.677 2.194 0.548 1.856 0.548 C 1.493 0.548 1.155 0.703 0.922 0.963 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.052,
    height: 8.326,
    viewBox: "0 0 8.052 8.326",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.028,
      top: 26.429,
      width: 8.052,
      height: 8.326,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.571 5.427 C 2.779 6.414 3.09 7.92 3.194 8.153 C 3.246 8.283 3.428 8.361 3.558 8.309 C 3.687 8.257 3.921 8.179 5.115 5.843 C 6.516 6.05 7.71 6.18 7.71 6.18 C 7.787 6.18 7.891 6.154 7.943 6.102 C 8.229 5.791 8.047 5.22 6.256 3.48 C 6.62 2.701 7.139 1.507 7.191 1.117 C 7.217 0.988 7.165 0.858 7.061 0.78 C 6.879 0.65 6.62 0.65 6.101 0.832 C 5.53 1.014 4.803 1.377 4.232 1.663 C 3.428 0.962 2.675 0.339 2.364 0.079 C 2.26 0.001 2.156 -0.025 2.052 0.027 C 1.819 0.105 1.637 0.157 2.078 2.831 C 1.222 3.324 0.262 3.947 0.054 4.259 C 0.002 4.363 -0.024 4.493 0.028 4.597 C 0.158 4.778 0.443 5.038 2.571 5.427 Z M 7.45 5.609 C 7.035 5.557 6.256 5.453 5.4 5.349 C 5.608 4.908 5.841 4.467 6.049 4.025 C 6.957 4.908 7.32 5.375 7.45 5.609 Z M 6.282 1.325 C 6.438 1.273 6.542 1.247 6.594 1.247 C 6.49 1.559 6.256 2.13 5.841 3.091 C 5.478 2.753 5.089 2.416 4.673 2.026 C 5.348 1.689 5.893 1.455 6.282 1.325 Z M 2.364 0.754 C 2.701 1.04 3.194 1.455 3.713 1.896 C 3.35 2.078 2.961 2.286 2.571 2.519 C 2.442 1.585 2.39 1.066 2.364 0.754 Z M 2.675 3.091 C 3.168 2.805 3.661 2.545 4.154 2.286 C 4.699 2.753 5.192 3.195 5.608 3.61 C 5.348 4.155 5.089 4.726 4.803 5.246 C 4.128 5.142 3.532 5.064 3.013 4.96 C 2.909 4.337 2.779 3.688 2.675 3.091 Z M 3.142 5.531 C 3.584 5.609 4.051 5.687 4.57 5.765 C 4.077 6.7 3.765 7.271 3.584 7.556 C 3.48 7.167 3.324 6.466 3.142 5.531 Z M 2.182 3.376 C 2.26 3.87 2.364 4.363 2.468 4.856 C 1.326 4.622 0.859 4.467 0.651 4.389 C 0.859 4.207 1.352 3.87 2.182 3.376 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 95.498,
      top: 104.891,
      width: 6.309,
      height: 7.322,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.778,
    height: 6.779,
    viewBox: "0 0 5.778 6.779",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.259,
      top: 0.257,
      width: 5.778,
      height: 6.779,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.779 C 0 6.779 6.514 4.91 5.709 2.781 C 4.905 0.626 0.597 3.871 1.894 4.131 C 3.166 4.39 3.244 0.158 1.635 0.003 C 0.026 -0.153 0 6.779 0 6.779 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.309,
    height: 7.322,
    viewBox: "0 0 6.309 7.322",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.309,
      height: 7.322,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.26 7.296 C 0.208 7.296 0.156 7.27 0.104 7.244 C 0.026 7.192 0 7.114 0 7.036 C 0 5.374 0.156 0 1.842 0 C 1.842 0 1.894 0 1.92 0 C 2.881 0.078 3.348 1.246 3.374 2.466 C 3.789 2.259 4.334 2.051 4.879 2.051 C 5.527 2.051 5.995 2.363 6.228 2.96 C 6.358 3.323 6.332 3.713 6.15 4.076 C 5.242 5.894 0.545 7.27 0.337 7.322 C 0.285 7.296 0.285 7.296 0.26 7.296 Z M 1.842 0.519 C 1.064 0.519 0.571 3.635 0.519 6.673 C 1.998 6.205 5.034 5.037 5.657 3.817 C 5.787 3.583 5.787 3.349 5.709 3.116 C 5.579 2.752 5.294 2.57 4.853 2.57 C 4.438 2.57 3.867 2.752 3.322 3.09 C 3.218 4.076 2.803 4.673 2.232 4.673 C 2.18 4.673 2.128 4.673 2.076 4.647 C 1.739 4.57 1.661 4.336 1.635 4.258 C 1.557 3.791 2.18 3.193 2.803 2.778 C 2.855 1.714 2.517 0.571 1.842 0.519 Z M 2.18 4.102 C 2.206 4.102 2.232 4.102 2.258 4.102 C 2.439 4.102 2.595 3.869 2.699 3.505 C 2.387 3.765 2.206 3.998 2.18 4.102 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 75.568,
      top: 13.918,
      width: 21,
      height: 20.769,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.000,
    height: 20.769,
    viewBox: "0 0 21.000 20.769",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21,
      height: 20.769,
      color: "rgb(255,26,18)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.795 20.769 C 10.795 20.769 -3.711 9.034 0.908 2.958 C 6.02 -3.766 10.795 7.139 10.795 7.139 C 10.795 7.139 12.456 -2.753 18.373 0.752 C 27.248 5.996 10.795 20.769 10.795 20.769 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.017,
    height: 4.024,
    viewBox: "0 0 4.017 4.024",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.674,
      top: 1.582,
      width: 4.017,
      height: 4.024,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.711 4.024 C 3.685 4.024 3.685 4.024 3.711 4.024 C 3.529 4.024 3.425 3.895 3.451 3.739 C 3.529 2.804 3.296 2.077 2.803 1.532 C 1.868 0.545 0.26 0.545 0.26 0.545 C 0.104 0.545 0 0.415 0 0.286 C 0 0.13 0.104 0.026 0.26 0 C 0.337 0 2.128 -0.026 3.218 1.142 C 3.815 1.792 4.1 2.674 3.996 3.765 C 3.97 3.92 3.841 4.024 3.711 4.024 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -6,
      top: 18,
      width: 63.938,
      height: 56.746,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.791,-0.612,0.612,0.791,0,38.738)",
      transformOrigin: "0 0",
      width: 63.25,
      height: 22.771,
      fontFamily: "SVN-Cookies, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: 1.112890601158142,
      color: "rgb(0,0,0)",
      whiteSpace: "pre-wrap"
    }
  }, props.text1 ?? "Thả tim \nchiu chiu")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 33.109,
      top: 11.538,
      width: 79.169,
      height: 100.565,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 79.169,
    height: 100.565,
    viewBox: "0 0 79.169 100.565",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 79.169,
      height: 100.565,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 63.22 47.346 C 71.109 38.596 82.786 20.682 78.089 14.736 C 73.418 8.817 59.171 22.785 51.594 31.015 C 39.241 14.477 24.476 -2.477 17.495 0.301 C 6.622 4.637 36.179 41.297 36.179 41.297 C 36.179 41.297 23.152 32.936 20.038 42.387 C 18.741 46.333 22.088 50.072 22.088 50.072 C 22.088 50.072 9.606 45.996 8.308 53.266 C 7.374 58.562 10.54 61.678 10.54 61.678 C 10.54 61.678 0.861 59.003 0.03 64.637 C -0.8 70.271 15.626 96.65 32.624 100.441 C 42.485 102.648 82.034 74.945 71.55 59.964 C 71.55 59.964 68.254 54.72 63.22 47.346 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.717,
    height: 10.464,
    viewBox: "0 0 9.717 10.464",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.268,
      top: 3.13,
      width: 9.717,
      height: 10.464,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.882 10.464 C 1.692 10.464 0.005 3.922 0.005 3.87 C -0.021 3.714 0.057 3.584 0.213 3.532 C 0.342 3.506 0.498 3.584 0.55 3.74 C 0.576 3.818 2.263 10.335 7.401 9.919 C 8.257 9.841 8.776 9.556 9.01 9.01 C 9.892 7.011 6.7 2.156 5.403 0.443 C 5.325 0.313 5.325 0.157 5.455 0.053 C 5.584 -0.025 5.74 -0.025 5.844 0.105 C 6.051 0.365 10.697 6.518 9.529 9.218 C 9.217 9.945 8.517 10.361 7.453 10.438 C 7.245 10.464 7.063 10.464 6.882 10.464 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.119,
    height: 19.461,
    viewBox: "0 0 14.119 19.461",
    fill: "none",
    style: {
      position: "absolute",
      left: 50.645,
      top: 29.703,
      width: 14.119,
      height: 19.461,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.846 19.461 C 13.716 19.461 13.612 19.383 13.586 19.253 C 12.47 15.358 0.196 0.585 0.066 0.456 C -0.038 0.352 -0.012 0.17 0.092 0.066 C 0.196 -0.038 0.377 -0.012 0.481 0.092 C 1 0.715 12.938 15.073 14.105 19.097 C 14.157 19.253 14.053 19.383 13.924 19.435 C 13.898 19.461 13.872 19.461 13.846 19.461 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.209,
    height: 5.623,
    viewBox: "0 0 6.209 5.623",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.548,
      top: 40.451,
      width: 6.209,
      height: 5.623,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.656 5.623 C 0.552 5.623 0.448 5.571 0.396 5.441 C 0.344 5.337 -0.616 2.845 0.656 1.235 C 1.564 0.093 3.355 -0.245 5.976 0.171 C 6.131 0.197 6.209 0.327 6.209 0.482 C 6.183 0.638 6.053 0.742 5.898 0.716 C 3.484 0.327 1.875 0.612 1.097 1.573 C 0.007 2.923 0.915 5.234 0.915 5.234 C 0.967 5.363 0.915 5.519 0.76 5.571 C 0.734 5.623 0.682 5.623 0.656 5.623 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.766,
    height: 5.661,
    viewBox: "0 0 5.766 5.661",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.604,
      top: 51.889,
      width: 5.766,
      height: 5.661,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.312 5.661 C 0.182 5.661 0.052 5.557 0.052 5.427 C -0.156 3.454 0.26 2 1.272 1.066 C 2.881 -0.414 5.45 0.079 5.554 0.079 C 5.709 0.105 5.787 0.261 5.761 0.39 C 5.735 0.546 5.579 0.624 5.45 0.598 C 5.424 0.598 3.062 0.157 1.635 1.455 C 0.753 2.26 0.415 3.558 0.597 5.349 C 0.623 5.505 0.493 5.635 0.363 5.635 C 0.312 5.661 0.312 5.661 0.312 5.661 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.298,
    height: 4.831,
    viewBox: "0 0 5.298 4.831",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.31,
      top: 62.61,
      width: 5.298,
      height: 4.831,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.263 4.831 L 0.238 4.831 C 0.082 4.805 -0.022 4.675 0.004 4.519 C 0.627 -0.232 4.986 0.002 5.038 0.002 C 5.194 0.002 5.298 0.132 5.298 0.287 C 5.298 0.443 5.168 0.547 5.012 0.547 C 4.857 0.547 1.094 0.339 0.549 4.597 C 0.523 4.727 0.419 4.831 0.263 4.831 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.837,
    height: 4.166,
    viewBox: "0 0 6.837 4.166",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.243,
      top: 31.367,
      width: 6.837,
      height: 4.166,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.26 4.166 C 0.104 4.166 0 4.062 0 3.907 C 0 3.751 0.104 3.621 0.26 3.621 C 0.285 3.621 3.944 3.465 6.358 0.116 C 6.436 -0.014 6.617 -0.04 6.721 0.064 C 6.851 0.142 6.877 0.324 6.773 0.428 C 4.23 4.01 0.441 4.166 0.26 4.166 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.889,
    height: 9.982,
    viewBox: "0 0 6.889 9.982",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.299,
      top: 39.181,
      width: 6.889,
      height: 9.982,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.604 9.982 C 6.474 9.982 6.344 9.878 6.344 9.722 C 6.266 8.71 2.555 3.647 0.064 0.454 C -0.04 0.324 -0.014 0.168 0.116 0.064 C 0.22 -0.04 0.401 -0.014 0.505 0.116 C 1.154 0.947 6.785 8.191 6.889 9.67 C 6.863 9.852 6.759 9.982 6.604 9.982 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.933,
    height: 8.126,
    viewBox: "0 0 6.933 8.126",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.829,
      top: 49.423,
      width: 6.933,
      height: 8.126,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.669 8.126 C 6.54 8.126 6.41 8.023 6.41 7.893 C 6.306 7.166 2.491 2.96 0.078 0.467 C -0.026 0.363 -0.026 0.182 0.078 0.078 C 0.182 -0.026 0.363 -0.026 0.467 0.078 C 1.531 1.168 6.773 6.673 6.929 7.789 C 6.955 7.945 6.851 8.075 6.695 8.101 C 6.695 8.126 6.669 8.126 6.669 8.126 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.515,
    height: 7.948,
    viewBox: "0 0 8.515 7.948",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.277,
      top: 61.051,
      width: 8.515,
      height: 7.948,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.256 7.948 C 8.178 7.948 8.1 7.922 8.048 7.87 C 7.555 7.351 0.159 0.549 0.081 0.471 C -0.022 0.367 -0.022 0.211 0.055 0.081 C 0.159 -0.022 0.315 -0.022 0.445 0.056 C 0.756 0.341 7.918 6.936 8.438 7.481 C 8.541 7.585 8.541 7.767 8.438 7.87 C 8.386 7.922 8.308 7.948 8.256 7.948 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.676,
    height: 4.277,
    viewBox: "0 0 6.676 4.277",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.479,
      top: 28.503,
      width: 6.676,
      height: 4.277,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.273 4.277 C 0.143 4.277 0.04 4.199 0.014 4.07 C -0.038 3.914 0.066 3.784 0.195 3.732 C 0.247 3.732 4.166 2.616 6.19 0.097 C 6.294 -0.007 6.449 -0.033 6.579 0.045 C 6.683 0.149 6.709 0.305 6.631 0.435 C 4.477 3.083 0.533 4.199 0.351 4.251 C 0.325 4.277 0.299 4.277 0.273 4.277 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 62.675,
      top: 56.07,
      width: 6.643,
      height: 10.463,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.169,
    height: 2.364,
    viewBox: "0 0 1.169 2.364",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.474,
      top: 8.099,
      width: 1.169,
      height: 2.364,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.416 2.364 C 0.339 2.364 0.261 2.338 0.209 2.26 C 0.131 2.13 0.131 1.974 0.261 1.897 C 0.261 1.897 0.624 1.611 0.624 1.247 C 0.624 0.988 0.442 0.728 0.105 0.495 C -0.025 0.417 -0.025 0.235 0.053 0.105 C 0.131 -0.025 0.313 -0.025 0.442 0.053 C 0.909 0.417 1.169 0.806 1.169 1.247 C 1.169 1.897 0.624 2.312 0.598 2.338 C 0.546 2.338 0.494 2.364 0.416 2.364 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.169,
    height: 2.364,
    viewBox: "0 0 1.169 2.364",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.32,
      top: 7.294,
      width: 1.169,
      height: 2.364,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.416 2.364 C 0.339 2.364 0.261 2.338 0.209 2.26 C 0.131 2.13 0.131 1.974 0.261 1.897 C 0.261 1.897 0.624 1.611 0.624 1.247 C 0.624 0.988 0.442 0.728 0.105 0.495 C -0.025 0.417 -0.025 0.235 0.053 0.105 C 0.131 -0.025 0.313 -0.025 0.442 0.053 C 0.909 0.417 1.169 0.806 1.169 1.247 C 1.169 1.897 0.624 2.312 0.598 2.338 C 0.52 2.338 0.468 2.364 0.416 2.364 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.820,
    height: 1.947,
    viewBox: "0 0 1.820 1.947",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.82,
      height: 1.947,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.479 1.947 C 1.453 1.947 1.427 1.947 1.401 1.947 C 1.272 1.895 1.168 1.765 1.22 1.61 C 1.22 1.61 1.349 1.168 1.116 0.857 C 0.96 0.649 0.675 0.545 0.26 0.545 C 0.104 0.545 0 0.415 0 0.26 C 0 0.104 0.104 0 0.285 0 C 0.882 0 1.323 0.182 1.583 0.545 C 1.972 1.064 1.765 1.74 1.765 1.765 C 1.713 1.869 1.609 1.947 1.479 1.947 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.772,
    height: 1.999,
    viewBox: "0 0 1.772 1.999",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.701,
      top: 2.96,
      width: 1.772,
      height: 1.999,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.453 1.999 C 1.427 1.999 1.401 1.999 1.375 1.973 C 1.246 1.921 1.168 1.765 1.194 1.636 C 1.194 1.636 1.323 1.194 1.116 0.883 C 0.96 0.675 0.675 0.571 0.26 0.545 C 0.104 0.545 0 0.415 0 0.26 C 0 0.104 0.13 0 0.285 0 C 0.882 0.026 1.323 0.208 1.557 0.571 C 1.92 1.09 1.713 1.766 1.713 1.791 C 1.661 1.921 1.557 1.999 1.453 1.999 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.789,
    height: 2.093,
    viewBox: "0 0 1.789 2.093",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.565,
      top: 4.943,
      width: 1.789,
      height: 2.093,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.391 2.093 C 1.339 2.093 1.288 2.067 1.236 2.041 C 1.106 1.963 1.08 1.782 1.158 1.678 C 1.158 1.678 1.314 1.418 1.21 1.184 C 1.106 0.925 0.769 0.691 0.198 0.535 C 0.042 0.483 -0.036 0.354 0.016 0.198 C 0.068 0.042 0.198 -0.036 0.353 0.016 C 1.106 0.224 1.547 0.561 1.729 1.003 C 1.91 1.522 1.625 1.963 1.599 1.989 C 1.573 2.041 1.469 2.093 1.391 2.093 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.789,
    height: 2.093,
    viewBox: "0 0 1.789 2.093",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.761,
      top: 1.931,
      width: 1.789,
      height: 2.093,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.391 2.093 C 1.339 2.093 1.288 2.067 1.236 2.041 C 1.106 1.963 1.08 1.782 1.158 1.678 C 1.158 1.678 1.314 1.418 1.21 1.184 C 1.106 0.925 0.769 0.691 0.198 0.535 C 0.042 0.483 -0.036 0.354 0.016 0.198 C 0.068 0.042 0.198 -0.036 0.353 0.016 C 1.106 0.224 1.547 0.561 1.729 1.003 C 1.91 1.522 1.625 1.963 1.599 1.989 C 1.547 2.067 1.469 2.093 1.391 2.093 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 16.810,
    height: 21.342,
    viewBox: "0 0 16.810 21.342",
    fill: "none",
    style: {
      position: "absolute",
      left: 70.637,
      top: 29.52,
      width: 16.81,
      height: 21.342,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.556 21.342 C 16.453 21.342 16.349 21.29 16.297 21.186 C 13.65 15.007 0.208 0.597 0.078 0.467 C -0.026 0.363 -0.026 0.182 0.078 0.078 C 0.182 -0.026 0.363 -0.026 0.467 0.078 C 1.012 0.675 14.117 14.695 16.79 20.952 C 16.842 21.082 16.79 21.238 16.66 21.316 C 16.634 21.342 16.608 21.342 16.556 21.342 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 150,
      height: 120,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 2,
      width: 127,
      height: 118,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.414,
    height: 3.374,
    viewBox: "0 0 3.414 3.374",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.239,
      top: 27.201,
      width: 3.414,
      height: 3.374,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.707 3.374 C 0.776 3.374 0 2.602 0 1.674 C 0 0.747 0.776 0 1.707 0 C 2.172 0 2.586 0.18 2.922 0.489 C 3.233 0.799 3.414 1.236 3.414 1.674 C 3.414 2.602 2.638 3.374 1.707 3.374 Z M 1.707 0.489 C 1.034 0.489 0.491 1.03 0.491 1.674 C 0.491 2.344 1.034 2.885 1.681 2.885 L 1.681 3.117 L 1.681 2.885 C 2.353 2.885 2.87 2.344 2.896 1.7 C 2.896 1.391 2.767 1.082 2.534 0.85 C 2.353 0.592 2.043 0.489 1.707 0.489 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.414,
    height: 3.374,
    viewBox: "0 0 3.414 3.374",
    fill: "none",
    style: {
      position: "absolute",
      left: 117.328,
      top: 41.986,
      width: 3.414,
      height: 3.374,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.707 3.374 C 0.776 3.374 0 2.602 0 1.674 C 0 0.747 0.776 0 1.707 0 C 2.172 0 2.586 0.18 2.922 0.489 C 3.233 0.799 3.414 1.236 3.414 1.674 C 3.414 2.627 2.638 3.374 1.707 3.374 Z M 1.707 0.489 C 1.034 0.489 0.491 1.03 0.491 1.674 C 0.491 2.344 1.034 2.885 1.681 2.885 L 1.681 3.117 L 1.681 2.885 C 2.353 2.885 2.87 2.344 2.896 1.7 C 2.896 1.391 2.767 1.082 2.534 0.85 C 2.353 0.618 2.043 0.489 1.707 0.489 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.414,
    height: 3.374,
    viewBox: "0 0 3.414 3.374",
    fill: "none",
    style: {
      position: "absolute",
      left: 44.661,
      top: 105.687,
      width: 3.414,
      height: 3.374,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.707 3.374 C 0.776 3.374 0 2.602 0 1.674 C 0 0.747 0.776 0 1.707 0 C 2.172 0 2.586 0.18 2.922 0.489 C 3.233 0.799 3.414 1.236 3.414 1.674 C 3.388 2.602 2.638 3.374 1.707 3.374 Z M 1.707 0.489 C 1.034 0.489 0.491 1.03 0.491 1.674 C 0.491 2.344 1.034 2.885 1.681 2.885 L 1.681 3.117 L 1.681 2.885 C 2.353 2.885 2.87 2.344 2.896 1.7 C 2.896 1.391 2.767 1.082 2.534 0.85 C 2.327 0.618 2.017 0.489 1.707 0.489 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.414,
    height: 3.374,
    viewBox: "0 0 3.414 3.374",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.741,
      top: 96.878,
      width: 3.414,
      height: 3.374,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.707 3.374 C 0.776 3.374 0 2.602 0 1.674 C 0 0.747 0.776 0 1.707 0 C 2.172 0 2.586 0.18 2.922 0.489 C 3.233 0.799 3.414 1.236 3.414 1.674 C 3.388 2.627 2.638 3.374 1.707 3.374 Z M 1.707 0.489 C 1.034 0.489 0.491 1.03 0.491 1.674 C 0.491 2.344 1.034 2.885 1.681 2.885 L 1.681 3.117 L 1.681 2.885 C 2.353 2.885 2.87 2.344 2.896 1.7 C 2.896 1.391 2.767 1.082 2.534 0.85 C 2.327 0.618 2.043 0.489 1.707 0.489 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.414,
    height: 3.374,
    viewBox: "0 0 3.414 3.374",
    fill: "none",
    style: {
      position: "absolute",
      left: 117.664,
      top: 103.215,
      width: 3.414,
      height: 3.374,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.707 3.374 C 0.776 3.374 0 2.602 0 1.674 C 0 0.747 0.776 0 1.707 0 C 2.172 0 2.586 0.18 2.922 0.489 C 3.233 0.799 3.414 1.236 3.414 1.674 C 3.388 2.627 2.638 3.374 1.707 3.374 Z M 1.707 0.489 C 1.034 0.489 0.491 1.03 0.491 1.674 C 0.491 2.344 1.034 2.885 1.681 2.885 L 1.681 3.117 L 1.681 2.885 C 2.353 2.885 2.87 2.344 2.896 1.7 C 2.896 1.391 2.767 1.082 2.534 0.85 C 2.327 0.618 2.017 0.489 1.707 0.489 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.422,
    height: 4.585,
    viewBox: "0 0 4.422 4.585",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.655,
      top: 77.353,
      width: 4.422,
      height: 4.585,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.189 1.983 L 3.233 1.983 L 4.241 1.288 C 4.345 1.211 4.37 1.056 4.293 0.953 C 4.215 0.85 4.06 0.824 3.957 0.902 L 2.612 1.829 L 2.612 0.258 C 2.612 0.129 2.508 0 2.379 0 C 2.25 0 2.146 0.103 2.146 0.232 L 2.146 1.623 L 1.293 0.747 C 1.19 0.644 1.034 0.644 0.957 0.747 C 0.853 0.85 0.853 1.005 0.957 1.082 L 1.81 1.983 L 0.233 2.009 C 0.103 2.009 0 2.112 0 2.267 C 0 2.396 0.103 2.499 0.233 2.499 L 1.655 2.473 L 0.543 3.246 C 0.44 3.323 0.414 3.477 0.491 3.58 C 0.543 3.658 0.621 3.683 0.698 3.683 C 0.75 3.683 0.802 3.658 0.828 3.632 L 2.121 2.73 L 2.121 4.327 C 2.121 4.456 2.224 4.585 2.353 4.585 C 2.483 4.585 2.586 4.482 2.586 4.353 L 2.586 2.859 L 3.491 3.812 C 3.543 3.864 3.595 3.89 3.672 3.89 C 3.724 3.89 3.801 3.864 3.853 3.812 C 3.957 3.709 3.957 3.555 3.853 3.477 L 2.922 2.499 L 4.189 2.499 C 4.319 2.499 4.422 2.396 4.422 2.241 C 4.422 2.112 4.319 1.983 4.189 1.983 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.499,
    height: 5.538,
    viewBox: "0 0 5.499 5.538",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.911,
      top: 34.877,
      width: 5.499,
      height: 5.538,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.7 5.538 C 2.519 5.538 2.338 5.538 1.872 3.632 C 0.269 3.323 0.114 3.143 0.062 3.065 C 0.01 3.014 -0.016 2.885 0.01 2.808 C 0.036 2.705 0.114 2.473 1.95 1.726 C 2.622 0 2.829 0 2.984 0 C 3.062 0 3.165 0.052 3.217 0.129 C 3.346 0.283 3.45 0.695 3.605 1.365 C 3.656 1.571 3.708 1.829 3.76 1.932 C 3.863 1.983 4.07 2.061 4.251 2.112 C 5.208 2.447 5.441 2.576 5.493 2.782 C 5.518 2.859 5.467 2.988 5.389 3.04 C 5.208 3.22 4.277 3.555 3.812 3.709 C 3.036 5.538 2.881 5.538 2.7 5.538 C 2.725 5.538 2.725 5.538 2.7 5.538 Z M 0.708 2.885 C 1.019 2.988 1.613 3.117 2.131 3.194 C 2.234 3.22 2.312 3.271 2.312 3.374 C 2.441 3.915 2.622 4.508 2.725 4.843 C 2.907 4.534 3.165 3.967 3.398 3.452 C 3.424 3.4 3.475 3.349 3.553 3.323 C 3.993 3.168 4.484 2.988 4.794 2.859 C 4.587 2.756 4.277 2.653 4.096 2.602 C 3.553 2.421 3.45 2.37 3.372 2.267 C 3.32 2.189 3.269 2.061 3.139 1.494 C 3.088 1.288 3.01 0.979 2.932 0.747 C 2.777 1.056 2.544 1.571 2.363 2.035 C 2.338 2.086 2.286 2.138 2.234 2.164 C 1.691 2.396 1.045 2.679 0.708 2.885 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.499,
    height: 5.538,
    viewBox: "0 0 5.499 5.538",
    fill: "none",
    style: {
      position: "absolute",
      left: 96.707,
      top: 26.737,
      width: 5.499,
      height: 5.538,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.7 5.538 C 2.519 5.538 2.338 5.538 1.872 3.632 C 0.269 3.323 0.114 3.143 0.062 3.065 C 0.01 3.014 -0.016 2.885 0.01 2.808 C 0.036 2.705 0.114 2.473 1.95 1.726 C 2.622 0 2.829 0 2.984 0 C 3.062 0 3.165 0.052 3.217 0.129 C 3.346 0.283 3.45 0.695 3.605 1.365 C 3.656 1.571 3.708 1.829 3.76 1.932 C 3.863 1.983 4.07 2.061 4.251 2.112 C 5.208 2.447 5.441 2.576 5.493 2.782 C 5.518 2.859 5.467 2.988 5.389 3.04 C 5.208 3.22 4.277 3.555 3.812 3.709 C 3.036 5.538 2.881 5.538 2.7 5.538 C 2.725 5.538 2.725 5.538 2.7 5.538 Z M 0.708 2.885 C 1.019 2.988 1.613 3.117 2.131 3.194 C 2.234 3.22 2.312 3.271 2.312 3.374 C 2.441 3.915 2.622 4.508 2.725 4.843 C 2.906 4.534 3.165 3.967 3.398 3.452 C 3.424 3.4 3.475 3.349 3.553 3.323 C 3.993 3.168 4.484 2.988 4.794 2.859 C 4.587 2.756 4.277 2.653 4.096 2.602 C 3.553 2.421 3.45 2.37 3.372 2.267 C 3.32 2.189 3.269 2.061 3.139 1.494 C 3.088 1.288 3.01 0.979 2.932 0.747 C 2.777 1.056 2.544 1.571 2.363 2.035 C 2.338 2.086 2.286 2.138 2.234 2.164 C 1.691 2.396 1.045 2.679 0.708 2.885 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.499,
    height: 5.538,
    viewBox: "0 0 5.499 5.538",
    fill: "none",
    style: {
      position: "absolute",
      left: 105.862,
      top: 105.559,
      width: 5.499,
      height: 5.538,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.7 5.538 C 2.519 5.538 2.338 5.538 1.872 3.632 C 0.269 3.323 0.114 3.143 0.062 3.065 C 0.01 3.014 -0.016 2.885 0.01 2.808 C 0.036 2.705 0.114 2.473 1.95 1.726 C 2.622 0 2.829 0 2.984 0 C 3.062 0 3.165 0.052 3.217 0.129 C 3.346 0.283 3.45 0.695 3.605 1.365 C 3.656 1.571 3.708 1.829 3.76 1.932 C 3.863 1.983 4.07 2.061 4.251 2.112 C 5.208 2.447 5.441 2.576 5.493 2.782 C 5.518 2.859 5.467 2.988 5.389 3.04 C 5.208 3.22 4.277 3.555 3.812 3.709 C 3.036 5.512 2.881 5.538 2.7 5.538 C 2.725 5.538 2.725 5.538 2.7 5.538 Z M 0.708 2.859 C 1.019 2.962 1.613 3.091 2.131 3.168 C 2.234 3.194 2.312 3.246 2.312 3.349 C 2.441 3.89 2.622 4.482 2.725 4.817 C 2.906 4.508 3.165 3.941 3.398 3.426 C 3.424 3.374 3.475 3.323 3.553 3.297 C 3.993 3.143 4.484 2.962 4.794 2.833 C 4.587 2.73 4.277 2.627 4.096 2.576 C 3.553 2.37 3.45 2.344 3.372 2.241 C 3.32 2.164 3.269 2.035 3.139 1.468 C 3.088 1.262 3.01 0.953 2.932 0.721 C 2.777 1.03 2.544 1.546 2.363 2.009 C 2.338 2.061 2.286 2.112 2.234 2.138 C 1.691 2.396 1.045 2.679 0.708 2.859 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.305,
    height: 7.431,
    viewBox: "0 0 7.305 7.431",
    fill: "none",
    style: {
      position: "absolute",
      left: 118.301,
      top: 51.768,
      width: 7.305,
      height: 7.431,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.57 2.763 C 5.803 1.887 6.113 0.496 6.113 0.264 C 6.113 0.135 5.984 0.007 5.88 0.007 C 5.751 -0.019 5.544 -0.045 3.631 1.449 C 2.544 0.728 1.639 0.161 1.614 0.161 C 1.536 0.11 1.458 0.11 1.381 0.135 C 1.019 0.29 0.941 0.805 1.743 2.943 C 1.148 3.458 0.243 4.231 0.062 4.514 C -0.016 4.617 -0.016 4.746 0.036 4.849 C 0.114 5.03 0.346 5.133 0.838 5.184 C 1.381 5.261 2.131 5.261 2.7 5.236 C 3.088 6.137 3.475 6.936 3.605 7.245 C 3.656 7.348 3.734 7.399 3.838 7.425 C 4.07 7.451 4.225 7.477 4.924 5.133 C 5.803 5.055 6.863 4.927 7.148 4.746 C 7.251 4.695 7.303 4.592 7.303 4.489 C 7.329 4.231 7.173 3.922 5.57 2.763 Z M 1.639 0.728 C 1.976 0.934 2.57 1.32 3.243 1.758 C 2.881 2.042 2.544 2.325 2.182 2.608 C 1.769 1.475 1.665 0.96 1.639 0.728 Z M 0.915 4.669 C 0.786 4.643 0.683 4.643 0.605 4.617 C 0.812 4.411 1.226 3.999 1.95 3.407 C 2.105 3.819 2.286 4.257 2.493 4.746 C 1.846 4.746 1.303 4.721 0.915 4.669 Z M 3.915 6.678 C 3.76 6.318 3.501 5.802 3.243 5.21 C 3.631 5.184 4.019 5.184 4.406 5.158 C 4.174 5.983 4.019 6.421 3.915 6.678 Z M 4.562 4.643 C 4.044 4.669 3.527 4.721 3.036 4.721 C 2.777 4.128 2.544 3.561 2.363 3.072 C 2.777 2.711 3.243 2.376 3.656 2.042 C 4.174 2.376 4.613 2.686 5.027 2.969 C 4.872 3.51 4.717 4.102 4.562 4.643 Z M 5.156 2.454 C 4.82 2.222 4.458 1.99 4.07 1.707 C 4.846 1.114 5.312 0.779 5.57 0.625 C 5.493 0.986 5.363 1.604 5.156 2.454 Z M 5.105 4.592 C 5.234 4.154 5.337 3.716 5.467 3.252 C 6.32 3.87 6.656 4.205 6.76 4.334 C 6.501 4.437 5.984 4.514 5.105 4.592 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.586,
    height: 8.578,
    viewBox: "0 0 8.586 8.578",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.913,
      top: 56.154,
      width: 8.586,
      height: 8.578,
      color: "rgb(255,155,75)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.577 4.224 L 0 1.185 L 3.129 2.035 L 5.25 0 L 5.922 2.627 L 8.586 4.173 L 6.025 5.332 L 5.612 8.578 L 3.414 5.976 L 0.491 6.903 L 1.577 4.224 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.047,
      top: 31.36,
      width: 107.204,
      height: 73.46,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 56.982,
    height: 66.713,
    viewBox: "0 0 56.982 66.713",
    fill: "none",
    style: {
      position: "absolute",
      left: 50.222,
      top: 6.748,
      width: 56.982,
      height: 66.713,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 53.629 37.854 C 52.931 35.458 53.733 31.105 52.258 30.616 C 51.948 30.513 51.715 30.59 51.56 30.77 C 51.405 30.075 51.146 29.586 50.707 29.457 C 49.957 29.276 49.698 29.482 49.621 29.895 C 49.388 29.07 49.078 28.555 48.638 28.942 C 47.629 29.843 47.992 30.075 47.914 32.29 C 47.785 30.899 46.828 28.813 46.052 30.152 C 43.569 34.454 49.259 60.934 43.828 56.503 C 40.699 53.953 39.147 44.113 38.216 40.713 C 38.113 39.734 37.751 38.936 37.13 38.369 C 32.01 33.733 23.088 35.484 23.114 31.775 C 23.166 25.722 26.76 29.379 30.536 26.16 C 30.975 26.907 31.596 27.422 32.294 27.422 C 34.518 27.422 37.958 23.326 35.915 20.57 C 35.475 19.978 34.984 19.643 34.492 19.488 C 34.88 18.406 35.242 17.17 35.604 15.779 C 38.63 3.853 33.355 3.544 33.355 3.544 C 33.355 3.544 23.269 -3.179 15.847 1.895 C 8.425 6.995 6.046 20.905 14.477 26.469 C 15.33 27.035 14.347 30.126 13.623 31.698 C 12.175 34.789 3.046 28.401 0.745 32.548 C -1.583 36.721 2.374 57.25 1.443 60.959 C 0.512 64.669 15.925 57.431 27.226 61.655 C 27.639 61.809 29.243 60.109 31.105 57.534 C 35.398 69.357 47.061 67.863 53.345 63.535 C 60.999 58.229 54.301 40.25 53.629 37.854 Z M 49.983 33.578 C 49.983 33.424 49.983 33.243 49.983 33.089 C 49.983 33.243 49.983 33.398 49.983 33.578 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 40.617,
    height: 39.049,
    viewBox: "0 0 40.617 39.049",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.803,
      top: 0,
      width: 40.617,
      height: 39.049,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.217 4.264 C 14.217 4.264 18.199 -2.305 27.017 0.864 C 38.551 4.985 33.689 19.873 38.732 20.054 C 43.775 20.234 37.103 25.257 37.103 25.257 C 37.103 25.257 40.698 25.257 40.517 27.06 C 40.335 28.863 29.164 35.844 24.121 28.503 C 24.121 28.503 22.311 36.05 14.217 38.188 C 6.122 40.326 2.864 38.008 3.588 36.385 C 4.312 34.762 7.364 32.083 7.364 32.083 C 7.364 32.083 3.588 36.385 1.597 32.624 C 0.485 30.512 6.252 29.713 2.321 24.562 C -1.636 19.333 -2.179 4.959 14.217 4.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 55.661,
    height: 66.810,
    viewBox: "0 0 55.661 66.810",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6.642,
      width: 55.661,
      height: 66.81,
      color: "rgb(234,163,123)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 55.621 61.065 C 54.69 57.356 56.371 36.208 54.406 31.881 C 53.397 29.666 44.863 34.895 43.415 31.804 C 42.665 30.232 41.682 27.141 42.562 26.575 C 50.992 21.011 48.613 7.101 41.191 2.001 C 33.769 -3.099 26.14 3.16 26.14 3.16 C 26.14 3.16 18.744 7.462 21.434 15.859 C 21.873 17.25 22.313 18.461 22.753 19.517 C 22.184 19.62 21.615 19.955 21.098 20.65 C 19.029 23.38 22.468 27.502 24.718 27.502 C 25.52 27.502 26.218 26.806 26.683 25.828 C 30.64 29.485 33.821 25.647 33.898 31.855 C 33.924 35.564 25.002 33.813 19.882 38.449 C 19.236 39.016 18.899 39.84 18.796 40.793 C 17.865 44.193 14.426 56.351 13.184 56.583 C 6.28 58 13.391 34.56 10.934 30.258 C 10.159 28.919 9.228 31.005 9.073 32.396 C 8.995 30.207 9.357 29.949 8.348 29.047 C 7.909 28.661 7.598 29.176 7.366 30 C 7.314 29.563 7.03 29.382 6.28 29.563 C 5.84 29.666 5.581 30.181 5.426 30.876 C 5.271 30.696 5.038 30.619 4.728 30.722 C 3.254 31.211 4.03 35.539 3.357 37.96 C 2.659 40.355 -4.039 58.335 3.694 63.641 C 10.003 67.969 21.667 69.437 25.933 57.639 C 27.795 60.215 29.373 61.915 29.812 61.761 C 41.139 57.536 56.552 64.775 55.621 61.065 Z M 7.004 33.169 C 7.004 33.349 7.004 33.504 7.004 33.658 C 7.004 33.504 7.004 33.349 7.004 33.169 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.831,
    height: 3.884,
    viewBox: "0 0 3.831 3.884",
    fill: "none",
    style: {
      position: "absolute",
      left: 67.74,
      top: 21.502,
      width: 3.831,
      height: 3.884,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.311 3.884 C 2.285 3.884 2.285 3.884 2.259 3.884 C 2.207 3.858 0.682 3.523 0.113 2.854 C 0.009 2.751 -0.017 2.596 0.009 2.467 C 0.164 1.669 2.699 0.381 3.475 0.02 C 3.604 -0.031 3.733 0.02 3.811 0.123 C 3.863 0.252 3.811 0.381 3.707 0.458 C 2.026 1.282 0.527 2.287 0.501 2.596 C 0.889 3.034 1.975 3.369 2.388 3.446 C 2.518 3.472 2.595 3.601 2.569 3.729 C 2.518 3.807 2.414 3.884 2.311 3.884 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.436,
    height: 4.347,
    viewBox: "0 0 4.436 4.347",
    fill: "none",
    style: {
      position: "absolute",
      left: 65.644,
      top: 17.149,
      width: 4.436,
      height: 4.347,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.554 4.347 C 0.45 4.347 0.347 4.321 0.269 4.244 C -0.507 3.677 0.605 0.973 0.967 0.149 C 1.019 0.02 1.174 -0.032 1.304 0.02 C 1.433 0.071 1.485 0.226 1.433 0.355 C 0.709 2.003 0.295 3.652 0.579 3.858 C 0.89 4.012 2.493 2.647 4.019 0.973 C 4.122 0.87 4.277 0.87 4.355 0.947 C 4.458 1.05 4.458 1.179 4.381 1.282 C 3.269 2.518 1.459 4.347 0.554 4.347 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.495,
    height: 5.137,
    viewBox: "0 0 4.495 5.137",
    fill: "none",
    style: {
      position: "absolute",
      left: 73.935,
      top: 21.459,
      width: 4.495,
      height: 5.137,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.565 5.137 C 0.409 5.137 0.306 5.086 0.203 5.009 C -0.599 4.313 1.185 1.351 1.961 0.114 C 2.039 0.011 2.194 -0.04 2.297 0.037 C 2.401 0.114 2.452 0.269 2.375 0.372 C 1.082 2.381 0.203 4.365 0.513 4.622 C 0.797 4.854 2.478 3.566 4.082 1.892 C 4.185 1.789 4.34 1.789 4.418 1.892 C 4.521 1.995 4.521 2.149 4.418 2.227 C 3.539 3.18 1.573 5.137 0.565 5.137 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.373,
    height: 4.379,
    viewBox: "0 0 5.373 4.379",
    fill: "none",
    style: {
      position: "absolute",
      left: 66.477,
      top: 25.128,
      width: 5.373,
      height: 4.379,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.359 4.379 C 1.868 4.379 1.402 4.199 0.989 3.864 C -0.899 2.241 0.497 0.129 0.497 0.103 C 0.575 0 0.73 -0.026 0.833 0.026 C 0.937 0.103 0.963 0.258 0.911 0.361 C 0.859 0.438 -0.253 2.138 1.299 3.477 C 1.661 3.787 2.049 3.915 2.488 3.864 C 3.73 3.761 4.919 2.37 4.945 2.344 C 5.023 2.241 5.178 2.215 5.281 2.318 C 5.385 2.396 5.411 2.55 5.307 2.653 C 5.255 2.705 3.988 4.224 2.514 4.327 C 2.488 4.379 2.437 4.379 2.359 4.379 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 50.147,
    height: 28.255,
    viewBox: "0 0 50.147 28.255",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.288,
      top: 0.505,
      width: 50.147,
      height: 28.255,
      color: "rgb(77,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.174 16.097 C 43.726 15.427 47.217 10.713 40.727 8.292 C 38.063 7.313 36.485 8.343 35.554 9.528 C 31.986 3.243 27.383 4.093 24.926 5.201 C 23.659 2.548 19.702 -2.862 9.436 1.878 C -1.555 6.978 2.738 12.8 0.41 16.123 C -1.917 19.471 6.306 17.101 8.789 13.032 C 12.642 6.695 17.763 11.28 22.314 9.271 C 22.159 11.254 22.676 13.882 25.598 16.097 C 31.132 20.321 25.909 27.302 30.305 28.203 C 32.736 28.693 35.554 25.679 36.822 21.403 C 39.227 24.958 44.502 26.555 48.459 23.283 C 50.502 21.583 48.123 20.991 45.976 20.836 C 49.571 20.141 52.079 16.715 48.174 16.097 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 31.266,
    height: 32.605,
    viewBox: "0 0 31.266 32.605",
    fill: "none",
    style: {
      position: "absolute",
      left: 53.508,
      top: 38.147,
      width: 31.266,
      height: 32.605,
      color: "rgb(160,210,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.716 0.324 C 9.716 0.324 17.345 -0.784 19.75 1.097 C 22.155 2.977 28.335 11.246 30.404 14.672 C 32.473 18.097 30.404 30.41 28.516 31.801 C 26.629 33.192 4.052 32.625 2.165 31.26 C 0.277 29.895 -1.223 12.611 1.441 11.168 C 6.121 8.644 8.216 -0.243 9.716 0.324 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.525,
    height: 5.066,
    viewBox: "0 0 12.525 5.066",
    fill: "none",
    style: {
      position: "absolute",
      left: 61.137,
      top: 29.644,
      width: 12.525,
      height: 5.066,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.836 5.066 C 6.147 5.066 2.526 4.242 0.044 0.378 C -0.034 0.275 -0.008 0.121 0.121 0.043 C 0.225 -0.034 0.38 -0.008 0.457 0.121 C 4.595 6.56 12.12 4.165 12.198 4.139 C 12.327 4.088 12.457 4.165 12.508 4.294 C 12.56 4.422 12.482 4.551 12.353 4.603 C 12.327 4.603 10.853 5.066 8.836 5.066 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.430,
    height: 3.551,
    viewBox: "0 0 4.430 3.551",
    fill: "none",
    style: {
      position: "absolute",
      left: 80.391,
      top: 28.171,
      width: 4.43,
      height: 3.551,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.09 3.551 C 0.935 3.551 0.78 3.525 0.651 3.448 C 0.392 3.319 -0.048 2.984 0.004 2.005 C 0.056 1.465 0.263 1.027 0.677 0.692 C 1.84 -0.261 4.142 0.048 4.219 0.048 C 4.349 0.074 4.452 0.177 4.426 0.331 C 4.4 0.46 4.297 0.563 4.142 0.537 C 4.116 0.537 1.97 0.254 0.961 1.078 C 0.651 1.31 0.496 1.645 0.47 2.031 C 0.444 2.521 0.547 2.856 0.832 2.984 C 1.09 3.113 1.478 3.01 1.737 2.752 C 1.892 2.598 2.228 2.16 1.892 1.439 C 1.84 1.31 1.892 1.181 2.021 1.104 C 2.151 1.052 2.28 1.104 2.357 1.233 C 2.668 1.928 2.564 2.624 2.099 3.087 C 1.814 3.396 1.452 3.551 1.09 3.551 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.477,
    height: 6.559,
    viewBox: "0 0 10.477 6.559",
    fill: "none",
    style: {
      position: "absolute",
      left: 91.625,
      top: 11.898,
      width: 10.477,
      height: 6.559,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.243 6.559 C 8.036 6.559 7.803 6.507 7.596 6.404 C 6.795 6.018 6.226 4.884 5.864 2.927 C 5.657 1.716 5.165 0.943 4.416 0.634 C 2.786 -0.035 0.407 1.613 0.381 1.639 C 0.278 1.716 0.123 1.69 0.045 1.587 C -0.032 1.484 -0.007 1.33 0.097 1.253 C 0.2 1.175 2.709 -0.576 4.597 0.196 C 5.502 0.583 6.096 1.459 6.355 2.875 C 6.665 4.653 7.157 5.709 7.803 5.992 C 8.424 6.275 9.174 5.863 9.846 5.477 L 10.105 5.322 C 10.234 5.245 10.363 5.297 10.441 5.425 C 10.519 5.554 10.467 5.683 10.338 5.76 L 10.079 5.915 C 9.536 6.172 8.889 6.559 8.243 6.559 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.762,
    height: 7.699,
    viewBox: "0 0 7.762 7.699",
    fill: "none",
    style: {
      position: "absolute",
      left: 92.196,
      top: 15.06,
      width: 7.762,
      height: 7.699,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.216 7.699 C 5.009 7.699 4.854 7.647 4.698 7.57 C 4.026 7.209 3.974 6.205 3.923 4.917 C 3.897 4.118 3.871 3.243 3.664 2.393 C 3.431 1.414 3.043 0.821 2.475 0.589 C 1.544 0.203 0.38 0.924 0.38 0.95 C 0.276 1.027 0.121 1.002 0.044 0.873 C -0.034 0.77 -0.008 0.615 0.121 0.538 C 0.173 0.512 1.492 -0.338 2.656 0.152 C 3.38 0.435 3.897 1.182 4.155 2.315 C 4.362 3.217 4.388 4.118 4.414 4.943 C 4.466 6.025 4.492 6.952 4.931 7.184 C 5.319 7.39 6.147 7.081 7.388 6.308 C 7.491 6.231 7.647 6.282 7.724 6.385 C 7.802 6.488 7.75 6.643 7.647 6.72 C 6.56 7.364 5.785 7.699 5.216 7.699 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.095,
    height: 8.027,
    viewBox: "0 0 16.095 8.027",
    fill: "none",
    style: {
      position: "absolute",
      left: 60.116,
      top: 2.599,
      width: 16.095,
      height: 8.027,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.238 8.027 C 0.134 8.027 0.031 7.95 0.005 7.821 C -0.021 7.692 0.057 7.564 0.186 7.538 C 0.988 7.383 1.324 6.533 1.763 5.426 C 2.539 3.545 3.574 0.944 7.737 0.171 C 14.383 -1.065 16.064 4.808 16.09 4.859 C 16.116 4.988 16.038 5.117 15.909 5.168 C 15.78 5.194 15.65 5.117 15.599 4.988 C 15.547 4.756 13.995 -0.525 7.815 0.635 C 3.91 1.356 2.979 3.7 2.203 5.58 C 1.712 6.765 1.298 7.77 0.264 7.976 C 0.289 8.002 0.264 8.027 0.238 8.027 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.056,
    height: 7.986,
    viewBox: "0 0 13.056 7.986",
    fill: "none",
    style: {
      position: "absolute",
      left: 61.621,
      top: 5.86,
      width: 13.056,
      height: 7.986,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.362 7.986 C 0.31 7.986 0.259 7.986 0.233 7.986 C 0.103 7.986 0 7.857 0 7.729 C 0 7.6 0.129 7.497 0.259 7.497 C 1.448 7.574 1.991 6.338 2.664 4.792 C 3.569 2.68 4.732 0.027 8.198 0.001 C 10.422 -0.025 11.922 0.465 12.62 1.469 C 13.37 2.525 12.93 3.736 12.904 3.787 C 12.853 3.916 12.723 3.968 12.594 3.942 C 12.465 3.891 12.413 3.762 12.439 3.633 C 12.439 3.633 12.801 2.603 12.206 1.753 C 11.611 0.903 10.215 0.465 8.172 0.49 C 5.017 0.516 3.982 2.912 3.077 4.998 C 2.431 6.518 1.81 7.986 0.362 7.986 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.703,
    height: 8.310,
    viewBox: "0 0 9.703 8.310",
    fill: "none",
    style: {
      position: "absolute",
      left: 80.597,
      top: 8.885,
      width: 9.703,
      height: 8.31,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.392 8.31 C 7.815 8.31 7.22 6.842 6.599 5.296 C 6.186 4.266 5.694 3.081 4.867 2.154 C 2.901 -0.062 0.419 0.582 0.315 0.608 C 0.186 0.634 0.057 0.557 0.005 0.428 C -0.021 0.299 0.057 0.17 0.186 0.119 C 0.315 0.093 3.056 -0.628 5.229 1.819 C 6.108 2.798 6.599 4.034 7.039 5.09 C 7.66 6.61 8.125 7.846 9.444 7.795 C 9.573 7.795 9.703 7.898 9.703 8.027 C 9.703 8.155 9.599 8.284 9.47 8.284 C 9.444 8.31 9.418 8.31 9.392 8.31 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.341,
    height: 14.232,
    viewBox: "0 0 9.341 14.232",
    fill: "none",
    style: {
      position: "absolute",
      left: 79.666,
      top: 11.128,
      width: 9.341,
      height: 14.232,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.875 14.232 C 6.056 14.232 5.72 10.24 5.436 7.02 C 5.306 5.32 5.151 3.723 4.712 3.079 C 3.367 1.173 0.238 0.503 0.186 0.477 C 0.057 0.451 -0.021 0.323 0.005 0.194 C 0.031 0.065 0.16 -0.038 0.289 0.014 C 0.419 0.039 3.651 0.735 5.099 2.795 C 5.643 3.542 5.772 5.14 5.927 6.994 C 6.186 10.24 6.496 13.949 9.082 13.743 C 9.211 13.743 9.341 13.846 9.341 13.975 C 9.341 14.103 9.263 14.232 9.108 14.232 C 9.03 14.232 8.953 14.232 8.875 14.232 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.511,
    height: 20.703,
    viewBox: "0 0 15.511 20.703",
    fill: "none",
    style: {
      position: "absolute",
      left: 74.318,
      top: 37.033,
      width: 15.511,
      height: 20.703,
      color: "rgb(234,163,123)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.293 C 0 3.293 4.241 4.168 4.939 8.444 C 5.844 13.879 2.224 17.949 3.827 18.104 C 5.431 18.258 7.474 12.385 7.474 12.385 C 7.474 12.385 5.353 18.464 6.491 19.933 C 7.629 21.401 9.775 13.21 9.775 13.21 C 9.775 13.21 6.181 19.495 8.224 20.602 C 10.241 21.71 12.206 13.338 12.206 13.338 C 12.206 13.338 9.698 20.525 11.689 19.881 C 13.68 19.237 17.585 11.123 14.146 4.993 C 10.68 -1.138 0.698 -1.524 0 3.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.695,
    height: 7.676,
    viewBox: "0 0 1.695 7.676",
    fill: "none",
    style: {
      position: "absolute",
      left: 80.407,
      top: 46.431,
      width: 1.695,
      height: 7.676,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.247 7.676 C 0.195 7.676 0.143 7.65 0.092 7.625 C -0.012 7.547 -0.038 7.393 0.066 7.29 C 0.531 6.697 1.023 2.653 1.204 0.232 C 1.204 0.103 1.333 0 1.462 0 C 1.592 0 1.695 0.129 1.695 0.258 C 1.643 0.902 1.152 6.697 0.428 7.573 C 0.376 7.625 0.299 7.676 0.247 7.676 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.943,
    height: 6.671,
    viewBox: "0 0 1.943 6.671",
    fill: "none",
    style: {
      position: "absolute",
      left: 82.461,
      top: 48.62,
      width: 1.943,
      height: 6.671,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.236 6.671 C 0.185 6.671 0.133 6.646 0.081 6.62 C -0.022 6.543 -0.022 6.388 0.055 6.285 C 1.193 4.997 1.452 0.283 1.452 0.232 C 1.452 0.103 1.581 0 1.71 0 C 1.84 0 1.943 0.129 1.943 0.258 C 1.943 0.464 1.659 5.203 0.417 6.62 C 0.391 6.646 0.314 6.671 0.236 6.671 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.796,
    height: 6.259,
    viewBox: "0 0 1.796 6.259",
    fill: "none",
    style: {
      position: "absolute",
      left: 85.36,
      top: 48.697,
      width: 1.796,
      height: 6.259,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.259 6.259 C 0.207 6.259 0.129 6.234 0.078 6.182 C -0.026 6.079 -0.026 5.924 0.078 5.847 C 1.526 4.405 1.293 0.309 1.293 0.258 C 1.293 0.129 1.396 0 1.526 0 C 1.655 0 1.784 0.103 1.784 0.232 C 1.784 0.412 2.017 4.585 0.414 6.182 C 0.388 6.234 0.336 6.259 0.259 6.259 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.403,
    height: 7.378,
    viewBox: "0 0 5.403 7.378",
    fill: "none",
    style: {
      position: "absolute",
      left: 95.562,
      top: 39.851,
      width: 5.403,
      height: 7.378,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.763 7.378 C 3.711 7.378 3.634 7.353 3.608 7.301 C 3.504 7.198 3.504 7.044 3.582 6.966 C 3.996 6.528 5.03 5.189 4.927 4.39 C 4.901 4.184 4.797 4.03 4.616 3.901 C 3.401 3.128 2.47 3.669 2.418 3.695 C 2.341 3.746 2.263 3.746 2.186 3.721 C 2.108 3.695 2.056 3.618 2.056 3.54 C 2.056 3.54 1.927 2.793 1.694 2.021 C 1.332 0.836 0.97 0.449 0.763 0.501 C 0.375 0.578 0.427 3.025 0.867 5.601 C 0.893 5.73 0.789 5.859 0.66 5.884 C 0.53 5.91 0.401 5.807 0.375 5.678 C 0.091 4.056 -0.426 0.217 0.66 0.011 C 1.229 -0.092 1.72 0.501 2.134 1.866 C 2.289 2.355 2.392 2.819 2.444 3.128 C 2.91 2.974 3.789 2.793 4.849 3.463 C 5.159 3.669 5.34 3.952 5.392 4.287 C 5.547 5.498 3.996 7.198 3.918 7.25 C 3.892 7.353 3.815 7.378 3.763 7.378 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.937,
    height: 4.971,
    viewBox: "0 0 3.937 4.971",
    fill: "none",
    style: {
      position: "absolute",
      left: 98.079,
      top: 37.415,
      width: 3.937,
      height: 4.971,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.884 4.534 C 3.858 4.508 3.755 4.379 3.522 4.276 C 3.625 4.199 3.651 4.07 3.599 3.967 C 3.393 3.58 3.393 2.164 3.418 1.339 C 3.418 1.211 3.315 1.082 3.186 1.082 C 3.056 1.082 2.927 1.185 2.927 1.314 C 2.927 1.546 2.849 3.503 3.134 4.147 C 2.927 4.096 2.694 4.096 2.384 4.096 C 2.436 4.018 2.436 3.941 2.41 3.864 C 2.022 3.117 2.1 1.082 2.151 0.361 C 2.151 0.232 2.048 0.103 1.919 0.103 C 1.789 0.077 1.66 0.206 1.66 0.335 C 1.66 0.438 1.453 3.065 1.97 4.096 C 1.97 4.121 1.996 4.121 2.022 4.147 C 1.686 4.199 1.298 4.25 0.858 4.379 C 0.858 4.379 0.858 4.379 0.858 4.353 C 0.47 3.606 0.47 1.133 0.496 0.258 C 0.496 0.129 0.393 0 0.263 0 C 0.134 0 0.005 0.103 0.005 0.232 C 0.005 0.361 -0.073 3.426 0.393 4.508 L 0.367 4.508 C 0.238 4.559 0.16 4.688 0.212 4.817 C 0.238 4.92 0.341 4.971 0.444 4.971 C 0.47 4.971 0.496 4.971 0.522 4.971 C 2.875 4.199 3.47 4.765 3.496 4.791 C 3.574 4.894 3.729 4.92 3.832 4.843 C 3.961 4.791 3.961 4.637 3.884 4.534 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.847,
    height: 3.926,
    viewBox: "0 0 3.847 3.926",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.646,
      top: 21.46,
      width: 3.847,
      height: 3.926,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.51 3.926 C 1.407 3.926 1.304 3.849 1.278 3.746 C 1.252 3.617 1.329 3.488 1.459 3.462 C 1.847 3.385 2.959 3.05 3.347 2.586 C 3.321 2.303 1.821 1.298 0.14 0.474 C 0.011 0.423 -0.041 0.268 0.036 0.139 C 0.088 0.011 0.243 -0.041 0.373 0.036 C 1.148 0.423 3.683 1.685 3.838 2.483 C 3.864 2.638 3.838 2.767 3.734 2.87 C 3.166 3.539 1.64 3.9 1.588 3.9 C 1.536 3.926 1.536 3.926 1.51 3.926 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.447,
    height: 4.321,
    viewBox: "0 0 4.447 4.321",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.143,
      top: 17.175,
      width: 4.447,
      height: 4.321,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.867 4.321 C 2.962 4.321 1.152 2.467 0.066 1.282 C -0.038 1.179 -0.012 1.024 0.092 0.947 C 0.195 0.844 0.35 0.87 0.428 0.973 C 1.954 2.647 3.557 3.987 3.867 3.858 C 4.152 3.652 3.738 2.003 3.014 0.355 C 2.962 0.226 3.014 0.097 3.143 0.02 C 3.273 -0.032 3.402 0.02 3.479 0.149 C 3.841 0.973 4.953 3.677 4.178 4.244 C 4.074 4.296 3.971 4.321 3.867 4.321 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.488,
    height: 5.118,
    viewBox: "0 0 4.488 5.118",
    fill: "none",
    style: {
      position: "absolute",
      left: 28.762,
      top: 21.479,
      width: 4.488,
      height: 5.118,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.947 5.118 C 2.939 5.118 0.947 3.16 0.068 2.233 C -0.035 2.13 -0.009 1.975 0.068 1.898 C 0.172 1.795 0.327 1.821 0.404 1.898 C 1.982 3.572 3.689 4.886 3.973 4.628 C 4.258 4.371 3.404 2.387 2.111 0.378 C 2.034 0.275 2.059 0.121 2.189 0.043 C 2.292 -0.034 2.447 -0.008 2.525 0.121 C 3.327 1.357 5.085 4.319 4.283 5.015 C 4.232 5.092 4.102 5.118 3.947 5.118 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.381,
    height: 4.345,
    viewBox: "0 0 5.381 4.345",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.343,
      top: 25.162,
      width: 5.381,
      height: 4.345,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.029 4.345 C 2.978 4.345 2.9 4.345 2.848 4.345 C 1.4 4.216 0.133 2.722 0.055 2.671 C -0.022 2.568 -0.022 2.413 0.081 2.336 C 0.185 2.259 0.34 2.259 0.417 2.362 C 0.417 2.387 1.607 3.778 2.874 3.881 C 3.314 3.907 3.702 3.778 4.064 3.495 C 5.615 2.156 4.503 0.456 4.452 0.378 C 4.374 0.275 4.4 0.121 4.529 0.043 C 4.633 -0.034 4.788 -0.008 4.865 0.121 C 4.891 0.146 6.288 2.259 4.374 3.881 C 3.986 4.191 3.521 4.345 3.029 4.345 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.248,
    height: 4.141,
    viewBox: "0 0 11.248 4.141",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.454,
      top: 31.291,
      width: 11.248,
      height: 4.141,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.263 4.141 C 1.531 4.141 0.264 3.806 0.186 3.806 C 0.057 3.78 -0.021 3.625 0.005 3.497 C 0.031 3.368 0.16 3.291 0.315 3.316 C 0.393 3.342 7.349 5.094 10.815 0.096 C 10.892 -0.007 11.047 -0.032 11.151 0.045 C 11.254 0.122 11.28 0.277 11.202 0.38 C 9.677 2.569 7.298 3.857 4.272 4.089 C 3.962 4.115 3.6 4.141 3.263 4.141 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.435,
    height: 3.536,
    viewBox: "0 0 4.435 3.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.387,
      top: 28.186,
      width: 4.435,
      height: 3.536,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.34 3.536 C 2.978 3.536 2.616 3.382 2.331 3.099 C 1.84 2.609 1.737 1.914 2.073 1.244 C 2.125 1.115 2.28 1.064 2.409 1.115 C 2.538 1.167 2.59 1.321 2.538 1.45 C 2.202 2.171 2.538 2.609 2.693 2.764 C 2.952 3.021 3.34 3.124 3.599 2.996 C 3.857 2.867 3.986 2.532 3.961 2.042 C 3.935 1.63 3.78 1.321 3.469 1.089 C 2.461 0.265 0.314 0.548 0.288 0.548 C 0.159 0.574 0.03 0.471 0.004 0.342 C -0.022 0.214 0.082 0.085 0.211 0.059 C 0.314 0.033 2.59 -0.25 3.754 0.703 C 4.167 1.038 4.4 1.476 4.426 2.017 C 4.504 2.97 4.064 3.33 3.78 3.459 C 3.65 3.511 3.495 3.536 3.34 3.536 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.403,
    height: 7.332,
    viewBox: "0 0 5.403 7.332",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.217,
      top: 39.897,
      width: 5.403,
      height: 7.332,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.666 7.332 C 1.588 7.332 1.537 7.306 1.485 7.255 C 1.407 7.178 -0.144 5.477 0.011 4.293 C 0.063 3.932 0.244 3.649 0.554 3.468 C 1.614 2.799 2.519 2.953 2.959 3.133 C 3.011 2.824 3.14 2.361 3.269 1.871 C 3.683 0.506 4.174 -0.112 4.743 0.017 C 5.829 0.223 5.312 4.061 5.028 5.684 C 5.002 5.812 4.873 5.915 4.743 5.89 C 4.614 5.864 4.511 5.735 4.536 5.606 C 4.976 3.005 5.028 0.583 4.64 0.506 C 4.433 0.48 4.097 0.841 3.709 2.026 C 3.476 2.773 3.347 3.52 3.347 3.546 C 3.321 3.623 3.269 3.7 3.192 3.726 C 3.114 3.752 3.037 3.752 2.959 3.7 C 2.933 3.674 1.976 3.108 0.761 3.906 C 0.58 4.035 0.476 4.19 0.451 4.396 C 0.347 5.22 1.381 6.534 1.795 6.971 C 1.899 7.075 1.873 7.229 1.769 7.306 C 1.795 7.306 1.744 7.332 1.666 7.332 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.933,
    height: 5.023,
    viewBox: "0 0 3.933 5.023",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.2,
      top: 37.441,
      width: 3.933,
      height: 5.023,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.562 4.508 L 3.536 4.508 C 4.028 3.426 3.924 0.361 3.924 0.232 C 3.924 0.103 3.795 0 3.666 0 C 3.536 0 3.433 0.129 3.433 0.258 C 3.459 1.133 3.459 3.606 3.071 4.353 C 3.071 4.353 3.071 4.353 3.071 4.379 C 2.605 4.25 2.217 4.173 1.907 4.147 C 1.933 4.121 1.933 4.121 1.959 4.096 C 2.476 3.065 2.295 0.464 2.269 0.335 C 2.269 0.206 2.14 0.103 2.01 0.103 C 1.881 0.103 1.778 0.232 1.778 0.361 C 1.829 1.082 1.881 3.117 1.519 3.864 C 1.467 3.941 1.493 4.018 1.545 4.096 C 1.235 4.096 1.002 4.096 0.795 4.147 C 1.105 3.503 1.028 1.546 1.002 1.314 C 1.002 1.185 0.873 1.056 0.743 1.082 C 0.614 1.082 0.511 1.211 0.511 1.339 C 0.536 2.138 0.536 3.58 0.33 3.967 C 0.278 4.07 0.304 4.199 0.407 4.276 C 0.174 4.379 0.071 4.482 0.045 4.534 C -0.032 4.637 -0.007 4.791 0.097 4.868 C 0.2 4.946 0.355 4.946 0.433 4.843 C 0.433 4.843 1.028 4.224 3.407 5.023 C 3.433 5.023 3.459 5.023 3.485 5.023 C 3.588 5.023 3.691 4.946 3.717 4.868 C 3.743 4.688 3.691 4.559 3.562 4.508 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 32.914,
    height: 32.480,
    viewBox: "0 0 32.914 32.480",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.734,
      top: 38.53,
      width: 32.914,
      height: 32.48,
      color: "rgb(20,30,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.578 3.341 C 6.578 3.341 8.647 9.678 11.052 10.528 C 13.457 11.378 24.112 9.497 24.112 8.312 C 24.112 7.128 21.37 0.611 21.37 0.611 C 21.37 0.611 24.603 -0.549 25.12 0.327 C 25.637 1.177 24.37 5.221 30.396 9.162 C 36.421 13.104 29.568 23.201 30.887 29.203 C 32.206 35.204 11.13 30.851 7.173 32.216 C 3.216 33.582 2.001 27.709 0.268 24.643 C -1.438 21.552 5.57 15.164 5.208 13.464 C 4.871 11.764 3.992 7.128 2.466 5.943 C 0.915 4.706 5.906 1.796 6.578 3.341 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.511,
    height: 20.355,
    viewBox: "0 0 15.511 20.355",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.379,
      top: 37.033,
      width: 15.511,
      height: 20.355,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.511 3.293 C 15.511 3.293 11.27 4.168 10.572 8.444 C 9.667 13.879 13.287 17.949 11.684 18.104 C 10.08 18.258 8.037 12.36 8.037 12.36 C 8.037 12.36 11.684 18.155 10.21 19.263 C 7.908 20.989 5.736 13.184 5.736 13.184 C 5.736 13.184 10.158 19.675 7.908 20.267 C 4.029 21.272 3.305 13.338 3.305 13.338 C 3.305 13.338 5.813 20.525 3.822 19.881 C 1.831 19.237 -2.074 11.123 1.365 4.993 C 4.831 -1.138 14.813 -1.524 15.511 3.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.502,
    height: 6.237,
    viewBox: "0 0 2.502 6.237",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.623,
      top: 48.153,
      width: 2.502,
      height: 6.237,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.25 6.237 C 2.198 6.237 2.146 6.211 2.121 6.185 C 0.181 4.846 0 0.467 0 0.261 C 0 0.132 0.103 0.003 0.233 0.003 C 0.362 -0.022 0.491 0.106 0.491 0.235 C 0.491 0.287 0.647 4.563 2.405 5.773 C 2.508 5.851 2.534 6.005 2.457 6.108 C 2.405 6.185 2.327 6.237 2.25 6.237 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.988,
    height: 7.084,
    viewBox: "0 0 2.988 7.084",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.804,
      top: 48.594,
      width: 2.988,
      height: 7.084,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.767 7.084 C 2.715 7.084 2.664 7.058 2.612 7.032 C 0.103 4.971 0 0.464 0 0.258 C 0 0.129 0.103 0 0.233 0 C 0.362 0 0.465 0.103 0.465 0.232 C 0.465 0.283 0.569 4.74 2.896 6.646 C 3 6.723 3.026 6.878 2.922 6.981 C 2.896 7.058 2.845 7.084 2.767 7.084 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.796,
    height: 6.259,
    viewBox: "0 0 1.796 6.259",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.026,
      top: 48.697,
      width: 1.796,
      height: 6.259,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.563 6.259 C 1.512 6.259 1.434 6.234 1.382 6.182 C -0.221 4.585 0.012 0.412 0.012 0.232 C 0.012 0.103 0.141 0 0.27 0 C 0.4 0 0.503 0.129 0.503 0.258 C 0.503 0.309 0.27 4.379 1.719 5.847 C 1.822 5.95 1.822 6.105 1.719 6.182 C 1.693 6.234 1.615 6.259 1.563 6.259 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.210,
    height: 21.286,
    viewBox: "0 0 24.210 21.286",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.343,
      top: 5.671,
      width: 24.21,
      height: 21.286,
      color: "rgb(160,210,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.21 6.759 C 24.21 6.759 20.512 -1.33 12.262 0.19 C 4.013 1.71 -3.047 7.737 1.349 21.286 C 1.349 21.286 2.047 20.436 3.237 20.436 C 3.237 20.436 2.332 11.627 11.538 7.712 C 19.607 4.312 24.21 6.759 24.21 6.759 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.017,
    height: 10.128,
    viewBox: "0 0 10.017 10.128",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.706,
      top: 7.994,
      width: 10.017,
      height: 10.128,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.237 10.128 C 0.082 10.128 -0.022 10 0.004 9.871 C 0.133 6.007 1.245 3.199 3.34 1.576 C 6.159 -0.613 9.702 0.108 9.831 0.134 C 9.96 0.16 10.038 0.289 10.012 0.417 C 9.986 0.546 9.857 0.623 9.727 0.598 C 9.702 0.598 6.262 -0.098 3.624 1.963 C 1.659 3.508 0.599 6.161 0.469 9.896 C 0.469 10.025 0.366 10.128 0.237 10.128 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.278,
    height: 10.539,
    viewBox: "0 0 4.278 10.539",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.263,
      top: 12.812,
      width: 4.278,
      height: 10.539,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.395 10.539 C 0.266 10.539 0.162 10.436 0.162 10.333 C -0.924 0.699 3.783 0.03 3.99 0.004 C 4.119 -0.022 4.248 0.081 4.274 0.21 C 4.3 0.339 4.197 0.468 4.067 0.493 C 4.016 0.493 -0.355 1.163 0.68 10.282 C 0.706 10.41 0.602 10.539 0.473 10.539 C 0.395 10.513 0.395 10.539 0.395 10.539 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.079,
    height: 3.447,
    viewBox: "0 0 8.079 3.447",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.733,
      top: 1.769,
      width: 8.079,
      height: 3.447,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.243 3.447 C 0.217 3.447 0.166 3.447 0.14 3.422 C 0.011 3.37 -0.041 3.216 0.036 3.087 C 0.088 2.984 1.2 0.743 3.45 0.15 C 4.846 -0.236 6.372 0.125 7.976 1.206 C 8.079 1.284 8.105 1.438 8.053 1.541 C 7.976 1.644 7.82 1.67 7.717 1.619 C 6.243 0.614 4.872 0.305 3.605 0.64 C 1.562 1.181 0.528 3.293 0.502 3.319 C 0.424 3.396 0.347 3.447 0.243 3.447 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.513,
    height: 4.586,
    viewBox: "0 0 9.513 4.586",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.71,
      top: 4.212,
      width: 9.513,
      height: 4.586,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.248 4.586 C 9.145 4.586 9.041 4.508 9.016 4.405 C 9.016 4.38 8.317 2.113 6.145 1.057 C 4.568 0.284 2.602 0.31 0.327 1.16 C 0.197 1.211 0.068 1.134 0.016 1.005 C -0.036 0.876 0.042 0.748 0.171 0.696 C 2.602 -0.205 4.697 -0.231 6.404 0.619 C 8.757 1.778 9.481 4.173 9.507 4.276 C 9.533 4.405 9.481 4.534 9.352 4.586 C 9.274 4.586 9.274 4.586 9.248 4.586 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.524,
    height: 5.718,
    viewBox: "0 0 11.524 5.718",
    fill: "none",
    style: {
      position: "absolute",
      left: 70.837,
      top: 58.486,
      width: 11.524,
      height: 5.718,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.395 5.718 C 3.895 5.718 2.163 5.409 0.171 4.765 C 0.042 4.714 -0.036 4.585 0.016 4.456 C 0.068 4.327 0.197 4.25 0.327 4.302 C 4.335 5.59 7.283 5.538 9.145 4.173 C 11.084 2.73 11.059 0.283 11.059 0.258 C 11.059 0.129 11.162 0 11.291 0 C 11.421 0 11.524 0.103 11.524 0.232 C 11.524 0.335 11.55 2.962 9.403 4.559 C 8.395 5.332 7.05 5.718 5.395 5.718 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.689,
    height: 4.126,
    viewBox: "0 0 7.689 4.126",
    fill: "none",
    style: {
      position: "absolute",
      left: 56.34,
      top: 59.047,
      width: 7.689,
      height: 4.126,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.263 4.126 C 4.324 4.126 0.651 3.663 0.005 0.288 C -0.021 0.159 0.057 0.031 0.212 0.005 C 0.341 -0.021 0.47 0.056 0.496 0.211 C 1.298 4.358 7.349 3.611 7.401 3.585 C 7.53 3.56 7.66 3.663 7.685 3.791 C 7.711 3.92 7.608 4.049 7.479 4.075 C 7.453 4.075 6.987 4.126 6.263 4.126 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.631,
    height: 12.441,
    viewBox: "0 0 8.631 12.441",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.326,
      top: 49.754,
      width: 8.631,
      height: 12.441,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.649 12.441 C 1.227 12.441 0.167 11.797 0.115 11.745 C 0.011 11.668 -0.04 11.513 0.037 11.41 C 0.115 11.307 0.27 11.256 0.374 11.333 C 0.374 11.333 1.33 11.9 2.572 11.951 C 4.227 12.003 5.649 11.075 6.787 9.272 C 9.554 4.867 7.227 0.411 7.201 0.36 C 7.149 0.231 7.175 0.102 7.304 0.025 C 7.433 -0.027 7.563 -0.001 7.64 0.128 C 7.666 0.179 10.123 4.893 7.201 9.53 C 6.244 11.075 5.054 12.003 3.684 12.312 C 3.322 12.389 2.96 12.441 2.649 12.441 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.000,
    height: 4.076,
    viewBox: "0 0 11.000 4.076",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.945,
      top: 40.732,
      width: 11,
      height: 4.076,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.53 4.076 C 6.961 4.076 6.237 3.586 5.28 2.943 C 3.806 1.964 1.996 0.727 0.289 1.062 C 0.16 1.088 0.031 1.011 0.005 0.882 C -0.021 0.753 0.057 0.624 0.186 0.599 C 2.074 0.212 3.987 1.526 5.539 2.556 C 6.418 3.149 7.298 3.741 7.66 3.586 C 7.815 3.509 7.892 3.2 7.918 2.968 C 8.022 1.861 8.384 1.062 9.03 0.547 C 9.832 -0.097 10.737 0.006 10.789 0.006 C 10.918 0.032 11.021 0.135 10.996 0.289 C 10.97 0.418 10.866 0.521 10.711 0.495 C 10.711 0.495 9.961 0.418 9.315 0.933 C 8.797 1.346 8.487 2.041 8.384 2.994 C 8.332 3.535 8.151 3.87 7.866 3.999 C 7.763 4.05 7.634 4.076 7.53 4.076 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.389,
    height: 1.230,
    viewBox: "0 0 8.389 1.230",
    fill: "none",
    style: {
      position: "absolute",
      left: 64.099,
      top: 39.843,
      width: 8.389,
      height: 1.23,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.15 1.23 C 8.124 1.23 8.098 1.23 8.072 1.204 C 4.995 0.097 0.34 0.638 0.288 0.638 C 0.159 0.663 0.03 0.56 0.004 0.432 C -0.022 0.303 0.082 0.174 0.211 0.148 C 0.418 0.123 5.047 -0.418 8.228 0.741 C 8.357 0.792 8.409 0.921 8.383 1.05 C 8.357 1.179 8.253 1.23 8.15 1.23 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26.765,
    height: 1.803,
    viewBox: "0 0 26.765 1.803",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.192,
      top: 66.342,
      width: 26.765,
      height: 1.803,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.775 1.803 C 12.258 1.803 11.766 1.803 11.301 1.777 C 5.767 1.494 0.31 1.777 0.259 1.777 C 0.129 1.777 0 1.674 0 1.546 C 0 1.417 0.103 1.288 0.233 1.288 C 0.284 1.288 5.767 1.005 11.327 1.288 C 15.827 1.52 22.757 0.515 25.369 0.155 C 26.171 0.052 26.429 0 26.533 0 C 26.662 0 26.765 0.103 26.765 0.232 C 26.765 0.361 26.662 0.464 26.533 0.464 C 26.455 0.464 25.99 0.541 25.447 0.618 C 23.093 0.979 17.223 1.803 12.775 1.803 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 27.778,
    height: 2.020,
    viewBox: "0 0 27.778 2.020",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.352,
      top: 62.853,
      width: 27.778,
      height: 2.02,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.374 2.02 C 3.624 2.02 0.263 1.557 0.211 1.557 C 0.082 1.531 -0.022 1.402 0.004 1.273 C 0.03 1.145 0.159 1.042 0.288 1.067 C 0.366 1.067 8.486 2.201 13.555 0.939 C 18.701 -0.349 27.468 0.063 27.545 0.063 C 27.675 0.063 27.778 0.192 27.778 0.32 C 27.778 0.449 27.649 0.552 27.519 0.552 C 27.442 0.552 18.727 0.14 13.658 1.402 C 11.77 1.866 9.495 2.02 7.374 2.02 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 29.234,
    height: 2.930,
    viewBox: "0 0 29.234 2.930",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.194,
      top: 56.74,
      width: 29.234,
      height: 2.93,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.239 2.93 C 0.136 2.93 0.032 2.853 0.006 2.75 C -0.02 2.621 0.032 2.493 0.187 2.441 C 0.265 2.415 2.308 1.849 9.264 0.999 C 12.626 0.586 16.79 0.561 20.436 0.561 C 24.367 0.535 27.78 0.535 28.866 0.02 C 28.996 -0.032 29.125 0.02 29.203 0.149 C 29.28 0.277 29.203 0.406 29.073 0.483 C 27.91 1.024 24.6 1.05 20.436 1.076 C 16.79 1.102 12.652 1.102 9.316 1.514 C 2.385 2.364 0.317 2.93 0.317 2.93 C 0.291 2.93 0.265 2.93 0.239 2.93 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26.774,
    height: 2.219,
    viewBox: "0 0 26.774 2.219",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.368,
      top: 52.3,
      width: 26.774,
      height: 2.219,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.238 2.219 C 0.134 2.219 0.031 2.142 0.005 2.013 C -0.021 1.884 0.057 1.756 0.212 1.73 C 0.315 1.704 9.651 0.004 16.788 0.159 C 23.848 0.287 26.486 0.03 26.512 0.004 C 26.641 -0.022 26.77 0.081 26.77 0.21 C 26.796 0.339 26.693 0.468 26.563 0.468 C 26.538 0.468 23.874 0.751 16.762 0.622 C 9.703 0.468 0.393 2.168 0.289 2.193 C 0.264 2.219 0.238 2.219 0.238 2.219 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.240,
    height: 1.229,
    viewBox: "0 0 5.240 1.229",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.357,
      top: 48.859,
      width: 5.24,
      height: 1.229,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.249 1.229 C 0.146 1.229 0.042 1.152 0.016 1.049 C -0.036 0.92 0.042 0.792 0.171 0.74 C 0.301 0.714 3.119 -0.136 5.007 0.019 C 5.137 0.019 5.24 0.148 5.24 0.276 C 5.24 0.405 5.111 0.508 4.981 0.508 C 3.171 0.379 0.352 1.204 0.327 1.204 C 0.275 1.229 0.249 1.229 0.249 1.229 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.224,
    height: 1.080,
    viewBox: "0 0 4.224 1.080",
    fill: "none",
    style: {
      position: "absolute",
      left: 28.359,
      top: 45.608,
      width: 4.224,
      height: 1.08,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.238 1.054 C 0.134 1.054 0.031 0.977 0.005 0.874 C -0.021 0.745 0.057 0.616 0.186 0.591 C 0.496 0.513 3.134 -0.131 4.013 0.024 C 4.143 0.05 4.246 0.178 4.22 0.307 C 4.194 0.436 4.065 0.539 3.936 0.513 C 3.263 0.41 1.091 0.874 0.289 1.08 C 0.264 1.054 0.238 1.054 0.238 1.054 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.082,
    height: 0.558,
    viewBox: "0 0 3.082 0.558",
    fill: "none",
    style: {
      position: "absolute",
      left: 47.165,
      top: 42.112,
      width: 3.082,
      height: 0.558,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.819 0.558 C 2.793 0.558 2.793 0.558 2.767 0.558 C 2.095 0.429 0.259 0.558 0.259 0.558 C 0.129 0.558 0 0.455 0 0.326 C 0 0.197 0.103 0.069 0.233 0.069 C 0.31 0.069 2.146 -0.086 2.896 0.069 C 3.026 0.094 3.103 0.223 3.077 0.352 C 3.052 0.455 2.948 0.558 2.819 0.558 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.640,
    height: 1.056,
    viewBox: "0 0 6.640 1.056",
    fill: "none",
    style: {
      position: "absolute",
      left: 47.869,
      top: 46.894,
      width: 6.64,
      height: 1.056,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.253 1.056 C 0.149 1.056 0.072 1.005 0.02 0.902 C -0.032 0.773 0.02 0.644 0.149 0.592 C 1.623 0 6.226 0 6.407 0 C 6.537 0 6.64 0.103 6.64 0.232 C 6.64 0.361 6.537 0.464 6.407 0.464 C 6.356 0.464 1.701 0.464 0.33 1.03 C 0.304 1.056 0.278 1.056 0.253 1.056 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.931,
    height: 9.057,
    viewBox: "0 0 10.931 9.057",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.95,
      top: 54.76,
      width: 10.931,
      height: 9.057,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.716 9.057 C 5.681 9.057 4.466 8.877 2.992 8.336 C -1.482 6.713 0.38 0.222 0.406 0.171 C 0.432 0.042 0.587 -0.035 0.716 0.016 C 0.846 0.042 0.923 0.196 0.871 0.325 C 0.846 0.377 -0.887 6.43 3.173 7.898 C 6.302 9.032 8.242 8.491 9.535 8.13 C 10 8.001 10.362 7.898 10.698 7.898 C 10.828 7.898 10.931 8.001 10.931 8.13 C 10.931 8.259 10.828 8.362 10.698 8.362 C 10.44 8.362 10.104 8.465 9.664 8.594 C 8.94 8.774 7.983 9.057 6.716 9.057 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21.550,
    height: 18.148,
    viewBox: "0 0 21.550 18.148",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.75,
      top: 7.006,
      width: 21.55,
      height: 18.148,
      color: "rgb(20,30,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.882 18.148 C 1.882 18.148 -0.627 10.215 0.149 10.137 C 0.951 10.06 2.657 10.859 3.175 10.498 C 3.666 10.137 1.08 5.861 2.373 5.501 C 3.666 5.14 6.045 7.355 6.821 6.943 C 7.623 6.505 6.097 1.792 7.467 1.663 C 9.614 1.431 10.777 4.316 11.915 4.033 C 13.053 3.749 12.846 -0.269 14.424 0.014 C 16.001 0.298 16.803 3.595 17.294 3.311 C 17.786 3.028 17.863 0.89 18.742 1.096 C 19.596 1.302 21.975 5.037 21.484 5.037 C 20.966 4.986 7.26 2.564 1.882 18.148 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.058,
      top: 0.417,
      width: 59.582,
      height: 36.481,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 59.582,
    height: 36.481,
    viewBox: "0 0 59.582 36.481",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 59.582,
      height: 36.481,
      color: "rgb(180,165,250)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.043 18.825 C 0.043 18.825 -1.405 28.458 12.456 28.046 C 24.455 27.685 24.3 27.943 25.257 32.708 C 25.981 36.289 28.464 37.706 30.067 35.258 C 30.326 34.846 30.3 30.055 36.015 29.54 C 40.851 29.128 52.747 32.992 56.858 27.016 C 60.97 21.04 63.763 7.053 39.377 1.566 C 15.818 -3.663 -0.422 4.735 0.043 18.825 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.646,
    height: 4.384,
    viewBox: "0 0 8.646 4.384",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.277,
      top: 5.554,
      width: 8.646,
      height: 4.384,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.41 4.384 C 8.332 4.384 8.28 4.358 8.229 4.307 C 6.03 1.782 0.238 0.494 0.186 0.469 C 0.057 0.443 -0.021 0.314 0.005 0.185 C 0.031 0.056 0.16 -0.021 0.289 0.005 C 0.522 0.056 6.289 1.344 8.591 3.998 C 8.668 4.101 8.668 4.255 8.565 4.332 C 8.539 4.384 8.487 4.384 8.41 4.384 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.827,
    height: 2.426,
    viewBox: "0 0 1.827 2.426",
    fill: "none",
    style: {
      position: "absolute",
      left: 53.724,
      top: 12.071,
      width: 1.827,
      height: 2.426,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.557 2.426 C 1.505 2.426 1.453 2.4 1.427 2.375 C 0.367 1.679 0.031 0.34 0.005 0.288 C -0.021 0.159 0.057 0.031 0.186 0.005 C 0.315 -0.021 0.445 0.056 0.496 0.185 C 0.496 0.185 0.807 1.396 1.712 1.988 C 1.815 2.066 1.867 2.22 1.789 2.323 C 1.738 2.4 1.66 2.426 1.557 2.426 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.304,
    height: 5.992,
    viewBox: "0 0 9.304 5.992",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.738,
      top: 4.924,
      width: 9.304,
      height: 5.992,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.236 5.992 C 0.185 5.992 0.107 5.967 0.081 5.941 C -0.022 5.838 -0.022 5.683 0.055 5.606 C 3.003 2.335 8.744 0.094 8.977 0.016 C 9.106 -0.035 9.236 0.042 9.287 0.145 C 9.339 0.274 9.262 0.403 9.158 0.454 C 9.106 0.48 3.288 2.747 0.417 5.915 C 0.366 5.967 0.288 5.992 0.236 5.992 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 41,
      top: 4,
      width: 51,
      height: 29,
      fontFamily: "SVN-Cookies, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 7,
      textAlign: "center",
      lineHeight: 1.1978906393051147,
      color: "rgb(255,255,255)",
      whiteSpace: "pre-wrap"
    }
  }, props.text1 ?? "Ơn giời \ncó bạn bên cạnh")));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 150,
      height: 120,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 0,
      width: 123,
      height: 120,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.022,
    height: 6.297,
    viewBox: "0 0 6.022 6.297",
    fill: "none",
    style: {
      position: "absolute",
      left: 108.173,
      top: 72.806,
      width: 6.022,
      height: 6.297,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.71 2.685 L 4.414 2.685 L 5.772 1.759 C 5.926 1.667 5.957 1.451 5.864 1.296 C 5.772 1.142 5.555 1.111 5.401 1.204 L 3.58 2.469 L 3.58 0.34 C 3.58 0.154 3.426 0 3.241 0 C 3.056 0 2.901 0.154 2.901 0.34 L 2.901 2.222 L 1.759 1.019 C 1.636 0.895 1.42 0.864 1.296 1.019 C 1.173 1.142 1.173 1.358 1.296 1.482 L 2.469 2.716 L 0.339 2.747 C 0.154 2.747 0 2.902 0 3.087 C 0 3.272 0.154 3.426 0.339 3.426 L 2.284 3.395 L 0.772 4.445 C 0.617 4.538 0.586 4.754 0.679 4.908 C 0.741 5.001 0.833 5.062 0.957 5.062 C 1.019 5.062 1.08 5.031 1.142 5.001 L 2.87 3.797 L 2.87 5.957 C 2.87 6.143 3.025 6.297 3.21 6.297 C 3.395 6.297 3.549 6.143 3.549 5.957 L 3.549 3.92 L 4.753 5.217 C 4.815 5.278 4.907 5.309 5 5.309 C 5.093 5.309 5.154 5.278 5.216 5.217 C 5.339 5.093 5.339 4.877 5.216 4.754 L 3.951 3.426 L 5.679 3.395 C 5.864 3.395 6.018 3.241 6.018 3.056 C 6.049 2.809 5.895 2.685 5.71 2.685 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.022,
    height: 6.297,
    viewBox: "0 0 6.022 6.297",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.798,
      top: 13.108,
      width: 6.022,
      height: 6.297,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.71 2.685 L 4.414 2.685 L 5.772 1.759 C 5.926 1.667 5.957 1.451 5.864 1.296 C 5.772 1.142 5.555 1.111 5.401 1.204 L 3.58 2.469 L 3.58 0.34 C 3.58 0.154 3.426 0 3.241 0 C 3.056 0 2.901 0.154 2.901 0.34 L 2.901 2.222 L 1.759 1.019 C 1.636 0.895 1.42 0.864 1.296 1.019 C 1.173 1.142 1.173 1.358 1.296 1.482 L 2.469 2.716 L 0.34 2.747 C 0.154 2.747 0 2.902 0 3.087 C 0 3.272 0.154 3.426 0.34 3.426 L 2.284 3.395 L 0.772 4.445 C 0.617 4.538 0.586 4.754 0.679 4.908 C 0.741 5.001 0.833 5.062 0.957 5.062 C 1.019 5.062 1.08 5.031 1.142 5.001 L 2.87 3.797 L 2.87 5.957 C 2.87 6.143 3.025 6.297 3.21 6.297 C 3.395 6.297 3.549 6.143 3.549 5.957 L 3.549 3.92 L 4.753 5.217 C 4.815 5.278 4.907 5.309 5 5.309 C 5.093 5.309 5.154 5.278 5.216 5.217 C 5.339 5.093 5.339 4.877 5.216 4.754 L 3.951 3.426 L 5.679 3.395 C 5.864 3.395 6.018 3.241 6.018 3.056 C 6.049 2.84 5.895 2.685 5.71 2.685 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.978,
      top: 11.719,
      width: 16.511,
      height: 15.619,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.800,
    height: 14.941,
    viewBox: "0 0 15.800 14.941",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.341,
      top: 0.338,
      width: 15.8,
      height: 14.941,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.646 14.941 L 15.8 4.909 C 15.8 4.909 9.226 -0.091 8.578 0.001 C 7.93 0.125 9.164 5.341 9.164 5.341 C 9.164 5.341 3.671 3.181 3.424 3.829 C 3.177 4.477 5.584 9.2 5.584 9.2 C 5.584 9.2 -0.465 6.946 0.029 8.119 C 0.553 9.292 5.646 14.941 5.646 14.941 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.511,
    height: 15.619,
    viewBox: "0 0 16.511 15.619",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.511,
      height: 15.619,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.987 15.619 C 5.894 15.619 5.802 15.588 5.74 15.496 C 5.215 14.909 0.586 9.754 0.061 8.581 C -0.063 8.334 0.03 8.149 0.092 8.056 C 0.277 7.779 0.647 7.779 0.802 7.779 C 1.789 7.779 4.073 8.519 5.277 8.921 C 4.382 7.1 3.24 4.63 3.487 4.044 C 3.579 3.828 3.795 3.704 4.135 3.704 C 5.153 3.704 7.869 4.692 9.073 5.155 C 8.703 3.519 8.178 0.833 8.579 0.216 C 8.641 0.093 8.764 0.031 8.888 0 C 8.919 0 8.95 0 8.98 0 C 9.783 0 14.413 3.488 16.388 4.97 C 16.45 5.031 16.511 5.124 16.511 5.217 C 16.511 5.309 16.48 5.402 16.419 5.464 L 6.234 15.526 C 6.172 15.588 6.079 15.619 5.987 15.619 Z M 0.74 8.427 C 1.357 9.538 4.536 13.15 5.987 14.786 L 15.616 5.248 C 12.869 3.179 9.876 1.05 9.073 0.71 C 8.98 1.358 9.382 3.642 9.845 5.618 C 9.876 5.741 9.845 5.865 9.752 5.957 C 9.659 6.05 9.536 6.05 9.413 6.019 C 8.271 5.556 5.092 4.414 4.135 4.414 C 4.135 4.414 4.135 4.414 4.104 4.414 C 4.166 5.031 5.246 7.408 6.264 9.415 C 6.326 9.538 6.295 9.692 6.203 9.785 C 6.11 9.878 5.956 9.939 5.832 9.878 C 5.802 9.878 2.067 8.489 0.802 8.489 C 0.771 8.427 0.771 8.427 0.74 8.427 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 4.599,
    height: 4.599,
    viewBox: "0 0 4.599 4.599",
    fill: "none",
    style: {
      position: "absolute",
      left: 53.174,
      top: 8.879,
      width: 4.599,
      height: 4.599,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.284 4.599 C 1.019 4.599 0 3.55 0 2.284 C 0 1.019 1.049 0 2.284 0 C 2.901 0 3.488 0.247 3.92 0.679 C 4.352 1.111 4.599 1.698 4.599 2.315 C 4.599 3.55 3.549 4.599 2.284 4.599 Z M 2.315 0.679 C 1.42 0.679 0.679 1.42 0.679 2.315 C 0.679 3.21 1.389 3.951 2.315 3.951 L 2.315 4.291 L 2.315 3.951 C 3.21 3.951 3.951 3.21 3.951 2.315 C 3.951 1.883 3.796 1.482 3.488 1.173 C 3.148 0.833 2.747 0.679 2.315 0.679 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.599,
    height: 4.599,
    viewBox: "0 0 4.599 4.599",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.397,
      top: 80.832,
      width: 4.599,
      height: 4.599,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.284 4.599 C 1.019 4.599 0 3.55 0 2.284 C 0 1.019 1.049 0 2.284 0 C 2.901 0 3.488 0.247 3.92 0.679 C 4.352 1.111 4.599 1.698 4.599 2.315 C 4.568 3.581 3.549 4.599 2.284 4.599 Z M 2.284 0.679 C 1.389 0.679 0.648 1.42 0.648 2.315 C 0.648 3.21 1.358 3.951 2.284 3.951 L 2.284 4.291 L 2.284 3.951 C 3.179 3.951 3.92 3.21 3.92 2.315 C 3.92 1.883 3.765 1.482 3.457 1.173 C 3.148 0.864 2.716 0.679 2.284 0.679 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.599,
    height: 4.599,
    viewBox: "0 0 4.599 4.599",
    fill: "none",
    style: {
      position: "absolute",
      left: 86.877,
      top: 112.008,
      width: 4.599,
      height: 4.599,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.284 4.599 C 1.019 4.599 0 3.55 0 2.284 C 0 1.019 1.049 0 2.284 0 C 2.901 0 3.488 0.247 3.92 0.679 C 4.352 1.111 4.599 1.698 4.599 2.315 C 4.568 3.581 3.549 4.599 2.284 4.599 Z M 2.284 0.679 C 1.389 0.679 0.648 1.42 0.648 2.315 C 0.648 3.21 1.358 3.951 2.284 3.951 L 2.284 4.291 L 2.284 3.951 C 3.179 3.951 3.92 3.21 3.92 2.315 C 3.92 1.883 3.765 1.482 3.457 1.173 C 3.148 0.833 2.747 0.679 2.284 0.679 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.366,
    height: 7.501,
    viewBox: "0 0 7.366 7.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.989,
      top: 107.378,
      width: 7.366,
      height: 7.501,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.623 7.501 C 3.376 7.501 3.16 7.501 2.512 4.939 C 0.321 4.507 0.136 4.26 0.074 4.167 C 0.012 4.075 -0.019 3.92 0.012 3.828 C 0.043 3.673 0.136 3.365 2.636 2.346 C 3.531 0 3.839 0 4.024 0 C 4.117 0 4.271 0.062 4.333 0.154 C 4.487 0.37 4.642 0.926 4.858 1.821 C 4.919 2.099 5.012 2.439 5.043 2.593 C 5.166 2.655 5.475 2.747 5.691 2.84 C 6.987 3.303 7.296 3.457 7.358 3.766 C 7.389 3.889 7.327 4.044 7.234 4.136 C 6.987 4.383 5.722 4.815 5.074 5.062 C 4.055 7.47 3.839 7.47 3.623 7.501 Z M 0.907 3.858 C 1.339 3.982 2.142 4.167 2.821 4.291 C 2.944 4.321 3.037 4.414 3.068 4.538 C 3.253 5.248 3.469 6.081 3.654 6.544 C 3.901 6.112 4.271 5.34 4.549 4.661 C 4.58 4.568 4.642 4.507 4.734 4.476 C 5.321 4.26 6 4.013 6.401 3.828 C 6.123 3.704 5.722 3.55 5.444 3.457 C 4.703 3.21 4.58 3.148 4.487 3.025 C 4.395 2.902 4.364 2.716 4.179 1.976 C 4.117 1.698 3.994 1.266 3.901 0.957 C 3.685 1.358 3.376 2.068 3.129 2.685 C 3.098 2.778 3.037 2.84 2.944 2.871 C 2.234 3.21 1.37 3.612 0.907 3.858 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.397,
    height: 7.501,
    viewBox: "0 0 7.397 7.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 114.346,
      top: 28.048,
      width: 7.397,
      height: 7.501,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.623 7.501 C 3.376 7.501 3.16 7.501 2.512 4.939 C 0.321 4.507 0.136 4.26 0.074 4.167 C 0.012 4.075 -0.019 3.92 0.012 3.828 C 0.043 3.673 0.136 3.365 2.636 2.346 C 3.531 0 3.839 0 4.024 0 C 4.117 0 4.271 0.062 4.333 0.154 C 4.487 0.37 4.642 0.926 4.858 1.821 C 4.919 2.099 5.012 2.439 5.074 2.593 C 5.197 2.655 5.506 2.747 5.722 2.84 C 7.018 3.303 7.327 3.457 7.389 3.766 C 7.419 3.889 7.358 4.044 7.265 4.136 C 7.018 4.383 5.753 4.815 5.105 5.062 C 4.086 7.47 3.839 7.47 3.623 7.501 C 3.623 7.501 3.654 7.501 3.623 7.501 Z M 0.907 3.858 C 1.339 3.982 2.142 4.167 2.821 4.291 C 2.944 4.321 3.037 4.414 3.068 4.538 C 3.253 5.248 3.469 6.081 3.654 6.544 C 3.901 6.112 4.271 5.34 4.549 4.661 C 4.58 4.568 4.642 4.507 4.734 4.476 C 5.321 4.26 6 4.013 6.401 3.828 C 6.123 3.704 5.722 3.55 5.444 3.457 C 4.703 3.179 4.58 3.149 4.487 3.025 C 4.395 2.902 4.364 2.716 4.179 1.976 C 4.117 1.698 3.994 1.266 3.901 0.957 C 3.685 1.358 3.376 2.068 3.129 2.716 C 3.098 2.809 3.037 2.871 2.944 2.902 C 2.234 3.21 1.37 3.612 0.907 3.858 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.928,0.372,-0.371,0.928,43.891,35.232)",
      transformOrigin: "0 0",
      width: 69.174,
      height: 67.401,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 68.424,
    height: 63.101,
    viewBox: "0 0 68.424 63.101",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,1,0.749,0)",
      transformOrigin: "0 0",
      width: 68.424,
      height: 63.101,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 36.685 C 0 36.685 20.418 24.686 20.999 20.428 C 21.58 16.17 16.548 0.396 21.676 0.009 C 26.902 -0.378 29.902 11.912 31.256 14.525 C 33.385 18.783 51.094 8.525 55.739 11.428 C 63.384 16.267 54.384 20.912 54.384 20.912 C 54.384 20.912 59.319 17.428 63.577 22.073 C 67.835 26.718 61.352 30.299 61.352 30.299 C 61.352 30.299 68.125 28.363 68.416 34.073 C 68.706 38.427 61.448 39.976 61.448 39.976 C 61.448 39.976 64.994 37.95 63.736 45.692 C 62.671 52.176 42.675 51.104 37.546 53.137 C 32.418 55.072 20.225 64.556 15.87 62.911 C 11.516 61.362 0 36.685 0 36.685 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.460,
    height: 3.202,
    viewBox: "0 0 7.460 3.202",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,1,49.520,19.548)",
      transformOrigin: "0 0",
      width: 7.46,
      height: 3.202,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.484 3.202 C 0.29 3.202 0 3.009 0 2.815 C 0 2.525 0.194 2.331 0.387 2.234 C 0.387 2.234 4.451 1.751 6.677 0.106 C 6.871 -0.088 7.161 0.009 7.354 0.202 C 7.548 0.396 7.451 0.686 7.258 0.88 C 4.838 2.718 0.774 3.202 0.484 3.202 C 0.484 3.202 0.581 3.202 0.484 3.202 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.670,
    height: 2.671,
    viewBox: "0 0 8.670 2.671",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,1,53.585,29.273)",
      transformOrigin: "0 0",
      width: 8.67,
      height: 2.671,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.484 2.671 C 0.194 2.671 0 2.477 0 2.187 C 0 1.896 0.194 1.703 0.484 1.703 C 0.581 1.703 5.516 1.413 7.935 0.058 C 8.128 -0.039 8.419 -0.039 8.612 0.251 C 8.709 0.445 8.709 0.735 8.419 0.929 C 5.806 2.477 0.774 2.671 0.484 2.671 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.876,
    height: 3.812,
    viewBox: "0 0 10.876 3.812",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,1,53.552,38.848)",
      transformOrigin: "0 0",
      width: 10.876,
      height: 3.812,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.484 3.812 C 0.194 3.812 0 3.619 0 3.328 C 0 3.038 0.194 2.844 0.484 2.844 C 0.581 2.844 7.258 2.457 10.064 0.135 C 10.257 -0.059 10.548 -0.059 10.741 0.232 C 10.935 0.425 10.935 0.715 10.644 0.909 C 7.645 3.425 0.774 3.812 0.484 3.812 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.458,
    height: 6.193,
    viewBox: "0 0 3.458 6.193",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,1,20.200,2.525)",
      transformOrigin: "0 0",
      width: 3.458,
      height: 6.193,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.871 6.193 C 0.581 6.193 0.387 6.193 0.387 6.097 C 0.097 6 0 5.806 0 5.516 C 0.097 5.226 0.29 5.129 0.581 5.129 C 0.581 5.129 1.258 5.323 1.839 4.839 C 2.322 4.355 2.806 3.29 2.322 0.581 C 2.322 0.29 2.419 0.097 2.71 0 C 3 0 3.193 0.097 3.29 0.387 C 3.677 2.903 3.387 4.645 2.516 5.516 C 1.935 6.097 1.355 6.193 0.871 6.193 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.624,
    height: 4.199,
    viewBox: "0 0 2.624 4.199",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,1,54.514,12.648)",
      transformOrigin: "0 0",
      width: 2.624,
      height: 4.199,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.973 4.199 L 1.877 4.199 C 1.586 4.102 1.49 3.812 1.586 3.619 C 2.07 1.973 0.328 0.909 0.232 0.909 C 0.038 0.812 -0.059 0.522 0.038 0.232 C 0.135 0.038 0.425 -0.059 0.715 0.038 C 1.586 0.522 3.135 1.973 2.457 3.909 C 2.457 4.006 2.264 4.199 1.973 4.199 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.808,
    height: 5.428,
    viewBox: "0 0 2.808 5.428",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,1,60.640,21.774)",
      transformOrigin: "0 0",
      width: 2.808,
      height: 5.428,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.234 5.428 L 2.138 5.428 C 1.847 5.331 1.751 5.138 1.751 4.847 C 2.234 2.525 0.202 0.88 0.202 0.88 C 0.009 0.686 -0.088 0.396 0.105 0.202 C 0.299 0.009 0.589 -0.088 0.783 0.105 C 0.88 0.202 3.299 2.138 2.718 5.041 C 2.718 5.234 2.525 5.428 2.234 5.428 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.351,
    height: 4.296,
    viewBox: "0 0 2.351 4.296",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,1,64.965,32.487)",
      transformOrigin: "0 0",
      width: 2.351,
      height: 4.296,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.683 4.296 C 1.586 4.296 1.586 4.296 1.49 4.296 C 1.199 4.199 1.102 3.909 1.199 3.715 C 1.973 1.683 0.328 0.909 0.232 0.909 C 0.038 0.812 -0.059 0.522 0.038 0.232 C 0.135 0.038 0.425 -0.059 0.715 0.038 C 1.586 0.425 2.941 1.877 2.07 4.102 C 2.07 4.199 1.877 4.296 1.683 4.296 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.033,
    height: 4.113,
    viewBox: "0 0 2.033 4.113",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.942,0.335,-0.335,0.942,61.637,42.985)",
      transformOrigin: "0 0",
      width: 2.033,
      height: 4.113,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.306 4.113 C 1.21 4.113 1.113 4.113 1.113 4.016 C 0.919 3.919 0.823 3.629 0.919 3.339 C 1.5 2.274 0.145 0.823 0.145 0.823 C -0.048 0.629 -0.048 0.339 0.145 0.145 C 0.339 -0.048 0.629 -0.048 0.823 0.145 C 0.919 0.242 2.661 2.081 1.79 3.726 C 1.694 4.016 1.5 4.113 1.306 4.113 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 30.895,
    height: 39.074,
    viewBox: "0 0 30.895 39.074",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1.000,-0.031,0.031,1.000,0,28.346)",
      transformOrigin: "0 0",
      width: 30.895,
      height: 39.074,
      color: "rgb(20,30,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.097 0 C 13.097 0 33.132 30.9 30.688 32.471 C 28.245 34.042 20.036 38.651 18.863 39.07 C 17.69 39.489 -0.194 10.998 0.002 8.484 C 0.099 5.97 13.097 0 13.097 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.994,-0.110,0.110,0.994,9.908,35.458)",
      transformOrigin: "0 0",
      width: 32.025,
      height: 27.989,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 32.025,
    height: 27.988,
    viewBox: "0 0 32.025 27.988",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,1,0.000,0.000)",
      transformOrigin: "0 0",
      width: 32.025,
      height: 27.988,
      color: "rgb(255,26,18)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.897 1.15 C 1.897 1.15 23.476 -2.044 25.605 2.214 C 27.734 6.472 27.153 19.634 27.153 19.634 C 27.153 19.634 32.959 21.763 31.895 23.892 C 30.83 26.021 2.962 29.698 1.897 27.085 C 0.833 24.279 -1.78 1.15 1.897 1.15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.937,
    height: 15.311,
    viewBox: "0 0 15.937 15.311",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,1,5.270,5.968)",
      transformOrigin: "0 0",
      width: 15.937,
      height: 15.311,
      color: "rgb(254,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.465 15.311 C 10.465 15.311 -1.727 9.214 0.208 4.279 C 2.724 -1.721 7.562 4.376 7.562 4.376 C 7.562 4.376 8.917 -1.141 13.562 0.214 C 20.336 2.246 10.465 15.311 10.465 15.311 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.953,0.304,-0.304,0.953,53.544,17.498)",
      transformOrigin: "0 0",
      width: 67.734,
      height: 13.764,
      fontFamily: "SVN-Cookies, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 0.9828906059265137,
      color: "rgb(0,0,0)"
    }
  }, props.text1 ?? "Triệu like"), /*#__PURE__*/React.createElement("svg", {
    width: 8.959,
    height: 8.987,
    viewBox: "0 0 8.959 8.987",
    fill: "none",
    style: {
      position: "absolute",
      left: 106.593,
      top: 106.066,
      width: 8.959,
      height: 8.987,
      color: "rgb(255,155,75)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.646 4.426 L 0 1.241 L 3.265 2.132 L 5.478 0 L 6.18 2.753 L 8.959 4.372 L 6.288 5.587 L 5.856 8.987 L 3.562 6.261 L 0.513 7.233 L 1.646 4.426 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 150,
      height: 120,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 0,
      width: 125.3,
      height: 122.364
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.576,
      top: 0,
      width: 69.743,
      height: 32.936,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 69.743,
    height: 32.936,
    viewBox: "0 0 69.743 32.936",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 69.743,
      height: 32.936,
      color: "rgb(20,30,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.701 10.979 C 2.701 10.979 -5.943 23.27 7.696 25.6 C 16.816 27.171 31.97 20.268 34.636 26.919 C 37.302 33.569 36.993 34.019 38.958 31.577 C 40.277 29.921 40.95 24.954 44.29 24.589 C 50.267 23.916 60.847 27.732 65.561 24.589 C 70.556 21.278 71.931 12.691 64.888 6.966 C 55.88 -0.33 16.339 -5.634 2.701 10.979 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.149,
    height: 1.404,
    viewBox: "0 0 20.149 1.404",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.61,
      top: 3.458,
      width: 20.149,
      height: 1.404,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.868 1.404 C 19.84 1.404 19.84 1.404 19.812 1.404 C 12.263 0.281 0.421 0.646 0.309 0.646 C 0.14 0.646 0.028 0.534 0 0.365 C 0 0.197 0.112 0.085 0.281 0.057 C 0.393 0.057 12.291 -0.308 19.896 0.814 C 20.065 0.842 20.149 0.983 20.149 1.151 C 20.121 1.291 20.009 1.404 19.868 1.404 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.764,
    height: 1.351,
    viewBox: "0 0 4.764 1.351",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.252,
      top: 5.053,
      width: 4.764,
      height: 1.351,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.494 1.351 C 4.466 1.351 4.438 1.351 4.41 1.323 C 3.288 0.958 0.285 0.566 0.257 0.566 C 0.088 0.537 -0.024 0.397 0.004 0.257 C 0.032 0.088 0.173 -0.024 0.313 0.004 C 0.453 0.032 3.428 0.397 4.579 0.79 C 4.719 0.846 4.803 1.015 4.747 1.155 C 4.747 1.267 4.635 1.351 4.494 1.351 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 5.176,
    height: 5.332,
    viewBox: "0 0 5.176 5.332",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.845,
      top: 12.101,
      width: 5.176,
      height: 5.332,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.939 2.329 L 3.817 2.329 L 4.995 1.515 C 5.135 1.431 5.164 1.235 5.079 1.123 C 4.995 0.982 4.799 0.954 4.686 1.038 L 3.115 2.133 L 3.115 0.281 C 3.115 0.112 2.975 0 2.834 0 C 2.666 0 2.554 0.14 2.554 0.281 L 2.554 1.908 L 1.515 0.87 C 1.403 0.758 1.235 0.758 1.123 0.87 C 1.01 0.982 1.01 1.151 1.123 1.263 L 2.133 2.329 L 0.281 2.357 C 0.112 2.357 0 2.498 0 2.638 C 0 2.806 0.14 2.919 0.281 2.919 L 1.964 2.89 L 0.674 3.788 C 0.533 3.873 0.505 4.069 0.589 4.181 C 0.645 4.266 0.73 4.294 0.814 4.294 C 0.87 4.294 0.926 4.266 0.982 4.237 L 2.498 3.171 L 2.498 5.051 C 2.498 5.22 2.638 5.332 2.778 5.332 C 2.947 5.332 3.059 5.192 3.059 5.051 L 3.059 3.283 L 4.097 4.406 C 4.153 4.462 4.237 4.49 4.294 4.49 C 4.378 4.49 4.434 4.462 4.49 4.406 C 4.602 4.294 4.602 4.125 4.49 4.013 L 3.396 2.862 L 4.883 2.834 C 5.051 2.834 5.164 2.694 5.164 2.554 C 5.22 2.441 5.079 2.329 4.939 2.329 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.985,
    height: 3.985,
    viewBox: "0 0 3.985 3.985",
    fill: "none",
    style: {
      position: "absolute",
      left: 108.126,
      top: 75.495,
      width: 3.985,
      height: 3.985,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.992 3.985 C 0.898 3.985 0 3.087 0 1.992 C 0 0.898 0.898 0 1.992 0 C 2.526 0 3.031 0.225 3.396 0.589 C 3.76 0.954 3.985 1.459 3.985 1.992 C 3.985 3.087 3.087 3.985 1.992 3.985 Z M 1.992 0.589 C 1.207 0.589 0.589 1.235 0.561 1.992 C 0.561 2.778 1.179 3.396 1.964 3.424 L 1.964 3.704 L 1.964 3.424 C 2.75 3.424 3.368 2.778 3.368 2.021 C 3.368 1.656 3.227 1.291 2.947 1.01 C 2.722 0.73 2.385 0.589 1.992 0.589 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.985,
    height: 3.985,
    viewBox: "0 0 3.985 3.985",
    fill: "none",
    style: {
      position: "absolute",
      left: 60.138,
      top: 67.076,
      width: 3.985,
      height: 3.985,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.992 3.985 C 0.898 3.985 0 3.087 0 1.992 C 0 0.898 0.898 0 1.992 0 C 2.526 0 3.031 0.225 3.396 0.589 C 3.76 0.954 3.985 1.459 3.985 1.992 C 3.957 3.087 3.059 3.985 1.992 3.985 Z M 1.992 0.561 C 1.207 0.561 0.589 1.207 0.561 1.964 C 0.561 2.75 1.179 3.368 1.964 3.396 L 1.964 3.676 L 1.964 3.396 C 2.75 3.396 3.368 2.75 3.368 1.992 C 3.368 1.628 3.227 1.263 2.947 0.982 C 2.722 0.73 2.357 0.561 1.992 0.561 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.985,
    height: 3.985,
    viewBox: "0 0 3.985 3.985",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 64.495,
      width: 3.985,
      height: 3.985,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.992 3.985 C 0.898 3.985 0 3.087 0 1.992 C 0 0.898 0.898 0 1.992 0 C 2.526 0 3.031 0.224 3.396 0.589 C 3.76 0.954 3.985 1.459 3.985 1.992 C 3.985 3.115 3.087 3.985 1.992 3.985 Z M 1.992 0.589 C 1.207 0.589 0.589 1.235 0.561 1.992 C 0.561 2.778 1.179 3.396 1.964 3.424 L 1.964 3.704 L 1.964 3.424 C 2.75 3.424 3.368 2.778 3.368 2.021 C 3.368 1.656 3.227 1.291 2.947 1.01 C 2.722 0.73 2.385 0.589 1.992 0.589 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.417,
    height: 6.482,
    viewBox: "0 0 6.417 6.482",
    fill: "none",
    style: {
      position: "absolute",
      left: 98.152,
      top: 18.107,
      width: 6.417,
      height: 6.482,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.154 6.482 C 2.93 6.482 2.733 6.482 2.172 4.237 C 0.292 3.873 0.123 3.648 0.067 3.564 C 0.011 3.48 -0.017 3.368 0.011 3.283 C 0.039 3.171 0.123 2.89 2.284 2.021 C 3.07 0 3.322 0 3.491 0 C 3.575 0 3.715 0.056 3.771 0.14 C 3.912 0.337 4.024 0.814 4.22 1.6 C 4.277 1.852 4.361 2.133 4.389 2.273 C 4.501 2.329 4.754 2.413 4.95 2.498 C 6.073 2.89 6.353 3.031 6.409 3.283 C 6.437 3.396 6.381 3.536 6.297 3.592 C 6.073 3.788 5.006 4.181 4.445 4.406 C 3.547 6.482 3.35 6.482 3.154 6.482 C 3.182 6.482 3.182 6.482 3.154 6.482 Z M 0.797 3.368 C 1.162 3.48 1.863 3.62 2.452 3.732 C 2.565 3.76 2.649 3.845 2.677 3.957 C 2.817 4.574 3.042 5.304 3.182 5.697 C 3.379 5.332 3.715 4.658 3.968 4.069 C 3.996 3.985 4.052 3.929 4.136 3.901 C 4.641 3.732 5.231 3.508 5.595 3.339 C 5.343 3.227 5.006 3.115 4.782 3.031 C 4.136 2.806 4.024 2.75 3.94 2.638 C 3.856 2.554 3.828 2.385 3.659 1.74 C 3.603 1.487 3.519 1.123 3.435 0.842 C 3.238 1.207 2.986 1.824 2.789 2.357 C 2.761 2.441 2.705 2.498 2.621 2.526 C 1.975 2.806 1.218 3.143 0.797 3.368 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.417,
    height: 6.482,
    viewBox: "0 0 6.417 6.482",
    fill: "none",
    style: {
      position: "absolute",
      left: 50.754,
      top: 36.937,
      width: 6.417,
      height: 6.482,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.154 6.482 C 2.93 6.482 2.733 6.482 2.172 4.237 C 0.292 3.873 0.123 3.648 0.067 3.564 C 0.011 3.48 -0.017 3.368 0.011 3.283 C 0.039 3.171 0.123 2.89 2.284 2.021 C 3.07 0 3.322 0 3.491 0 C 3.575 0 3.715 0.056 3.771 0.14 C 3.912 0.337 4.024 0.814 4.22 1.6 C 4.277 1.852 4.361 2.133 4.389 2.273 C 4.501 2.329 4.754 2.413 4.95 2.498 C 6.073 2.89 6.353 3.031 6.409 3.283 C 6.437 3.396 6.381 3.536 6.297 3.592 C 6.073 3.788 5.006 4.181 4.445 4.406 C 3.547 6.454 3.35 6.482 3.154 6.482 Z M 0.797 3.339 C 1.162 3.452 1.863 3.592 2.452 3.704 C 2.565 3.732 2.649 3.817 2.677 3.929 C 2.817 4.546 3.042 5.276 3.182 5.669 C 3.379 5.304 3.715 4.63 3.968 4.041 C 3.996 3.957 4.052 3.901 4.136 3.873 C 4.641 3.704 5.231 3.48 5.595 3.311 C 5.343 3.199 5.006 3.087 4.782 3.003 C 4.136 2.778 4.024 2.722 3.94 2.61 C 3.856 2.526 3.828 2.357 3.659 1.712 C 3.603 1.459 3.519 1.094 3.435 0.814 C 3.238 1.179 2.986 1.796 2.789 2.329 C 2.761 2.413 2.705 2.47 2.621 2.498 C 1.947 2.778 1.19 3.115 0.797 3.339 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.379,
      top: 30.863,
      width: 100.789,
      height: 91.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 47.653,
    height: 74.374,
    viewBox: "0 0 47.653 74.374",
    fill: "none",
    style: {
      position: "absolute",
      left: 50.74,
      top: 11.678,
      width: 47.653,
      height: 74.374,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 46.218 9.156 C 46.218 9.156 23.712 -4.117 17.482 1.299 C 11.252 6.715 6.285 24.731 12.262 27.257 C 19.503 30.316 16.023 36.433 14.451 36.77 C 10.803 37.528 7.183 37.584 2.384 40.362 C -2.414 43.168 1.514 72.69 1.514 72.69 C 1.514 72.69 38.641 75.805 43.356 73.56 C 48.098 71.315 48.744 44.544 46.134 43.112 C 43.524 41.681 29.184 42.888 27.416 38.763 C 25.648 34.637 29.689 27.958 35.19 28.604 C 40.718 29.305 44.787 26.583 46.218 9.156 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.591,
    height: 5.520,
    viewBox: "0 0 13.591 5.520",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.980,-0.199,0.199,0.980,65.816,40.423)",
      transformOrigin: "0 0",
      width: 13.591,
      height: 5.52,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.589 5.52 C 6.67 5.52 2.741 4.622 0.047 0.412 C -0.037 0.3 -0.009 0.132 0.132 0.047 C 0.244 -0.037 0.412 -0.009 0.496 0.132 C 4.986 7.147 13.153 4.537 13.237 4.509 C 13.377 4.453 13.517 4.537 13.574 4.678 C 13.63 4.818 13.546 4.958 13.405 5.014 C 13.377 5.014 11.778 5.52 9.589 5.52 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 47.653,
    height: 74.392,
    viewBox: "0 0 47.653 74.392",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.404,
      top: 11.678,
      width: 47.653,
      height: 74.392,
      color: "rgb(234,163,123)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.435 9.156 C 1.435 9.156 23.941 -4.117 30.171 1.299 C 36.401 6.715 40.161 22.318 34.914 27.173 C 29.161 32.533 31.63 36.433 33.202 36.742 C 36.85 37.5 40.47 37.556 45.269 40.334 C 50.067 43.14 46.139 72.662 46.139 72.662 C 46.139 72.662 9.04 75.833 4.297 73.588 C -0.446 71.343 -1.091 44.572 1.519 43.14 C 4.129 41.709 18.469 42.916 20.237 38.791 C 22.005 34.665 20.012 32.617 18.048 32.364 C 12.548 31.635 0.032 27.453 1.435 9.156 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 31.034,
    height: 41.390,
    viewBox: "0 0 31.034 41.390",
    fill: "none",
    style: {
      position: "absolute",
      left: 69.755,
      top: 0.66,
      width: 31.034,
      height: 41.39,
      color: "rgb(77,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.749 12.967 C 25.204 13.614 27.55 14.656 29.393 16.885 C 32.704 20.87 32.451 43.208 14.66 41.271 C 12.892 40.458 13.172 40.879 12.892 40.598 C 12.611 40.317 12.892 40.037 12.892 40.037 C 14.414 38.76 15.977 32.939 20.216 26.342 C 20.581 25.753 20.861 25.472 21.03 25.36 C 21.984 23.395 22.377 21.319 20.777 19.663 C 16.978 15.755 8.308 16.957 5.033 17.411 C 4.945 17.424 4.861 17.435 4.782 17.446 C 2.915 17.703 2.135 15.577 1.466 13.753 C 1.039 12.588 0.657 11.547 0.067 11.329 C 0.067 11.329 -0.915 1.871 4.641 0.356 C 7.711 -0.481 10.276 0.335 12.354 0.996 C 14.037 1.532 15.401 1.966 16.456 1.338 C 18.196 0.3 19.402 1.984 18.167 3.555 C 18.953 3.19 19.767 3.05 20.216 3.555 C 20.833 4.257 21.31 5.463 21.198 6.361 C 22.265 5.716 23.471 5.295 23.836 6.333 C 24.51 8.27 24.369 10.767 22.714 11.749 C 21.971 12.177 22.566 12.441 23.749 12.967 Z M 19.767 31.674 C 18.953 33.975 17.943 36.501 16.933 38.353 C 17.19 38.257 17.591 38.159 18.077 38.04 C 20.712 37.397 25.822 36.148 23.808 31.337 C 23.235 29.927 22.074 30.524 20.814 31.171 C 20.469 31.348 20.117 31.529 19.767 31.674 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 50.320,
    height: 40.756,
    viewBox: "0 0 50.320 40.756",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.755,
      top: 47.985,
      width: 50.32,
      height: 40.756,
      color: "rgb(155,230,200)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 34.851 0.463 C 34.851 0.463 38.555 4.645 31.203 7.704 C 21.633 11.689 21.662 2.68 20.118 3.186 C 18.575 3.691 3.561 3.466 0.951 7.227 C -1.659 10.987 1.709 39.527 3.786 40.565 C 5.862 41.603 46.16 38.067 49.023 38.32 C 51.885 38.573 49.191 3.214 48.686 1.137 C 48.125 -0.94 34.851 0.463 34.851 0.463 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.830,
    height: 4.952,
    viewBox: "0 0 3.830 4.952",
    fill: "none",
    style: {
      position: "absolute",
      left: 71.506,
      top: 25.704,
      width: 3.83,
      height: 4.952,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.975 4.952 C 2.919 4.924 1.066 4.924 0.225 4.279 C 0.084 4.166 0 4.026 0 3.83 C 0 2.847 2.582 0.715 3.368 0.069 C 3.48 -0.043 3.676 -0.015 3.76 0.125 C 3.873 0.238 3.845 0.434 3.704 0.518 C 1.964 1.921 0.477 3.465 0.533 3.802 C 1.094 4.223 2.441 4.307 2.919 4.335 C 3.087 4.335 3.199 4.475 3.199 4.615 C 3.255 4.84 3.115 4.952 2.975 4.952 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.728,
    height: 5.662,
    viewBox: "0 0 4.728 5.662",
    fill: "none",
    style: {
      position: "absolute",
      left: 67.996,
      top: 21.487,
      width: 4.728,
      height: 5.662,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.928 5.662 C 0.844 5.662 0.76 5.634 0.676 5.606 C -0.952 4.708 0.844 0.639 1.068 0.162 C 1.125 0.022 1.293 -0.035 1.461 0.022 C 1.602 0.078 1.658 0.246 1.602 0.414 C 0.9 1.958 0.114 4.624 0.984 5.101 C 1.405 5.157 2.893 3.193 4.183 0.863 C 4.268 0.723 4.436 0.667 4.576 0.751 C 4.717 0.835 4.773 1.004 4.689 1.144 C 3.706 2.884 1.966 5.662 0.928 5.662 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.635,
    height: 6.416,
    viewBox: "0 0 4.635 6.416",
    fill: "none",
    style: {
      position: "absolute",
      left: 79.105,
      top: 24.521,
      width: 4.635,
      height: 6.416,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.707 6.416 C 0.594 6.416 0.51 6.388 0.426 6.332 C -0.668 5.742 0.623 1.842 1.212 0.186 C 1.268 0.046 1.436 -0.039 1.577 0.018 C 1.717 0.074 1.801 0.242 1.745 0.382 C 0.763 3.048 0.286 5.602 0.679 5.827 C 1.072 6.051 2.699 4.087 4.102 1.729 C 4.186 1.589 4.355 1.561 4.495 1.617 C 4.635 1.701 4.664 1.87 4.607 2.01 C 3.794 3.413 1.885 6.416 0.707 6.416 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.938,
    height: 5.450,
    viewBox: "0 0 4.938 5.450",
    fill: "none",
    style: {
      position: "absolute",
      left: 70.57,
      top: 31.1,
      width: 4.938,
      height: 5.45,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.75 5.45 C 1.469 5.45 1.216 5.337 0.992 5.169 C -0.748 3.738 0.318 0.342 0.375 0.202 C 0.431 0.062 0.599 -0.023 0.739 0.005 C 0.88 0.062 0.964 0.202 0.936 0.37 C 0.936 0.398 -0.074 3.569 1.385 4.72 C 1.581 4.86 1.75 4.916 1.946 4.86 C 2.928 4.608 4.051 2.25 4.388 1.38 C 4.444 1.24 4.612 1.156 4.752 1.212 C 4.893 1.268 4.977 1.437 4.921 1.577 C 4.78 1.942 3.546 5.029 2.086 5.421 C 1.974 5.45 1.862 5.45 1.75 5.45 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.983,
    height: 10.672,
    viewBox: "0 0 6.983 10.672",
    fill: "none",
    style: {
      position: "absolute",
      left: 74.406,
      top: 4.382,
      width: 6.983,
      height: 10.672,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.533 10.672 C 1.449 10.672 1.365 10.644 1.309 10.56 C 1.224 10.42 1.252 10.251 1.365 10.167 C 1.645 9.971 1.252 8.96 0.916 8.062 C 0.242 6.294 -0.684 3.853 0.775 2.141 C 3.077 -0.609 6.612 0.064 6.753 0.093 C 6.921 0.121 7.005 0.261 6.977 0.429 C 6.949 0.598 6.809 0.682 6.64 0.654 C 6.612 0.654 3.301 0.036 1.224 2.506 C -0.01 3.965 0.803 6.126 1.477 7.838 C 1.954 9.129 2.347 10.139 1.73 10.616 C 1.645 10.644 1.589 10.672 1.533 10.672 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.295,
    height: 6.290,
    viewBox: "0 0 6.295 6.290",
    fill: "none",
    style: {
      position: "absolute",
      left: 78.854,
      top: 6.406,
      width: 6.295,
      height: 6.29,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.285 6.29 L 0.257 6.29 C 0.088 6.262 -0.024 6.122 0.004 5.954 C 0.734 0.79 5.897 0.004 5.954 0.004 C 6.094 -0.024 6.262 0.088 6.29 0.257 C 6.318 0.425 6.206 0.566 6.038 0.594 C 5.841 0.622 1.239 1.323 0.594 6.038 C 0.537 6.178 0.425 6.29 0.285 6.29 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.276,
    height: 8.215,
    viewBox: "0 0 6.276 8.215",
    fill: "none",
    style: {
      position: "absolute",
      left: 80.228,
      top: 8.354,
      width: 6.276,
      height: 8.215,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.286 8.215 C 0.146 8.215 0.033 8.131 0.005 7.991 C -0.023 7.85 0.062 7.682 0.202 7.626 C 0.23 7.626 2.784 6.924 4.804 4.792 C 6.684 2.771 5.113 0.526 5.057 0.442 C 4.972 0.302 5.001 0.133 5.113 0.049 C 5.253 -0.035 5.421 -0.007 5.506 0.105 C 5.534 0.133 7.414 2.827 5.197 5.184 C 3.092 7.429 0.454 8.159 0.342 8.187 C 0.342 8.215 0.314 8.215 0.286 8.215 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.575,
    height: 1.724,
    viewBox: "0 0 5.575 1.724",
    fill: "none",
    style: {
      position: "absolute",
      left: 90.09,
      top: 17.764,
      width: 5.575,
      height: 1.724,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 1.724 C 5.213 1.724 5.157 1.696 5.101 1.64 C 3.333 -0.268 0.442 0.994 0.414 1.022 C 0.274 1.079 0.106 1.022 0.022 0.882 C -0.035 0.742 0.022 0.573 0.162 0.489 C 0.302 0.433 3.445 -0.97 5.494 1.247 C 5.606 1.359 5.606 1.556 5.466 1.64 C 5.438 1.696 5.381 1.724 5.297 1.724 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.296,
    height: 4.785,
    viewBox: "0 0 6.296 4.785",
    fill: "none",
    style: {
      position: "absolute",
      left: 92.071,
      top: 21.242,
      width: 6.296,
      height: 4.785,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.954 4.785 C 5.785 4.785 5.645 4.644 5.673 4.476 C 5.729 3.297 5.42 2.371 4.747 1.726 C 3.203 0.294 0.341 0.603 0.313 0.603 C 0.145 0.631 0.004 0.519 0.004 0.351 C -0.024 0.182 0.088 0.042 0.257 0.042 C 0.397 0.014 3.428 -0.295 5.168 1.305 C 5.982 2.062 6.346 3.157 6.29 4.504 C 6.234 4.672 6.122 4.785 5.954 4.785 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.760,
    height: 5.571,
    viewBox: "0 0 5.760 5.571",
    fill: "none",
    style: {
      position: "absolute",
      left: 91.78,
      top: 26.152,
      width: 5.76,
      height: 5.571,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.291 5.571 C 5.262 5.571 5.234 5.571 5.178 5.543 C 5.038 5.487 4.954 5.319 5.01 5.178 C 5.234 4.589 5.206 4.028 4.926 3.495 C 3.944 1.586 0.239 0.576 0.211 0.576 C 0.071 0.548 -0.041 0.38 0.015 0.211 C 0.043 0.071 0.211 -0.041 0.38 0.015 C 0.548 0.071 4.364 1.109 5.459 3.242 C 5.824 3.944 5.852 4.645 5.571 5.403 C 5.515 5.515 5.403 5.571 5.291 5.571 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.194,
    height: 3.776,
    viewBox: "0 0 4.194 3.776",
    fill: "none",
    style: {
      position: "absolute",
      left: 88.715,
      top: 33.699,
      width: 4.194,
      height: 3.776,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.639 3.776 C 0.499 3.776 0.358 3.72 0.246 3.636 C -0.091 3.327 -0.091 2.71 0.302 1.784 C 0.695 0.886 1.228 0.325 1.93 0.1 C 2.996 -0.237 4.006 0.381 4.062 0.409 C 4.203 0.493 4.231 0.661 4.147 0.802 C 4.062 0.942 3.894 0.97 3.754 0.886 C 3.754 0.886 2.912 0.381 2.098 0.633 C 1.565 0.802 1.144 1.251 0.835 2.009 C 0.47 2.85 0.583 3.159 0.611 3.187 C 0.611 3.187 0.695 3.187 0.835 3.103 C 1.088 2.935 1.425 2.486 1.256 1.952 C 1.228 1.812 1.312 1.644 1.453 1.588 C 1.621 1.531 1.761 1.644 1.817 1.784 C 2.014 2.542 1.621 3.271 1.144 3.58 C 0.976 3.72 0.779 3.776 0.639 3.776 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 49.050,
    height: 40.756,
    viewBox: "0 0 49.050 40.756",
    fill: "none",
    style: {
      position: "absolute",
      left: 50.993,
      top: 47.985,
      width: 49.05,
      height: 40.756,
      color: "rgb(180,165,250)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.199 0.463 C 14.199 0.463 10.494 4.645 17.847 7.704 C 27.416 11.689 27.388 2.68 28.932 3.186 C 30.475 3.691 45.489 3.466 48.098 7.227 C 50.708 10.987 47.341 39.527 45.264 40.565 C 43.187 41.603 2.889 38.067 0.027 38.32 C 0.027 38.32 -0.141 3.214 0.364 1.137 C 0.925 -0.94 14.199 0.463 14.199 0.463 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 46.443,
    height: 33.774,
    viewBox: "0 0 46.443 33.774",
    fill: "none",
    style: {
      position: "absolute",
      left: 51.317,
      top: 57.726,
      width: 46.443,
      height: 33.774,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 46.427 12.134 C 46.427 12.134 47.493 32.086 31.975 33.658 C 11.489 35.735 19.375 9.187 14.632 12.835 C 13.734 13.537 14.66 15.165 12.808 15.922 C 10.956 16.652 1.835 16.82 1.274 15.529 C -0.69 10.871 -0.943 1.807 4.614 0.712 C 10.17 -0.41 16.737 -0.635 20.806 3.294 C 25.913 8.233 22.349 18.111 27.541 21.451 C 32.733 24.79 30.993 10.899 33.602 10.198 C 40.113 8.514 46.427 12.134 46.427 12.134 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.581,
    height: 5.852,
    viewBox: "0 0 2.581 5.852",
    fill: "none",
    style: {
      position: "absolute",
      left: 58.573,
      top: 68.134,
      width: 2.581,
      height: 5.852,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.96 5.852 C 1.427 5.852 0.978 5.655 0.669 5.291 C -0.566 3.915 0.276 0.38 0.332 0.211 C 0.36 0.071 0.529 -0.041 0.669 0.015 C 0.809 0.043 0.921 0.211 0.865 0.352 C 0.641 1.306 0.22 3.944 1.09 4.898 C 1.37 5.206 1.735 5.319 2.24 5.234 C 2.381 5.206 2.549 5.319 2.577 5.487 C 2.605 5.655 2.493 5.796 2.325 5.824 C 2.212 5.824 2.072 5.852 1.96 5.852 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.826,
    height: 5.388,
    viewBox: "0 0 2.826 5.388",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.467,
      top: 68.625,
      width: 2.826,
      height: 5.388,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.147 5.388 C 1.811 5.388 1.502 5.276 1.221 5.051 C -0.126 3.957 -0.013 0.421 0.015 0.281 C 0.015 0.112 0.127 0 0.323 0 C 0.492 0 0.604 0.14 0.604 0.309 C 0.576 1.263 0.688 3.873 1.614 4.602 C 1.867 4.799 2.147 4.855 2.484 4.771 C 2.652 4.743 2.793 4.827 2.821 4.967 C 2.849 5.107 2.765 5.276 2.624 5.304 C 2.428 5.36 2.288 5.388 2.147 5.388 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.131,
    height: 5.477,
    viewBox: "0 0 2.131 5.477",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.571,
      top: 68.677,
      width: 2.131,
      height: 5.477,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.845 5.477 C 1.817 5.477 1.761 5.477 1.732 5.448 C -0.316 4.55 0.021 0.453 0.021 0.257 C 0.021 0.088 0.189 -0.024 0.329 0.004 C 0.498 0.004 0.61 0.145 0.582 0.313 C 0.582 0.341 0.273 4.186 1.957 4.915 C 2.097 4.971 2.181 5.14 2.097 5.308 C 2.069 5.42 1.957 5.477 1.845 5.477 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.719,
    height: 5.197,
    viewBox: "0 0 1.719 5.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 62.172,
      top: 68.424,
      width: 1.719,
      height: 5.197,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.42 5.197 C 1.392 5.197 1.336 5.197 1.308 5.169 C -0.881 4.299 0.326 0.37 0.382 0.202 C 0.438 0.062 0.578 -0.023 0.747 0.005 C 0.887 0.062 0.971 0.202 0.943 0.37 C 0.943 0.398 -0.151 3.962 1.533 4.636 C 1.673 4.692 1.757 4.86 1.701 5.001 C 1.645 5.113 1.533 5.197 1.42 5.197 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.450,
    height: 2.044,
    viewBox: "0 0 3.450 2.044",
    fill: "none",
    style: {
      position: "absolute",
      left: 65.264,
      top: 69.472,
      width: 3.45,
      height: 2.044,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.292 2.044 C 0.236 2.044 0.208 2.044 0.152 2.016 C 0.011 1.932 -0.045 1.763 0.04 1.623 C 0.573 0.669 1.218 0.136 1.92 0.023 C 2.734 -0.117 3.323 0.416 3.351 0.444 C 3.463 0.557 3.491 0.725 3.379 0.837 C 3.267 0.95 3.098 0.978 2.986 0.865 C 2.986 0.865 2.565 0.501 2.032 0.585 C 1.527 0.669 1.022 1.118 0.573 1.904 C 0.489 1.988 0.376 2.044 0.292 2.044 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.136,
    height: 10.872,
    viewBox: "0 0 15.136 10.872",
    fill: "none",
    style: {
      position: "absolute",
      left: 79.787,
      top: 48.818,
      width: 15.136,
      height: 10.872,
      color: "rgb(234,163,123)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.627 1.174 C 4.627 1.174 1.175 1.342 0.137 5.664 C -0.901 9.986 4.29 3.419 4.795 3.587 C 5.3 3.756 0.979 6.169 1.344 8.246 C 1.708 10.322 7.91 4.626 7.91 4.626 C 7.91 4.626 1.512 8.61 3.925 9.986 C 6.339 11.361 10.857 5.327 10.857 5.327 C 10.857 5.327 5.329 11.22 8.079 10.855 C 10.857 10.519 16.89 7.74 14.645 2.717 C 12.4 -2.306 4.627 1.174 4.627 1.174 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.890,
    height: 3.663,
    viewBox: "0 0 4.890 3.663",
    fill: "none",
    style: {
      position: "absolute",
      left: 82.766,
      top: 50.594,
      width: 4.89,
      height: 3.663,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.273 3.663 C 0.217 3.663 0.161 3.635 0.105 3.607 C -0.007 3.523 -0.035 3.326 0.049 3.214 C 1.985 0.744 4.427 0.043 4.511 0.015 C 4.679 -0.041 4.82 0.071 4.876 0.211 C 4.932 0.352 4.82 0.52 4.679 0.576 C 4.651 0.576 2.322 1.278 0.498 3.579 C 0.442 3.607 0.358 3.663 0.273 3.663 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.413,
    height: 3.176,
    viewBox: "0 0 5.413 3.176",
    fill: "none",
    style: {
      position: "absolute",
      left: 84.114,
      top: 53.158,
      width: 5.413,
      height: 3.176,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.3 3.176 C 0.244 3.176 0.188 3.148 0.132 3.12 C -0.009 3.036 -0.037 2.84 0.047 2.727 C 1.31 0.931 4.902 0.061 5.071 0.005 C 5.239 -0.023 5.379 0.061 5.407 0.23 C 5.435 0.398 5.351 0.539 5.183 0.567 C 5.155 0.567 1.647 1.437 0.496 3.036 C 0.496 3.12 0.384 3.176 0.3 3.176 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.910,
    height: 3.519,
    viewBox: "0 0 4.910 3.519",
    fill: "none",
    style: {
      position: "absolute",
      left: 86.728,
      top: 54.695,
      width: 4.91,
      height: 3.519,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.296 3.519 C 0.212 3.519 0.128 3.491 0.071 3.407 C -0.041 3.295 -0.013 3.098 0.1 3.014 C 1.475 1.808 4.337 0.124 4.477 0.04 C 4.618 -0.045 4.786 0.011 4.87 0.152 C 4.954 0.292 4.898 0.46 4.758 0.545 C 4.73 0.573 1.811 2.285 0.464 3.463 C 0.408 3.519 0.352 3.519 0.296 3.519 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.577,
    height: 9.491,
    viewBox: "0 0 17.577 9.491",
    fill: "none",
    style: {
      position: "absolute",
      left: 62.135,
      top: 49.537,
      width: 17.577,
      height: 9.491,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 9.491 C 9.567 9.491 8.276 9.294 6.817 8.845 C -0.956 6.376 0.026 0.286 0.054 0.23 C 0.082 0.061 0.222 -0.023 0.391 0.005 C 0.559 0.033 0.643 0.174 0.615 0.342 C 0.587 0.567 -0.283 6.011 6.985 8.312 C 14.254 10.641 16.92 5.898 17.032 5.674 C 17.116 5.534 17.284 5.478 17.425 5.562 C 17.565 5.646 17.621 5.814 17.537 5.955 C 17.509 5.983 15.545 9.491 10.69 9.491 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.279,
    height: 9.210,
    viewBox: "0 0 18.279 9.210",
    fill: "none",
    style: {
      position: "absolute",
      left: 80.996,
      top: 59.921,
      width: 18.279,
      height: 9.21,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.955 9.21 C 17.871 9.21 17.786 9.182 17.73 9.126 C 17.702 9.098 15.149 6.263 9.648 6.123 C 6.449 6.011 4.036 6.993 2.436 7.61 C 1.398 8.003 0.78 8.256 0.388 8.059 C 0.275 8.003 0.135 7.891 0.051 7.638 C -0.314 6.376 1.398 0.847 1.622 0.202 C 1.678 0.062 1.819 -0.023 1.987 0.005 C 2.127 0.062 2.212 0.202 2.184 0.37 C 1.426 2.784 0.388 6.628 0.64 7.47 C 0.668 7.526 0.668 7.526 0.668 7.526 C 0.865 7.61 1.566 7.33 2.268 7.049 C 3.895 6.404 6.365 5.421 9.704 5.534 C 15.457 5.702 18.095 8.621 18.207 8.733 C 18.32 8.845 18.292 9.042 18.179 9.126 C 18.095 9.182 18.011 9.21 17.955 9.21 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.810,
    height: 4.876,
    viewBox: "0 0 3.810 4.876",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.454,
      top: 25.781,
      width: 3.81,
      height: 4.876,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.863 4.876 C 0.694 4.876 0.582 4.735 0.582 4.595 C 0.582 4.427 0.722 4.314 0.863 4.314 C 1.34 4.314 2.687 4.202 3.276 3.781 C 3.332 3.445 1.845 1.901 0.105 0.498 C -0.007 0.386 -0.035 0.217 0.049 0.105 C 0.161 -0.007 0.33 -0.035 0.442 0.049 C 1.228 0.694 3.837 2.827 3.809 3.809 C 3.809 3.978 3.725 4.146 3.585 4.258 C 2.771 4.848 0.947 4.876 0.863 4.876 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.738,
    height: 5.662,
    viewBox: "0 0 4.738 5.662",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.102,
      top: 21.487,
      width: 4.738,
      height: 5.662,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.772 5.662 C 2.734 5.662 1.022 2.884 0.04 1.144 C -0.045 1.004 0.011 0.835 0.152 0.751 C 0.292 0.667 0.46 0.723 0.545 0.863 C 1.864 3.193 3.351 5.157 3.772 5.101 C 4.642 4.596 3.856 1.958 3.155 0.414 C 3.098 0.274 3.155 0.106 3.295 0.022 C 3.435 -0.035 3.604 0.022 3.688 0.162 C 3.884 0.611 5.68 4.68 4.081 5.606 C 3.94 5.634 3.856 5.662 3.772 5.662 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.647,
    height: 6.388,
    viewBox: "0 0 4.647 6.388",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.045,
      top: 24.549,
      width: 4.647,
      height: 6.388,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.94 6.388 C 2.762 6.388 0.853 3.385 0.04 2.01 C -0.045 1.87 0.011 1.701 0.152 1.617 C 0.292 1.533 0.46 1.589 0.545 1.729 C 1.948 4.087 3.575 6.023 3.968 5.827 C 4.389 5.602 3.884 3.076 2.902 0.382 C 2.846 0.242 2.93 0.074 3.07 0.018 C 3.211 -0.039 3.379 0.046 3.435 0.186 C 4.024 1.842 5.315 5.742 4.221 6.332 C 4.137 6.36 4.024 6.388 3.94 6.388 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.938,
    height: 5.461,
    viewBox: "0 0 4.938 5.461",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.317,
      top: 31.088,
      width: 4.938,
      height: 5.461,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.161 5.461 C 3.048 5.461 2.964 5.461 2.852 5.433 C 1.393 5.041 0.158 1.954 0.018 1.589 C -0.039 1.449 0.046 1.28 0.186 1.224 C 0.326 1.168 0.495 1.252 0.551 1.392 C 0.888 2.262 2.01 4.62 2.992 4.872 C 3.189 4.928 3.385 4.872 3.553 4.732 C 4.985 3.553 4.002 0.41 4.002 0.382 C 3.946 0.242 4.031 0.073 4.199 0.017 C 4.339 -0.039 4.508 0.045 4.564 0.214 C 4.62 0.354 5.686 3.778 3.946 5.181 C 3.694 5.377 3.413 5.461 3.161 5.461 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.205,
    height: 3.748,
    viewBox: "0 0 4.205 3.748",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.889,
      top: 33.727,
      width: 4.205,
      height: 3.748,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.555 3.748 C 3.387 3.748 3.218 3.692 3.05 3.58 C 2.545 3.271 2.18 2.542 2.377 1.784 C 2.405 1.644 2.573 1.531 2.741 1.588 C 2.882 1.616 2.994 1.784 2.938 1.952 C 2.798 2.514 3.106 2.935 3.359 3.103 C 3.499 3.187 3.583 3.187 3.583 3.187 C 3.639 3.159 3.724 2.85 3.359 2.009 C 3.05 1.279 2.629 0.802 2.096 0.633 C 1.282 0.381 0.468 0.886 0.44 0.886 C 0.3 0.97 0.132 0.942 0.047 0.802 C -0.037 0.661 -0.009 0.493 0.132 0.409 C 0.188 0.381 1.198 -0.237 2.264 0.1 C 2.966 0.325 3.499 0.886 3.892 1.784 C 4.285 2.71 4.313 3.327 3.948 3.636 C 3.864 3.72 3.724 3.748 3.555 3.748 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 46.443,
    height: 33.774,
    viewBox: "0 0 46.443 33.774",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.037,
      top: 57.726,
      width: 46.443,
      height: 33.774,
      color: "rgb(234,163,123)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.016 12.134 C 0.016 12.134 -1.051 32.086 14.468 33.658 C 34.954 35.735 27.068 9.187 31.811 12.835 C 32.709 13.537 31.783 15.165 33.635 15.922 C 35.487 16.652 44.607 16.82 45.168 15.529 C 47.133 10.871 47.385 1.807 41.829 0.712 C 36.273 -0.41 29.706 -0.635 25.637 3.294 C 20.529 8.233 24.093 18.111 18.902 21.451 C 13.71 24.79 15.45 10.899 12.84 10.198 C 6.33 8.514 0.016 12.134 0.016 12.134 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.573,
    height: 5.842,
    viewBox: "0 0 2.573 5.842",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.643,
      top: 68.143,
      width: 2.573,
      height: 5.842,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.622 5.842 C 0.509 5.842 0.397 5.842 0.257 5.814 C 0.088 5.786 -0.024 5.646 0.004 5.478 C 0.032 5.309 0.173 5.197 0.341 5.225 C 0.846 5.281 1.211 5.169 1.492 4.888 C 2.362 3.934 1.941 1.268 1.716 0.342 C 1.688 0.202 1.772 0.033 1.913 0.005 C 2.081 -0.023 2.221 0.062 2.249 0.202 C 2.277 0.342 3.147 3.906 1.913 5.281 C 1.576 5.646 1.155 5.842 0.622 5.842 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.797,
    height: 5.360,
    viewBox: "0 0 2.797 5.360",
    fill: "none",
    style: {
      position: "absolute",
      left: 44.523,
      top: 68.653,
      width: 2.797,
      height: 5.36,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.66 5.36 C 0.52 5.36 0.352 5.332 0.211 5.304 C 0.071 5.276 -0.041 5.107 0.015 4.967 C 0.043 4.827 0.211 4.715 0.352 4.771 C 0.688 4.855 0.997 4.799 1.221 4.602 C 2.148 3.845 2.26 1.235 2.232 0.309 C 2.232 0.14 2.344 0.028 2.512 0 C 2.653 0 2.793 0.112 2.793 0.281 C 2.793 0.421 2.933 3.957 1.586 5.051 C 1.306 5.248 0.997 5.36 0.66 5.36 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.131,
    height: 5.476,
    viewBox: "0 0 2.131 5.476",
    fill: "none",
    style: {
      position: "absolute",
      left: 48.108,
      top: 68.678,
      width: 2.131,
      height: 5.476,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.274 5.476 C 0.162 5.476 0.05 5.42 0.022 5.307 C -0.035 5.167 0.022 4.999 0.162 4.915 C 1.565 4.297 1.621 1.379 1.537 0.312 C 1.537 0.144 1.649 0.004 1.789 0.004 C 1.958 -0.024 2.098 0.116 2.098 0.256 C 2.126 0.425 2.435 4.522 0.386 5.448 C 0.33 5.476 0.302 5.476 0.274 5.476 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.707,
    height: 5.209,
    viewBox: "0 0 1.707 5.209",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.907,
      top: 68.412,
      width: 1.707,
      height: 5.209,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.298 5.209 C 0.186 5.209 0.074 5.153 0.018 5.012 C -0.039 4.872 0.046 4.704 0.186 4.648 C 1.87 3.974 0.803 0.41 0.775 0.382 C 0.719 0.242 0.803 0.073 0.972 0.017 C 1.112 -0.039 1.28 0.045 1.337 0.214 C 1.393 0.382 2.571 4.311 0.41 5.181 C 0.382 5.181 0.326 5.209 0.298 5.209 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.450,
    height: 2.037,
    viewBox: "0 0 3.450 2.037",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.111,
      top: 69.479,
      width: 3.45,
      height: 2.037,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.13 2.037 C 3.018 2.037 2.934 1.981 2.878 1.896 C 2.429 1.111 1.924 0.662 1.418 0.578 C 0.885 0.493 0.464 0.858 0.464 0.858 C 0.352 0.97 0.156 0.942 0.071 0.83 C -0.041 0.718 -0.013 0.521 0.1 0.437 C 0.128 0.409 0.717 -0.096 1.531 0.016 C 2.232 0.128 2.85 0.662 3.411 1.616 C 3.495 1.756 3.439 1.925 3.299 2.009 C 3.243 2.009 3.186 2.037 3.13 2.037 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.136,
    height: 10.872,
    viewBox: "0 0 15.136 10.872",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.874,
      top: 48.818,
      width: 15.136,
      height: 10.872,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.509 1.174 C 10.509 1.174 13.961 1.342 14.999 5.664 C 16.037 9.986 10.846 3.419 10.34 3.587 C 9.835 3.756 14.157 6.169 13.792 8.246 C 13.427 10.322 7.225 4.626 7.225 4.626 C 7.225 4.626 13.624 8.61 11.21 9.986 C 8.797 11.361 4.279 5.327 4.279 5.327 C 4.279 5.327 9.807 11.22 7.057 10.855 C 4.279 10.519 -1.755 7.74 0.49 2.717 C 2.707 -2.306 10.509 1.174 10.509 1.174 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.899,
    height: 3.691,
    viewBox: "0 0 4.899 3.691",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.141,
      top: 50.566,
      width: 4.899,
      height: 3.691,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.617 3.691 C 4.533 3.691 4.449 3.663 4.393 3.579 C 2.568 1.278 0.239 0.576 0.211 0.576 C 0.071 0.52 -0.041 0.38 0.015 0.211 C 0.071 0.071 0.211 -0.041 0.38 0.015 C 0.492 0.043 2.905 0.772 4.842 3.214 C 4.926 3.326 4.926 3.523 4.785 3.607 C 4.757 3.663 4.673 3.691 4.617 3.691 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.413,
    height: 3.148,
    viewBox: "0 0 5.413 3.148",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.242,
      top: 53.186,
      width: 5.413,
      height: 3.148,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.141 3.148 C 5.057 3.148 4.972 3.092 4.916 3.036 C 3.794 1.408 0.286 0.567 0.23 0.567 C 0.061 0.539 -0.023 0.37 0.005 0.23 C 0.033 0.061 0.202 -0.023 0.342 0.005 C 0.482 0.033 4.102 0.903 5.365 2.727 C 5.449 2.868 5.421 3.036 5.281 3.12 C 5.253 3.12 5.197 3.148 5.141 3.148 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.910,
    height: 3.535,
    viewBox: "0 0 4.910 3.535",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.131,
      top: 54.679,
      width: 4.91,
      height: 3.535,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.642 3.535 C 4.586 3.535 4.502 3.507 4.445 3.451 C 3.098 2.272 0.208 0.56 0.152 0.532 C 0.011 0.448 -0.045 0.28 0.04 0.139 C 0.124 -0.001 0.292 -0.029 0.432 0.027 C 0.545 0.111 3.407 1.795 4.81 3.002 C 4.922 3.114 4.951 3.282 4.838 3.395 C 4.81 3.507 4.726 3.535 4.642 3.535 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.563,
    height: 9.518,
    viewBox: "0 0 17.563 9.518",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.086,
      top: 49.51,
      width: 17.563,
      height: 9.518,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.887 9.518 C 2.004 9.518 0.068 6.01 0.04 5.954 C -0.045 5.813 0.011 5.645 0.152 5.561 C 0.292 5.477 0.46 5.533 0.545 5.673 C 0.657 5.869 3.295 10.612 10.591 8.311 C 17.859 6.01 17.017 0.566 16.961 0.341 C 16.933 0.173 17.046 0.032 17.186 0.004 C 17.354 -0.024 17.495 0.089 17.523 0.229 C 17.523 0.285 18.505 6.375 10.76 8.844 C 9.3 9.349 8.037 9.518 6.887 9.518 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.272,
    height: 9.222,
    viewBox: "0 0 18.272 9.222",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.55,
      top: 59.909,
      width: 18.272,
      height: 9.222,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.296 9.222 C 0.24 9.222 0.156 9.194 0.1 9.138 C -0.013 9.025 -0.041 8.857 0.071 8.745 C 0.184 8.633 2.822 5.714 8.574 5.546 C 11.914 5.433 14.383 6.416 16.011 7.061 C 16.713 7.342 17.414 7.622 17.611 7.538 C 17.611 7.538 17.639 7.538 17.639 7.482 C 17.863 6.668 16.825 2.796 16.095 0.382 C 16.039 0.242 16.123 0.073 16.292 0.017 C 16.46 -0.039 16.6 0.045 16.657 0.214 C 16.853 0.831 18.565 6.388 18.228 7.65 C 18.172 7.903 18.004 8.015 17.891 8.071 C 17.47 8.268 16.853 8.043 15.843 7.622 C 14.243 7.005 11.858 6.023 8.631 6.135 C 3.102 6.303 0.549 9.11 0.549 9.138 C 0.464 9.166 0.38 9.222 0.296 9.222 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 42.088,
    height: 42.638,
    viewBox: "0 0 42.088 42.638",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 42.088,
      height: 42.638,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 41.366 9.694 C 33.93 9.862 34.884 -1.559 25.96 0.18 C 17.99 1.724 18.186 7.617 18.186 7.617 C 18.186 7.617 14.735 2.762 6.597 8.487 C -1.542 14.184 5.221 19.207 3.818 20.582 C 2.443 21.957 0.198 18.169 0.002 23.529 C -0.054 25.437 1.208 27.036 3.173 28.075 C 2.808 31.583 3.79 37.195 7.438 39.777 C 12.293 43.229 14.875 43.06 15.436 41.854 C 16.867 38.739 13.528 39.272 11.816 38.233 C 10.076 37.195 7.635 33.379 9.88 32.172 C 12.125 30.965 15.577 33.547 14.903 32.509 C 14.538 31.975 14.23 29.955 14.005 28.131 C 15.156 27.626 16.278 26.98 17.316 26.11 C 24.416 20.217 20.6 15.39 22.676 14.857 C 24.753 14.352 25.09 17.102 31.853 18.309 C 38.588 19.544 44.116 9.609 41.366 9.694 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.225,
    height: 6.294,
    viewBox: "0 0 14.225 6.294",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.711,
      top: 10.304,
      width: 14.225,
      height: 6.294,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.64 6.294 C 11.433 6.294 10.226 5.143 8.992 3.936 C 7.981 2.954 6.831 1.86 5.512 1.158 C 2.172 -0.582 0.601 2.14 0.545 2.253 C 0.46 2.393 0.292 2.449 0.152 2.365 C 0.011 2.281 -0.045 2.112 0.04 1.972 C 0.068 1.944 1.948 -1.368 5.792 0.653 C 7.167 1.383 8.346 2.505 9.413 3.515 C 11.349 5.367 12.499 6.378 13.762 5.199 C 13.874 5.087 14.071 5.087 14.155 5.227 C 14.239 5.367 14.267 5.536 14.127 5.62 C 13.622 6.097 13.145 6.294 12.64 6.294 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.894,
    height: 11.024,
    viewBox: "0 0 9.894 11.024",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.427,
      top: 14.918,
      width: 9.894,
      height: 11.024,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.099 11.024 C 0.818 11.024 0.537 10.996 0.257 10.968 C 0.088 10.94 -0.024 10.799 0.004 10.659 C 0.032 10.491 0.173 10.379 0.313 10.407 C 4.326 10.94 5.14 7.46 5.841 4.401 C 6.01 3.615 6.178 2.886 6.403 2.268 C 6.795 1.118 7.385 0.416 8.114 0.136 C 8.984 -0.201 9.714 0.192 9.742 0.22 C 9.882 0.304 9.938 0.472 9.854 0.613 C 9.77 0.753 9.602 0.809 9.461 0.725 C 9.433 0.725 8.9 0.444 8.311 0.669 C 7.75 0.893 7.273 1.483 6.936 2.465 C 6.739 3.054 6.571 3.756 6.375 4.513 C 5.757 7.292 4.887 11.024 1.099 11.024 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.828,
    height: 5.824,
    viewBox: "0 0 15.828 5.824",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.705,
      top: 5.441,
      width: 15.828,
      height: 5.824,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.881 5.824 C 12.225 5.824 10.794 4.533 9.391 3.298 C 8.156 2.176 6.865 1.053 5.406 0.716 C 1.898 -0.069 0.607 3.495 0.551 3.635 C 0.495 3.775 0.326 3.859 0.186 3.803 C 0.046 3.747 -0.039 3.579 0.018 3.438 C 0.046 3.382 1.533 -0.771 5.546 0.127 C 7.146 0.492 8.493 1.699 9.811 2.849 C 11.692 4.533 13.291 5.964 15.396 4.814 C 15.536 4.729 15.705 4.785 15.789 4.926 C 15.873 5.066 15.817 5.235 15.677 5.319 C 15.031 5.684 14.442 5.824 13.881 5.824 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.176,
    height: 11.528,
    viewBox: "0 0 11.176 11.528",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.891,
      top: 10.962,
      width: 11.176,
      height: 11.528,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.284 11.528 C 0.144 11.528 0.004 11.416 0.004 11.275 C -0.024 11.107 0.116 10.967 0.256 10.967 C 3.736 10.658 3.568 8.806 3.371 6.449 C 3.231 4.681 3.062 2.66 4.858 1.425 C 8.815 -1.269 11.004 0.668 11.088 0.752 C 11.201 0.864 11.201 1.033 11.116 1.145 C 11.004 1.257 10.836 1.257 10.724 1.173 C 10.639 1.089 8.759 -0.539 5.195 1.902 C 3.68 2.941 3.82 4.625 3.96 6.393 C 4.157 8.638 4.353 11.163 0.284 11.528 C 0.284 11.528 0.312 11.528 0.284 11.528 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.956,
    height: 2.979,
    viewBox: "0 0 1.956 2.979",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.416,
      top: 27.93,
      width: 1.956,
      height: 2.979,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.67 2.979 C 1.642 2.979 1.642 2.979 1.614 2.979 C 0.183 2.67 -0.07 1.071 0.014 0.257 C 0.014 0.088 0.155 -0.024 0.323 0.004 C 0.492 0.004 0.604 0.145 0.576 0.313 C 0.576 0.397 0.435 2.137 1.726 2.418 C 1.895 2.446 1.979 2.614 1.951 2.754 C 1.923 2.867 1.81 2.979 1.67 2.979 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.951,
    height: 5.955,
    viewBox: "0 0 1.951 5.955",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.6,
      top: 28.069,
      width: 1.951,
      height: 5.955,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.67 5.955 C 1.613 5.955 1.557 5.927 1.501 5.898 C -0.688 4.243 0.154 0.398 0.182 0.23 C 0.21 0.061 0.379 -0.023 0.519 0.005 C 0.687 0.033 0.772 0.202 0.743 0.342 C 0.743 0.37 -0.042 3.99 1.838 5.421 C 1.978 5.506 1.978 5.702 1.894 5.814 C 1.866 5.898 1.782 5.955 1.67 5.955 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.543,
    height: 6.538,
    viewBox: "0 0 16.543 6.538",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.195,
      top: 38.066,
      width: 16.543,
      height: 6.538,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.87 6.538 C 3.466 6.538 1.895 6.341 0.211 5.892 C 0.071 5.864 -0.041 5.696 0.015 5.527 C 0.071 5.387 0.211 5.275 0.38 5.331 C 5.964 6.846 9.893 5.359 12.25 3.844 C 14.776 2.188 16.011 0.167 16.011 0.139 C 16.095 -0.001 16.263 -0.029 16.403 0.027 C 16.544 0.111 16.572 0.28 16.516 0.42 C 16.46 0.504 12.783 6.538 4.87 6.538 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 31,
      top: 7,
      width: 58,
      height: 10,
      fontFamily: "SVN-Cookies, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 0.9828906059265137,
      color: "rgb(255,255,255)"
    }
  }, props.text1 ?? "Đẳng cấp!"), /*#__PURE__*/React.createElement("svg", {
    width: 9.317,
    height: 9.345,
    viewBox: "0 0 9.317 9.345",
    fill: "none",
    style: {
      position: "absolute",
      left: 115.983,
      top: 39.007,
      width: 9.317,
      height: 9.345,
      color: "rgb(255,155,75)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.712 4.602 L 0 1.291 L 3.396 2.217 L 5.697 0 L 6.426 2.862 L 9.317 4.546 L 6.539 5.809 L 6.09 9.345 L 3.704 6.511 L 0.533 7.521 L 1.712 4.602 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 150,
      height: 120,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 5,
      width: 130.416,
      height: 110.438,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 66.784,
    height: 91.412,
    viewBox: "0 0 66.784 91.412",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.028,
      width: 66.784,
      height: 91.412,
      color: "rgb(234,163,123)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 66.374 62.649 C 66.374 57.182 56.029 58.584 52.216 58.079 C 48.404 57.574 47.647 53.117 50.17 52.865 C 59.646 51.94 63.626 42.296 59.842 31.867 C 56.029 21.438 50.478 18.467 40.975 23.933 C 33.405 28.279 31.667 33.353 33.714 40.081 C 33.013 42.015 33.686 45.576 36.405 46.389 C 43.245 60.518 32.677 60.238 21.014 45.8 C 15.407 38.847 15.8 23.933 31.471 15.467 C 40.134 10.785 52.917 13.617 53.506 10.701 C 54.88 10.729 56.029 10.589 56.59 10.112 C 57.122 9.664 56.898 9.271 56.225 8.935 C 56.674 8.57 56.702 7.898 56.029 6.776 C 52.693 1.309 46.722 -0.401 35.76 0.076 C 26.817 0.468 18.715 5.851 18.715 5.851 C 18.715 5.851 -1.806 21.859 0.129 40.333 C 1.811 56.593 11.062 62.2 18.183 68.171 C 25.303 74.143 14.847 92.533 26.257 91.047 C 37.667 89.562 61.384 93.571 64.692 89.59 C 68.028 85.581 66.374 68.115 66.374 62.649 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 61.272,
    height: 91.586,
    viewBox: "0 0 61.272 91.586",
    fill: "none",
    style: {
      position: "absolute",
      left: 66.794,
      top: 0,
      width: 61.272,
      height: 91.586,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42.556 5.851 C 42.556 5.851 34.482 0.468 25.511 0.076 C 14.55 -0.401 8.551 1.309 5.243 6.776 C 1.935 12.243 15.055 7.028 15.055 7.028 C 15.055 7.028 2.299 8.122 4.682 10.112 C 7.065 12.103 19.344 8.514 19.344 8.514 C 19.344 8.514 7.289 7.701 7.766 10.673 C 8.242 13.645 21.11 10.785 29.801 15.467 C 45.472 23.905 45.864 38.819 40.258 45.8 C 28.399 60.518 17.634 60.546 25.231 45.632 C 30.137 36.016 29.801 29.4 20.297 23.933 C 10.793 18.467 5.243 21.438 1.43 31.867 C -2.383 42.296 1.626 51.94 11.102 52.865 C 13.625 53.117 12.868 57.574 9.055 58.079 C 5.243 58.584 1.094 56.761 1.094 62.228 C 1.094 67.695 0 85.861 3.336 89.842 C 6.672 93.823 23.605 89.534 35.015 91.019 C 46.425 92.505 35.968 74.115 43.089 68.143 C 50.21 62.172 59.461 56.565 61.143 40.305 C 63.078 21.887 42.556 5.851 42.556 5.851 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.548,
    height: 3.940,
    viewBox: "0 0 16.548 3.940",
    fill: "none",
    style: {
      position: "absolute",
      left: 70.923,
      top: 48.896,
      width: 16.548,
      height: 3.94,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.31 3.94 C 5.067 3.94 2.6 3.295 0.105 1.445 C -0.007 1.361 -0.035 1.165 0.049 1.053 C 0.133 0.94 0.329 0.912 0.441 0.997 C 8.263 6.828 16 0.155 16.085 0.071 C 16.197 -0.041 16.365 -0.013 16.477 0.099 C 16.589 0.212 16.561 0.38 16.449 0.492 C 16.393 0.548 12.468 3.94 7.31 3.94 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.108,
    height: 4.703,
    viewBox: "0 0 3.108 4.703",
    fill: "none",
    style: {
      position: "absolute",
      left: 74.037,
      top: 36.303,
      width: 3.108,
      height: 4.703,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.392 4.703 C 1 4.703 0.607 4.647 0.299 4.506 C 0.159 4.45 0.047 4.31 0.018 4.142 C -0.206 3.273 1.673 0.834 2.233 0.105 C 2.317 -0.007 2.514 -0.035 2.626 0.049 C 2.738 0.133 2.766 0.329 2.682 0.441 C 1.42 2.011 0.439 3.693 0.551 4.002 C 1.112 4.226 2.345 4.058 2.766 3.946 C 2.906 3.918 3.074 4.002 3.102 4.17 C 3.13 4.31 3.046 4.478 2.878 4.506 C 2.822 4.534 2.121 4.703 1.392 4.703 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.717,
    height: 5.192,
    viewBox: "0 0 3.717 5.192",
    fill: "none",
    style: {
      position: "absolute",
      left: 69.979,
      top: 33.684,
      width: 3.717,
      height: 5.192,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.188 5.192 C 1.132 5.192 1.104 5.192 1.048 5.164 C -0.578 4.687 0.151 0.706 0.235 0.23 C 0.263 0.089 0.403 -0.023 0.572 0.005 C 0.712 0.033 0.824 0.174 0.796 0.342 C 0.544 1.631 0.291 4.351 1.216 4.631 C 1.581 4.575 2.506 2.528 3.179 0.202 C 3.235 0.061 3.375 -0.023 3.515 0.005 C 3.655 0.061 3.739 0.202 3.711 0.342 C 3.151 2.22 2.142 5.192 1.188 5.192 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.593,
    height: 5.915,
    viewBox: "0 0 3.593 5.915",
    fill: "none",
    style: {
      position: "absolute",
      left: 80.684,
      top: 34.082,
      width: 3.593,
      height: 5.915,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.913 5.915 C 0.856 5.915 0.828 5.915 0.772 5.887 C -0.321 5.579 0.015 1.85 0.184 0.252 C 0.212 0.112 0.352 0 0.492 0 C 0.632 0.028 0.744 0.168 0.744 0.308 C 0.436 2.831 0.52 5.214 0.913 5.327 C 1.221 5.411 2.258 3.56 3.071 0.981 C 3.127 0.841 3.267 0.757 3.408 0.813 C 3.548 0.869 3.632 1.009 3.576 1.149 C 3.155 2.635 1.978 5.915 0.913 5.915 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 51.484,
    height: 44.460,
    viewBox: "0 0 51.484 44.460",
    fill: "none",
    style: {
      position: "absolute",
      left: 65.201,
      top: 47.82,
      width: 51.484,
      height: 44.46,
      color: "rgb(160,210,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.134 9.558 C 12.134 9.558 10.648 12.894 14.657 15.698 C 21.582 20.519 23.404 8.353 27.105 8.156 C 30.833 7.96 37.589 -1.095 39.356 0.11 C 41.122 1.316 52.84 15.95 51.354 17.716 C 49.868 19.482 41.879 24.584 42.159 25.341 C 42.439 26.098 44.121 41.601 42.439 43.199 C 40.757 44.797 5.63 44.433 1.341 44.405 C -1.827 44.405 1.649 14.857 1.369 12.137 C 1.089 9.418 12.134 9.558 12.134 9.558 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.880,
    height: 10.765,
    viewBox: "0 0 17.880 10.765",
    fill: "none",
    style: {
      position: "absolute",
      left: 71.629,
      top: 0.749,
      width: 17.88,
      height: 10.765,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.705 5.635 C 17.565 5.579 17.397 5.635 17.341 5.747 C 17.256 5.915 17.144 5.999 16.976 6.027 C 16.135 6.168 14.285 4.682 13.332 3.729 C 13.276 3.672 13.163 3.644 13.079 3.644 C 10.052 4.317 6.519 4.71 6.127 4.205 C 6.127 4.205 6.099 4.149 6.155 4.037 C 7.613 0.953 15.602 0.589 15.687 0.561 C 15.827 0.561 15.967 0.421 15.967 0.28 C 15.967 0.14 15.855 0 15.687 0 C 15.35 0.028 7.276 0.392 5.678 3.785 C 5.538 4.093 5.594 4.317 5.678 4.457 C 1.922 5.327 0.127 7.345 0.071 7.429 C -0.041 7.541 -0.013 7.709 0.099 7.822 C 0.155 7.878 0.212 7.878 0.296 7.878 C 0.38 7.878 0.464 7.85 0.52 7.794 C 0.548 7.766 2.454 5.607 6.435 4.878 C 6.435 4.878 6.435 4.878 6.463 4.878 C 6.912 4.99 7.529 4.99 8.229 4.962 C 8.257 5.102 8.37 5.635 8.566 6.336 C 5.398 6.504 2.034 9.083 1.894 9.195 C 1.781 9.279 1.753 9.476 1.838 9.588 C 1.894 9.672 1.978 9.7 2.062 9.7 C 2.118 9.7 2.174 9.672 2.23 9.644 C 2.258 9.616 5.622 7.037 8.594 6.896 C 8.65 6.896 8.678 6.868 8.706 6.868 C 8.902 7.457 9.126 8.102 9.407 8.635 C 8.37 8.859 3.996 9.784 3.295 10.233 C 3.155 10.317 3.127 10.485 3.211 10.625 C 3.267 10.709 3.351 10.765 3.436 10.765 C 3.492 10.765 3.548 10.737 3.576 10.709 C 4.08 10.401 7.472 9.616 9.659 9.167 C 9.659 9.167 9.659 9.167 9.687 9.167 C 9.799 9.335 9.911 9.476 10.024 9.616 C 10.08 9.672 10.164 9.7 10.22 9.7 C 10.276 9.7 10.36 9.672 10.416 9.616 C 10.528 9.504 10.528 9.335 10.416 9.223 C 9.463 8.242 8.846 5.523 8.734 4.99 C 10.36 4.85 12.182 4.485 13.079 4.289 C 13.612 4.794 15.602 6.644 16.92 6.644 C 16.976 6.644 17.06 6.644 17.116 6.616 C 17.453 6.56 17.733 6.364 17.873 6.027 C 17.901 5.859 17.845 5.691 17.705 5.635 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.134,
    height: 34.834,
    viewBox: "0 0 37.134 34.834",
    fill: "none",
    style: {
      position: "absolute",
      left: 64.858,
      top: 11.845,
      width: 37.134,
      height: 34.834,
      color: "rgb(77,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.366 20.05 C 3.366 20.05 -0.727 19.097 0.114 13.49 C 0.955 7.883 7.094 10.406 5.861 11.247 C 4.235 12.341 0.759 2.921 8.104 1.183 C 15.785 -0.639 15.729 8.052 13.963 7.743 C 11.804 7.351 14.636 -2.293 21.784 0.51 C 28.905 3.314 25.429 10.406 23.466 9.706 C 21.504 9.005 29.858 2.304 34.035 8.332 C 38.213 14.359 30.167 18.256 29.466 16.994 C 28.765 15.733 34.933 13.771 36.727 18.256 C 38.521 22.742 33.923 27.9 31.821 26.498 C 29.718 25.096 36.026 24.255 34.905 29.582 C 33.783 34.908 26.242 36.703 25.261 32.525 C 24.279 28.348 32.073 19.77 23.326 13.266 C 12.982 5.556 6.169 13.07 3.366 20.05 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.858,
    height: 7.786,
    viewBox: "0 0 5.858 7.786",
    fill: "none",
    style: {
      position: "absolute",
      left: 88.729,
      top: 38.803,
      width: 5.858,
      height: 7.786,
      color: "rgb(224,167,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.539 0.521 C 2.539 0.521 4.586 -0.965 5.511 1.082 C 6.436 3.128 5.595 7.586 1.979 7.782 C -1.638 7.978 0.409 1.558 2.539 0.521 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.167,
    height: 4.543,
    viewBox: "0 0 3.167 4.543",
    fill: "none",
    style: {
      position: "absolute",
      left: 90.191,
      top: 39.939,
      width: 3.167,
      height: 4.543,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.302 4.543 C 1.05 4.543 0.825 4.459 0.629 4.319 C 0.321 4.095 -0.184 3.478 0.068 1.964 C 0.237 0.955 0.601 0.31 1.19 0.086 C 2.059 -0.251 3.012 0.506 3.068 0.562 C 3.18 0.647 3.208 0.843 3.096 0.955 C 3.012 1.067 2.816 1.095 2.704 0.983 C 2.507 0.815 1.863 0.422 1.386 0.619 C 0.909 0.787 0.713 1.488 0.629 2.048 C 0.601 2.188 0.601 2.301 0.573 2.441 C 1.078 2.329 1.694 2.301 2.087 2.609 C 2.339 2.805 2.451 3.086 2.451 3.478 C 2.451 3.87 2.227 4.235 1.835 4.431 C 1.666 4.487 1.47 4.543 1.302 4.543 Z M 0.573 3.001 C 0.601 3.394 0.741 3.702 0.965 3.87 C 1.19 4.039 1.442 4.011 1.61 3.899 C 1.807 3.814 1.919 3.646 1.919 3.45 C 1.919 3.142 1.807 3.057 1.75 3.029 C 1.582 2.945 1.274 2.861 0.573 3.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26.094,
    height: 17.538,
    viewBox: "0 0 26.094 17.538",
    fill: "none",
    style: {
      position: "absolute",
      left: 72.086,
      top: 17.132,
      width: 26.094,
      height: 17.538,
      color: "rgb(252,253,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.322 17.538 C 22.294 17.538 22.266 17.538 22.209 17.538 C 22.069 17.51 21.957 17.37 21.985 17.23 C 22.013 17.09 22.153 16.978 22.294 17.006 C 22.546 17.034 23.807 16.613 24.733 15.632 C 25.546 14.763 25.826 13.726 25.518 12.576 C 25.153 11.118 24.172 10.754 23.639 10.67 L 23.611 10.67 C 23.303 11.623 22.77 12.268 22.266 12.324 C 22.097 12.352 21.761 12.324 21.509 11.931 C 21.284 11.567 21.256 11.175 21.509 10.81 C 21.817 10.362 22.49 10.081 23.219 10.053 C 23.527 8.764 23.359 7.053 21.985 5.848 C 20.668 4.671 19.378 4.783 18.705 5.007 C 18.733 5.54 18.677 6.016 18.509 6.381 C 18.257 6.913 17.808 7.138 17.303 6.969 C 16.939 6.857 16.743 6.605 16.715 6.269 C 16.687 5.736 17.219 5.063 18.032 4.671 C 18.06 4.671 18.06 4.643 18.088 4.643 C 17.892 3.465 17.191 2.035 15.79 1.222 C 14.248 0.325 12.93 1.11 12.285 2.063 C 12.482 2.428 12.622 2.792 12.706 3.157 C 12.846 3.83 12.762 4.334 12.454 4.53 C 12.341 4.615 12.061 4.699 11.697 4.418 C 11.108 3.97 11.08 3.017 11.613 2.063 C 11.136 1.363 10.379 0.774 9.342 0.634 C 7.772 0.437 6.622 1.054 6.034 1.755 C 6.342 2.091 6.482 2.428 6.538 2.596 C 6.763 3.213 6.678 3.83 6.342 4.082 C 6.23 4.166 5.894 4.334 5.473 3.998 C 4.968 3.605 4.828 2.904 5.109 2.176 C 5.165 2.063 5.221 1.923 5.277 1.811 C 4.8 1.475 4.071 1.194 2.922 1.25 C 1.969 1.306 1.324 1.615 0.959 2.176 C 0.09 3.521 0.988 5.82 0.988 5.848 C 1.044 5.988 0.959 6.156 0.819 6.212 C 0.679 6.269 0.511 6.184 0.455 6.044 C 0.427 5.932 -0.554 3.437 0.455 1.867 C 0.931 1.138 1.744 0.746 2.866 0.662 C 4.155 0.606 5.024 0.914 5.557 1.334 C 6.314 0.465 7.688 -0.179 9.342 0.045 C 10.463 0.185 11.304 0.774 11.865 1.531 C 12.762 0.381 14.304 -0.263 15.986 0.718 C 17.444 1.587 18.285 3.101 18.537 4.418 C 19.378 4.194 20.808 4.11 22.266 5.427 C 23.779 6.773 24.004 8.651 23.667 10.109 C 24.817 10.305 25.658 11.175 25.966 12.436 C 26.303 13.754 25.966 15.015 25.041 16.024 C 24.2 17.006 22.854 17.538 22.322 17.538 Z M 23.022 10.614 C 22.518 10.67 22.125 10.866 21.957 11.118 C 21.845 11.287 21.873 11.427 21.985 11.623 C 22.069 11.763 22.153 11.763 22.181 11.763 C 22.378 11.707 22.742 11.343 23.022 10.614 Z M 18.145 5.203 C 17.584 5.512 17.247 5.96 17.275 6.184 C 17.275 6.212 17.275 6.325 17.472 6.381 C 17.64 6.437 17.836 6.437 17.976 6.1 C 18.088 5.876 18.145 5.568 18.145 5.203 Z M 11.949 2.624 C 11.725 3.185 11.753 3.717 12.033 3.942 C 12.117 3.998 12.173 4.026 12.173 4.026 C 12.201 3.97 12.285 3.577 12.061 2.96 C 12.033 2.848 12.005 2.736 11.949 2.624 Z M 5.697 2.204 C 5.669 2.26 5.641 2.316 5.613 2.372 C 5.529 2.596 5.333 3.185 5.781 3.521 C 5.865 3.605 5.95 3.633 6.006 3.605 C 6.09 3.549 6.174 3.213 6.006 2.764 C 5.978 2.624 5.894 2.428 5.697 2.204 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.349,
    height: 10.350,
    viewBox: "0 0 16.349 10.350",
    fill: "none",
    style: {
      position: "absolute",
      left: 75.373,
      top: 58.018,
      width: 16.349,
      height: 10.35,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.737 10.35 C 7.345 10.35 6.953 10.294 6.532 10.21 C 0.084 8.696 0 1.267 0 1.211 C 0 1.071 0.112 0.931 0.28 0.931 C 0.421 0.931 0.561 1.043 0.561 1.211 C 0.561 1.239 0.561 3.005 1.346 4.939 C 2.355 7.491 4.149 9.088 6.672 9.677 C 12.672 11.079 15.783 0.314 15.811 0.202 C 15.839 0.061 16.008 -0.023 16.148 0.005 C 16.288 0.033 16.372 0.202 16.344 0.342 C 16.316 0.454 15.531 3.201 13.933 5.808 C 12.139 8.808 10.008 10.35 7.737 10.35 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.979,
    height: 3.789,
    viewBox: "0 0 5.979 3.789",
    fill: "none",
    style: {
      position: "absolute",
      left: 73.866,
      top: 41.843,
      width: 5.979,
      height: 3.789,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.908 3.789 C 2.712 3.789 2.488 3.761 2.263 3.705 C -0.372 3.004 0.021 0.257 0.021 0.229 C 0.049 0.088 0.189 -0.024 0.329 0.004 C 0.469 0.032 0.581 0.173 0.553 0.313 C 0.553 0.397 0.245 2.583 2.404 3.172 C 2.88 3.312 3.329 3.256 3.749 3.004 C 4.927 2.331 5.403 0.425 5.431 0.397 C 5.459 0.257 5.628 0.144 5.768 0.201 C 5.908 0.229 6.02 0.397 5.964 0.537 C 5.936 0.621 5.403 2.696 4.03 3.481 C 3.693 3.705 3.301 3.789 2.908 3.789 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.548,
    height: 3.940,
    viewBox: "0 0 16.548 3.940",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.567,
      top: 48.896,
      width: 16.548,
      height: 3.94,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.239 3.94 C 4.08 3.94 0.155 0.548 0.099 0.492 C -0.013 0.38 -0.041 0.212 0.071 0.099 C 0.184 -0.013 0.352 -0.041 0.464 0.071 C 0.548 0.127 8.285 6.828 16.107 0.997 C 16.219 0.912 16.415 0.94 16.5 1.053 C 16.584 1.165 16.556 1.361 16.443 1.445 C 13.976 3.295 11.481 3.94 9.239 3.94 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.107,
    height: 4.683,
    viewBox: "0 0 3.107 4.683",
    fill: "none",
    style: {
      position: "absolute",
      left: 50.923,
      top: 36.323,
      width: 3.107,
      height: 4.683,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.714 4.683 C 0.986 4.683 0.285 4.515 0.229 4.515 C 0.088 4.487 -0.024 4.319 0.004 4.178 C 0.032 4.038 0.173 3.926 0.341 3.954 C 0.761 4.038 1.995 4.235 2.583 3.982 C 2.668 3.702 1.686 2.02 0.425 0.45 C 0.341 0.338 0.341 0.142 0.481 0.057 C 0.593 -0.027 0.789 -0.027 0.873 0.113 C 1.462 0.842 3.312 3.281 3.088 4.15 C 3.06 4.319 2.948 4.431 2.808 4.515 C 2.499 4.627 2.107 4.683 1.714 4.683 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.659,
    height: 5.158,
    viewBox: "0 0 3.659 5.158",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.015,
      top: 33.016,
      width: 3.659,
      height: 5.158,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.052 5.158 C 1.071 5.158 0.37 2.327 0.005 0.617 C -0.023 0.477 0.061 0.308 0.23 0.28 C 0.37 0.252 0.538 0.336 0.566 0.505 C 0.987 2.635 1.715 4.57 2.052 4.598 C 2.865 4.429 3.145 1.99 3.089 0.28 C 3.089 0.14 3.201 0 3.369 0 C 3.538 0 3.65 0.112 3.65 0.28 C 3.678 1.037 3.734 4.85 2.164 5.158 C 2.108 5.158 2.08 5.158 2.052 5.158 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.614,
    height: 5.892,
    viewBox: "0 0 3.614 5.892",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.761,
      top: 34.133,
      width: 3.614,
      height: 5.892,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.709 5.863 C 1.616 5.863 0.466 2.583 0.018 1.154 C -0.039 1.014 0.046 0.845 0.186 0.817 C 0.326 0.761 0.494 0.845 0.522 0.985 C 1.335 3.537 2.372 5.415 2.681 5.331 C 3.073 5.219 3.157 2.836 2.849 0.313 C 2.821 0.173 2.933 0.032 3.101 0.004 C 3.242 -0.024 3.382 0.088 3.41 0.257 C 3.606 1.855 3.942 5.583 2.821 5.892 C 2.821 5.863 2.765 5.863 2.709 5.863 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 57.576,
    height: 45.021,
    viewBox: "0 0 57.576 45.021",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.381,
      top: 47.82,
      width: 57.576,
      height: 45.021,
      color: "rgb(20,30,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 39.35 9.558 C 39.35 9.558 40.836 12.894 36.827 15.698 C 29.902 20.519 28.08 8.353 24.38 8.156 C 20.651 7.96 13.895 -1.095 12.129 0.11 C 10.362 1.316 -1.356 15.95 0.13 17.716 C 1.616 19.482 9.605 24.584 9.325 25.341 C 9.045 26.098 7.363 41.601 9.045 43.199 C 10.727 44.769 56.114 46.087 56.675 43.76 C 56.955 42.554 58.553 13.371 56.675 11.408 C 52.947 7.512 39.35 9.558 39.35 9.558 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.873,
    height: 10.765,
    viewBox: "0 0 17.873 10.765",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.636,
      top: 0.777,
      width: 17.873,
      height: 10.765,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.785 7.429 C 17.701 7.345 15.935 5.327 12.178 4.457 C 12.262 4.317 12.347 4.093 12.178 3.785 C 10.58 0.392 2.507 0 2.17 0 C 2.002 0 1.89 0.112 1.89 0.28 C 1.89 0.421 2.002 0.561 2.17 0.561 C 2.254 0.561 10.244 0.925 11.702 4.037 C 11.758 4.149 11.73 4.177 11.73 4.205 C 11.309 4.71 7.805 4.317 4.777 3.644 C 4.693 3.616 4.581 3.644 4.525 3.729 C 3.572 4.682 1.722 6.168 0.881 6.027 C 0.712 5.999 0.6 5.915 0.516 5.747 C 0.46 5.607 0.292 5.551 0.152 5.635 C 0.011 5.691 -0.045 5.859 0.04 5.999 C 0.208 6.336 0.46 6.532 0.796 6.588 C 0.853 6.588 0.937 6.616 0.993 6.616 C 2.31 6.616 4.301 4.766 4.833 4.261 C 5.759 4.457 7.581 4.822 9.179 4.962 C 9.067 5.523 8.45 8.214 7.497 9.223 C 7.385 9.335 7.385 9.504 7.497 9.616 C 7.553 9.672 7.609 9.7 7.693 9.7 C 7.777 9.7 7.833 9.672 7.889 9.616 C 8.001 9.504 8.113 9.335 8.226 9.167 C 8.226 9.167 8.226 9.167 8.254 9.167 C 10.44 9.616 13.832 10.401 14.337 10.709 C 14.393 10.737 14.449 10.765 14.477 10.765 C 14.561 10.765 14.645 10.709 14.701 10.625 C 14.786 10.485 14.758 10.317 14.617 10.233 C 13.917 9.784 9.543 8.859 8.506 8.635 C 8.786 8.102 9.039 7.457 9.207 6.868 C 9.235 6.896 9.291 6.896 9.319 6.896 C 12.319 7.037 15.655 9.616 15.683 9.644 C 15.739 9.672 15.795 9.7 15.851 9.7 C 15.935 9.7 16.019 9.672 16.075 9.588 C 16.159 9.476 16.159 9.279 16.019 9.195 C 15.879 9.083 12.515 6.504 9.347 6.336 C 9.543 5.635 9.655 5.102 9.683 4.962 C 10.356 4.99 10.973 4.99 11.449 4.878 C 11.449 4.878 11.449 4.878 11.478 4.878 C 15.458 5.607 17.365 7.766 17.393 7.794 C 17.449 7.85 17.533 7.878 17.617 7.878 C 17.673 7.878 17.757 7.85 17.813 7.822 C 17.897 7.709 17.897 7.541 17.785 7.429 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.156,
    height: 4.569,
    viewBox: "0 0 3.156 4.569",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.691,
      top: 39.913,
      width: 3.156,
      height: 4.569,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.882 4.569 C 1.686 4.569 1.518 4.513 1.321 4.429 C 0.957 4.233 0.705 3.868 0.705 3.476 C 0.705 3.111 0.817 2.803 1.069 2.607 C 1.462 2.298 2.078 2.326 2.583 2.439 C 2.583 2.326 2.555 2.186 2.527 2.046 C 2.443 1.485 2.247 0.785 1.77 0.616 C 1.209 0.392 0.452 0.981 0.452 0.981 C 0.34 1.065 0.144 1.065 0.06 0.953 C -0.024 0.841 -0.024 0.644 0.088 0.56 C 0.116 0.532 1.069 -0.253 1.966 0.084 C 2.555 0.308 2.919 0.925 3.088 1.962 C 3.34 3.476 2.835 4.093 2.527 4.317 C 2.359 4.485 2.134 4.569 1.882 4.569 Z M 1.938 2.943 C 1.658 2.943 1.518 2.999 1.434 3.055 C 1.406 3.083 1.265 3.167 1.265 3.476 C 1.265 3.672 1.378 3.812 1.574 3.924 C 1.742 4.008 1.994 4.036 2.219 3.896 C 2.443 3.728 2.555 3.448 2.611 3.027 C 2.331 2.971 2.134 2.943 1.938 2.943 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.349,
    height: 10.350,
    viewBox: "0 0 16.349 10.350",
    fill: "none",
    style: {
      position: "absolute",
      left: 36.316,
      top: 58.018,
      width: 16.349,
      height: 10.35,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.64 10.35 C 6.369 10.35 4.239 8.808 2.416 5.808 C 0.846 3.201 0.061 0.454 0.005 0.342 C -0.023 0.202 0.061 0.033 0.202 0.005 C 0.342 -0.023 0.51 0.061 0.538 0.202 C 0.566 0.314 3.706 11.079 9.677 9.677 C 15.705 8.247 15.789 1.267 15.789 1.211 C 15.789 1.071 15.901 0.931 16.069 0.931 C 16.209 0.931 16.349 1.043 16.349 1.211 C 16.349 1.295 16.265 8.696 9.817 10.21 C 9.425 10.322 9.032 10.35 8.64 10.35 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.938,
    height: 3.789,
    viewBox: "0 0 5.938 3.789",
    fill: "none",
    style: {
      position: "absolute",
      left: 48.202,
      top: 41.843,
      width: 5.938,
      height: 3.789,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.061 3.789 C 2.669 3.789 2.304 3.677 1.94 3.481 C 0.566 2.696 0.033 0.621 0.005 0.537 C -0.023 0.397 0.061 0.229 0.202 0.201 C 0.342 0.173 0.51 0.257 0.538 0.397 C 0.538 0.425 1.043 2.331 2.22 3.004 C 2.641 3.256 3.061 3.284 3.538 3.172 C 5.696 2.583 5.388 0.425 5.388 0.313 C 5.36 0.173 5.472 0.032 5.612 0.004 C 5.752 -0.024 5.921 0.088 5.921 0.229 C 5.921 0.257 6.285 3.004 3.678 3.705 C 3.482 3.761 3.285 3.789 3.061 3.789 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 33.632,
    height: 37.380,
    viewBox: "0 0 33.632 37.380",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.392,
      top: 11.68,
      width: 33.632,
      height: 37.38,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.322 28.429 C 7.322 28.429 9.789 25.373 12.031 27.896 C 13.433 29.466 7.013 23.299 11.19 18.14 C 15.367 12.982 22.068 8.244 29.889 13.963 C 29.889 13.963 35.748 9.197 32.805 4.628 C 28.488 -2.101 21.227 2.946 21.227 3.787 C 21.227 4.628 22.46 -0.11 17.694 0.002 C 11.667 0.17 7.294 11.019 7.294 11.019 C 7.294 11.019 6.312 7.403 3.677 9.057 C 1.042 10.711 -2.322 18.953 2.275 22.457 C 2.275 22.457 0.734 22.878 0.593 28.317 C 0.453 33.755 7.294 38.633 11.05 37.091 L 10.489 34.989 C 10.517 34.989 5.696 32.886 7.322 28.429 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.965,
    height: 20.020,
    viewBox: "0 0 18.965 20.020",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.361,
      top: 3.645,
      width: 18.965,
      height: 20.02,
      color: "rgb(160,210,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.111 0.131 C 11.111 0.131 17.447 9.074 18.82 11.233 C 20.166 13.392 11.7 18.943 10.214 19.952 C 8.728 20.961 -0.664 10.448 0.037 8.065 C 0.71 5.682 9.653 -1.018 11.111 0.131 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.522,
    height: 11.002,
    viewBox: "0 0 8.522 11.002",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.899,
      top: 5.979,
      width: 8.522,
      height: 11.002,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.227 11.002 C 8.17 11.002 8.086 10.974 8.03 10.946 C 4.834 8.17 0.209 0.741 0.04 0.433 C -0.044 0.293 0.012 0.125 0.125 0.04 C 0.265 -0.044 0.433 0.012 0.517 0.125 C 0.573 0.209 5.283 7.778 8.423 10.525 C 8.535 10.637 8.563 10.806 8.451 10.918 C 8.395 10.974 8.311 11.002 8.227 11.002 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.294,
    height: 11.684,
    viewBox: "0 0 9.294 11.684",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.161,
      top: 8.492,
      width: 9.294,
      height: 11.684,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.049 11.684 C 8.993 11.684 8.937 11.656 8.881 11.628 C 3.863 8.012 0.05 0.471 0.022 0.386 C -0.034 0.246 0.022 0.078 0.134 0.022 C 0.274 -0.034 0.443 0.022 0.499 0.134 C 0.527 0.218 4.283 7.647 9.189 11.18 C 9.301 11.264 9.329 11.432 9.245 11.572 C 9.217 11.656 9.133 11.684 9.049 11.684 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.970,
    height: 20.020,
    viewBox: "0 0 18.970 20.020",
    fill: "none",
    style: {
      position: "absolute",
      left: 96.95,
      top: 3.645,
      width: 18.97,
      height: 20.02,
      color: "rgb(20,30,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.859 0.131 C 7.859 0.131 1.523 9.074 0.15 11.233 C -1.224 13.392 7.27 18.943 8.756 19.952 C 10.242 20.961 19.634 10.448 18.933 8.065 C 18.232 5.682 9.317 -1.018 7.859 0.131 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.529,
    height: 11.009,
    viewBox: "0 0 8.529 11.009",
    fill: "none",
    style: {
      position: "absolute",
      left: 99.859,
      top: 5.972,
      width: 8.529,
      height: 11.009,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.296 11.009 C 0.212 11.009 0.127 10.981 0.071 10.925 C -0.041 10.812 -0.013 10.644 0.099 10.532 C 3.239 7.813 7.949 0.216 8.005 0.131 C 8.089 -0.009 8.257 -0.037 8.398 0.047 C 8.538 0.131 8.566 0.3 8.482 0.44 C 8.285 0.748 3.688 8.177 0.492 10.953 C 0.408 10.981 0.352 11.009 0.296 11.009 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.312,
    height: 11.702,
    viewBox: "0 0 9.312 11.702",
    fill: "none",
    style: {
      position: "absolute",
      left: 102.798,
      top: 8.475,
      width: 9.312,
      height: 11.702,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.273 11.702 C 0.189 11.702 0.105 11.674 0.049 11.59 C -0.035 11.478 -0.007 11.281 0.105 11.197 C 5.011 7.665 8.768 0.208 8.796 0.152 C 8.852 0.011 9.02 -0.045 9.16 0.04 C 9.3 0.096 9.356 0.264 9.272 0.404 C 9.244 0.488 5.431 8.029 0.413 11.674 C 0.385 11.702 0.329 11.702 0.273 11.702 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.681,
    height: 7.248,
    viewBox: "0 0 3.681 7.248",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.678,
      top: 16.013,
      width: 3.681,
      height: 7.248,
      color: "rgb(235,243,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.08 7.248 C 0.996 7.248 0.94 7.22 0.884 7.164 C 0.772 7.051 0.8 6.883 0.912 6.771 C 2.622 5.201 3.323 3.855 3.042 2.734 C 2.622 1.136 0.239 0.547 0.211 0.547 C 0.071 0.519 -0.041 0.351 0.015 0.211 C 0.071 0.071 0.211 -0.041 0.351 0.015 C 0.463 0.043 3.099 0.688 3.603 2.594 C 3.94 3.912 3.183 5.453 1.304 7.164 C 1.22 7.22 1.164 7.248 1.08 7.248 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.570,
    height: 6.704,
    viewBox: "0 0 3.570 6.704",
    fill: "none",
    style: {
      position: "absolute",
      left: 47.619,
      top: 16.135,
      width: 3.57,
      height: 6.704,
      color: "rgb(235,243,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.962 6.704 C 1.906 6.704 1.878 6.704 1.822 6.676 C 1.682 6.592 1.654 6.424 1.71 6.284 C 2.972 4.097 3.308 2.471 2.719 1.518 C 2.047 0.453 0.308 0.565 0.308 0.565 C 0.168 0.565 0.028 0.453 0 0.313 C 0 0.172 0.112 0.032 0.252 0.004 C 0.336 0.004 2.327 -0.136 3.196 1.21 C 3.925 2.359 3.588 4.153 2.187 6.536 C 2.159 6.648 2.075 6.704 1.962 6.704 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.977,
    height: 6.715,
    viewBox: "0 0 4.977 6.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.942,
      top: 17.106,
      width: 4.977,
      height: 6.715,
      color: "rgb(235,243,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.602 6.715 L 4.574 6.715 C 4.434 6.687 4.322 6.547 4.322 6.407 C 4.602 4.08 4.238 2.426 3.228 1.445 C 2.051 0.295 0.341 0.576 0.313 0.576 C 0.173 0.604 0.004 0.491 0.004 0.351 C -0.024 0.211 0.088 0.043 0.229 0.043 C 0.313 0.015 2.219 -0.265 3.621 1.08 C 4.742 2.174 5.191 3.996 4.882 6.491 C 4.854 6.603 4.742 6.715 4.602 6.715 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.471,
    height: 5.211,
    viewBox: "0 0 4.471 5.211",
    fill: "none",
    style: {
      position: "absolute",
      left: 36.764,
      top: 20.404,
      width: 4.471,
      height: 5.211,
      color: "rgb(235,243,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.182 5.211 C 4.182 5.211 4.154 5.211 4.182 5.211 C 4.014 5.211 3.902 5.071 3.902 4.902 C 4.042 3.136 3.706 1.875 2.893 1.174 C 1.856 0.277 0.37 0.585 0.342 0.613 C 0.202 0.641 0.033 0.557 0.005 0.417 C -0.023 0.277 0.061 0.109 0.202 0.08 C 0.286 0.052 1.968 -0.312 3.229 0.781 C 4.182 1.594 4.603 3.024 4.435 4.986 C 4.435 5.099 4.323 5.211 4.182 5.211 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.724,
    height: 4.806,
    viewBox: "0 0 5.724 4.806",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.471,
      top: 25.547,
      width: 5.724,
      height: 4.806,
      color: "rgb(235,243,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.439 4.806 C 5.298 4.806 5.186 4.722 5.158 4.582 C 4.654 2.311 3.841 0.937 2.803 0.629 C 1.626 0.264 0.477 1.358 0.477 1.358 C 0.364 1.47 0.196 1.47 0.084 1.358 C -0.028 1.246 -0.028 1.077 0.084 0.965 C 0.14 0.909 1.486 -0.352 2.972 0.096 C 4.233 0.461 5.158 1.947 5.719 4.442 C 5.747 4.582 5.663 4.75 5.495 4.778 C 5.467 4.806 5.439 4.806 5.439 4.806 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.002,
    height: 3.206,
    viewBox: "0 0 6.002 3.206",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.63,
      top: 31.885,
      width: 6.002,
      height: 3.206,
      color: "rgb(235,243,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.738 3.206 C 5.654 3.206 5.542 3.15 5.486 3.065 C 4.729 1.72 3.804 0.907 2.767 0.655 C 1.477 0.346 0.44 1.047 0.44 1.047 C 0.328 1.131 0.131 1.103 0.047 0.963 C -0.037 0.823 -0.009 0.655 0.131 0.57 C 0.187 0.542 1.393 -0.271 2.907 0.094 C 4.084 0.374 5.122 1.271 5.963 2.757 C 6.047 2.897 5.991 3.065 5.85 3.15 C 5.822 3.206 5.766 3.206 5.738 3.206 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.909,
    height: 5.642,
    viewBox: "0 0 4.909 5.642",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.212,
      top: 36.71,
      width: 4.909,
      height: 5.642,
      color: "rgb(235,243,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.698 5.642 C 0.586 5.642 0.474 5.558 0.446 5.446 C -0.227 3.287 -0.143 1.745 0.726 0.848 C 2.044 -0.525 4.595 0.175 4.707 0.203 C 4.848 0.231 4.932 0.4 4.904 0.54 C 4.876 0.68 4.707 0.764 4.567 0.736 C 4.539 0.736 2.212 0.091 1.147 1.213 C 0.446 1.942 0.39 3.315 1.007 5.25 C 1.063 5.39 0.979 5.558 0.839 5.614 C 0.754 5.642 0.726 5.642 0.698 5.642 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.256,
    height: 14.341,
    viewBox: "0 0 12.256 14.341",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.698,
      top: 51.111,
      width: 12.256,
      height: 14.341,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.298 14.341 C 0.27 14.341 0.242 14.341 0.186 14.313 C 0.046 14.257 -0.039 14.089 0.018 13.948 C 2.064 8.734 11.4 0.436 11.792 0.071 C 11.904 -0.041 12.072 -0.013 12.184 0.099 C 12.297 0.212 12.269 0.38 12.156 0.492 C 12.072 0.576 2.513 9.07 0.522 14.145 C 0.522 14.285 0.41 14.341 0.298 14.341 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.410,
    height: 9.495,
    viewBox: "0 0 4.410 9.495",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.436,
      top: 63.947,
      width: 4.41,
      height: 9.495,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.27 9.495 C 0.242 9.495 0.214 9.495 0.186 9.467 C 0.046 9.411 -0.039 9.271 0.018 9.102 C 0.102 8.85 2.204 2.711 3.886 0.131 C 3.97 -0.009 4.139 -0.037 4.279 0.047 C 4.419 0.131 4.447 0.3 4.363 0.44 C 2.737 2.991 0.578 9.243 0.55 9.299 C 0.494 9.439 0.382 9.495 0.27 9.495 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.800,
    height: 28.797,
    viewBox: "0 0 5.800 28.797",
    fill: "none",
    style: {
      position: "absolute",
      left: 64.757,
      top: 63.036,
      width: 5.8,
      height: 28.797,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.57 0.005 C 5.43 -0.023 5.262 0.061 5.234 0.202 C 5.234 0.258 4.421 3.594 3.776 10.014 C 2.907 4.042 0.552 0.37 0.524 0.314 C 0.44 0.174 0.272 0.146 0.131 0.23 C -0.009 0.314 -0.037 0.482 0.047 0.622 C 0.075 0.678 3.131 5.36 3.496 12.817 C 3.496 12.845 3.496 12.901 3.524 12.929 C 3.187 17.134 2.963 22.321 3.019 28.516 C 3.019 28.656 3.131 28.797 3.299 28.797 C 3.439 28.797 3.58 28.656 3.58 28.516 C 3.439 10.07 5.766 0.426 5.794 0.314 C 5.822 0.202 5.738 0.061 5.57 0.005 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.211,
    height: 2.935,
    viewBox: "0 0 1.211 2.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.944,
      top: 82.057,
      width: 1.211,
      height: 2.935,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.939 2.935 C 0.883 2.935 0.827 2.907 0.771 2.879 C -0.406 2.094 0.014 0.748 0.407 0.131 C 0.491 -0.009 0.659 -0.037 0.799 0.047 C 0.939 0.131 0.967 0.3 0.883 0.44 C 0.855 0.496 0.07 1.757 1.08 2.43 C 1.22 2.514 1.248 2.683 1.164 2.823 C 1.108 2.907 1.023 2.935 0.939 2.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.211,
    height: 2.935,
    viewBox: "0 0 1.211 2.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 123.965,
      top: 39.109,
      width: 1.211,
      height: 2.935,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.272 2.935 C 0.187 2.935 0.103 2.879 0.047 2.823 C -0.037 2.683 -0.009 2.514 0.131 2.43 C 1.141 1.757 0.356 0.496 0.328 0.44 C 0.244 0.3 0.272 0.131 0.412 0.047 C 0.552 -0.037 0.72 -0.009 0.804 0.131 C 1.197 0.748 1.617 2.094 0.44 2.879 C 0.384 2.935 0.328 2.935 0.272 2.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.211,
    height: 2.935,
    viewBox: "0 0 1.211 2.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 123.124,
      top: 35.632,
      width: 1.211,
      height: 2.935,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.272 2.935 C 0.187 2.935 0.103 2.879 0.047 2.823 C -0.037 2.683 -0.009 2.514 0.131 2.43 C 1.141 1.757 0.356 0.496 0.328 0.44 C 0.244 0.3 0.272 0.131 0.412 0.047 C 0.552 -0.037 0.72 -0.009 0.804 0.131 C 1.197 0.748 1.617 2.094 0.44 2.879 C 0.384 2.907 0.328 2.935 0.272 2.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.211,
    height: 2.935,
    viewBox: "0 0 1.211 2.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 125.227,
      top: 35.212,
      width: 1.211,
      height: 2.935,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.272 2.935 C 0.187 2.935 0.103 2.879 0.047 2.823 C -0.037 2.683 -0.009 2.514 0.131 2.43 C 1.141 1.757 0.356 0.496 0.328 0.44 C 0.244 0.3 0.272 0.131 0.412 0.047 C 0.552 -0.037 0.72 -0.009 0.804 0.131 C 1.197 0.748 1.617 2.094 0.44 2.879 C 0.356 2.907 0.328 2.935 0.272 2.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.211,
    height: 2.935,
    viewBox: "0 0 1.211 2.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 123.545,
      top: 32.128,
      width: 1.211,
      height: 2.935,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.272 2.935 C 0.187 2.935 0.103 2.879 0.047 2.823 C -0.037 2.683 -0.009 2.514 0.131 2.43 C 1.141 1.757 0.356 0.496 0.328 0.44 C 0.244 0.3 0.272 0.131 0.412 0.047 C 0.552 -0.037 0.72 -0.009 0.804 0.131 C 1.197 0.748 1.617 2.094 0.44 2.879 C 0.384 2.935 0.328 2.935 0.272 2.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.122,
    height: 2.945,
    viewBox: "0 0 1.122 2.945",
    fill: "none",
    style: {
      position: "absolute",
      left: 125.161,
      top: 30.071,
      width: 1.122,
      height: 2.945,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.282 2.945 C 0.198 2.945 0.113 2.917 0.057 2.833 C -0.027 2.721 -0.027 2.524 0.113 2.44 C 1.067 1.683 0.17 0.478 0.141 0.45 C 0.057 0.338 0.057 0.141 0.198 0.057 C 0.31 -0.027 0.506 -0.027 0.59 0.113 C 1.039 0.674 1.571 1.992 0.478 2.889 C 0.422 2.917 0.366 2.945 0.282 2.945 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.211,
    height: 2.935,
    viewBox: "0 0 1.211 2.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.047,
      top: 83.599,
      width: 1.211,
      height: 2.935,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.939 2.935 C 0.883 2.935 0.827 2.907 0.771 2.879 C -0.406 2.094 0.014 0.748 0.407 0.131 C 0.491 -0.009 0.659 -0.037 0.799 0.047 C 0.939 0.131 0.967 0.3 0.883 0.44 C 0.855 0.496 0.07 1.757 1.08 2.43 C 1.22 2.514 1.248 2.683 1.164 2.823 C 1.108 2.879 1.023 2.935 0.939 2.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.211,
    height: 2.935,
    viewBox: "0 0 1.211 2.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.224,
      top: 86.374,
      width: 1.211,
      height: 2.935,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.939 2.935 C 0.883 2.935 0.827 2.907 0.771 2.879 C -0.406 2.094 0.014 0.748 0.407 0.131 C 0.491 -0.009 0.659 -0.037 0.799 0.047 C 0.939 0.131 0.967 0.3 0.883 0.44 C 0.855 0.496 0.07 1.757 1.08 2.43 C 1.22 2.514 1.248 2.683 1.164 2.823 C 1.108 2.907 1.023 2.935 0.939 2.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.211,
    height: 2.935,
    viewBox: "0 0 1.211 2.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.346,
      top: 79.702,
      width: 1.211,
      height: 2.935,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.939 2.935 C 0.883 2.935 0.827 2.907 0.771 2.879 C -0.406 2.094 0.014 0.748 0.407 0.131 C 0.491 -0.009 0.659 -0.037 0.799 0.047 C 0.939 0.131 0.967 0.3 0.883 0.44 C 0.855 0.496 0.07 1.757 1.08 2.43 C 1.22 2.514 1.248 2.683 1.164 2.823 C 1.108 2.879 1.023 2.935 0.939 2.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.211,
    height: 2.935,
    viewBox: "0 0 1.211 2.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 105.322,
      top: 80.655,
      width: 1.211,
      height: 2.935,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.272 2.935 C 0.187 2.935 0.103 2.879 0.047 2.823 C -0.037 2.683 -0.009 2.514 0.131 2.43 C 1.141 1.757 0.356 0.496 0.328 0.44 C 0.244 0.3 0.272 0.131 0.412 0.047 C 0.552 -0.037 0.72 -0.009 0.804 0.131 C 1.197 0.748 1.617 2.094 0.44 2.879 C 0.384 2.935 0.328 2.935 0.272 2.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.211,
    height: 2.935,
    viewBox: "0 0 1.211 2.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 103.248,
      top: 82.197,
      width: 1.211,
      height: 2.935,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.272 2.935 C 0.187 2.935 0.103 2.879 0.047 2.823 C -0.037 2.683 -0.009 2.514 0.131 2.43 C 1.141 1.757 0.356 0.496 0.328 0.44 C 0.244 0.3 0.272 0.131 0.412 0.047 C 0.552 -0.037 0.72 -0.009 0.804 0.131 C 1.197 0.748 1.617 2.094 0.44 2.879 C 0.384 2.935 0.328 2.935 0.272 2.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.211,
    height: 2.935,
    viewBox: "0 0 1.211 2.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 105.042,
      top: 85.001,
      width: 1.211,
      height: 2.935,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.272 2.935 C 0.187 2.935 0.103 2.879 0.047 2.823 C -0.037 2.683 -0.009 2.514 0.131 2.43 C 1.141 1.757 0.356 0.496 0.328 0.44 C 0.244 0.3 0.272 0.131 0.412 0.047 C 0.552 -0.037 0.72 -0.009 0.804 0.131 C 1.197 0.748 1.617 2.094 0.44 2.879 C 0.384 2.907 0.328 2.935 0.272 2.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.211,
    height: 2.935,
    viewBox: "0 0 1.211 2.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 103.949,
      top: 78.3,
      width: 1.211,
      height: 2.935,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.272 2.935 C 0.187 2.935 0.103 2.879 0.047 2.823 C -0.037 2.683 -0.009 2.514 0.131 2.43 C 1.141 1.757 0.356 0.496 0.328 0.44 C 0.244 0.3 0.272 0.131 0.412 0.047 C 0.552 -0.037 0.72 -0.009 0.804 0.131 C 1.197 0.748 1.617 2.094 0.44 2.879 C 0.356 2.907 0.328 2.935 0.272 2.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.228,
    height: 13.132,
    viewBox: "0 0 9.228 13.132",
    fill: "none",
    style: {
      position: "absolute",
      left: 104.573,
      top: 50.807,
      width: 9.228,
      height: 13.132,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.926 13.132 C 8.87 13.132 8.814 13.104 8.758 13.075 C 6.095 11.113 0.292 0.881 0.04 0.432 C -0.045 0.292 0.011 0.124 0.152 0.04 C 0.292 -0.045 0.46 0.011 0.544 0.152 C 0.6 0.264 6.543 10.721 9.123 12.627 C 9.235 12.711 9.263 12.879 9.179 13.019 C 9.095 13.104 9.01 13.132 8.926 13.132 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.943,
    height: 10.329,
    viewBox: "0 0 3.943 10.329",
    fill: "none",
    style: {
      position: "absolute",
      left: 103.17,
      top: 62.524,
      width: 3.943,
      height: 10.329,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.629 10.329 L 3.601 10.329 C 3.461 10.301 3.349 10.161 3.349 10.021 C 3.741 6.657 0.069 0.489 0.04 0.433 C -0.044 0.293 0.012 0.125 0.125 0.04 C 0.265 -0.044 0.433 0.012 0.517 0.125 C 0.685 0.377 4.33 6.516 3.909 10.049 C 3.881 10.245 3.769 10.329 3.629 10.329 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 29.905,
      top: 96.438,
      width: 69,
      height: 14,
      fontFamily: "SVN-Cookies, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.530088424682617,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 0.9828906059265137,
      color: "rgb(0,0,0)"
    }
  }, props.text1 ?? "Xuất sắc!"), /*#__PURE__*/React.createElement("svg", {
    width: 9.307,
    height: 9.335,
    viewBox: "0 0 9.307 9.335",
    fill: "none",
    style: {
      position: "absolute",
      left: 121.108,
      top: 3.084,
      width: 9.307,
      height: 9.335,
      color: "rgb(255,155,75)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.71 4.598 L 0 1.29 L 3.392 2.215 L 5.691 0 L 6.42 2.859 L 9.307 4.542 L 6.532 5.803 L 6.083 9.335 L 3.701 6.504 L 0.533 7.513 L 1.71 4.598 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.777,
    height: 4.777,
    viewBox: "0 0 4.777 4.777",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.925,
      top: 93.915,
      width: 4.777,
      height: 4.777,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.373 4.777 C 1.058 4.777 0 3.687 0 2.373 C 0 1.058 1.09 0 2.373 0 C 3.014 0 3.623 0.257 4.072 0.705 C 4.521 1.154 4.777 1.763 4.777 2.405 C 4.745 3.719 3.687 4.777 2.373 4.777 Z M 2.373 0.705 C 1.443 0.705 0.673 1.475 0.673 2.405 C 0.673 3.335 1.411 4.104 2.373 4.104 L 2.373 4.457 L 2.373 4.104 C 3.303 4.104 4.072 3.335 4.072 2.405 C 4.072 1.956 3.912 1.539 3.591 1.218 C 3.27 0.866 2.854 0.705 2.373 0.705 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.256,
    height: 6.541,
    viewBox: "0 0 6.256 6.541",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 3.084,
      width: 6.256,
      height: 6.541,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.932 2.79 L 4.585 2.79 L 5.996 1.828 C 6.156 1.731 6.188 1.507 6.092 1.347 C 5.996 1.186 5.771 1.154 5.611 1.25 L 3.719 2.565 L 3.719 0.353 C 3.719 0.16 3.559 0 3.367 0 C 3.174 0 3.014 0.16 3.014 0.353 L 3.014 2.309 L 1.828 1.058 C 1.699 0.93 1.475 0.898 1.347 1.058 C 1.218 1.186 1.218 1.411 1.347 1.539 L 2.565 2.822 L 0.353 2.854 C 0.16 2.854 0 3.014 0 3.206 C 0 3.399 0.16 3.559 0.353 3.559 L 2.373 3.527 L 0.802 4.617 C 0.641 4.713 0.609 4.938 0.705 5.098 C 0.77 5.194 0.866 5.258 0.994 5.258 C 1.058 5.258 1.122 5.226 1.186 5.194 L 2.982 3.944 L 2.982 6.188 C 2.982 6.381 3.142 6.541 3.335 6.541 C 3.527 6.541 3.687 6.381 3.687 6.188 L 3.687 4.072 L 4.938 5.419 C 5.002 5.483 5.098 5.515 5.194 5.515 C 5.29 5.515 5.355 5.483 5.419 5.419 C 5.547 5.29 5.547 5.066 5.419 4.938 L 4.104 3.559 L 5.9 3.527 C 6.092 3.527 6.252 3.367 6.252 3.174 C 6.284 2.918 6.124 2.79 5.932 2.79 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.684,
    height: 7.791,
    viewBox: "0 0 7.684 7.791",
    fill: "none",
    style: {
      position: "absolute",
      left: 103.166,
      top: 95.877,
      width: 7.684,
      height: 7.791,
      color: "rgb(38,29,42)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.764 7.791 C 3.507 7.791 3.283 7.791 2.61 5.13 C 0.333 4.681 0.141 4.425 0.077 4.329 C 0.013 4.232 -0.019 4.072 0.013 3.976 C 0.045 3.816 0.141 3.495 2.738 2.437 C 3.668 0 3.988 0 4.181 0 C 4.277 0 4.437 0.064 4.501 0.16 C 4.662 0.385 4.822 0.962 5.047 1.892 C 5.111 2.18 5.207 2.533 5.271 2.693 C 5.399 2.757 5.72 2.854 5.944 2.95 C 7.291 3.431 7.612 3.591 7.676 3.912 C 7.708 4.04 7.644 4.2 7.547 4.296 C 7.291 4.553 5.976 5.002 5.303 5.258 C 4.245 7.759 3.988 7.759 3.764 7.791 C 3.764 7.791 3.796 7.791 3.764 7.791 Z M 0.942 4.008 C 1.391 4.136 2.225 4.329 2.93 4.457 C 3.059 4.489 3.155 4.585 3.187 4.713 C 3.379 5.451 3.604 6.316 3.796 6.797 C 4.053 6.349 4.437 5.547 4.726 4.842 C 4.758 4.745 4.822 4.681 4.918 4.649 C 5.527 4.425 6.233 4.168 6.65 3.976 C 6.361 3.848 5.944 3.687 5.656 3.591 C 4.886 3.303 4.758 3.27 4.662 3.142 C 4.566 3.014 4.534 2.822 4.341 2.052 C 4.277 1.763 4.149 1.315 4.053 0.994 C 3.828 1.411 3.507 2.148 3.251 2.822 C 3.219 2.918 3.155 2.982 3.059 3.014 C 2.321 3.335 1.423 3.751 0.942 4.008 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Type=Avatar, state=Thank you 3000
    "type=avatar|state=thank you 3000": __body0,
    // figma: Type=Avatar, state=Cam on nhiu
    "type=avatar|state=cam on nhiu": __body1,
    // figma: Type=Avatar, state=Thich gi tui bao
    "type=avatar|state=thich gi tui bao": __body2,
    // figma: Type=Avatar, state=Tha tim chiu chiu
    "type=avatar|state=tha tim chiu chiu": __body3,
    // figma: Type=Avatar, state=On gioi 
    "type=avatar|state=on gioi": __body4,
    // figma: Type=Avatar, state=Trieu Like
    "type=avatar|state=trieu like": __body5,
    // figma: Type=Avatar, state=Dang. Cap
    "type=avatar|state=dang. cap": __body6,
    // figma: Type=Avatar, state=Xuất sắc
    "type=avatar|state=xuất sắc": __body7
  };
  return (__impls[__vkey_Avatar(props)] ?? __body0)();
}

// figma node: 2384:65763 badge (3 variants)
const __venc_Badge5 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Badge5 = p => "property1=" + __venc_Badge5(p.property1);
function Badge5(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "badge"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(222,255,238)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
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
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(102,203,159)",
      flexShrink: 0
    }
  }, props.text1 ?? "Phó phòng"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.333,
    height: 13.333,
    viewBox: "0 0 13.333 13.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 1.333,
      width: 13.333,
      height: 13.333,
      color: "rgb(102,203,159)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.667 0 C 2.98 0 0 2.98 0 6.667 C 0 10.353 2.98 13.333 6.667 13.333 C 10.353 13.333 13.333 10.353 13.333 6.667 C 13.333 2.98 10.353 0 6.667 0 Z M 9.533 9.533 C 9.273 9.793 8.853 9.793 8.593 9.533 L 6.667 7.607 L 4.74 9.533 C 4.48 9.793 4.06 9.793 3.8 9.533 C 3.54 9.273 3.54 8.853 3.8 8.593 L 5.727 6.667 L 3.8 4.74 C 3.54 4.48 3.54 4.06 3.8 3.8 C 4.06 3.54 4.48 3.54 4.74 3.8 L 6.667 5.727 L 8.593 3.8 C 8.853 3.54 9.273 3.54 9.533 3.8 C 9.793 4.06 9.793 4.48 9.533 4.74 L 7.607 6.667 L 9.533 8.593 C 9.787 8.847 9.787 9.273 9.533 9.533 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(20,20,43)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "1px 8px 1px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
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
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(102,203,159)",
      flexShrink: 0
    }
  }, props.text1 ?? "Phó phòng"))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      borderRadius: 16,
      backgroundColor: "rgb(20,20,43)",
      boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "1px 8px 1px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
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
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "+2"))));
  const __impls = {
    // figma: Property 1= close
    "property1=close": __body0,
    // figma: Property 1=Badge
    "property1=badge": __body1,
    // figma: Property 1=More
    "property1=more": __body2
  };
  return (__impls[__vkey_Badge5(props)] ?? __body1)();
}

// figma node: 7086:154662 Toogle (2 variants)
const __venc_Toogle = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Toogle = p => "property1=" + __venc_Toogle(p.property1);
function Toogle(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "bật"
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
      width: 48,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 23,
      borderRadius: 100,
      backgroundColor: "rgb(0,0,154)",
      boxShadow: "0 0 0 2px rgb(0,0,154), inset 0px 3px 20px 0px rgba(0,0,0,0.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25,
      top: 0,
      width: 23,
      height: 23,
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0 0 0 2px rgb(0,0,154)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Text"));
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
      width: 48,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 23,
      borderRadius: 100,
      backgroundColor: "rgb(0,0,154)",
      boxShadow: "0 0 0 2px rgb(0,0,154), inset 0px 3px 20px 0px rgba(0,0,0,0.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23,
      height: 23,
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0 0 0 2px rgb(0,0,154)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Text"));
  const __impls = {
    // figma: Property 1=bật
    "property1=bật": __body0,
    // figma: Property 1=tắt
    "property1=tắt": __body1
  };
  return (__impls[__vkey_Toogle(props)] ?? __body0)();
}

// figma node: 3417:90790 Tab (6 variants)
const __venc_Tab2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Tab2 = p => "choose=" + __venc_Tab2(p.choose) + '|' + "placement=" + __venc_Tab2(p.placement);
function Tab2(_p = {}) {
  const props = {
    ..._p,
    choose: _p.choose ?? true,
    placement: _p.placement ?? "left"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 131,
      height: 38,
      borderRadius: "16px 0px 0px 0px",
      backgroundColor: "rgb(217,219,233)",
      boxShadow: "5px 4px 10px 0px rgba(33,45,73,0.05), inset 0px -1px 0px 0px rgb(237,242,247)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, props.text1 ?? "Chi nhánh"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 131,
      height: 38,
      borderRadius: "0px 16px 0px 0px",
      backgroundColor: "rgb(217,219,233)",
      boxShadow: "5px 4px 10px 0px rgba(33,45,73,0.05), inset 0px -1px 0px 0px rgb(237,242,247)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, props.text1 ?? "Chi nhánh"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 131,
      height: 38,
      backgroundColor: "rgb(217,219,233)",
      boxShadow: "5px 4px 10px 0px rgba(33,45,73,0.05), inset 0px -1px 0px 0px rgb(237,242,247)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "rgb(110,113,145)",
      flexShrink: 0
    }
  }, props.text1 ?? "Chi nhánh"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 131,
      height: 38,
      borderRadius: "16px 0px 0px 0px",
      backgroundColor: "rgb(20,30,210)",
      boxShadow: "5px 0px 10px 0px rgba(33,45,73,0.25), inset 0px -1px 0px 0px rgb(237,242,247)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Ho"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 131,
      height: 38,
      borderRadius: "0px 16px 0px 0px",
      backgroundColor: "rgb(20,30,210)",
      boxShadow: "5px 0px 10px 0px rgba(33,45,73,0.25), inset 0px -1px 0px 0px rgb(237,242,247)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Ho"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 131,
      height: 38,
      backgroundColor: "rgb(20,30,210)",
      boxShadow: "5px 0px 10px 0px rgba(33,45,73,0.25), inset 0px -1px 0px 0px rgb(237,242,247)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Averta Std CY\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Ho"));
  const __impls = {
    // figma: Choose=No, Placement=Left
    "choose=false|placement=left": __body0,
    // figma: Choose=No, Placement=Right
    "choose=false|placement=right": __body1,
    // figma: Choose=No, Placement=Center
    "choose=false|placement=center": __body2,
    // figma: Choose=Yes, Placement=Left
    "choose=true|placement=left": __body3,
    // figma: Choose=Yes, Placement=Right
    "choose=true|placement=right": __body4,
    // figma: Choose=Yes, Placement=Center
    "choose=true|placement=center": __body5
  };
  return (__impls[__vkey_Tab2(props)] ?? __body3)();
}

// Globals for scripts loaded after this file.
window.Avatar = Avatar;
window.Badge5 = Badge5;
window.Toogle = Toogle;
window.Tab2 = Tab2;