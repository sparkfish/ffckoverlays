browser.menus.create({
    id: "removeoverlay",
    title: "Remove Overlay",
    contexts: ["all"],
	icons: {
		"16": "icons/menu-16.png",
		"32": "icons/menu-32.png"
	  }
});
browser.menus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "removeoverlay") {
		browser.tabs.executeScript({
		  code: `browser.menus.getTargetElement(${info.targetElementId}).remove();`
		});
    }
});
