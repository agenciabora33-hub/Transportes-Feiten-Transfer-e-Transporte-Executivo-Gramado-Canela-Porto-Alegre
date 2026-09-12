import React, { useState } from 'react';
import { TransferQuoteState } from '../types';
import { buildWhatsAppQuoteUrl } from '../data/transportesData';
import {
  X,
  MapPin,
  Calendar,
  Clock,
  Users,
  Luggage,
  Baby,
  MessageCircle,
  ArrowRight,
  PlaneTakeoff,
  Sparkles,
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<TransferQuoteState>({
    origin: 'Aeroporto de Porto Alegre (POA)',
    destination: 'Gramado (Hotel / Pousada)',
    date: '',
    time: '',
    passengers: 2,
    luggage: 2,
    childSeat: false,
    childSeatType: 'none',
    roundTrip: true,
    returnDate: '',
    returnTime: '',
    notes: '',
  });

  if (!isOpen) return null;

  const popularLocations = [
    'Aeroporto de Porto Alegre (POA)',
    'Aeroporto de Caxias do Sul (CXJ)',
    'Gramado (Centro / Hotéis)',
    'Canela (Centro / Pousadas)',
    'Bento Gonçalves (Vale dos Vinhedos)',
    'Garibaldi',
    'Nova Petrópolis',
    'Cambará do Sul (Cânions)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppQuoteUrl(form);
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      id="quote-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        id="quote-modal-content"
        className="luxury-card rounded-2xl w-full max-w-lg p-6 sm:p-7 relative border border-[#D4AF37]/40 bg-[#161619] shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          id="quote-modal-close-btn"
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800"
          aria-label="Fechar Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FCF6BA]">
            Transportes Feiten • Cotação Express
          </span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
          Simular Transfer Executivo
        </h3>
        <p className="text-xs text-zinc-400 mb-6">
          Preencha os dados e receba disponibilidade imediata pelo WhatsApp com valor fechado e sem surpresas.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          {/* RoundTrip Switcher */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-[#0D0D0D] rounded-xl border border-zinc-800">
            <button
              type="button"
              onClick={() => setForm((p) => ({ ...p, roundTrip: true }))}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                form.roundTrip
                  ? 'bg-[#18181B] text-[#FCF6BA] border border-[#D4AF37]/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Ida e Volta
            </button>
            <button
              type="button"
              onClick={() => setForm((p) => ({ ...p, roundTrip: false }))}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                !form.roundTrip
                  ? 'bg-[#18181B] text-[#FCF6BA] border border-[#D4AF37]/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Somente Ida
            </button>
          </div>

          {/* Origin */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Local de Partida (Origem)</span>
            </label>
            <select
              value={form.origin}
              onChange={(e) => setForm((p) => ({ ...p, origin: e.target.value }))}
              className="w-full bg-[#0D0D0D] border border-zinc-700 rounded-xl px-3 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
            >
              {popularLocations.map((loc) => (
                <option key={loc} value={loc} className="bg-zinc-900 text-white">
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Destination */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Destino</span>
            </label>
            <select
              value={form.destination}
              onChange={(e) => setForm((p) => ({ ...p, destination: e.target.value }))}
              className="w-full bg-[#0D0D0D] border border-zinc-700 rounded-xl px-3 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
            >
              {popularLocations.map((loc) => (
                <option key={loc} value={loc} className="bg-zinc-900 text-white">
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-zinc-300 mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#D4AF37]" />
                <span>Data</span>
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                className="w-full bg-[#0D0D0D] border border-zinc-700 rounded-xl px-2.5 py-2 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-zinc-300 mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#D4AF37]" />
                <span>Horário</span>
              </label>
              <input
                type="time"
                value={form.time}
                onChange={(e) => setForm((p) => ({ ...p, time: e.target.value }))}
                className="w-full bg-[#0D0D0D] border border-zinc-700 rounded-xl px-2.5 py-2 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* Return Date / Time if Round Trip */}
          {form.roundTrip && (
            <div className="grid grid-cols-2 gap-3 p-2.5 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <div>
                <label className="block text-[11px] font-medium text-zinc-300 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#FCF6BA]" />
                  <span>Data Retorno</span>
                </label>
                <input
                  type="date"
                  value={form.returnDate}
                  onChange={(e) => setForm((p) => ({ ...p, returnDate: e.target.value }))}
                  className="w-full bg-[#0D0D0D] border border-zinc-700 rounded-xl px-2.5 py-2 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-zinc-300 mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#FCF6BA]" />
                  <span>Horário Voo Retorno</span>
                </label>
                <input
                  type="time"
                  value={form.returnTime}
                  onChange={(e) => setForm((p) => ({ ...p, returnTime: e.target.value }))}
                  className="w-full bg-[#0D0D0D] border border-zinc-700 rounded-xl px-2.5 py-2 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>
          )}

          {/* Passengers & Luggage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-300 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Passageiros</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, passengers: Math.max(1, p.passengers - 1) }))}
                  className="w-6 h-6 rounded bg-zinc-800 text-white flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="font-semibold text-white">{form.passengers}</span>
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, passengers: Math.min(7, p.passengers + 1) }))}
                  className="w-6 h-6 rounded bg-zinc-800 text-white flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-300 flex items-center gap-1">
                <Luggage className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Malas</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, luggage: Math.max(1, p.luggage - 1) }))}
                  className="w-6 h-6 rounded bg-zinc-800 text-white flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="font-semibold text-white">{form.luggage}</span>
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, luggage: Math.min(8, p.luggage + 1) }))}
                  className="w-6 h-6 rounded bg-zinc-800 text-white flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Child Seat Checkbox */}
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="flex items-center justify-between">
              <label
                htmlFor="modalChildSeatCheck"
                className="cursor-pointer text-xs text-zinc-200 flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="modalChildSeatCheck"
                  checked={form.childSeat}
                  onChange={(e) =>
                    setForm((p) => ({
                      ...p,
                      childSeat: e.target.checked,
                      childSeatType: e.target.checked ? 'toddler' : 'none',
                    }))
                  }
                  className="w-4 h-4 rounded text-[#D4AF37] focus:ring-[#D4AF37] bg-zinc-800 border-zinc-700"
                />
                <span className="font-medium">Cadeirinha Infantil? (Inclusa Grátis)</span>
              </label>
              <Baby className="w-4 h-4 text-[#D4AF37]" />
            </div>

            {form.childSeat && (
              <div className="mt-2.5 pt-2 border-t border-zinc-800 grid grid-cols-3 gap-1.5">
                {[
                  { id: 'baby', label: 'Bebê Conforto' },
                  { id: 'toddler', label: 'Cadeirinha' },
                  { id: 'booster', label: 'Assento Booster' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, childSeatType: type.id as any }))}
                    className={`py-1 px-2 rounded-lg text-center text-xs transition-all ${
                      form.childSeatType === type.id
                        ? 'bg-[#D4AF37] text-black font-bold'
                        : 'bg-zinc-800 text-zinc-300'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notes or flight number */}
          <div>
            <label className="block text-[11px] font-medium text-zinc-300 mb-1">
              Número do Voo ou Observações Adicionais:
            </label>
            <input
              type="text"
              placeholder="Ex: Voo Latam LA3456 / Hotel Ritta Höppner"
              value={form.notes}
              onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
              className="w-full bg-[#0D0D0D] border border-zinc-700 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            id="quote-modal-submit-btn"
            className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/25 transition-all border border-[#25D366]"
          >
            <MessageCircle className="w-5 h-5 fill-black" />
            <span>Enviar Cotação pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
