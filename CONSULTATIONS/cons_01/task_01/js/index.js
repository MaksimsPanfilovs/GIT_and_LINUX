const form = document.getElementById("name-form");
const result = document.getElementById("result");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    // const name = event.target.name.value;
    const nameIput = form.elements["name"].value;
    console.log(nameIput);
    loadGender(nameIput);
})

async function loadGender(nameIput) {
    const res = await fetch(`https://api.genderize.io?name=${nameIput}`);
    const obj = await res.json();
    const {name, gender, probability} = obj;
    const probabilityPercent = (probability * 100).toFixed(2);
    result.textContent = `Имя: ${name}, Пол: ${gender}, С вероятностью ${probability}%`;
}

