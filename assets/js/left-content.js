let taskz = [
    {
        name: "Green House"
    },
    {
        name: "Cyber Punk"
    },
    {
        name: "Easy Crypto"
    },
    {
        name: "Travel Apps"
    },
    {
        name: "Landing Page"
    },
    {
        name: "Landing Page 2"
    },
]

// show total list task 
let totalTask = taskz.length
$('.count-task').html(totalTask)

// show list on page
let res = []
taskz.map(task=>{
    if(task.name.toLocaleLowerCase().includes(text)){
        res.push(task.name)
    }
})




// include every list to variable
let contain = ""
res.forEach((name)=>{

    // get first letter on first word and second word
    const [firstWord, secondWord] = name.split(' ')
    const initial = firstWord.charAt(0) + secondWord.charAt(0)
    // console.log(initial);

    contain = contain + `
        <div class="project">
            <div class="oute">
                <div class="card">
                    <div class="big-text" >${initial}</div>
                </div>
            </div>
            <div class="title-card">${name}</div>
        </div>
    `
})

$('.projects').html(contain)

// active and deactive border on card
$(document).on('click', '.oute', (e)=>{
    // console.log($(e.currentTarget.parentElement).siblings().children('.outer'));
    $(e.currentTarget).attr('class', 'outer')
    $(e.currentTarget.parentElement).siblings().children('.outer').attr('class', 'oute')
})

$(document).on('input', '.search', (e)=>{
    console.log($(e.currentTarget).val());

    let text = $(e.currentTarget).val().toLowerCase()

    let res = []
    taskz.map(task=>{
        if(task.name.toLocaleLowerCase().includes(text)){
            res.push(task.name)
        }
    })

    console.log(res);

    // declare contain
    let contain = ''

    // fill constain for search
    res.forEach((name)=>{
        // console.log(name);
        // contain = contain + 'b'

         // get first letter on first word and second word
        const [firstWord, secondWord] = name.split(' ')
        const initial = firstWord.charAt(0) + secondWord.charAt(0)
        // console.log(initial);

        contain = contain + `
            <div class="project">
                <div class="oute">
                    <div class="card">
                        <div class="big-text" >${initial}</div>
                    </div>
                </div>
                <div class="title-card">${name}</div>
            </div>
        `

    })

    // console.log(contain);

    // update total task after search
    totalTask = res.length
    $('.count-task').html(totalTask)


    // insert result from search
    $('.projects').html(contain)
})

