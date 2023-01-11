// your code here

const sharableUrl = document.getElementById('url');
const name = document.getElementById('name');
const year = document.getElementById('year');

const submitHandler = () => {
    // e.preventDefault();  
    const nameData = `name=${name.value}`;
    const yearData = `year=${year.value}`;
    let ans ='?'
    if (name.value.trim() !== "") {
        ans = ans + nameData;
    }
    if (name.value.trim() !== "" && year.value > 0) {
        ans = ans + "&" + yearData;
    }
    if (name.value.trim() === "" && year.value >0) {
        ans = ans + yearData;
    }
    const text = sharableUrl.innerText;
    sharableUrl.innerText = text + ans;
   
}
