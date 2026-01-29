import React from 'react';
import { MessageCircle, Phone, Users } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

const WhatsAppPage: React.FC = () => {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/5522999001994', '_blank');
  };

  const handleWhatsAppGroup = () => {
    window.open('https://chat.whatsapp.com/KmC9CcARCyYH06UJpAC0PG', '_blank');
  };

  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="WHATSAPP"
            subtitle="Entre em contato direto ou participe da nossa comunidade no WhatsApp."
            center
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WhatsApp Direto */}
              <AnimatedElement animation="fadeInLeft">
                <div className="card text-center hover:border-success/60 hover:shadow-lg hover:shadow-success/30 transition-all duration-300">
                  <div className="text-success mb-6">
                    <Phone size={64} className="mx-auto" />
                  </div>
                  <h3 className="font-title text-2xl text-text-bright mb-4">WhatsApp Direto</h3>
                  <p className="text-text-dim mb-6">
                    Fale diretamente comigo para dúvidas, orçamentos ou informações sobre serviços.
                  </p>
                  
                  <div className="bg-background/80 p-4 rounded-lg mb-6">
                    <p className="text-text-bright font-title">+55 (22) 99900-1994</p>
                  </div>
                  
                  <div className="text-left mb-6">
                    <h4 className="font-title text-text-bright mb-3">Para que usar:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-success mr-3"></div>
                        Dúvidas sobre serviços
                      </li>
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-success mr-3"></div>
                        Orçamentos personalizados
                      </li>
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-success mr-3"></div>
                        Agendamento de mentorias
                      </li>
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-success mr-3"></div>
                        Suporte técnico
                      </li>
                    </ul>
                  </div>
                  
                  <button 
                    onClick={handleWhatsAppContact}
                    className="magic-btn w-full flex items-center justify-center gap-2 bg-success hover:bg-success/80"
                  >
                    <MessageCircle size={18} />
                    CONVERSAR NO WHATSAPP
                  </button>
                </div>
              </AnimatedElement>

              {/* Grupo WhatsApp */}
              <AnimatedElement animation="fadeInRight" delay={0.2}>
                <div className="card text-center hover:border-primary/60 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                  <div className="text-primary mb-6">
                    <Users size={64} className="mx-auto" />
                  </div>
                  <h3 className="font-title text-2xl text-text-bright mb-4">Grupo da Comunidade</h3>
                  <p className="text-text-dim mb-6">
                    Participe do nosso grupo para interagir com outros jogadores e receber atualizações.
                  </p>
                  
                  <div className="bg-background/80 p-4 rounded-lg mb-6">
                    <p className="text-text-bright font-title">Comunidade Ericking</p>
                    <p className="text-text-dim text-sm">Grupo oficial no WhatsApp</p>
                  </div>
                  
                  <div className="text-left mb-6">
                    <h4 className="font-title text-text-bright mb-3">No grupo você encontra:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        Discussões sobre Dota 2
                      </li>
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        Avisos de lives
                      </li>
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        Dicas e estratégias
                      </li>
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        Interação com a comunidade
                      </li>
                    </ul>
                  </div>
                  
                  <button 
                    onClick={handleWhatsAppGroup}
                    className="magic-btn w-full flex items-center justify-center gap-2"
                  >
                    <Users size={18} />
                    ENTRAR NO GRUPO
                  </button>
                </div>
              </AnimatedElement>
            </div>
            
            {/* Informações Importantes - Centralized */}
            <AnimatedElement animation="fadeInUp" delay={0.4} className="mt-12">
              <div className="bg-background-light/90 backdrop-blur-sm p-6 rounded-lg border border-primary/30">
                <h4 className="font-title text-lg text-text-bright mb-6 text-center">Informações Importantes</h4>
                
                {/* Centered content layout */}
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Horário de Atendimento */}
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Horário de Atendimento:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Segunda a sexta: 9h às 18h</li>
                        <li>• Sábados: 9h às 14h</li>
                        <li>• Domingos: Apenas urgências</li>
                        <li>• Resposta em até 2 horas</li>
                      </ul>
                    </div>
                    
                    {/* Right Column - Regras do Grupo */}
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Regras do Grupo:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Respeito entre membros</li>
                        <li>• Apenas conteúdo relacionado ao Dota</li>
                        <li>• Proibido spam ou flood</li>
                        <li>• Sem links externos sem autorização</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/20 rounded-lg">
                  <p className="text-text text-center text-sm">
                    <strong>Dica:</strong> Para um atendimento mais rápido, seja específico sobre sua dúvida 
                    ou necessidade. Isso me ajuda a dar a melhor resposta possível!
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppPage;