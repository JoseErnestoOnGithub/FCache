// GENERAL CLASS SWAPPERS

function swapThis(obj, newClass) {
    obj.className = newClass;
}

function swapThat(obj, newClass) {          // Netscape Compatible
thingie=document.getElementById(obj);
thingie.className=newClass;
}

function toggleThat(obj_id,disp) {
  obj = document.getElementById(obj_id);
  if (disp!='' && disp!=null) {obj.style.display=disp;}
  else if (obj.style.display=='block') {obj.style.display='none';}
  else {obj.style.display='block';}
}

// NAVIGATION CLASS SWAPPERS


function appendThat(obj, addedClass) {
thingie=document.getElementById(obj);
thingie.className += addedClass;
}

function unappendThat(obj, unaddedClass) {
thingie=document.getElementById(obj);
thingie.className = thingie.className.replace(new RegExp(unaddedClass), "");
}

// INITIALIZATION SCRIPTS
function initSubnavRollover()
{
    var subnav = document.getElementById('au_subnav');
    var els = subnav.getElementsByTagName('img');
    for (var i=0;i<els.length;i++)
    {
        els[i].onmouseover = function(){
            appendThis(this,' subSectionOver');
        }
        els[i].onmouseout = function(){
            unappendThis(this,' subSectionOver');
        }
    }
}

function initFaqOnclick()
{
    var questions = document.getElementById('faq_questions');
    var els = questions.getElementsByTagName('h3');
    for (var i=0;i<els.length;i++)
    {
        els[i].onmouseover = function(){
            this.style.textDecoration = 'underline';
        }
        els[i].onmouseout = function(){
            this.style.textDecoration = 'none';
        }
        els[i].onclick = function(){
            var answer_id = 'a_' + this.id;
            var list_id = 'l_' + this.id;
            //show or hide answer section
            toggleThat(answer_id);
            //show expand or collapse icon next to question
            if (document.getElementById(answer_id).style.display=='block') {
                this.parentNode.style.backgroundImage = 'url(images/faq_collapse.gif)';
            } else {
                this.parentNode.style.backgroundImage = 'url(images/faq_expand.gif)';
            }
        }
    }
}

/* NOT BEING USED RIGHT NOW
function initMetadataRollover() {
    var rolloverDiv = document.getElementById('rolloverDiv');
    var divs = rolloverDiv.getElementsByTagName('div');
    for (var i=0; i<divs.length; i++) {
        if (divs[i].className == 'pg_thumb pg_thumb_small' || divs[i].className == 'pg_thumb pg_thumb_medium' || divs[i].className == 'pg_thumb pg_thumb_large'){
            var tables = divs[i].getElementsByTagName('table');
            tables[0].onmouseover = function() {
                var siblings = this.parentNode.getElementsByTagName('div');
                for (var j=0; j<siblings.length; j++) {
                    if (siblings[j].className=='fullMetadata'){siblings[j].style.display='block'}
                    else if (siblings[j].className=='briefMetadata'){siblings[j].style.display='none'}
                }
            }
            tables[0].onmouseout = function() {
                var siblings = this.parentNode.getElementsByTagName('div');
                for (var j=0; j<siblings.length; j++) {
                    if (siblings[j].className=='fullMetadata'){siblings[j].style.display='none'}
                    else if (siblings[j].className=='briefMetadata'){siblings[j].style.display=''}
                }
            }
        }
    }
}
*/

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


// NEW TABLE-SPECIFIC ROLLOVERS
function c4projover(obj,table_color,table_id) {
    var footer_id = 'c4projftr_'+table_id;
    obj.className = 'c4expItem';
    if (table_color == 1) {
        document.getElementById(footer_id).className = 'c4ftrType1Col';
    }
    else {
        document.getElementById(footer_id).className = 'c4ftrType2Col';
    }
}

function c4projoff(obj,table_color,table_id) {
    var footer_id = 'c4projftr_'+table_id;
    var table_id = 'c4table_'+table_id;
    if (document.getElementById(table_id).className == 'c4homeTableCol') {
        obj.className = 'c4colItem';
        if (table_color == 1) {
            document.getElementById(footer_id).className = 'c4ftrType1Exp';
        }
        else {
            document.getElementById(footer_id).className = 'c4ftrType2Exp';
        }
    }
    else {
        obj.className = 'c4expItem';
        if (table_color == 1) {
            document.getElementById(footer_id).className = 'c4ftrType1Col';
        }
        else {
            document.getElementById(footer_id).className = 'c4ftrType2Col';
        }
    }
}

function toggleMetadata(obj,dir) {
    var siblings = obj.parentNode.getElementsByTagName('div');
    if (dir=='over') {
        for (var i=0; i<siblings.length; i++) {
            if (siblings[i].className=='fullMetadata'){siblings[i].style.display='block'}
            else if (siblings[i].className=='briefMetadata'){siblings[i].style.display='none'}
        }
    }
    else if (dir=='out') {
        for (var i=0; i<siblings.length; i++) {
            if (siblings[i].className=='fullMetadata'){siblings[i].style.display=''}
            else if (siblings[i].className=='briefMetadata'){siblings[i].style.display=''}
        }
    }
}

/* NOT BEING USED RIGHT NOW
function metadataRollover(obj,dir,size,width,height){
    var el = obj.parentNode.getElementsByTagName('table')[0];
    toggleMetadata(el,dir);
    changeChildSize(el,width,height);
    if (size!='pg_thumb_large' && dir=='over'){el.className='thumb_over';}
    else if (size!='pg_thumb_large' && dir=='out'){el.className='';}
}
*/

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
    if ((me.className == 'formInputFieldHover')||(me.className == 'formInputField'));
    me.className = 'formInputFieldSelected';
}

function blurField(me) {
    me.className = 'formInputField';
}

// VALUE SWAPS

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function ChangeValue(objName,x,theProp,theValue) {
  var obj = MM_findObj(objName);
  eval("obj."+theProp+"="+theValue);
}

function changeChildSize(obj,width,height) {
  var images = obj.getElementsByTagName('img');
  images[0].style.width = width+'px';
  images[0].style.height = height+'px';
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

function MM_changeProp(objName,x,theProp,theValue) { //v6.0
  var obj = MM_findObj(objName);
  if (obj && (theProp.indexOf("style.")==-1 || obj.style)){
    if (theValue == true || theValue == false)
      eval("obj."+theProp+"="+theValue);
    else eval("obj."+theProp+"='"+theValue+"'");
  }
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

function MM_callJS(jsStr) { //v2.0
  return eval(jsStr)
}
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

//AC_RunActiveContent
//v1.0
//Copyright 2006 Adobe Systems, Inc. All rights reserved.
function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?');
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs)
{
  var str = '<object ';
  for (var i in objAttrs)
    str += i + '="' + objAttrs[i] + '" ';
  str += '>';
  for (var i in params)
    str += '<param name="' + i + '" value="' + params[i] + '" /> ';
  str += '<embed ';
  for (var i in embedAttrs)
    str += i + '="' + embedAttrs[i] + '" ';
  str += ' ></embed></object>';

  document.write(str);
}

function AC_FL_RunContent(){
  var ret =
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_SW_RunContent(){
  var ret =
    AC_GetArgs
    (  arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
     , null
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();

    switch (currArg){
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace":
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "id":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}