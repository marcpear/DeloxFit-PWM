const baseTemplate = `
<div id="header-template"></div>
<main id="main-content"></main>
<div id="footer-template"></div>
`;

document.body.innerHTML = baseTemplate;

function loadScript(path) {
    const script = document.createElement('script');
    script.src = path;
    script.async = false;
    document.body.appendChild(script);
}

loadScript('js/header.js');
loadScript('js/footer.js');

if (window.actual) loadScript(window.actual);