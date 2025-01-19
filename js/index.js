const tabs1 = new GraphTabs('tab', {
    isChanged: (tabs) => {
        console.log(tabs);
    }
});

tabs1.switchTabs(document.querySelector('#tab2'));