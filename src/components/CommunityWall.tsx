import React, { useState, useEffect } from 'react';
import { MessageSquare, Heart, Send, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';
import { INITIAL_TESTIMONIALS, TestimonialMessage } from '../data/donations';

const LOCAL_STORAGE_KEY = 'canal_do_leigo_testimonials_v1';

export const CommunityWall: React.FC = () => {
  const [messages, setMessages] = useState<TestimonialMessage[]>([]);
  const [name, setName] = useState('');
  const [ps5Model, setPs5Model] = useState('PS5 Fat');
  const [donationAmount, setDonationAmount] = useState('R$ 5,00');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setMessages(JSON.parse(stored));
      } else {
        setMessages(INITIAL_TESTIMONIALS);
      }
    } catch {
      setMessages(INITIAL_TESTIMONIALS);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newMessage: TestimonialMessage = {
      id: Date.now().toString(),
      author: name.trim(),
      handle: `@${name.toLowerCase().replace(/\s+/g, '_')}`,
      date: 'Agora mesmo',
      amount: donationAmount,
      message: text.trim(),
      ps5Model
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.warn('Failed to save to localStorage', err);
    }

    setText('');
    setName('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="comunidade" className="py-16 lg:py-24 bg-[#07090e] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00e5ff] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></span>
            <span>Mural dos Leigos</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Comunidade Ativa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Quem Já Salvou o Console e Apoiou
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Veja os recados de quem assistiu aos tutoriais, perdeu o medo de abrir o videogame e fortaleceu a bancada do canal!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Messages Grid (Left / Center) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {messages.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{item.author}</span>
                        <UserCheck className="w-3.5 h-3.5 text-[#00e5ff]" />
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {item.handle} · {item.date}
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#0070d1]/20 border border-[#0070d1]/40 text-[#00e5ff]">
                      {item.amount}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                    “{item.message}”
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Console: {item.ps5Model}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Leigo Consciente
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Leave a Message Form (Right Column) */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0b1222] border border-slate-800 p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1">
              <MessageSquare className="w-4 h-4 text-[#00e5ff]" />
              Deixar um Recado
            </h3>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Fez um Pix pro canal ou salvou seu PS5 com as nossas dicas? Conte sua história para incentivar outros leigos!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-300 mb-1">
                  Seu Nome ou Nick:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Carlos Gamer"
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#0070d1]"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">
                  Qual é o seu modelo de PS5?
                </label>
                <select
                  value={ps5Model}
                  onChange={(e) => setPs5Model(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#0070d1]"
                >
                  <option value="PS5 Fat Com Disco">PS5 Fat Com Disco</option>
                  <option value="PS5 Fat Digital">PS5 Fat Digital</option>
                  <option value="PS5 Slim Com Leitor">PS5 Slim Com Leitor</option>
                  <option value="PS5 Slim Digital">PS5 Slim Digital</option>
                  <option value="PS5 Pro">PS5 Pro</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">
                  Valor do Apoio enviado (Nubank):
                </label>
                <select
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#0070d1]"
                >
                  <option value="R$ 2,00">R$ 2,00 (O Cafezinho)</option>
                  <option value="R$ 5,00">R$ 5,00 (Doutor do PS5)</option>
                  <option value="R$ 10,00">R$ 10,00 (Parceria Forte)</option>
                  <option value="R$ 20,00+">R$ 20,00+ (Patrão)</option>
                  <option value="Gratidão">Apenas Agradecimento</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">
                  Sua Mensagem:
                </label>
                <textarea
                  required
                  rows={3}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Ex: Segui o vídeo de troca do metal líquido e meu PS5 parou de desligar! Valeu mestre..."
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#0070d1] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-[#0070d1] hover:bg-[#005fb3] text-white font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Publicar Recado no Mural</span>
              </button>

              {submitted && (
                <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-center animate-fadeIn">
                  Recado adicionado ao mural! Muito obrigado pelo apoio, Leigo!
                </div>
              )}
            </form>

            <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400 text-center">
              Ainda não doou?{' '}
              <a href="#doacoes" className="text-[#00e5ff] font-bold hover:underline">
                Acesse os links do Nubank aqui
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
