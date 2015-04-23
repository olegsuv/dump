/**
 * Created by Олег on 03.11.2014.
 */

//main object in global vision
var olegsuv = olegsuv || {};

//dump array
olegsuv.s = [];

//push new item (obejct, comment)
olegsuv.v = function(obj, c) {
	var comment = '';

	if(typeof obj == undefined) {
		obj = 'Error: object is '+typeof obj;
	}

	if(obj == null) {
		obj = 'Error: object is '+ obj;
	}

	if(typeof obj != 'object') {
		obj = {
			type: typeof obj,
			content: obj
		}
	}

	if(c && (typeof obj == 'object')) {
		obj.comment = c;
		comment = ', comment: '+c;
	}

	olegsuv.s.push(obj);
	console.log('Saved in: '+parseInt(olegsuv.s.length-1)+comment,obj);
};

//get list of inner keys in object, usage: alert(olegsuv.o(obj))
olegsuv.o = function(obj, c){
	var s = "";
	for (prop in obj) {
		if (typeof obj[prop] != "function") {
			s += prop + ": '" + obj[prop] + "',\n";
		}
	}
	return s;
};

//compare, return bool value
olegsuv.c = function(i1, i2){
	if(i1 && i2) return (olegsuv.s[i1] == olegsuv.s[i2]);
	else return (olegsuv.s[0] == olegsuv.s[1]);
};

//get dump length
olegsuv.l = function(){
	return olegsuv.s[olegsuv.s.length-1];
};

//clear cookie
olegsuv.ck = function() {
	var cookies = document.cookie.split(";");

	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}
	cookies = document.cookie || 'undefined';
	console.log('Cookie cleared: '+cookies);
}

/*
 console.log = function(obj) {
 olegsuv.v(obj,'from console.olog');
 }
 */