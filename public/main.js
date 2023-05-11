const btn = document.querySelector('button')
const baseUrl = 'http:/18.204.19.56/'
//const baseUrl = 'http://localhost:4000'
const clickHandler = () => alert('The cat name is: Rascal')

btn.addEventListener('click', clickHandler)

axios
.get(`${baseUrl}/api/dog/?name=toby`)
.then(res => {
    console.log(res)
})
.catch(err => console.log(err))