let flag = true
let patrick = document.getElementById('patrick')
let quote_cloud = document.getElementById('quote-cloud')
let size = 100
// let yesNo_flag = true
function quote_cloud_content(){
    let image = document.createElement('img')
    image.setAttribute('id', 'cloud')
    image.setAttribute('src', 'https://freesvg.org/img/tikigiki-caption-balloon-002.png')
    let figcaption = document.createElement('figcaption')
    figcaption.setAttribute('id', 'quote')
    quote_cloud.append(image, figcaption)
    let quote = document.getElementById('quote')
    quote.addEventListener('mouseover', function (){
        quote.style.cursor = 'pointer'})
    quote.addEventListener('mouseleave', function (){
        quote.style.cursor = 'auto'})
}

function patrickover(){
    if (flag){
    patrick.style.cursor = 'pointer'
    let animation = setInterval(function (){
        size ++
        patrick.style.height = `${size}px`
        if (size > 120){
            clearInterval(animation)
        }
    }, 1)
} else { return null}
}

function patrickleave(){
    if (flag){
    patrick.style.height = '100px'
    size = 100
}
}

patrick.addEventListener('click', move)
let distance = 0
let position_top = 580
let position_top_2 = 0
let position_left = 900
function move(){
    flag = false
    let animation = setInterval(function (){
        distance ++
        patrick.style.height = `${size + distance * distance}px`
        patrick.style.top = `${position_top + distance}px`
        position_top_2 = position_top + distance
        patrick.style.left = `${position_left - (distance * distance)}px`

        if (distance > 28){
            clearInterval(animation)
            distance = 0
            let animation_part2 = setInterval(function (){
                distance ++
                patrick.style.top = `${position_top_2 - distance}px`
                if (distance > 650){
                    clearInterval(animation_part2)
                    distance = 0
                    quote_cloud_content()
                    let element = document.getElementById('quote')
                    element.addEventListener('click', quotation)
                    let text = 'Leedle Leedle Leedle Lee... Hello, it\'s Patrick'
                    let quote_animation = setInterval(function (){
                        appear_cloud(element, text, quote_animation)
                        }, 80)
                }
            }, 10)
        }
        }, 40)

}


function appear_cloud( element, text, name_int){
        element.textContent = text
        distance ++
        quote_cloud.style.opacity = `${distance * 0.1}`
        if (distance > 9){
            clearInterval(name_int)
        }

}

function appear_cloud_2( element, text, name_int){
        element.textContent = text
        distance ++
        quote_cloud.style.opacity = `${distance * 0.1}`
        if (distance > 9){
            clearInterval(name_int)
        }

}

function vanish(interval_func) {
    distance--
    quote_cloud.style.opacity = `${distance * 0.1}`
    if (distance < 1) {
        clearInterval(interval_func)
        let element = document.getElementById('quote')
        let text = 'Spoooooonge Boooob !!!'
        let interval_2 = setInterval(function (){
            appear_cloud(element, text, interval_2)
        }, 80)
    }
}


function quotation (){
    let quote_animation_1 = setInterval(function (){
        distance --
        quote_cloud.style.opacity = `${distance * 0.1}`
        if (distance < 1){
            clearInterval(quote_animation_1)
            let quote = document.getElementById('quote')
            let text = 'Shall I call Sponge Bob?'
            distance = 0
            let quot_func = setInterval(function (){
                appear_cloud(quote, text, quot_func)
                add_buttons()
            }, 80)
            }}, 80)
}



function add_buttons(){
    let button_1 = document.createElement('button')
    let button_2 = document.createElement('button')
    button_1.setAttribute('id', 'yes')
    button_2.setAttribute('id', 'no')
    button_1.textContent = 'YES'
    button_1.style.cursor = 'pointer'
    button_2.textContent = 'NO'
    button_2.style.cursor = 'pointer'
    let quote = document.getElementById('quote')
    quote.append(button_1,button_2)
    quote.removeEventListener('click', quotation)
    let yes = document.getElementById('yes')
    let no = document.getElementById('no')
    yes.addEventListener('click', function () {
        let text = 'Spooooonge Boooob !!!'
        let interval = setInterval(function () {
            vanish(interval)
            console.log(distance)
        }, 80)
    })
    no.addEventListener('click', function () {
        let interval = setInterval(function () {
            distance --
            quote_cloud.style.opacity = `${distance * 0.1}`
            if (distance < 1){
                clearInterval(interval)
            }
        }, 80)
    })

}


    // let interval = setInterval(function (){
    //
    // })
    //         yes.addEventListener('click', function (){
    //
    //     console.log('yes')
    //         let button_algorithm = setInterval(function (){
    //             distance_new --
    //             console.log(distance_new)
    //             quote_cloud.style.opacity = `${distance_new * 0.1}`
    //             if (distance_new < 1){
    //                 clearInterval(button_algorithm)
    //                 yesNo_flag = 20
    //             }
    //     }, 80)
    //
    // })
    //     }
    // }, 80)


// figcaption.removeEventListener('click', quotation, false)

//     no.addEventListener('click', function (){
//         console.log('no')
//           let button_algorithm = setInterval(function (){
//             distance_new --
//             quote_cloud.style.opacity = `${distance_new * 0.1}`
//             if (distance_new < 1){
//                 clearInterval(button_algorithm)
//                 yesNo_flag = 10
//
//             }
//         }, 80)
//
//     })

// let text = 'So'
// let test = document.getElementById('test')
// test.addEventListener('click', function (){testfunc(text)})
// function testfunc(text){
//     test.textContent = text
// }
//
// text = 'No'
