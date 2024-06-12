document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
    const text = "soy Arnau Argullós";
    const speed = 100; // Velocidad de escritura en milisegundos

    function typeWriter() {
        let i = 0;
        const typingInterval = setInterval(() => {
            document.querySelector("#typewriter .typewriter-text").textContent += text.charAt(i);
            i++;
            if (i > text.length - 1) {
                clearInterval(typingInterval);
                setTimeout(eraseText, 1000); // Espera 1 segundo antes de borrar el texto
            }
        }, speed);
    }

    function eraseText() {
        let i = text.length - 1;
        const eraseInterval = setInterval(() => {
            const newText = text.substring(0, i);
            document.querySelector("#typewriter .typewriter-text").textContent = newText;
            i--;
            if (i < 0) {
                clearInterval(eraseInterval);
                setTimeout(typeWriter, 1000); // Espera 1 segundo antes de comenzar a escribir de nuevo
            }
        }, speed);
    }

    typeWriter(); // Comienza la animación

//Skills
document.addEventListener("DOMContentLoaded", function() {
    const skillLevels = document.querySelectorAll(".skill-level");
    const skillsLink = document.getElementById("skills-link");
    const skillsSection = document.getElementById("skills");

    function resetAndAnimateSkills() {
        // Reiniciar la animación
        skillLevels.forEach(skill => {
            skill.style.transition = 'none';
            skill.style.width = '0';
        });

        // Forzar un reflujo/repaint para que los cambios surtan efecto
        skillLevels.forEach(skill => skill.offsetWidth);

        // Ejecutar la animación
        setTimeout(() => {
            skillLevels.forEach(skill => {
                skill.style.transition = 'width 1s ease-in-out';
                const level = skill.getAttribute("data-level");
                skill.style.width = level;
            });
        }, 100); // Ajusta el retraso si es necesario
    }

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resetAndAnimateSkills();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);

    // Click event for the menu link
    skillsLink.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
        
        setTimeout(() => {
            resetAndAnimateSkills();
        }, 600); // Ajusta el retraso si es necesario
    });
});
