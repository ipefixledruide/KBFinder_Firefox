function showDaKB(identifier) {
	kbidentifier=identifier; 
	document.querySelector("#KbId").innerText = "" + kbidentifier + "";
}

browser.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  browser.tabs.executeScript(tab.id, {
    code: `document.querySelector('meta[name="awa-kb_id"]')['content']`
  }, showDaKB);
});