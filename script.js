let flag = true
let src_flag = true
const src_on = ["https://www.youtube.com/embed/DASLDeEIq44?&autoplay=1", "images/Speaker_Icon.svg"]
const src_off = ["https://www.youtube.com/embed/DASLDeEIq44?&autoplay=1&mute=1", "images/volume-mute-icon.webp"]
let volume = document.getElementById('volume')
let sound = document.getElementById('sound')
let icon = document.getElementById('icon')
volume.addEventListener('click', function (){
    if (src_flag){

        sound.src = src_off[0]
        icon.src = src_off[1]
        src_flag = false
    } else {
        sound.src = src_on[0]
        icon.src = src_on[1]
        src_flag = true
    }

})
volume.addEventListener('mouseover', function (){
    volume.style.cursor = 'pointer'
})


let patrick = document.getElementById('patrick')
let quote_cloud = document.getElementById('quote-cloud')
let size = 100

function quoteleave(){
    let some = document.getElementById('quote')
    some.style.cursor = 'default'
}

function quotover(){
    let some = document.getElementById('quote')
    some.style.cursor = 'pointer'
}
function quote_cloud_content(){
    let image = document.createElement('img')
    image.setAttribute('id', 'cloud')
    image.setAttribute('src', 'https://freesvg.org/img/tikigiki-caption-balloon-002.png')
    let figcaption = document.createElement('figcaption')
    figcaption.setAttribute('id', 'quote')
    quote_cloud.append(image, figcaption)
    let quote = document.getElementById('quote')
    quote.addEventListener('mouseover', quotover)
    quote.addEventListener('mouseleave', quoteleave)
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
                        patrick.removeEventListener('click', move)
                        patrick.style.cursor = 'auto'
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


function vanish(interval_func) {
    distance--
    quote_cloud.style.opacity = `${distance * 0.1}`
    if (distance < 1) {
        clearInterval(interval_func)
        let element = document.getElementById('quote')
        let text = 'Spoooooonge Boooob !!!'
        let interval_2 = setInterval(function (){
            appear_cloud(element, text, interval_2)
            element.addEventListener('click', new_quotation)
        }, 80)
    }
}

function new_quotation(){
    let quote_animation_1 = setInterval(function () {
        distance--
        quote_cloud.style.opacity = `${distance * 0.1}`
        if (distance < 1) {
            clearInterval(quote_animation_1)
            spongebob()

        }
    }, 80)
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

        let interval = setInterval(function () {
            vanish(interval)
        }, 80)
    })


    no.addEventListener('click', function () {
        let interval = setInterval(function () {
            distance --
            quote_cloud.style.opacity = `${distance * 0.1}`
            if (distance < 1){
                clearInterval(interval)
                let patrick_anim = setInterval(function (){
                    distance ++
                    patrick.style.left = `-${distance}px`
                    if (distance > 600){
                        clearInterval(patrick_anim)
                        distance = 0
                        titles()
                         let screen = document.getElementById('the_end')
                                let last = setInterval(function (){
                                    distance ++
                                    screen.style.opacity = `${distance * 0.1}`
                                    if (distance > 9){
                                        clearInterval(last)
                                        sound.src = src_off[0]
                                    }
                                }, 100)
                    }
                }, 10)
            }
        }, 60)
    })

}

function spongebob (){
    let quote = document.getElementById('quote')
    let img = document.createElement('img')
    img.setAttribute('id', 'sponge')
    img.setAttribute('src', 'images/SpongeBob.png')
    document.body.append(img)
    let sponge = document.getElementById('sponge')
    sponge.addEventListener('mouseover', spongeover)
    sponge.addEventListener('mouseleave', spongeleave)
    sponge.addEventListener('click', sponganimation)
    let appear = setInterval(function (){
        distance ++
        sponge.style.opacity = `${distance * 0.1}`
        if (distance > 9){
            clearInterval(appear)
            quote.removeEventListener('mouseover', quotover)
            quote.removeEventListener('click', new_quotation)
        }
    }, 150)
}


function spongeover(){
    let sponge = document.getElementById('sponge')
    sponge.style.cursor = 'pointer'
    let animation = setInterval(function (){
        size ++
        sponge.style.height = `${size}px`
        if (size > 120){
            clearInterval(animation)
        }
    }, 1)
}

function spongeleave(){
    let sponge = document.getElementById('sponge')
    sponge.style.height = '100px'
    size = 100
}


function sponganimation(){
    distance = 0
    let position_sponge = 580 + 357
    let sponge = document.getElementById('sponge')
    sponge.removeEventListener('mouseover', spongeover)
    sponge.removeEventListener('mouseleave', spongeleave)
    sponge.removeEventListener('click', sponganimation)
    sponge.style.cursor = 'default'
    let interval = setInterval(function (){
        distance ++
        sponge.style.top = `${position_top + distance}px`
        if (distance > 357){
            clearInterval(interval)
            distance = 0
            sponge.style.height = '700px'
            sponge.style.left = '550px'
            sponge.src = 'images/Spongebob_Squarepants.webp'
            let greeting = document.createElement('audio')
            greeting.src = 'images/im-ready.mp3'
            greeting.setAttribute('autoplay', '')
            document.body.append(greeting)
            let new_inter = setInterval(function (){
                distance ++
                sponge.style.top = `${position_sponge - distance}px`
                if (distance > 700){
                    clearInterval(new_inter)
                    distance = 0
                    Gary()
                    let gary = document.getElementById('gary')
                    let int = setInterval(function (){
                        distance++
                        gary.style.opacity = `${distance * 0.1}`
                        let meow = document.createElement('audio')
                        meow.src = 'images/gary_meow.mp3'
                        meow.setAttribute('autoplay', '')
                        meow.setAttribute('id', 'meow')
                        document.body.append(meow)
                        if (distance > 2){
                            clearInterval(int)
                            let gary_int = setInterval(function (){
                                distance ++
                                gary.style.opacity = `${distance * 0.1}`
                                if (distance > 9){
                                    clearInterval(gary_int)
                                    gary.addEventListener('mouseover', garyover)
                                    gary.addEventListener('mouseleave', garyleave)
                                    gary.addEventListener('mousedown', garytake)
                                    gary.addEventListener('mouseup', garyput)
                                    gary.addEventListener('dragend', garymove)
                                }
                            }, 80)
                        }
                    }, 500)

                }
            }, 10)
        }
    }, 20)
}

function garyover(){
    let gary = document.getElementById('gary')
    distance = 70
    gary.style.cursor = 'grab'
    let animation = setInterval(function (){
    distance ++
    gary.style.height = `${distance}px`
    if (distance > 90){
        clearInterval(animation)
    }
    }, 1)
}

function garyleave(){
    let gary = document.getElementById('gary')
    gary.style.height = '70px'
}

function garytake(){
    let gary = document.getElementById('gary')
    gary.style.cursor = 'grabbing'
}

function garyput(){
    let gary = document.getElementById('gary')
    gary.style.cursor = 'grab'
}

function garymove(e){
    let gary = document.getElementById('gary')
    let sponge = document.getElementById('sponge')
    let _x = e.clientX
    let _y = e.clientY
    if ((_x > 600 && _x < 850) && (_y > 245 && _y < 625)){
        e.target.style.left = _x + "px";
        e.target.style.top = _y + "px";
        gary.removeEventListener('mouseover', garyover)
        gary.removeEventListener('mouseleave', garyleave)
        gary.removeEventListener('mousedown', garytake)
        gary.removeEventListener('mouseup', garyput)
        distance = 10
        let interval = setInterval(function (){
            distance --
            e.target.style.opacity = `${distance * 0.1}`
            if (distance < 1){
                clearInterval(interval)
                distance = 10
                let int = setInterval(function (){
                    distance --
                    sponge.style.opacity = `${distance * 0.1}`
                    if (distance < 1){
                        clearInterval(int)
                        sponge.src = 'images/SpongeBob.png'
                        sponge.style.height = '750px'
                        sponge.style.top = '180px'
                        let interval_two = setInterval(function (){
                            distance ++
                            sponge.style.opacity = `${distance * 0.1}`
                            if (distance > 9){
                                clearInterval(interval_two)
                                distance = 0
                                titles()
                                let screen = document.getElementById('the_end')
                                let last = setInterval(function (){
                                    distance ++
                                    screen.style.opacity = `${distance * 0.1}`
                                    if (distance > 9){
                                        clearInterval(last)
                                        sound.src = src_off[0]
                                    }
                                }, 100)
                    }
                }, 100)
                    }
                }, 40)
            }
        }, 200)
    } else {
         e.target.style.left = _x + "px";
         e.target.style.top = _y + "px";
    }
}


function Gary(){
    let element = document.createElement('img')
    element.setAttribute('id', 'gary')
    element.setAttribute('src', 'images/garry.png')
    element.setAttribute('draggable', 'true')
    document.body.append(element)
}

function titles(){
    let el = document.createElement('img')
    el.setAttribute('id', 'the_end')
    el.setAttribute('src', "images/TheEnd.webp")
    document.body.append(el)
}