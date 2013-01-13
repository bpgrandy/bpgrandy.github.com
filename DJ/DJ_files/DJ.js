// Created by iWeb 2.0.4 local-build-20121218

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,288),url:'DJ_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'DJ_files/stroke_1.png'},{rect:new IWRect(2,-2,309,4),url:'DJ_files/stroke_2.png'},{rect:new IWRect(311,-2,4,4),url:'DJ_files/stroke_3.png'},{rect:new IWRect(311,2,4,288),url:'DJ_files/stroke_4.png'},{rect:new IWRect(311,290,4,5),url:'DJ_files/stroke_5.png'},{rect:new IWRect(2,290,309,5),url:'DJ_files/stroke_6.png'},{rect:new IWRect(-2,290,4,5),url:'DJ_files/stroke_7.png'}],new IWSize(313,292))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("file://localhost/Users/bpgrandy/Dropbox/Public/loading/DJ/rss.xml");}
function onPageLoad()
{loadMozillaCSS('DJ_files/DJMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
