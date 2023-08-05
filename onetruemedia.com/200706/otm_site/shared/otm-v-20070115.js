// GENERAL CLASS SWAPPERS

function swapThis(obj, newClass) {
    obj.className = newClass;
}

function swapThat(obj, newClass) {          // Netscape Compatible
thingie=document.getElementById(obj);
thingie.className=newClass;
}

function appendThis(obj, addedClass) {
    obj.className += addedClass;
}

function unappendThis(obj, unaddedClass) {
    obj.className = obj.className.replace(new RegExp(unaddedClass), "");
}

function toggle(obj_id,disp) {
  obj = document.getElementById(obj_id);
  if (disp!='' && disp!=null) {obj.style.display=disp;}
  else if (obj.style.display=='block') {obj.style.display='none';}
  else {obj.style.display='block';}
}

function toggleVis(obj_id,vis) {
  obj = document.getElementById(obj_id);
  if (vis!='' && vis!=null) {obj.style.visibility=vis;}
  else if (obj.style.visibility=='visible') {obj.style.visibility='hidden';}
  else {obj.style.visibility='visible';}
}

function enableCaptionCheck(checkbox_id,textarea_id,s) {
  checkbox_obj = document.getElementById(checkbox_id);
  textarea_obj = document.getElementById(textarea_id);
  if (textarea_obj.value == '' && s==1) {
    checkbox_obj.checked = true;
  } else if (textarea_obj.value == '' && s==0) {
    checkbox_obj.checked = false;
  }
  return true;
}


// NEW TABLE-SPECIFIC ROLLOVERS
function projover(obj,table_color,table_id) {
	var footer_id = 'projftr_'+table_id;
	obj.className = 'expItem';
	if (table_color == 1) {
		document.getElementById(footer_id).className = 'ftrType1Col';
	}
	else {
		document.getElementById(footer_id).className = 'ftrType2Col';
	}
}

function projoff(obj,table_color,table_id) {
	var footer_id = 'projftr_'+table_id;
	var table_id = 'table_'+table_id;
	if (document.getElementById(table_id).className == 'homeTableCol') {
		obj.className = 'colItem';
		if (table_color == 1) {
			document.getElementById(footer_id).className = 'ftrType1Exp';
		}
		else {
			document.getElementById(footer_id).className = 'ftrType2Exp';
		}
	}
	else {
		obj.className = 'expItem';
		if (table_color == 1) {
			document.getElementById(footer_id).className = 'ftrType1Col';
		}
		else {
			document.getElementById(footer_id).className = 'ftrType2Col';
		}
	}
}


// SLIDE-SPECIFIC CLASS SWAPPERS

function lslidehover(me) {
    if (me.className == 'slideR3loff') {
    me.className = 'slideR3loffOver';}
    else me.className = 'slideR3lonOver';
}

function lslideoff(me) {
    if (me.className == 'slideR3loffOver') {
    me.className = 'slideR3loff';}
    else me.className = 'slideR3lon';
}

function lslideclick(me) {
    if (me.className == 'slideR3loffOver') {
    me.className = 'slideR3lonOver';}
    else me.className  = 'slideR3loffOver';
}

function rslidehover(me) {
    if (me.className == 'slideR3roff') {
    me.className = 'slideR3roffOver';}
    else me.className = 'slideR3ronOver';
}

function rslideoff(me) {
    if (me.className == 'slideR3roffOver') {
    me.className = 'slideR3roff';}
    else me.className = 'slideR3ron';
}

function rslideclick(me) {
    if (me.className == 'slideR3roffOver') {
    me.className = 'slideR3ronOver';}
    else me.className  = 'slideR3roffOver';
}


// FORM-SPECIFIC CLASS SWAPPERS

function hoverField(me)  {
    if (me.className != 'formInputFieldSelected') {
        if (me.className == 'formInputField') me.className='formInputFieldHover';
        else me.className = 'formInputFieldFilledHover';
    }
}


function hoverOffField(me)  {
    if (me.className != 'formInputFieldSelected') {
        if (me.className == 'formInputFieldHover') me.className='formInputField';
        else me.className = 'formInputFieldFilled';
    }
}


function focusField(me) {
    // IZL - removing blanking of field
    //if ((me.className == 'formInputFieldHover')||(me.className == 'formInputField')) me.value='';
    me.className = 'formInputFieldSelected';
}

function blurField(me) {
    me.className = 'formInputField';
}

// MACROMEDIA FUNCTIONS

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_changeProp(objName,x,theProp,theValue) { //v6.0
  var obj = MM_findObj(objName);
  if (obj && (theProp.indexOf("style.")==-1 || obj.style)){
    if (theValue == true || theValue == false)
      eval("obj."+theProp+"="+theValue);
    else eval("obj."+theProp+"='"+theValue+"'");
  }
}