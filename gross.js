let form = document.getElementById("gross_salary")

form.addEventListener('submit', function (e) {
    // prevent the page from refreshing
    e.preventDefault()

    let basic_salary = document.getElementById("basic_salary").value
    let benefits = document.getElementById("benefits").value
    // checking value input
    if (basic_salary != 0 || benefits != 0) {
        let gross_salary = Number(basic_salary) + Number(benefits)

        document.getElementById("gross").innerHTML = gross_salary

    }else{
        document.getElementById("gross").innerHTML = "ensure the basic salary and benefits are valid"

    }





})
