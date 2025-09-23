gdjs.SaveCode = {};
gdjs.SaveCode.localVariables = [];
gdjs.SaveCode.GDGlobal_9595PlayObjects1= [];
gdjs.SaveCode.GDGlobal_9595PlayObjects2= [];
gdjs.SaveCode.GDGlobal_9595EditorObjects1= [];
gdjs.SaveCode.GDGlobal_9595EditorObjects2= [];
gdjs.SaveCode.GDGlobal_9595HomeObjects1= [];
gdjs.SaveCode.GDGlobal_9595HomeObjects2= [];
gdjs.SaveCode.GDGlobal_9595Top_9595MenuObjects1= [];
gdjs.SaveCode.GDGlobal_9595Top_9595MenuObjects2= [];
gdjs.SaveCode.GDGlobal_9595Blank_9595KnobObjects1= [];
gdjs.SaveCode.GDGlobal_9595Blank_9595KnobObjects2= [];
gdjs.SaveCode.GDGlobal_9595BaseObjects1= [];
gdjs.SaveCode.GDGlobal_9595BaseObjects2= [];
gdjs.SaveCode.GDGlobal_9595Top_9595LiteObjects1= [];
gdjs.SaveCode.GDGlobal_9595Top_9595LiteObjects2= [];
gdjs.SaveCode.GDAutoPlayObjects1= [];
gdjs.SaveCode.GDAutoPlayObjects2= [];
gdjs.SaveCode.GDLoading_9595alertObjects1= [];
gdjs.SaveCode.GDLoading_9595alertObjects2= [];
gdjs.SaveCode.GDTri_9595Blank_9595Objects1= [];
gdjs.SaveCode.GDTri_9595Blank_9595Objects2= [];
gdjs.SaveCode.GDSnapShotObjects1= [];
gdjs.SaveCode.GDSnapShotObjects2= [];
gdjs.SaveCode.GDBackgroundObjects1= [];
gdjs.SaveCode.GDBackgroundObjects2= [];
gdjs.SaveCode.GDfadeObjects1= [];
gdjs.SaveCode.GDfadeObjects2= [];
gdjs.SaveCode.GDSquareWhiteSliderObjects1= [];
gdjs.SaveCode.GDSquareWhiteSliderObjects2= [];
gdjs.SaveCode.GDtop_9595titleObjects1= [];
gdjs.SaveCode.GDtop_9595titleObjects2= [];
gdjs.SaveCode.GDShadowObjects1= [];
gdjs.SaveCode.GDShadowObjects2= [];
gdjs.SaveCode.GDko_9595fiObjects1= [];
gdjs.SaveCode.GDko_9595fiObjects2= [];


gdjs.SaveCode.mapOfGDgdjs_9546SaveCode_9546GDGlobal_95959595PlayObjects1Objects = Hashtable.newFrom({"Global_Play": gdjs.SaveCode.GDGlobal_9595PlayObjects1});
gdjs.SaveCode.mapOfGDgdjs_9546SaveCode_9546GDGlobal_95959595EditorObjects1Objects = Hashtable.newFrom({"Global_Editor": gdjs.SaveCode.GDGlobal_9595EditorObjects1});
gdjs.SaveCode.mapOfGDgdjs_9546SaveCode_9546GDGlobal_95959595HomeObjects1Objects = Hashtable.newFrom({"Global_Home": gdjs.SaveCode.GDGlobal_9595HomeObjects1});
gdjs.SaveCode.mapOfGDgdjs_9546SaveCode_9546GDGlobal_95959595Blank_95959595KnobObjects1Objects = Hashtable.newFrom({"Global_Blank_Knob": gdjs.SaveCode.GDGlobal_9595Blank_9595KnobObjects1});
gdjs.SaveCode.mapOfGDgdjs_9546SaveCode_9546GDAutoPlayObjects1Objects = Hashtable.newFrom({"AutoPlay": gdjs.SaveCode.GDAutoPlayObjects1});
gdjs.SaveCode.mapOfGDgdjs_9546SaveCode_9546GDSquareWhiteSliderObjects1Objects = Hashtable.newFrom({"SquareWhiteSlider": gdjs.SaveCode.GDSquareWhiteSliderObjects1});
gdjs.SaveCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Text-to-speech enabled", "", 100, 100, 100, null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Global_Play"), gdjs.SaveCode.GDGlobal_9595PlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SaveCode.mapOfGDgdjs_9546SaveCode_9546GDGlobal_95959595PlayObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Play button", "", 100, 100, 100, null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Global_Editor"), gdjs.SaveCode.GDGlobal_9595EditorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SaveCode.mapOfGDgdjs_9546SaveCode_9546GDGlobal_95959595EditorObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Editor button", "", 100, 100, 100, null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Global_Home"), gdjs.SaveCode.GDGlobal_9595HomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SaveCode.mapOfGDgdjs_9546SaveCode_9546GDGlobal_95959595HomeObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Home button", "", 100, 100, 100, null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Global_Blank_Knob"), gdjs.SaveCode.GDGlobal_9595Blank_9595KnobObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SaveCode.mapOfGDgdjs_9546SaveCode_9546GDGlobal_95959595Blank_95959595KnobObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Blank knob", "", 100, 100, 100, null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AutoPlay"), gdjs.SaveCode.GDAutoPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SaveCode.mapOfGDgdjs_9546SaveCode_9546GDAutoPlayObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Autoplay switch", "", 100, 100, 100, null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.SaveCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SaveCode.mapOfGDgdjs_9546SaveCode_9546GDSquareWhiteSliderObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Square white slider", "", 100, 100, 100, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__StopSpeaking.func(runtimeScene, null);
}
}

}


};

gdjs.SaveCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SaveCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.SaveCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.SaveCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.SaveCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.SaveCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.SaveCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.SaveCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.SaveCode.GDAutoPlayObjects1.length = 0;
gdjs.SaveCode.GDAutoPlayObjects2.length = 0;
gdjs.SaveCode.GDLoading_9595alertObjects1.length = 0;
gdjs.SaveCode.GDLoading_9595alertObjects2.length = 0;
gdjs.SaveCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.SaveCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.SaveCode.GDSnapShotObjects1.length = 0;
gdjs.SaveCode.GDSnapShotObjects2.length = 0;
gdjs.SaveCode.GDBackgroundObjects1.length = 0;
gdjs.SaveCode.GDBackgroundObjects2.length = 0;
gdjs.SaveCode.GDfadeObjects1.length = 0;
gdjs.SaveCode.GDfadeObjects2.length = 0;
gdjs.SaveCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.SaveCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.SaveCode.GDtop_9595titleObjects1.length = 0;
gdjs.SaveCode.GDtop_9595titleObjects2.length = 0;
gdjs.SaveCode.GDShadowObjects1.length = 0;
gdjs.SaveCode.GDShadowObjects2.length = 0;
gdjs.SaveCode.GDko_9595fiObjects1.length = 0;
gdjs.SaveCode.GDko_9595fiObjects2.length = 0;

gdjs.SaveCode.eventsList0(runtimeScene);
gdjs.SaveCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.SaveCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.SaveCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.SaveCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.SaveCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.SaveCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.SaveCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.SaveCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.SaveCode.GDAutoPlayObjects1.length = 0;
gdjs.SaveCode.GDAutoPlayObjects2.length = 0;
gdjs.SaveCode.GDLoading_9595alertObjects1.length = 0;
gdjs.SaveCode.GDLoading_9595alertObjects2.length = 0;
gdjs.SaveCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.SaveCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.SaveCode.GDSnapShotObjects1.length = 0;
gdjs.SaveCode.GDSnapShotObjects2.length = 0;
gdjs.SaveCode.GDBackgroundObjects1.length = 0;
gdjs.SaveCode.GDBackgroundObjects2.length = 0;
gdjs.SaveCode.GDfadeObjects1.length = 0;
gdjs.SaveCode.GDfadeObjects2.length = 0;
gdjs.SaveCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.SaveCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.SaveCode.GDtop_9595titleObjects1.length = 0;
gdjs.SaveCode.GDtop_9595titleObjects2.length = 0;
gdjs.SaveCode.GDShadowObjects1.length = 0;
gdjs.SaveCode.GDShadowObjects2.length = 0;
gdjs.SaveCode.GDko_9595fiObjects1.length = 0;
gdjs.SaveCode.GDko_9595fiObjects2.length = 0;


return;

}

gdjs['SaveCode'] = gdjs.SaveCode;
