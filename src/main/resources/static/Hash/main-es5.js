(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+V0h":
    /*!**********************************************************!*\
      !*** ./src/app/pages/admin/sidebar/sidebar.component.ts ***!
      \**********************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function V0h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.??fac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)();
      };

      SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 40,
        vars: 0,
        consts: [["mat-subheader", ""], ["mat-list-item", "", "routerLink", "/admin"], ["mat-list-icon", ""], ["mat-list-item", "", "routerLink", "/admin/profile"], ["mat-list-item", "", "routerLink", "/admin/categories"], ["mat-list-item", "", "routerLink", "/admin/add-category"], ["mat-list-item", "", "routerLink", "/admin/quizzes"], ["mat-list-item", "", "routerLink", "/admin/add-quiz"], ["mat-list-item", "", "routerLink", "/admin/error404"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-action-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "grid_view");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "DashBoard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Categories ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "add_shopping_cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Add Categories ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "quiz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Quizzes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Add Quiz ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Demo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Demo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListIconCssMatStyler"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Office\Spring\sprinrg_angular\angular\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0IEq":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/user/instructions/instructions.component.ts ***!
      \*******************************************************************/

    /*! exports provided: InstructionsComponent */

    /***/
    function IEq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstructionsComponent", function () {
        return InstructionsComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/quiz.service */
      "ofzi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var InstructionsComponent = /*#__PURE__*/function () {
        function InstructionsComponent(_route, _quizService, _router) {
          _classCallCheck(this, InstructionsComponent);

          this._route = _route;
          this._quizService = _quizService;
          this._router = _router;
        }

        _createClass(InstructionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.qid = this._route.snapshot.params.qid;
            console.log(this.qid);

            this._quizService.getSingleQuiz(this.qid).subscribe(function (data) {
              //Success
              _this.quizessData = data; // console.log(this.quizessData);
            }, function (error) {
              //error
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Error", "Server Error while loading quiz...");
            });
          }
        }, {
          key: "startQuiz",
          value: function startQuiz() {
            var _this2 = this;

            // this._router.
            // [routerLink]="'/start/'+qid"
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              title: 'Do You want to start the quiz',
              showCancelButton: true,
              confirmButtonText: 'Start',
              denyButtonText: "Don't Start",
              icon: 'info'
            }).then(function (result) {
              if (result.isConfirmed) {
                _this2._router.navigate(['/start/' + _this2.qid]);
              } else if (result.isDenied) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Changes are not saved", '', 'info');
              }
            });
          }
        }]);

        return InstructionsComponent;
      }();

      InstructionsComponent.??fac = function InstructionsComponent_Factory(t) {
        return new (t || InstructionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      InstructionsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: InstructionsComponent,
        selectors: [["app-instructions"]],
        decls: 53,
        vars: 5,
        consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "mt20"], [1, "ml20"], [1, "text-center"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
        template: function InstructionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " Read the instructions of this page carefully!!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, " One Step more to go ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-card-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Important Instructions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Total time to solve Time is : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "No Of Questions : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Each question carries : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "This quiz is testing purpose");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "This quiz is testing purpose");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Attempting Quiz");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Click ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Start Quiz");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, " to start quiz");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "The will start ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "The will start ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "mat-card-actions", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function InstructionsComponent_Template_button_click_51_listener() {
              return ctx.startQuiz();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Start Quizz");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.quizessData.title, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.quizessData.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.quizessData.numberOfQuestions * 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.quizessData.numberOfQuestions);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.quizessData.maxMarks / ctx.quizessData.numberOfQuestions);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0cnVjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "1LmZ":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function LmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.??fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 34,
        vars: 0,
        consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "row", "mt20"], [1, "col-md-6", "offset-md-3", "text-center"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Welcome to Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: [".w[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "33Wh":
    /*!*************************************************************!*\
      !*** ./src/app/pages/user/load-quiz/load-quiz.component.ts ***!
      \*************************************************************/

    /*! exports provided: LoadQuizComponent */

    /***/
    function Wh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadQuizComponent", function () {
        return LoadQuizComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/quiz.service */
      "ofzi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function LoadQuizComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, " View");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, " Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var q_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", q_r3.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", q_r3.category.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](q_r3.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/user-dashboard/about-quiz/" + q_r3.qid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/user-dashboard/instructions/" + q_r3.qid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" Q:", q_r3.numberOfQuestions, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" M M:", q_r3.maxMarks, "");
        }
      }

      function LoadQuizComponent_div_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-card-content", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "No data Available in this Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-card-actions", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/user-dashboard/0");
        }
      }

      function LoadQuizComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, LoadQuizComponent_div_4_div_1_Template, 20, 7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, LoadQuizComponent_div_4_div_2_Template, 8, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r0.quizzList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.quizzList.length == 0);
        }
      }

      var LoadQuizComponent = /*#__PURE__*/function () {
        function LoadQuizComponent(_route, _quizService) {
          _classCallCheck(this, LoadQuizComponent);

          this._route = _route;
          this._quizService = _quizService;
        }

        _createClass(LoadQuizComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this._route.params.subscribe(function (params) {
              _this3.catId = params.catId;

              if (_this3.catId == 0) {
                console.log("All Quizees loaded");

                _this3._quizService.getActiveQuzzes().subscribe(function (data) {
                  //Success
                  _this3.quizzList = data;
                  console.log(_this3.quizzList);
                }, function (error) {
                  //Error
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Error", "Server Error while loading all quizes!!!!");
                });
              } else {
                console.log("Specfic category laoded");

                _this3._quizService.getActiveQuzzesOfCategory(_this3.catId).subscribe(function (data) {
                  //success
                  _this3.quizzList = data;
                  console.log(_this3.quizzList);
                }, function (error) {
                  //error
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Error", "Server error while loading quizzes by category");
                });
              }
            });
          }
        }]);

        return LoadQuizComponent;
      }();

      LoadQuizComponent.??fac = function LoadQuizComponent_Factory(t) {
        return new (t || LoadQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]));
      };

      LoadQuizComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: LoadQuizComponent,
        selectors: [["app-load-quiz"]],
        decls: 5,
        vars: 1,
        consts: [[1, "bootstarp-wrapper"], [1, "container-fluid"], [1, "mt20"], ["class", "row", "mt20", "", 4, "ngIf"], ["mt20", "", 1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-4"], [1, "mb20"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "truncate"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["mat-button", "", "color", "accent", 1, "ml20", 3, "routerLink"], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], [1, "col-md-12"], [1, "text-center"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"]],
        template: function LoadQuizComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Available Quizzes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, LoadQuizComponent_div_4_Template, 3, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.quizzList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".truncate[_ngcontent-%COMP%] {\r\n    display: block;\r\n    white-space: nowrap;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('quiz1.png');\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWQtcXVpei5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtDQUFxRDtJQUNyRCxzQkFBc0I7QUFDMUIiLCJmaWxlIjoibG9hZC1xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJ1bmNhdGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9xdWl6MS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "91Vl":
    /*!************************************************************!*\
      !*** ./src/app/pages/admin/add-quiz/add-quiz.component.ts ***!
      \************************************************************/

    /*! exports provided: AddQuizComponent */

    /***/
    function Vl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddQuizComponent", function () {
        return AddQuizComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/category.service */
      "cPV5");
      /* harmony import */


      var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/quiz.service */
      "ofzi");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function AddQuizComponent_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var c_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", c_r1.cid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", c_r1.title, " ");
        }
      }

      var AddQuizComponent = /*#__PURE__*/function () {
        function AddQuizComponent(_categoryService, _quizService, _snackBar) {
          _classCallCheck(this, AddQuizComponent);

          this._categoryService = _categoryService;
          this._quizService = _quizService;
          this._snackBar = _snackBar; // Form data binding

          this.quizData = {
            title: '',
            description: '',
            maxMarks: '',
            numberOfQuestions: '',
            active: true,
            category: {
              cid: ''
            }
          };
          this.categories = [//Dummy data
            // {
            //   cid:23,
            //   title:"programming",
            // },
            // {
            //   cid:23,
            //   title:"programming",
            // }
          ];
        }

        _createClass(AddQuizComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this._categoryService.categories().subscribe(function (data) {
              //success
              _this4.categories = data;
              console.log(_this4.categories);
            }, function (error) {
              //error
              console.log(error);
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Oop's", 'Server error while loading data!!!', 'error');
            });
          } //add quiz

        }, {
          key: "addQuiz",
          value: function addQuiz() {
            var _this5 = this;

            if (this.quizData.title.trim() == '' || this.quizData.title == null) {
              this._snackBar.open('title is required!!', 'ok', {
                duration: 3000
              });

              return;
            }

            if (this.quizData.description.trim() == '' || this.quizData.description == null) {
              this._snackBar.open('description is required!!', 'ok', {
                duration: 3000
              });

              return;
            }

            if (this.quizData.maxMarks.trim() == '' || this.quizData.maxMarks == null) {
              this._snackBar.open('Max Marks is required!!', 'ok', {
                duration: 3000
              });

              return;
            }

            if (this.quizData.numberOfQuestions.trim() == '' || this.quizData.numberOfQuestions == null) {
              this._snackBar.open('Number of questions is required!!', 'ok', {
                duration: 3000
              });

              return;
            }

            if (this.quizData.category.cid == '' || this.quizData.category.cid == null) {
              this._snackBar.open('category is required!!', 'ok', {
                duration: 3000
              });

              return;
            } //Now call server


            this._quizService.addingNewQuiz(this.quizData).subscribe(function (data) {
              //success
              _this5.quizData.title = '', _this5.quizData.description = '', _this5.quizData.maxMarks = '', _this5.quizData.numberOfQuestions = '', _this5.quizData.category.cid = '', sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Success', 'Quiz added!!', 'success');
            }, function (error) {
              //error
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error', 'Server Error While adding Quiz Try Again!!', 'error');
            });
          }
        }]);

        return AddQuizComponent;
      }();

      AddQuizComponent.??fac = function AddQuizComponent_Factory(t) {
        return new (t || AddQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      AddQuizComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: AddQuizComponent,
        selectors: [["app-add-quiz"]],
        decls: 41,
        vars: 7,
        consts: [[1, "container"], [1, "row"], [1, "col", "md", "8", "offset-md-2"], [3, "ngSubmit"], ["appearance", "outline", 1, "w100"], ["required", "", "type", "text", "name", "title", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["required", "", "type", "text", "rows", "10", "name", "description placeholder=", "matInput", "", "Enter", "", "description", "", "Here.....", "", 3, "ngModel", "ngModelChange"], [1, "col-md-6"], ["required", "", "type", "text", "name", "maxMarks", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["required", "", "type", "text", "name", "numberOfQuestions", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["appearance", "fill", 1, "w50"], ["required", "", "name", "category", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["required", "", "name", "active", 1, "mt20", 3, "ngModel", "ngModelChange"], [1, "container", "text-center"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["type", "reset", "mat-raised-button", "", "color", "accent", 1, "ml20"], [3, "value"]],
        template: function AddQuizComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Add New Quiz");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function AddQuizComponent_Template_form_ngSubmit_6_listener() {
              return ctx.addQuiz();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Enter Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AddQuizComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.quizData.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Enter Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AddQuizComponent_Template_textarea_ngModelChange_14_listener($event) {
              return ctx.quizData.description = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Maximum Marks");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AddQuizComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.quizData.maxMarks = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Number of Questions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AddQuizComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.quizData.numberOfQuestions = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Categories");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "mat-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AddQuizComponent_Template_mat_select_ngModelChange_31_listener($event) {
              return ctx.quizData.category.cid = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, AddQuizComponent_mat_option_32_Template, 2, 2, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "mat-slide-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AddQuizComponent_Template_mat_slide_toggle_ngModelChange_34_listener($event) {
              return ctx.quizData.active = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, " Publish Status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.quizData.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.quizData.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.quizData.maxMarks);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.quizData.numberOfQuestions);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.quizData.category.cid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.quizData.active);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleRequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]],
        styles: [".w100[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.w50[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiYWRkLXF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53MTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udzUwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "A6fv":
    /*!**********************************************!*\
      !*** ./src/app/services/auth.interceptor.ts ***!
      \**********************************************/

    /*! exports provided: AuthInterceptor, AuthInterceptorProviders */

    /***/
    function A6fv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptorProviders", function () {
        return AuthInterceptorProviders;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.service */
      "EFyh");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(loginService) {
          _classCallCheck(this, AuthInterceptor);

          this.loginService = loginService;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            //add the  JWT token from LocalStorage to pass request
            // 
            var authReq = req;
            var token = this.loginService.getToken();

            if (token != null) {
              authReq = authReq.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            }

            return next.handle(authReq);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.??fac = function AuthInterceptor_Factory(t) {
        return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]));
      };

      AuthInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: AuthInterceptor,
        factory: AuthInterceptor.??fac
      });
      var AuthInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: AuthInterceptor,
        multi: true
      }];
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BxJU":
    /*!******************************************************!*\
      !*** ./src/app/componets/footer/footer.component.ts ***!
      \******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function BxJU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 0,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {},
        styles: [".footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    \r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGNvbG9yOiByZ2IoMjQ3LCAyNTIsIDI0Nyk7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "D8EZ":
    /*!************************************************!*\
      !*** ./src/app/pages/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function D8EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(snackBar, loginService, router) {
          _classCallCheck(this, LoginComponent);

          this.snackBar = snackBar;
          this.loginService = loginService;
          this.router = router; // Login Object

          this.loginData = {
            username: '',
            password: ''
          };
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // Login form Submit method

        }, {
          key: "loginFormSubmit",
          value: function loginFormSubmit() {
            var _this6 = this;

            console.log('Login Button Clicked');
            console.log(this.loginData); // Validations of login form
            // For Username
            // tslint:disable-next-line:triple-equals

            if (this.loginData.username.trim() == '' || this.loginData.username == null) {
              // alert("Username required");
              // MatSnackBar
              this.snackBar.open('Username is required!!!', 'OK', {
                duration: 3000
              });
              return;
            } // For Password
            // tslint:disable-next-line:triple-equals


            if (this.loginData.password.trim() == '' || this.loginData.password == null) {
              // alert("Password required");
              this.snackBar.open('Password is required!!!', 'ok', {
                duration: 3000
              });
              return;
            } // Request to server to generate JWT Token


            this.loginService.generateToken(this.loginData).subscribe(function (data) {
              // Success
              console.log(data); // alert("Succeessfully Token genrated!!!");
              // After Successfully generated token then login from here!!!

              _this6.loginService.loginUser(data.token); // getting current user


              _this6.loginService.getCurrentUser().subscribe(function (user) {
                // save user data into localStorage
                _this6.loginService.setUser(user);

                console.log(user); // redirect: ...ADMIN: Admin-Dashboard

                if (_this6.loginService.getUserRole() == 'ADMIN') {
                  // reDirect Admin DashBoard
                  // window.location.href="/admin";
                  _this6.router.navigate(['admin']);

                  _this6.loginService.loginStatusSubject.next(true); // redirect: ...NORMAL: Normal-Dashboard
                  // tslint:disable-next-line:triple-equals

                } else if (_this6.loginService.getUserRole() == 'NORMAL') {
                  // reDirect User DashBoard
                  // window.location.href="/user-dashboard";
                  _this6.router.navigate(['user-dashboard/0']);

                  _this6.loginService.loginStatusSubject.next(true);
                } else {
                  _this6.loginService.logOut();
                }
              });
            }, function (error) {
              // Error Occured
              console.log('Oops...', 'Seems like Something went wrong!!!', error);

              _this6.snackBar.open('Invaild credentials!!! Try Agin', 'ok', {
                duration: 3000
              });
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 25,
        vars: 2,
        consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-3"], [1, "container", "text-center"], ["src", "../../../assets/register1.png", "width", "150px", "height", "150px", "alt", ""], [1, "text-center"], [3, "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["required", "", "name", "username", "matInput", "", "placeholder", "Enter Here!", 3, "ngModel", "ngModelChange"], ["required", "", "name", "password", "type", "password", "matInput", "", "placeholder", "Enter Here!", 3, "ngModel", "ngModelChange"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["type", "reset", "mat-raised-button", "", "color", "accent", 1, "ml20"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Login Here!!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
              return ctx.loginFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.loginData.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Vaild Username!!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.loginData.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.loginData.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.loginData.password);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: [".full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "EFyh":
    /*!*******************************************!*\
      !*** ./src/app/services/login.service.ts ***!
      \*******************************************/

    /*! exports provided: LoginService */

    /***/
    function EFyh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helper */
      "nYYN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(_http) {
          _classCallCheck(this, LoginService);

          this._http = _http; //event

          this.loginStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        } // Login Service
        //Generate Token


        _createClass(LoginService, [{
          key: "generateToken",
          value: function generateToken(loginData) {
            return this._http.post("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/generate-token"), loginData);
          } //Login User : Set token in LocalStorage

        }, {
          key: "loginUser",
          value: function loginUser(token) {
            localStorage.setItem("token", token);
            return true;
          } //Current User :  get current loggedin user

        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return this._http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/current-user"));
          } //User is Logged in or not

        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            var tokenStr = localStorage.getItem("token");

            if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
              return false;
            } else {
              return true;
            }
          } //logOut : remove token from localStorage to logOut the user

        }, {
          key: "logOut",
          value: function logOut() {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return true;
          } //get token

        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem("token");
          } //set userDetails

        }, {
          key: "setUser",
          value: function setUser(user) {
            localStorage.setItem("user", JSON.stringify(user));
          } //get UserDetails

        }, {
          key: "getUser",
          value: function getUser() {
            var userStr = localStorage.getItem("user");

            if (userStr != null) {
              return JSON.parse(userStr);
            } else {
              this.logOut();
              return null;
            }
          } //get user role

        }, {
          key: "getUserRole",
          value: function getUserRole() {
            var user = this.getUser();
            return user.authorities[0].authority;
          } // get all users count for admin 

        }, {
          key: "getUserCount",
          value: function getUserCount() {
            return this._http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/user/usercount/"));
          }
        }]);

        return LoginService;
      }();

      LoginService.??fac = function LoginService_Factory(t) {
        return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      LoginService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({
        token: LoginService,
        factory: LoginService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "EPRI":
    /*!****************************************!*\
      !*** ./src/app/services/user.guard.ts ***!
      \****************************************/

    /*! exports provided: UserGuard */

    /***/
    function EPRI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserGuard", function () {
        return UserGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.service */
      "EFyh");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var UserGuard = /*#__PURE__*/function () {
        //constructor
        function UserGuard(loginService, router) {
          _classCallCheck(this, UserGuard);

          this.loginService = loginService;
          this.router = router;
        }

        _createClass(UserGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.loginService.isLoggedIn() && this.loginService.getUserRole() == "NORMAL") {
              ////redirect Normal User page
              return true;
            } //Otherwise again  navigate to login page


            this.router.navigate(['login']);
            return false;
          }
        }]);

        return UserGuard;
      }();

      UserGuard.??fac = function UserGuard_Factory(t) {
        return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      UserGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: UserGuard,
        factory: UserGuard.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Gj8z":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/admin/update-question/update-question.component.ts ***!
      \**************************************************************************/

    /*! exports provided: UpdateQuestionComponent */

    /***/
    function Gj8z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateQuestionComponent", function () {
        return UpdateQuestionComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/question.service */
      "UcdY");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function UpdateQuestionComponent_mat_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx_r0.updateQuestion.option1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.updateQuestion.option1);
        }
      }

      function UpdateQuestionComponent_mat_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx_r1.updateQuestion.option2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r1.updateQuestion.option2);
        }
      }

      function UpdateQuestionComponent_mat_option_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx_r2.updateQuestion.option3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r2.updateQuestion.option3);
        }
      }

      function UpdateQuestionComponent_mat_option_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx_r3.updateQuestion.option4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r3.updateQuestion.option4);
        }
      }

      var UpdateQuestionComponent = /*#__PURE__*/function () {
        function UpdateQuestionComponent(_route, _questionService, _snackBar, _router) {
          _classCallCheck(this, UpdateQuestionComponent);

          this._route = _route;
          this._questionService = _questionService;
          this._snackBar = _snackBar;
          this._router = _router;
        }

        _createClass(UpdateQuestionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.quesId = this._route.snapshot.params.quesId;

            this._questionService.particularQuestionById(this.quesId).subscribe(function (data) {
              //success
              console.log(data);
              _this7.updateQuestion = data;
            }, function (error) {
              //error
              // console.log(error);
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error', 'Server error while loading data', 'error');
            });
          } //Updating question while submit form

        }, {
          key: "updatingWhileSubmitQuestion",
          value: function updatingWhileSubmitQuestion() {
            var _this8 = this;

            //validation
            if (this.updateQuestion.content.trim() == '' || this.updateQuestion.content == null) {
              this._snackBar.open('Question is required!!', 'ok', {
                duration: 3000
              });

              return;
            }

            if (this.updateQuestion.option1.trim() == '' || this.updateQuestion.option1 == null) {
              this._snackBar.open('Option 1 is required!!', 'ok', {
                duration: 3000
              });

              return;
            }

            if (this.updateQuestion.option2.trim() == '' || this.updateQuestion.option2 == null) {
              this._snackBar.open('Option 2 is required!!', 'ok', {
                duration: 3000
              });

              return;
            } // if (this.updateQuestion.option3.trim() == '' || this.updateQuestion.option3 == null){
            //   this._snackBar.open('Option 3 is required!!','ok',{
            //     duration: 3000,
            //   });
            //   return;
            // }
            // if (this.updateQuestion.option4.trim() == '' || this.updateQuestion.option4 == null){
            //   this._snackBar.open('Option 4 is required!!','ok',{
            //     duration: 3000,
            //   });
            //   return;
            // }


            if (this.updateQuestion.answer.trim() == '' || this.updateQuestion.answer == null) {
              this._snackBar.open('Answer is required!!', 'ok', {
                duration: 3000
              });

              return;
            } //Now calling the server to updating question


            this._questionService.updateQuestionById(this.updateQuestion).subscribe(function (data) {
              //success
              // console.log(this.updateQuestion);'
              _this8.updateQuestion.content = '', _this8.updateQuestion.option1 = '', _this8.updateQuestion.option2 = '', _this8.updateQuestion.option3 = '', _this8.updateQuestion.option4 = '', _this8.updateQuestion.answer = '', sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Success', 'Question Updated!!!', 'success').then(function (e) {
                //clicking ok then navigate to All questions
                _this8._router.navigate(['/admin/view-questions/']); // some problem while routing i'll fix later

              });
            }, function (error) {
              //error
              // console.log(error);
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('error', 'Server error while updating question', 'error');
            });
          }
        }]);

        return UpdateQuestionComponent;
      }();

      UpdateQuestionComponent.??fac = function UpdateQuestionComponent_Factory(t) {
        return new (t || UpdateQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      UpdateQuestionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: UpdateQuestionComponent,
        selectors: [["app-update-question"]],
        decls: 48,
        vars: 11,
        consts: [[1, "bootstrap-wrapper"], [1, "row"], [1, "col-md-12"], [1, "mt20", 3, "ngSubmit"], ["appearance", "fill", 1, "w100"], ["required", "", "name", "content", "type", "text", "rows", "10", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "col-md-6"], ["required", "", "type", "text", "name", "option1", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["required", "", "type", "text", "name", "option2", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "option3", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "option4", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["required", "", "name", "answer", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngIf"], [1, "container", "text-center"], ["type", "submit", "mat-raised-button", "", "color", "primary"], [3, "value"]],
        template: function UpdateQuestionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, " Enter the detail of the new question!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function UpdateQuestionComponent_Template_form_ngSubmit_10_listener() {
              return ctx.updatingWhileSubmitQuestion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Question Content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "textarea", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateQuestionComponent_Template_textarea_ngModelChange_14_listener($event) {
              return ctx.updateQuestion.content = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateQuestionComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.updateQuestion.option1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateQuestionComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.updateQuestion.option2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Option 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateQuestionComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.updateQuestion.option3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Option 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateQuestionComponent_Template_input_ngModelChange_36_listener($event) {
              return ctx.updateQuestion.option4 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " <---Select Answer---> ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "mat-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateQuestionComponent_Template_mat_select_ngModelChange_40_listener($event) {
              return ctx.updateQuestion.answer = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](41, UpdateQuestionComponent_mat_option_41_Template, 2, 2, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](42, UpdateQuestionComponent_mat_option_42_Template, 2, 2, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](43, UpdateQuestionComponent_mat_option_43_Template, 2, 2, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](44, UpdateQuestionComponent_mat_option_44_Template, 2, 2, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Update Question of : ", ctx.updateQuestion.quiz.title, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.updateQuestion.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.updateQuestion.option1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.updateQuestion.option2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.updateQuestion.option3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.updateQuestion.option4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.updateQuestion.answer);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.updateQuestion.option1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.updateQuestion.option2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.updateQuestion.option3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.updateQuestion.option4);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]],
        styles: [".w100[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.w50[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InVwZGF0ZS1xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLncxMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53NTAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "OxfQ":
    /*!******************************************************!*\
      !*** ./src/app/componets/navbar/navbar.component.ts ***!
      \******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function OxfQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../footer/footer.component */
      "BxJU");

      function NavbarComponent_a_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/login");
        }
      }

      function NavbarComponent_a_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/signup");
        }
      }

      function NavbarComponent_a_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Welcome back : ", ctx_r2.user.username, " ");
        }
      }

      function NavbarComponent_a_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_a_16_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Logout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var NavbarComponent = /*#__PURE__*/function () {
        //  constructor
        function NavbarComponent(loginService) {
          _classCallCheck(this, NavbarComponent);

          this.loginService = loginService;
          this.isLoggedIn = false;
          this.user = null;
          this.isDarkTheme = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.isLoggedIn = this.loginService.isLoggedIn();
            this.user = this.loginService.getUser();
            this.loginService.loginStatusSubject.asObservable().subscribe(function (data) {
              _this9.isLoggedIn = _this9.loginService.isLoggedIn();
              _this9.user = _this9.loginService.getUser();
            }); // LocalStorge Dark theme when ng init() loading

            this.isDarkTheme = localStorage.getItem('theme') === 'dark' ? true : false;
          } // Dark theme 

        }, {
          key: "toggleTheme",
          value: function toggleTheme() {
            this.isDarkTheme = !this.isDarkTheme;
            localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
          } //  Logout method

        }, {
          key: "logout",
          value: function logout() {
            console.log('logout click');
            this.loginService.logOut();
            window.location.reload(); // this.loginService.loginStatusSubject.next(false);
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.??fac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]));
      };

      NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 20,
        vars: 5,
        consts: [["mat-app-background", "", 3, "ngClass"], ["color", "primary"], ["routerLink", "/", "mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["matTooltip", "Switch Theme"], ["ngx-tooltip", "", 3, "click"], ["mat-icon-button", "", "class", "example-icon favorite-icon", "aria-label", "Example icon-button with heart icon", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", "class", "example-icon mr20 ml20", "aria-label", "Example icon-button with share icon", 3, "routerLink", 4, "ngIf"], ["routerLink", "/admin/profile", "mat-button", "", "class", "example-icon mr20 ml20 ", "aria-label", "Example icon-button with share icon ", 4, "ngIf"], ["mat-icon-button", "", "class", "example-icon  ml20 ", "aria-label", "Example icon-button with share icon ", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon", "mr20", "ml20", 3, "routerLink"], ["routerLink", "/admin/profile", "mat-button", "", "aria-label", "Example icon-button with share icon ", 1, "example-icon", "mr20", "ml20"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon ", 1, "example-icon", "ml20", 3, "click"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "widgets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Exam Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "light_mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-slide-toggle", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_mat_slide_toggle_click_10_listener() {
              return ctx.toggleTheme();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "nights_stay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, NavbarComponent_a_13_Template, 2, 1, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, NavbarComponent_a_14_Template, 2, 1, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, NavbarComponent_a_15_Template, 2, 1, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, NavbarComponent_a_16_Template, 2, 0, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isDarkTheme ? "dark-theme" : "light-theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoggedIn && ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoggedIn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
        styles: [".example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "Q+l4":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/admin/add-questions/add-questions.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AddQuestionsComponent */

    /***/
    function QL4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddQuestionsComponent", function () {
        return AddQuestionsComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-build-classic */
      "+z1p");
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/question.service */
      "UcdY");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      "zioG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function AddQuestionsComponent_mat_option_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx_r0.questions.option1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.questions.option1);
        }
      }

      function AddQuestionsComponent_mat_option_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx_r1.questions.option2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r1.questions.option2);
        }
      }

      function AddQuestionsComponent_mat_option_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx_r2.questions.option3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r2.questions.option3);
        }
      }

      function AddQuestionsComponent_mat_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx_r3.questions.option4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r3.questions.option4);
        }
      }

      var AddQuestionsComponent = /*#__PURE__*/function () {
        function AddQuestionsComponent(_route, _questionService, _snackBar) {
          _classCallCheck(this, AddQuestionsComponent);

          this._route = _route;
          this._questionService = _questionService;
          this._snackBar = _snackBar;
          this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
          this.questions = {
            quiz: {},
            content: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            answer: ''
          };
        }

        _createClass(AddQuestionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.qId = this._route.snapshot.params.qid;
            this.qTitle = this._route.snapshot.params.title;
            this.questions.quiz['qid'] = this.qId;
            this.questions.quiz['title'] = this.qTitle;
            console.log(this.qId, this.qTitle);
          } //add questions

        }, {
          key: "addQuestions",
          value: function addQuestions() {
            var _this10 = this;

            //validation
            if (this.questions.content.trim() == '' || this.questions.content == null) {
              this._snackBar.open('Question is required!!', 'ok', {
                duration: 3000
              });

              return;
            }

            if (this.questions.option1.trim() == '' || this.questions.option1 == null) {
              this._snackBar.open('Option 1 is required!!', 'ok', {
                duration: 3000
              });

              return;
            }

            if (this.questions.option2.trim() == '' || this.questions.option2 == null) {
              this._snackBar.open('Option 2 is required!!', 'ok', {
                duration: 3000
              });

              return;
            } // if (this.questions.option3.trim() == '' || this.questions.option3 == null){
            //   this._snackBar.open('Option 3 is required!!','ok',{
            //     duration: 3000,
            //   });
            //   return;
            // }
            // if (this.questions.option4.trim() == '' || this.questions.option4 == null){
            //   this._snackBar.open('Option 4 is required!!','ok',{
            //     duration: 3000,
            //   });
            //   return;
            // }


            if (this.questions.answer.trim() == '' || this.questions.answer == null) {
              this._snackBar.open('Answer is required!!', 'ok', {
                duration: 3000
              });

              return;
            } //Now calling the server to add question


            this._questionService.addQuestion(this.questions).subscribe(function (data) {
              //success
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Success', 'Question Added!!!', 'success'); //after submit data form will be blank

              _this10.questions.content = '';
              _this10.questions.option1 = '';
              _this10.questions.option2 = '';
              _this10.questions.option3 = '';
              _this10.questions.option4 = '';
              _this10.questions.answer = '';
            }, function (error) {
              //error
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error', 'Server error while adding Questions', 'error');
            });
          }
        }]);

        return AddQuestionsComponent;
      }();

      AddQuestionsComponent.??fac = function AddQuestionsComponent_Factory(t) {
        return new (t || AddQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
      };

      AddQuestionsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: AddQuestionsComponent,
        selectors: [["app-add-questions"]],
        decls: 49,
        vars: 15,
        consts: [[1, "bootstrap-wrapper"], [1, "row"], [1, "col-md-12"], [1, "mt20", 3, "ngSubmit"], ["name", "content", 3, "editor", "ngModel", "ngModelChange"], [1, "col-md-6"], ["appearance", "fill", 1, "w100"], ["required", "", "type", "text", "name", "option1", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["required", "", "type", "text", "name", "option2", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "option3", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "option4", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["required", "", "name", "answer", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngIf"], [1, "container", "text-center"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["type", "reset", "mat-raised-button", "", "color", "accent", 1, "ml20"], [3, "value"]],
        template: function AddQuestionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, " Enter the detail of the new question!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function AddQuestionsComponent_Template_form_ngSubmit_10_listener() {
              return ctx.addQuestions();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "ckeditor", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function AddQuestionsComponent_Template_ckeditor_ngModelChange_11_listener($event) {
              return ctx.questions.content = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function AddQuestionsComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.questions.option1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function AddQuestionsComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.questions.option2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27, "Option 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function AddQuestionsComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.questions.option3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "Option 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function AddQuestionsComponent_Template_input_ngModelChange_33_listener($event) {
              return ctx.questions.option4 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, " <---Select Answer---> ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "mat-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function AddQuestionsComponent_Template_mat_select_ngModelChange_37_listener($event) {
              return ctx.questions.answer = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](38, AddQuestionsComponent_mat_option_38_Template, 2, 2, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](39, AddQuestionsComponent_mat_option_39_Template, 2, 2, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](40, AddQuestionsComponent_mat_option_40_Template, 2, 2, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](41, AddQuestionsComponent_mat_option_41_Template, 2, 2, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](44, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](46, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](48, "json");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Add Question to : ", ctx.qTitle, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("editor", ctx.Editor)("ngModel", ctx.questions.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.questions.option1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.questions.option2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.questions.option3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.questions.option4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.questions.answer);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.questions.option1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.questions.option2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.questions.option3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.questions.option4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](48, 13, ctx.questions), "\n");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["JsonPipe"]],
        styles: [".w100[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.w50[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1xdWVzdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJhZGQtcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudzEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnc1MCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-ui-loader */
      "gren");
      /* harmony import */


      var _componets_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./componets/navbar/navbar.component */
      "OxfQ");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'ExamForOnline';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [["fgsColor", "#ff4081", "pbColor", "#ff4081", "fgsType", "square-jelly-box", "text", "Please Wait...", "textColor", "#fff"], ["ngxUiLoaderBlurred", "", "blur", "10"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "ngx-ui-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__["??b"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__["??c"], _componets_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "TZ7s":
    /*!***************************************************************!*\
      !*** ./src/app/pages/user/about-quiz/about-quiz.component.ts ***!
      \***************************************************************/

    /*! exports provided: AboutQuizComponent */

    /***/
    function TZ7s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutQuizComponent", function () {
        return AboutQuizComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/quiz.service */
      "ofzi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var AboutQuizComponent = /*#__PURE__*/function () {
        function AboutQuizComponent(_route, _quizService) {
          _classCallCheck(this, AboutQuizComponent);

          this._route = _route;
          this._quizService = _quizService;
        }

        _createClass(AboutQuizComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.qid = this._route.snapshot.params.qid;
            console.log(this.qid); //method calling when ng init loading

            this.loadingQuizData(this.qid);
          }
        }, {
          key: "loadingQuizData",
          value: function loadingQuizData(qid) {
            var _this11 = this;

            this._quizService.getSingleQuiz(qid).subscribe(function (data) {
              //success
              _this11.viewQuizData = data;
              console.log(_this11.viewQuizData);
            }, function (error) {
              //error
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error', 'Server error while loading data', 'error');
            });
          }
        }]);

        return AboutQuizComponent;
      }();

      AboutQuizComponent.??fac = function AboutQuizComponent_Factory(t) {
        return new (t || AboutQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]));
      };

      AboutQuizComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: AboutQuizComponent,
        selectors: [["app-about-quiz"]],
        decls: 48,
        vars: 8,
        consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "mt20"], [1, "ml20"], [1, "text-center"], ["mat-raised-button", "", "color", "accent", 3, "routerLink"]],
        template: function AboutQuizComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " Read Quiz Details!!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, " Every questions have 2 min only ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-card-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Question Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Total Questions: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Total Marks: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Marks Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Total time to solve Time is : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "No Of Questions : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Each question carries : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](43, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](44, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "mat-card-actions", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Go");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.viewQuizData.title, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.viewQuizData.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.viewQuizData.numberOfQuestions);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.viewQuizData.maxMarks);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.viewQuizData.numberOfQuestions * 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.viewQuizData.numberOfQuestions);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.viewQuizData.maxMarks / ctx.viewQuizData.numberOfQuestions);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/user-dashboard/instructions/" + ctx.viewQuizData.qid);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC1xdWl6LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "UcdY":
    /*!**********************************************!*\
      !*** ./src/app/services/question.service.ts ***!
      \**********************************************/

    /*! exports provided: QuestionService */

    /***/
    function UcdY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionService", function () {
        return QuestionService;
      });
      /* harmony import */


      var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helper */
      "nYYN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var QuestionService = /*#__PURE__*/function () {
        function QuestionService(_http) {
          _classCallCheck(this, QuestionService);

          this._http = _http;
        }

        _createClass(QuestionService, [{
          key: "getQuestionsOfQuiz",
          value: function getQuestionsOfQuiz(qid) {
            return this._http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/question/quiz/all/").concat(qid));
          }
        }, {
          key: "getQuestionsOfQuizByIdAndTest",
          value: function getQuestionsOfQuizByIdAndTest(qid) {
            return this._http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/question/quiz/").concat(qid));
          } //add questions

        }, {
          key: "addQuestion",
          value: function addQuestion(questions) {
            return this._http.post("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/question/"), questions);
          } //getting particular question from the sever by using Id

        }, {
          key: "particularQuestionById",
          value: function particularQuestionById(quesId) {
            return this._http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/question/").concat(quesId));
          } //question update

        }, {
          key: "updateQuestionById",
          value: function updateQuestionById(questions) {
            return this._http.post("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/question/"), questions);
          } //delete particular question by Id

        }, {
          key: "deletingParticularQuestion",
          value: function deletingParticularQuestion(quesId) {
            return this._http["delete"]("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/question/").concat(quesId));
          } //to validate questions answers call to server and check questions answer on sever

        }, {
          key: "validateQuestionsAndAnswer",
          value: function validateQuestionsAndAnswer(questions) {
            return this._http.post("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/question/eval-quiz"), questions);
          }
        }]);

        return QuestionService;
      }();

      QuestionService.??fac = function QuestionService_Factory(t) {
        return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      QuestionService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: QuestionService,
        factory: QuestionService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "VdjN":
    /*!********************************************************************!*\
      !*** ./src/app/pages/admin/add-category/add-category.component.ts ***!
      \********************************************************************/

    /*! exports provided: AddCategoryComponent */

    /***/
    function VdjN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function () {
        return AddCategoryComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/category.service */
      "cPV5");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var AddCategoryComponent = /*#__PURE__*/function () {
        function AddCategoryComponent(_categoryService, _snackbar) {
          _classCallCheck(this, AddCategoryComponent);

          this._categoryService = _categoryService;
          this._snackbar = _snackbar;
          this.category = {
            title: '',
            description: ''
          };
        }

        _createClass(AddCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //add category form submit method

        }, {
          key: "addCategoryFormSubmit",
          value: function addCategoryFormSubmit() {
            var _this12 = this;

            if (this.category.title == '' || this.category.description == null) {
              this._snackbar.open("category title required!!!!", "ok", {
                duration: 3000
              });

              return;
            }

            if (this.category.description == '' || this.category.description == null) {
              this._snackbar.open("category description required!!!", "ok", {
                duration: 3000
              });

              return;
            }

            this._categoryService.addCategory(this.category).subscribe( //success
            function (data) {
              _this12.category.title = '';
              _this12.category.description = '';
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Success", "Category added successfully!!!", "success");
            }, function (error) {
              //Error
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Oop's", "Server Error Try Again!!!", "error");
            });
          }
        }]);

        return AddCategoryComponent;
      }();

      AddCategoryComponent.??fac = function AddCategoryComponent_Factory(t) {
        return new (t || AddCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      AddCategoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: AddCategoryComponent,
        selectors: [["app-add-category"]],
        decls: 21,
        vars: 2,
        consts: [[1, "bootstrap-wrapper"], [1, "row"], [1, "col-md-8", "offset-md-2"], [3, "ngSubmit"], ["appearance", "outline", 1, "w100"], ["required", "", "autofocus", "", "type", "text", "name", "title", "matInput", "", "placeholder", "Enter here..........", 3, "ngModel", "ngModelChange"], ["required", "", "type", "text", "name", "title", "rows", "15", "matInput", "", "placeholder", "Enter Category Description here.........", 3, "ngModel", "ngModelChange"], [1, "container", "text-center"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["type", "reset", "mat-raised-button", "", "color", "accent", 1, "ml20"]],
        template: function AddCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Add New Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function AddCategoryComponent_Template_form_ngSubmit_7_listener() {
              return ctx.addCategoryFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AddCategoryComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.category.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AddCategoryComponent_Template_textarea_ngModelChange_15_listener($event) {
              return ctx.category.description = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.category.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.category.description);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: [".w100[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6ImFkZC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLncxMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "Y5Lh":
    /*!****************************************************!*\
      !*** ./src/app/pages/profile/profile.component.ts ***!
      \****************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function Y5Lh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ProfileComponent_mat_card_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Your Profile Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Software Engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Harvard University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "User Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-card-actions", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Social Media ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Whatsapp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Linkdlen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Tiwtter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Gmail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r0.user.firstName, " ", ctx_r0.user.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.user.username, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Exam", ctx_r0.user.id, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.user.phone, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.user.authorities[0].authority, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.user.enabled ? "Active" : "Not Active", " ");
        }
      }

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(loginService) {
          _classCallCheck(this, ProfileComponent);

          this.loginService = loginService;
          this.user = null;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            //data fetch from local Storage
            // this.user = this.loginService.getUser();
            //data fetch from server
            this.loginService.getCurrentUser().subscribe(function (user) {
              _this13.user = user;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.??fac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]));
      };

      ProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "bootstarp-wrapper"], [1, "container"], [1, "row"], [1, "card", "col-md-5"], [1, "flip-box"], [1, "flip-box-inner"], [1, "flip-box-front", "text"], ["src", "../../../assets/default.png", "alt", "", 2, "width", "100%"], [1, "flip-box-back"], ["src", "../../../assets/user_profile.png", "alt", "", "height", "297", 2, "width", "297"], [1, "title"], [1, "button1"], [1, "col-md-5"], [1, "text-center"], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], [1, "col-md-2"], [1, "button2", "fb"], [1, "button2", "whatsapp", "mt20"], [1, "button2", "linkedin", "mt20"], [1, "button2", "twitter", "mt20"], [1, "button2", "google", "mt20"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ProfileComponent_mat_card_0_Template, 79, 7, "mat-card", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: [".card[_ngcontent-%COMP%] {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 350px;\r\n    margin: auto;\r\n    text-align: center;\r\n    font-family: arial;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    color: grey;\r\n    font-size: 18px;\r\n}\r\n\r\n.button1[_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: black;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n\r\n\r\n.flip-box[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    width: 300px;\r\n    height: 300px;\r\n    border: 1px solid #f1f1f1;\r\n    perspective: 1000px;\r\n}\r\n\r\n.flip-box-inner[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    transition: transform 0.8s;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n.flip-box[_ngcontent-%COMP%]:hover   .flip-box-inner[_ngcontent-%COMP%] {\r\n    transform: rotateX(180deg);\r\n}\r\n\r\n.flip-box-front[_ngcontent-%COMP%], .flip-box-back[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n}\r\n\r\n.flip-box-front[_ngcontent-%COMP%] {\r\n    background-color: #bbb;\r\n    color: black;\r\n}\r\n\r\n.flip-box-back[_ngcontent-%COMP%] {\r\n    background-color: dodgerblue;\r\n    color: white;\r\n    transform: rotateX(180deg);\r\n}\r\n\r\n\r\n\r\n.col[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 0;\r\n}\r\n\r\n\r\n\r\n.col[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 50%;\r\n    margin: auto;\r\n    padding: 0 50px;\r\n    margin-top: 6px;\r\n}\r\n\r\n\r\n\r\n.fb[_ngcontent-%COMP%] {\r\n    background-color: #3B5998;\r\n    color: white;\r\n}\r\n\r\n.twitter[_ngcontent-%COMP%] {\r\n    background-color: #55ACEE;\r\n    color: white;\r\n}\r\n\r\n.google[_ngcontent-%COMP%] {\r\n    background-color: #dd4b39;\r\n    color: white;\r\n}\r\n\r\n.whatsapp[_ngcontent-%COMP%] {\r\n    background-color: #0aa030;\r\n    color: white;\r\n}\r\n\r\n.linkedin[_ngcontent-%COMP%] {\r\n    background-color: #0f42b1;\r\n    color: white;\r\n}\r\n\r\n.button2[_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    \r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUdBLGlCQUFpQjs7QUFFakI7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBR0EsMkJBQTJCOztBQUUzQjtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUdBLHNCQUFzQjs7QUFFdEI7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFHQTs0QkFDNEI7O0FBRTVCO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7QUFDbkIiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUHJvZmlsZSBDc3MgKi9cclxuXHJcbi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmJ1dHRvbjEge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcixcclxuYTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcblxyXG4vKiBmbGlwIGJveCBjc3MgKi9cclxuXHJcbi5mbGlwLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxufVxyXG5cclxuLmZsaXAtYm94LWlubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4uZmxpcC1ib3g6aG92ZXIgLmZsaXAtYm94LWlubmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG59XHJcblxyXG4uZmxpcC1ib3gtZnJvbnQsXHJcbi5mbGlwLWJveC1iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mbGlwLWJveC1mcm9udCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZmxpcC1ib3gtYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbn1cclxuXHJcblxyXG4vKiBzb2NpYWwgbWVkaWEgbG9naW4gY3NzICovXHJcblxyXG4uY29sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuXHJcbi8qIFR3by1jb2x1bW4gbGF5b3V0ICovXHJcblxyXG4uY29sIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuXHJcbi8qICogYWRkIGFwcHJvcHJpYXRlIGNvbG9ycyB0byBmYixcclxudHdpdHRlciBhbmQgZ29vZ2xlIGJ1dHRvbnMgKi9cclxuXHJcbi5mYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0I1OTk4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udHdpdHRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVBQ0VFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ29vZ2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi53aGF0c2FwcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGFhMDMwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlua2VkaW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmNDJiMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbjIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDA7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _componets_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./componets/navbar/navbar.component */
      "OxfQ");
      /* harmony import */


      var _componets_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./componets/footer/footer.component */
      "BxJU");
      /* harmony import */


      var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/signup/signup.component */
      "o97b");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/auth.interceptor */
      "A6fv");
      /* harmony import */


      var _pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pages/admin/dashboard/dashboard.component */
      "qgmu");
      /* harmony import */


      var _pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pages/user/user-dashboard/user-dashboard.component */
      "Zvah");
      /* harmony import */


      var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/profile/profile.component */
      "Y5Lh");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _pages_admin_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./pages/admin/sidebar/sidebar.component */
      "+V0h");
      /* harmony import */


      var _pages_admin_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./pages/admin/welcome/welcome.component */
      "aT26");
      /* harmony import */


      var _pages_errorpage_error404_error404_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./pages/errorpage/error404/error404.component */
      "itMm");
      /* harmony import */


      var _pages_admin_view_categories_view_categories_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./pages/admin/view-categories/view-categories.component */
      "d8O7");
      /* harmony import */


      var _pages_admin_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./pages/admin/add-category/add-category.component */
      "VdjN");
      /* harmony import */


      var _pages_admin_view_quizzes_view_quizzes_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./pages/admin/view-quizzes/view-quizzes.component */
      "tqaK");
      /* harmony import */


      var _pages_admin_add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./pages/admin/add-quiz/add-quiz.component */
      "91Vl");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _pages_admin_update_quiz_update_quiz_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./pages/admin/update-quiz/update-quiz.component */
      "iwRK");
      /* harmony import */


      var _pages_admin_view_quiz_questions_view_quiz_questions_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./pages/admin/view-quiz-questions/view-quiz-questions.component */
      "z6IT");
      /* harmony import */


      var _pages_admin_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./pages/admin/add-questions/add-questions.component */
      "Q+l4");
      /* harmony import */


      var _pages_admin_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./pages/admin/update-question/update-question.component */
      "Gj8z");
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      "zioG");
      /* harmony import */


      var _pages_user_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./pages/user/sidebar/sidebar.component */
      "iitf");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var _pages_user_load_quiz_load_quiz_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./pages/user/load-quiz/load-quiz.component */
      "33Wh");
      /* harmony import */


      var _pages_user_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./pages/user/instructions/instructions.component */
      "0IEq");
      /* harmony import */


      var _pages_user_start_start_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./pages/user/start/start.component */
      "rihE");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ngx-ui-loader */
      "gren");
      /* harmony import */


      var _pages_admin_update_category_update_category_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./pages/admin/update-category/update-category.component */
      "gZ7j");
      /* harmony import */


      var _pages_user_about_quiz_about_quiz_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./pages/user/about-quiz/about-quiz.component */
      "TZ7s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // import { MatTableModule } from '@angular/material/table';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??fac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_46__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_46__["????defineInjector"]({
        providers: [_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptorProviders"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__["MatSlideToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_36__["CKEditorModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_38__["NgxChartsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_42__["MatProgressSpinnerModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_43__["NgxUiLoaderModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_43__["NgxUiLoaderHttpModule"].forRoot({
          showForeground: true
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_46__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _componets_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _componets_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"], _pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["UserDashboardComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"], _pages_admin_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["SidebarComponent"], _pages_admin_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_24__["WelcomeComponent"], _pages_errorpage_error404_error404_component__WEBPACK_IMPORTED_MODULE_25__["Error404Component"], _pages_admin_view_categories_view_categories_component__WEBPACK_IMPORTED_MODULE_26__["ViewCategoriesComponent"], _pages_admin_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_27__["AddCategoryComponent"], _pages_admin_view_quizzes_view_quizzes_component__WEBPACK_IMPORTED_MODULE_28__["ViewQuizzesComponent"], _pages_admin_add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_29__["AddQuizComponent"], _pages_admin_update_quiz_update_quiz_component__WEBPACK_IMPORTED_MODULE_32__["UpdateQuizComponent"], _pages_admin_view_quiz_questions_view_quiz_questions_component__WEBPACK_IMPORTED_MODULE_33__["ViewQuizQuestionsComponent"], _pages_admin_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_34__["AddQuestionsComponent"], _pages_admin_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_35__["UpdateQuestionComponent"], _pages_user_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_37__["SidebarComponent"], _pages_user_load_quiz_load_quiz_component__WEBPACK_IMPORTED_MODULE_39__["LoadQuizComponent"], _pages_user_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_40__["InstructionsComponent"], _pages_user_start_start_component__WEBPACK_IMPORTED_MODULE_41__["StartComponent"], _pages_admin_update_category_update_category_component__WEBPACK_IMPORTED_MODULE_44__["UpdateCategoryComponent"], _pages_user_about_quiz_about_quiz_component__WEBPACK_IMPORTED_MODULE_45__["AboutQuizComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__["MatSlideToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_36__["CKEditorModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_38__["NgxChartsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_42__["MatProgressSpinnerModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_43__["NgxUiLoaderModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_43__["NgxUiLoaderHttpModule"]]
        });
      })();
      /***/

    },

    /***/
    "Zvah":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/user/user-dashboard/user-dashboard.component.ts ***!
      \***********************************************************************/

    /*! exports provided: UserDashboardComponent */

    /***/
    function Zvah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function () {
        return UserDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../sidebar/sidebar.component */
      "iitf");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var UserDashboardComponent = /*#__PURE__*/function () {
        function UserDashboardComponent() {
          _classCallCheck(this, UserDashboardComponent);
        }

        _createClass(UserDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserDashboardComponent;
      }();

      UserDashboardComponent.??fac = function UserDashboardComponent_Factory(t) {
        return new (t || UserDashboardComponent)();
      };

      UserDashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserDashboardComponent,
        selectors: [["app-user-dashboard"]],
        decls: 7,
        vars: 0,
        consts: [[1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-md-2"], [1, "col-md-10"]],
        template: function UserDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-sidebar-user");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "aT26":
    /*!**********************************************************!*\
      !*** ./src/app/pages/admin/welcome/welcome.component.ts ***!
      \**********************************************************/

    /*! exports provided: WelcomeComponent */

    /***/
    function aT26(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
        return WelcomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var WelcomeComponent = /*#__PURE__*/function () {
        function WelcomeComponent(loginService) {
          var _this14 = this;

          _classCallCheck(this, WelcomeComponent);

          this.loginService = loginService; //Chart Data 

          this.saleData = [{
            name: "Mobiles",
            value: 105000
          }, {
            name: "Laptop",
            value: 55000
          }, {
            name: "AC",
            value: 15000
          }, {
            name: "Headset",
            value: 150000
          }, {
            name: "Fridge",
            value: 20000
          }];
          this.cardList = [{
            cid: 23,
            title: "programming"
          }, {
            cid: 23,
            title: "programming"
          }, {
            cid: 23,
            title: "programming"
          }, {
            cid: 23,
            title: "programming"
          }]; //this is a variable that hold number

          this.users = 0; //same process

          this.accuratecount = 0;
          this.clientcount = 0;
          this.customerfeedback = 0; //we have created setinterval function with arrow function and
          //and set them in a variable that is projectcountstop.

          this.projectcountstop = setInterval(function () {
            _this14.users++; //we need to stop this at  particular point; will use if condition

            if (_this14.users == _this14.users) {
              //clearinterval will stop tha function
              clearInterval(_this14.projectcountstop);
            }
          }, 10); //10 is milisecond you can control it

          this.accuratecountstop = setInterval(function () {
            _this14.accuratecount++;

            if (_this14.accuratecount == 97) {
              clearInterval(_this14.accuratecountstop);
            }
          }, 10);
          this.clientcountstop = setInterval(function () {
            _this14.clientcount++;

            if (_this14.clientcount == 5000) {
              clearInterval(_this14.clientcountstop);
            }
          }, 10);
          this.customerfeedbackstop = setInterval(function () {
            _this14.customerfeedback++;

            if (_this14.customerfeedback == 100) {
              clearInterval(_this14.customerfeedbackstop);
            }
          }, 10);
        }

        _createClass(WelcomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.loginService.getUserCount().subscribe(function (data) {
              // console.log(userList);
              _this15.users = data;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return WelcomeComponent;
      }();

      WelcomeComponent.??fac = function WelcomeComponent_Factory(t) {
        return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]));
      };

      WelcomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: WelcomeComponent,
        selectors: [["app-welcome"]],
        decls: 54,
        vars: 0,
        consts: [[1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "row", "mt20"], [1, "col-md-8"], [1, "text-center"], [1, "container"], [1, "skills", "html"], [1, "skills", "css"], [1, "skills", "js"], [1, "skills", "php"], [1, "col-md-4"], [1, "col-md-12"]],
        template: function WelcomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "User Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "HTML");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "90%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "CSS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "80%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "JavaScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "65%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "PHP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "100%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "New User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "HTML");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "90%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "CSS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "80%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "JavaScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "65%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "PHP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "100%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"]],
        styles: ["*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    \r\n    \r\n    \r\n}\r\n\r\n.skills[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    \r\n    padding-top: 10px;\r\n    \r\n    padding-bottom: 10px;\r\n    \r\n    color: white;\r\n    \r\n}\r\n\r\n.html[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #04AA6D;\r\n}\r\n\r\n\r\n\r\n.css[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #2196F3;\r\n}\r\n\r\n\r\n\r\n.js[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #f44336;\r\n}\r\n\r\n\r\n\r\n.php[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #808080;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7O0FBRS9DO0lBQ0k7QUFDSjs7QUFHQSw2QkFBNkI7O0FBRTdCO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBR0EsVUFBVTs7QUFFVjtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBR0EsU0FBUzs7QUFFVDtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBR0EsUUFBUTs7QUFFUjtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBR0EsY0FBYyIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNYWtlIHN1cmUgdGhhdCBwYWRkaW5nIGJlaGF2ZXMgYXMgZXhwZWN0ZWQgKi9cclxuXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG59XHJcblxyXG5cclxuLyogQ29udGFpbmVyIGZvciBza2lsbCBiYXJzICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgKi9cclxuICAgIC8qIEdyZXkgYmFja2dyb3VuZCAqL1xyXG59XHJcblxyXG4uc2tpbGxzIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLyogUmlnaHQtYWxpZ24gdGV4dCAqL1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAvKiBBZGQgdG9wIHBhZGRpbmcgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLyogQWRkIGJvdHRvbSBwYWRkaW5nICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvKiBXaGl0ZSB0ZXh0IGNvbG9yICovXHJcbn1cclxuXHJcbi5odG1sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcclxufVxyXG5cclxuXHJcbi8qIEdyZWVuICovXHJcblxyXG4uY3NzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxufVxyXG5cclxuXHJcbi8qIEJsdWUgKi9cclxuXHJcbi5qcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcblxyXG4vKiBSZWQgKi9cclxuXHJcbi5waHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xyXG59XHJcblxyXG5cclxuLyogRGFyayBHcmV5ICovIl19 */"]
      });
      /***/
    },

    /***/
    "cPV5":
    /*!**********************************************!*\
      !*** ./src/app/services/category.service.ts ***!
      \**********************************************/

    /*! exports provided: CategoryService */

    /***/
    function cPV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
        return CategoryService;
      });
      /* harmony import */


      var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helper */
      "nYYN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CategoryService = /*#__PURE__*/function () {
        function CategoryService(_http) {
          _classCallCheck(this, CategoryService);

          this._http = _http;
        } // load all the categories


        _createClass(CategoryService, [{
          key: "categories",
          value: function categories() {
            return this._http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/category/"));
          } // Add category

        }, {
          key: "addCategory",
          value: function addCategory(category) {
            return this._http.post("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/category/"), category);
          } // delete category

        }, {
          key: "deleteCategory",
          value: function deleteCategory(cid) {
            return this._http["delete"]("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/category/").concat(cid));
          } // get category by id

        }, {
          key: "getCategoryById",
          value: function getCategoryById(cid) {
            return this._http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/category/").concat(cid));
          } // updating category 

        }, {
          key: "updatingCategory",
          value: function updatingCategory(category) {
            return this._http.put("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/category/"), category);
          }
        }]);

        return CategoryService;
      }();

      CategoryService.??fac = function CategoryService_Factory(t) {
        return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CategoryService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: CategoryService,
        factory: CategoryService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "d8O7":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/admin/view-categories/view-categories.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ViewCategoriesComponent */

    /***/
    function d8O7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewCategoriesComponent", function () {
        return ViewCategoriesComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/category.service */
      "cPV5");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function ViewCategoriesComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ViewCategoriesComponent_div_4_div_1_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);

            var c_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r4.deleteCategory(c_r3.cid);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var c_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", c_r3.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", c_r3.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](c_r3.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/admin/category/" + c_r3.cid);
        }
      }

      function ViewCategoriesComponent_div_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-card-content", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "No Category Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-card-actions", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " Add New Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/admin/add-category");
        }
      }

      function ViewCategoriesComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, ViewCategoriesComponent_div_4_div_1_Template, 16, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, ViewCategoriesComponent_div_4_div_2_Template, 8, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r0.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.categories.length == 0);
        }
      }

      var ViewCategoriesComponent = /*#__PURE__*/function () {
        function ViewCategoriesComponent(_categories) {
          _classCallCheck(this, ViewCategoriesComponent);

          this._categories = _categories; // Category data in array format

          this.categories = [// Dummy Data
            // {
            //   id:23,
            //   title:"Programming",
            //   description:"This is testing purpose",
            // },
            // {
            //   id:24,
            //   title:"Matmatices",
            //   description:"This is testing purpose",
            // },
            // {
            //   id:25,
            //   title:"General Knowledge",
            //   description:"This is testing purpose",
            // },
          ];
        }

        _createClass(ViewCategoriesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this._categories.categories().subscribe(function (data) {
              //success
              _this16.categories = data; // console.log(this.categories);
            }, function (error) {
              //error
              console.log(error);
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Error", "Error in Lodaing data from the server", 'error');
            });
          } // Delete Category

        }, {
          key: "deleteCategory",
          value: function deleteCategory(cid) {
            var _this17 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              icon: 'warning',
              title: 'Are you sure ?',
              confirmButtonText: 'Delete',
              showCancelButton: true
            }).then(function (result) {
              if (result.isConfirmed) {
                //delete here
                _this17._categories.deleteCategory(cid).subscribe(function (data) {
                  //quiz filter after deleting
                  _this17.categories = _this17.categories = _this17.categories.filter(function (category) {
                    return category.cid != cid;
                  }); // console.log(cid);
                  // console.log(this.categories);
                  //success

                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Success', 'Category deleted!!', 'success');
                }, function (error) {
                  //error
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error', 'Error in deleting Category', 'error');
                });
              }
            });
          }
        }]);

        return ViewCategoriesComponent;
      }();

      ViewCategoriesComponent.??fac = function ViewCategoriesComponent_Factory(t) {
        return new (t || ViewCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]));
      };

      ViewCategoriesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: ViewCategoriesComponent,
        selectors: [["app-view-categories"]],
        decls: 5,
        vars: 1,
        consts: [[1, "bootstarp-wrapper"], [1, "container-fluid"], [1, "mt20"], ["class", "row", "mt20", "", 4, "ngIf"], ["mt20", "", 1, "row"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-6"], [1, "mb20"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "truncate"], ["mat-raised-button", "", "color", "primary", 1, "ml20", 3, "routerLink"], ["mat-raised-button", "", "color", "accent", 1, "ml20", 3, "click"], [1, "col-md-12"], [1, "text-center"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"]],
        template: function ViewCategoriesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Available Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, ViewCategoriesComponent_div_4_Template, 3, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.categories);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
        styles: [".truncate[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.example-card[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('quiz_icon2.png');\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVDQUEwRDtJQUMxRCxzQkFBc0I7QUFDMUIiLCJmaWxlIjoidmlldy1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJ1bmNhdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9xdWl6X2ljb24yLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "eSIX":
    /*!*****************************************!*\
      !*** ./src/app/services/admin.guard.ts ***!
      \*****************************************/

    /*! exports provided: AdminGuard */

    /***/
    function eSIX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
        return AdminGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.service */
      "EFyh");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AdminGuard = /*#__PURE__*/function () {
        //constructor
        function AdminGuard(loginService, router) {
          _classCallCheck(this, AdminGuard);

          this.loginService = loginService;
          this.router = router;
        }

        _createClass(AdminGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.loginService.isLoggedIn() && this.loginService.getUserRole() == "ADMIN") {
              //redirect Admin page
              return true;
            } // otherwise again redirect login page


            this.router.navigate(['login']);
            return false;
          }
        }]);

        return AdminGuard;
      }();

      AdminGuard.??fac = function AdminGuard_Factory(t) {
        return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AdminGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AdminGuard,
        factory: AdminGuard.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "gZ7j":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/admin/update-category/update-category.component.ts ***!
      \**************************************************************************/

    /*! exports provided: UpdateCategoryComponent */

    /***/
    function gZ7j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateCategoryComponent", function () {
        return UpdateCategoryComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/category.service */
      "cPV5");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var UpdateCategoryComponent = /*#__PURE__*/function () {
        function UpdateCategoryComponent(_route, _categoryService, _snackbar, _router) {
          _classCallCheck(this, UpdateCategoryComponent);

          this._route = _route;
          this._categoryService = _categoryService;
          this._snackbar = _snackbar;
          this._router = _router;
        }

        _createClass(UpdateCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            //Now get id from url with help of _route
            this.cid = this._route.snapshot.params.cid;
            console.log(this.cid);

            this._categoryService.getCategoryById(this.cid).subscribe(function (data) {
              //success
              _this18.catUpdateData = data; // console.log(this.catUpdateData);
            }, function (error) {
              //error
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error', 'Server error while loading data!!', 'error');
            });
          }
        }, {
          key: "updateCategoryONFormSubmit",
          value: function updateCategoryONFormSubmit() {
            var _this19 = this;

            if (this.catUpdateData.title == '' || this.catUpdateData.description == null) {
              this._snackbar.open("category title required!!!!", "ok", {
                duration: 3000
              });

              return;
            }

            if (this.catUpdateData.description == '' || this.catUpdateData.description == null) {
              this._snackbar.open("category description required!!!", "ok", {
                duration: 3000
              });

              return;
            } // calling server to updatiing category


            this._categoryService.updatingCategory(this.catUpdateData).subscribe(function (data) {
              //success
              _this19.catUpdateData.title = '';
              _this19.catUpdateData.description = '';
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Success', 'category updated', 'success').then(function (e) {
                //clicking ok then navigate to view Category Page
                _this19._router.navigate(['/admin/categories']);
              });
            }, function (error) {
              //error
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error', 'Error while updating category', 'error');
            });
          }
        }]);

        return UpdateCategoryComponent;
      }();

      UpdateCategoryComponent.??fac = function UpdateCategoryComponent_Factory(t) {
        return new (t || UpdateCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      UpdateCategoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: UpdateCategoryComponent,
        selectors: [["app-update-category"]],
        decls: 21,
        vars: 2,
        consts: [[1, "bootstrap-wrapper"], [1, "row"], [1, "col-md-8", "offset-md-2"], [3, "ngSubmit"], ["appearance", "outline", 1, "w100"], ["required", "", "autofocus", "", "type", "text", "name", "title", "matInput", "", "placeholder", "Enter here..........", 3, "ngModel", "ngModelChange"], ["required", "", "type", "text", "name", "description", "rows", "15", "matInput", "", "placeholder", "Enter Category Description here.........", 3, "ngModel", "ngModelChange"], [1, "container", "text-center"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["type", "reset", "mat-raised-button", "", "color", "accent", 1, "ml20"]],
        template: function UpdateCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Update Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function UpdateCategoryComponent_Template_form_ngSubmit_7_listener() {
              return ctx.updateCategoryONFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateCategoryComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.catUpdateData.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateCategoryComponent_Template_textarea_ngModelChange_15_listener($event) {
              return ctx.catUpdateData.description = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catUpdateData.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catUpdateData.description);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        styles: [".w100[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InVwZGF0ZS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLncxMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "iitf":
    /*!*********************************************************!*\
      !*** ./src/app/pages/user/sidebar/sidebar.component.ts ***!
      \*********************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function iitf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/category.service */
      "cPV5");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SidebarComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var c_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/user-dashboard/" + c_r1.cid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", c_r1.title, " ");
        }
      }

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(_categoryService) {
          _classCallCheck(this, SidebarComponent);

          this._categoryService = _categoryService;
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            // on Loading init method data loaded
            this._categoryService.categories().subscribe(function (data) {
              // Success 
              _this20.categories = data;
              console.log(" data is ", _this20.categories);
            }, function (error) {
              // Error
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Error", "Server Error while loading Categories", "error");
            });
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.??fac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]));
      };

      SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar-user"]],
        decls: 9,
        vars: 1,
        consts: [["mat-subheader", ""], ["mat-list-item", "", "routerLink", "/user-dashboard/0"], ["mat-list-icon", ""], ["mat-list-item", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "routerLink"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-action-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Available Categories");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "grid_view");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " All Quizzes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, SidebarComponent_button_8_Template, 4, 2, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.categories);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListIconCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "itMm":
    /*!****************************************************************!*\
      !*** ./src/app/pages/errorpage/error404/error404.component.ts ***!
      \****************************************************************/

    /*! exports provided: Error404Component */

    /***/
    function itMm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error404Component", function () {
        return Error404Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Error404Component = /*#__PURE__*/function () {
        function Error404Component() {
          _classCallCheck(this, Error404Component);
        }

        _createClass(Error404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error404Component;
      }();

      Error404Component.??fac = function Error404Component_Factory(t) {
        return new (t || Error404Component)();
      };

      Error404Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Error404Component,
        selectors: [["app-error404"]],
        decls: 26,
        vars: 0,
        consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "row"], [1, "col", "md-10"], [1, "stage"], [1, "layer"]],
        template: function Error404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["@import url('//fonts.googleapis.com/css?family=Pacifico&text=Pure');\r\n@import url('//fonts.googleapis.com/css?family=Roboto:700&text=css');\r\n@import url('//fonts.googleapis.com/css?family=Kaushan+Script&text=!');\r\nbody[_ngcontent-%COMP%] {\r\n    min-height: 450px;\r\n    height: 100vh;\r\n    margin: 0;\r\n    background: radial-gradient(circle, darken(dodgerblue, 10%), #1f4f96, #1b2949, #000);\r\n}\r\n.stage[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n    width: 500px;\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 20;\r\n    left: 0;\r\n    perspective: 9999px;\r\n    transform-style: preserve-3d;\r\n}\r\n.layer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    transform-style: preserve-3d;\r\n    -webkit-animation: \u0CA0_\u0CA0 5s infinite alternate ease-in-out -7.5s;\r\n            animation: \u0CA0_\u0CA0 5s infinite alternate ease-in-out -7.5s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    transform: rotateY(40deg) rotateX(33deg) translateZ(0);\r\n}\r\n.layer[_ngcontent-%COMP%]:after {\r\n    font: 150px/0.65 'Pacifico', 'Kaushan Script', Futura, 'Roboto', 'Trebuchet MS', Helvetica, sans-serif;\r\n    content: '404  :( \\A   Page not\\A Found';\r\n    white-space: pre;\r\n    text-align: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 50px;\r\n    color: darken(#fff, 4%);\r\n    letter-spacing: -2px;\r\n    text-shadow: 4px 0 10px hsla(0, 0%, 0%, .13);\r\n}\r\n$i[_ngcontent-%COMP%]:   1[_ngcontent-%COMP%];\r\n$NUM_LAYERS[_ngcontent-%COMP%]:   20[_ngcontent-%COMP%];\r\n@for $i from 1 through $NUM_LAYERS {\r\n    .layer:nth-child(#{$i}):after {\r\n        transform: translateZ(($i - 1) * -1.5px);\r\n    }\r\n}\r\n.layer[_ngcontent-%COMP%]:nth-child(n + #[_ngcontent-%COMP%]{round($NUM_LAYERS/2)})[_ngcontent-%COMP%]:after {\r\n    -webkit-text-stroke: 3px hsla(0, 0%, 0%, .25);\r\n}\r\n.layer[_ngcontent-%COMP%]:nth-child(n + #[_ngcontent-%COMP%]{round($NUM_LAYERS/2 + 1)})[_ngcontent-%COMP%]:after {\r\n    -webkit-text-stroke: 15px dodgerblue;\r\n    text-shadow: 6px 0 6px darken(dodgerblue, 35%), 5px 5px 5px darken(dodgerblue, 40%), 0 6px 6px darken(dodgerblue, 35%);\r\n}\r\n.layer[_ngcontent-%COMP%]:nth-child(n + #[_ngcontent-%COMP%]{round($NUM_LAYERS/2 + 2)})[_ngcontent-%COMP%]:after {\r\n    -webkit-text-stroke: 15px darken(dodgerblue, 10%);\r\n}\r\n.layer[_ngcontent-%COMP%]:last-child:after {\r\n    -webkit-text-stroke: 17px hsla(0, 0%, 0%, .1);\r\n}\r\n.layer[_ngcontent-%COMP%]:first-child:after {\r\n    color: #fff;\r\n    text-shadow: none;\r\n}\r\n@-webkit-keyframes \u0CA0_\u0CA0 {\r\n    100% {\r\n        transform: rotateY(-40deg) rotateX(-43deg);\r\n    }\r\n}\r\n@keyframes \u0CA0_\u0CA0 {\r\n    100% {\r\n        transform: rotateY(-40deg) rotateX(-43deg);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yNDA0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FO0FBQ25FLG9FQUFvRTtBQUNwRSxzRUFBc0U7QUFDdEU7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFNBQVM7SUFDVCxvRkFBb0Y7QUFDeEY7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFVBQVU7SUFDVixPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLDhEQUFzRDtZQUF0RCxzREFBc0Q7SUFDdEQscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QixzREFBc0Q7QUFDMUQ7QUFFQTtJQUNJLHNHQUFzRztJQUN0Ryx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQiw0Q0FBNEM7QUFDaEQ7QUFFQSxLQUFLO0FBQ0wsZUFBZTtBQUNmO0lBQ0k7UUFDSSx3Q0FBd0M7SUFDNUM7QUFDSjtBQUVBO0lBQ0ksNkNBQTZDO0FBQ2pEO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsc0hBQXNIO0FBQzFIO0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDtBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0k7UUFDSSwwQ0FBMEM7SUFDOUM7QUFDSjtBQUpBO0lBQ0k7UUFDSSwwQ0FBMEM7SUFDOUM7QUFDSiIsImZpbGUiOiJlcnJvcjQwNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJy8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QYWNpZmljbyZ0ZXh0PVB1cmUnKTtcclxuQGltcG9ydCB1cmwoJy8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NzAwJnRleHQ9Y3NzJyk7XHJcbkBpbXBvcnQgdXJsKCcvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2F1c2hhbitTY3JpcHQmdGV4dD0hJyk7XHJcbmJvZHkge1xyXG4gICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgZGFya2VuKGRvZGdlcmJsdWUsIDEwJSksICMxZjRmOTYsICMxYjI5NDksICMwMDApO1xyXG59XHJcblxyXG4uc3RhZ2Uge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAyMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwZXJzcGVjdGl2ZTogOTk5OXB4O1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLmxheWVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIGFuaW1hdGlvbjog4LKgX+CyoCA1cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQgLTcuNXM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg0MGRlZykgcm90YXRlWCgzM2RlZykgdHJhbnNsYXRlWigwKTtcclxufVxyXG5cclxuLmxheWVyOmFmdGVyIHtcclxuICAgIGZvbnQ6IDE1MHB4LzAuNjUgJ1BhY2lmaWNvJywgJ0thdXNoYW4gU2NyaXB0JywgRnV0dXJhLCAnUm9ib3RvJywgJ1RyZWJ1Y2hldCBNUycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbnRlbnQ6ICc0MDQgIDooIFxcQSAgIFBhZ2Ugbm90XFxBIEZvdW5kJztcclxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGNvbG9yOiBkYXJrZW4oI2ZmZiwgNCUpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogNHB4IDAgMTBweCBoc2xhKDAsIDAlLCAwJSwgLjEzKTtcclxufVxyXG5cclxuJGk6IDE7XHJcbiROVU1fTEFZRVJTOiAyMDtcclxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkTlVNX0xBWUVSUyB7XHJcbiAgICAubGF5ZXI6bnRoLWNoaWxkKCN7JGl9KTphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCgkaSAtIDEpICogLTEuNXB4KTtcclxuICAgIH1cclxufVxyXG5cclxuLmxheWVyOm50aC1jaGlsZChuKyN7cm91bmQoJE5VTV9MQVlFUlMvMil9KTphZnRlciB7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAzcHggaHNsYSgwLCAwJSwgMCUsIC4yNSk7XHJcbn1cclxuXHJcbi5sYXllcjpudGgtY2hpbGQobisje3JvdW5kKCROVU1fTEFZRVJTLzIgKyAxKX0pOmFmdGVyIHtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDE1cHggZG9kZ2VyYmx1ZTtcclxuICAgIHRleHQtc2hhZG93OiA2cHggMCA2cHggZGFya2VuKGRvZGdlcmJsdWUsIDM1JSksIDVweCA1cHggNXB4IGRhcmtlbihkb2RnZXJibHVlLCA0MCUpLCAwIDZweCA2cHggZGFya2VuKGRvZGdlcmJsdWUsIDM1JSk7XHJcbn1cclxuXHJcbi5sYXllcjpudGgtY2hpbGQobisje3JvdW5kKCROVU1fTEFZRVJTLzIgKyAyKX0pOmFmdGVyIHtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDE1cHggZGFya2VuKGRvZGdlcmJsdWUsIDEwJSk7XHJcbn1cclxuXHJcbi5sYXllcjpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDE3cHggaHNsYSgwLCAwJSwgMCUsIC4xKTtcclxufVxyXG5cclxuLmxheWVyOmZpcnN0LWNoaWxkOmFmdGVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMg4LKgX+CyoCB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTQwZGVnKSByb3RhdGVYKC00M2RlZyk7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "iwRK":
    /*!******************************************************************!*\
      !*** ./src/app/pages/admin/update-quiz/update-quiz.component.ts ***!
      \******************************************************************/

    /*! exports provided: UpdateQuizComponent */

    /***/
    function iwRK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateQuizComponent", function () {
        return UpdateQuizComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/quiz.service */
      "ofzi");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/category.service */
      "cPV5");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function UpdateQuizComponent_form_6_mat_option_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var c_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", c_r2.cid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", c_r2.title, " ");
        }
      }

      function UpdateQuizComponent_form_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function UpdateQuizComponent_form_6_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r3.updateQuiz();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Enter Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateQuizComponent_form_6_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r5.quiz.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Enter Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "textarea", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateQuizComponent_form_6_Template_textarea_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r6.quiz.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Maximum Marks");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateQuizComponent_form_6_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r7.quiz.maxMarks = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Number of Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateQuizComponent_form_6_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r8.quiz.numberOfQuestions = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "mat-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateQuizComponent_form_6_Template_mat_select_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r9.quiz.category.cid = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, UpdateQuizComponent_form_6_mat_option_26_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "mat-slide-toggle", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateQuizComponent_form_6_Template_mat_slide_toggle_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r10.quiz.active = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, " Publish Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Update Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r0.quiz.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r0.quiz.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r0.quiz.maxMarks);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r0.quiz.numberOfQuestions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r0.quiz.category.cid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r0.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r0.quiz.active);
        }
      }

      var UpdateQuizComponent = /*#__PURE__*/function () {
        //ActivatedRoute predefined 
        function UpdateQuizComponent(_route, _quizService, _categoryService, _snackBar, router) {
          _classCallCheck(this, UpdateQuizComponent);

          this._route = _route;
          this._quizService = _quizService;
          this._categoryService = _categoryService;
          this._snackBar = _snackBar;
          this.router = router;
          this.qId = 0; //undefined
        }

        _createClass(UpdateQuizComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.qId = this._route.snapshot.params.qid; // console.log(this.qId);

            this._quizService.getSingleQuiz(this.qId).subscribe(function (data) {
              //success
              _this21.quiz = data;
              console.log(_this21.quiz);
            }, function (error) {
              //error
              console.log(error);
            });

            this._categoryService.categories().subscribe(function (data) {
              //loading categories from server
              _this21.categories = data;
              console.log(_this21.categories);
            }, function (error) {
              //error
              console.log(error);
            });
          } //update quiz

        }, {
          key: "updateQuiz",
          value: function updateQuiz() {
            var _this22 = this;

            if (this.quiz.title.trim() == '' || this.quiz.title == null) {
              this._snackBar.open('title is required!!', 'ok', {
                duration: 3000
              });

              return;
            }

            if (this.quiz.description.trim() == '' || this.quiz.description == null) {
              this._snackBar.open('description is required!!', 'ok', {
                duration: 3000
              });

              return;
            }

            if (this.quiz.maxMarks.trim() == '' || this.quiz.maxMarks == null) {
              this._snackBar.open('Max Marks is required!!', 'ok', {
                duration: 3000
              });

              return;
            }

            if (this.quiz.numberOfQuestions.trim() == '' || this.quiz.numberOfQuestions == null) {
              this._snackBar.open('Number of questions is required!!', 'ok', {
                duration: 3000
              });

              return;
            }

            if (this.quiz.category.cid == '' || this.quiz.category.cid == null) {
              this._snackBar.open('category is required!!', 'ok', {
                duration: 3000
              });

              return;
            } //Now calling server to update quiz


            this._quizService.updatingQuizById(this.quiz).subscribe(function (data) {
              //success
              _this22.quiz.title = '', _this22.quiz.description = '', _this22.quiz.maxMarks = '', _this22.quiz.numberOfQuestions = '', _this22.quiz.category.cid = '', sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Success', 'Quiz updated..', 'success').then(function (e) {
                //clicking ok then navigate to view quiz
                _this22.router.navigate(['/admin/quizzes']);
              });
            }, function (error) {
              //error
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error', 'Server error while updating quiz', 'error');
            });
          }
        }]);

        return UpdateQuizComponent;
      }();

      UpdateQuizComponent.??fac = function UpdateQuizComponent_Factory(t) {
        return new (t || UpdateQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      UpdateQuizComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: UpdateQuizComponent,
        selectors: [["app-update-quiz"]],
        decls: 7,
        vars: 1,
        consts: [[1, "container"], [1, "row"], [1, "col", "md", "8", "offset-md-2"], [3, "ngSubmit", 4, "ngIf"], [3, "ngSubmit"], ["appearance", "outline", 1, "w100"], ["type", "text", "name", "title", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["type", "text", "rows", "10", "name", "description placeholder=", "matInput", "", "Enter", "", "description", "", "Here.....", "", 3, "ngModel", "ngModelChange"], [1, "col-md-6"], ["type", "text", "name", "maxMarks", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "numberOfQuestions", "placeholder", "Enter Here.....", "matInput", "", 3, "ngModel", "ngModelChange"], ["appearance", "fill", 1, "w50"], ["name", "category", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "active", 1, "mt20", 3, "ngModel", "ngModelChange"], [1, "container", "text-center"], ["mat-raised-button", "", "color", "accent"], [3, "value"]],
        template: function UpdateQuizComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Update Quiz");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, UpdateQuizComponent_form_6_Template, 33, 7, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.quiz);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
        styles: [".w100[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.w50[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoidXBkYXRlLXF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53MTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udzUwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "nYYN":
    /*!************************************!*\
      !*** ./src/app/services/helper.ts ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function nYYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); // const baseUrl = 'https://spring-angular-project.herokuapp.com';


      var baseUrl = 'http://localhost:8080';
      /* harmony default export */

      __webpack_exports__["default"] = baseUrl;
      /***/
    },

    /***/
    "o97b":
    /*!**************************************************!*\
      !*** ./src/app/pages/signup/signup.component.ts ***!
      \**************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function o97b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(userService, snack) {
          _classCallCheck(this, SignupComponent);

          this.userService = userService;
          this.snack = snack; // User Binding Object

          this.user = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
          };
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // Form Submit

        }, {
          key: "formSubmit",
          value: function formSubmit() {
            console.log(this.user); // Validations

            if (this.user.username == '' || this.user.username == null) {
              // alert("Username Required!!")
              this.snack.open("Username is required!!", 'ok', {
                duration: 3000
              });
              return;
            }

            if (this.user.password == '' || this.user.password == null) {
              this.snack.open("password is required!!", 'ok', {
                duration: 3000
              });
              return;
            }

            if (this.user.firstName == '' || this.user.firstName == null) {
              this.snack.open("firstName is required!!", 'ok', {
                duration: 3000
              });
              return;
            }

            if (this.user.lastName == '' || this.user.lastName == null) {
              this.snack.open("lastName is required!!", 'ok', {
                duration: 3000
              });
              return;
            }

            if (this.user.email == '' || this.user.email == null) {
              this.snack.open("email address is required!!", 'ok', {
                duration: 3000
              });
              return;
            }

            if (this.user.phone == '' || this.user.phone == null) {
              this.snack.open("phone number is required!!", 'ok', {
                duration: 3000
              });
              return;
            } // AddUser Method Calling From UserServices


            this.userService.addUser(this.user).subscribe(function (data) {
              //Success
              console.log(data); // alert("Success")

              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Succcessfully done!!", "User is succcessfully registered and id is  " + data.id, "success");
            }, function (error) {
              //Error
              console.log(error); // alert("Something went to wrong!!!")
              // this.snack.open("Something went wrong!!!",'ok',{
              //   duration: 3000,
              // });

              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Oops...", error.error.text, "error"); // this.snack.open(error.error.text,"ok");
            });
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.??fac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      SignupComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 44,
        vars: 6,
        consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3"], [1, "container", "text-center"], ["src", "../../../assets/register1.png", "width", "150px", "height", "150px", "alt", ""], [1, "text-center"], [3, "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["required", "", "name", "username", "matInput", "", "placeholder", "Enter Here!", 3, "ngModel", "ngModelChange"], ["required", "", "name", "password", "type", "password", "matInput", "", "placeholder", "Enter Here!", 3, "ngModel", "ngModelChange"], [1, "col-md-6"], ["required", "", "name", "firstName", "matInput", "", "placeholder", "Enter Here!", 3, "ngModel", "ngModelChange"], ["required", "", "name", "lastName", "matInput", "", "placeholder", "Enter Here!", 3, "ngModel", "ngModelChange"], ["required", "", "name", "email", "type", "email", "matInput", "", "placeholder", "Enter Here!", 3, "ngModel", "ngModelChange"], ["required", "", "name", "phone", "type", "number", "matInput", "", "placeholder", "Enter Here!", 3, "ngModel", "ngModelChange"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["type", "reset", "mat-raised-button", "", "color", "accent", 1, "ml20"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Register Here!!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_9_listener() {
              return ctx.formSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.user.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "User Name must be unique !!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.user.firstName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.user.lastName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_38_listener($event) {
              return ctx.user.phone = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.phone);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: [".full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.w50[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53NTAge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "ofzi":
    /*!******************************************!*\
      !*** ./src/app/services/quiz.service.ts ***!
      \******************************************/

    /*! exports provided: QuizService */

    /***/
    function ofzi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuizService", function () {
        return QuizService;
      });
      /* harmony import */


      var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helper */
      "nYYN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var QuizService = /*#__PURE__*/function () {
        function QuizService(_http) {
          _classCallCheck(this, QuizService);

          this._http = _http;
        } //get all quizess from server(database)


        _createClass(QuizService, [{
          key: "quizess",
          value: function quizess() {
            return this._http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/quiz/"));
          } //add quiz

        }, {
          key: "addingNewQuiz",
          value: function addingNewQuiz(quizData) {
            return this._http.post("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/quiz/"), quizData);
          } //delete quiz

        }, {
          key: "quizDelete",
          value: function quizDelete(qid) {
            return this._http["delete"]("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/quiz/").concat(qid));
          } //get the single quiz

        }, {
          key: "getSingleQuiz",
          value: function getSingleQuiz(qid) {
            return this._http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/quiz/").concat(qid));
          } //update the quiz by Id

        }, {
          key: "updatingQuizById",
          value: function updatingQuizById(quizUpdate) {
            return this._http.put("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/quiz/"), quizUpdate);
          } // Get Specfic Quizzes by Category

        }, {
          key: "getQuizzesOfCategory",
          value: function getQuizzesOfCategory(cid) {
            return this._http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/quiz/category/").concat(cid));
          } // Get Active Quizzs

        }, {
          key: "getActiveQuzzes",
          value: function getActiveQuzzes() {
            return this._http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/quiz/active"));
          }
        }, {
          key: "getActiveQuzzesOfCategory",
          value: function getActiveQuzzesOfCategory(cid) {
            return this._http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/quiz/active/category/").concat(cid));
          }
        }]);

        return QuizService;
      }();

      QuizService.??fac = function QuizService_Factory(t) {
        return new (t || QuizService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      QuizService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: QuizService,
        factory: QuizService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helper */
      "nYYN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var UserService = /*#__PURE__*/function () {
        function UserService( // AutoWiring HttpClient
        http) {
          _classCallCheck(this, UserService);

          this.http = http;
        } // Add User


        _createClass(UserService, [{
          key: "addUser",
          value: function addUser(user) {
            return this.http.post("".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["default"], "/user/"), user);
          }
        }]);

        return UserService;
      }();

      UserService.??fac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      UserService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: UserService,
        factory: UserService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "qgmu":
    /*!**************************************************************!*\
      !*** ./src/app/pages/admin/dashboard/dashboard.component.ts ***!
      \**************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function qgmu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../sidebar/sidebar.component */
      "+V0h");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.??fac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 7,
        vars: 0,
        consts: [[1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-md-2"], [1, "col-md-10"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "rihE":
    /*!*****************************************************!*\
      !*** ./src/app/pages/user/start/start.component.ts ***!
      \*****************************************************/

    /*! exports provided: StartComponent */

    /***/
    function rihE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
        return StartComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/question.service */
      "UcdY");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function StartComponent_div_0_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, " On Going Quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r4.questions[0].quiz.title);
        }
      }

      function StartComponent_div_0_mat_card_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function StartComponent_div_0_mat_card_18_Template_input_ngModelChange_9_listener($event) {
            var q_r6 = ctx.$implicit;
            return q_r6.givenAnswer = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function StartComponent_div_0_mat_card_18_Template_input_ngModelChange_12_listener($event) {
            var q_r6 = ctx.$implicit;
            return q_r6.givenAnswer = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function StartComponent_div_0_mat_card_18_Template_input_ngModelChange_16_listener($event) {
            var q_r6 = ctx.$implicit;
            return q_r6.givenAnswer = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function StartComponent_div_0_mat_card_18_Template_input_ngModelChange_19_listener($event) {
            var q_r6 = ctx.$implicit;
            return q_r6.givenAnswer = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var q_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Q: ", i_r7 + 1, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("innerHTML", q_r6.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", q_r6.givenAnswer)("value", q_r6.option1)("name", i_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", q_r6.option1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", q_r6.givenAnswer)("value", q_r6.option2)("name", i_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", q_r6.option2, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", q_r6.givenAnswer)("value", q_r6.option3)("name", i_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", q_r6.option3, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", q_r6.givenAnswer)("value", q_r6.option4)("name", i_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", q_r6.option4, " ");
        }
      }

      function StartComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Instrustions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Please Do not refresh page otherwise question will be lost and new questions will suffles");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Don't switch tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Don't minimize current window");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, StartComponent_div_0_ng_container_17_Template, 5, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, StartComponent_div_0_mat_card_18_Template, 21, 18, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function StartComponent_div_0_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r12.submitQuiz();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Submit Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "mat-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, " Progress ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, " Quiz will automatically submitted when timer reaches to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, ": 0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](34, "mat-spinner", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.questions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r0.questions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", ctx_r0.getFormatedTime(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx_r0.isTimer / (ctx_r0.questions.length * 2 * 60) * 100);
        }
      }

      function StartComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "No data Available in this Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/user-dashboard/0");
        }
      }

      function StartComponent_ng_template_2_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, " Quiz Result ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-card-content", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-card-actions", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function StartComponent_ng_template_2_div_0_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r15.printPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, " Print");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Marks Obtained: ", ctx_r14.marksGot, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Correct Answers : ", ctx_r14.correctAnswers, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Question Attemped: ", ctx_r14.attempted, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/user-dashboard/0");
        }
      }

      function StartComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, StartComponent_ng_template_2_div_0_Template, 19, 4, "div", 0);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r3.isSubmit);
        }
      }

      var StartComponent = /*#__PURE__*/function () {
        function StartComponent(_locationSt, _route, _questionService) {
          _classCallCheck(this, StartComponent);

          this._locationSt = _locationSt;
          this._route = _route;
          this._questionService = _questionService; // Calculating marks

          this.marksGot = 0;
          this.correctAnswers = 0;
          this.attempted = 0;
          this.isSubmit = false;
        }

        _createClass(StartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.qid = this._route.snapshot.params.qid;
            this.loadQuestions();
            this.preventBackButton();
          }
        }, {
          key: "loadQuestions",
          value: function loadQuestions() {
            var _this23 = this;

            this._questionService.getQuestionsOfQuizByIdAndTest(this.qid).subscribe(function (data) {
              //success
              _this23.questions = data; // Timmer will start while questions is loading

              _this23.isTimer = _this23.questions.length * 2 * 60; // // add new key and value for user given answers
              // this.questions.forEach((q)=>{
              //   q['givenAnswer'] = '';
              // });

              console.log(_this23.questions); //Start timer function here

              _this23.startTimmer();
            }, function (error) {
              //error
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Error", "Server error while loading questions", "error");
            });
          } //Prevent to back button

        }, {
          key: "preventBackButton",
          value: function preventBackButton() {
            history.pushState(null, null, location.href);

            this._locationSt.onPopState(function () {
              history.pushState(null, null, location.href);
            });
          } // Submit Quiz and calculating

        }, {
          key: "submitQuiz",
          value: function submitQuiz() {
            var _this24 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              title: 'Do you want submit quiz',
              showCancelButton: true,
              confirmButtonText: 'Submit Quiz',
              icon: 'warning'
            }).then(function (e) {
              if (e.isConfirmed) {
                // User manually submit quiz then ask confirmation before submited quiz
                _this24.evalQuiz();
              }
            });
          }
        }, {
          key: "startTimmer",
          value: function startTimmer() {
            var _this25 = this;

            var t = window.setInterval(function () {
              //code
              if (_this25.isTimer <= 0) {
                // After Completing time quiz will submitedd automatically without confirmation
                _this25.evalQuiz();

                clearInterval(t);
              } else {
                _this25.isTimer--;
              }
            }, 1000);
          } //time formated

        }, {
          key: "getFormatedTime",
          value: function getFormatedTime() {
            var min = Math.floor(this.isTimer / 60);
            var sec = this.isTimer - min * 60;
            return "".concat(min, " Min : ").concat(sec, " Sec");
          }
        }, {
          key: "evalQuiz",
          value: function evalQuiz() {
            var _this26 = this;

            //calculations here
            //  Call to server to check questions
            this._questionService.validateQuestionsAndAnswer(this.questions).subscribe(function (data) {
              console.log(data);
              _this26.marksGot = parseFloat(Number(data.marksGot).toFixed(2));
              _this26.correctAnswers = data.correctAnswers;
              _this26.attempted = data.attempted;
              _this26.isSubmit = true;
              console.log("=====================> ", _this26.correctAnswers);
            }, function (error) {
              //error
              console.log(error);
            }); // this.isSubmit = true;
            //             this.questions.forEach((q)=>{
            //               if (q.givenAnswer == q.answer){
            //                   this.correctAnswers++;
            //                   let marksSingle = this.questions[0].quiz.maxMarks / this.questions.length;
            //                   this.marksGot += marksSingle;
            //               }
            //               //Calculating attpemting questions
            //               if(q.givenAnswer.trim() != ''){
            //                  this.attempted++;
            //               }
            //             });
            // console.log("Correct Answers :" + this.correctAnswers);
            // console.log('Marks got' + this.marksGot);
            // console.log('Question Attempted' + this.attempted++);
            // console.log(this.questions);

          } // Print Page

        }, {
          key: "printPage",
          value: function printPage() {
            window.print();
          }
        }]);

        return StartComponent;
      }();

      StartComponent.??fac = function StartComponent_Factory(t) {
        return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"]));
      };

      StartComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: StartComponent,
        selectors: [["app-start"]],
        decls: 4,
        vars: 3,
        consts: [["class", "bootstrap-wrapper", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["elseStatement", ""], [1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-md-2"], [1, "spinner_center"], [1, "col-md-8"], [4, "ngIf"], ["class", "mt20", 4, "ngFor", "ngForOf"], [1, "container", "text-center", "mt20"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "text-center"], ["color", "accent", "mode", "determinate", 1, "spinner_auto", 3, "value"], [1, "mt20"], [3, "innerHTML"], [1, "row", "mt20"], [1, "col-md-6"], ["type", "radio", 3, "ngModel", "value", "name", "ngModelChange"], [1, "col-md-12"], [1, "ml20", "text-center"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], [1, "col-md-6", "offset-md-3"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
        template: function StartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, StartComponent_div_0_Template, 35, 4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, StartComponent_div_1_Template, 8, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, StartComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.isSubmit);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.questions.length == 0)("ngIfElse", _r2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: [".spinner_center[_ngcontent-%COMP%] {\r\n    margin-top: 70px;\r\n}\r\n\r\n.spinner_auto[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InN0YXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lcl9jZW50ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG5cclxuLnNwaW5uZXJfYXV0byB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "tqaK":
    /*!********************************************************************!*\
      !*** ./src/app/pages/admin/view-quizzes/view-quizzes.component.ts ***!
      \********************************************************************/

    /*! exports provided: ViewQuizzesComponent */

    /***/
    function tqaK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewQuizzesComponent", function () {
        return ViewQuizzesComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/quiz.service */
      "ofzi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function ViewQuizzesComponent_mat_card_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-card-action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Attempts");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ViewQuizzesComponent_mat_card_2_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4);

            var q_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r3.deleteQuiz(q_r2.qid);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "DELETE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var q_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", q_r2.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](q_r2.category.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](q_r2.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Max Marks: ", q_r2.maxMarks, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Questions: ", q_r2.numberOfQuestions, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Quiz Publish : ", q_r2.active, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/admin/view-questions/" + q_r2.qid + "/" + q_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/admin/quiz/" + q_r2.qid);
        }
      }

      function ViewQuizzesComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-card-content", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "No Quiz Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-card-actions", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Add New Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var ViewQuizzesComponent = /*#__PURE__*/function () {
        function ViewQuizzesComponent(_quizService) {
          _classCallCheck(this, ViewQuizzesComponent);

          this._quizService = _quizService;
          this.quizdata = [//dummy data
            // {
            //   qid:27,
            //   title:"Java Basic",
            //   description:"This is java basic content",
            //   maxMarks: "200",
            //   numberOfQuestions:"20",
            //   active:"True",
            //   category:{
            //     title:"Programming",
            //   },
            // },
            // {
            //   qid:27,
            //   title:"Java Basic",
            //   description:"This is java basic content",
            //   maxMarks: "200",
            //   numberOfQuestions:"20",
            //   active:"True",
            //   category:{
            //     title:"Programming",
            //   },
            // },
            // {
            //   qid:27,
            //   title:"Java Basic",
            //   description:"This is java basic content",
            //   maxMarks: "200",
            //   numberOfQuestions:"20",
            //   active:"True",
            //   category:{
            //     title:"Programming",
            //   },
            // },
          ];
        }

        _createClass(ViewQuizzesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            this._quizService.quizess().subscribe(function (data) {
              //success
              _this27.quizdata = data;
            }, function (error) {
              //error
              console.log(error);
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error', 'Error in Lodaing data from the server', 'error');
            }); // if (this.active == false){
            // }

          } //delete Quiz

        }, {
          key: "deleteQuiz",
          value: function deleteQuiz(qid) {
            var _this28 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              icon: 'warning',
              title: 'Are you sure ?',
              confirmButtonText: 'Delete',
              showCancelButton: true
            }).then(function (result) {
              if (result.isConfirmed) {
                //delete here
                _this28._quizService.quizDelete(qid).subscribe(function (data) {
                  //quiz filter after deleting
                  _this28.quizdata = _this28.quizdata = _this28.quizdata.filter(function (quiz) {
                    return quiz.qid != qid;
                  }); //success

                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Success', 'Quiz deleted!!', 'success');
                }, function (error) {
                  //error
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error', 'Error in deleting quiz', 'error');
                });
              }
            });
          }
        }]);

        return ViewQuizzesComponent;
      }();

      ViewQuizzesComponent.??fac = function ViewQuizzesComponent_Factory(t) {
        return new (t || ViewQuizzesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]));
      };

      ViewQuizzesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: ViewQuizzesComponent,
        selectors: [["app-view-quizzes"]],
        decls: 4,
        vars: 2,
        consts: [[1, "mt20"], ["class", "mt10 mr20 ml20", 4, "ngFor", "ngForOf"], ["class", "col-md-12", 4, "ngIf"], [1, "mt10", "mr20", "ml20"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "truncate"], ["mat-stroked-button", "", "color", "accent", 1, "ml20"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["mat-button", "", "color", "accent", "color", "primary", 1, "ml20"], ["mat-button", "", "color", "primary", 1, "ml20", 3, "routerLink"], ["mat-button", "", "color", "warn", 1, "ml20", 3, "click"], [1, "col-md-12"], [1, "text-center"], ["routerLink", "/admin/add-quiz", "mat-raised-button", "", "color", "accent"]],
        template: function ViewQuizzesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Available Quiz");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, ViewQuizzesComponent_mat_card_2_Template, 25, 8, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, ViewQuizzesComponent_div_3_Template, 8, 0, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.quizdata);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.quizdata.length == 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"]],
        styles: [".example-header-image[_ngcontent-%COMP%] {\r\n      background-image: url('quiz1.png');\r\n      background-size: cover;\r\n  }\r\n  \r\n  .truncate[_ngcontent-%COMP%] {\r\n      display: inline-block;\r\n      white-space: nowrap;\r\n      width: 100%;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcXVpenplcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO01BQ0ksa0NBQXFEO01BQ3JELHNCQUFzQjtFQUMxQjs7RUFFQTtNQUNJLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLGdCQUFnQjtNQUNoQix1QkFBdUI7RUFDM0IiLCJmaWxlIjoidmlldy1xdWl6emVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3F1aXoxLnBuZycpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAudHJ1bmNhdGUge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9Il19 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_admin_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/admin/add-category/add-category.component */
      "VdjN");
      /* harmony import */


      var _pages_admin_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/admin/add-questions/add-questions.component */
      "Q+l4");
      /* harmony import */


      var _pages_admin_add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/admin/add-quiz/add-quiz.component */
      "91Vl");
      /* harmony import */


      var _pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/admin/dashboard/dashboard.component */
      "qgmu");
      /* harmony import */


      var _pages_admin_update_category_update_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/admin/update-category/update-category.component */
      "gZ7j");
      /* harmony import */


      var _pages_admin_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/admin/update-question/update-question.component */
      "Gj8z");
      /* harmony import */


      var _pages_admin_update_quiz_update_quiz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/admin/update-quiz/update-quiz.component */
      "iwRK");
      /* harmony import */


      var _pages_admin_view_categories_view_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/admin/view-categories/view-categories.component */
      "d8O7");
      /* harmony import */


      var _pages_admin_view_quiz_questions_view_quiz_questions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/admin/view-quiz-questions/view-quiz-questions.component */
      "z6IT");
      /* harmony import */


      var _pages_admin_view_quizzes_view_quizzes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/admin/view-quizzes/view-quizzes.component */
      "tqaK");
      /* harmony import */


      var _pages_admin_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/admin/welcome/welcome.component */
      "aT26");
      /* harmony import */


      var _pages_errorpage_error404_error404_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/errorpage/error404/error404.component */
      "itMm");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/profile/profile.component */
      "Y5Lh");
      /* harmony import */


      var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/signup/signup.component */
      "o97b");
      /* harmony import */


      var _pages_user_about_quiz_about_quiz_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/user/about-quiz/about-quiz.component */
      "TZ7s");
      /* harmony import */


      var _pages_user_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/user/instructions/instructions.component */
      "0IEq");
      /* harmony import */


      var _pages_user_load_quiz_load_quiz_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pages/user/load-quiz/load-quiz.component */
      "33Wh");
      /* harmony import */


      var _pages_user_start_start_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pages/user/start/start.component */
      "rihE");
      /* harmony import */


      var _pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/user/user-dashboard/user-dashboard.component */
      "Zvah");
      /* harmony import */


      var _services_admin_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./services/admin.guard */
      "eSIX");
      /* harmony import */


      var _services_user_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./services/user.guard */
      "EPRI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [// For Home Page
      {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        pathMatch: 'full'
      }, // For Signup Page
      {
        path: 'signup',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
        pathMatch: 'full'
      }, // For Login Page
      {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        pathMatch: 'full'
      }, // For Admin Dashboard
      {
        path: 'admin',
        component: _pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        // pathMatch: 'full',
        // Admin Gaurd
        canActivate: [_services_admin_guard__WEBPACK_IMPORTED_MODULE_22__["AdminGuard"]],
        // for profile content dashboard content
        children: [{
          path: '',
          component: _pages_admin_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"]
        }, {
          path: 'profile',
          component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"]
        }, {
          path: 'error404',
          component: _pages_errorpage_error404_error404_component__WEBPACK_IMPORTED_MODULE_12__["Error404Component"]
        }, {
          path: 'categories',
          component: _pages_admin_view_categories_view_categories_component__WEBPACK_IMPORTED_MODULE_8__["ViewCategoriesComponent"]
        }, {
          path: 'add-category',
          component: _pages_admin_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_1__["AddCategoryComponent"]
        }, {
          path: 'quizzes',
          component: _pages_admin_view_quizzes_view_quizzes_component__WEBPACK_IMPORTED_MODULE_10__["ViewQuizzesComponent"]
        }, {
          path: 'add-quiz',
          component: _pages_admin_add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_3__["AddQuizComponent"]
        }, {
          path: 'quiz/:qid',
          component: _pages_admin_update_quiz_update_quiz_component__WEBPACK_IMPORTED_MODULE_7__["UpdateQuizComponent"]
        }, {
          path: 'view-questions/:qid/:title',
          component: _pages_admin_view_quiz_questions_view_quiz_questions_component__WEBPACK_IMPORTED_MODULE_9__["ViewQuizQuestionsComponent"]
        }, {
          path: 'add-questions/:qid/:title',
          component: _pages_admin_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_2__["AddQuestionsComponent"]
        }, {
          path: 'question/:quesId',
          component: _pages_admin_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_6__["UpdateQuestionComponent"]
        }, {
          path: 'category/:cid',
          component: _pages_admin_update_category_update_category_component__WEBPACK_IMPORTED_MODULE_5__["UpdateCategoryComponent"]
        }]
      }, // For Normal User Dashboard
      {
        path: 'user-dashboard',
        component: _pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["UserDashboardComponent"],
        // Normal User Gaurd
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_23__["UserGuard"]],
        children: [{
          path: ':catId',
          component: _pages_user_load_quiz_load_quiz_component__WEBPACK_IMPORTED_MODULE_19__["LoadQuizComponent"]
        }, {
          path: 'instructions/:qid',
          component: _pages_user_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_18__["InstructionsComponent"]
        }, // about quiz view page
        {
          path: 'about-quiz/:qid',
          component: _pages_user_about_quiz_about_quiz_component__WEBPACK_IMPORTED_MODULE_17__["AboutQuizComponent"]
        }]
      }, {
        path: 'start/:qid',
        component: _pages_user_start_start_component__WEBPACK_IMPORTED_MODULE_20__["StartComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_23__["UserGuard"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "z6IT":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/admin/view-quiz-questions/view-quiz-questions.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ViewQuizQuestionsComponent */

    /***/
    function z6IT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewQuizQuestionsComponent", function () {
        return ViewQuizQuestionsComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/question.service */
      "UcdY");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");

      function ViewQuizQuestionsComponent_mat_card_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "(A) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "(B) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "(C) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "(D) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](29, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Correct Answer:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "mat-card-action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ViewQuizQuestionsComponent_mat_card_8_Template_button_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4);

            var q_r1 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r3.deleteQuestionById(q_r1.quesId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var q_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Q ", i_r2 + 1, " :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("innerHTML", q_r1.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](q_r1.option1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](q_r1.option2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](q_r1.option3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](q_r1.option4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", q_r1.answer, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/admin/question/" + q_r1.quesId);
        }
      }

      var ViewQuizQuestionsComponent = /*#__PURE__*/function () {
        function ViewQuizQuestionsComponent(_route, _questionService) {
          _classCallCheck(this, ViewQuizQuestionsComponent);

          this._route = _route;
          this._questionService = _questionService;
          this.questions = [];
        }

        _createClass(ViewQuizQuestionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            this.qId = this._route.snapshot.params.qid;
            this.qTitle = this._route.snapshot.params.title;
            console.log(this.qId);
            console.log(this.qTitle);

            this._questionService.getQuestionsOfQuiz(this.qId).subscribe(function (data) {
              //Success
              _this29.questions = data; // console.log(this.questions);
            }, function (error) {
              //error
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error', "Server error while loading data", 'error');
            });
          } //delete questions

        }, {
          key: "deleteQuestionById",
          value: function deleteQuestionById(qid) {
            var _this30 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              icon: 'info',
              showCancelButton: true,
              confirmButtonText: 'Delete',
              title: 'Are you sure, want to delete this question?'
            }).then(function (result) {
              if (result.isConfirmed) {
                //click on delete
                _this30._questionService.deletingParticularQuestion(qid).subscribe(function (data) {
                  //Success
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Success', 'Question deleted!!!', 'success'); //Now filter data (Questions)

                  _this30.questions = _this30.questions.filter(function (q) {
                    return q.quesId != qid;
                  });
                }, function (error) {
                  //error
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error', 'Server error while deleting question', 'error');
                });
              }
            });
          }
        }]);

        return ViewQuizQuestionsComponent;
      }();

      ViewQuizQuestionsComponent.??fac = function ViewQuizQuestionsComponent_Factory(t) {
        return new (t || ViewQuizQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]));
      };

      ViewQuizQuestionsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: ViewQuizQuestionsComponent,
        selectors: [["app-view-quiz-questions"]],
        decls: 9,
        vars: 3,
        consts: [[1, "mt20"], [1, "bootstrap-wrapper"], [1, "row"], [1, "col-md-12"], [1, "container", "text-center"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["class", "mt20", 4, "ngFor", "ngForOf"], [1, "ml20", 3, "innerHTML"], [1, "container-fluid"], [1, "col-md-6"], ["mat-raised-button", "", "color", "accent", 1, "ml20", 3, "routerLink"], ["mat-raised-button", "", "color", "warn", 1, "ml20", 3, "click"]],
        template: function ViewQuizQuestionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Add Questions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, ViewQuizQuestionsComponent_mat_card_8_Template, 39, 8, "mat-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Questions of ", ctx.qTitle, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/admin/add-questions/" + ctx.qId + "/" + ctx.qTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.questions);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXF1aXotcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map