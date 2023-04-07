// document.addEventListener("mouseup", function(){
//   var selectedText = window.getSelection().toString();
//   if(selectedText.length > 0){
//     var span = document.createElement("span");
//     span.style.backgroundColor = "yellow";
//     span.textContent = selectedText;
//     window.getSelection().getRangeAt(0).surroundContents(span);
//   }
// });

// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: () => {
//       const selectedText = window.getSelection().toString();
//       if (selectedText.length > 0) {
//         const span = document.createElement("span");
//         span.style.backgroundColor = "yellow";
//         span.textContent = selectedText;
//         window.getSelection().getRangeAt(0).surroundContents(span);
//       }
//     },
//   });
// });
// chrome.browserAction.onClicked.addListener(() => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: () => {
//       const selectedText = window.getSelection().toString();
//       if (selectedText.length > 0) {
//         const span = document.createElement("span");
//         span.style.backgroundColor = "yellow";
//         span.textContent = selectedText;
//         window.getSelection().getRangeAt(0).surroundContents(span);
//       }
//     },
//   });
// });

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({
    code: `
      const selectedText = window.getSelection().toString();
      if (selectedText.length > 0) {
        const span = document.createElement("span");
        span.style.backgroundColor = "yellow";
        span.textContent = selectedText;
        const range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        range.insertNode(span);
      }
    `
  });
});
