const subscriptionTemplate = `
    <section class="subscriptions-section">
        <div class="subscription-card">
            <h2 class="subscription-title">ANUAL</h2>
            <button class="subscription-btn">ADQUIRIR</button>
        </div>
    </section>
`;

const main = document.getElementById("main-content");

// Esperamos a que el header exista
document.addEventListener("click", (e) => {
    if (e.target.id === "btn-suscripciones") {
        e.preventDefault();

        // Limpiamos el main
        main.innerHTML = "";

        // Mostramos suscripciones
        main.innerHTML = subscriptionTemplate;
    }
});
