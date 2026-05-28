function startActivity() {
  alert("✅ Atividade iniciada!\n\nRespiração guiada ativada por 4 minutos.");
}

function showSection(section) {
  if (section === 'monitor') {
    alert("📊 Monitoramento em Tempo Real\n\n(Protótipo - Gráficos seriam exibidos aqui)");
  } else if (section === 'report') {
    alert("📈 Relatório Semanal\n\nAnsiedade: 78% de estabilidade\n3 crises detectadas");
  } else if (section === 'suggestions') {
    alert("💡 Sugestões da IA\n\n1. Pausa Sensorial\n2. Jogo Calmo\n3. Rotina de Sono");
  }
}

// Simulação de atualização em tempo real
setInterval(() => {
  console.log("🔄 Atualizando sensores...");
}, 5000);