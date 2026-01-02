let currentTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, tab => {
    if (currentTab && startTime) {
      saveTime(currentTab, Date.now() - startTime);
    }
    currentTab = new URL(tab.url).hostname;
    startTime = Date.now();
  });
});

function saveTime(site, timeSpent) {
  chrome.storage.local.get([site], result => {
    let totalTime = result[site] || 0;
    chrome.storage.local.set({ [site]: totalTime + timeSpent });
  });
}