const links = [
    {
        label: "Week1 notes",
        url: "week01/index.html"
    },
    {
        label: "Week2 notes",
        url: "week02/index.html"
    }
]

function printLinksHtml() {
    const ol = document.querySelector('#links');
    
    links.forEach(link => {
        let li = document.createElement('li');
        let a = document.createElement('a');

        let aLink = document.createTextNode(link.label);
        a.appendChild(aLink);
        a.title = link.label;
        a.href = link.url

        li.appendChild(a);
        ol.appendChild(li);
    });
}

printLinksHtml();