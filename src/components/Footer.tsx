import React from 'react';
import { COMPANY_INFO, COVERAGE_CITIES } from '../data/transportesData';
import { BrandLogo } from './BrandLogo';
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  MessageCircle,
  Shield,
  Star,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="contato"
      className="bg-[#08080A] border-t border-zinc-800/80 pt-16 pb-24 sm:pb-16 text-zinc-400 text-xs relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <BrandLogo variant="horizontal" size="md" className="mb-4" />
            
            <p className="text-xs text-zinc-400 leading-relaxed mb-5 max-w-sm">
              Especialista em transfer privativo executivo dos aeroportos de Porto Alegre (POA) e Caxias do Sul (CXJ)
              para Gramado, Canela e Serra Gaúcha. Pontualidade britânica, veículos novos e cadeirinhas infantis inclusas.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-link"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] text-zinc-300 hover:text-[#FCF6BA] flex items-center justify-center transition-colors"
                aria-label="Instagram Transportes Feiten"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-link"
                className="w-9 h-9 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp Transportes Feiten"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-maps-link"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] text-zinc-300 hover:text-[#FCF6BA] flex items-center justify-center transition-colors"
                aria-label="Google Maps Localização"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Official NAP Block (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 text-gold-gradient">
              Dados Corporativos (NAP)
            </h4>

            <div className="space-y-3.5 text-xs text-zinc-300">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Endereço Oficial:</div>
                  <div className="text-zinc-400">Rua Cezare Vaccari, 28</div>
                  <div className="text-zinc-400">Bairro Santa Terezinha</div>
                  <div className="text-zinc-400">Canela - RS • CEP 95686-252</div>
                  <a
                    href={COMPANY_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#FCF6BA] hover:underline flex items-center gap-1 mt-1"
                  >
                    <span>Ver rota no Google Maps</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Telefone & WhatsApp:</div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-zinc-300 hover:text-white"
                  >
                    (54) 99940-6972
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Horário de Operação:</div>
                  <div className="text-zinc-400">Segunda a Domingo, das 05:00 às 23:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 text-gold-gradient">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#diferenciais" className="hover:text-[#FCF6BA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Diferenciais</span>
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#FCF6BA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Galeria de Fotos</span>
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#FCF6BA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Serviços & Tours</span>
                </a>
              </li>
              <li>
                <a href="#cobertura" className="hover:text-[#FCF6BA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Rotas Mapeadas</span>
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#FCF6BA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Avaliações no Google</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FCF6BA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Dúvidas Frequentes</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: GEO Cities Indexed (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 text-gold-gradient">
              Cidades Atendidas (GEO)
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {COVERAGE_CITIES.map((c) => (
                <span
                  key={c.id}
                  className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300"
                >
                  {c.name}
                </span>
              ))}
            </div>
            
            <div className="mt-4 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400">
              ⭐ Nota <strong>5.0 / 5.0</strong> baseada em 84 avaliações reais. Empresa fundada em 07/06/2023.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Transportes Feiten. Todos os direitos reservados.
            <span className="mx-2 text-zinc-700">|</span>
            Canela - RS • Serra Gaúcha
          </div>

          <div className="flex items-center gap-4">
            <span>Privacidade e Termos</span>
            <span className="text-zinc-700">•</span>
            <span>CNPJ e Licença Turística Regional</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
