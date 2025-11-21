// =================================================================
// 🛍️ CONFIGURAÇÕES DO SISTEMA E VARIÁVEIS DE NEGÓCIO
// =================================================================

// --- 1. DADOS DE CONTATO ---
// Número de WhatsApp para onde os pedidos serão enviados
window.WHATSAPP_NUMBER = "5531983351877"; 

// NOVO: DADOS DO ESTABELECIMENTO
window.BUSINESS_NAME = "Comida Caseira da Rosa"; // Nome no header e título
window.BUSINESS_LOGO_URL = "img/logo.png"; // **ATUALIZE COM A SUA LOGO REAL**
window.DELIVERY_TIME = "50–60min"; // Tempo médio de entrega (string)

// NOVO: HORÁRIOS DE FUNCIONAMENTO (Formato HH:MM)
// Dias da semana (0=Domingo, 1=Segunda, ..., 6=Sábado)
window.OPERATING_HOURS = {
    1: { open: "9:00", close: "23:00" }, // Segunda
    2: { open: "9:00", close: "23:00" }, // Terça
    3: { open: "9:00", close: "15:00" }, // Quarta
    4: { open: "9:00", close: "15:00" }, // Quinta
    5: { open: "9:00", close: "15:00" }, // Sexta
    6: { open: "9:00", close: "15:00" }, // Sábado
    0: { open: "9:00", close: "15:00" }, // Domingo
    // Se quiser fechar em um dia, use: 1: { open: null, close: null }, 
}; 


// --- 2. TABELA DE PRODUTOS (COM OLDPRICE E OPÇÕES) ---
// Adicione 'oldPrice' se o produto estiver em promoção.
// Adicione 'options' para configurar seleções (radio ou checkbox)
window.PRODUCTS = {
    "Pratos Tradicionais": [
        {
            name: "PF Frango Cozido",
            price: 20.00,
            description: "Arroz, Feijão, Macarrão, Frango Cozido e Salada.",
            image: "img/pfFrango.jpg",
            options: [
                {
                    title: "Adicionar Refrigerante 350ml?",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Não quero", price: 0.00 },
                        { name: "Coca-Cola", price: 6.50 },
                        { name: "Fanta", price: 6.50 },
                        { name: "Guaraná Jesus", price: 6.50 },
                        { name: "Guaraná Antártica", price: 6.50 }
                    ]
                }
            ]
        },
        {
            name: "PF Assado de Panela",
            price: 20.00,
            description: "Arroz, Feijão, Macarrão, Assado de Panela e Salada.",
            image: "img/pfAssadodePanela.jpg"
        },
        {
            name: "PF Torta de Camarão",
            price: 20.00,
            description: "Arroz, Feijão, Macarrão, Assado de Panela e Salada.",
            image: "img/pfTortadeCamarao.jpg" 
        },
        {
            name: "PF Strogonoff de Frango",
            price: 20.00,
            oldPrice: 20.00, // <--- PRODUTO EM PROMOÇÃO
            description: "Arroz, Stronoff de Frango, Batata Palha e Salada.",
            image: "img/pfStrogonoff.jpg" 
        },
        {
            name: "PF Bisteca de Porco",
            price: 20.00,
            description: "Arroz, Feijão, Macarrão, Bife de Porco, Tomate e Cebola.",
            image: "img/pfBifedePorco.jpg" 
        },
        {
            name: "PF de Mocotó",
            price: 25.00,
            description: "Arroz, Mocotó e Farofa.",
            image: "img/porcaomocoto.jpg" 
        },
        {
            name: "PF Panqueca",
            price: 20.00,
            description: "Arroz, Feijão, Macarrão, Panqueca e Salada.",
            image: "img/pfpanqueca.jpeg" 
        },
        {
            name: "PF Bife de Fígado",
            price: 17.00,
            description: "Arroz, Feijão, Macarrão, Bife de Figado e Salada.",
            image: "img/pfbifedefigado.webp" 
        },
        {
            name: "PF Bife a Milanesa",
            price: 22.00,
            description: "Arroz, Feijão, Macarrão, Bife a Milanesa e Salada.",
            image: "img/pfbifeamilanesa.jpg" 
        },
        {
            name: "PF Frango a Milanesa",
            price: 22.00,
            description: "Arroz, Feijão, Macarrão, Frango a Milanesa e Salada.",
            image: "img/pffrangoamilanesa.jpg" 
        },
        {
            name: "PF Frango a Parmegiana",
            price: 22.00,
            description: "Arroz, Feijão, Macarrão, Frango a Parmegiana e Salada.",
            image: "img/pffrangoaparmegiana.jpg" 
        },
        {
            name: "PF Bife a Cavalo",
            price: 23.00,
            description: "Arroz, Feijão, Macarrão, Bife a Cavalo e Salada.",
            image: "img/pfbifeacavalo.jpg" 
        },
        {
            name: "PF Bife a Parmegiana",
            price: 22.00,
            description: "Arroz, Feijão, Macarrão, Bife a Parmegiana e Salada.",
            image: "img/pfbifeaparmegiana.avif" 
        },
        {
            name: "PF Carne de Sol",
            price: 23.00,
            description: "Arroz, Feijão, Macarrão, Carne de Sol e Salada.",
            image: "img/pfcarnedesol.jpeg" 
        },
        {
            name: "PF Carne Trinchada",
            price: 23.00,
            description: "Arroz, Feijão, Macarrão, Carne Trinchada e Salada.",
            image: "img/pfcarnetrinchada.jpg" 
        },
        {
            name: "PF Lasanha(Sabores)",
            price: 22.00,
            description: "Arroz, Feijão, Macarrão, Lasanha e Farofa .",
            image: "img/pflasanha.webp",
            options: [
                {
                    title: "Sabor",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Frango", price: 0.00 },
                        { name: "Carne", price: 0.00 },
                        { name: "Calabresa", price: 0.00 }
                    ]
                }
            ]
            
        }

    ],
    "Porções": [
        {
            name: "Porçao Lasanha (Sabores)",
            price: 35.00,
            description: "<strong>Sabor: </strong>Carne, Frango ou Calabresa.",
            image: "img/lasanha.webp",
            options: [
                {
                    title: "Sabor",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Frango", price: 0.00 },
                        { name: "Carne", price: 0.00 },
                        { name: "Calabresa", price: 0.00 }
                    ]
                }
            ]

        },
        {
            name: "Porção Cozido de Boi",
            price: 35.00,
            description: "Porção Cozido de Boi.",
            image: "img/cozido.jpg"
        },
        {
            name: "Porção Frango ao Molho",
            price: 35.00,
            description: "Porção Frango ao Molho.",
            image: "img/frangoAoMolho.jpg" 
        },
        {
            name: "Porção Arroz Branco",
            price: 7.00,
            description: "Porção de Arroz Branco <strong>(P ou G)</strong>",
            image: "img/porcaodearroz.jpg",

            options: [
                {
                    title: "Tamanho",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Pequena", price: 0.00 },
                        { name: "Grande", price: 8.00 }
                    ]
                }
            ]
        },
        {
            name: "Porção Arroz Maria Isabel",
            price: 8.00,
            description: "Porção de Arroz Maria Isabel <br><strong>(P ou G)</strong>",
            image: "img/porcaoarrozmariaisabel.jpg",

            options: [
                {
                    title: "Tamanho",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Pequena", price: 0.00 },
                        { name: "Grande", price: 8.00 }
                    ]
                }
            ]
        },
        {
            name: "Porção Arroz Baião de Dois",
            price: 8.00,
            description: "Porção Arroz Baião de Dois <strong>(P ou G)</strong>",
            image: "img/porcaobaiaodedois.jpg",

            options: [
                {
                    title: "Tamanho",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Pequena", price: 0.00 },
                        { name: "Grande", price: 8.00 }
                    ]
                }
            ]
        },
        {
            name: "Porção Feijão",
            price: 10.00,
            description: "Porção de Feijão <strong>(P ou G)</strong>",
            image: "img/porcaodefeijao.jpg",

            options: [
                {
                    title: "Tamanho",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Pequena", price: 0.00 },
                        { name: "Grande", price: 6.00 }
                    ]
                }
            ]
        },
        {
            name: "Porção Macarrão",
            price: 7.00,
            description: "Porção de Macarrão <strong>(P ou G)</strong>",
            image: "img/porcaodemacarao.webp",

            options: [
                {
                    title: "Tamanho",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Pequena", price: 0.00 },
                        { name: "Grande", price: 8.00 }
                    ]
                }
                ]
        },
        {
            name: "Porção de Mocotó",
            price: 35.00,
            description: "Porção Caldo de Mocotó.",
            image: "img/porcaomocoto.jpg" 
        },
        {
            name: "Porção de Carne Trinchada",
            price: 35.00,
            description: "Porção de Carne a parte.",
            image: "img/porcaodecarne.jpg" 
        },
        {
            name: "Porção de Carne de Sol",
            price: 35.00,
            description: "Porção de Carne a parte.",
            image: "img/porcaocarnedesol.jpg" 
        },
        {
            name: "Porção de Frango",
            price: 35.00,
            description: "Porção de Frango a parte.",
            image: "img/porcaodefrango.jpg" 
        },
        {
            name: "Porção de Macaxeira",
            price: 12.00,
            description: "Porção de Macaxeira a parte.",
            image: "img/porcaodemacaxeira.jpg" 
        },
        {
            name: "Porção de Batata Frita",
            price: 12.00,
            description: "Porção de Batata Frita.",
            image: "img/porcaodebatatafrita.jpg" 
        }
    ],
    "Farofas": [
        {
            name: "Farofa de Ovo",
            price: 5.00,
            description: "Farofa de Ovo Tradicional.",
            image: "img/farofadeovo.webp"  // imagem de farofa no Unsplash :contentReference[oaicite:4]{index=4}
        },
        {
            name: "Farofa de Bacon",
            price: 10.00,
            description: "Farofa de Bacon Tradicional.",
            image: "img/farofadebacon.jpg"  // mesma imagem genérica de farofa
        },
        {
            name: "Farofa de Calabresa",
            price: 8.00,
            description: "Farofa de Calabresa Tradicional.",
            image: "img/farofadecalabresa.jpg"
        },
        {
            name: "Farofa de Cuscuz",
            price: 10.00,
            description: "Farofa de Cuscuz Tradicional.",
            image: "img/farofadecuscuz.jpg"
        },
        {
            name: "Farofa de Carne",
            price: 10.00,
            description: "Farofa de Carne Tradicional.",
            image: "img/farofa de carne.jpg"
        },
        {
            name: "Farofa de Frango",
            price: 8.00,
            description: "Farofa de Frango Tradicional.",
            image: "img/farofadefrango.jpg"
        },
        {
            name: "Farofa de Soja",
            price: 6.00,
            description: "Farofa de Soja Tradicional.",
            image: "img/farofadesoja.jpeg"
        }
    ],
    "Cafés da Manhã": [
        {
            name: "Torta (Sabores)",
            price: 20.00,
            description: "<strong>Sabores:</strong> Camarão, Frango ou Carne",
            image: "img/tortas.jpg",  // imagem genérica de comida
            options: [
                {
                    title: "Sabor",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Frango", price: 0.00 },
                        { name: "Carne", price: 1.00 },
                        { name: "Camarão", price: 3.00 }
                    ]
                }
            ]

        },
        {
            name: "Café + tapioca de frango",
            price: 15.00,
            description: "Cafe Tradicional e Tapioca de Frango.",
            image: "img/tapiocaCafe.jpg" 
        },
        {
            name: "Tapioca de frango",
            price: 10.00,
            description: "Tapioca de Frango.",
            image: "img/tapiocadefrango.jpg"
        },
        {
            name: "Pão com ovo",
            price: 6.00,
            description: "Pão Frances com Ovo.",
            image: "img/paocomovo.jpg"
        },
        {
            name: "Cuscuz recheado (Sabores)",
            price: 12.00,
            description: "<strong>Sabores:</strong> Carne, Frango, Calabresa e Carne de Sol.",
            image: "img/cuscuzrecheado.jpg",
            options: [
                {
                    title: "Recheio",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Carne", price: 0.00 },
                        { name: "Frango", price: 0.00 },
                        { name: "Calabresa", price: 0.00 },
                        { name: "Carne de Sol", price: 3.00 }
                    ]
                }
            ]
        },
        {
            name: "Café com leite",
            price: 2.50,
            description: "Cafe com leite Tradicional.",
            image: "img/cafecomleite.jpeg"
        },
        {
            name: "Tapioca recheada",
            price: 10.00,
            description: "Tapioca recheada com queijo, presunto e ovo.",
            image: "img/tapiocarecheada.jpg"
        },
        {
            name: "Caldo de ovos",
            price: 10.00,
            description: "",
            image: "img/caldodeovos.webp"  // imagem genérica de comida
        }
    ],
    "Bebidas": [
        {
            name: "Sucos 500ml",
            price: 6.50,
            description: "Abacaxi, Acerola, Caja, Caju, Cupuaçu, Goiaba, Graviola, Maracuja, Tamarino",
            image: "img/sucos.jpg",
            options: [
                {
                    title: "Preparo com",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Agua", price: 0.00 },
                        { name: "Leite", price: 1.50 },
                    ]
                },
                {
                    title: "Sabor",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Abacaxi", price: 0.00 },
                        { name: "Acerola", price: 0.00 },
                        { name: "Cajá", price: 0.00 },
                        { name: "Caju", price: 0.00 },
                        { name: "Cupuaçu", price: 0.00 },
                        { name: "Goiaba", price: 0.00 },
                        { name: "Graviola", price: 0.00 },
                        { name: "Maracuja", price: 0.00 },
                        { name: "Tamarindo", price: 0.00 }
                    ]
                }
            ]
        },
        {
            name: "Refrigerante Lata 350ml",
            price: 6.50,
            description: "Refrigerante Lata 350ml",
            image: "img/refri350.png",
            options: [
                {
                    title: "Escolha",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Coca-Cola", price: 0.00 },
                        { name: "Fanta", price: 0.00 },
                        { name: "Guaraná Jesus", price: 0.00 },
                        { name: "Guaraná Antártica", price: 0.00 }
                    ]
                }
            ]
        },
        {
            name: "Refrigerante Lata 269ml",
            price: 5.00,
            description: "Refrigerante Lata 269ml",
            image: "img/refri269.png",
            options: [
                {
                    title: "Escolha",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Coca-Cola", price: 0.00 },
                        { name: "Fanta", price: 0.00 },
                        { name: "Guaraná Jesus", price: 0.00 },
                        { name: "Guaraná Antártica", price: 0.00 }
                    ]
                }
            ]
        },
        {
            name: "Refrigerante 2L",
            price: 12.00,
            description: "RefrigeranteS 2L",
            image: "img/refri2l.png",
            options: [
                {
                    title: "Escolha",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Coca-Cola", price: 0.00 },
                        { name: "Fanta", price: 0.00 },
                        { name: "Guaraná Jesus", price: 0.00 },
                        { name: "Guaraná Antártica", price: 0.00 }
                    ]
                }
            ]
        }
    ],
    "Sobremesas": [
        {
            name: "Musse(Sabores)",
            price: 6.00,
            description: "<strong>Sabores: </strong>Maracujá, Abacaxi, Limão.",
            image: "img/musse.jpg",
            options: [
                {
                    title: "Sabor",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Maracujá", price: 0.00 },
                        { name: "Abacaxi", price: 0.00 },
                        { name: "Limão", price: 0.00 }
                    ]
                }
            ]
        },
        {
            name: "Pudim",
            price: 8.00,
            description: "Pudim Tradicional",
            image: "img/pudim.webp",
        },
        {
            name: "Bolo de Pote(Sabores)",
            price: 9.00,
            description: "<strong>Sabores: </strong>Chocolate ou Ninho.",
            image: "img/bolodepote.jpg",
            options: [
                {
                    title: "Sabor",
                    type: "radio", // Seleção única
                    required: true,
                    items: [
                        { name: "Chocolate", price: 0.00 },
                        { name: "Ninho", price: 0.00 }
                    ]
                }
            ]
        }
    ]
};

// --- 3. TABELA DE FRETES POR BAIRRO E CIDADE ---
// ESTRUTURA: "cidade-bairro": valor_do_frete
window.FREIGHT_TABLE_BY_NEIGHBORHOOD = {
    //"belo horizonte-centro": 5.00,
    //"belo horizonte-savassi": 6.50
    // ADICIONE SEUS PARES CIDADE-BAIRRO AQUI
};

// Se a cidade inteira tiver um CEP único, defina-o aqui.
window.CITY_WIDE_FREIGHT = {
    // ⚠️ Se a cidade tiver CEP Único, use o CEP Geral/Único aqui. 
    GENERAL_CEP: '65130-00', 
    // ⚠️ Nome da cidade que utiliza esse CEP (para garantir a checagem)
    CITY_NAME: 'Paco do Lumiar', 
    // Valor fixo de entrega para a cidade inteira
    FIXED_FREIGHT_COST: 5.00 
};

// --- 4. OPÇÕES DE PAGAMENTO ---
window.PAYMENT_OPTIONS = [
    "Dinheiro (Traga troco)",
    "Pix (CNPJ / Chave)",
    "Cartão de Crédito",
    "Cartão de Débito",
    "Vale Refeição" //Perguntar se Aceita **************************************
];

// --- 5. OPÇÕES DE ENTREGA/SERVIÇO ---
window.DELIVERY_OPTIONS = [
    "Entrega",
    "Retirada"

];
