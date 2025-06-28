// --- DATA FOR PROJECTS ---
const projectDetails = {
    1: { title: "Système de Surveillance IoT", description: "Ce projet consistait à développer un système complet pour la surveillance environnementale.Un microcontrôleur ESP32 est utilisé pour collecter les données de température et d'humidité. Ces données sont ensuite envoyées via Wi-Fi à une plateforme Cloud (comme Thingspeak ou un service custom) où elles sont stockées et traitées. Une application web et mobile permet de visualiser les données en temps réel sous forme de graphiques et de recevoir des alertes si les seuils sont dépassés.", tech: ["ESP32", "C++ (Arduino)", "Wi-Fi", "API REST", "Cloud IoT", "JSON"] },
    2: { title: "Voiture Autonome à Apprentissage", description: "L'objectif était de créer un robot mobile capable d'apprendre un chemin. Dans une première phase, la voiture est guidée manuellement sur un circuit marqué au sol (ligne noire). Elle enregistre la séquence de virages (gauche, droite, tout droit). Dans la seconde phase, elle peut parcourir le chemin de manière autonome. Le défi principal réside dans l'algorithme de suivi de ligne et l'optimisation du trajet pour trouver le chemin le plus court entre deux points mémorisés.", tech: ["PIC18F", "Langage C", "Capteurs Infrarouges", "Moteurs DC", "Robotique", "Algorithmes"] },
    3: { title: "Véhicule Télécommandé", description: "Développement d'un véhicule contrôlable à distance via une application mobile Android personnalisée. La communication entre le smartphone et le microcontrôleur ATmega328 (base Arduino) se fait via un module Bluetooth HC-05. Une alternative avec un module ESP8266 a aussi été explorée pour un contrôle via Wi-Fi. Des capteurs à ultrasons sont intégrés pour une fonction d'évitement d'obstacles automatique.", tech: ["ATmega328", "C++ (Arduino)", "Android Studio (Java)", "Bluetooth", "Wi-Fi", "Capteurs Ultrasons"] },
    4: { title: "Gestion d'Eau Automatisée", description: "Ce projet vise à automatiser la gestion d'un réservoir d'eau. Le système est alimenté par un petit panneau solaire, le rendant autonome en énergie. Des capteurs de niveau d'eau contrôlent une pompe pour maintenir le niveau souhaité. Le système gère également l'activation d'une électrovanne pour l'irrigation, en fonction de l'humidité du sol mesurée par un capteur dédié.", tech: ["Énergie Solaire", "Microcontrôleur", "Capteurs de Niveau", "Électrovanne", "Automatisation", "Gestion d'énergie"] },
    5: { title: "Amplificateur Audio Classe A/B", description: "Projet académique fondamental sur l'électronique de puissance. Il s'agissait de la conception, de la simulation et de la réalisation pratique d'un amplificateur audio. Le circuit combine les avantages de la classe A (faible distorsion) et de la classe B (bon rendement) pour créer un amplificateur de classe AB. Ce projet a permis d'approfondir les connaissances sur le comportement des transistors, la polarisation et la dissipation thermique.", tech: ["Électronique Analogique", "Transistors BJT", "Conception de PCB", "Simulation de Circuit", "Alimentation Symétrique"] }
};

// --- MODAL SCRIPT ---
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTech = document.getElementById('modal-tech');
const openButtons = document.querySelectorAll('.open-modal-button');
const closeButton = document.getElementById('close-modal-button');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.dataset.projectId;
        const details = projectDetails[projectId];
        
        if (details) {
            modalTitle.textContent = details.title;
            modalDescription.textContent = details.description;
            modalTech.innerHTML = details.tech.map(t => `<span class="bg-green/10 text-green px-2 py-1 rounded">${t}</span>`).join('');
            
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
            }, 10);
        }
    });
});

const closeModal = () => {
    modal.classList.add('opacity-0');
    modalContent.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 250);
};

closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// --- MOBILE MENU SCRIPT ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));

// --- SCROLL ANIMATION SCRIPT ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
