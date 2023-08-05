var data,nhp,ntz,rf,sr,i,d=new Date(),pageName;

// The pageName variable can be customized if needed
pageName=location.pathname;

document.cookie='__support_check=1';nhp='http';
rf=document.referrer;sr=window.location.search;
if(top.window.location==document.referrer
|| (document.referrer == '' && top.window.location != ''))
{rf=top.document.referrer;sr=top.window.location.search}
ntz=new Date();if(location.href.substr(0,6).toLowerCase()=='https:')
nhp='https';data='&an='+escape(navigator.appName)+ 
'&sr='+escape(sr)+'&ck='+document.cookie.length+
'&rf='+escape(rf)+'&sl='+escape(navigator.systemLanguage)+
'&av='+escape(navigator.appVersion)+'&l='+escape(navigator.language)+
'&pf='+escape(navigator.platform)+'&pg='+escape(pageName);
if(navigator.appVersion.substring(0,1)>'3') {data=data+'&cd='+
screen.colorDepth+'&rs='+escape(screen.width+ ' x '+screen.height)+
'&tz='+ntz.getTimezoneOffset()+'&je='+ navigator.javaEnabled()};
i=new Image();i.src=nhp+'://counter.hitslink.com/statistics.asp'+
'?v=1&s=201&acct=onetrue'+data+'&tks='+d.getTime();