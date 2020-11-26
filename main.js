const sectionOne = document.querySelector('.section1');
const btn = document.querySelector('.hamb-btn');
const hambLine = document.querySelectorAll('.hambline');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('header');
const listLink = document.querySelectorAll('.list-link');

btn.addEventListener('click', () => {

    // transforming hamb button to X button
    for (let line of hambLine) {
        line.classList.toggle('change');
    }

    // opening nav list for links
    navList.classList.toggle('change');

    // close link list when clicked on link list
    header.addEventListener('click', (e) => {
        // console.log(e.target)
        if (e.target.classList == "nav-ul") {
            for (let line of hambLine) {
                line.classList.remove('change');
            }
            navList.classList.remove('change');
        }
    })

    // close link list when clicked on any link in link list
    listLink.forEach(link => link.addEventListener('click', (e) => {
        if (navList.classList.value.includes('change')) {
            navList.classList.remove('change');
            for (let line of hambLine) {
                line.classList.remove('change');
            }
            // btn.click();
        }
    }))

    // close link list when clicked on body
    sectionOne.addEventListener('click', () => {
        navList.classList.remove('change');
        for (let line of hambLine) {
            line.classList.remove('change');
        }
    })

});