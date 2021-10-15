const links = [
    {
        label: "Week1 notes",
        url: "week01/index.html"
    },
    {
        label: "Week2 notes",
        url: "week02/index.html"
    },
    {
        label: "Week3 notes",
        url: "week03/index.html"
    },
    {
        label: "Week4 notes",
        url: "week04/index.html"
    },
    {
        label: "Week5 notes",
        url: "week05/index.html"
    },
    {
        label: "Week6 notes",
        url: "week06/index.html"
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