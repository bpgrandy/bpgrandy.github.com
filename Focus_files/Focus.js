// Created by iWeb 2.0.4 local-build-20121218

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:3.00}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,896),url:'Focus_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Focus_files/stroke_1.png'},{rect:new IWRect(2,-2,1436,4),url:'Focus_files/stroke_2.png'},{rect:new IWRect(1438,-2,4,4),url:'Focus_files/stroke_3.png'},{rect:new IWRect(1438,2,4,896),url:'Focus_files/stroke_4.png'},{rect:new IWRect(1438,898,4,4),url:'Focus_files/stroke_5.png'},{rect:new IWRect(2,898,1436,4),url:'Focus_files/stroke_6.png'},{rect:new IWRect(-2,898,4,4),url:'Focus_files/stroke_7.png'}],new IWSize(1440,900))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Focus_files/FocusMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('Media/transparent.gif');applyEffects()}
