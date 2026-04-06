gdjs.Quick_95CheckCode = {};
gdjs.Quick_95CheckCode.localVariables = [];
gdjs.Quick_95CheckCode.idToCallbackMap = new Map();
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


gdjs.Quick_95CheckCode.userFunc0x143d170 = function GDJSInlineCode(runtimeScene) {
"use strict";
const SB_URL = "https://dyuuloipijvkfejfqoay.supabase.co";
const SB_KEY = "sb_publishable_YkIqOOig3cqxaLO5uBtfcw_mX_3lwc_";

function checkStatus() {
    fetch(`${SB_URL}/rest/v1/app_status?id=eq.1&select=status`, {
        method: "GET",
        credentials: "omit",
        headers: {
            "apikey": SB_KEY,
            "Authorization": "Bearer " + SB_KEY,
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        if (!res.ok) throw new Error("HTTP error: " + res.status);
        return res.json();
    })
    .then(data => {
        console.log("Status checked:", data);
        const status = (data && data.length > 0) ? data[0].status : "offline";
        runtimeScene.getVariables().get("AppOnline").setNumber(status === "online" ? 1 : 0);
        runtimeScene.getVariables().get("StatusLoaded").setNumber(1);
    })
    .catch(err => {
        console.error("Request failed:", err);
        runtimeScene.getVariables().get("AppOnline").setNumber(0);
        runtimeScene.getVariables().get("StatusLoaded").setNumber(1);
    });
}

// Run immediately
checkStatus();

// Then re-check every 30 seconds
if (!gdjs.__statusInterval) {
    gdjs.__statusInterval = setInterval(checkStatus, 30000);
}
};
gdjs.Quick_95CheckCode.eventsList0 = function(runtimeScene) {

{


gdjs.Quick_95CheckCode.userFunc0x143d170(runtimeScene);

}


};gdjs.Quick_95CheckCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(42425772);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Quick_95CheckCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Loading_alert"), gdjs.Quick_95CheckCode.GDLoading_9595alertObjects1);
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Boot");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "a");
}
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "The Patch Project");
}
{for(var i = 0, len = gdjs.Quick_95CheckCode.GDLoading_9595alertObjects1.length ;i < len;++i) {
    gdjs.Quick_95CheckCode.GDLoading_9595alertObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, null));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Quick_95CheckCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Quick_95CheckCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Quick_95CheckCode.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("no");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__UpdateChecker__UpdateAvailable.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Quick_95CheckCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Quick_95CheckCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Quick_95CheckCode.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("updating");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__UpdateChecker__UpdateAvailable.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "a") >= 30;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Reload.func(runtimeScene, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__UpdateChecker__UpdateAvailable.func(runtimeScene, null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "a") >= 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Boot");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
}
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boot", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boot", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Quick_95CheckCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Quick_95CheckCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Quick_95CheckCode.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("down");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "a") >= 30;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Reload.func(runtimeScene, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "a") >= 30;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boot", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

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

gdjs.Quick_95CheckCode.eventsList1(runtimeScene);
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
