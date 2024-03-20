let fieldCheck = data => {


    let valid = true

    Object.keys(data).forEach( x => {
        console.log(data[x], data[x] == "")
        if(data[x] == "") valid = false
    })

    return valid
}

export const reusable = {fieldCheck}