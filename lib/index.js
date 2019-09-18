"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var d3 = _interopRequireWildcard(require("d3"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_MAX_COLOR = "#ff0000";

var SVGHeatMap =
/*#__PURE__*/
function () {
  function SVGHeatMap() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SVGHeatMap);

    this.maxColor = props.maxColor || DEFAULT_MAX_COLOR;
  }

  _createClass(SVGHeatMap, [{
    key: "setData",
    value: function setData(dataArray) {
      this.data = dataArray;
      return this;
    }
  }, {
    key: "render",
    value: function render(target) {
      console.log("rendering heatmap to ".concat(target, " -> with color ").concat(this.maxColor));
    }
  }]);

  return SVGHeatMap;
}();

exports["default"] = SVGHeatMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX01BWF9DT0xPUiIsIlNWR0hlYXRNYXAiLCJwcm9wcyIsIm1heENvbG9yIiwiZGF0YUFycmF5IiwiZGF0YSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBMUI7O0lBRXFCQyxVOzs7QUFDbkIsd0JBQXdCO0FBQUEsUUFBWkMsS0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUN0QixTQUFLQyxRQUFMLEdBQWdCRCxLQUFLLENBQUNDLFFBQU4sSUFBa0JILGlCQUFsQztBQUNEOzs7OzRCQUVPSSxTLEVBQVc7QUFDakIsV0FBS0MsSUFBTCxHQUFZRCxTQUFaO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OzsyQkFFTUUsTSxFQUFRO0FBQ2JDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQ0FDMEJGLE1BRDFCLDRCQUNrRCxLQUFLSCxRQUR2RDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5cbmNvbnN0IERFRkFVTFRfTUFYX0NPTE9SID0gXCIjZmYwMDAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWR0hlYXRNYXAge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgdGhpcy5tYXhDb2xvciA9IHByb3BzLm1heENvbG9yIHx8IERFRkFVTFRfTUFYX0NPTE9SO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhQXJyYXkpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhQXJyYXk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIodGFyZ2V0KSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgcmVuZGVyaW5nIGhlYXRtYXAgdG8gJHt0YXJnZXR9IC0+IHdpdGggY29sb3IgJHt0aGlzLm1heENvbG9yfWBcbiAgICApO1xuICB9XG59XG4iXX0=