!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){const n=r(1),o=r(3),i=r(5);let s=new o,a=new i("needs","actual value"),u=new n(2e3);u.onPoll(()=>{console.log("polling");let t=s.exposeSpotifyApi();t.setAccessToken("BQCS-RMgxSAfbE-67FN15LeubGcjI68NWeHXzzWe3yyHR0mtHNXsBxpwK5zZNgzw5xLtclQbdorYRIQPXXXOtFehsKxekUf0e7vmqDZBuzhgOTcJHV3GDfk5G5n6sXUHfXG5PlQyvzEayGlbKhEENiCWlf0"),t.getMyCurrentPlayingTrack().then(a.processColors(data),t=>{console.err(t)}),u.poll()}),u.poll()},function(t,e,r){const n=r(2);t.exports=class extends n{constructor(t=100){super(),this.timeout=t}poll(){setTimeout(()=>this.emit("poll"),this.timeout)}onPoll(t){this.on("poll",t)}}},function(t,e,r){"use strict";var n,o="object"==typeof Reflect?Reflect:null,i=o&&"function"==typeof o.apply?o.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};n=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var s=Number.isNaN||function(t){return t!=t};function a(){a.init.call(this)}t.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var u=10;function c(t){return void 0===t._maxListeners?a.defaultMaxListeners:t._maxListeners}function p(t,e,r,n){var o,i,s,a;if("function"!=typeof r)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r);if(void 0===(i=t._events)?(i=t._events=Object.create(null),t._eventsCount=0):(void 0!==i.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),i=t._events),s=i[e]),void 0===s)s=i[e]=r,++t._eventsCount;else if("function"==typeof s?s=i[e]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),(o=c(t))>0&&s.length>o&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=s.length,a=u,console&&console.warn&&console.warn(a)}return t}function l(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=function(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,i(this.listener,this.target,t))}.bind(n);return o.listener=r,n.wrapFn=o,o}function f(t,e,r){var n=t._events;if(void 0===n)return[];var o=n[e];return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(o):h(o,o.length)}function y(t){var e=this._events;if(void 0!==e){var r=e[t];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function h(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");u=t}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},a.prototype.getMaxListeners=function(){return c(this)},a.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var n="error"===t,o=this._events;if(void 0!==o)n=n&&void 0===o.error;else if(!n)return!1;if(n){var s;if(e.length>0&&(s=e[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var u=o[t];if(void 0===u)return!1;if("function"==typeof u)i(u,this,e);else{var c=u.length,p=h(u,c);for(r=0;r<c;++r)i(p[r],this,e)}return!0},a.prototype.addListener=function(t,e){return p(this,t,e,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(t,e){return p(this,t,e,!0)},a.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.on(t,l(this,t,e)),this},a.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.prependListener(t,l(this,t,e)),this},a.prototype.removeListener=function(t,e){var r,n,o,i,s;if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);if(void 0===(n=this._events))return this;if(void 0===(r=n[t]))return this;if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===e||r[i].listener===e){s=r[i].listener,o=i;break}if(o<0)return this;0===o?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(r,o),1===r.length&&(n[t]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",t,s||e)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(t){var e,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this;if(0===arguments.length){var o,i=Object.keys(r);for(n=0;n<i.length;++n)"removeListener"!==(o=i[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},a.prototype.listeners=function(t){return f(this,t,!0)},a.prototype.rawListeners=function(t){return f(this,t,!1)},a.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):y.call(t,e)},a.prototype.listenerCount=y,a.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},function(t,e,r){var n=new(r(4));t.exports=class{authenticateSpotify(){const t=window.location.hash.substring(1).split("&").reduce(function(t,e){if(e){var r=e.split("=");t[r[0]]=decodeURIComponent(r[1])}return t},{});window.location.hash="";let e=t.access_token;const r=location.href,o=["user-read-currently-playing","user-read-playback-state"];e||(window.location=`https://accounts.spotify.com/authorize?client_id=451b6dddb0b24b1cbad3e071aa8fe9d0&redirect_uri=${r}&scope=${o.join("%20")}&response_type=token&show_dialog=true`),n.setAccessToken(e)}exposeSpotifyApi(){return n}}},function(t,e,r){"use strict";var n,o,i,s,a,u,c,p,l=(n="https://api.spotify.com/v1",o=null,i=null,s=function(t,e){return t.abort=e,t},a=function(){var t=Array.prototype.slice.call(arguments),e=t[0],r=t.slice(1);return e=e||{},r.forEach(function(t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}),e},u=function(t,e){var r=new XMLHttpRequest,n=function(n,i){var s=t.type||"GET";if(r.open(s,function(t,e){var r="";for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];r+=encodeURIComponent(n)+"="+encodeURIComponent(o)+"&"}return r.length>0&&(t=t+"?"+(r=r.substring(0,r.length-1))),t}(t.url,t.params)),o&&r.setRequestHeader("Authorization","Bearer "+o),t.contentType&&r.setRequestHeader("Content-Type",t.contentType),r.onreadystatechange=function(){if(4===r.readyState){var t=null;try{t=r.responseText?JSON.parse(r.responseText):""}catch(t){console.error(t)}r.status>=200&&r.status<300?function(t){n&&n(t),e&&e(null,t)}(t):(i&&i(r),e&&e(r,null))}},"GET"===s)r.send(null);else{var a=null;t.postData&&(a="image/jpeg"===t.contentType?t.postData:JSON.stringify(t.postData)),r.send(a)}};return e?(n(),null):function(t,e){var r;if(null!==i){var n=i.defer();t(function(t){n.resolve(t)},function(t){n.reject(t)}),r=n.promise}else window.Promise&&(r=new window.Promise(t));return r?new s(r,e):null}(n,function(){r.abort()})},c=function(t,e,r,n){var o={},i=null;return"object"==typeof e?(o=e,i=r):"function"==typeof e&&(i=e),"GET"!==(t.type||"GET")&&t.postData&&!n?t.postData=a(t.postData,o):t.params=a(t.params,o),u(t,i)},((p=function(){}).prototype={constructor:l}).getGeneric=function(t,e){return c({url:t},e)},p.prototype.getMe=function(t,e){return c({url:n+"/me"},t,e)},p.prototype.getMySavedTracks=function(t,e){return c({url:n+"/me/tracks"},t,e)},p.prototype.addToMySavedTracks=function(t,e,r){return c({url:n+"/me/tracks",type:"PUT",postData:t},e,r)},p.prototype.removeFromMySavedTracks=function(t,e,r){return c({url:n+"/me/tracks",type:"DELETE",postData:t},e,r)},p.prototype.containsMySavedTracks=function(t,e,r){var o={url:n+"/me/tracks/contains",params:{ids:t.join(",")}};return c(o,e,r)},p.prototype.getMySavedAlbums=function(t,e){return c({url:n+"/me/albums"},t,e)},p.prototype.addToMySavedAlbums=function(t,e,r){return c({url:n+"/me/albums",type:"PUT",postData:t},e,r)},p.prototype.removeFromMySavedAlbums=function(t,e,r){return c({url:n+"/me/albums",type:"DELETE",postData:t},e,r)},p.prototype.containsMySavedAlbums=function(t,e,r){var o={url:n+"/me/albums/contains",params:{ids:t.join(",")}};return c(o,e,r)},p.prototype.getMyTopArtists=function(t,e){return c({url:n+"/me/top/artists"},t,e)},p.prototype.getMyTopTracks=function(t,e){return c({url:n+"/me/top/tracks"},t,e)},p.prototype.getMyRecentlyPlayedTracks=function(t,e){return c({url:n+"/me/player/recently-played"},t,e)},p.prototype.followUsers=function(t,e){var r={url:n+"/me/following/",type:"PUT",params:{ids:t.join(","),type:"user"}};return c(r,e)},p.prototype.followArtists=function(t,e){var r={url:n+"/me/following/",type:"PUT",params:{ids:t.join(","),type:"artist"}};return c(r,e)},p.prototype.followPlaylist=function(t,e,r){return c({url:n+"/playlists/"+t+"/followers",type:"PUT",postData:{}},e,r)},p.prototype.unfollowUsers=function(t,e){var r={url:n+"/me/following/",type:"DELETE",params:{ids:t.join(","),type:"user"}};return c(r,e)},p.prototype.unfollowArtists=function(t,e){var r={url:n+"/me/following/",type:"DELETE",params:{ids:t.join(","),type:"artist"}};return c(r,e)},p.prototype.unfollowPlaylist=function(t,e){return c({url:n+"/playlists/"+t+"/followers",type:"DELETE"},e)},p.prototype.isFollowingUsers=function(t,e){var r={url:n+"/me/following/contains",type:"GET",params:{ids:t.join(","),type:"user"}};return c(r,e)},p.prototype.isFollowingArtists=function(t,e){var r={url:n+"/me/following/contains",type:"GET",params:{ids:t.join(","),type:"artist"}};return c(r,e)},p.prototype.areFollowingPlaylist=function(t,e,r){var o={url:n+"/playlists/"+t+"/followers/contains",type:"GET",params:{ids:e.join(",")}};return c(o,r)},p.prototype.getFollowedArtists=function(t,e){return c({url:n+"/me/following",type:"GET",params:{type:"artist"}},t,e)},p.prototype.getUser=function(t,e,r){var o={url:n+"/users/"+encodeURIComponent(t)};return c(o,e,r)},p.prototype.getUserPlaylists=function(t,e,r){var o;return"string"==typeof t?o={url:n+"/users/"+encodeURIComponent(t)+"/playlists"}:(o={url:n+"/me/playlists"},r=e,e=t),c(o,e,r)},p.prototype.getPlaylist=function(t,e,r){return c({url:n+"/playlists/"+t},e,r)},p.prototype.getPlaylistTracks=function(t,e,r){return c({url:n+"/playlists/"+t+"/tracks"},e,r)},p.prototype.createPlaylist=function(t,e,r){var o={url:n+"/users/"+encodeURIComponent(t)+"/playlists",type:"POST",postData:e};return c(o,e,r)},p.prototype.changePlaylistDetails=function(t,e,r){return c({url:n+"/playlists/"+t,type:"PUT",postData:e},e,r)},p.prototype.addTracksToPlaylist=function(t,e,r,o){return c({url:n+"/playlists/"+t+"/tracks",type:"POST",postData:{uris:e}},r,o,!0)},p.prototype.replaceTracksInPlaylist=function(t,e,r){return c({url:n+"/playlists/"+t+"/tracks",type:"PUT",postData:{uris:e}},{},r)},p.prototype.reorderTracksInPlaylist=function(t,e,r,o,i){return c({url:n+"/playlists/"+t+"/tracks",type:"PUT",postData:{range_start:e,insert_before:r}},o,i)},p.prototype.removeTracksFromPlaylist=function(t,e,r){var o=e.map(function(t){return"string"==typeof t?{uri:t}:t});return c({url:n+"/playlists/"+t+"/tracks",type:"DELETE",postData:{tracks:o}},{},r)},p.prototype.removeTracksFromPlaylistWithSnapshotId=function(t,e,r,o){var i=e.map(function(t){return"string"==typeof t?{uri:t}:t});return c({url:n+"/playlists/"+t+"/tracks",type:"DELETE",postData:{tracks:i,snapshot_id:r}},{},o)},p.prototype.removeTracksFromPlaylistInPositions=function(t,e,r,o){return c({url:n+"/playlists/"+t+"/tracks",type:"DELETE",postData:{positions:e,snapshot_id:r}},{},o)},p.prototype.uploadCustomPlaylistCoverImage=function(t,e,r){var o={url:n+"/playlists/"+t+"/images",type:"PUT",postData:e.replace(/^data:image\/jpeg;base64,/,""),contentType:"image/jpeg"};return c(o,{},r)},p.prototype.getAlbum=function(t,e,r){return c({url:n+"/albums/"+t},e,r)},p.prototype.getAlbumTracks=function(t,e,r){return c({url:n+"/albums/"+t+"/tracks"},e,r)},p.prototype.getAlbums=function(t,e,r){var o={url:n+"/albums/",params:{ids:t.join(",")}};return c(o,e,r)},p.prototype.getTrack=function(t,e,r){var o={};return o.url=n+"/tracks/"+t,c(o,e,r)},p.prototype.getTracks=function(t,e,r){var o={url:n+"/tracks/",params:{ids:t.join(",")}};return c(o,e,r)},p.prototype.getArtist=function(t,e,r){return c({url:n+"/artists/"+t},e,r)},p.prototype.getArtists=function(t,e,r){var o={url:n+"/artists/",params:{ids:t.join(",")}};return c(o,e,r)},p.prototype.getArtistAlbums=function(t,e,r){return c({url:n+"/artists/"+t+"/albums"},e,r)},p.prototype.getArtistTopTracks=function(t,e,r,o){return c({url:n+"/artists/"+t+"/top-tracks",params:{country:e}},r,o)},p.prototype.getArtistRelatedArtists=function(t,e,r){return c({url:n+"/artists/"+t+"/related-artists"},e,r)},p.prototype.getFeaturedPlaylists=function(t,e){return c({url:n+"/browse/featured-playlists"},t,e)},p.prototype.getNewReleases=function(t,e){return c({url:n+"/browse/new-releases"},t,e)},p.prototype.getCategories=function(t,e){return c({url:n+"/browse/categories"},t,e)},p.prototype.getCategory=function(t,e,r){return c({url:n+"/browse/categories/"+t},e,r)},p.prototype.getCategoryPlaylists=function(t,e,r){return c({url:n+"/browse/categories/"+t+"/playlists"},e,r)},p.prototype.search=function(t,e,r,o){var i={url:n+"/search/",params:{q:t,type:e.join(",")}};return c(i,r,o)},p.prototype.searchAlbums=function(t,e,r){return this.search(t,["album"],e,r)},p.prototype.searchArtists=function(t,e,r){return this.search(t,["artist"],e,r)},p.prototype.searchTracks=function(t,e,r){return this.search(t,["track"],e,r)},p.prototype.searchPlaylists=function(t,e,r){return this.search(t,["playlist"],e,r)},p.prototype.getAudioFeaturesForTrack=function(t,e){var r={};return r.url=n+"/audio-features/"+t,c(r,{},e)},p.prototype.getAudioFeaturesForTracks=function(t,e){return c({url:n+"/audio-features",params:{ids:t}},{},e)},p.prototype.getAudioAnalysisForTrack=function(t,e){var r={};return r.url=n+"/audio-analysis/"+t,c(r,{},e)},p.prototype.getRecommendations=function(t,e){return c({url:n+"/recommendations"},t,e)},p.prototype.getAvailableGenreSeeds=function(t){return c({url:n+"/recommendations/available-genre-seeds"},{},t)},p.prototype.getMyDevices=function(t){return c({url:n+"/me/player/devices"},{},t)},p.prototype.getMyCurrentPlaybackState=function(t,e){return c({url:n+"/me/player"},t,e)},p.prototype.getMyCurrentPlayingTrack=function(t,e){return c({url:n+"/me/player/currently-playing"},t,e)},p.prototype.transferMyPlayback=function(t,e,r){var o=e||{};return o.device_ids=t,c({type:"PUT",url:n+"/me/player",postData:o},e,r)},p.prototype.play=function(t,e){var r="device_id"in(t=t||{})?{device_id:t.device_id}:null,o={};return["context_uri","uris","offset","position_ms"].forEach(function(e){e in t&&(o[e]=t[e])}),c({type:"PUT",url:n+"/me/player/play",params:r,postData:o},"function"==typeof t?t:{},e)},p.prototype.pause=function(t,e){var r="device_id"in(t=t||{})?{device_id:t.device_id}:null;return c({type:"PUT",url:n+"/me/player/pause",params:r},t,e)},p.prototype.skipToNext=function(t,e){var r="device_id"in(t=t||{})?{device_id:t.device_id}:null;return c({type:"POST",url:n+"/me/player/next",params:r},t,e)},p.prototype.skipToPrevious=function(t,e){var r="device_id"in(t=t||{})?{device_id:t.device_id}:null;return c({type:"POST",url:n+"/me/player/previous",params:r},t,e)},p.prototype.seek=function(t,e,r){var o={position_ms:t};return"device_id"in(e=e||{})&&(o.device_id=e.device_id),c({type:"PUT",url:n+"/me/player/seek",params:o},e,r)},p.prototype.setRepeat=function(t,e,r){var o={state:t};return"device_id"in(e=e||{})&&(o.device_id=e.device_id),c({type:"PUT",url:n+"/me/player/repeat",params:o},e,r)},p.prototype.setVolume=function(t,e,r){var o={volume_percent:t};return"device_id"in(e=e||{})&&(o.device_id=e.device_id),c({type:"PUT",url:n+"/me/player/volume",params:o},e,r)},p.prototype.setShuffle=function(t,e,r){var o={state:t};return"device_id"in(e=e||{})&&(o.device_id=e.device_id),c({type:"PUT",url:n+"/me/player/shuffle",params:o},e,r)},p.prototype.getAccessToken=function(){return o},p.prototype.setAccessToken=function(t){o=t},p.prototype.setPromiseImplementation=function(t){var e=!1;try{var r=new t(function(t){t()});"function"==typeof r.then&&"function"==typeof r.catch&&(e=!0)}catch(t){console.error(t)}if(!e)throw new Error("Unsupported implementation of Promises/A+");i=t},p);"object"==typeof t.exports&&(t.exports=l)},function(t,e,r){const n=r(6),o=r(7);t.exports=class{constructor(t,e){this.hubIp=t,this.hubUser=e,this.imgUrl=""}processColors(t){t.item.album.images[1].url!==this.imgUrl&&(console.log("NEW IMAGE"),this.imgUrl=t.item.album.images[1].url,$(".bg-image-blur, .bg-image").fadeTo(375,0,function(){$(this).css("background-image","url('"+imgUrl+"')")}).fadeTo(375,1),getPaletteFromUrl(imgUrl,function(t){var e=t[0],r=t[1],n=getCIEColor(e);setLamp(n[0],n[1],3),$("#title").css("color","rgb("+e[0]+","+e[1]+","+e[2]+")"),$("body").css("backgroundColor","rgb("+r[0]+","+r[1]+","+r[2]+")")}))}getPaletteFromUrl(t,e){sourceImage=document.createElement("img"),sourceImage.crossOrigin="Anonymous";var r=new o;sourceImage.src=t,sourceImage.onload=function(){e(r.getPalette(sourceImage,5,5))}}setLamp(t,e,r){var n="http://192.168.1.219/api/974DELC9EApDxKHu3W5P2fjMCE7YWbrM2LmVRoJv/lights/"+r+"/state",o={on:!0,sat:254,bri:254,xy:[Number(t),Number(e)]};$.ajax({url:n,type:"PUT",data:JSON.stringify(o),contentType:"application/json"})}getCIEColor(t){var e=t[0],r=t[1],o=t[2];return n.rgb_to_cie(e,r,o)}}},function(t,e,r){class n{static cie_to_rgb(t,e,r){void 0===r&&(r=254);var n=1-t-e,o=(r/254).toFixed(2),i=o/e*t,s=o/e*n,a=1.656492*i-.354851*o-.255038*s,u=.707196*-i+1.655397*o+.036152*s,c=.051713*i-.121364*o+1.01153*s;return a>c&&a>u&&a>1?(u/=a,c/=a,a=1):u>c&&u>a&&u>1?(a/=u,c/=u,u=1):c>a&&c>u&&c>1&&(a/=c,u/=c,c=1),a=a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055,u=u<=.0031308?12.92*u:1.055*Math.pow(u,1/2.4)-.055,c=c<=.0031308?12.92*c:1.055*Math.pow(c,1/2.4)-.055,a=Math.round(255*a),u=Math.round(255*u),c=Math.round(255*c),isNaN(a)&&(a=0),isNaN(u)&&(u=0),isNaN(c)&&(c=0),[a,u,c]}static rgb_to_cie(t,e,r){var n=.664511*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.154324*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.162028*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92),o=.283881*t+.668433*e+.047685*r,i=88e-6*t+.07231*e+.986039*r,s=(n/(n+o+i)).toFixed(4),a=(o/(n+o+i)).toFixed(4);return isNaN(s)&&(s=0),isNaN(a)&&(a=0),[s,a]}}t.exports&&(t.exports=n)},function(t,e,r){var n=r(8)
/*
 * Color Thief v2.0
 * by Lokesh Dhakar - http://www.lokeshdhakar.com
 *
 * Thanks
 * ------
 * Nick Rabinowitz - For creating quantize.js.
 * John Schulz - For clean up and optimization. @JFSIII
 * Nathan Spady - For adding drag and drop support to the demo page.
 *
 * License
 * -------
 * Copyright 2011, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://raw.githubusercontent.com/lokesh/color-thief/master/LICENSE
 *
 * @license
 */,o=function(t){this.canvas=new n.Canvas(300,300),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)};o.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},o.prototype.update=function(t){this.context.putImageData(t,0,0)},o.prototype.getPixelCount=function(){return this.width*this.height},o.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},o.prototype.removeCanvas=function(){this.canvas=null};var i=function(){};
/*!
 * quantize.js Copyright 2008 Nick Rabinowitz.
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * @license
 */
/*!
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 * @license
 */
if(i.prototype.getColor=function(t,e){return this.getPalette(t,5,e)[0]},i.prototype.getPalette=function(t,e,r){(void 0===e||e<2||e>256)&&(e=10),(void 0===r||r<1)&&(r=10);for(var n,i,s,u,c=new o(t),p=c.getImageData().data,l=c.getPixelCount(),f=[],y=0;y<l;y+=r)i=p[(n=4*y)+0],s=p[n+1],u=p[n+2],p[n+3]>=125&&(i>250&&s>250&&u>250||f.push([i,s,u]));var h=a.quantize(f,e),v=h?h.palette():null;return c.removeCanvas(),v},i.prototype.getColorFromUrl=function(t,e,r){sourceImage=document.createElement("img");var n=this;sourceImage.addEventListener("load",function(){var o=n.getPalette(sourceImage,5,r)[0];e(o,t)}),sourceImage.src=t},i.prototype.getImageData=function(t,e){xhr=new XMLHttpRequest,xhr.open("GET",t,!0),xhr.responseType="arraybuffer",xhr.onload=function(t){if(200==this.status){uInt8Array=new Uint8Array(this.response),r=uInt8Array.length,binaryString=new Array(r);for(var r=0;r<uInt8Array.length;r++)binaryString[r]=String.fromCharCode(uInt8Array[r]);data=binaryString.join(""),base64=window.btoa(data),e("data:image/png;base64,"+base64)}},xhr.send()},i.prototype.getColorAsync=function(t,e,r){var n=this;this.getImageData(t,function(t){sourceImage=document.createElement("img"),sourceImage.addEventListener("load",function(){var t=n.getPalette(sourceImage,5,r)[0];e(t,this)}),sourceImage.src=t})},!s)var s={map:function(t,e){var r={};return e?t.map(function(t,n){return r.index=n,e.call(r,t)}):t.slice()},naturalOrder:function(t,e){return t<e?-1:t>e?1:0},sum:function(t,e){var r={};return t.reduce(e?function(t,n,o){return r.index=o,t+e.call(r,n)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?s.map(t,e):t)}};var a=function(){var t=5,e=8-t,r=1e3,n=.75;function o(e,r,n){return(e<<2*t)+(r<<t)+n}function i(t){var e=[],r=!1;function n(){e.sort(t),r=!0}return{push:function(t){e.push(t),r=!1},peek:function(t){return r||n(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return r||n(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return r||n(),e}}}function a(t,e,r,n,o,i,s){this.r1=t,this.r2=e,this.g1=r,this.g2=n,this.b1=o,this.b2=i,this.histo=s}function u(){this.vboxes=new i(function(t,e){return s.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())})}function c(t,e){if(e.count()){var r=e.r2-e.r1+1,n=e.g2-e.g1+1,i=e.b2-e.b1+1,a=s.max([r,n,i]);if(1==e.count())return[e.copy()];var u,c,p,l,f=0,y=[],h=[];if(a==r)for(u=e.r1;u<=e.r2;u++){for(l=0,c=e.g1;c<=e.g2;c++)for(p=e.b1;p<=e.b2;p++)l+=t[o(u,c,p)]||0;f+=l,y[u]=f}else if(a==n)for(u=e.g1;u<=e.g2;u++){for(l=0,c=e.r1;c<=e.r2;c++)for(p=e.b1;p<=e.b2;p++)l+=t[o(c,u,p)]||0;f+=l,y[u]=f}else for(u=e.b1;u<=e.b2;u++){for(l=0,c=e.r1;c<=e.r2;c++)for(p=e.g1;p<=e.g2;p++)l+=t[o(c,p,u)]||0;f+=l,y[u]=f}return y.forEach(function(t,e){h[e]=f-t}),v(a==r?"r":a==n?"g":"b")}function v(t){var r,n,o,i,s,a=t+"1",c=t+"2",p=0;for(u=e[a];u<=e[c];u++)if(y[u]>f/2){for(o=e.copy(),i=e.copy(),s=(r=u-e[a])<=(n=e[c]-u)?Math.min(e[c]-1,~~(u+n/2)):Math.max(e[a],~~(u-1-r/2));!y[s];)s++;for(p=h[s];!p&&y[s-1];)p=h[--s];return o[c]=s,i[a]=o[c]+1,[o,i]}}}return a.prototype={volume:function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(t){var e=this.histo;if(!this._count_set||t){var r,n,i,s=0;for(r=this.r1;r<=this.r2;r++)for(n=this.g1;n<=this.g2;n++)for(i=this.b1;i<=this.b2;i++)s+=e[o(r,n,i)]||0;this._count=s,this._count_set=!0}return this._count},copy:function(){return new a(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(e){var r=this.histo;if(!this._avg||e){var n,i,s,a,u=0,c=1<<8-t,p=0,l=0,f=0;for(i=this.r1;i<=this.r2;i++)for(s=this.g1;s<=this.g2;s++)for(a=this.b1;a<=this.b2;a++)u+=n=r[o(i,s,a)]||0,p+=n*(i+.5)*c,l+=n*(s+.5)*c,f+=n*(a+.5)*c;this._avg=u?[~~(p/u),~~(l/u),~~(f/u)]:[~~(c*(this.r1+this.r2+1)/2),~~(c*(this.g1+this.g2+1)/2),~~(c*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(t){var r=t[0]>>e;return gval=t[1]>>e,bval=t[2]>>e,r>=this.r1&&r<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},u.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,r=0;r<e.size();r++)if(e.peek(r).vbox.contains(t))return e.peek(r).color;return this.nearest(t)},nearest:function(t){for(var e,r,n,o=this.vboxes,i=0;i<o.size();i++)((r=Math.sqrt(Math.pow(t[0]-o.peek(i).color[0],2)+Math.pow(t[1]-o.peek(i).color[1],2)+Math.pow(t[2]-o.peek(i).color[2],2)))<e||void 0===e)&&(e=r,n=o.peek(i).color);return n},forcebw:function(){var t=this.vboxes;t.sort(function(t,e){return s.naturalOrder(s.sum(t.color),s.sum(e.color))});var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var r=t.length-1,n=t[r].color;n[0]>251&&n[1]>251&&n[2]>251&&(t[r].color=[255,255,255])}},{quantize:function(p,l){if(!p.length||l<2||l>256)return!1;var f=function(r){var n,i,s,a,u=new Array(1<<3*t);return r.forEach(function(t){i=t[0]>>e,s=t[1]>>e,a=t[2]>>e,n=o(i,s,a),u[n]=(u[n]||0)+1}),u}(p);f.forEach(function(){});var y=function(t,r){var n,o,i,s=1e6,u=0,c=1e6,p=0,l=1e6,f=0;return t.forEach(function(t){n=t[0]>>e,o=t[1]>>e,i=t[2]>>e,n<s?s=n:n>u&&(u=n),o<c?c=o:o>p&&(p=o),i<l?l=i:i>f&&(f=i)}),new a(s,u,c,p,l,f,r)}(p,f),h=new i(function(t,e){return s.naturalOrder(t.count(),e.count())});function v(t,e){for(var n,o=1,i=0;i<r;)if((n=t.pop()).count()){var s=c(f,n),a=s[0],u=s[1];if(!a)return;if(t.push(a),u&&(t.push(u),o++),o>=e)return;if(i++>r)return}else t.push(n),i++}h.push(y),v(h,n*l);for(var m=new i(function(t,e){return s.naturalOrder(t.count()*t.volume(),e.count()*e.volume())});h.size();)m.push(h.pop());v(m,l-m.size());for(var d=new u;m.size();)d.push(m.pop());return d}}}();t.exports&&(t.exports=i)},function(t,e,r){const n=r(9);e.parseFont=n,e.createCanvas=function(t,e){return Object.assign(document.createElement("canvas"),{width:t,height:e})},e.createImageData=function(t,e,r){switch(arguments.length){case 0:return new ImageData;case 1:return new ImageData(t);case 2:return new ImageData(t,e);default:return new ImageData(t,e,r)}},e.loadImage=function(t){return new Promise((e,r)=>{const n=document.createElement("img");function o(){n.onload=null,n.onerror=null}n.onload=(()=>{o(),e(n)}),n.onerror=(()=>{o(),r(new Error(`Failed to load the image "${t}"`))}),n.src=t})}},function(t,e,r){"use strict";const n="'([^']+)'|\"([^\"]+)\"|[\\w\\s-]+",o=new RegExp("(bold|bolder|lighter|[1-9]00) +","i"),i=new RegExp("(italic|oblique) +","i"),s=new RegExp("(small-caps) +","i"),a=new RegExp("(ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded) +","i"),u=new RegExp("([\\d\\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q) *((?:"+n+")( *, *(?:"+n+"))*)"),c={};t.exports=function(t){if(c[t])return c[t];const e=u.exec(t);if(!e)return;const r={weight:"normal",style:"normal",stretch:"normal",variant:"normal",size:parseFloat(e[1]),unit:e[2],family:e[3].replace(/["']/g,"").replace(/ *, */g,",")};let n,p,l,f,y=t.substring(0,e.index);switch((n=o.exec(y))&&(r.weight=n[1]),(p=i.exec(y))&&(r.style=p[1]),(l=s.exec(y))&&(r.variant=l[1]),(f=a.exec(y))&&(r.stretch=f[1]),r.unit){case"pt":r.size/=.75;break;case"pc":r.size*=16;break;case"in":r.size*=96;break;case"cm":r.size*=96/2.54;break;case"mm":r.size*=96/25.4;break;case"%":break;case"em":case"rem":r.size*=16/.75;break;case"q":r.size*=96/25.4/4}return c[t]=r}}]);