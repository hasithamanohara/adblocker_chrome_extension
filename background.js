chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "*://*.youtube.com/*ad*",
          resourceTypes: ["script", "image", "xmlhttprequest", "media"],
        },
      },
      {
        id: 2,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "*://*.googlevideo.com/*ad*",
          resourceTypes: ["script", "image", "xmlhttprequest", "media"],
        },
      },
      {
        id: 3,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "*://*.doubleclick.net/*",
          resourceTypes: ["script", "image", "xmlhttprequest", "media"],
        },
      },
      {
        id: 4,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "*://*.doubleclick.net/*",
          resourceTypes: ["script", "image", "xmlhttprequest"],
        },
      },
    ],
    removeRuleIds: [1, 2, 3, 4],
  });
});
