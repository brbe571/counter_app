let count = 0;

const counter = () => {
    document.getElementById("increment-btn").addEventListener("click", function() {
        count += 1;
        document.getElementById("count-el").innerText = count
    })
}
