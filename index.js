// Write your solution in this file!

let employee = {
    name: "Tom",
    streetAddress: "123 Somewhere st."
}

function updateEmployeeWithKeyAndValue(empObj, key, value) {

    let newEmpObj = {...empObj};

    newEmpObj[key] = value

    return newEmpObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(empObj, key, value) {

    empObj[key] = value

    return empObj
}

function deleteFromEmployeeByKey(empObj, key) {

    let newEmpObj = {...empObj}

    delete newEmpObj[key]

    return newEmpObj
}

function destructivelyDeleteFromEmployeeByKey(empObj, key) {

    delete empObj[key]

    return empObj
}