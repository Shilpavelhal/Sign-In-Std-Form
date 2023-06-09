//console.log("Hello");

let cl = console.log;

const stdContainer = document.getElementById('stdContainer');
const stdForm = document.getElementById('stdForm');
const fnameControl = document.getElementById('fname');
const lnameControl = document.getElementById('lname');
const emailControl = document.getElementById('email');
const contactControl = document.getElementById('contact');


let stdArray = [
    {
      fname : 'Jhon',
      lname : 'wick',
      email : 'jhon@wick.com',
      contact : 1234567890
    },
    {
        fname : 'Burse',
        lname : 'Wyane',
        email : 'burse@wyane.com',
        contact : 1234567890
    }
];

const templating = (arr) => {
    let result = '';

    arr.forEach((std, i) => {
        result += `
                 <tr>
                 <td>${i + 1}</td>
                <td>${std.fname}</td>
                <td>${std.lname}</td>
                <td>${std.email}</td>
                 <td>${std.contact}</td>
                </tr>
            `
    })

    stdContainer.innerHTML = result;

}

templating(stdArray);

const onStdSubmit = (eve) => {
    eve.preventDefault();
    cl(`Std is added`);

    let stdObj = {
        fname : fnameControl.value,
        lname : lnameControl.value,
        email : emailControl.value,
        contact : contactControl.value
    }
    cl(stdObj);
    stdArray.push(stdObj);
    //std.reset();
    eve.target.reset();

    templating(stdArray);

}

stdForm.addEventListener("submit", onStdSubmit);

