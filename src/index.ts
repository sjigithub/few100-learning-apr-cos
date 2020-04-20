import { formatName, PI } from './formatters.ts';
const theButton = document.getElementById('formatIt') as HTMLButtonElement;
const firstName = document.getElementById('firstName') as HTMLInputElement;
const lastName = document.getElementById('lastName') as HTMLInputElement;
const formatted = document.getElementById('formatted') as HTMLHeadingElement;
// console.log({
//     theButton,
//     firstName,
//     lastName
// });
theButton.addEventListener('click', getNames)
function getNames() {
    const fName = firstName.value; // ugh!
    const lName = lastName.value; // double ugh
    console.log({ fName, lName })
    const fullName = formatName(fName, lName);
    formatted.innerHTML = fullName;
}

