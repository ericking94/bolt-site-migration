# Ericking - Site Estático para Hostinger

Este é um site React 100% estático, otimizado para hospedagem compartilhada da Hostinger.

## 🚀 Como fazer o deploy na Hostinger

### 1. Build do projeto
```bash
npm install
npm run build
```

### 2. Upload dos arquivos
1. Acesse o painel da Hostinger
2. Vá em "Gerenciador de Arquivos"
3. Navegue até a pasta `public_html`
4. **IMPORTANTE**: Exclua todos os arquivos existentes na pasta `public_html`
5. Faça upload de **TODOS** os arquivos da pasta `dist` para `public_html`
6. Certifique-se de que o arquivo `.htaccess` foi enviado (pode estar oculto)

### 3. Configuração do .htaccess
O arquivo `.htaccess` já está incluído no projeto e será copiado automaticamente durante o build. Ele é essencial para:
- Fazer as rotas do React funcionarem corretamente
- Redirecionar todas as URLs para `index.html`
- Habilitar compressão e cache
- Adicionar headers de segurança

### 4. Estrutura de pastas após o upload
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [outros arquivos]
└── [outros arquivos do build]
```

## 🛠️ Funcionalidades Estáticas

### ✅ O que funciona sem backend:
- Navegação entre páginas (SPA routing)
- Todas as animações e interações
- Formulário de contato (via mailto)
- Links para redes sociais
- Botões de WhatsApp (redirecionamento direto)
- Todas as páginas de serviços
- Checkout (redireciona para WhatsApp)
- Integração com Mercado Pago para pagamentos online

### 📱 WhatsApp Integration
Os formulários de checkout redirecionam diretamente para o WhatsApp com mensagens pré-formatadas, eliminando a necessidade de backend para processamento de pedidos.

### 💳 Mercado Pago Integration
Para produtos que não sejam contas, o sistema oferece integração com Mercado Pago para pagamentos online seguros via PIX, cartão de crédito/débito e outras formas de pagamento.

## 🔧 Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Preview do build
npm run preview
```

## 📋 Checklist de Deploy

- [ ] Executar `npm run build`
- [ ] Verificar se a pasta `dist` foi criada
- [ ] Fazer backup dos arquivos atuais da Hostinger (se houver)
- [ ] Limpar a pasta `public_html`
- [ ] Fazer upload de todos os arquivos da pasta `dist`
- [ ] Verificar se o `.htaccess` foi enviado
- [ ] Testar todas as rotas do site
- [ ] Testar formulário de contato
- [ ] Testar links do WhatsApp

## 🌐 URLs de Teste

Após o deploy, teste estas URLs diretamente:
- `seudominio.com/`
- `seudominio.com/sobre`
- `seudominio.com/estilo`
- `seudominio.com/contato`
- `seudominio.com/mentoria`
- `seudominio.com/boost`
- `seudominio.com/play`
- `seudominio.com/contas`

## 🚨 Troubleshooting

### Problema: Página 404 ao acessar rotas diretamente
**Solução**: Verifique se o arquivo `.htaccess` está na pasta `public_html`

### Problema: Formulário não envia
**Solução**: O formulário de contato usa mailto, certifique-se de que o cliente de email está configurado

### Problema: Arquivos CSS/JS não carregam
**Solução**: Verifique se todos os arquivos da pasta `assets` foram enviados

### Problema: Site não carrega
**Solução**: Verifique se o arquivo `index.html` está na raiz da `public_html`

## 📞 Suporte

Para dúvidas sobre hospedagem, consulte a documentação da Hostinger ou entre em contato com o suporte técnico.

## 🎯 Funcionalidades do Checkout

### Melhorias Implementadas:
- **Seletor de Quantidade**: Dropdown simples de 1 a 8 jogos para partidas avulsas
- **MMR Único**: Slider único para preferência de MMR em jogos
- **MMR para Mentoria**: Slider de MMR também disponível para serviços de mentoria
- **Disponibilidade**: Campo de texto para horários disponíveis em mentoria e jogos
- **Layout Otimizado**: Seções centralizadas e responsivas
- **WhatsApp Integration**: Redirecionamento automático com dados formatados
- **Mercado Pago**: Opção de pagamento online para todos os produtos exceto contas

### Produtos Suportados:
- Mentoria (todos os planos)
- Jogue Comigo (avulso e pacote 10 jogos)
- Boost de MMR
- Calibração de Conta
- Contas Dota 2 (todos os tipos)

### Configuração do Mercado Pago:
1. Crie uma conta no Mercado Pago Developers
2. Obtenha seu Access Token (teste e produção)
3. Configure a variável de ambiente `VITE_MERCADOPAGO_ACCESS_TOKEN`
4. Para produção, use o token de produção
5. Configure webhooks para notificações de pagamento (opcional)

Todos os formulários são otimizados para conversão via WhatsApp ou Mercado Pago, sem necessidade de backend complexo.

## 🎨 Comandos de Desenvolvimento

### Ajustar Centralização dos Heróis no Meta

Para ajustar a posição das imagens dos heróis nos painéis do meta, use o console do navegador:

```javascript
// Importar a função de ajuste
import { adjustHeroPositioning } from './src/data/metaHeroes';

// Formato: "posição:índiceHerói:posiçãoImagem"
// Exemplos:
adjustHeroPositioning("support5:0:center 25%"); // Ajustar Jakiro
adjustHeroPositioning("support5:1:center 20%"); // Ajustar Lion
adjustHeroPositioning("support5:2:center 35%"); // Ajustar Witch Doctor
adjustHeroPositioning("support5:3:center 25%"); // Ajustar Dazzle
adjustHeroPositioning("support5:4:center 30%"); // Ajustar Shadow Shaman

// Outras posições disponíveis:
adjustHeroPositioning("hardCarry:0:center 40%");
adjustHeroPositioning("mid:1:left 60%");
adjustHeroPositioning("offlaner:2:right 30%");
adjustHeroPositioning("support4:3:center 50%");
```

### Posições de Imagem Disponíveis:
- `center 20%` - Centro horizontal, 20% do topo
- `center 30%` - Centro horizontal, 30% do topo
- `left 50%` - Esquerda, 50% do topo
- `right 50%` - Direita, 50% do topo
- `center center` - Centro completo

### Índices dos Heróis por Posição:
- **Hard Carry**: 0-4 (Nature's Prophet, Ursa, Shadow Fiend, Marci, Templar Assassin)
- **Mid**: 0-4 (Invoker, Storm Spirit, Earthshaker, Queen of Pain, Puck)
- **Offlaner**: 0-4 (Mars, Axe, Dawnbreaker, Centaur, Underlord)
- **Support 4**: 0-4 (Weaver, Spirit Breaker, Tusk, Rubick, Mirana)
- **Support 5**: 0-4 (Jakiro, Lion, Witch Doctor, Dazzle, Shadow Shaman)

### Comandos CSS Personalizados para Heróis:

Para ajustar posicionamento individual de cada herói, use:

```javascript
// Importar a função de ajuste de estilos
import { adjustHeroStyles } from './src/data/metaHeroes';

// Formato: "posição:índiceHerói:estilosCSS"
// Exemplos:
adjustHeroStyles("support5:0:transform: translateX(-5px) translateY(-3px);"); // Ajustar Jakiro
adjustHeroStyles("support5:1:margin-top: -2px; margin-left: 1px;"); // Ajustar Lion
adjustHeroStyles("hard-carry:0:transform: scale(1.05) translateY(-2px);"); // Ajustar Nature's Prophet
```

### Estilos CSS Disponíveis:
- `transform: translateX(Npx) translateY(Npx)` - Mover horizontalmente/verticalmente
- `margin-top: Npx; margin-left: Npx` - Ajustar margens
- `transform: scale(N)` - Redimensionar
- `position: relative; top: Npx; left: Npx` - Posicionamento relativo
- Qualquer propriedade CSS válida

### Identificadores Únicos dos Cards:
Cada herói possui um ID único no formato: `hero-card-{posição}-hero-{índice}`

Exemplos:
- `hero-card-hard-carry-hero-0` (Nature's Prophet)
- `hero-card-support5-hero-1` (Lion)
- `hero-card-mid-hero-2` (Earthshaker)

### Navegação para Páginas de Heróis:
Ao clicar em qualquer herói, o usuário é redirecionado para `/hero/{hero-slug}` onde pode ver:
- Estatísticas base completas
- Todas as habilidades com descrições detalhadas
- Árvore de talentos
- Facetas do herói
- Lore e informações gerais

### Responsividade:
- Grid responsivo que se adapta a diferentes tamanhos de tela
- Animações otimizadas para mobile
- Nomes dos heróis se expandem completamente ao hover
- Z-index dinâmico para evitar sobreposições