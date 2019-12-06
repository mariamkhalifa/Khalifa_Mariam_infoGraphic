
(() => {

    // try to get the object and do stuff with it
    let seeMore =document.querySelectorAll('.see-more'),
        popOver = document.querySelector('.popover');

    // set up waypoints and make thinsg happen
    let waypoint1 = new Waypoint({
        element: document.getElementById('book1'),
        handler: function(direction) {
            console.log('Scrolled to waypoint!');
            // this.element.innerHTML += "<p>I got added with Waypoint!</p>";
        }
        
    });

    let waypoint2 = new Waypoint({
        element: document.getElementById('book2'),
        handler: function(direction) {
            console.log('scrolled  to waypoint');
            let svg = this.element.firstElementChild.contentDocument;
            // svg.querySelector('#beerText').classList.add('yellow');
        },
        offset: 300
    });

    function showPopover(beerdata, el) {
        popOver.querySelector('.rating-text').textContent = bookdata.rating;
        popOver.querySelector('.year').textContent = bookdata.rating;
        popOver.querySelector('.age').textContent = bookdata.age;
        popOver.querySelector('.villain').textContent = bookdata.villain;

        popOver.classList.add('show-popover');

        el.appendChild(popOver);
    }

    function fetchData() {
        let url = `/info/${this.dataset.target}`;
            targetElement = this;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            showPopover(data, targetElement);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    seeMore.forEach(button => button.addEventListener('click', fetchData));
})();