var eventUtil = {
	addEvent: function(ele, type, fn){
		if(ele.addEventListener){
			ele.addEventListener(type, fn, false);
		}
		else if(ele.attachEvent){
			ele.attachEvent("on" + type, fn);
		}
		else{
			ele["on" + type] = fn;
		}
	},
	removeEvent: function(ele, type, fn){
		if(ele.removeEventListener){
			ele.removeEventListener(type, fn, false);
		}
		else if(ele.detachEvent){
			ele.detachEvent("on" + type, fn);
		}
		else {
			ele["on" + type] = null;
		}
	},
	getEvent: function(e){
		return e || window.event;
	},
	getTarget: function(e){
		return e.target || e.srcElement;
	},
	stopPropagation: function(e){
		if(e.stopPropagation){
			e.stopPropagation();
		}
		else{
			e.cancelBubble = true;
		}
	},
	preventDefault: function(e){
		if(e.preventDefault){
			e.preventDefault();
		}
		else{
			e.returnValue = false;
		}
	}
}
