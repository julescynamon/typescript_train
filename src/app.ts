const compteur = document.querySelector("#compteur");
let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
};

compteur?.addEventListener("click", increment);

// on type AlpineJS
import Alpine from "alpinejs";

Alpine.data("myComponent", function (initial: number = 0) {
    return {
        count: initial,
        increment() {
            this.count += 1;
        },
        decrement() {
            this.count -= 1;
            if (this.count < 0) {
                this.$el.style.display = none;
            }
        },
    };
});

Alpine.start();
