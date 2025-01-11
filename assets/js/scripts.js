document.addEventListener('DOMContentLoaded', function() {
    const hospitals = [
        {
            img: 'assets/img/hospital-aldeota.jpg',
            name: 'Hospital Aldeota',
            location: 'Av. Pe. Antônio Tomás, 2056 - Aldeota - Fortaleza - CE'
        },
        {
            img: 'assets/img/hospital-prudente.png',
            name: 'Hospital e Maternidade Antonio Prudente',
            location: 'Avenida Aguanambi, 1827 - Bairro de Fátima - Fortaleza - CE'
        },
        {
            img: 'assets/img/hospital-eugenia-pinheiro.png',
            name: 'Hospital e Maternidade Eugênia Pinheiro',
            location: 'Av. Heráclito Graça, 500 - Centro - Fortaleza - CE'
        },
        {
            img: 'assets/img/luis-franca.png',
            name: 'Hospital Luís França',
            location: 'Av. Heráclito Graça, 100 - Centro - Fortaleza - CE'
        },
        {
            img: 'assets/img/padre-cicero.png',
            name: 'Hospital Geral e Maternidade Padre Cícero',
            location: 'Avenida Padre Cícero, 2481 - Triângulo - Juazeiro do Norte - CE'
        },
        {
            img: 'assets/img/ana-lima.png',
            name: 'Hospital Ana Lima',
            location: 'Avenida do Contorno, s/nº – Pajuçara - Maracanaú - CE'
        },
        {
            img: 'assets/img/mario-barreto2.png',
            name: 'Pronto Atendimento Mário Barreto',
            location: 'Rua São Raimundo, 1781 - Cambeba - Fortaleza - CE'
        },
        {
            img: 'assets/img/pronto-atendimento-parangaba.png',
            name: 'Pronto Atendimento Parangaba',
            location: 'Av. Godofredo Maciel, 88 - Parangaba - Fortaleza - CE'
        },
        {
            img: 'assets/img/pronto-atendimento-bezerra.png',
            name: 'Pronto Atendimento Bezerra de Menezes',
            location: 'Rua Ribeiro da Silva, 727 - Monte Castelo - Fortaleza - CE'
        },
        {
            img: 'assets/img/pronto-atendimento-pacajus.png',
            name: 'Pronto Atendimento Pacajus',
            location: 'Rua Naide Costa Menezes, 525 - Centro - Pacajus - CE'
        },
        {
            img: 'assets/img/pronto-atendimento-pecem.png',
            name: 'Pronto Atendimento Pecém',
            location: 'Avenida Antônio Brasileiro , 06 - Centro - Pecém - CE'
        },
        {
            img: 'assets/img/clinica-aldeota.png',
            name: 'Clínica Aldeota',
            location: 'Av. Senador Virgílio Távora, 1815 - Aldeota - Fortaleza - CE'
        },
        {
            img: 'assets/img/clinica-antonio-sales.png',
            name: 'Clínica Antônio Sales',
            location: 'Av. Antonio Sales, 2238 - Dionísio Torres - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Barão de Studart',
            location: 'Av. Barão de Studart, 2260 - Dionísio Torres - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Conjunto Ceará',
            location: 'Av. Ministro Albuquerque Lima, 1421 - Conjunto Ceará 3ª etapa - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Dom Manuel',
            location: 'Avenida Dom Manuel, 1395 - Centro - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Francisco Sá',
            location: 'Av. Francisco Sá, 5271 - Álvaro Weyne - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Heráclito Graça',
            location: 'Av. Heráclito Graça, 500b - Centro - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Isaac Newton',
            location: 'Rua Visconde de Mauá, 1593 - Meireles - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Joaquim Távora',
            location: 'Avenida Antonio Sales, 60 - Joaquim Távora - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica José Walter',
            location: 'Avenida João Araújo de Lima, 591 - José Walter - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Lobo Filho',
            location: 'Rua João Lobo Filho, 72 - Fátima - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Messejana',
            location: 'Rua Tenente Jurandi Alencar, 234 - Messejana - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Monte Castelo',
            location: 'R. Ribeiro da Silva, 761 - São Gerardo - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Montese',
            location: 'Av.Gomes de Matos, 1737 - Montese - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Pereira Filgueiras',
            location: 'Rua Pereira Filgueiras, 825 - Centro - Meireles - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Santos Dumont',
            location: 'Av. Santos Dumont, 1058 - Aldeota - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica São Gerardo',
            location: 'Av. Bezerra de Menezes, 981 - São Gerardo - Fortaleza - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Padre Cícero',
            location: 'Rua Padre Cícero, 3996 - São José - Juazeiro do Norte - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Maracanaú',
            location: 'Avenida Parque Comercial , S/N - Distrito Industrial - Maracanaú - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Hapvida NotreDame Intermédica Pecém',
            location: 'Rua Francisco Câncio, 524 - Pecém (CE), 524 - Pecém - CE'
        },
        {
            img: 'assets/img/.png',
            name: 'Clínica Pecém',
            location: 'Av. Antônio Brasileiro, S/N - Pecém - São Gonçalo do Amarante - CE'
        }
    ];

    let currentIndex = 0;

    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const hospitalImg = document.getElementById('hospital-img');
    const hospitalName = document.getElementById('hospital-name');
    const hospitalLocation = document.getElementById('hospital-location');

    if (nextButton && prevButton && hospitalImg && hospitalName && hospitalLocation) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % hospitals.length;
            updateHospitalInfo();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + hospitals.length) % hospitals.length;
            updateHospitalInfo();
        });

        function updateHospitalInfo() {
            hospitalImg.src = hospitals[currentIndex].img;
            hospitalName.textContent = hospitals[currentIndex].name;
            hospitalLocation.textContent = hospitals[currentIndex].location;
        }

        
        updateHospitalInfo();
    }

    // AOS (Animate On Scroll) Library initialization
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
    });

    // Menu toggle e navegação suave
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('hidden');
        });
    }

    // Scroll suave para as seções
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }

            if (window.innerWidth <= 768) {
                nav.classList.add('hidden');
            }
        });
    });
});