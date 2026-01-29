import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';
import { FormValues } from '../types';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success?: boolean;
    message?: string;
    loading?: boolean;
  }>({ submitted: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: true, loading: true });
    
    // Create mailto link as primary method
    const subject = encodeURIComponent(`Contato de ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    const mailtoLink = `mailto:erickalves155@hotmail.com?subject=${subject}&body=${body}`;
    
    try {
      // Try to open mailto link
      window.open(mailtoLink, '_blank');
      
      setFormStatus({
        submitted: true,
        success: true,
        loading: false,
        message: 'Redirecionando para seu cliente de email...'
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error opening email client:', error);
      
      setFormStatus({
        submitted: true,
        success: false,
        loading: false,
        message: 'Erro ao abrir cliente de email. Tente enviar diretamente para: erickalves155@hotmail.com'
      });
    }
    
    setTimeout(() => {
      setFormStatus({ submitted: false });
    }, 5000);
  };

  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="CONTATO & PARCERIAS"
            subtitle="Entre em contato para oportunidades, parcerias ou apenas para trocar uma ideia."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedElement animation="fadeInLeft">
              <div>
                <h3 className="font-title text-2xl text-text-bright mb-6">Entre em Contato</h3>
                <p className="text-text-dim mb-8">
                  Gostaria de falar sobre parcerias, oportunidades de colaboração ou 
                  simplesmente compartilhar ideias e feedback? Preencha o formulário 
                  ao lado e entrarei em contato o mais breve possível.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-md text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-title text-text-bright mb-1">E-mail</h4>
                      <p className="text-text-dim">erickalves155@hotmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-md text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-title text-text-bright mb-1">Localização</h4>
                      <p className="text-text-dim">Campos dos Goytacazes, RJ - Brasil</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-md text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-title text-text-bright mb-1">Contato/Whatsapp</h4>
                      <p className="text-text-dim">+55 (22) 99900-1994</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeInRight" delay={0.2}>
              <form onSubmit={handleSubmit} className="card">
                <div className="mb-6">
                  <label htmlFor="name" className="block font-title text-text-bright mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background p-3 rounded-md border border-primary/30 
                      focus:border-primary focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block font-title text-text-bright mb-2">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background p-3 rounded-md border border-primary/30 
                      focus:border-primary focus:outline-none transition-colors"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block font-title text-text-bright mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background p-3 rounded-md border border-primary/30 
                      focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Sua mensagem aqui..."
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={formStatus.loading}
                  className="magic-btn w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  {formStatus.loading ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
                </button>
                
                {formStatus.submitted && (
                  <div className={`mt-4 p-4 rounded-md ${formStatus.success ? 'bg-success/20 text-success' : 'bg-error/20 text-error'}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;