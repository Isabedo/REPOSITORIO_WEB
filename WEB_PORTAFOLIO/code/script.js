const buttonTheme = document.getElementById('change-theme');
const buttonLenguage = document.getElementById('change-lenguage');

let currentLanguage = 'es';


buttonTheme.addEventListener('click', () => {
    if (document.body.classList.contains('light-theme')) {
        buttonTheme.textContent = '☼';
        document.body.classList.remove('light-theme');
    } else {
        buttonTheme.textContent = '☾';
        document.body.classList.add('light-theme');

    }
});

buttonLenguage.addEventListener('click', () => {
    if (buttonLenguage.textContent === '🇪🇸-') {
        buttonLenguage.textContent = 'EN-';
        currentLanguage = 'es';
        changeLenguage(currentLanguage);
    } else {
        buttonLenguage.textContent = '🇪🇸-';
        currentLanguage = 'en';
        changeLenguage(currentLanguage);
    }
});

const traducciones = {
    es: {
        inicio: "Inicio",
        programacion: "Programación",
        arte: "Arte 2D y 3D",
        saludo: "Hola, mi nombre es Isabela",
        descripcion: "Soy Estudiante de comunicación y entretenimiento digital",
        bienvenida: "Bienvenidos a mi portafolio. Aquí podrán encontrar algunos de mis proyectos realizados durante mi carrera universitaria: programación, animación 2D y 3D.",
        verMas: "Ver más",
        footer: "© 2025 Isabela — Portafolio universitario",
        desc_rem: "Juego 2D plataformero estilo Metroidvania",
        desc_pong: "Recreación del famoso juego PONG como práctica de programación",
        desc_memories: "Juego realizado en Unity para mi primera Game Jam, con temática de máscaras",
        desc_animacion2d: "Animación 2D",
        desc_animacion3d: "Animación 3D",
        desc_tardis: "Render 3D inspirado en la máquina del tiempo del Doctor Who",
        desc_jarrones: "Render 3D haciendo uso de distintas técnicas de texturización"
    
    },
    en: {
        inicio: "Home",
        programacion: "Programming",
        arte: "2D and 3D Art",
        saludo: "Hi, my name is Isabela",
        descripcion: "I am a Digital Communication and Entertainment student",
        bienvenida: "Welcome to my portfolio. Here you can find some of the projects I have created during my university studies: programming, 2D and 3D animation.",
        verMas: "See more",
        footer: "© 2025 Isabela — University Portfolio",
        desc_rem: "2D platformer game in the Metroidvania style",
        desc_pong: "Recreation of the classic PONG game as a programming practice",
        desc_memories: "Game developed in Unity for my first Game Jam, themed around masks",
        desc_animacion2d: "2D animation",
        desc_animacion3d: "3D animation",
        desc_tardis: "3D render inspired by the Doctor Who time machine",
        desc_jarrones: "3D render using different texturing techniques"

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