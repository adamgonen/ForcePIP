chrome.browserAction.onClicked.addListener(async () => {
  chrome.tabs.executeScript({ file: 'inject.js'});
});
