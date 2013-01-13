// Created by iWeb 2.0.4 local-build-20121218

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,296),url:'red_tape_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'red_tape_files/stroke_1.png'},{rect:new IWRect(2,-2,196,4),url:'red_tape_files/stroke_2.png'},{rect:new IWRect(198,-2,4,4),url:'red_tape_files/stroke_3.png'},{rect:new IWRect(198,2,4,296),url:'red_tape_files/stroke_4.png'},{rect:new IWRect(198,298,4,4),url:'red_tape_files/stroke_5.png'},{rect:new IWRect(2,298,196,4),url:'red_tape_files/stroke_6.png'},{rect:new IWRect(-2,298,4,4),url:'red_tape_files/stroke_7.png'}],new IWSize(200,300))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('red_tape_files/red_tapeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');applyEffects()}
