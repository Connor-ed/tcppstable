gdjs.Quick_95CheckCode = {};
gdjs.Quick_95CheckCode.localVariables = [];
gdjs.Quick_95CheckCode.GDNewSpriteObjects1= [];
gdjs.Quick_95CheckCode.GDNewSpriteObjects2= [];
gdjs.Quick_95CheckCode.GDNewSprite2Objects1= [];
gdjs.Quick_95CheckCode.GDNewSprite2Objects2= [];
gdjs.Quick_95CheckCode.GDNewSprite3Objects1= [];
gdjs.Quick_95CheckCode.GDNewSprite3Objects2= [];
gdjs.Quick_95CheckCode.GDGlobal_9595PlayObjects1= [];
gdjs.Quick_95CheckCode.GDGlobal_9595PlayObjects2= [];
gdjs.Quick_95CheckCode.GDGlobal_9595EditorObjects1= [];
gdjs.Quick_95CheckCode.GDGlobal_9595EditorObjects2= [];
gdjs.Quick_95CheckCode.GDGlobal_9595HomeObjects1= [];
gdjs.Quick_95CheckCode.GDGlobal_9595HomeObjects2= [];
gdjs.Quick_95CheckCode.GDGlobal_9595Top_9595MenuObjects1= [];
gdjs.Quick_95CheckCode.GDGlobal_9595Top_9595MenuObjects2= [];
gdjs.Quick_95CheckCode.GDGlobal_9595Blank_9595KnobObjects1= [];
gdjs.Quick_95CheckCode.GDGlobal_9595Blank_9595KnobObjects2= [];
gdjs.Quick_95CheckCode.GDGlobal_9595BaseObjects1= [];
gdjs.Quick_95CheckCode.GDGlobal_9595BaseObjects2= [];
gdjs.Quick_95CheckCode.GDGlobal_9595Top_9595LiteObjects1= [];
gdjs.Quick_95CheckCode.GDGlobal_9595Top_9595LiteObjects2= [];
gdjs.Quick_95CheckCode.GDAutoPlayObjects1= [];
gdjs.Quick_95CheckCode.GDAutoPlayObjects2= [];
gdjs.Quick_95CheckCode.GDLoading_9595alertObjects1= [];
gdjs.Quick_95CheckCode.GDLoading_9595alertObjects2= [];
gdjs.Quick_95CheckCode.GDTri_9595Blank_9595Objects1= [];
gdjs.Quick_95CheckCode.GDTri_9595Blank_9595Objects2= [];
gdjs.Quick_95CheckCode.GDSnapShotObjects1= [];
gdjs.Quick_95CheckCode.GDSnapShotObjects2= [];
gdjs.Quick_95CheckCode.GDBackgroundObjects1= [];
gdjs.Quick_95CheckCode.GDBackgroundObjects2= [];
gdjs.Quick_95CheckCode.GDfadeObjects1= [];
gdjs.Quick_95CheckCode.GDfadeObjects2= [];
gdjs.Quick_95CheckCode.GDSquareWhiteSliderObjects1= [];
gdjs.Quick_95CheckCode.GDSquareWhiteSliderObjects2= [];
gdjs.Quick_95CheckCode.GDtop_9595titleObjects1= [];
gdjs.Quick_95CheckCode.GDtop_9595titleObjects2= [];
gdjs.Quick_95CheckCode.GDShadowObjects1= [];
gdjs.Quick_95CheckCode.GDShadowObjects2= [];


gdjs.Quick_95CheckCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Boot");
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Editor");
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Load");
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Quick_Check");
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Pre");
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Synth Selector");
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Save");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "a");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Loading_alert"), gdjs.Quick_95CheckCode.GDLoading_9595alertObjects1);
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "The Patch Project");
}{for(var i = 0, len = gdjs.Quick_95CheckCode.GDLoading_9595alertObjects1.length ;i < len;++i) {
    gdjs.Quick_95CheckCode.GDLoading_9595alertObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Boot");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Quick_95CheckCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Quick_95CheckCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Quick_95CheckCode.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("no");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__UpdateChecker__UpdateAvailable.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Quick_95CheckCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Quick_95CheckCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Quick_95CheckCode.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("updating");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__UpdateChecker__UpdateAvailable.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "a") >= 30;
}
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Reload.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__UpdateChecker__UpdateAvailable.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "a") >= 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Boot");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Editor");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Load");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Quick_Check");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Pre");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Synth Selector");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Save");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boot", false);
}}

}


};

gdjs.Quick_95CheckCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Quick_95CheckCode.GDNewSpriteObjects1.length = 0;
gdjs.Quick_95CheckCode.GDNewSpriteObjects2.length = 0;
gdjs.Quick_95CheckCode.GDNewSprite2Objects1.length = 0;
gdjs.Quick_95CheckCode.GDNewSprite2Objects2.length = 0;
gdjs.Quick_95CheckCode.GDNewSprite3Objects1.length = 0;
gdjs.Quick_95CheckCode.GDNewSprite3Objects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.Quick_95CheckCode.GDAutoPlayObjects1.length = 0;
gdjs.Quick_95CheckCode.GDAutoPlayObjects2.length = 0;
gdjs.Quick_95CheckCode.GDLoading_9595alertObjects1.length = 0;
gdjs.Quick_95CheckCode.GDLoading_9595alertObjects2.length = 0;
gdjs.Quick_95CheckCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.Quick_95CheckCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.Quick_95CheckCode.GDSnapShotObjects1.length = 0;
gdjs.Quick_95CheckCode.GDSnapShotObjects2.length = 0;
gdjs.Quick_95CheckCode.GDBackgroundObjects1.length = 0;
gdjs.Quick_95CheckCode.GDBackgroundObjects2.length = 0;
gdjs.Quick_95CheckCode.GDfadeObjects1.length = 0;
gdjs.Quick_95CheckCode.GDfadeObjects2.length = 0;
gdjs.Quick_95CheckCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.Quick_95CheckCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.Quick_95CheckCode.GDtop_9595titleObjects1.length = 0;
gdjs.Quick_95CheckCode.GDtop_9595titleObjects2.length = 0;
gdjs.Quick_95CheckCode.GDShadowObjects1.length = 0;
gdjs.Quick_95CheckCode.GDShadowObjects2.length = 0;

gdjs.Quick_95CheckCode.eventsList0(runtimeScene);
gdjs.Quick_95CheckCode.GDNewSpriteObjects1.length = 0;
gdjs.Quick_95CheckCode.GDNewSpriteObjects2.length = 0;
gdjs.Quick_95CheckCode.GDNewSprite2Objects1.length = 0;
gdjs.Quick_95CheckCode.GDNewSprite2Objects2.length = 0;
gdjs.Quick_95CheckCode.GDNewSprite3Objects1.length = 0;
gdjs.Quick_95CheckCode.GDNewSprite3Objects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.Quick_95CheckCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.Quick_95CheckCode.GDAutoPlayObjects1.length = 0;
gdjs.Quick_95CheckCode.GDAutoPlayObjects2.length = 0;
gdjs.Quick_95CheckCode.GDLoading_9595alertObjects1.length = 0;
gdjs.Quick_95CheckCode.GDLoading_9595alertObjects2.length = 0;
gdjs.Quick_95CheckCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.Quick_95CheckCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.Quick_95CheckCode.GDSnapShotObjects1.length = 0;
gdjs.Quick_95CheckCode.GDSnapShotObjects2.length = 0;
gdjs.Quick_95CheckCode.GDBackgroundObjects1.length = 0;
gdjs.Quick_95CheckCode.GDBackgroundObjects2.length = 0;
gdjs.Quick_95CheckCode.GDfadeObjects1.length = 0;
gdjs.Quick_95CheckCode.GDfadeObjects2.length = 0;
gdjs.Quick_95CheckCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.Quick_95CheckCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.Quick_95CheckCode.GDtop_9595titleObjects1.length = 0;
gdjs.Quick_95CheckCode.GDtop_9595titleObjects2.length = 0;
gdjs.Quick_95CheckCode.GDShadowObjects1.length = 0;
gdjs.Quick_95CheckCode.GDShadowObjects2.length = 0;


return;

}

gdjs['Quick_95CheckCode'] = gdjs.Quick_95CheckCode;
