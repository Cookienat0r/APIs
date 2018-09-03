var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var
MyComponent = function (_React$Component) {_inherits(MyComponent, _React$Component);
  function MyComponent(props) {_classCallCheck(this, MyComponent);var _this = _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this,
    props));
    _this.state = {
      items: [],
      isLoaded: false };return _this;

  }_createClass(MyComponent, [{ key: "componentDidMount", value: function componentDidMount()

    {var _this2 = this;
      fetch('https://ghibliapi.herokuapp.com/films').
      then(function (res) {return res.json();}).
      then(function (json) {
        console.log("data returned: ", json);
        _this2.setState({
          isLoaded: true,
          items: json });

      });
    } }, { key: "render", value: function render()


    {var _state =
      this.state,isLoaded = _state.isLoaded,items = _state.items;

      if (!isLoaded) {
        return React.createElement("div", null, "..Loading..");
      } else {

        return (
          React.createElement("div", { className: "list" },
            React.createElement("img", { src: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/300px-Studio_Ghibli_logo.svg.png', alt: "logo" }),
            React.createElement("h1", null, "Studio Ghibli Films"),
            React.createElement("ul", null,
              items.map(function (item) {return (
                  React.createElement("li", { key: item.id },
                    React.createElement("div", { className: "title" }, React.createElement("h4", null, "Title: "),
                      React.createElement("p", null, "\"", item.title, "\"")),

                    React.createElement("div", { className: "date" }, React.createElement("h4", null, "Resease Date: "),
                      item.release_date)));}))));







      }
    } }]);return MyComponent;}(React.Component);
;

/////////////////
React.render(React.createElement(MyComponent, null), document.getElementById('app'));