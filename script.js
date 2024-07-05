//to get when text is added to text area

//make the text into an array

//every element of array into a span

const textarea = document.getElementById('textarea');
const tagsEl = document.getElementById('tags');

textarea.addEventListener('keyup', (event) => {
    createTags(event.target.value)
    if (event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = '';
        }, 10);
    randomSelect();
    }
})
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    //   console.log(tags);  

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const t = document.createElement('span');
        t.classList.add('tag');
        t.innerText = tag;
        tagsEl.append(t);
    });
}

function randomSelect() {
    const times = 30;
    const int = 100;

    const interval = setInterval(() => {
        //randomly select a tags
        const randomTag = pickRandomTag();
        //hightlight
        highlightTag(randomTag);

        setTimeout(() => {
            //unhightlight
            unhighlightTag(randomTag)
        }, int);

    }, int);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            //randomly select a tags
            const randomTag = pickRandomTag();

            //hightlight
            highlightTag(randomTag);

        }, int);
    }, int * times);
}
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}
function highlightTag(tag) {
    tag.classList.add('highlight')
}
function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}