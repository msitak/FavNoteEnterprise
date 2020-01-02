(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    153(module, exports, __webpack_require__) {
      module.exports = `${__webpack_require__.p}static/media/bulb.af737b55.svg`;
    },
    154(module, exports, __webpack_require__) {
      module.exports = `${__webpack_require__.p}static/media/logout.0969c92b.svg`;
    },
    155(module, exports, __webpack_require__) {
      module.exports = `${__webpack_require__.p}static/media/pen.84b70f8a.svg`;
    },
    156(module, exports, __webpack_require__) {
      module.exports = `${__webpack_require__.p}static/media/twitter.051af8ba.svg`;
    },
    35(module, __webpack_exports__, __webpack_require__) {
      const _Users_michael_Desktop_repos_favnote_FavNoteEnterprise_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        4,
      );
      function _templateObject() {
        const data = Object(
          _Users_michael_Desktop_repos_favnote_FavNoteEnterprise_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )([
          '\n  display: block;\n  width: 67px;\n  height: 67px;\n  border-radius: 20px;\n  background-image: url(',
          ');\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 40%;\n  border: none;\n  background-color: ',
          ';\n',
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const ButtonIcon = __webpack_require__(3).c.button(
        _templateObject(),
        (_ref) => _ref.icon,
        (_ref2) => (_ref2.active ? 'white' : 'transparent'),
      );
      __webpack_exports__.a = ButtonIcon;
    },
    365(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.d(__webpack_exports__, 'a', () => theme);
      var theme = {
        note: 'hsl(49, 100%, 58%)',
        twitter: 'hsl(196, 83%, 75%)',
        article: 'hsl(106, 47%, 64%)',
        grey100: 'hsl(0, 0%, 96%)',
        grey200: 'hsl(0, 0%, 90%)',
        grey300: 'hsl(0, 0%, 70%)',
        black: 'hsl(0, 0%, 0%)',
        light: 300,
        bold: 600,
        fontSize: {
          xxs: '1rem', xs: '1.2rem', s: '1.6rem', m: '2.1rem', l: '2.4rem', xl: '4rem',
        },
      };
    },
    368(module, exports, __webpack_require__) {
      module.exports = `${__webpack_require__.p}static/media/plus.e43ce6c8.svg`;
    },
    369(module, exports, __webpack_require__) {
      module.exports = `${__webpack_require__.p}static/media/magnifier.a14461b8.svg`;
    },
    370(module, exports, __webpack_require__) {
      module.exports = `${__webpack_require__.p}static/media/link.6fc1d8fe.svg`;
    },
    374(module, exports, __webpack_require__) {
      module.exports = `${__webpack_require__.p}static/media/logo.93d4f3ba.svg`;
    },
    377(module, exports, __webpack_require__) {
      __webpack_require__(378),
      __webpack_require__(520),
      (module.exports = __webpack_require__(521));
    },
    439(module, exports) {},
    521(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
      function (module) {
        const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
        const react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        const _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(219);
        const styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
        const _src_theme_mainTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(365);
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)((story) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          styled_components__WEBPACK_IMPORTED_MODULE_2__.a,
          { theme: _src_theme_mainTheme__WEBPACK_IMPORTED_MODULE_3__.a },
          story(),
        )),
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(
          __webpack_require__(766),
          module,
        );
      }.call(this, __webpack_require__(522)(module));
    },
    766(module, exports, __webpack_require__) {
      const map = {
        './atoms/Button/Button.stories.js': 767,
        './atoms/ButtonIcon/ButtonIcon.stories.js': 802,
        './atoms/Heading/Heading.stories.js': 803,
        './atoms/Input/Input.stories.js': 820,
        './atoms/Paragraph/Paragraph.stories.js': 804,
        './molecules/Card/Card.stories.js': 821,
        './organisms/Sidebar/Sidebar.stories.js': 822,
      };
      function webpackContext(req) {
        const id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          const e = new Error(`Cannot find module '${req}'`);
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
      (webpackContext.resolve = webpackContextResolve),
      (module.exports = webpackContext),
      (webpackContext.id = 766);
    },
    767(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
      __webpack_require__.d(__webpack_exports__, 'Primary', () => Primary),
      __webpack_require__.d(__webpack_exports__, 'Secondary', () => Secondary);
      const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
      const react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );
      const _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
      const _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
      __webpack_exports__.default = {
        component: _Button__WEBPACK_IMPORTED_MODULE_2__.a,
        title: 'Atoms/Button',
        decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs],
      };
      var Primary = function Primary() {
        const value = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)(
          'Colors',
          {
            Primary: 'hsl(49, 100%, 58%)',
            Secondary: 'hsl(196, 83%, 75%)',
            Tertiary: 'hsl(106, 100%, 58%)',
          },
          'hsl(49, 100%, 58%)',
          'GROUP-ID1',
        );
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _Button__WEBPACK_IMPORTED_MODULE_2__.a,
          { color: value },
          'Hello Primary',
        );
      };
      var Secondary = function Secondary() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _Button__WEBPACK_IMPORTED_MODULE_2__.a,
          { secondary: !0 },
          'Hello',
        );
      };
      (Primary.__docgenInfo = { description: '', methods: [], displayName: 'Primary' }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/atoms/Button/Button.stories.js'] = {
            name: 'Primary',
            docgenInfo: Primary.__docgenInfo,
            path: 'src/components/atoms/Button/Button.stories.js',
          }),
      (Secondary.__docgenInfo = { description: '', methods: [], displayName: 'Secondary' }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/atoms/Button/Button.stories.js'] = {
            name: 'Secondary',
            docgenInfo: Secondary.__docgenInfo,
            path: 'src/components/atoms/Button/Button.stories.js',
          });
    },
    802(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
      __webpack_require__.d(__webpack_exports__, 'Bulb', () => Bulb),
      __webpack_require__.d(__webpack_exports__, 'Logout', () => Logout),
      __webpack_require__.d(__webpack_exports__, 'Pen', () => Pen),
      __webpack_require__.d(__webpack_exports__, 'Plus', () => Plus),
      __webpack_require__.d(__webpack_exports__, 'Twitter', () => Twitter);
      const _Users_michael_Desktop_repos_favnote_FavNoteEnterprise_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        4,
      );
      const react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
      const react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__,
      );
      const styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
      const assets_icons_bulb_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(153);
      const assets_icons_bulb_svg__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
        assets_icons_bulb_svg__WEBPACK_IMPORTED_MODULE_3__,
      );
      const assets_icons_logout_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(154);
      const assets_icons_logout_svg__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
        assets_icons_logout_svg__WEBPACK_IMPORTED_MODULE_4__,
      );
      const assets_icons_pen_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(155);
      const assets_icons_pen_svg__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
        assets_icons_pen_svg__WEBPACK_IMPORTED_MODULE_5__,
      );
      const assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(368);
      const assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
        assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_6__,
      );
      const assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(156);
      const assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
        assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_7__,
      );
      const _ButtonIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
      function _templateObject() {
        const data = Object(
          _Users_michael_Desktop_repos_favnote_FavNoteEnterprise_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )([
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 500px;\n  height: 500px;\n  background: ',
          ';\n',
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const YellowBackground = styled_components__WEBPACK_IMPORTED_MODULE_2__.c.div(
        _templateObject(),
        (_ref) => _ref.theme.note,
      );
      __webpack_exports__.default = {
        title: 'Atoms/ButtonIcon',
        component: _ButtonIcon__WEBPACK_IMPORTED_MODULE_8__.a,
        decorators: [
          function (story) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              YellowBackground,
              null,
              story(),
            );
          },
        ],
      };
      var Bulb = function Bulb() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ButtonIcon__WEBPACK_IMPORTED_MODULE_8__.a,
          { icon: assets_icons_bulb_svg__WEBPACK_IMPORTED_MODULE_3___default.a },
        );
      };
      var Logout = function Logout() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ButtonIcon__WEBPACK_IMPORTED_MODULE_8__.a,
          { icon: assets_icons_logout_svg__WEBPACK_IMPORTED_MODULE_4___default.a },
        );
      };
      var Pen = function Pen() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ButtonIcon__WEBPACK_IMPORTED_MODULE_8__.a,
          { icon: assets_icons_pen_svg__WEBPACK_IMPORTED_MODULE_5___default.a },
        );
      };
      var Plus = function Plus() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ButtonIcon__WEBPACK_IMPORTED_MODULE_8__.a,
          { icon: assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_6___default.a },
        );
      };
      var Twitter = function Twitter() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ButtonIcon__WEBPACK_IMPORTED_MODULE_8__.a,
          { icon: assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_7___default.a },
        );
      };
      (Bulb.__docgenInfo = { description: '', methods: [], displayName: 'Bulb' }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/atoms/ButtonIcon/ButtonIcon.stories.js'] = {
            name: 'Bulb',
            docgenInfo: Bulb.__docgenInfo,
            path: 'src/components/atoms/ButtonIcon/ButtonIcon.stories.js',
          }),
      (Logout.__docgenInfo = { description: '', methods: [], displayName: 'Logout' }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/atoms/ButtonIcon/ButtonIcon.stories.js'] = {
            name: 'Logout',
            docgenInfo: Logout.__docgenInfo,
            path: 'src/components/atoms/ButtonIcon/ButtonIcon.stories.js',
          }),
      (Pen.__docgenInfo = { description: '', methods: [], displayName: 'Pen' }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/atoms/ButtonIcon/ButtonIcon.stories.js'] = {
            name: 'Pen',
            docgenInfo: Pen.__docgenInfo,
            path: 'src/components/atoms/ButtonIcon/ButtonIcon.stories.js',
          }),
      (Plus.__docgenInfo = { description: '', methods: [], displayName: 'Plus' }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/atoms/ButtonIcon/ButtonIcon.stories.js'] = {
            name: 'Plus',
            docgenInfo: Plus.__docgenInfo,
            path: 'src/components/atoms/ButtonIcon/ButtonIcon.stories.js',
          }),
      (Twitter.__docgenInfo = { description: '', methods: [], displayName: 'Twitter' }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/atoms/ButtonIcon/ButtonIcon.stories.js'] = {
            name: 'Twitter',
            docgenInfo: Twitter.__docgenInfo,
            path: 'src/components/atoms/ButtonIcon/ButtonIcon.stories.js',
          });
    },
    803(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
      __webpack_require__.d(__webpack_exports__, 'Bigger', () => Bigger),
      __webpack_require__.d(__webpack_exports__, 'Smaller', () => Smaller);
      const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
      const react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );
      const _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
      const _Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85);
      __webpack_exports__.default = {
        component: _Heading__WEBPACK_IMPORTED_MODULE_2__.a,
        title: 'Atoms/Heading',
        decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs],
      };
      var Bigger = function Bigger() {
        const value = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)(
          'Text',
          'Hello World',
          'GROUP-ID1',
        );
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _Heading__WEBPACK_IMPORTED_MODULE_2__.a,
          { big: !0 },
          value,
        );
      };
      var Smaller = function Smaller() {
        const value = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)(
          'Text',
          'Hello World',
          'GROUP-ID1',
        );
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _Heading__WEBPACK_IMPORTED_MODULE_2__.a,
          null,
          value,
        );
      };
      (Bigger.__docgenInfo = { description: '', methods: [], displayName: 'Bigger' }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/atoms/Heading/Heading.stories.js'] = {
            name: 'Bigger',
            docgenInfo: Bigger.__docgenInfo,
            path: 'src/components/atoms/Heading/Heading.stories.js',
          }),
      (Smaller.__docgenInfo = { description: '', methods: [], displayName: 'Smaller' }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/atoms/Heading/Heading.stories.js'] = {
            name: 'Smaller',
            docgenInfo: Smaller.__docgenInfo,
            path: 'src/components/atoms/Heading/Heading.stories.js',
          });
    },
    804(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
      __webpack_require__.d(__webpack_exports__, 'Regular', () => Regular);
      const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
      const react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );
      const _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
      const _Paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
      __webpack_exports__.default = {
        component: _Paragraph__WEBPACK_IMPORTED_MODULE_2__.a,
        title: 'Atoms/Paragraph',
        decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs],
      };
      var Regular = function Regular() {
        const value = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)(
          'Text',
          'Hello World',
          'GROUP-ID1',
        );
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _Paragraph__WEBPACK_IMPORTED_MODULE_2__.a,
          null,
          value,
        );
      };
      (Regular.__docgenInfo = { description: '', methods: [], displayName: 'Regular' }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/atoms/Paragraph/Paragraph.stories.js'] = {
            name: 'Regular',
            docgenInfo: Regular.__docgenInfo,
            path: 'src/components/atoms/Paragraph/Paragraph.stories.js',
          });
    },
    820(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      const react = __webpack_require__(0);
      const react_default = __webpack_require__.n(react);
      const taggedTemplateLiteral = __webpack_require__(4);
      const styled_components_browser_esm = __webpack_require__(3);
      const magnifier = __webpack_require__(369);
      const magnifier_default = __webpack_require__.n(magnifier);
      function _templateObject2() {
        const data = Object(taggedTemplateLiteral.a)([
          '\n      padding: 10px 20px 10px 40px;\n      font-size: ',
          ';\n      background-image: url(',
          ');\n      background-size: 15px;\n      background-position: 15px 50%;\n      background-repeat: no-repeat;\n    ',
        ]);
        return (
          (_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        const data = Object(taggedTemplateLiteral.a)([
          '\n  padding: 15px 30px;\n  font-size: ',
          ';\n  font-weight: ',
          ';\n  background-color: ',
          ';\n  border: none;\n  border-radius: 50px;\n\n  ::placeholder {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: ',
          ';\n  }\n\n  ',
          '\n',
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const Input_Input = styled_components_browser_esm.c.input(
        _templateObject(),
        (_ref) => _ref.theme.fontSize.s,
        (_ref2) => _ref2.theme.regular,
        (_ref3) => _ref3.theme.grey100,
        (_ref4) => _ref4.theme.grey300,
        (_ref5) => (
          _ref5.search
            && Object(styled_components_browser_esm.b)(
              _templateObject2(),
              (_ref6) => _ref6.theme.fontSize.xs,
              magnifier_default.a,
            )
        ),
      );
      __webpack_require__.d(__webpack_exports__, 'Regular', () => Input_stories_Regular),
      __webpack_require__.d(__webpack_exports__, 'SearchBar', () => Input_stories_SearchBar);
      __webpack_exports__.default = { component: Input_Input, title: 'Atoms/Input' };
      var Input_stories_Regular = function Regular() {
        return react_default.a.createElement(Input_Input, { placeholder: 'login' });
      };
      var Input_stories_SearchBar = function SearchBar() {
        return react_default.a.createElement(Input_Input, { placeholder: 'search', search: !0 });
      };
      (Input_stories_Regular.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Regular',
      }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/atoms/Input/Input.stories.js'] = {
            name: 'Regular',
            docgenInfo: Input_stories_Regular.__docgenInfo,
            path: 'src/components/atoms/Input/Input.stories.js',
          }),
      (Input_stories_SearchBar.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'SearchBar',
      }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/atoms/Input/Input.stories.js'] = {
            name: 'SearchBar',
            docgenInfo: Input_stories_SearchBar.__docgenInfo,
            path: 'src/components/atoms/Input/Input.stories.js',
          });
    },
    821(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      const react = __webpack_require__(0);
      const react_default = __webpack_require__.n(react);
      const taggedTemplateLiteral = __webpack_require__(4);
      const styled_components_browser_esm = __webpack_require__(3);
      const Paragraph = __webpack_require__(86);
      const Heading = __webpack_require__(85);
      const Button = __webpack_require__(84);
      const icons_link = __webpack_require__(370);
      const link_default = __webpack_require__.n(icons_link);
      function _templateObject7() {
        const data = Object(taggedTemplateLiteral.a)([
          '\n  display: block;\n  width: 47px;\n  height: 47px;\n  border-radius: 50px;\n  background-size: 70%;\n  background: white url(',
          ') no-repeat 50%;\n  position: absolute;\n  right: 25px;\n  top: 50%;\n  transform: translateY(-50%);\n',
        ]);
        return (
          (_templateObject7 = function _templateObject7() {
            return data;
          }),
          data
        );
      }
      function _templateObject6() {
        const data = Object(taggedTemplateLiteral.a)([
          '\n  width: 86px;\n  height: 86px;\n  border: 5px solid ',
          ';\n  border-radius: 50px;\n  position: absolute;\n  right: 25px;\n  top: 25px;\n',
        ]);
        return (
          (_templateObject6 = function _templateObject6() {
            return data;
          }),
          data
        );
      }
      function _templateObject5() {
        const data = Object(taggedTemplateLiteral.a)(['\n  margin: 5px 0 0;\n']);
        return (
          (_templateObject5 = function _templateObject5() {
            return data;
          }),
          data
        );
      }
      function _templateObject4() {
        const data = Object(taggedTemplateLiteral.a)([
          '\n  margin: 0 0 10px;\n  font-weight: ',
          ';\n  font-size: ',
          ';\n',
        ]);
        return (
          (_templateObject4 = function _templateObject4() {
            return data;
          }),
          data
        );
      }
      function _templateObject3() {
        const data = Object(taggedTemplateLiteral.a)([
          '\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    ',
        ]);
        return (
          (_templateObject3 = function _templateObject3() {
            return data;
          }),
          data
        );
      }
      function _templateObject2() {
        const data = Object(taggedTemplateLiteral.a)([
          '\n  position: relative;\n  padding: 17px 30px;\n  background-color: ',
          ';\n\n  :first-of-type {\n    z-index: 9999;\n  }\n\n  ',
          ';\n',
        ]);
        return (
          (_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        const data = Object(taggedTemplateLiteral.a)([
          '\n  min-height: 380px;\n  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  display: grid;\n  grid-template-rows: 0.25fr 1fr;\n',
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const StyledWrapper = styled_components_browser_esm.c.div(_templateObject());
      const InnerWrapper = styled_components_browser_esm.c.div(
        _templateObject2(),
        (_ref) => {
          const { activeColor } = _ref;
          const { theme } = _ref;
          return activeColor ? theme[activeColor] : 'white';
        },
        (_ref2) => _ref2.flex && Object(styled_components_browser_esm.b)(_templateObject3()),
      );
      const DateInfo = Object(styled_components_browser_esm.c)(Paragraph.a)(
        _templateObject4(),
        (_ref3) => _ref3.theme.bold,
        (_ref4) => _ref4.theme.fontSize.xs,
      );
      const StyledHeading = Object(styled_components_browser_esm.c)(Heading.a)(_templateObject5());
      const StyledAvatar = styled_components_browser_esm.c.img(_templateObject6(), (_ref5) => _ref5.theme.twitter);
      const StyledLinkButton = styled_components_browser_esm.c.a(_templateObject7(), link_default.a);
      const Card_Card = function Card(_ref6) {
        const { cardType } = _ref6;
        return react_default.a.createElement(
          StyledWrapper,
          null,
          react_default.a.createElement(
            InnerWrapper,
            { activeColor: cardType },
            react_default.a.createElement(StyledHeading, null, 'Hello Micheal'),
            react_default.a.createElement(DateInfo, null, '3 days'),
            cardType === 'twitter'
                && react_default.a.createElement(StyledAvatar, {
                  src: 'https://avatars.io/twitter/hello_roman',
                }),
            cardType === 'article'
                && react_default.a.createElement(StyledLinkButton, { href: 'https://helloroman.com' }),
          ),
          react_default.a.createElement(
            InnerWrapper,
            { flex: !0 },
            react_default.a.createElement(
              Paragraph.a,
              null,
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus beatae commodi consequuntur culpa dolorum eum exercitationem facilis fuga fugiat ipsum laboriosam minus odit officia perferendis perspiciatis placeat quasi quidem quisquam recusandae sed suscipit, totam vel, voluptas voluptate. Aliquid assumenda dignissimos ex laudantium maiores minima, nostrum provident recusandae repellendus ullam.',
            ),
            react_default.a.createElement(Button.a, { secondary: !0 }, 'Remove'),
          ),
        );
      };
      (Card_Card.defaultProps = { cardType: 'note' }),
      (Card_Card.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Card',
        props: { cardType: { defaultValue: { value: "'note'", computed: !1 }, required: !1 } },
      });
      const molecules_Card_Card = Card_Card;
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
        && (STORYBOOK_REACT_CLASSES['src/components/molecules/Card/Card.js'] = {
          name: 'Card',
          docgenInfo: Card_Card.__docgenInfo,
          path: 'src/components/molecules/Card/Card.js',
        }),
      __webpack_require__.d(__webpack_exports__, 'Primary', () => Card_stories_Primary),
      __webpack_require__.d(__webpack_exports__, 'Secondary', () => Card_stories_Secondary),
      __webpack_require__.d(__webpack_exports__, 'Tertiary', () => Card_stories_Tertiary);
      __webpack_exports__.default = { component: molecules_Card_Card, title: 'Molecules/Card' };
      var Card_stories_Primary = function Primary() {
        return react_default.a.createElement(molecules_Card_Card, null);
      };
      var Card_stories_Secondary = function Secondary() {
        return react_default.a.createElement(molecules_Card_Card, { cardType: 'twitter' });
      };
      var Card_stories_Tertiary = function Tertiary() {
        return react_default.a.createElement(molecules_Card_Card, { cardType: 'article' });
      };
      (Card_stories_Primary.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Primary',
      }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/molecules/Card/Card.stories.js'] = {
            name: 'Primary',
            docgenInfo: Card_stories_Primary.__docgenInfo,
            path: 'src/components/molecules/Card/Card.stories.js',
          }),
      (Card_stories_Secondary.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Secondary',
      }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/molecules/Card/Card.stories.js'] = {
            name: 'Secondary',
            docgenInfo: Card_stories_Secondary.__docgenInfo,
            path: 'src/components/molecules/Card/Card.stories.js',
          }),
      (Card_stories_Tertiary.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Tertiary',
      }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/molecules/Card/Card.stories.js'] = {
            name: 'Tertiary',
            docgenInfo: Card_stories_Tertiary.__docgenInfo,
            path: 'src/components/molecules/Card/Card.stories.js',
          });
    },
    822(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      const react = __webpack_require__(0);
      const react_default = __webpack_require__.n(react);
      const dist_react = __webpack_require__(371);
      const dist_react_default = __webpack_require__.n(dist_react);
      const taggedTemplateLiteral = __webpack_require__(4);
      const react_router_dom = __webpack_require__(111);
      const ButtonIcon = __webpack_require__(35);
      const bulb = __webpack_require__(153);
      const bulb_default = __webpack_require__.n(bulb);
      const logout = __webpack_require__(154);
      const logout_default = __webpack_require__.n(logout);
      const pen = __webpack_require__(155);
      const pen_default = __webpack_require__.n(pen);
      const twitter = __webpack_require__(156);
      const twitter_default = __webpack_require__.n(twitter);
      const logo = __webpack_require__(374);
      const logo_default = __webpack_require__.n(logo);
      const styled_components_browser_esm = __webpack_require__(3);
      function _templateObject3() {
        const data = Object(taggedTemplateLiteral.a)(['\n  list-style: none;\n']);
        return (
          (_templateObject3 = function _templateObject3() {
            return data;
          }),
          data
        );
      }
      function _templateObject2() {
        const data = Object(taggedTemplateLiteral.a)([
          '\n  display: block;\n  margin: 0 auto;\n  padding: 20px 0;\n',
        ]);
        return (
          (_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        const data = Object(taggedTemplateLiteral.a)([
          '\n  height: 100%;\n  background: ',
          ';\n  width: 150px;\n',
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const StyledWrapper = styled_components_browser_esm.c.div(_templateObject(), (_ref) => _ref.theme.twitter);
      const StyledLogo = styled_components_browser_esm.c.img(_templateObject2());
      const ButtonsList = styled_components_browser_esm.c.div(_templateObject3());
      const Sidebar_Sidebar = function Sidebar() {
        return react_default.a.createElement(
          StyledWrapper,
          null,
          react_default.a.createElement(StyledLogo, { src: logo_default.a, alt: 'favnote logo' }),
          react_default.a.createElement(
            ButtonsList,
            null,
            react_default.a.createElement(
              'li',
              null,
              react_default.a.createElement(ButtonIcon.a, {
                as: react_router_dom.a,
                to: '/',
                icon: pen_default.a,
              }),
            ),
            react_default.a.createElement(
              'li',
              null,
              react_default.a.createElement(ButtonIcon.a, {
                as: react_router_dom.a,
                to: '/twitters',
                icon: twitter_default.a,
              }),
            ),
            react_default.a.createElement(
              'li',
              null,
              react_default.a.createElement(ButtonIcon.a, {
                as: react_router_dom.a,
                to: '/articles',
                icon: bulb_default.a,
              }),
            ),
          ),
          react_default.a.createElement(ButtonIcon.a, {
            as: react_router_dom.a,
            to: '/',
            icon: logout_default.a,
          }),
        );
      };
      Sidebar_Sidebar.__docgenInfo = { description: '', methods: [], displayName: 'Sidebar' };
      const organisms_Sidebar_Sidebar = Sidebar_Sidebar;
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
        && (STORYBOOK_REACT_CLASSES['src/components/organisms/Sidebar/Sidebar.js'] = {
          name: 'Sidebar',
          docgenInfo: Sidebar_Sidebar.__docgenInfo,
          path: 'src/components/organisms/Sidebar/Sidebar.js',
        }),
      __webpack_require__.d(__webpack_exports__, 'Regular', () => Sidebar_stories_Regular);
      __webpack_exports__.default = {
        component: organisms_Sidebar_Sidebar,
        title: 'Organisms/Sidebar',
        decorators: [dist_react_default()()],
      };
      var Sidebar_stories_Regular = function Regular() {
        return react_default.a.createElement(organisms_Sidebar_Sidebar, null);
      };
      (Sidebar_stories_Regular.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Regular',
      }),
      typeof STORYBOOK_REACT_CLASSES !== 'undefined'
          && (STORYBOOK_REACT_CLASSES['src/components/organisms/Sidebar/Sidebar.stories.js'] = {
            name: 'Regular',
            docgenInfo: Sidebar_stories_Regular.__docgenInfo,
            path: 'src/components/organisms/Sidebar/Sidebar.stories.js',
          });
    },
    84(module, __webpack_exports__, __webpack_require__) {
      const _Users_michael_Desktop_repos_favnote_FavNoteEnterprise_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        4,
      );
      const styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
      function _templateObject2() {
        const data = Object(
          _Users_michael_Desktop_repos_favnote_FavNoteEnterprise_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )([
          '\n      background-color: ',
          ';\n      width: 105px;\n      height: 30px;\n      font-size: 10px;\n    ',
        ]);
        return (
          (_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        const data = Object(
          _Users_michael_Desktop_repos_favnote_FavNoteEnterprise_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )([
          '\n  padding: 0;\n  background-color: ',
          ';\n  width: 220px;\n  height: 47px;\n  border: none;\n  border-radius: 50px;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  cursor: pointer;\n\n  ',
          '\n',
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__.c.button(
        _templateObject(),
        (_ref) => {
          const { theme } = _ref;
          return _ref.color || theme.note;
        },
        (_ref2) => (
          _ref2.secondary
            && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.b)(_templateObject2(), (
              _ref3,
            ) => _ref3.theme.grey200)
        ),
      );
      __webpack_exports__.a = Button;
    },
    85(module, __webpack_exports__, __webpack_require__) {
      const _Users_michael_Desktop_repos_favnote_FavNoteEnterprise_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        4,
      );
      function _templateObject() {
        const data = Object(
          _Users_michael_Desktop_repos_favnote_FavNoteEnterprise_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )(['\n  font-size: ', ';\n  font-weight: ', ';\n']);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const Heading = __webpack_require__(3).c.h1(
        _templateObject(),
        (_ref) => {
          const { theme } = _ref;
          return _ref.big ? theme.fontSize.xl : theme.fontSize.l;
        },
        (_ref2) => _ref2.theme.bold,
      );
      __webpack_exports__.a = Heading;
    },
    86(module, __webpack_exports__, __webpack_require__) {
      const _Users_michael_Desktop_repos_favnote_FavNoteEnterprise_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        4,
      );
      function _templateObject() {
        const data = Object(
          _Users_michael_Desktop_repos_favnote_FavNoteEnterprise_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )(['\n  font-size: ', ';\n  font-weight: ', ';\n']);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const Paragraph = __webpack_require__(3).c.p(
        _templateObject(),
        (_ref) => _ref.theme.fontSize.s,
        (_ref2) => _ref2.theme.regular,
      );
      __webpack_exports__.a = Paragraph;
    },
  },
  [[377, 1, 2]],
]);
// # sourceMappingURL=main.e4d6c108bcc9cd510369.bundle.js.map
