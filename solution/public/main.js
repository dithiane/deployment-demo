const catBtn = document.querySelector('#cat')
const dogBtn = document.querySelector('#dog')

const getCat = () => {
    axios.get('http://localhost:4000/api/cat')
        .then(res => alert(res.data))
}

const getDog = () => {
    axios.get('http://localhost:4000/api/dog')
        .then(res => alert(res.data))
}

catBtn.addEventListener('click', getCat)
dogBtn.addEventListener('click', getDog)