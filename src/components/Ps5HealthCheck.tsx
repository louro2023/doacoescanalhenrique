import React, { useState } from 'react';
import { Activity, AlertTriangle, CheckCircle, Flame, HelpCircle, RotateCcw, Wrench } from 'lucide-react';

interface QuestionState {
  model: string;
  orientation: string;
  fanNoise: string;
  lastCleaned: string;
}

export const Ps5HealthCheck: React.FC = () => {
  const [answers, setAnswers] = useState<QuestionState>({
    model: 'fat_early',
    orientation: 'vertical',
    fanNoise: 'medium',
    lastCleaned: 'over_year'
  });

  const [hasEvaluated, setHasEvaluated] = useState(false);

  const calculateRisk = () => {
    let riskScore = 0;
    
    // Model risk
    if (answers.model === 'fat_early') riskScore += 3;
    else if (answers.model === 'fat_late') riskScore += 2;
    else riskScore += 1;

    // Orientation risk
    if (answers.orientation === 'vertical') riskScore += 3; // vertical + liquid metal gravity effect!
    else riskScore += 1;

    // Noise risk
    if (answers.fanNoise === 'airplane') riskScore += 4;
    else if (answers.fanNoise === 'medium') riskScore += 2;
    else riskScore += 0;

    // Cleaning risk
    if (answers.lastCleaned === 'never') riskScore += 4;
    else if (answers.lastCleaned === 'over_year') riskScore += 3;
    else riskScore += 0;

    return riskScore;
  };

  const riskScore = calculateRisk();

  const getDiagnosis = () => {
    if (riskScore >= 10) {
      return {
        level: 'Alerta Vermelho: Risco Crítico de Apagão Térmico',
        color: 'text-rose-400',
        badgeBg: 'bg-rose-950/70 border-rose-800 text-rose-300',
        action: 'Urgente: Não continue jogando games pesados (como Spider-Man 2 ou Cyberpunk) antes de fazer a revisão!',
        tip: 'Seu PS5 provavelmente está com os dutos da fonte de alimentação entupidos de poeira e o metal líquido escorrido para a parte inferior do processador devido à gravidade na posição vertical.',
        savedValue: 'R$ 450,00'
      };
    } else if (riskScore >= 6) {
      return {
        level: 'Alerta Amarelo: Necessita Manutenção Preventiva',
        color: 'text-amber-400',
        badgeBg: 'bg-amber-950/70 border-amber-800 text-amber-300',
        action: 'Recomendado: Faça a limpeza básica das aletas e dos coletores de pó nas próximas 2 semanas.',
        tip: 'Retire as tampas laterais (faceplates) e aspire os dois coletores triangulares de pó. Se o barulho do cooler continuar, prepare a chave Torx T8 para remover a grade de ventilação.',
        savedValue: 'R$ 280,00'
      };
    } else {
      return {
        level: 'Status Verde: PS5 em Bom Estado',
        color: 'text-emerald-400',
        badgeBg: 'bg-emerald-950/70 border-emerald-800 text-emerald-300',
        action: 'Excelente: Continue mantendo o console arejado e limpo a cada 6 meses.',
        tip: 'Mesmo saudável, fique atento a poeira no piso do quarto e mantenha pelo menos 15cm de distância da parede para que a exaustão traseira não recicle ar quente.',
        savedValue: 'R$ 200,00'
      };
    }
  };

  const diagnosis = getDiagnosis();

  return (
    <section id="diagnostico" className="py-16 lg:py-24 bg-[#0a0e18] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00e5ff] uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span>Ferramenta Interativa do Canal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Raio-X Rápido do Seu PS5
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Descubra em 30 segundos se o seu videogame está correndo perigo ou se precisa apenas de um carinho básico.
          </p>
        </div>

        {/* Diagnostic Form & Result Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Question 1: Model */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wide">
                1. Qual é o modelo do seu console?
              </label>
              <select
                value={answers.model}
                onChange={(e) => {
                  setAnswers({ ...answers, model: e.target.value });
                  setHasEvaluated(true);
                }}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0070d1] transition-colors"
              >
                <option value="fat_early">PS5 Fat 1ª Geração (CFI-1000 - Dissipador Grande)</option>
                <option value="fat_late">PS5 Fat Revisão (CFI-1100 / CFI-1200)</option>
                <option value="slim">PS5 Slim (CFI-2000 com tampas divididas)</option>
                <option value="pro">PS5 Pro</option>
              </select>
            </div>

            {/* Question 2: Orientation */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wide">
                2. Como ele fica posicionado?
              </label>
              <select
                value={answers.orientation}
                onChange={(e) => {
                  setAnswers({ ...answers, orientation: e.target.value });
                  setHasEvaluated(true);
                }}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0070d1] transition-colors"
              >
                <option value="vertical">Em pé (Vertical com a base oficial)</option>
                <option value="horizontal">Deitado (Horizontal)</option>
              </select>
            </div>

            {/* Question 3: Noise */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wide">
                3. Como está o barulho da ventoinha?
              </label>
              <select
                value={answers.fanNoise}
                onChange={(e) => {
                  setAnswers({ ...answers, fanNoise: e.target.value });
                  setHasEvaluated(true);
                }}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0070d1] transition-colors"
              >
                <option value="quiet">Silencioso (quase imperceptível jogando)</option>
                <option value="medium">Acelera e faz zumbido em jogos pesados</option>
                <option value="airplane">Parece turbina de avião ou já desligou com aviso de calor</option>
              </select>
            </div>

            {/* Question 4: Cleaning */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wide">
                4. Quando foi a última limpeza interna?
              </label>
              <select
                value={answers.lastCleaned}
                onChange={(e) => {
                  setAnswers({ ...answers, lastCleaned: e.target.value });
                  setHasEvaluated(true);
                }}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0070d1] transition-colors"
              >
                <option value="recent">Nos últimos 6 meses</option>
                <option value="over_year">Tem mais de 1 ano que não abro</option>
                <option value="never">Nunca abri desde que comprei da loja</option>
              </select>
            </div>

          </div>

          {/* Diagnosis Result Output */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className={`p-5 rounded-xl border ${diagnosis.badgeBg} transition-all`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  {riskScore >= 10 ? (
                    <Flame className="w-5 h-5 text-rose-400 shrink-0" />
                  ) : riskScore >= 6 ? (
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  <h4 className="text-base sm:text-lg font-black tracking-tight">
                    {diagnosis.level}
                  </h4>
                </div>

                <div className="text-xs font-mono text-slate-300 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-700/80">
                  Economia potencial: <strong className="text-emerald-400">{diagnosis.savedValue}</strong>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-white mb-2">
                {diagnosis.action}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                💡 <span className="font-semibold text-slate-100">Dica da Bancada:</span> {diagnosis.tip}
              </p>

              {/* Call to Action based on diagnosis */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-slate-300">
                  Gostou da dica e quer que o canal continue produzindo vídeos salvadores?
                </span>
                <a
                  href="#doacoes"
                  className="px-4 py-2 rounded-lg bg-[#0070d1] hover:bg-[#005fb3] text-white font-bold transition-colors whitespace-nowrap shadow-sm"
                >
                  Fortalecer com R$ 2 ou R$ 5
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
