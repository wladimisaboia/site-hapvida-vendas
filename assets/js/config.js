// Configuração de Promoções
// Para ativar/desativar promoções, altere os valores abaixo para true/false

const PROMOTION_CONFIG = {
    // Promoção "Mais Vendido" no plano completo
    mostSoldBadge: {
        enabled: false, // Altere para true para ativar a promoção
        text: "+ VENDIDO",
        planId: "plano-completo", // ID do plano que receberá a promoção
        badgeClass: "bg-yellow-400 text-white px-3 py-1 rounded-full mb-4 inline-block absolute top-0 right-0 transform translate-x-2 -translate-y-2"
    },
    
    // Você pode adicionar outras promoções aqui
    // Exemplo de promoção de desconto:
    discountBadge: {
        enabled: false,
        text: "30% OFF",
        planId: "plano-ambulatorial",
        badgeClass: "bg-red-500 text-white px-3 py-1 rounded-full mb-4 inline-block absolute top-0 right-0 transform translate-x-2 -translate-y-2"
    }
};

// Função para aplicar as promoções baseadas na configuração
function applyPromotions() {
    // Remove todas as promoções existentes primeiro
    document.querySelectorAll('.promotion-badge').forEach(badge => {
        badge.remove();
    });

    // Aplica as promoções ativas
    Object.keys(PROMOTION_CONFIG).forEach(promoKey => {
        const promo = PROMOTION_CONFIG[promoKey];
        if (promo.enabled) {
            const planElement = document.getElementById(promo.planId);
            if (planElement) {
                const badge = document.createElement('span');
                badge.className = promo.badgeClass + ' promotion-badge';
                badge.textContent = promo.text;
                
                // Adiciona a badge ao plano
                const planCard = planElement.querySelector('.bg-white');
                if (planCard) {
                    planCard.style.position = 'relative';
                    planCard.appendChild(badge);
                }
            }
        }
    });
}

// Aplica as promoções quando a página carrega
document.addEventListener('DOMContentLoaded', applyPromotions);
