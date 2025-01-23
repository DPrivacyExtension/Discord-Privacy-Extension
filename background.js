chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({ url: "dc.html" });
});
chrome.runtime.onInstalled.addListener(() => {
  console.log("Discord Privacy Extension installed.");
});
