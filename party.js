async function getGiphyByAction(gifs) {
    try {
    const url = `http://api.giphy.com/v1/gifs/${gifs}search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
    const res = await axios.get(url);
    const img = document.querySelector("#giphy");
    img.src = res.data.message;
    } catch (e) {
        alert("giphy not found!");
    }
}

const form = document.querySelector('#searchform');
const input = document.querySelector('#search');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    getGiphyByAction(input.value);
    input.value = '';
})