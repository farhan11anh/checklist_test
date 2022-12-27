let tasks = [
    {
        id : 1,
        list : "Create initial layout for homepage",
        check : true,
        status : "Approved"
    },
    {
        id : 2,
        list : "Fixing icon with transparent background",
        check : true,
        status : "In Proggress"
    },
    {
        id : 3,
        list : "Fixing icon with transparent background",
        check : true,
        status : "In Proggress"
    },
    {
        id : 4,
        list : "Create initial layout for homepage",
        check : true,
        status : "In Proggress"
    },
    {
        id : 5,
        list : "Dissciusion regarding workflow improvement",
        check : false,
        status : "In Review"
    },
    {
        id : 6,
        list : "Create quotation for app redesign project",
        check : true,
        status : "Waiting"
    },
    
]

function addData(data) {

                let status = ""

                // for check approved
                let check = ""

                if(data.status == "Approved"){
                    status = "status a"
                    check = `
                        <div class="check">
                            <span>✓</span>
                        </div>
                    `
                }else if(data.status =="In Proggress"){
                    status = "status ip"
                }else if(data.status =="In Review"){
                    status = "status ir"
                }else if(data.status =="Waiting"){
                    status = "status w"
                }

                $('.body-c').append(`<div class="task-list">
                <div class="list-check">
                    ${check}
                </div>
                <div class="list-l">
                    ${data.list}
                </div>
                <div class="list-r">
                    <div class="${status}">
                        <div class="st-app">${data.status}</div>
                    </div>
                </div>
            </div>`)
    // console.log(data);
}


tasks.map(task=>{
    // console.log(task);
    addData(task)

})

// detect input
$('#input-list').on("input", function(){
    console.log($(this).val());
})

let text = ""
// detect input
$(document).on('input', '#input-list', function(){
    console.log($(this).val());
    text = $(this).val()
})


// save data and hide form
$(document).on('click', '.btn-add', function(){
    if(text !== ""){
        let isi = $('#input-list').val()
        // console.log(isi);
        $('#add-form').remove()
        $('.body-c').append(`<div class="task-list">
                    <div class="list-check">
                       
                    </div>
                    <div class="list-l">
                        ${isi}
                    </div>
                    <div class="list-r">
                        <div class="status w">
                            <div class="st-app">Waiting</div>
                        </div>
                    </div>
                </div>`)

        // appear add button
        $('.add').show()
    } else {
        alert(`form input can't empty`)
    }
})

// trigger form, will appear
$('.add').click(function(){
    $(this).hide()
    $('.body-c').append(`
        <div id="add-form" class="task-list">
            <div class="add-list">
                <input id="input-list" type="text">  
            </div>
            <button class="btn-add" >Add</button>
        </div>
    `)
})


// change status 
$(document).on('click', '.status.w', function(e){
    alert('Status changed')
    console.log('wa');
    console.log($(e.target.parentElement));
    $(e.target.parentElement).attr('class', 'status ip')
    $(e.target).html('In Proggress')
})

$(document).on('click', '.status.ip', function(e){
    alert('Status changed')
    console.log('wa');
    console.log($(e.target.parentElement));
    $(e.target.parentElement).attr('class', 'status ir')
    $(e.target).html('In Review')
})

// In Review to approved
$(document).on('click', '.status.ir', function(e){
    let conf = confirm('Are you sure to update to Approved ?')
    if(conf){
        alert('Status changed') 
        // console.log('wa');
        // console.log($(e.target.parentElement));
        $(e.target.parentElement).attr('class', 'status a')
        $(e.target).html('Approved')

        // add check
        $(e.target.parentElement.parentElement).siblings('.list-check').html(`
            <div class="check">
                <span>✓</span>
            </div>
        `)
    }

})

// Reset Approve to Waiting
$(document).on('click', '.status.a', function(e){
    let conf = confirm('Are you sure to Reset to Waiting ?')
    if(conf){
        alert('Status Reset !!!')
        // console.log($(e.target.parentElement));
        $(e.target.parentElement).attr('class', 'status w')
        $(e.target).html('Waiting')

        // remove check
        $(e.target.parentElement.parentElement).siblings('.list-check').children().remove()
    }
})

// checkbox switch
$(document).on('click', '.list-check', (e)=>{

    // console.log($(e.target.parentElement).attr('class'));
    if($(e.target.parentElement.parentElement).attr('class') == 'list-check'){
        const conf = confirm('Are you sure to uncheck, and reset status to Waiting ?')
        if(conf){
            // uncheck
            $(e.target.parentElement).remove()

            // change status
            $(e.currentTarget).siblings('.list-r').children().attr('class', 'status w');
            $(e.currentTarget).siblings('.list-r').children().children().html('Waiting');
        }

    }

    if($(e.target.parentElement).attr('class') !== "check"){
        const conf = confirm('Are you sure to check, and reset status to Approved ?')
        if(conf){
            // console.log($(e.target).attr('class'));
            $(e.target).html(`
                    <div class="check">
                        <span>✓</span>
                    </div>
                `)

            // change status
            $(e.currentTarget).siblings('.list-r').children().attr('class', 'status a');
            $(e.currentTarget).siblings('.list-r').children().children().html('Approved');
        }

    }

})







