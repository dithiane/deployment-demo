const btn = document.querySelector('button')
const baseUrl = 'api/'
//const baseUrl = 'http://localhost:4000'
const clickHandler = () => alert('The cat name is: Rascal')

btn.addEventListener('click', clickHandler)

axios
.get(`${baseUrl}dog/?name=toby`)
.then(res => {
    console.log(res)
})
.catch(err => console.log(err))