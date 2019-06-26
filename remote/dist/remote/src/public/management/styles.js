(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/* Full-width inputs */\ninput[type=text], input[type=password], input[type=field] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n/* Set a style for all buttons */\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n  }\n/* Add a hover effect for buttons */\nbutton:hover {\n    opacity: 0.8;\n  }\n#haim{\n    border-radius: 50px;\n  }\n.container {\n    padding: 16px;\n    background-color:#f1f1f1\n  }\n#login-page {\n    background-image: url('casanet.png');\n    background-size: cover;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    position:absolute;\n    left:0;\n    right:0; \n    height: 100%;\n    \n  }\n/* #login-page .background-image{\n    background-size: 30px 30px;\n  } */\n#servers-page {\n    background-image: url('casanet.png');\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    background-size: cover;\n    position:absolute;\n    left:0;\n    right:0; \n    height: 100%;\n  }\n#servers-page img{\n    position: absolute; \n    top: 0; \n    left: 0; \n    right: 0; \n    bottom: 0; \n    margin: auto; \n    min-width: 50%;\n    min-height: 50%;\n  }\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n.servers {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 100px;\n  }\n#edit-server{\n    width: 150px;\n    background: darkgreen;\n    font-size: 15px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    \n  }\n.servers li {\n    cursor: pointer;\n    position: relative;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n.servers li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n.servers li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n.Servers .text {\n    position: relative;\n    top: -3px;\n  }\n.servers .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color:#405061;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n.servers .status-on{\n    background: green;\n    border-radius: 50%;\n    background-repeat: no-repeat;\n    display: inline-block;\n    background-size: 15px 15px; \n   }\n.servers .status-off{\n    background: red;\n    border-radius: 50%;\n    background-repeat: no-repeat;\n    display: inline-block;\n    background-size: 15px 15px; \n  }\n.delete-button{\n    background:  url('DeleteButton.png');\n    background-size: 15px 15px; \n    background-repeat: no-repeat;\n    inline-size: -webkit-min-content;\n    inline-size: -moz-min-content;\n    inline-size: min-content;\n  }\n.auth-button{\n    background:  url('key.png');\n    background-size: 15px 15px; \n    background-repeat: no-repeat;\n    inline-size: -webkit-min-content;\n    inline-size: -moz-min-content;\n    inline-size: min-content;\n  }\n.form-style-8{\n    font-family: 'Open Sans Condensed', arial, sans;\n    width: 500px;\n    padding: 30px;\n    background: #FFFFFF;\n    margin: 50px auto;\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n    -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n    -webkit-box-shadow:  0px 0px 15px rgba(0, 0, 0, 0.22);\n  \n  }\n.form-style-8 h2{\n    background: #4D4D4D;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed', sans-serif;\n    color: #797979;\n    font-size: 18px;\n    font-weight: 100;\n    padding: 20px;\n    margin: -30px -30px 30px -30px;\n  }\n.form-style-8 input[type=\"text\"],\n  .form-style-8 input[type=\"date\"],\n  .form-style-8 input[type=\"datetime\"],\n  .form-style-8 input[type=\"email\"],\n  .form-style-8 input[type=\"number\"],\n  .form-style-8 input[type=\"search\"],\n  .form-style-8 input[type=\"time\"],\n  .form-style-8 input[type=\"url\"],\n  .form-style-8 input[type=\"password\"],\n  .form-style-8 textarea,\n  .form-style-8 select \n  {\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    outline: none;\n    display: block;\n    width: 100%;\n    padding: 7px;\n    border: none;\n    border-bottom: 1px solid #ddd;\n    background: transparent;\n    margin-bottom: 10px;\n    font: 16px Arial, Helvetica, sans-serif;\n    height: 45px;\n  }\n.form-style-8 textarea{\n    resize:none;\n    overflow: hidden;\n  }\n#submit{\n    box-shadow: inset 0px 1px 0px 0px #45D6D6;\n    background-color: #2CBBBB;\n    border: 1px solid #27A0A0;\n    display: inline-block;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-family: 'Open Sans Condensed', sans-serif;\n    font-size: 14px;\n    padding: 8px 18px;\n    text-decoration: none;\n    text-transform: uppercase;\n  }\n.form-style-8 input[type=\"button\"]:hover, \n  .form-style-8 input[type=\"submit\"]:hover {\n    background:linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n    background-color:#34CACA;\n  }\nhtml, body {\n    margin: 0;\n    height: 100%;\n}\n.simple-form {\n  display: flex;\n  overflow-y: scroll;\n  padding-bottom: 1.25rem;\n}\n.simple-form input {\n  margin: 0 .25rem;\n  width: 100px;\n  height: 15px;\n  border: 1px solid #eee;\n  border-left: 3px solid;\n  border-radius: 5px;\n  transition: border-color .5s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,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LHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLFlBQVk7RUFDZDtBQUNBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUVBO0lBR0UseUNBQXlDO0lBQ3pDLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsOENBQThDO0lBQzlDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHlCQUF5QjtFQUMzQjtBQUNBOztJQUVFLCtEQUErRDtJQUMvRCx3QkFBd0I7RUFDMUI7QUFFQTtJQUNFLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUNBQXFDO0FBQ3ZDIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLyogRnVsbC13aWR0aCBpbnB1dHMgKi9cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWZpZWxkXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLyogQWRkIGEgaG92ZXIgZWZmZWN0IGZvciBidXR0b25zICovXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIFxuICAjaGFpbXtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxXG4gIH1cblxuXG4gICNsb2dpbi1wYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy9jYXNhbmV0LnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBsZWZ0OjA7XG4gICAgcmlnaHQ6MDsgXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIFxuICB9XG5cbiAgLyogI2xvZ2luLXBhZ2UgLmJhY2tncm91bmQtaW1hZ2V7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IDMwcHg7XG4gIH0gKi9cblxuICAjc2VydmVycy1wYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy9jYXNhbmV0LnBuZ1wiKTtcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBsZWZ0OjA7XG4gICAgcmlnaHQ6MDsgXG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgI3NlcnZlcnMtcGFnZSBpbWd7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICB0b3A6IDA7IFxuICAgIGxlZnQ6IDA7IFxuICAgIHJpZ2h0OiAwOyBcbiAgICBib3R0b206IDA7IFxuICAgIG1hcmdpbjogYXV0bzsgXG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgbWluLWhlaWdodDogNTAlO1xuICB9XG5cbiAgLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cblxuICAuc2VydmVycyB7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgI2VkaXQtc2VydmVye1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZ3JlZW47XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBcbiAgfVxuICAuc2VydmVycyBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgIG1hcmdpbjogLjVlbTtcbiAgICBwYWRkaW5nOiAuM2VtIDA7XG4gICAgaGVpZ2h0OiAxLjZlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgLnNlcnZlcnMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnNlcnZlcnMgbGk6aG92ZXIge1xuICAgIGNvbG9yOiAjNjA3RDhCO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gICAgbGVmdDogLjFlbTtcbiAgfVxuICAuU2VydmVycyAudGV4dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTNweDtcbiAgfVxuICAuc2VydmVycyAuYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzQwNTA2MTtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHRvcDogLTRweDtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgfVxuICBcbiAgLnNlcnZlcnMgLnN0YXR1cy1vbntcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDE1cHg7IFxuICAgfVxuXG4gIC5zZXJ2ZXJzIC5zdGF0dXMtb2Zme1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDE1cHg7IFxuICB9XG5cbiAgIC5kZWxldGUtYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6ICB1cmwoXCIuL2Fzc2V0cy9EZWxldGVCdXR0b24ucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTVweCAxNXB4OyBcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGlubGluZS1zaXplOiBtaW4tY29udGVudDtcbiAgfVxuXG4gIC5hdXRoLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiAgdXJsKFwiLi9hc3NldHMva2V5LnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDsgXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBpbmxpbmUtc2l6ZTogbWluLWNvbnRlbnQ7XG4gIH1cblxuXG4gIC5mb3JtLXN0eWxlLTh7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgYXJpYWwsIHNhbnM7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogIDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICBcbiAgfVxuICAuZm9ybS1zdHlsZS04IGgye1xuICAgIGJhY2tncm91bmQ6ICM0RDRENEQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjNzk3OTc5O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAtMzBweCAtMzBweCAzMHB4IC0zMHB4O1xuICB9XG4gIC5mb3JtLXN0eWxlLTggaW5wdXRbdHlwZT1cInRleHRcIl0sXG4gIC5mb3JtLXN0eWxlLTggaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4gIC5mb3JtLXN0eWxlLTggaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdLFxuICAuZm9ybS1zdHlsZS04IGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbiAgLmZvcm0tc3R5bGUtOCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuICAuZm9ybS1zdHlsZS04IGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG4gIC5mb3JtLXN0eWxlLTggaW5wdXRbdHlwZT1cInRpbWVcIl0sXG4gIC5mb3JtLXN0eWxlLTggaW5wdXRbdHlwZT1cInVybFwiXSxcbiAgLmZvcm0tc3R5bGUtOCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG4gIC5mb3JtLXN0eWxlLTggdGV4dGFyZWEsXG4gIC5mb3JtLXN0eWxlLTggc2VsZWN0IFxuICB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQ6IDE2cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gIH1cbiAgLmZvcm0tc3R5bGUtOCB0ZXh0YXJlYXtcbiAgICByZXNpemU6bm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAjc3VibWl0e1xuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkNCQkJCO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyN0EwQTA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA4cHggMThweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuZm9ybS1zdHlsZS04IGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsIFxuICAuZm9ybS1zdHlsZS04IGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM0Q0FDQSA1JSwgIzMwQzlDOSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNENBQ0E7XG4gIH1cblxuICBodG1sLCBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2ltcGxlLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xufVxuLnNpbXBsZS1mb3JtIGlucHV0IHtcbiAgbWFyZ2luOiAwIC4yNXJlbTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cyBlYXNlLW91dDtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\casa\remote-dashboard\home-iot-server\remote-dashboard\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map