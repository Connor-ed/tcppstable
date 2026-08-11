gdjs.Crave_95uniCode = {};
gdjs.Crave_95uniCode.localVariables = [];
gdjs.Crave_95uniCode.idToCallbackMap = new Map();
gdjs.Crave_95uniCode.GDGlobal_9595PlayObjects1= [];
gdjs.Crave_95uniCode.GDGlobal_9595PlayObjects2= [];
gdjs.Crave_95uniCode.GDGlobal_9595PlayObjects3= [];
gdjs.Crave_95uniCode.GDGlobal_9595EditorObjects1= [];
gdjs.Crave_95uniCode.GDGlobal_9595EditorObjects2= [];
gdjs.Crave_95uniCode.GDGlobal_9595EditorObjects3= [];
gdjs.Crave_95uniCode.GDGlobal_9595HomeObjects1= [];
gdjs.Crave_95uniCode.GDGlobal_9595HomeObjects2= [];
gdjs.Crave_95uniCode.GDGlobal_9595HomeObjects3= [];
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595MenuObjects1= [];
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595MenuObjects2= [];
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595MenuObjects3= [];
gdjs.Crave_95uniCode.GDGlobal_9595Blank_9595KnobObjects1= [];
gdjs.Crave_95uniCode.GDGlobal_9595Blank_9595KnobObjects2= [];
gdjs.Crave_95uniCode.GDGlobal_9595Blank_9595KnobObjects3= [];
gdjs.Crave_95uniCode.GDGlobal_9595BaseObjects1= [];
gdjs.Crave_95uniCode.GDGlobal_9595BaseObjects2= [];
gdjs.Crave_95uniCode.GDGlobal_9595BaseObjects3= [];
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595LiteObjects1= [];
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595LiteObjects2= [];
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595LiteObjects3= [];
gdjs.Crave_95uniCode.GDAutoPlayObjects1= [];
gdjs.Crave_95uniCode.GDAutoPlayObjects2= [];
gdjs.Crave_95uniCode.GDAutoPlayObjects3= [];
gdjs.Crave_95uniCode.GDLoading_9595alertObjects1= [];
gdjs.Crave_95uniCode.GDLoading_9595alertObjects2= [];
gdjs.Crave_95uniCode.GDLoading_9595alertObjects3= [];
gdjs.Crave_95uniCode.GDTri_9595Blank_9595Objects1= [];
gdjs.Crave_95uniCode.GDTri_9595Blank_9595Objects2= [];
gdjs.Crave_95uniCode.GDTri_9595Blank_9595Objects3= [];
gdjs.Crave_95uniCode.GDSnapShotObjects1= [];
gdjs.Crave_95uniCode.GDSnapShotObjects2= [];
gdjs.Crave_95uniCode.GDSnapShotObjects3= [];
gdjs.Crave_95uniCode.GDBackgroundObjects1= [];
gdjs.Crave_95uniCode.GDBackgroundObjects2= [];
gdjs.Crave_95uniCode.GDBackgroundObjects3= [];
gdjs.Crave_95uniCode.GDSquareWhiteSliderObjects1= [];
gdjs.Crave_95uniCode.GDSquareWhiteSliderObjects2= [];
gdjs.Crave_95uniCode.GDSquareWhiteSliderObjects3= [];
gdjs.Crave_95uniCode.GDtop_9595titleObjects1= [];
gdjs.Crave_95uniCode.GDtop_9595titleObjects2= [];
gdjs.Crave_95uniCode.GDtop_9595titleObjects3= [];
gdjs.Crave_95uniCode.GDShadowObjects1= [];
gdjs.Crave_95uniCode.GDShadowObjects2= [];
gdjs.Crave_95uniCode.GDShadowObjects3= [];


gdjs.Crave_95uniCode.userFunc0x1d64b6a8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// PATCHBAY — one-time setup
if (globalThis.PatchBay && globalThis.PatchBay.canvas) return;

globalThis.PatchBay = {
  // OUTPUT jacks: name → cable color "R,G,B"
  outputColors: {
    MULTI1O:    "208,2,27",
    MULTI2O:    "245,166,35",
    OSCPULSEO: "52,62,64",
    OSCSAWO:   "146,43,62",
    ENVO:       "244,70,17",
    NOISEO:     "30,36,96",
    VCALINEO:   "189,16,224",
    LFOTRIO:    "61,100,45",
    LFOSQUO:    "96,110,140",
    VCMIXO:     "80,227,194",
    ASSIGNO:    "143,139,102",
    KBCVO:      "117,21,30",
    GATEO:      "0,187,45",
    VCFO:       "222,76,138",
  },

  // INPUT jack names (Standardized to match your scene objects)
  inputNames: [
    "OSCCV","OSCFM","OSCMOD","VCFCUTOFF","VCSRES",
    "MIX1","MIX2","VCMIX","MULTI","MIXCV",
    "EXTAUX","TEMPO","PLAYSTOP","RESET","HOLD",
    "ENVGATE","VCACV","LFORATE","VCMIXINPUT","LFORATEIN",
  ],

  pending:     null,  
  connections: [],    

  // Visual tuning
  DROOP:       150,   
  HIT_RADIUS:  24,    
  CABLE_WIDTH: 11,     
  PLUG_RADIUS: 20,    
  PLUG_HOLE:   10,     

  canvas: null,
  ctx:    null,
};

const gdCanvas = document.querySelector("canvas");
if (!gdCanvas) return;

const pb = globalThis.PatchBay;
pb.canvas = document.createElement("canvas");
pb.canvas.id = "patchbay-overlay";
pb.canvas.width = gdCanvas.width;
pb.canvas.height = gdCanvas.height;

function positionOverlay() {
  const rect = gdCanvas.getBoundingClientRect();
  pb.canvas.style.cssText = `
    position: fixed;
    top: ${rect.top}px;
    left: ${rect.left}px;
    width: ${rect.width}px;
    height: ${rect.height}px;
    pointer-events: none;
    z-index: 9999;
  `;
}

positionOverlay();
document.body.appendChild(pb.canvas);
pb.ctx = pb.canvas.getContext("2d");

window.addEventListener("resize", positionOverlay);

pb.outputNames = Object.keys(pb.outputColors);
pb.allNames = [...pb.outputNames, ...pb.inputNames];
};
gdjs.Crave_95uniCode.eventsList0 = function(runtimeScene) {

{


gdjs.Crave_95uniCode.userFunc0x1d64b6a8(runtimeScene);

}


};gdjs.Crave_95uniCode.userFunc0x1d2fa888 = function GDJSInlineCode(runtimeScene) {
"use strict";
// PATCHBAY — handle left click (connect)
const pb = globalThis.PatchBay;
if (!pb) return;

// SAFETY: Check if the Share menu is open. If so, exit.
if (runtimeScene.getLayer("Share").isVisible()) {
    pb.pending = null; // Clear any active wire drag
    return;
}

const scene = runtimeScene;
const mx = scene.getGame().getInputManager().getCursorX("", 0);
const my = scene.getGame().getInputManager().getCursorY("", 0);
const r = pb.HIT_RADIUS;

let hitName = null;
let hitType = null;

for (const name of pb.allNames) {
  const objs = scene.getObjects(name);
  if (!objs || objs.length === 0) continue;
  const obj = objs[0];
  const dx = obj.getCenterXInScene() - mx;
  const dy = obj.getCenterYInScene() - my;
  if (Math.sqrt(dx * dx + dy * dy) < r) {
    hitName = name;
    hitType = pb.outputNames.includes(name) ? "output" : "input";
    break;
  }
}

if (!hitName) {
  pb.pending = null;
  return;
}

const objs = scene.getObjects(hitName);
const obj = objs[0];
const hx = obj.getCenterXInScene();
const hy = obj.getCenterYInScene();

if (!pb.pending) {
  pb.pending = {
    name: hitName,
    x: hx,
    y: hy,
    type: hitType,
    color: hitType === "output" ? (pb.outputColors[hitName] || "180,180,180") : "180,180,180",
  };
  return;
}

if (pb.pending.type === hitType) {
  pb.pending = {
    name: hitName,
    x: hx,
    y: hy,
    type: hitType,
    color: hitType === "output" ? (pb.outputColors[hitName] || "180,180,180") : "180,180,180",
  };
  return;
}

const fromName = pb.pending.type === "output" ? pb.pending.name : hitName;
const toName = pb.pending.type === "input" ? pb.pending.name : hitName;
const fromObj = scene.getObjects(fromName)[0];
const toObj = scene.getObjects(toName)[0];
const color = pb.outputColors[fromName] || "180,180,180";

pb.connections = pb.connections.filter(c => c.fromName !== fromName && c.toName !== toName);

pb.connections.push({
  fromName, toName, color,
  fromX: fromObj.getCenterXInScene(),
  fromY: fromObj.getCenterYInScene(),
  toX: toObj.getCenterXInScene(),
  toY: toObj.getCenterYInScene(),
  droop: pb.DROOP + (Math.random() * 80 - 40),
});
pb.pending = null;
};
gdjs.Crave_95uniCode.eventsList1 = function(runtimeScene) {

{


gdjs.Crave_95uniCode.userFunc0x1d2fa888(runtimeScene);

}


};gdjs.Crave_95uniCode.userFunc0x1d4b3e10 = function GDJSInlineCode(runtimeScene) {
"use strict";
// PATCHBAY — handle right click (disconnect)
const pb = globalThis.PatchBay;
if (!pb) return;

const scene = runtimeScene;
const mx    = scene.getGame().getInputManager().getCursorX("", 0);
const my    = scene.getGame().getInputManager().getCursorY("", 0);
const r     = pb.HIT_RADIUS;

// Cancel any pending selection first
pb.pending = null;

// Find and remove any connection touching the right-clicked jack
for (const name of pb.allNames) {
  const objs = scene.getObjects(name);
  if (!objs || objs.length === 0) continue;
  const obj = objs[0];
  const dx  = obj.getCenterXInScene() - mx;
  const dy  = obj.getCenterYInScene() - my;
  if (Math.sqrt(dx * dx + dy * dy) < r) {
    const before = pb.connections.length;
    pb.connections = pb.connections.filter(
      c => c.fromName !== name && c.toName !== name
    );
    console.log(
      "[PatchBay] disconnected:", name,
      "(removed", before - pb.connections.length, "wire(s))"
    );
    break;
  }
}
};
gdjs.Crave_95uniCode.eventsList2 = function(runtimeScene) {

{


gdjs.Crave_95uniCode.userFunc0x1d4b3e10(runtimeScene);

}


};gdjs.Crave_95uniCode.userFunc0x1d62a1d0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// PATCHBAY — redraw cables every frame
const pb = globalThis.PatchBay;
if (!pb || !pb.ctx) return;

// 1. Get the current visibility of the Patchbay and the Share menu
const isVisible = runtimeScene.getVariables().get("patchbayVisible").getAsNumber() === 1;
const isShareOpen = runtimeScene.getLayer("Share").isVisible();

// 2. If the patchbay is toggled off OR the share menu is open, hide the canvas
if (!isVisible || isShareOpen) {
  pb.canvas.style.display = "none";
  return;
}

// Otherwise, show the canvas and draw
pb.canvas.style.display = "block";

const ctx = pb.ctx;
ctx.clearRect(0, 0, pb.canvas.width, pb.canvas.height);

function drawCable(x1, y1, x2, y2, rgb, alpha, droop) {
  const cpx = (x1 + x2) / 2;
  const cpy = (y1 + y2) / 2 + (droop !== undefined ? droop : pb.DROOP);

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.quadraticCurveTo(cpx, cpy, x2, y2);
  ctx.strokeStyle = `rgba(${rgb},${alpha * 0.15})`;
  ctx.lineWidth = pb.CABLE_WIDTH + 3;
  ctx.lineCap = "round";
  ctx.shadowBlur = 4;
  ctx.shadowColor = `rgba(${rgb},${alpha * 0.2})`;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.quadraticCurveTo(cpx, cpy, x2, y2);
  ctx.strokeStyle = `rgba(${rgb},${alpha * 0.75})`;
  ctx.lineWidth = pb.CABLE_WIDTH;
  ctx.shadowBlur = 0;
  ctx.stroke();
  ctx.restore();

  function plug(px, py) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(px, py, pb.PLUG_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${rgb},${alpha * 0.75})`;
    ctx.shadowBlur = 4;
    ctx.shadowColor = `rgba(${rgb},${alpha * 0.4})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(px, py, pb.PLUG_HOLE, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(15,15,15,0.9)";
    ctx.shadowBlur = 0;
    ctx.fill();
    ctx.restore();
  }

  plug(x1, y1);
  plug(x2, y2);
}

for (const c of pb.connections) {
  drawCable(c.fromX, c.fromY, c.toX, c.toY, c.color, 1.0, c.droop);
}

if (pb.pending) {
  const scene = runtimeScene;
  const mx = scene.getGame().getInputManager().getCursorX("", 0);
  const my = scene.getGame().getInputManager().getCursorY("", 0);
  drawCable(pb.pending.x, pb.pending.y, mx, my, pb.pending.color, 0.45, pb.DROOP);
}
};
gdjs.Crave_95uniCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Crave_95uniCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Patchbay");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Crave_95uniCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Patchbay");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Crave_95uniCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.Crave_95uniCode.userFunc0x1d62a1d0(runtimeScene);

}


};gdjs.Crave_95uniCode.eventsList4 = function(runtimeScene) {

{


gdjs.Crave_95uniCode.eventsList3(runtimeScene);
}


};

gdjs.Crave_95uniCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Crave_95uniCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595PlayObjects3.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595EditorObjects3.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595HomeObjects3.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595MenuObjects3.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Blank_9595KnobObjects3.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595BaseObjects3.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595LiteObjects3.length = 0;
gdjs.Crave_95uniCode.GDAutoPlayObjects1.length = 0;
gdjs.Crave_95uniCode.GDAutoPlayObjects2.length = 0;
gdjs.Crave_95uniCode.GDAutoPlayObjects3.length = 0;
gdjs.Crave_95uniCode.GDLoading_9595alertObjects1.length = 0;
gdjs.Crave_95uniCode.GDLoading_9595alertObjects2.length = 0;
gdjs.Crave_95uniCode.GDLoading_9595alertObjects3.length = 0;
gdjs.Crave_95uniCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.Crave_95uniCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.Crave_95uniCode.GDTri_9595Blank_9595Objects3.length = 0;
gdjs.Crave_95uniCode.GDSnapShotObjects1.length = 0;
gdjs.Crave_95uniCode.GDSnapShotObjects2.length = 0;
gdjs.Crave_95uniCode.GDSnapShotObjects3.length = 0;
gdjs.Crave_95uniCode.GDBackgroundObjects1.length = 0;
gdjs.Crave_95uniCode.GDBackgroundObjects2.length = 0;
gdjs.Crave_95uniCode.GDBackgroundObjects3.length = 0;
gdjs.Crave_95uniCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.Crave_95uniCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.Crave_95uniCode.GDSquareWhiteSliderObjects3.length = 0;
gdjs.Crave_95uniCode.GDtop_9595titleObjects1.length = 0;
gdjs.Crave_95uniCode.GDtop_9595titleObjects2.length = 0;
gdjs.Crave_95uniCode.GDtop_9595titleObjects3.length = 0;
gdjs.Crave_95uniCode.GDShadowObjects1.length = 0;
gdjs.Crave_95uniCode.GDShadowObjects2.length = 0;
gdjs.Crave_95uniCode.GDShadowObjects3.length = 0;

gdjs.Crave_95uniCode.eventsList4(runtimeScene);
gdjs.Crave_95uniCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595PlayObjects3.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595EditorObjects3.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595HomeObjects3.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595MenuObjects3.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Blank_9595KnobObjects3.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595BaseObjects3.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.Crave_95uniCode.GDGlobal_9595Top_9595LiteObjects3.length = 0;
gdjs.Crave_95uniCode.GDAutoPlayObjects1.length = 0;
gdjs.Crave_95uniCode.GDAutoPlayObjects2.length = 0;
gdjs.Crave_95uniCode.GDAutoPlayObjects3.length = 0;
gdjs.Crave_95uniCode.GDLoading_9595alertObjects1.length = 0;
gdjs.Crave_95uniCode.GDLoading_9595alertObjects2.length = 0;
gdjs.Crave_95uniCode.GDLoading_9595alertObjects3.length = 0;
gdjs.Crave_95uniCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.Crave_95uniCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.Crave_95uniCode.GDTri_9595Blank_9595Objects3.length = 0;
gdjs.Crave_95uniCode.GDSnapShotObjects1.length = 0;
gdjs.Crave_95uniCode.GDSnapShotObjects2.length = 0;
gdjs.Crave_95uniCode.GDSnapShotObjects3.length = 0;
gdjs.Crave_95uniCode.GDBackgroundObjects1.length = 0;
gdjs.Crave_95uniCode.GDBackgroundObjects2.length = 0;
gdjs.Crave_95uniCode.GDBackgroundObjects3.length = 0;
gdjs.Crave_95uniCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.Crave_95uniCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.Crave_95uniCode.GDSquareWhiteSliderObjects3.length = 0;
gdjs.Crave_95uniCode.GDtop_9595titleObjects1.length = 0;
gdjs.Crave_95uniCode.GDtop_9595titleObjects2.length = 0;
gdjs.Crave_95uniCode.GDtop_9595titleObjects3.length = 0;
gdjs.Crave_95uniCode.GDShadowObjects1.length = 0;
gdjs.Crave_95uniCode.GDShadowObjects2.length = 0;
gdjs.Crave_95uniCode.GDShadowObjects3.length = 0;


return;

}

gdjs['Crave_95uniCode'] = gdjs.Crave_95uniCode;
