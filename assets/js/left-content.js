let taskz = [
    {
        img: "background-image: url('./assets/img/abs1.jpg')",
        name: "Green House"
    },
    {
        img: "background-image: url('./assets/img/abs2.jpg')",
        name: "Cyber Punk"
    },
    {
        img: "background-image: url('./assets/img/abs3.webp')",
        name: "Easy Crypto"
    },
    {
        img: "background-image: url('./assets/img/abs4.webp')",
        name: "Travel Apps"
    },
    {
        img: "background-image: url('./assets/img/abs5.jpg')",
        name: "Landing Page"
    },
    {
        img: "background-image: url('./assets/img/abs6.jpg')",
        name: "Landing Page 2"
    },
    {
        img: "background-image: url('./assets/img/abs1.jpg')",
        name: "Landing Page 3"
    },
    {
        img: "background-image: url('./assets/img/abs2.jpg')",
        name: "Market Place"
    },
    {
        img: "background-image: url('./assets/img/abs3.webp')",
        name: "Payment Gateway"
    },
    {
        img: "background-image: url('./assets/img/abs4.webp')",
        name: "Chat Box"
    },
    {
        img: "background-image: url('./assets/img/abs5.jpg')",
        name: "Chat Box 2"
    },
    {
        img: "background-image: url('./assets/img/abs6.jpg')",
        name: "Landing Page 4"
    },
    {
        img: "background-image: url('./assets/img/abs1.jpg')",
        name: "Login Page"
    },
]



// show total list task 
let totalTask = taskz.length
$('.count-task').html(totalTask)

// show list on page
let res = []
taskz.map(task=>{
    if(task.name.toLocaleLowerCase().includes(text)){
        let data = {name : task.name, img:task.img}
        res.push(data)
    }
})

console.log(res);




// include every list to variable
let contain = ""

//count index
let i = 0
res.forEach((name)=>{
    i++
    // console.log(i);

    if(i < 6){
        // get first letter on first word and second word
        const [firstWord, secondWord] = name.name.split(' ')
        const initial = firstWord.charAt(0) + secondWord.charAt(0)
        // console.log(initial);

        contain = contain + `
            <div class="project">
                <div class="oute">
                    <div class="card" style="${name.img}">
                        <div class="big-text" >${initial}</div>
                    </div>
                </div>
                <div class="title-card">${name.name}</div>
            </div>
        `
    } else if(i == 6){
        contain = contain + `
            <div class="project">
                <div class="out">
                    <div class="card-last">
                        <div class="big-text" >${totalTask-5} +</div>
                    </div>
                </div>
            </div>
        `
    }

})

$('.projects').html(contain)

// active and deactive border on card
$(document).on('click', '.oute', (e)=>{
    // console.log($(e.currentTarget.parentElement).siblings().children('.outer'));
    $(e.currentTarget).attr('class', 'outer')
    $(e.currentTarget.parentElement).siblings().children('.outer').attr('class', 'oute')

    let content = $(e.currentTarget).siblings('.title-card').html()
    // console.log(content);
    // change right content
    $('.hc-left>h2').html(content)
})

$(document).on('input', '.search', (e)=>{
    console.log($(e.currentTarget).val());

    let text = $(e.currentTarget).val().toLowerCase()

    let res = []
    taskz.map(task=>{
        if(task.name.toLocaleLowerCase().includes(text)){
            let data = {name:task.name, img:task.img}
            res.push(data)
        }
    })

    console.log(res);

    // declare contain
    let contain = ''
    let i = 0
    // fill constain for search
    res.forEach((name)=>{
        // console.log(name);
        // contain = contain + 'b'

        i++
        // console.log(i);

        // update total task after search
        totalTask = res.length
    
        $('.count-task').html(totalTask)
    
        if(i < 6){


            // get first letter on first word and second word
            const [firstWord, secondWord] = name.name.split(' ')
            const initial = firstWord.charAt(0) + secondWord.charAt(0)
            // console.log(initial);
    
            contain = contain + `
                <div class="project">
                    <div class="oute">
                        <div class="card" style="${name.img}">
                            <div class="big-text" >${initial}</div>
                        </div>
                    </div>
                    <div class="title-card">${name.name}</div>
                </div>
            `
        } else if(i == 6){
            contain = contain + `
                <div class="project">
                    <div class="out">
                        <div class="card-last">
                            <div class="big-text" >${totalTask-5} +</div>
                        </div>
                    </div>
                </div>
            `
        }

    })

    // console.log(contain);
    // insert result from search
    $('.projects').html(contain)
})

