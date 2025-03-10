// Old, primitive version of preventing Twitter from loading
var host = "https://www.youtube.com/watch?v=XZPWdXK0U0w";
location.href = host;

// Get arrays containing new and old rules
const newRules = await getNewRules();
const oldRules = await chrome.declarativeNetRequest.getDynamicRules();
const oldRuleIds = oldRules.map(rule => rule.id);

// Use the arrays to update the dynamic rules
await chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: oldRuleIds,
  addRules: newRules
});