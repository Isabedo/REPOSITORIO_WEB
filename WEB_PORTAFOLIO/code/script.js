const buttonTheme = document.querySelectorAll('.change-theme');
const buttonLenguage = document.querySelectorAll('.change-lenguage');
const hamburguesa = document.getElementById('hamburguesa');
const menuFullscreen = document.getElementById('menu-fullscreen');
const menuClose = document.getElementById('menu-close');
const starsContainer = document.getElementById('stars');


let currentLanguage = 'es';



// Cierra al hacer clic en cualquier link
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
        menuFullscreen.classList.remove('abierto');
    });
});
for (let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size = Math.random() * 2.5 + 0.5; // tamaño entre 0.5px y 3px

    star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        top: ${Math.random() * 100}%;    /* posición Y aleatoria */
        left: ${Math.random() * 100}%;   /* posición X aleatoria */
        --d: ${2 + Math.random() * 4}s;  /* duración animación aleatoria */
        animation-delay: ${Math.random() * 4}s;
        opacity: ${Math.random() * 0.5 + 0.1};
    `;

    starsContainer.appendChild(star);
}

buttonTheme.forEach(btn => {
    btn.addEventListener('click', () => {
        if (document.body.classList.contains('light-theme')) {
            btn.textContent = '☼';
            document.body.classList.remove('light-theme');
        } else {
            btn.textContent = '☾';
            document.body.classList.add('light-theme');

        }
    });
});

buttonLenguage.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent === '🇪🇸-') {
            btn.textContent = 'EN-';
            currentLanguage = 'es';
            changeLenguage(currentLanguage);
        } else {
            btn.textContent = '🇪🇸-';
            currentLanguage = 'en';
            changeLenguage(currentLanguage);
        }
    });
});

const traducciones = {
    es: {
        home: "Inicio",
        projects: "Proyectos",
        about: "Sobre mí",
        contact: "Contáctame",
        abilitie_home_1: "✦ PROGRAMADORA ✦",
        abilitie_home_2: "Arte conceptual",
        desc_home: "Creo juegos e historias interactivas — programando la lógica, dibujando los personajes y animando los mundos que los hacen cobrar vida.",
        desc_draws: "Personajes/ criaturas",
        desc_programming: "Programación",
        desc_animacion2d: "Animación 2D hecha en After Effects, con personajes y fondos totalmente originales",
        desc_2d_: "Proyectos de animación 2D tanto universitarios como personales",
        name_2d: "Todo lo que no dijimos",
        desc_animacion3d: "Animación y modelado 3D",
        desc_3D_: "Proyectos de animación y modelado 3D universitarios y personales",
        verMas: "Ver proyectos",
        desc_about_me:"Soy estudiante de comunicación y entretenimiento digital de 5to semestre. Me apasiona el desarrollo de videojuegos y la creación de experiencias interactivas. Con habilidades en programación, arte conceptual y animación, me esfuerzo por crear historias que conecten con los jugadores a nivel emocional y a mejorar constantenemnte mis conocimientos. Estoy emocionada por seguir creciendo en esta industria y contribuir con mi creatividad y dedicación a proyectos innovadores.",
        tools: "Herramientas",
        abilities: "Habilidades",
        desc_abilities: "Programación, diseño de persoanjes, animación 2d y 3D,  ",
        experience: "Experiencia",
        desc_experience: "Actualmente sin experiencia profesional",
        studies: "Estudios",
        desc_studies: "- Tecnica en desarrollo de software en el Sena. / Comunicación y entretenimiento digital en la universidad de Medellín.",
        contact_me: "Trabajemos juntos",
        desc_form: "Si estás buscando apoyo de programación o arte 2D y 3D en tu proyecto, no dudes en contactarme. Siempre estoy abierta a explorar nuevas ideas y ver dónde puedo contribuir. Ya sea que estés en las primeras etapas de desarrollo o profundamente en producción, me encantaría conocer más sobre tu proyecto y cómo podría ayudarte.",
        name: "Nombre*",
        LastName: "Apellido",
        email: "Correo electrónico*",
        message: "Mensaje*",
        send: "Enviar",
        footer: "© 2026 Isabela — Portafolio universitario",
        process: "En desarrollo",
        desc_development: "Este proyecto está en camino. Vuelve pronto para verlo.",
        see: "Ver proyecto",
        title_projects: "✦ Portafolio ✦",
        desc_programming_: "Proyectos de programación universitarios y personales",
        desc_rem: "Juego 2D plataformero estilo Metroidvania",
        rem: "R.E.M: Los fragmentos de Milo",
        desc_pong: "Recreación del famoso juego PONG como práctica de programación",
        desc_coming_soon: "Próximamente",
        desc_memories: "Juego realizado en Unity para mi primera Game Jam, con temática de máscaras",
        desc_animacion2d_: "Animación 2D",
        desc_animacion3d: "Animación 3D con tematica de E-sports. Personajes y ambiente totalmente propios y originales.",
        desc_tardis: "Render 3D inspirado en la máquina del tiempo del Doctor Who",
        desc_jarrones: "Render 3D de práctica haciendo uso de distintas técnicas de texturización",
        jarrones: "Jarrones",

    },
    en: {
        home: "Home",
        projects: "Projects",
        about: "About Me",
        contact: "Contact Me",
        abilitie_home_1: "✦ GAME PROGRAMMER ✦",
        abilitie_home_2: "Concept Art",
        desc_home: "I create games and interactive stories — programming the logic, drawing the characters, and animating the worlds that bring them to life.",
        verMas: "See projects",
        desc_draws: "Characters/Creatures",
        desc_programming: "Programming",
        desc_animacion2d_: "2D Animation",
        desc_animacion3d: "3D Animation",
        desc_3D_: "University and personal 3D animation and modeling projects",
        desc_about_me: "I am a 5th semester student of communication and digital entertainment. I am passionate about game development and creating interactive experiences. With skills in programming, concept art, and animation, I strive to create stories that emotionally connect with players and to constantly improve my knowledge. I am excited to continue growing in this industry and contribute with my creativity and dedication to innovative projects.",
        tools: "Tools",
        abilities: "Abilities",
        desc_abilities: "Programming, character design, 2D and 3D animation,  ",
        experience: "Experience",
        desc_experience: "Currently without professional experience",
        studies: "Studies",
        desc_studies: " Software development technician at Sena. -Communication and digital entertainment at the University of Medellín.",
        contact_me: "Let's work together",
        name: "Name*",
        LastName: "Last Name",
        email: "Email*",
        message: "Message*",
        send: "Send",
        desc_form: "If you’re looking for a programmer or a 2D and 3D artist support on your project, feel free to reach out. I’m always open to exploring new ideas and seeing where I can contribute. Whether you're in early development or deep into production, I’d be glad to learn more about your project and how I might be able to help.",
        footer: "© 2026 Isabela — University Portfolio",
        process: "In development",
        see: "See project",
        desc_development: "This project is on the way. Check back soon to see it.",
        title_projects: "✦ Portfolio ✦",
        desc_programming_: "University and personal programming projects",
        desc_coming_soon: "Coming soon",
        rem: "R.E.M: The fragments of Milo",
        desc_rem: "2D platformer game in the Metroidvania style",
        desc_pong: "Recreation of the classic PONG game as a programming practice",
        desc_memories: "Game developed in Unity for my first Game Jam, themed around masks",
        desc_animacion2d: "2D animation made in After Effects, with completely original characters and backgrounds",
        name_2d: "All that we didn't say",
        desc_animacion3d: "3D animation with an E-sports theme. Fully original characters and environment.",
        desc_tardis: "3D render inspired by the Doctor Who time machine",
        desc_jarrones: "3D render using different texturing techniques",
        jarrones: "Vases",
        desc_2d_: "2D animation projects both university and personal",

    }
};

function changeLenguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (traducciones[lang][key]) {
            el.textContent = traducciones[lang][key];
        }
    });
}


hamburguesa.addEventListener('click', () => {
    menuFullscreen.classList.add('abierto');
});

menuClose.addEventListener('click', () => {
    menuFullscreen.classList.remove('abierto');
});