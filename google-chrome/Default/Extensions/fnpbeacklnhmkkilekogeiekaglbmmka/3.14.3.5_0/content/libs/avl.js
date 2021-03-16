/*
 MIT
 @preserve
*/
(function(p,k){"object"===typeof exports&&"undefined"!==typeof module?module.exports=k():"function"===typeof define&&define.amd?define(k):p.AVLTree=k()})(this,function(){function p(b,a){void 0===a&&(a=function(a){return a.key});var c=[];k(b,"",!0,function(a){return c.push(a)},a);return c.join("")}function k(b,a,c,d,f){b&&(d(""+a+(c?"\u2514\u2500\u2500 ":"\u251c\u2500\u2500 ")+f(b)+"\n"),a+=c?"    ":"\u2502   ",b.left&&k(b.left,a,!1,d,f),b.right&&k(b.right,a,!0,d,f))}function q(b){if(null===b)return!0;
var a=l(b.left),c=l(b.right);return 1>=Math.abs(a-c)&&q(b.left)&&q(b.right)?!0:!1}function l(b){return b?1+Math.max(l(b.left),l(b.right)):0}function r(b,a,c,d,f){var e=f-d;return 0<e?(e=d+Math.floor(e/2),b={key:a[e],data:c[e],parent:b},b.left=r(b,a,c,d,e),b.right=r(b,a,c,e+1,f),b):null}function t(b){if(null===b)return 0;var a=t(b.left),c=t(b.right);b.balanceFactor=a-c;return Math.max(a,c)+1}function u(b,a,c,d,f){if(!(c>=d)){for(var e=b[c+d>>1],g=c-1,h=d+1;;){do g++;while(0>f(b[g],e));do h--;while(0<
f(b[h],e));if(g>=h)break;var k=b[g];b[g]=b[h];b[h]=k;k=a[g];a[g]=a[h];a[h]=k}u(b,a,c,h,f);u(b,a,h+1,d,f)}}function w(b,a){return b>a?1:b<a?-1:0}function m(b){var a=b.right;if(b.right=a.left)a.left.parent=b;a.parent=b.parent;a.parent&&(a.parent.left===b?a.parent.left=a:a.parent.right=a);b.parent=a;a.left=b;b.balanceFactor+=1;0>a.balanceFactor&&(b.balanceFactor-=a.balanceFactor);a.balanceFactor+=1;0<b.balanceFactor&&(a.balanceFactor+=b.balanceFactor);return a}function n(b){var a=b.left;b.left=a.right;
b.left&&(b.left.parent=b);a.parent=b.parent;a.parent&&(a.parent.left===b?a.parent.left=a:a.parent.right=a);b.parent=a;a.right=b;--b.balanceFactor;0<a.balanceFactor&&(b.balanceFactor-=a.balanceFactor);--a.balanceFactor;0>b.balanceFactor&&(a.balanceFactor+=b.balanceFactor);return a}var e=function(b,a){void 0===a&&(a=!1);this._comparator=b||w;this._root=null;this._size=0;this._noDuplicates=!!a},v={size:{}};e.prototype.destroy=function(){return this.clear()};e.prototype.clear=function(){this._root=null;
this._size=0;return this};v.size.get=function(){return this._size};e.prototype.contains=function(b){if(this._root)for(var a=this._root,c=this._comparator;a;){var d=c(b,a.key);if(0===d)return!0;a=0>d?a.left:a.right}return!1};e.prototype.next=function(b){var a=b;if(a)if(a.right)for(a=a.right;a&&a.left;)a=a.left;else for(a=b.parent;a&&a.right===b;)b=a,a=a.parent;return a};e.prototype.prev=function(b){var a=b;if(a)if(a.left)for(a=a.left;a&&a.right;)a=a.right;else for(a=b.parent;a&&a.left===b;)b=a,a=a.parent;
return a};e.prototype.forEach=function(b){for(var a=this._root,c=[],d=!1,f=0;!d;)a?(c.push(a),a=a.left):0<c.length?(a=c.pop(),b(a,f++),a=a.right):d=!0;return this};e.prototype.range=function(b,a,c,d){for(var f=[],e=this._comparator,g=this._root,h;0!==f.length||g;)if(g)f.push(g),g=g.left;else{g=f.pop();h=e(g.key,a);if(0<h)break;else if(0<=e(g.key,b)&&c.call(d,g))break;g=g.right}return this};e.prototype.keys=function(){for(var b=this._root,a=[],c=[],d=!1;!d;)b?(a.push(b),b=b.left):0<a.length?(b=a.pop(),
c.push(b.key),b=b.right):d=!0;return c};e.prototype.values=function(){for(var b=this._root,a=[],c=[],d=!1;!d;)b?(a.push(b),b=b.left):0<a.length?(b=a.pop(),c.push(b.data),b=b.right):d=!0;return c};e.prototype.at=function(b){for(var a=this._root,c=[],d=!1,f=0;!d;)if(a)c.push(a),a=a.left;else if(0<c.length){a=c.pop();if(f===b)return a;f++;a=a.right}else d=!0;return null};e.prototype.minNode=function(){var b=this._root;if(!b)return null;for(;b.left;)b=b.left;return b};e.prototype.maxNode=function(){var b=
this._root;if(!b)return null;for(;b.right;)b=b.right;return b};e.prototype.min=function(){var b=this._root;if(!b)return null;for(;b.left;)b=b.left;return b.key};e.prototype.max=function(){var b=this._root;if(!b)return null;for(;b.right;)b=b.right;return b.key};e.prototype.isEmpty=function(){return!this._root};e.prototype.pop=function(){var b=this._root,a=null;if(b){for(;b.left;)b=b.left;a={key:b.key,data:b.data};this.remove(b.key)}return a};e.prototype.find=function(b){for(var a=this._root,c,d=this._comparator;a;){c=
d(b,a.key);if(0===c)return a;a=0>c?a.left:a.right}return null};e.prototype.insert=function(b,a){if(!this._root)return this._root={parent:null,left:null,right:null,balanceFactor:0,key:b,data:a},this._size++,this._root;var c=this._comparator,d=this._root,f=null,e=0;if(this._noDuplicates)for(;d;){e=c(b,d.key);f=d;if(0===e)return null;d=0>e?d.left:d.right}else for(;d;)e=c(b,d.key),f=d,d=0>=e?d.left:d.right;a={left:null,right:null,balanceFactor:0,parent:f,key:b,data:a};for(0>=e?f.left=a:f.right=a;f;){e=
c(f.key,b);0>e?--f.balanceFactor:f.balanceFactor+=1;if(0===f.balanceFactor)break;else if(-1>f.balanceFactor){1===f.right.balanceFactor&&n(f.right);b=m(f);f===this._root&&(this._root=b);break}else if(1<f.balanceFactor){-1===f.left.balanceFactor&&m(f.left);b=n(f);f===this._root&&(this._root=b);break}f=f.parent}this._size++;return a};e.prototype.remove=function(b){if(!this._root)return null;for(var a=this._root,c=this._comparator,d;a&&(d=c(b,a.key),0!==d);)a=0>d?a.left:a.right;if(!a)return null;b=a.key;
if(a.left){for(c=a.left;c.left||c.right;){for(;c.right;)c=c.right;a.key=c.key;a.data=c.data;c.left&&(a=c,c=c.left)}a.key=c.key;a.data=c.data;a=c}if(a.right){for(c=a.right;c.left||c.right;){for(;c.left;)c=c.left;a.key=c.key;a.data=c.data;c.right&&(a=c,c=c.right)}a.key=c.key;a.data=c.data;a=c}c=a.parent;for(d=a;c;){c.left===d?--c.balanceFactor:c.balanceFactor+=1;-1>c.balanceFactor?(1===c.right.balanceFactor&&n(c.right),d=m(c),c===this._root&&(this._root=d),c=d):1<c.balanceFactor&&(-1===c.left.balanceFactor&&
m(c.left),d=n(c),c===this._root&&(this._root=d),c=d);if(-1===c.balanceFactor||1===c.balanceFactor)break;d=c;c=c.parent}a.parent&&(a.parent.left===a?a.parent.left=null:a.parent.right=null);a===this._root&&(this._root=null);this._size--;return b};e.prototype.load=function(b,a,c){void 0===b&&(b=[]);void 0===a&&(a=[]);if(0!==this._size)throw Error("bulk-load: tree is not empty");var d=b.length;c&&u(b,a,0,d-1,this._comparator);this._root=r(null,b,a,0,d);t(this._root);this._size=d;return this};e.prototype.isBalanced=
function(){return q(this._root)};e.prototype.toString=function(b){return p(this._root,b)};Object.defineProperties(e.prototype,v);return e.default=e});
