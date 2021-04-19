const modalRevenue = document.querySelector(".modalRevenue")
const revenues = document.querySelectorAll(".revenue")


for ( let revenue of revenues ) {

    revenue.addEventListener("click", () => {
        modalRevenue.classList.add("active")
   
        const imgId = revenue.getAttribute("id")
        modalRevenue.querySelector("img").src = `../images/${imgId}.jpg`

        const titleModal = revenue.querySelector("h3")
        modalRevenue.querySelector(".modalContent h3").innerHTML = titleModal.textContent

        const infoRevenue = revenue.querySelector("p")
        modalRevenue.querySelector(".modalContent p").innerHTML = infoRevenue.textContent

    })
}

document.querySelector(".closeModal").addEventListener("click", () => {
    modalRevenue.classList.remove("active")
    modalRevenue.querySelector("img").src = ""
    modalRevenue.querySelector(".modalContent h3").innerHTML = ""
    modalRevenue.querySelector(".modalContent p").innerHTML = ""
})




