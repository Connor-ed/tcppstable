gdjs.PreCode = {};
gdjs.PreCode.localVariables = [];
gdjs.PreCode.GDNewSpriteObjects1= [];
gdjs.PreCode.GDNewSpriteObjects2= [];
gdjs.PreCode.GDNewSpriteObjects3= [];
gdjs.PreCode.GDNewSprite2Objects1= [];
gdjs.PreCode.GDNewSprite2Objects2= [];
gdjs.PreCode.GDNewSprite2Objects3= [];
gdjs.PreCode.GDNewSprite3Objects1= [];
gdjs.PreCode.GDNewSprite3Objects2= [];
gdjs.PreCode.GDNewSprite3Objects3= [];
gdjs.PreCode.GDNewSprite4Objects1= [];
gdjs.PreCode.GDNewSprite4Objects2= [];
gdjs.PreCode.GDNewSprite4Objects3= [];
gdjs.PreCode.GDgen_9595textObjects1= [];
gdjs.PreCode.GDgen_9595textObjects2= [];
gdjs.PreCode.GDgen_9595textObjects3= [];
gdjs.PreCode.GDGlobal_9595PlayObjects1= [];
gdjs.PreCode.GDGlobal_9595PlayObjects2= [];
gdjs.PreCode.GDGlobal_9595PlayObjects3= [];
gdjs.PreCode.GDGlobal_9595EditorObjects1= [];
gdjs.PreCode.GDGlobal_9595EditorObjects2= [];
gdjs.PreCode.GDGlobal_9595EditorObjects3= [];
gdjs.PreCode.GDGlobal_9595HomeObjects1= [];
gdjs.PreCode.GDGlobal_9595HomeObjects2= [];
gdjs.PreCode.GDGlobal_9595HomeObjects3= [];
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects1= [];
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects2= [];
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects3= [];
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects1= [];
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects2= [];
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects3= [];
gdjs.PreCode.GDGlobal_9595BaseObjects1= [];
gdjs.PreCode.GDGlobal_9595BaseObjects2= [];
gdjs.PreCode.GDGlobal_9595BaseObjects3= [];
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects1= [];
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects2= [];
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects3= [];
gdjs.PreCode.GDAutoPlayObjects1= [];
gdjs.PreCode.GDAutoPlayObjects2= [];
gdjs.PreCode.GDAutoPlayObjects3= [];
gdjs.PreCode.GDLoading_9595alertObjects1= [];
gdjs.PreCode.GDLoading_9595alertObjects2= [];
gdjs.PreCode.GDLoading_9595alertObjects3= [];
gdjs.PreCode.GDTri_9595Blank_9595Objects1= [];
gdjs.PreCode.GDTri_9595Blank_9595Objects2= [];
gdjs.PreCode.GDTri_9595Blank_9595Objects3= [];
gdjs.PreCode.GDSnapShotObjects1= [];
gdjs.PreCode.GDSnapShotObjects2= [];
gdjs.PreCode.GDSnapShotObjects3= [];
gdjs.PreCode.GDBackgroundObjects1= [];
gdjs.PreCode.GDBackgroundObjects2= [];
gdjs.PreCode.GDBackgroundObjects3= [];
gdjs.PreCode.GDfadeObjects1= [];
gdjs.PreCode.GDfadeObjects2= [];
gdjs.PreCode.GDfadeObjects3= [];
gdjs.PreCode.GDSquareWhiteSliderObjects1= [];
gdjs.PreCode.GDSquareWhiteSliderObjects2= [];
gdjs.PreCode.GDSquareWhiteSliderObjects3= [];
gdjs.PreCode.GDtop_9595titleObjects1= [];
gdjs.PreCode.GDtop_9595titleObjects2= [];
gdjs.PreCode.GDtop_9595titleObjects3= [];
gdjs.PreCode.GDShadowObjects1= [];
gdjs.PreCode.GDShadowObjects2= [];
gdjs.PreCode.GDShadowObjects3= [];


gdjs.PreCode.mapOfGDgdjs_9546PreCode_9546GDGlobal_95959595PlayObjects2Objects = Hashtable.newFrom({"Global_Play": gdjs.PreCode.GDGlobal_9595PlayObjects2});
gdjs.PreCode.mapOfGDgdjs_9546PreCode_9546GDGlobal_95959595EditorObjects2Objects = Hashtable.newFrom({"Global_Editor": gdjs.PreCode.GDGlobal_9595EditorObjects2});
gdjs.PreCode.mapOfGDgdjs_9546PreCode_9546GDGlobal_95959595HomeObjects2Objects = Hashtable.newFrom({"Global_Home": gdjs.PreCode.GDGlobal_9595HomeObjects2});
gdjs.PreCode.mapOfGDgdjs_9546PreCode_9546GDGlobal_95959595Blank_95959595KnobObjects2Objects = Hashtable.newFrom({"Global_Blank_Knob": gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects2});
gdjs.PreCode.mapOfGDgdjs_9546PreCode_9546GDAutoPlayObjects2Objects = Hashtable.newFrom({"AutoPlay": gdjs.PreCode.GDAutoPlayObjects2});
gdjs.PreCode.mapOfGDgdjs_9546PreCode_9546GDSquareWhiteSliderObjects2Objects = Hashtable.newFrom({"SquareWhiteSlider": gdjs.PreCode.GDSquareWhiteSliderObjects2});
gdjs.PreCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Global_Play"), gdjs.PreCode.GDGlobal_9595PlayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PreCode.mapOfGDgdjs_9546PreCode_9546GDGlobal_95959595PlayObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Play", "", 100, 100, 100, null);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Global_Editor"), gdjs.PreCode.GDGlobal_9595EditorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PreCode.mapOfGDgdjs_9546PreCode_9546GDGlobal_95959595EditorObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Editor", "", 100, 100, 100, null);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Global_Home"), gdjs.PreCode.GDGlobal_9595HomeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PreCode.mapOfGDgdjs_9546PreCode_9546GDGlobal_95959595HomeObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Home", "", 100, 100, 100, null);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Global_Blank_Knob"), gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PreCode.mapOfGDgdjs_9546PreCode_9546GDGlobal_95959595Blank_95959595KnobObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Blank Knob", "", 100, 100, 100, null);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AutoPlay"), gdjs.PreCode.GDAutoPlayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PreCode.mapOfGDgdjs_9546PreCode_9546GDAutoPlayObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Auto Play", "", 100, 100, 100, null);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.PreCode.GDSquareWhiteSliderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PreCode.mapOfGDgdjs_9546PreCode_9546GDSquareWhiteSliderObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Slider", "", 100, 100, 100, null);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__StopSpeaking.func(runtimeScene, null);
}}

}


};gdjs.PreCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Loading_alert"), gdjs.PreCode.GDLoading_9595alertObjects1);
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "The Patch Project");
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Editor");
}{for(var i = 0, len = gdjs.PreCode.GDLoading_9595alertObjects1.length ;i < len;++i) {
    gdjs.PreCode.GDLoading_9595alertObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ABC");
}{for(var i = 0, len = gdjs.PreCode.GDLoading_9595alertObjects1.length ;i < len;++i) {
    gdjs.PreCode.GDLoading_9595alertObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.PreCode.GDLoading_9595alertObjects1.length ;i < len;++i) {
    gdjs.PreCode.GDLoading_9595alertObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Simple Pluck -2.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Ow - Ahh2.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Ow - Ahh1.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "E Keys4.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "conceptbass3.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Boom Kick.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Electric Pulse2.wav");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ABC") >= 0.5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Synth Selector");
}}

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

{ //Subevents
gdjs.PreCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.PreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PreCode.GDNewSpriteObjects1.length = 0;
gdjs.PreCode.GDNewSpriteObjects2.length = 0;
gdjs.PreCode.GDNewSpriteObjects3.length = 0;
gdjs.PreCode.GDNewSprite2Objects1.length = 0;
gdjs.PreCode.GDNewSprite2Objects2.length = 0;
gdjs.PreCode.GDNewSprite2Objects3.length = 0;
gdjs.PreCode.GDNewSprite3Objects1.length = 0;
gdjs.PreCode.GDNewSprite3Objects2.length = 0;
gdjs.PreCode.GDNewSprite3Objects3.length = 0;
gdjs.PreCode.GDNewSprite4Objects1.length = 0;
gdjs.PreCode.GDNewSprite4Objects2.length = 0;
gdjs.PreCode.GDNewSprite4Objects3.length = 0;
gdjs.PreCode.GDgen_9595textObjects1.length = 0;
gdjs.PreCode.GDgen_9595textObjects2.length = 0;
gdjs.PreCode.GDgen_9595textObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595PlayObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595EditorObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595HomeObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595BaseObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects3.length = 0;
gdjs.PreCode.GDAutoPlayObjects1.length = 0;
gdjs.PreCode.GDAutoPlayObjects2.length = 0;
gdjs.PreCode.GDAutoPlayObjects3.length = 0;
gdjs.PreCode.GDLoading_9595alertObjects1.length = 0;
gdjs.PreCode.GDLoading_9595alertObjects2.length = 0;
gdjs.PreCode.GDLoading_9595alertObjects3.length = 0;
gdjs.PreCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.PreCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.PreCode.GDTri_9595Blank_9595Objects3.length = 0;
gdjs.PreCode.GDSnapShotObjects1.length = 0;
gdjs.PreCode.GDSnapShotObjects2.length = 0;
gdjs.PreCode.GDSnapShotObjects3.length = 0;
gdjs.PreCode.GDBackgroundObjects1.length = 0;
gdjs.PreCode.GDBackgroundObjects2.length = 0;
gdjs.PreCode.GDBackgroundObjects3.length = 0;
gdjs.PreCode.GDfadeObjects1.length = 0;
gdjs.PreCode.GDfadeObjects2.length = 0;
gdjs.PreCode.GDfadeObjects3.length = 0;
gdjs.PreCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.PreCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.PreCode.GDSquareWhiteSliderObjects3.length = 0;
gdjs.PreCode.GDtop_9595titleObjects1.length = 0;
gdjs.PreCode.GDtop_9595titleObjects2.length = 0;
gdjs.PreCode.GDtop_9595titleObjects3.length = 0;
gdjs.PreCode.GDShadowObjects1.length = 0;
gdjs.PreCode.GDShadowObjects2.length = 0;
gdjs.PreCode.GDShadowObjects3.length = 0;

gdjs.PreCode.eventsList1(runtimeScene);
gdjs.PreCode.GDNewSpriteObjects1.length = 0;
gdjs.PreCode.GDNewSpriteObjects2.length = 0;
gdjs.PreCode.GDNewSpriteObjects3.length = 0;
gdjs.PreCode.GDNewSprite2Objects1.length = 0;
gdjs.PreCode.GDNewSprite2Objects2.length = 0;
gdjs.PreCode.GDNewSprite2Objects3.length = 0;
gdjs.PreCode.GDNewSprite3Objects1.length = 0;
gdjs.PreCode.GDNewSprite3Objects2.length = 0;
gdjs.PreCode.GDNewSprite3Objects3.length = 0;
gdjs.PreCode.GDNewSprite4Objects1.length = 0;
gdjs.PreCode.GDNewSprite4Objects2.length = 0;
gdjs.PreCode.GDNewSprite4Objects3.length = 0;
gdjs.PreCode.GDgen_9595textObjects1.length = 0;
gdjs.PreCode.GDgen_9595textObjects2.length = 0;
gdjs.PreCode.GDgen_9595textObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595PlayObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595EditorObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595HomeObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595BaseObjects3.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects3.length = 0;
gdjs.PreCode.GDAutoPlayObjects1.length = 0;
gdjs.PreCode.GDAutoPlayObjects2.length = 0;
gdjs.PreCode.GDAutoPlayObjects3.length = 0;
gdjs.PreCode.GDLoading_9595alertObjects1.length = 0;
gdjs.PreCode.GDLoading_9595alertObjects2.length = 0;
gdjs.PreCode.GDLoading_9595alertObjects3.length = 0;
gdjs.PreCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.PreCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.PreCode.GDTri_9595Blank_9595Objects3.length = 0;
gdjs.PreCode.GDSnapShotObjects1.length = 0;
gdjs.PreCode.GDSnapShotObjects2.length = 0;
gdjs.PreCode.GDSnapShotObjects3.length = 0;
gdjs.PreCode.GDBackgroundObjects1.length = 0;
gdjs.PreCode.GDBackgroundObjects2.length = 0;
gdjs.PreCode.GDBackgroundObjects3.length = 0;
gdjs.PreCode.GDfadeObjects1.length = 0;
gdjs.PreCode.GDfadeObjects2.length = 0;
gdjs.PreCode.GDfadeObjects3.length = 0;
gdjs.PreCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.PreCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.PreCode.GDSquareWhiteSliderObjects3.length = 0;
gdjs.PreCode.GDtop_9595titleObjects1.length = 0;
gdjs.PreCode.GDtop_9595titleObjects2.length = 0;
gdjs.PreCode.GDtop_9595titleObjects3.length = 0;
gdjs.PreCode.GDShadowObjects1.length = 0;
gdjs.PreCode.GDShadowObjects2.length = 0;
gdjs.PreCode.GDShadowObjects3.length = 0;


return;

}

gdjs['PreCode'] = gdjs.PreCode;
