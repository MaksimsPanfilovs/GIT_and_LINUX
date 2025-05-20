const button = document.getElementById("refreshButton");

const url = "https://wttr.in/Yerevan";
const params = {
    2: "",
    m: "",
    lang: "ru",
   
};

function fetchData() {
    const queryString = new URLSearchParams(params).toString();
    fetch(`${url}?${queryString}`)
        .then((response) => response.text())
        .then((pageText) => {
            const result = document.getElementById("content");
            result.innerHTML = pageText;
        });
}

button.addEventListener("click", fetchData);