!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.stopBtn.disabled=!0,console.log("refs.stopBtn.disabled",t.stopBtn.disabled),console.log("refs.startBtn.disabled",t.startBtn.disabled),t.startBtn.addEventListener("click",(function(){currentColor=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1,console.log("refs.stopBtn.disabled",t.stopBtn.disabled),console.log("refs.startBtn.disabled",t.startBtn.disabled)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(currentColor),console.log("refs.stopBtn.disabled",t.stopBtn.disabled),console.log("refs.startBtn.disabled",t.startBtn.disabled)}))}();
//# sourceMappingURL=01-color-switcher.3a297d6c.js.map
