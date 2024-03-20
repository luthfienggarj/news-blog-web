/*let breakingImg = document.querySelector('#breakingImg')

// Fetching News Data From Website Proviing API

const apiKey = "d46b663267fc4f499a1d4a1b718e2a5d"

const fetchData = async (category,pageSize) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles
}
//fetchData('general', 5)

//adding breaking news

const add_breakingNews = (data) => {
    breakingImg.innerHTML = `<img src= ${data[0].urlToImage} alt="image">`
}
fetchData('general', 5).then(add_breakingNews)*/

window.addEventListener('scrool', () => {
    if (window.scrollY > 50) {
        Headers.classList.add('sticky')
    }
    else {
        Headers.classList.remove('sticky')
    }
})

/*const toggle = (e) => {
    toogleMenu.classList.toogle('active')
}
toogleMenu.addEventListener('click', toggle)*/


//Menutoggle
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "300px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}

//Mengarahkan Ke Halaman search.html
const icon = document.getElementById('iconglass');
icon.addEventListener('click', function() {
    window.location.href = ('search.html');
});



