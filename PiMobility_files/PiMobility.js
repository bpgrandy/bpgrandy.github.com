// Created by iWeb 2.0.4 local-build-20121218

function createMediaStream_id1()
{return IWCreatePhotocast("file://localhost/Users/bpgrandy/Dropbox/Public/loading/PiMobility_files/rss.xml",true,true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('file://localhost/Users/bpgrandy/Dropbox/Public/loading',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('file://localhost/Users/bpgrandy/Dropbox/Public/loading',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(182,182),new IWSize(182,35),new IWSize(218,232),27,27,0,new IWSize(18,18)),new IWPhotoFrame([IWCreateImage('PiMobility_files/Hardcover_bevel_01.png'),IWCreateImage('PiMobility_files/Hardcover_bevel_02.png'),IWCreateImage('PiMobility_files/Hardcover_bevel_03.png'),IWCreateImage('PiMobility_files/Hardcover_bevel_06.png'),IWCreateImage('PiMobility_files/Hardcover_bevel_09.png'),IWCreateImage('PiMobility_files/Hardcover_bevel_08.png'),IWCreateImage('PiMobility_files/Hardcover_bevel_07.png'),IWCreateImage('PiMobility_files/Hardcover_bevel_04.png')],null,0,0.500000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,17.000000,403.000000,295.000000,403.000000,295.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:1,transitionIndex:2},'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('PiMobility_files/PiMobilityMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
