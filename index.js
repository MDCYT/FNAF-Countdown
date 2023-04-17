        // Función para obtener la diferencia de tiempo entre la fecha actual y la fecha de estreno
        function getTimeDifference() {
            const releaseDate = new Date("October 27, 2023").getTime();
            const now = new Date().getTime();
            const timeDifference = releaseDate - now;
            return timeDifference;
        }

        // Función para actualizar el contador de tiempo en español
        function updateCounterSpanish() {
            const timeDifference = getTimeDifference();

            // Calcular días, horas, minutos y segundos restantes
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Actualizar los elementos HTML con los valores calculados
            document.getElementById("days").textContent = days.toString().padStart(2, "0");
            document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
        // Actualizar las etiquetas de los elementos HTML en español
        document.getElementById("daysLabel").textContent = "Días";
        document.getElementById("hoursLabel").textContent = "Horas";
        document.getElementById("minutesLabel").textContent = "Minutos";
        document.getElementById("secondsLabel").textContent = "Segundos";
    }

    // Función para actualizar el contador de tiempo en inglés
    function updateCounterEnglish() {
        const timeDifference = getTimeDifference();

        // Calcular días, horas, minutos y segundos restantes
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Actualizar los elementos HTML con los valores calculados
        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

        // Actualizar las etiquetas de los elementos HTML en inglés
        document.getElementById("daysLabel").textContent = "Days";
        document.getElementById("hoursLabel").textContent = "Hours";
        document.getElementById("minutesLabel").textContent = "Minutes";
        document.getElementById("secondsLabel").textContent = "Seconds";
    }

    // Detectar el idioma del usuario
    const userLanguage = window.navigator.language || "en-US";
    const isSpanish = userLanguage.includes("es");

    // Actualizar el contador en español si el idioma es español, en inglés para cualquier otro idioma
    if (isSpanish) {
        setInterval(updateCounterSpanish, 1000);
         document.getElementById("title").textContent = "FNAF La Película";
          document.getElementById("subtitle").textContent = "Estreno el 27 de octubre 2023";
    } else {
        setInterval(updateCounterEnglish, 1000);
    }