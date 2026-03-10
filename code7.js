gdjs.BrowserCode = {};
gdjs.BrowserCode.localVariables = [];
gdjs.BrowserCode.idToCallbackMap = new Map();
gdjs.BrowserCode.GDBrowser_9595CardObjects1= [];
gdjs.BrowserCode.GDBrowser_9595CardObjects2= [];
gdjs.BrowserCode.GDBrowser_9595ThumbObjects1= [];
gdjs.BrowserCode.GDBrowser_9595ThumbObjects2= [];
gdjs.BrowserCode.GDBrowser_9595NameObjects1= [];
gdjs.BrowserCode.GDBrowser_9595NameObjects2= [];
gdjs.BrowserCode.GDBrowser_9595AuthorObjects1= [];
gdjs.BrowserCode.GDBrowser_9595AuthorObjects2= [];
gdjs.BrowserCode.GDBrowser_9595HeaderObjects1= [];
gdjs.BrowserCode.GDBrowser_9595HeaderObjects2= [];
gdjs.BrowserCode.GDBrowser_9595SearchBarObjects1= [];
gdjs.BrowserCode.GDBrowser_9595SearchBarObjects2= [];
gdjs.BrowserCode.GDBrowser_9595PreviewObjects1= [];
gdjs.BrowserCode.GDBrowser_9595PreviewObjects2= [];
gdjs.BrowserCode.GDBrowser_9595CloseObjects1= [];
gdjs.BrowserCode.GDBrowser_9595CloseObjects2= [];
gdjs.BrowserCode.GDGlobal_9595PlayObjects1= [];
gdjs.BrowserCode.GDGlobal_9595PlayObjects2= [];
gdjs.BrowserCode.GDGlobal_9595EditorObjects1= [];
gdjs.BrowserCode.GDGlobal_9595EditorObjects2= [];
gdjs.BrowserCode.GDGlobal_9595HomeObjects1= [];
gdjs.BrowserCode.GDGlobal_9595HomeObjects2= [];
gdjs.BrowserCode.GDGlobal_9595Top_9595MenuObjects1= [];
gdjs.BrowserCode.GDGlobal_9595Top_9595MenuObjects2= [];
gdjs.BrowserCode.GDGlobal_9595Blank_9595KnobObjects1= [];
gdjs.BrowserCode.GDGlobal_9595Blank_9595KnobObjects2= [];
gdjs.BrowserCode.GDGlobal_9595BaseObjects1= [];
gdjs.BrowserCode.GDGlobal_9595BaseObjects2= [];
gdjs.BrowserCode.GDGlobal_9595Top_9595LiteObjects1= [];
gdjs.BrowserCode.GDGlobal_9595Top_9595LiteObjects2= [];
gdjs.BrowserCode.GDAutoPlayObjects1= [];
gdjs.BrowserCode.GDAutoPlayObjects2= [];
gdjs.BrowserCode.GDLoading_9595alertObjects1= [];
gdjs.BrowserCode.GDLoading_9595alertObjects2= [];
gdjs.BrowserCode.GDTri_9595Blank_9595Objects1= [];
gdjs.BrowserCode.GDTri_9595Blank_9595Objects2= [];
gdjs.BrowserCode.GDSnapShotObjects1= [];
gdjs.BrowserCode.GDSnapShotObjects2= [];
gdjs.BrowserCode.GDBackgroundObjects1= [];
gdjs.BrowserCode.GDBackgroundObjects2= [];
gdjs.BrowserCode.GDfadeObjects1= [];
gdjs.BrowserCode.GDfadeObjects2= [];
gdjs.BrowserCode.GDSquareWhiteSliderObjects1= [];
gdjs.BrowserCode.GDSquareWhiteSliderObjects2= [];
gdjs.BrowserCode.GDtop_9595titleObjects1= [];
gdjs.BrowserCode.GDtop_9595titleObjects2= [];
gdjs.BrowserCode.GDShadowObjects1= [];
gdjs.BrowserCode.GDShadowObjects2= [];


gdjs.BrowserCode.userFunc0x4268718 = function GDJSInlineCode(runtimeScene) {
"use strict";
const SUPABASE_URL = 'https://dyuuloipijvkfejfqoay.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dXVsb2lwaWp2a2ZlamZxb2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNjg2NjQsImV4cCI6MjA4ODY0NDY2NH0.3LkBaKfBLD8rH83944X0iSV-DVQWEsWITulESvY6xzQ';

if (runtimeScene.getVariables().get("Browser_Initialized").getAsNumber() === 1) return;
runtimeScene.getVariables().get("Browser_Initialized").setNumber(1);
runtimeScene.getVariables().get("Browser_Status").setString("Loading patches...");

fetch(`${SUPABASE_URL}/rest/v1/patches?select=*&order=created_at.desc`, {
  headers: {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`
  }
})
.then(r => r.json())
.then(data => {
  if (!Array.isArray(data) || data.length === 0) {
    runtimeScene.getVariables().get("Browser_Status").setString("No patches found.");
    runtimeScene.getVariables().get("PatchCount").setNumber(0);
    runtimeScene.getVariables().get("Patches_Loaded").setNumber(1);
    return;
  }

  runtimeScene.getVariables().get("PatchCount").setNumber(data.length);

  data.forEach((patch, i) => {
    runtimeScene.getVariables().get(`Patch_${i}_Name`).setString(patch.name || "Untitled");
    runtimeScene.getVariables().get(`Patch_${i}_Author`).setString(patch.author || "unknown");
    runtimeScene.getVariables().get(`Patch_${i}_Desc`).setString(patch.description || "");
    runtimeScene.getVariables().get(`Patch_${i}_URL`).setString(patch.url || "");
  });

  runtimeScene.getVariables().get("Browser_Status").setString(`${data.length} patches loaded`);
  runtimeScene.getVariables().get("Patches_Loaded").setNumber(1);
})
.catch(err => {
  runtimeScene.getVariables().get("Browser_Status").setString("Error loading patches");
  console.error("Patch fetch error:", err);
});
};
gdjs.BrowserCode.userFunc0x42689e0 = function GDJSInlineCode(runtimeScene) {
"use strict";
const count = runtimeScene.getVariables().get("PatchCount").getAsNumber();

for (let i = 0; i < count; i++) {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = col * 480 + 160;
    const y = row * 360 + 160;

    // Create card
    const card = runtimeScene.createObject("Browser_Card");
    card.setPosition(x, y);
    card.setLayer("Browser");
    card.getVariables().get("Browser_Card").setNumber(i);

    // Create thumb
    const thumb = runtimeScene.createObject("Browser_Thumb");
    thumb.setPosition(x, y);
    thumb.setLayer("Browser");
    thumb.getVariables().get("Browser_Thumb").setNumber(i);

    // Create name text
    const nameObj = runtimeScene.createObject("Browser_Name");
    nameObj.setPosition(x + 10, y + 280);
    nameObj.setLayer("Browser");
    nameObj.getVariables().get("Browser_Name").setNumber(i);
    nameObj.setString(runtimeScene.getVariables().get(`Patch_${i}_Name`).getAsString());

    // Create author text
    const authorObj = runtimeScene.createObject("Browser_Author");
    authorObj.setPosition(x + 10, y + 310);
    authorObj.setLayer("Browser");
    authorObj.getVariables().get("Browser_Author").setNumber(i);
    authorObj.setString(runtimeScene.getVariables().get(`Patch_${i}_Author`).getAsString());
}

runtimeScene.getVariables().get("Patches_Loaded").setNumber(2);
};
gdjs.BrowserCode.userFunc0x4268cc0 = function GDJSInlineCode(runtimeScene) {
"use strict";
const thumbs = runtimeScene.getObjects("Browser_Thumb");

thumbs.forEach(thumb => {
    const i = thumb.getVariables().get("Browser_Thumb").getAsNumber();
    const url = runtimeScene.getVariables().get(`Patch_${i}_URL`).getAsString();
    if (!url) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
        const renderer = thumb.getRendererObject();
        if (!renderer) return;
        renderer.texture = PIXI.Texture.from(img);
        thumb.setWidth(440);
        thumb.setHeight(248);
    };
    img.onerror = (e) => console.error("Thumb load error:", i, e);
    img.src = url;
});

runtimeScene.getVariables().get("Patches_Loaded").setNumber(3);
};
gdjs.BrowserCode.userFunc0x4268e30 = function GDJSInlineCode(runtimeScene) {
"use strict";
const cards = runtimeScene.getObjects("Browser_Card");
const layer = runtimeScene.getLayer("Browser");
const mouseX = layer.convertCoords(runtimeScene.getGame().getInputManager().getCursorX(), runtimeScene.getGame().getInputManager().getCursorY()).x;
const mouseY = layer.convertCoords(runtimeScene.getGame().getInputManager().getCursorX(), runtimeScene.getGame().getInputManager().getCursorY()).y;

cards.forEach(card => {
    const x = card.getX();
    const y = card.getY();
    const w = card.getWidth();
    const h = card.getHeight();

    if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
        const i = card.getVariables().get("Browser_Card").getAsNumber();
        const url = runtimeScene.getVariables().get(`Patch_${i}_URL`).getAsString();
        const name = runtimeScene.getVariables().get(`Patch_${i}_Name`).getAsString();
        if (!url) return;
        runtimeGame.getVariables().get("Selected_Patch_URL").setString(url);
        runtimeGame.getVariables().get("Selected_Patch_Name").setString(name);
        runtimeScene.getVariables().get("Patch_Selected").setNumber(1);
        console.log("Selected:", name);
    }
});
};
gdjs.BrowserCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


gdjs.BrowserCode.userFunc0x4268718(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(41899324);
}
}
if (isConditionTrue_0) {
}

}


{


gdjs.BrowserCode.userFunc0x42689e0(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(41891548);
}
}
if (isConditionTrue_0) {
}

}


{


gdjs.BrowserCode.userFunc0x4268cc0(runtimeScene);

}


{


gdjs.BrowserCode.userFunc0x4268e30(runtimeScene);

}


};

gdjs.BrowserCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BrowserCode.GDBrowser_9595CardObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595CardObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595ThumbObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595ThumbObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595NameObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595NameObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595AuthorObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595AuthorObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595HeaderObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595HeaderObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595SearchBarObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595SearchBarObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595PreviewObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595PreviewObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595CloseObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595CloseObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.BrowserCode.GDAutoPlayObjects1.length = 0;
gdjs.BrowserCode.GDAutoPlayObjects2.length = 0;
gdjs.BrowserCode.GDLoading_9595alertObjects1.length = 0;
gdjs.BrowserCode.GDLoading_9595alertObjects2.length = 0;
gdjs.BrowserCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.BrowserCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.BrowserCode.GDSnapShotObjects1.length = 0;
gdjs.BrowserCode.GDSnapShotObjects2.length = 0;
gdjs.BrowserCode.GDBackgroundObjects1.length = 0;
gdjs.BrowserCode.GDBackgroundObjects2.length = 0;
gdjs.BrowserCode.GDfadeObjects1.length = 0;
gdjs.BrowserCode.GDfadeObjects2.length = 0;
gdjs.BrowserCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.BrowserCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.BrowserCode.GDtop_9595titleObjects1.length = 0;
gdjs.BrowserCode.GDtop_9595titleObjects2.length = 0;
gdjs.BrowserCode.GDShadowObjects1.length = 0;
gdjs.BrowserCode.GDShadowObjects2.length = 0;

gdjs.BrowserCode.eventsList0(runtimeScene);
gdjs.BrowserCode.GDBrowser_9595CardObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595CardObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595ThumbObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595ThumbObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595NameObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595NameObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595AuthorObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595AuthorObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595HeaderObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595HeaderObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595SearchBarObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595SearchBarObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595PreviewObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595PreviewObjects2.length = 0;
gdjs.BrowserCode.GDBrowser_9595CloseObjects1.length = 0;
gdjs.BrowserCode.GDBrowser_9595CloseObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595PlayObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595PlayObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595EditorObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595EditorObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595HomeObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595HomeObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595Top_9595MenuObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595Top_9595MenuObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595Blank_9595KnobObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595Blank_9595KnobObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595BaseObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595BaseObjects2.length = 0;
gdjs.BrowserCode.GDGlobal_9595Top_9595LiteObjects1.length = 0;
gdjs.BrowserCode.GDGlobal_9595Top_9595LiteObjects2.length = 0;
gdjs.BrowserCode.GDAutoPlayObjects1.length = 0;
gdjs.BrowserCode.GDAutoPlayObjects2.length = 0;
gdjs.BrowserCode.GDLoading_9595alertObjects1.length = 0;
gdjs.BrowserCode.GDLoading_9595alertObjects2.length = 0;
gdjs.BrowserCode.GDTri_9595Blank_9595Objects1.length = 0;
gdjs.BrowserCode.GDTri_9595Blank_9595Objects2.length = 0;
gdjs.BrowserCode.GDSnapShotObjects1.length = 0;
gdjs.BrowserCode.GDSnapShotObjects2.length = 0;
gdjs.BrowserCode.GDBackgroundObjects1.length = 0;
gdjs.BrowserCode.GDBackgroundObjects2.length = 0;
gdjs.BrowserCode.GDfadeObjects1.length = 0;
gdjs.BrowserCode.GDfadeObjects2.length = 0;
gdjs.BrowserCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.BrowserCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.BrowserCode.GDtop_9595titleObjects1.length = 0;
gdjs.BrowserCode.GDtop_9595titleObjects2.length = 0;
gdjs.BrowserCode.GDShadowObjects1.length = 0;
gdjs.BrowserCode.GDShadowObjects2.length = 0;


return;

}

gdjs['BrowserCode'] = gdjs.BrowserCode;
