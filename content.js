document.addEventListener("mouseup", function(){
  var selectedText = window.getSelection().toString();
  if(selectedText.length > 0){
    var span = document.createElement("span");
    span.style.backgroundColor = "yellow";
    span.textContent = selectedText;
    window.getSelection().getRangeAt(0).surroundContents(span); // surround the selected text with the span
  }
});
