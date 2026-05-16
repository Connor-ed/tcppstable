gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects1= [];
gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2= [];
gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects3= [];
gdjs.MenuCode.GDText_9595LayerObjects1= [];
gdjs.MenuCode.GDText_9595LayerObjects2= [];
gdjs.MenuCode.GDText_9595LayerObjects3= [];
gdjs.MenuCode.GDView_9595BoxObjects1= [];
gdjs.MenuCode.GDView_9595BoxObjects2= [];
gdjs.MenuCode.GDView_9595BoxObjects3= [];
gdjs.MenuCode.GDEdit_9595BoxObjects1= [];
gdjs.MenuCode.GDEdit_9595BoxObjects2= [];
gdjs.MenuCode.GDEdit_9595BoxObjects3= [];
gdjs.MenuCode.GDAbout_9595BoxObjects1= [];
gdjs.MenuCode.GDAbout_9595BoxObjects2= [];
gdjs.MenuCode.GDAbout_9595BoxObjects3= [];
gdjs.MenuCode.GDBack_9595BoxObjects1= [];
gdjs.MenuCode.GDBack_9595BoxObjects2= [];
gdjs.MenuCode.GDBack_9595BoxObjects3= [];
gdjs.MenuCode.GDAbout_9595BackgroundObjects1= [];
gdjs.MenuCode.GDAbout_9595BackgroundObjects2= [];
gdjs.MenuCode.GDAbout_9595BackgroundObjects3= [];
gdjs.MenuCode.GDNewBBTextObjects1= [];
gdjs.MenuCode.GDNewBBTextObjects2= [];
gdjs.MenuCode.GDNewBBTextObjects3= [];
gdjs.MenuCode.GDGlobal_9595PlayObjects1= [];
gdjs.MenuCode.GDGlobal_9595PlayObjects2= [];
gdjs.MenuCode.GDGlobal_9595PlayObjects3= [];
gdjs.MenuCode.GDGlobal_9595EditorObjects1= [];
gdjs.MenuCode.GDGlobal_9595EditorObjects2= [];
gdjs.MenuCode.GDGlobal_9595EditorObjects3= [];
gdjs.MenuCode.GDGlobal_9595HomeObjects1= [];
gdjs.MenuCode.GDGlobal_9595HomeObjects2= [];
gdjs.MenuCode.GDGlobal_9595HomeObjects3= [];
gdjs.MenuCode.GDGlobal_9595Top_9595MenuObjects1= [];
gdjs.MenuCode.GDGlobal_9595Top_9595MenuObjects2= [];
gdjs.MenuCode.GDGlobal_9595Top_9595MenuObjects3= [];
gdjs.MenuCode.GDGlobal_9595Blank_9595KnobObjects1= [];
gdjs.MenuCode.GDGlobal_9595Blank_9595KnobObjects2= [];
gdjs.MenuCode.GDGlobal_9595Blank_9595KnobObjects3= [];
gdjs.MenuCode.GDGlobal_9595BaseObjects1= [];
gdjs.MenuCode.GDGlobal_9595BaseObjects2= [];
gdjs.MenuCode.GDGlobal_9595BaseObjects3= [];
gdjs.MenuCode.GDGlobal_9595Top_9595LiteObjects1= [];
gdjs.MenuCode.GDGlobal_9595Top_9595LiteObjects2= [];
gdjs.MenuCode.GDGlobal_9595Top_9595LiteObjects3= [];
gdjs.MenuCode.GDAutoPlayObjects1= [];
gdjs.MenuCode.GDAutoPlayObjects2= [];
gdjs.MenuCode.GDAutoPlayObjects3= [];
gdjs.MenuCode.GDLoading_9595alertObjects1= [];
gdjs.MenuCode.GDLoading_9595alertObjects2= [];
gdjs.MenuCode.GDLoading_9595alertObjects3= [];
gdjs.MenuCode.GDTri_9595Blank_9595Objects1= [];
gdjs.MenuCode.GDTri_9595Blank_9595Objects2= [];
gdjs.MenuCode.GDTri_9595Blank_9595Objects3= [];
gdjs.MenuCode.GDSnapShotObjects1= [];
gdjs.MenuCode.GDSnapShotObjects2= [];
gdjs.MenuCode.GDSnapShotObjects3= [];
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundObjects3= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects1= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects2= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects3= [];
gdjs.MenuCode.GDtop_9595titleObjects1= [];
gdjs.MenuCode.GDtop_9595titleObjects2= [];
gdjs.MenuCode.GDtop_9595titleObjects3= [];
gdjs.MenuCode.GDShadowObjects1= [];
gdjs.MenuCode.GDShadowObjects2= [];
gdjs.MenuCode.GDShadowObjects3= [];


gdjs.MenuCode.userFunc0x1670fd8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// 1. Get the reference
const pb = globalThis.PatchBay;

if (pb) {
    console.log("[PatchBay] Nuking system for Menu scene...");

    // 2. Physically remove the canvas from the browser window
    if (pb.canvas && pb.canvas.parentNode) {
        pb.canvas.parentNode.removeChild(pb.canvas);
    }

    // 3. Completely wipe the global object
    // This is the most important part. By setting this to null, 
    // your Redraw script's "if (!pb || !pb.ctx) return;" line 
    // will trigger and STOP the loop instantly.
    globalThis.PatchBay = null;

    console.log("[PatchBay] System fully destroyed ✓");
}

};
gdjs.MenuCode.userFunc0x2dae3c8 = function GDJSInlineCode(runtimeScene) {
"use strict";
gdjs._uploadKeyListenerScene = null;
};
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.userFunc0x1670fd8(runtimeScene);

}


{


gdjs.MenuCode.userFunc0x2dae3c8(runtimeScene);

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(42309948);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDView_95959595BoxObjects2Objects = Hashtable.newFrom({"View_Box": gdjs.MenuCode.GDView_9595BoxObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDView_95959595BoxObjects2Objects = Hashtable.newFrom({"View_Box": gdjs.MenuCode.GDView_9595BoxObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDEdit_95959595BoxObjects2Objects = Hashtable.newFrom({"Edit_Box": gdjs.MenuCode.GDEdit_9595BoxObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDAbout_95959595BoxObjects2Objects = Hashtable.newFrom({"About_Box": gdjs.MenuCode.GDAbout_9595BoxObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBack_95959595BoxObjects2Objects = Hashtable.newFrom({"Back_Box": gdjs.MenuCode.GDBack_9595BoxObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBack_95959595BoxObjects1Objects = Hashtable.newFrom({"Back_Box": gdjs.MenuCode.GDBack_9595BoxObjects1});
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("View_Box"), gdjs.MenuCode.GDView_9595BoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDView_95959595BoxObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background_Cart_Layer"), gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("View_Box"), gdjs.MenuCode.GDView_9595BoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDView_95959595BoxObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background_Cart_Layer"), gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Edit_Box"), gdjs.MenuCode.GDEdit_9595BoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDEdit_95959595BoxObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background_Cart_Layer"), gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2[i].getBehavior("Animation").setAnimationIndex(2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("About_Box"), gdjs.MenuCode.GDAbout_9595BoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDAbout_95959595BoxObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background_Cart_Layer"), gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2[i].getBehavior("Animation").setAnimationIndex(3);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_Box"), gdjs.MenuCode.GDBack_9595BoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBack_95959595BoxObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("About_Background"), gdjs.MenuCode.GDAbout_9595BackgroundObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDAbout_9595BackgroundObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDAbout_9595BackgroundObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_Box"), gdjs.MenuCode.GDBack_9595BoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBack_95959595BoxObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("About_Background"), gdjs.MenuCode.GDAbout_9595BackgroundObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDAbout_9595BackgroundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDAbout_9595BackgroundObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("View_Box"), gdjs.MenuCode.GDView_9595BoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDView_9595BoxObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDView_9595BoxObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDView_9595BoxObjects2[k] = gdjs.MenuCode.GDView_9595BoxObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDView_9595BoxObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pre", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Edit_Box"), gdjs.MenuCode.GDEdit_9595BoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDEdit_9595BoxObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDEdit_9595BoxObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDEdit_9595BoxObjects2[k] = gdjs.MenuCode.GDEdit_9595BoxObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDEdit_9595BoxObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pre", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("About_Box"), gdjs.MenuCode.GDAbout_9595BoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDAbout_9595BoxObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDAbout_9595BoxObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDAbout_9595BoxObjects2[k] = gdjs.MenuCode.GDAbout_9595BoxObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDAbout_9595BoxObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 2880, "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 2880, "background", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_Box"), gdjs.MenuCode.GDBack_9595BoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBack_9595BoxObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBack_9595BoxObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBack_9595BoxObjects1[k] = gdjs.MenuCode.GDBack_9595BoxObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBack_9595BoxObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 960, "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 960, "background", 0);
}
}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList1(runtimeScene);
}


{


gdjs.MenuCode.eventsList2(runtimeScene);
}


{


gdjs.MenuCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects1.length = 0;
gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2.length = 0;
gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects3.length = 0;
gdjs.MenuCode.GDText_9595LayerObjects1.length = 0;
gdjs.MenuCode.GDText_9595LayerObjects2.length = 0;
gdjs.MenuCode.GDText_9595LayerObjects3.length = 0;
gdjs.MenuCode.GDView_9595BoxObjects1.length = 0;
gdjs.MenuCode.GDView_9595BoxObjects2.length = 0;
gdjs.MenuCode.GDView_9595BoxObjects3.length = 0;
gdjs.MenuCode.GDEdit_9595BoxObjects1.length = 0;
gdjs.MenuCode.GDEdit_9595BoxObjects2.length = 0;
gdjs.MenuCode.GDEdit_9595BoxObjects3.length = 0;
gdjs.MenuCode.GDAbout_9595BoxObjects1.length = 0;
gdjs.MenuCode.GDAbout_9595BoxObjects2.length = 0;
gdjs.MenuCode.GDAbout_9595BoxObjects3.length = 0;
gdjs.MenuCode.GDBack_9595BoxObjects1.length = 0;
gdjs.MenuCode.GDBack_9595BoxObjects2.length = 0;
gdjs.MenuCode.GDBack_9595BoxObjects3.length = 0;
gdjs.MenuCode.GDAbout_9595BackgroundObjects1.length = 0;
gdjs.MenuCode.GDAbout_9595BackgroundObjects2.length = 0;
gdjs.MenuCode.GDAbout_9595BackgroundObjects3.length = 0;
gdjs.MenuCode.GDNewBBTextObjects1.length = 0;
gdjs.MenuCode.GDNewBBTextObjects2.length = 0;
gdjs.MenuCode.GDNewBBTextObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595PlayObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595EditorObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595HomeObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595Top_9595MenuObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595Blank_9595KnobObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595BaseObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595Top_9595LiteObjects3.length = 0;
gdjs.MenuCode.GDAutoPlayObjects1.length = 0;
gdjs.MenuCode.GDAutoPlayObjects2.length = 0;
gdjs.MenuCode.GDAutoPlayObjects3.length = 0;
gdjs.MenuCode.GDLoading_9595alertObjects1.length = 0;
gdjs.MenuCode.GDLoading_9595alertObjects2.length = 0;
gdjs.MenuCode.GDLoading_9595alertObjects3.length = 0;
gdjs.MenuCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.MenuCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.MenuCode.GDTri_9595Blank_9595Objects3.length = 0;
gdjs.MenuCode.GDSnapShotObjects1.length = 0;
gdjs.MenuCode.GDSnapShotObjects2.length = 0;
gdjs.MenuCode.GDSnapShotObjects3.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects3.length = 0;
gdjs.MenuCode.GDtop_9595titleObjects1.length = 0;
gdjs.MenuCode.GDtop_9595titleObjects2.length = 0;
gdjs.MenuCode.GDtop_9595titleObjects3.length = 0;
gdjs.MenuCode.GDShadowObjects1.length = 0;
gdjs.MenuCode.GDShadowObjects2.length = 0;
gdjs.MenuCode.GDShadowObjects3.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);
gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects1.length = 0;
gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects2.length = 0;
gdjs.MenuCode.GDBackground_9595Cart_9595LayerObjects3.length = 0;
gdjs.MenuCode.GDText_9595LayerObjects1.length = 0;
gdjs.MenuCode.GDText_9595LayerObjects2.length = 0;
gdjs.MenuCode.GDText_9595LayerObjects3.length = 0;
gdjs.MenuCode.GDView_9595BoxObjects1.length = 0;
gdjs.MenuCode.GDView_9595BoxObjects2.length = 0;
gdjs.MenuCode.GDView_9595BoxObjects3.length = 0;
gdjs.MenuCode.GDEdit_9595BoxObjects1.length = 0;
gdjs.MenuCode.GDEdit_9595BoxObjects2.length = 0;
gdjs.MenuCode.GDEdit_9595BoxObjects3.length = 0;
gdjs.MenuCode.GDAbout_9595BoxObjects1.length = 0;
gdjs.MenuCode.GDAbout_9595BoxObjects2.length = 0;
gdjs.MenuCode.GDAbout_9595BoxObjects3.length = 0;
gdjs.MenuCode.GDBack_9595BoxObjects1.length = 0;
gdjs.MenuCode.GDBack_9595BoxObjects2.length = 0;
gdjs.MenuCode.GDBack_9595BoxObjects3.length = 0;
gdjs.MenuCode.GDAbout_9595BackgroundObjects1.length = 0;
gdjs.MenuCode.GDAbout_9595BackgroundObjects2.length = 0;
gdjs.MenuCode.GDAbout_9595BackgroundObjects3.length = 0;
gdjs.MenuCode.GDNewBBTextObjects1.length = 0;
gdjs.MenuCode.GDNewBBTextObjects2.length = 0;
gdjs.MenuCode.GDNewBBTextObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595PlayObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595EditorObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595HomeObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595Top_9595MenuObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595Blank_9595KnobObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595BaseObjects3.length = 0;
gdjs.MenuCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.MenuCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.MenuCode.GDGlobal_9595Top_9595LiteObjects3.length = 0;
gdjs.MenuCode.GDAutoPlayObjects1.length = 0;
gdjs.MenuCode.GDAutoPlayObjects2.length = 0;
gdjs.MenuCode.GDAutoPlayObjects3.length = 0;
gdjs.MenuCode.GDLoading_9595alertObjects1.length = 0;
gdjs.MenuCode.GDLoading_9595alertObjects2.length = 0;
gdjs.MenuCode.GDLoading_9595alertObjects3.length = 0;
gdjs.MenuCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.MenuCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.MenuCode.GDTri_9595Blank_9595Objects3.length = 0;
gdjs.MenuCode.GDSnapShotObjects1.length = 0;
gdjs.MenuCode.GDSnapShotObjects2.length = 0;
gdjs.MenuCode.GDSnapShotObjects3.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects3.length = 0;
gdjs.MenuCode.GDtop_9595titleObjects1.length = 0;
gdjs.MenuCode.GDtop_9595titleObjects2.length = 0;
gdjs.MenuCode.GDtop_9595titleObjects3.length = 0;
gdjs.MenuCode.GDShadowObjects1.length = 0;
gdjs.MenuCode.GDShadowObjects2.length = 0;
gdjs.MenuCode.GDShadowObjects3.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
