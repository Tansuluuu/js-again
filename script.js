//
// const foo = async () => {
//     const data =await fetch('https://jsonplaceholder.typicode.com/photos')
//     const json= await data.json()
//     console.log(json)
// }
// foo()
const div = document.querySelector('.container')
const Btn =document.querySelector('#btn')
// const section =document.querySelector('.section-cat')
const Category = document.querySelector('.category')




Btn.addEventListener('click', () => {
    const yellowHandle = () => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                div.innerHTML = `
            <img class="cats" src=${data[0].url} alt=""/>
            `
            })
            .catch(err => console.log(err))
    }
    yellowHandle()
})

Category.addEventListener('click', () => {
    const yellowPlase = () => {
        fetch(' https://api.thecatapi.com/v1/breeds')
            .then(response => response.json())
            .then (name => {
                Category.innerHTML =`
                 <section class="section-category">
                 <input class="category-input" ${name.breeds}/>
      <div class="category">

      </div>
 </section>
                  `
            })
    }
    yellowPlase()
})






