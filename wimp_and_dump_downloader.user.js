// ==UserScript==
// @name        Wimp and Dump video downloader
// @author      Daniel Low
// @description Adds a download link to wimp and dump videos.
// @include     http://*.wimp.com/*
// @include     http://*.dump.com/*
// @version     1.0
// @grant       GM_xmlhttpRequest
// ==/UserScript==

window.addEventListener("load", wrapper, false);

function wrapper() {
	var downloadUrl = null;

	var lxUTILsign = {
		_keyStr: "\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2B\x2F\x3D",
		encode: function(_0x498ax2) {
			var _0x498ax3 = "";
			var _0x498ax4, _0x498ax5, _0x498ax6, _0x498ax7, _0x498ax8, _0x498ax9, _0x498axa;
			var _0x498axb = 0;
			_0x498ax2 = lxUTILsign._utf8_encode(_0x498ax2);
			while (_0x498axb < _0x498ax2["\x6C\x65\x6E\x67\x74\x68"]) {
				_0x498ax4 = _0x498ax2["\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74"](_0x498axb++);
				_0x498ax5 = _0x498ax2["\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74"](_0x498axb++);
				_0x498ax6 = _0x498ax2["\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74"](_0x498axb++);
				_0x498ax7 = _0x498ax4 >> 2;
				_0x498ax8 = ((_0x498ax4 & 3) << 4) | (_0x498ax5 >> 4);
				_0x498ax9 = ((_0x498ax5 & 15) << 2) | (_0x498ax6 >> 6);
				_0x498axa = _0x498ax6 & 63;
				if (isNaN(_0x498ax5)) {
					_0x498ax9 = _0x498axa = 64;
				} else {
					if (isNaN(_0x498ax6)) {
						_0x498axa = 64;
					};
				};
				_0x498ax3 = _0x498ax3 + this["\x5F\x6B\x65\x79\x53\x74\x72"]["\x63\x68\x61\x72\x41\x74"](_0x498ax7) + this["\x5F\x6B\x65\x79\x53\x74\x72"]["\x63\x68\x61\x72\x41\x74"](_0x498ax8) + this["\x5F\x6B\x65\x79\x53\x74\x72"]["\x63\x68\x61\x72\x41\x74"](_0x498ax9) + this["\x5F\x6B\x65\x79\x53\x74\x72"]["\x63\x68\x61\x72\x41\x74"](_0x498axa);
			};
			return _0x498ax3;
		},
		decode: function(_0x498ax2) {
			var _0x498ax3 = "";
			var _0x498ax4, _0x498ax5, _0x498ax6;
			var _0x498ax7, _0x498ax8, _0x498ax9, _0x498axa;
			var _0x498axb = 0;
			_0x498ax2 = _0x498ax2["\x72\x65\x70\x6C\x61\x63\x65"](/[^A-Za-z0-9\+\/\=]/g, "");
			while (_0x498axb < _0x498ax2["\x6C\x65\x6E\x67\x74\x68"]) {
				_0x498ax7 = this["\x5F\x6B\x65\x79\x53\x74\x72"]["\x69\x6E\x64\x65\x78\x4F\x66"](_0x498ax2["\x63\x68\x61\x72\x41\x74"](_0x498axb++));
				_0x498ax8 = this["\x5F\x6B\x65\x79\x53\x74\x72"]["\x69\x6E\x64\x65\x78\x4F\x66"](_0x498ax2["\x63\x68\x61\x72\x41\x74"](_0x498axb++));
				_0x498ax9 = this["\x5F\x6B\x65\x79\x53\x74\x72"]["\x69\x6E\x64\x65\x78\x4F\x66"](_0x498ax2["\x63\x68\x61\x72\x41\x74"](_0x498axb++));
				_0x498axa = this["\x5F\x6B\x65\x79\x53\x74\x72"]["\x69\x6E\x64\x65\x78\x4F\x66"](_0x498ax2["\x63\x68\x61\x72\x41\x74"](_0x498axb++));
				_0x498ax4 = (_0x498ax7 << 2) | (_0x498ax8 >> 4);
				_0x498ax5 = ((_0x498ax8 & 15) << 4) | (_0x498ax9 >> 2);
				_0x498ax6 = ((_0x498ax9 & 3) << 6) | _0x498axa;
				_0x498ax3 = _0x498ax3 + String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"](_0x498ax4);
				if (_0x498ax9 != 64) {
					_0x498ax3 = _0x498ax3 + String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"](_0x498ax5);
				};
				if (_0x498axa != 64) {
					_0x498ax3 = _0x498ax3 + String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"](_0x498ax6);
				};
			};
			_0x498ax3 = lxUTILsign._utf8_decode(_0x498ax3);
			return _0x498ax3;
		},
		_utf8_encode: function(_0x498axc) {
			_0x498axc = _0x498axc["\x72\x65\x70\x6C\x61\x63\x65"](/\r\n/g, "\x0A");
			var _0x498axd = "";
			for (var _0x498axe = 0; _0x498axe < _0x498axc["\x6C\x65\x6E\x67\x74\x68"]; _0x498axe++) {
				var _0x498axf = _0x498axc["\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74"](_0x498axe);
				if (_0x498axf < 128) {
					_0x498axd += String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"](_0x498axf);
				} else {
					if ((_0x498axf > 127) && (_0x498axf < 2048)) {
						_0x498axd += String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"]((_0x498axf >> 6) | 192);
						_0x498axd += String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"]((_0x498axf & 63) | 128);
					} else {
						_0x498axd += String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"]((_0x498axf >> 12) | 224);
						_0x498axd += String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"](((_0x498axf >> 6) & 63) | 128);
						_0x498axd += String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"]((_0x498axf & 63) | 128);
					};
				};
			};
			return _0x498axd;
		},
		_utf8_decode: function(_0x498axd) {
			var _0x498axc = "";
			var _0x498axb = 0;
			var _0x498axf = c1 = c2 = 0;
			while (_0x498axb < _0x498axd["\x6C\x65\x6E\x67\x74\x68"]) {
				_0x498axf = _0x498axd["\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74"](_0x498axb);
				if (_0x498axf < 128) {
					_0x498axc += String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"](_0x498axf);
					_0x498axb++;
				} else {
					if ((_0x498axf > 191) && (_0x498axf < 224)) {
						c2 = _0x498axd["\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74"](_0x498axb + 1);
						_0x498axc += String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"](((_0x498axf & 31) << 6) | (c2 & 63));
						_0x498axb += 2;
					} else {
						c2 = _0x498axd["\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74"](_0x498axb + 1);
						c3 = _0x498axd["\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74"](_0x498axb + 2);
						_0x498axc += String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"](((_0x498axf & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
						_0x498axb += 3;
					};
				};
			};
			return _0x498axc;
		}
	};

	function getJsonFromUrl(query) {
		var data = query.split("&");
		var result = {};
		for (var i = 0; i < data.length; i++) {
			var item = data[i].split("=");
			result[item[0]] = item[1];
		}
		return result;
	}

	function getPref(name) { // cross-browser GM_getValue
		if (typeof GM_getValue === 'function' &&
			(typeof GM_getValue.toString === 'undefined' || GM_getValue.toString().indexOf('not supported') === -1)) {
			return GM_getValue(name, null); // Greasemonkey, Tampermonkey, Firefox extension
		} else {
			var ls = null;
			try {
				ls = window.localStorage || null
			} catch (e) {}
			if (ls) {
				return ls.getItem(name); // Chrome script, Opera extensions
			}
		}
		return;
	}

	function setPref(name, value) { //  cross-browser GM_setValue
		if (typeof GM_setValue === 'function' &&
			(typeof GM_setValue.toString === 'undefined' || GM_setValue.toString().indexOf('not supported') === -1)) {
			GM_setValue(name, value); // Greasemonkey, Tampermonkey, Firefox extension
		} else {
			var ls = null;
			try {
				ls = window.localStorage || null
			} catch (e) {}
			if (ls) {
				return ls.setItem(name, value); // Chrome script, Opera extensions
			}
		}
	}

	function crossXmlHttpRequest(details) { // cross-browser GM_xmlhttpRequest
		if (typeof GM_xmlhttpRequest === 'function') { // Greasemonkey, Tampermonkey, Firefox extension, Chrome script
			GM_xmlhttpRequest(details);
		} else if (typeof window.opera !== 'undefined' && window.opera && typeof opera.extension !== 'undefined' &&
			typeof opera.extension.postMessage !== 'undefined') { // Opera 12 extension
			var index = operaTable.length;
			opera.extension.postMessage({
				'action': 'xhr-' + index,
				'url': details.url,
				'method': details.method
			});
			operaTable[index] = details;
		} else if (typeof window.opera === 'undefined' && typeof XMLHttpRequest === 'function') { // Opera 15+ extension
			var xhr = XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if (details['onload']) {
						details['onload'](xhr);
					}
				}
				console.log(xhr.readyState);
			}
			xhr.open(details.method, details.url, true);
			xhr.send();
		}
	}


	function createButton(downloadUrl) {
		var input = document.createElement("a");
		var txtNode = document.createTextNode("Download video now");
		input.href = downloadUrl;
		input.appendChild(txtNode);
		var titleDOM = document.getElementsByTagName("td")[10];
		titleDOM.appendChild(input);
	}

	function blah(y) {
		//sendRequest('http://www.youtube.com/get_video_info?hl=en&video_id=JUv5FFwx8f0',
		//function(x){y = getJsonFromUrl(x.responseText);},0);
		z = y["url_encoded_fmt_stream_map"];
		z1 = decodeURIComponent(z); // this is the one we want
		var a = z1.split(','); // this will return all possible res
		b = getJsonFromUrl(a[1]);
		url = b['url'];
		sig = b['sig'];
		final = url + '&signature=' + sig; // this will be encoded
		final2 = decodeURIComponent(final);
		downloadUrl = final2;
		createButton(downloadUrl);
	}

	if (typeof googleCode !== "undefined") {
		var work = lxUTILsign.decode(googleCode);
		var patt = /((http:\/\/)?(www)?[-a-zA-Z0-9@:%_\+.~#?\/=]+\.flv)[^a-zA-Z0-9.]/;
		createButton(patt.exec(work)[0]);
	} else if (typeof unsafeWindow.s1 !== "undefined") {
		if (typeof unsafeWindow.s1.getVariable("file") !== "undefined") {
			tempUrl = unsafeWindow.s1.getVariable("file");
			if (/youtube\.com/.exec(tempUrl) != null) {
				vid = (/v=(.*)?&?/.exec(tempUrl));
				if (vid){
					vid=vid[1];
				}
				tempUrl="http://www.youtube.com/get_video_info?hl=en&video_id="+vid;
				crossXmlHttpRequest(
					details = {
						method: "GET",
						url: tempUrl,
						onload: function(x) {
							temp = getJsonFromUrl(x.responseText);
							blah(temp);
						}
					}
				);
			}
			else{
				createButton(tempUrl);
			}
		}
	}


};
