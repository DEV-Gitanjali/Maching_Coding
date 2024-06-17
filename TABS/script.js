const tabsData = [
  {
    id: "tabs1",
    title: "Tab 1",
    content: "This is a content for Tab 1"
  },
  {
    id: "tabs2",
    title: "Tab 2",
    content: "This is a content for Tab 2"
  },
  {
    id: "tabs3",
    title: "Tab 3",
    content: "This is a content for Tab 3"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  let activeTab = tabsData[0].id;

  function renderTabs() {
    const tabContainer = document.querySelector("#tabContainer");
    const contentContainer = document.querySelector("#tabContentContainer");

    tabsData.forEach((tab) => {
      // Create tab button
      const tabButton = document.createElement("button");
      tabButton.className = "tabLinks";
      tabButton.textContent = tab.title;
      tabButton.setAttribute("data-tab", tab.id);
      tabContainer.appendChild(tabButton);

      // Create tab content div
      const tabContent = document.createElement("div");
      tabContent.className = "tabContent";
      tabContent.id = tab.id;
      tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
      contentContainer.appendChild(tabContent);
    });

    // Event listener for tab buttons
    tabContainer.addEventListener("click", function (event) {
      if (event.target.matches(".tabLinks")) {
        const tabId = event.target.getAttribute("data-tab");
        if (tabId !== activeTab) {
          openTab(tabId);
          activeTab = tabId;
        }
      }
    });
  }

  function openTab(tabId) {
    const tabContents = document.querySelectorAll(".tabContent");
    const tabLinks = document.querySelectorAll(".tabLinks");

    // Hide all tab contents and remove active class from all tab buttons
    tabContents.forEach((tab) => tab.classList.remove("active"));
    tabLinks.forEach((tab) => tab.classList.remove("active"));

    // Show the selected tab content and add active class to the corresponding button
    document.getElementById(tabId).classList.add("active");
    document.querySelector(`button[data-tab="${tabId}"]`).classList.add("active");
  }

  renderTabs();

  // Initial activation of the first tab
  document.getElementById(activeTab).classList.add("active");
  document.querySelector(`button[data-tab="${activeTab}"]`).classList.add("active");
});
