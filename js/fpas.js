(function(){"use strict";var e;e=function(e){return{}},angular.module("fpas",[]).factory("Message",["$rootScope",function(t){return{decode:function(n,r,i){var s;return r==null&&(r=e),i==null&&(i=e),s=new XMLHttpRequest,s.open("POST","http://fpas.yanot.org/api/templates/RTSX/decode",!0),s.setRequestHeader("Content-Type","application/octet-stream"),s.responseType="text",s.onerror=function(e){return t.$apply(function(){return i({code:0,body:"Service not available"})})},s.abort=function(e){return t.$apply(function(){return i({code:0,body:"Request aborted"})})},s.ontimeout=function(e){return t.$apply(function(){return i({code:0,body:"Timeout occured"})})},s.onload=function(e){var n,s;return s=this.status,n=JSON.parse(this.response),s===200?t.$apply(function(){return r(n)}):t.$apply(function(){return i({code:s,body:n.error})})},s.send(n)}}}])}).call(this);