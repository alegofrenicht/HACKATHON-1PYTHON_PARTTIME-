let flag = true
let patrick = document.getElementById('patrick')
let size = 100
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
let distance_2 = 0
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
            let animation_part2 = setInterval(function (){
                distance_2 ++
                console.log(distance_2, position_top_2)
                patrick.style.top = `${position_top_2 - distance_2}px`
                if (distance_2 > 650){
                    clearInterval(animation_part2)
                }
            }, 10)
        }
        }, 40)
}

