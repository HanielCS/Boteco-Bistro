# Boteco Bistrô — Website Oficial

Website institucional e interativo desenvolvido para o **Boteco Bistrô** (Feira de Santana — BA), unindo a identidade visual oficial da marca a uma arquitetura front-end moderna, responsiva, acessível e modular em **HTML5, CSS3 e JavaScript Vanilla (ES6+)**.

---

## ✨ Principais Melhorias Implementadas

1. **Identidade Visual Unificada & Design System (`tokens.css`)**:
   - Paleta extraída diretamente da identidade da marca (`#0E1317` carvão profundo, `#C88A2E` dourado bistrô e `#FFA200` âmbar boteco), aplicada de forma consistente em todas as páginas (`index.html`, `cardapio.html` e `reserva.html`).
   - Tipografia editorial com **Playfair Display** para títulos e **Plus Jakarta Sans** para leitura fluida, substituindo importações quebradas de fontes.

2. **Cardápio Digital Interativo (`cardapio.html`)**:
   - Digitalização completa de **mais de 70 itens** do cardápio oficial (Frutos do Mar, Caldos, Chapas, Regionais, Petiscos do Mar, Petiscos da Terra, Acompanhamentos, Drinks, Cervejas e Destilados).
   - **Busca instantânea** por nome ou ingrediente e **filtros por categoria**.
   - **Simulador de Comanda**: permite adicionar pratos/bebidas, ajustar quantidades, calcular o total estimado em `R$` e enviar o pedido diretamente para o WhatsApp oficial do restaurante, mantendo também um modal para visualização do cardápio impresso original (`cardapio.jpg`).

3. **Sistema de Reservas Validado (`reserva.html` & `reserva.js`)**:
   - Correção do bug crítico (`documnent` -> `document`), unificação do número oficial de WhatsApp `(75) 99278-3169` e codificação segura via `encodeURIComponent()`.
   - Validação completa de campos em tempo real, máscara automática para telefone brasileiro, bloqueio de datas retroativas, seleção de ambiente e modal de confirmação com resumo da reserva.

4. **Arquitetura Modular & Responsividade Mobile-First**:
   - Separação clara entre estrutura (`*.html`), estilos (`assets/css/`), dados (`assets/js/data/`), scripts (`assets/js/`) e mídias (`assets/img/`).
   - Navegação *sticky* com efeito *glassmorphism*, menu *hamburger* acessível (`aria-expanded`), carrossel interativo com controles e *lightbox* para os cartazes promocionais.

---

## 📁 Estrutura de Diretórios

```text
Boteco-Bistro-Pro/
├── index.html                  # Página inicial (Hero, Carrossel, Promoções, Pilares, Mapa)
├── cardapio.html               # Cardápio digital pesquisável + Simulador de Comanda
├── reserva.html                # Formulário de reserva validado (WhatsApp e E-mail)
├── README.md                   # Documentação do projeto
├── LICENSE                     # Licença MIT
└── assets/
    ├── css/
    │   ├── tokens.css          # Variáveis globais (cores, fontes, sombras, espaçamentos)
    │   ├── base.css            # Reset moderno, acessibilidade e botões reutilizáveis
    │   ├── components.css      # Header sticky, footer, breadcrumbs, modais e toasts
    │   └── pages.css           # Layouts específicos de Home, Cardápio e Reserva
    ├── js/
    │   ├── data/
    │   │   └── menu-data.js    # Catálogo estruturado do cardápio e promoções
    │   ├── layout.js           # Menu mobile, scroll suave, ano dinâmico e notificações
    │   ├── home.js             # Carrossel acessível e modal de ampliação de cartazes
    │   ├── cardapio.js         # Busca, filtros, comanda interativa e envio WhatsApp
    │   └── reserva.js          # Validação, máscara de telefone e fluxo de reserva
    └── img/
        ├── boteco_bistro.jpg
        ├── carangueijo.jpg
        ├── cardapio.jpg
        ├── combo_perfeito.jpg
        ├── roska.jpg
        └── tabua_camarao.jpg
```

---

## 🚀 Como Executar

Por utilizar **HTML5, CSS3 e JavaScript puro** (sem dependências de *build*), basta:

1. Extrair o projeto e abrir `index.html` diretamente no navegador, **ou**
2. Servir com qualquer servidor estático local (ex.: extensão *Live Server* no VS Code ou `python3 -m http.server 8080`).

---

## 📄 Licença

Distribuído sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.
