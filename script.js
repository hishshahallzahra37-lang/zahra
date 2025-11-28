// SCRIPT INTERAKTIF KULINER KEDIRI

document.addEventListener("DOMContentLoaded", () => {

    // 1️⃣ Popup gambar saat diklik
    const cards = document.querySelectorAll(".card img");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const popup = document.createElement("div");
            popup.classList.add("popup-overlay");
            popup.innerHTML = `
                <div class="popup-content">
                    <img src="${card.src}" alt="${card.alt}">
                    <p>${card.alt}</p>
                    <button id="close-popup">Tutup</button>
                </div>
            `;
            document.body.appendChild(popup);

            document.getElementById("close-popup").addEventListener("click", () => {
                popup.remove();
            });
        });
    });

    // 2️⃣ Scroll animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.card');
    hiddenElements.forEach(el => observer.observe(el));

});
