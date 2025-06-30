gdjs.PreCode = {};
gdjs.PreCode.localVariables = [];
gdjs.PreCode.GDNewSpriteObjects1= [];
gdjs.PreCode.GDNewSpriteObjects2= [];
gdjs.PreCode.GDNewSprite2Objects1= [];
gdjs.PreCode.GDNewSprite2Objects2= [];
gdjs.PreCode.GDNewSprite3Objects1= [];
gdjs.PreCode.GDNewSprite3Objects2= [];
gdjs.PreCode.GDNewSprite4Objects1= [];
gdjs.PreCode.GDNewSprite4Objects2= [];
gdjs.PreCode.GDgen_9595textObjects1= [];
gdjs.PreCode.GDgen_9595textObjects2= [];
gdjs.PreCode.GDGlobal_9595PlayObjects1= [];
gdjs.PreCode.GDGlobal_9595PlayObjects2= [];
gdjs.PreCode.GDGlobal_9595EditorObjects1= [];
gdjs.PreCode.GDGlobal_9595EditorObjects2= [];
gdjs.PreCode.GDGlobal_9595HomeObjects1= [];
gdjs.PreCode.GDGlobal_9595HomeObjects2= [];
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects1= [];
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects2= [];
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects1= [];
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects2= [];
gdjs.PreCode.GDGlobal_9595BaseObjects1= [];
gdjs.PreCode.GDGlobal_9595BaseObjects2= [];
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects1= [];
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects2= [];
gdjs.PreCode.GDAutoPlayObjects1= [];
gdjs.PreCode.GDAutoPlayObjects2= [];
gdjs.PreCode.GDLoading_9595alertObjects1= [];
gdjs.PreCode.GDLoading_9595alertObjects2= [];
gdjs.PreCode.GDTri_9595Blank_9595Objects1= [];
gdjs.PreCode.GDTri_9595Blank_9595Objects2= [];
gdjs.PreCode.GDSnapShotObjects1= [];
gdjs.PreCode.GDSnapShotObjects2= [];
gdjs.PreCode.GDBackgroundObjects1= [];
gdjs.PreCode.GDBackgroundObjects2= [];
gdjs.PreCode.GDfadeObjects1= [];
gdjs.PreCode.GDfadeObjects2= [];
gdjs.PreCode.GDSquareWhiteSliderObjects1= [];
gdjs.PreCode.GDSquareWhiteSliderObjects2= [];
gdjs.PreCode.GDtop_9595titleObjects1= [];
gdjs.PreCode.GDtop_9595titleObjects2= [];


gdjs.PreCode.eventsList0 = function(runtimeScene) {

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


};

gdjs.PreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PreCode.GDNewSpriteObjects1.length = 0;
gdjs.PreCode.GDNewSpriteObjects2.length = 0;
gdjs.PreCode.GDNewSprite2Objects1.length = 0;
gdjs.PreCode.GDNewSprite2Objects2.length = 0;
gdjs.PreCode.GDNewSprite3Objects1.length = 0;
gdjs.PreCode.GDNewSprite3Objects2.length = 0;
gdjs.PreCode.GDNewSprite4Objects1.length = 0;
gdjs.PreCode.GDNewSprite4Objects2.length = 0;
gdjs.PreCode.GDgen_9595textObjects1.length = 0;
gdjs.PreCode.GDgen_9595textObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.PreCode.GDAutoPlayObjects1.length = 0;
gdjs.PreCode.GDAutoPlayObjects2.length = 0;
gdjs.PreCode.GDLoading_9595alertObjects1.length = 0;
gdjs.PreCode.GDLoading_9595alertObjects2.length = 0;
gdjs.PreCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.PreCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.PreCode.GDSnapShotObjects1.length = 0;
gdjs.PreCode.GDSnapShotObjects2.length = 0;
gdjs.PreCode.GDBackgroundObjects1.length = 0;
gdjs.PreCode.GDBackgroundObjects2.length = 0;
gdjs.PreCode.GDfadeObjects1.length = 0;
gdjs.PreCode.GDfadeObjects2.length = 0;
gdjs.PreCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.PreCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.PreCode.GDtop_9595titleObjects1.length = 0;
gdjs.PreCode.GDtop_9595titleObjects2.length = 0;

gdjs.PreCode.eventsList0(runtimeScene);
gdjs.PreCode.GDNewSpriteObjects1.length = 0;
gdjs.PreCode.GDNewSpriteObjects2.length = 0;
gdjs.PreCode.GDNewSprite2Objects1.length = 0;
gdjs.PreCode.GDNewSprite2Objects2.length = 0;
gdjs.PreCode.GDNewSprite3Objects1.length = 0;
gdjs.PreCode.GDNewSprite3Objects2.length = 0;
gdjs.PreCode.GDNewSprite4Objects1.length = 0;
gdjs.PreCode.GDNewSprite4Objects2.length = 0;
gdjs.PreCode.GDgen_9595textObjects1.length = 0;
gdjs.PreCode.GDgen_9595textObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.PreCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.PreCode.GDAutoPlayObjects1.length = 0;
gdjs.PreCode.GDAutoPlayObjects2.length = 0;
gdjs.PreCode.GDLoading_9595alertObjects1.length = 0;
gdjs.PreCode.GDLoading_9595alertObjects2.length = 0;
gdjs.PreCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.PreCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.PreCode.GDSnapShotObjects1.length = 0;
gdjs.PreCode.GDSnapShotObjects2.length = 0;
gdjs.PreCode.GDBackgroundObjects1.length = 0;
gdjs.PreCode.GDBackgroundObjects2.length = 0;
gdjs.PreCode.GDfadeObjects1.length = 0;
gdjs.PreCode.GDfadeObjects2.length = 0;
gdjs.PreCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.PreCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.PreCode.GDtop_9595titleObjects1.length = 0;
gdjs.PreCode.GDtop_9595titleObjects2.length = 0;


return;

}

gdjs['PreCode'] = gdjs.PreCode;
