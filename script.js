
    // Ano automático no rodapé
    document.getElementById("year").textContent = new Date().getFullYear();

    // Scroll suave ao clicar no menu / botões
    function smoothScrollTo(selector) {
      const el = document.querySelector(selector);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }

    document.querySelectorAll("[data-scroll]").forEach(link => {
      link.addEventListener("click", () => {
        const target = link.getAttribute("data-scroll");
        smoothScrollTo(target);

        // Fecha menu mobile
        const nav = document.getElementById("navLinks");
        if (nav.classList.contains("open")) nav.classList.remove("open");
      });
    });

    // Botão de WhatsApp no topo
    document.getElementById("navWhatsapp").addEventListener("click", () => {
      window.open("https://wa.me/5599999999999?text=Olá%20Ana%20Carla%2C%20quero%20agendar%20uma%20consulta.", "_blank");
    });

    // Menu hambúrguer (mobile)
    document.getElementById("hamburger").addEventListener("click", () => {
      const nav = document.getElementById("navLinks");
      nav.classList.toggle("open");
    });

    // Animação fade-in ao rolar
    const fadeEls = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => observer.observe(el));

    // Botão "Enviar intenção" só mostra um aviso
    document.getElementById("fakeSubmit").addEventListener("click", () => {
      alert("Para receber retorno rápido, chame diretamente no WhatsApp de Ana Carla usando o botão ao lado.");
    });
