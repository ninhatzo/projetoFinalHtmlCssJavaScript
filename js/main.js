// Menu NavBar
    document.getElementById('open_btn').addEventListener('click', function () { 
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

// TABS Containers 
    const tabs = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

// TAB click condicionais
    const tabClicked = (tab) => {
        tabs.forEach(t => t.classList.remove('active'));

        tab.classList.add('active');

        const contents = document.querySelectorAll('.content');
        contents.forEach(content => content.classList.remove('show'));

        const contentId = tab.getAttribute('content-id');
        const content = document.getElementById(contentId);
        content.classList.add('show');
    }

    const currentActiveTab = document.querySelector('.tab-btn.active');
    if (currentActiveTab) {
    tabClicked(currentActiveTab);
}