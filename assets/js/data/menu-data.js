/**
 * Catálogo completo digitalizado do cardápio oficial do Boteco Bistrô
 * Fonte: imagens/cardapio.jpg e artes promocionais oficiais
 */

window.BOTECO_DATA = {
  restaurant: {
    name: "Boteco Bistrô",
    phoneDisplay: "(75) 99278-3169",
    whatsappNumber: "5575992783169",
    email: "carvalho.hanielx@gmail.com",
    address: "R. Frei Caneca, 149 - São João, Feira de Santana - BA, 44050-388",
    mapsUrl: "https://maps.app.goo.gl/WKGmr4qcH6d3vELg7",
    instagramUrl: "https://www.instagram.com/botecobistro.fsa/",
    instagramHandle: "@botecobistro.fsa",
    ifoodUrl: "https://www.ifood.com.br/delivery/feira-de-santana-ba/boteco-bistro-sao-joao/ad787027-7290-4e7d-afcd-c58c6809c357"
  },
  promos: [
    {
      id: "promo-caranguejo",
      badge: "Destaque da Casa",
      title: "Caranguejo Dobrado",
      description: "Feito especialmente para você! Caranguejos selecionados e temperados no ponto certo com oferta dobrada.",
      image: "assets/img/carangueijo.jpg",
      alt: "Promoção Hoje tem Caranguejo Dobrado no Boteco Bistrô"
    },
    {
      id: "promo-roska",
      badge: "Happy Hour",
      title: "Roska Dobrada",
      description: "Hoje você merece Roska Dobrada! Frutas frescas, gelo na medida e muito sabor para brindar com a galera.",
      image: "assets/img/roska.jpg",
      alt: "Promoção Hoje você merece Roska Dobrada"
    },
    {
      id: "promo-tabua",
      badge: "Frutos do Mar",
      title: "Tábua de Camarão Dobrada",
      description: "Camarão alho e óleo, camarão empanado, salada de camarão, azeitonas e ovos de codorna em dose dupla.",
      image: "assets/img/tabua_camarao.jpg",
      alt: "Promoção Tábua de Camarão Dobrada no Boteco Bistrô"
    },
    {
      id: "promo-combo",
      badge: "R$ 124,99",
      title: "O Combo Perfeito",
      description: "Peixe Tilápia Frito + Moqueca de Camarão + Refrigerante 1 Litro (Pepsi ou Guaraná Antarctica) com acompanhamentos.",
      image: "assets/img/combo_perfeito.jpg",
      alt: "O Combo Perfeito: Peixe Tilápia Frito + Moqueca de Camarão + Refrigerante 1 Litro por R$ 124,99"
    }
  ],
  categories: [
    {
      id: "frutos-do-mar",
      name: "Frutos do Mar",
      items: [
        { id: "fm-1", name: "Mariscada", price: 79.99, description: "Seleção especial de mariscos preparados no tempero baiano da casa." },
        { id: "fm-2", name: "Moqueca de Camarão", price: 79.99, description: "Camarões frescos cozidos no leite de coco, azeite de dendê e temperos verdes." },
        { id: "fm-3", name: "Moqueca de Siri", price: 79.99, description: "Catado de siri suculento preparado na autêntica receita baiana." },
        { id: "fm-4", name: "Moqueca de Peixe", price: 79.99, description: "Postas de peixe selecionadas no molho tradicional de dendê e coco." },
        { id: "fm-5", name: "Peixe Frito (Tilápia)", price: 47.99, description: "Tilápia inteira crocante por fora e macia por dentro." }
      ]
    },
    {
      id: "caldos",
      name: "Caldos",
      items: [
        { id: "ca-1", name: "Caldo de Sururu", price: 15.00, description: "Tradicional caldo quente de sururu bem temperado." },
        { id: "ca-2", name: "Caldo de Camarão", price: 17.00, description: "Cremoso caldo de camarão com toque de cheiro-verde." },
        { id: "ca-3", name: "Caldo de Feijão", price: 12.00, description: "Clássico caldo de feijão encorpado de boteco." }
      ]
    },
    {
      id: "chapas",
      name: "Chapas",
      items: [
        { id: "ch-1", name: "Filé de Frango (400g)", price: 48.00, description: "Filé de frango grelhado na chapa." },
        { id: "ch-2", name: "Filé de Frango (200g)", price: 39.99, description: "Porção individual de filé de frango na chapa." },
        { id: "ch-3", name: "Picanha (400g)", price: 79.99, description: "Acompanha feijão tropeiro, arroz, farofa, batata frita e salada." },
        { id: "ch-4", name: "Picanha (200g)", price: 63.00, description: "Acompanha feijão tropeiro, arroz, farofa, batata frita e salada." },
        { id: "ch-5", name: "Carne do Sol na Chapa (400g)", price: 74.99, description: "Acompanha feijão tropeiro, arroz, farofa, batata frita e salada." },
        { id: "ch-6", name: "Carne do Sol na Chapa (200g)", price: 59.99, description: "Acompanha feijão tropeiro, arroz, farofa, batata frita e salada." }
      ]
    },
    {
      id: "regionais",
      name: "Regionais",
      items: [
        { id: "rg-1", name: "Maniçoba", price: 39.99, description: "Receita tradicional cozida lentamente com carnes defumadas." },
        { id: "rg-2", name: "Maniçoba (Meia)", price: 29.99, description: "Meia porção da maniçoba tradicional da casa." },
        { id: "rg-3", name: "Feijoada", price: 38.99, description: "Feijoada completa com carnes selecionadas." },
        { id: "rg-4", name: "Dobradinha", price: 37.00, description: "Dobradinha temperada no estilo regional nordestino." },
        { id: "rg-5", name: "Sarapatel", price: 37.00, description: "Clássico sarapatel baiano bem apurado." }
      ]
    },
    {
      id: "petiscos-mar",
      name: "Petiscos do Mar",
      items: [
        { id: "pm-1", name: "Caranguejo (Unid.)", price: 9.00, description: "Caranguejo fresco cozido no tempero especial." },
        { id: "pm-2", name: "Casquinha de Siri", price: 29.00, description: "Refogado de siri gratinado servido na casquinha." },
        { id: "pm-3", name: "Isca de Peixe", price: 30.00, description: "Tiras de peixe empanadas e crocantes." },
        { id: "pm-4", name: "Camarão Encapotado", price: 39.99, description: "Porção inteira de camarões empanados crocantes." },
        { id: "pm-5", name: "Camarão Encapotado (Meio)", price: 20.00, description: "Meia porção de camarão encapotado." },
        { id: "pm-6", name: "Camarão com Queijo Coalho", price: 39.99, description: "Combinação irresistível de camarão salteado com cubos de queijo coalho." },
        { id: "pm-7", name: "Camarão Empanado", price: 46.00, description: "Camarões empanados dourados e sequinhos." },
        { id: "pm-8", name: "Camarão Alho e Óleo", price: 52.00, description: "Camarões salteados no alho dourado e azeite." },
        { id: "pm-9", name: "Lambreta (Dúzia)", price: 24.00, description: "Dúzia de lambretas frescas no caldo temperado." },
        { id: "pm-10", name: "Tábua de Camarão", price: 99.99, description: "Camarão alho e óleo, camarão empanado, salada de camarão, azeitona e ovo de codorna." },
        { id: "pm-11", name: "Barca de Camarão", price: 79.99, description: "Camarão alho e óleo, camarão empanado e vinagrete de camarão." },
        { id: "pm-12", name: "Pititinga", price: 24.99, description: "Porção tradicional de pititinga frita crocante." },
        { id: "pm-13", name: "Camarão à Dorê com Queijo Coalho", price: 39.99, description: "Camarão à dorê acompanhado de queijo coalho dourado." },
        { id: "pm-14", name: "Arrumadinho de Camarão", price: 52.00, description: "Camarão alho e óleo, camarão empanado e queijo." }
      ]
    },
    {
      id: "petiscos-terra",
      name: "Petiscos da Terra",
      items: [
        { id: "pt-1", name: "Asinha de Frango (03 unid.)", price: 18.00, description: "Asinhas douradas e bem temperadas." },
        { id: "pt-2", name: "Asinha de Frango (06 unid.)", price: 36.00, description: "Porção com 6 unidades de asinhas crocantes." },
        { id: "pt-3", name: "Carne do Sol com Aipim ou Fritas", price: 38.00, description: "Carne do sol acebolada com aipim cozido/frito ou batata frita." },
        { id: "pt-4", name: "Isca de Frango", price: 22.00, description: "Tiras de frango empanadas crocantes." },
        { id: "pt-5", name: "Tripa de Porco", price: 29.00, description: "Porção crocante tradicional de boteco." },
        { id: "pt-6", name: "Tripa de Porco (Meia)", price: 20.00, description: "Meia porção de tripa de porco frita." },
        { id: "pt-7", name: "Passarinha", price: 20.00, description: "Clássico petisco baiano frito e temperado." },
        { id: "pt-8", name: "Tábua de Frios", price: 49.99, description: "Seleção variada de queijos, embutidos e azeitonas." },
        { id: "pt-9", name: "Salame com Azeitona", price: 20.00, description: "Fatia de salame italiano servido com azeitonas." },
        { id: "pt-10", name: "Batata Frita", price: 18.00, description: "Porção generosa de batatas fritas sequinhas." },
        { id: "pt-11", name: "Filé com Fritas ou Aipim", price: 32.00, description: "Iscas de filé mignon com batata frita ou aipim." },
        { id: "pt-12", name: "Filé de Frango com Fritas", price: 28.00, description: "Cubos de frango grelhados com batata frita." },
        { id: "pt-13", name: "Filé ao Molho Gorgonzola", price: 49.99, description: "Iscas de filé cobertas com cremoso molho gorgonzola." },
        { id: "pt-14", name: "Batata Recheada (02 unid.)", price: 29.99, description: "Recheio à escolha: camarão, carne ou calabresa." },
        { id: "pt-15", name: "Moela ao Molho com Torradas", price: 25.00, description: "Moela cozida ao molho rico servida com torradas crocantes." },
        { id: "pt-16", name: "Arrumadinho de Boteco", price: 48.00, description: "Carne do sol, calabresa, pão de alho e batata apimentada." },
        { id: "pt-17", name: "Bolinhos e Pastel", price: 19.99, description: "Sabores variados do dia (consultar o garçom)." },
        { id: "pt-18", name: "Queijo Coalho na Chapa", price: 20.00, description: "Espetos ou fatias de queijo coalho dourado." },
        { id: "pt-19", name: "Pão de Alho", price: 6.00, description: "Pão de alho assado na brasa/chapa." },
        { id: "pt-20", name: "Carne do Sol Bistrô", price: 48.00, description: "Carne do sol, queijo coalho, aipim, farofa e feijão tropeiro." },
        { id: "pt-21", name: "Costelinha de Porco", price: 35.99, description: "Costelinha suína suculenta e dourada." }
      ]
    },
    {
      id: "acompanhamentos",
      name: "Acompanhamentos",
      items: [
        { id: "ac-1", name: "Feijão Tropeiro", price: 5.00, description: "Porção extra de feijão tropeiro." },
        { id: "ac-2", name: "Arroz Branco", price: 5.00, description: "Porção extra de arroz soltinho." },
        { id: "ac-3", name: "Farofa", price: 3.00, description: "Porção extra de farofa temperada." },
        { id: "ac-4", name: "Salada", price: 3.00, description: "Porção extra de salada fresca." }
      ]
    },
    {
      id: "drinks",
      name: "Drinks",
      items: [
        { id: "dr-1", name: "Coquetel de Frutas", price: 19.99, description: "Mix refrescante de frutas tropicais." },
        { id: "dr-2", name: "Piña Colada", price: 19.99, description: "Abacaxi, leite de coco e rum." },
        { id: "dr-3", name: "Roska de Frutas", price: 19.99, description: "Carro-chefe da casa com frutas frescas maceradas." },
        { id: "dr-4", name: "Gin Tônica", price: 19.99, description: "Gin, água tônica e especiarias cítricas." },
        { id: "dr-5", name: "Gin Tônica Blue", price: 22.00, description: "Versão especial com toque cítrico e curaçau blue." },
        { id: "dr-6", name: "Sex on the Beach", price: 22.00, description: "Vodka, licor de pêssego, suco de laranja e groselha." },
        { id: "dr-7", name: "Lagoa Azul", price: 22.00, description: "Vodka, curaçau blue e limão refrescante." },
        { id: "dr-8", name: "Drink do Barman", price: 22.00, description: "Criação autoral do dia (consultar o garçom)." }
      ]
    },
    {
      id: "bebidas",
      name: "Cervejas & Bebidas",
      items: [
        { id: "bb-1", name: "Original (600ml)", price: 12.99, description: "Cerveja gelada garrafa 600ml." },
        { id: "bb-2", name: "Brahma Duplo Malte (600ml)", price: 11.99, description: "Cerveja gelada garrafa 600ml." },
        { id: "bb-3", name: "Devassa / Amstel / Bohemia / Skol (600ml)", price: 10.99, description: "Garrafa 600ml estupidamente gelada." },
        { id: "bb-4", name: "Brahma Chopp", price: 10.99, description: "Chopp claro cremoso." },
        { id: "bb-5", name: "Heineken (600ml)", price: 16.99, description: "Cerveja puro malte garrafa 600ml." },
        { id: "bb-6", name: "Heineken Long Neck", price: 10.00, description: "Garrafa 330ml gelada." },
        { id: "bb-7", name: "Stella Artois / Budweiser (550ml)", price: 14.00, description: "Garrafa 550ml gelada." },
        { id: "bb-8", name: "Long Neck (Diversas)", price: 7.99, description: "Opções long neck geladas." },
        { id: "bb-9", name: "Vinho (Taça)", price: 12.00, description: "Taça de vinho tinto ou suave." },
        { id: "bb-10", name: "Vinho (Garrafa)", price: 40.00, description: "Garrafa selecionada (outros rótulos consultar garçom)." },
        { id: "bb-11", name: "Suco (Jarra)", price: 10.99, description: "Jarra de suco natural." },
        { id: "bb-12", name: "Água de Coco (Jarra)", price: 9.99, description: "Jarra de água de coco gelada." },
        { id: "bb-13", name: "Refrigerante (Litro)", price: 9.00, description: "Garrafa 1 Litro." },
        { id: "bb-14", name: "Refrigerante (Lata)", price: 5.00, description: "Lata 350ml." },
        { id: "bb-15", name: "Energético Red Bull", price: 15.00, description: "Lata 250ml." },
        { id: "bb-16", name: "Skol Beats ou Ice", price: 10.00, description: "Long neck gelada." },
        { id: "bb-17", name: "H2OH!", price: 7.00, description: "Garrafa 500ml." },
        { id: "bb-18", name: "Água Tônica", price: 6.00, description: "Lata 350ml." },
        { id: "bb-19", name: "Água Mineral", price: 3.00, description: "Garrafa 500ml com ou sem gás." }
      ]
    },
    {
      id: "destilados",
      name: "Destilados, Doses & Combos",
      items: [
        { id: "ds-1", name: "Old Parr (Dose / Litro / Combo)", price: 18.00, description: "Dose R$ 18,00 | Litro R$ 240,00 | Combo R$ 260,00 (acompanha 3 energéticos, refrigerante ou água de coco)." },
        { id: "ds-2", name: "Red Label (Dose / Litro / Combo)", price: 14.00, description: "Dose R$ 14,00 | Litro R$ 170,00 | Combo R$ 190,00 (acompanha 3 acompanhamentos)." },
        { id: "ds-3", name: "Ballantine's (Dose / Litro / Combo)", price: 10.00, description: "Dose R$ 10,00 | Litro R$ 130,00 | Combo R$ 150,00 (acompanha 3 acompanhamentos)." },
        { id: "ds-4", name: "Vodka Absolut (Dose / Litro / Combo)", price: 14.00, description: "Dose R$ 14,00 | Litro R$ 170,00 | Combo R$ 190,00 (acompanha 3 acompanhamentos)." },
        { id: "ds-5", name: "Vodka Skarloff (Dose / Litro / Combo)", price: 6.00, description: "Dose R$ 6,00 | Litro R$ 60,00 | Combo R$ 90,00 (acompanha 3 acompanhamentos)." },
        { id: "ds-6", name: "Doses Tradicionais (Martini / Tequila)", price: 12.00, description: "Dose servida na medida." },
        { id: "ds-7", name: "Doses (Campari / Montilla / Domecq / Bacardi)", price: 10.00, description: "Dose individual." },
        { id: "ds-8", name: "Cachaça Seleta (Dose)", price: 8.00, description: "Dose de cachaça artesanal Seleta." },
        { id: "ds-9", name: "Cachaça Pitú (Dose)", price: 3.00, description: "Dose tradicional." }
      ]
    }
  ]
};
