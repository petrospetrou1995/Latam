// Language configuration and translations
const languages = {
    es: {
        // Page title
        title: 'LatamBrokerReviews - Reseñas de Brokers en América Latina',
        
        // Navigation
        nav: {
            home: 'Inicio',
            brokers: 'Brokers',
            allBrokers: 'Todos los Brokers',
            categories: 'Categorías',
            forex: 'Forex',
            stocks: 'Acciones',
            crypto: 'Criptomonedas',
            cfds: 'CFDs',
            commodities: 'Commodities',
            education: 'Educación y Capacitación',
            reviews: 'Reseñas',
            about: 'Acerca de',
            contact: 'Contacto',
            admin: 'Admin',
            login: 'Iniciar Sesión',
            logout: 'Cerrar Sesión'
        },
        
        // Hero Section
        hero: {
            title: 'Los Mejores Brokers de América Latina',
            subtitle: 'Descubre reseñas honestas y análisis detallados de los brokers más confiables para trading en Latinoamérica. Desde Libertex hasta otros brokers líderes.',
            buttonBrokers: 'Ver Brokers',
            buttonReviews: 'Leer Reseñas'
        },
        
        // Brokers Section
        brokers: {
            title: 'Brokers Destacados',
            subtitle: 'Los brokers más populares y mejor calificados en América Latina',
            viewAll: 'Ver Todos los Brokers',
            rating: 'Calificación',
            reviews: 'Reseñas',
            countries: 'Países',
            category: 'Categoría',
            languages: 'Idiomas',
            tradingPlatforms: 'Plataformas',
            accountTypes: 'Tipos de Cuenta',
            regulations: 'Regulaciones',
            visitWebsite: 'Visitar Sitio Web',
            visitSite: 'Visitar Sitio',
            readReviews: 'Leer Reseñas',
            details: 'Ver Detalles',
            mainFeatures: 'Características principales',
            about: 'Acerca de',
            stats: 'Estadísticas',
            descriptions: {
                'libertex': 'Libertex is one of the most reliable brokers for trading in Latin America, offering access to more than 300 financial instruments including Forex, CFDs, stocks and cryptocurrencies. With more than 20 years of experience, Libertex provides an intuitive trading platform and advanced tools for traders of all levels.',
                'xm-group': 'XM is a global broker with presence in more than 190 countries, offering trading in Forex, CFDs, stocks and commodities. With regulation in multiple jurisdictions, XM provides access to more than 1000 financial instruments with competitive spreads and fast execution.',
                'etoro': 'eToro is a leading social trading platform that allows users to copy the strategies of successful traders. With more than 20 million users worldwide, eToro offers trading in cryptocurrencies, stocks, ETFs and more.',
                'plus500': 'Plus500 is a leading CFD broker with more than 15 years of experience. It offers trading in more than 2000 instruments including Forex, stocks, indices, commodities and cryptocurrencies. With regulation in multiple jurisdictions, Plus500 is a reliable option for Latin American traders.',
                'avatrade': 'AvaTrade is a global broker with more than 15 years of experience, offering trading in Forex, CFDs, stocks and cryptocurrencies. With regulation in multiple jurisdictions and support in more than 20 languages, AvaTrade is an excellent option for Latin American traders.',
                'ig-markets': 'IG Markets is one of the oldest and most established brokers in the world, with more than 45 years of experience. It offers trading in more than 17,000 instruments including Forex, CFDs, stocks and indices. With regulation in multiple jurisdictions, IG is a premium option for experienced traders.'
            },
            features: {
                'Más de 1000 instrumentos': 'Más de 1000 instrumentos',
                'Más de 300 instrumentos': 'Más de 300 instrumentos',
                'Más de 2000 instrumentos': 'Más de 2000 instrumentos',
                'Más de 17,000 instrumentos': 'Más de 17,000 instrumentos',
                'Spreads bajos': 'Spreads bajos',
                'Educación gratuita': 'Educación gratuita',
                'Bonos de bienvenida': 'Bonos de bienvenida',
                'MetaTrader 4/5': 'MetaTrader 4/5',
                'Soporte 24/5': 'Soporte 24/5',
                'Regulación múltiple': 'Regulación múltiple',
                'Plataforma profesional': 'Plataforma profesional',
                'Educación premium': 'Educación premium',
                'Muchos instrumentos': 'Muchos instrumentos',
                'Spreads competitivos': 'Spreads competitivos',
                'Plataforma intuitiva': 'Plataforma intuitiva',
                'Sin comisiones': 'Sin comisiones',
                'Plataforma web': 'Plataforma web',
                'Criptomonedas': 'Criptomonedas',
                'Trading social': 'Trading social',
                'Destacado': 'Destacado',
                'Soporte en español': 'Soporte en español',
                'Soporte 24/5': 'Soporte 24/5',
                'Soporte profesional': 'Soporte profesional',
                'Fácil de usar': 'Fácil de usar'
            },
            comparison: {
                maxBrokers: 'Puedes comparar máximo 3 brokers a la vez.',
                alreadyAdded: 'Este broker ya está en la comparación.',
                noBrokers: 'No hay brokers para comparar.',
                noExport: 'No hay brokers para exportar.'
            },
            // Brokers page specific translations
            pageTitle: 'Brokers en América Latina',
            hero: {
                title: 'Los Mejores Brokers de América Latina',
                subtitle: 'Compara y encuentra el broker perfecto para tus necesidades de trading'
            },
            filters: {
                category: 'Categoría:',
                allCategories: 'Todas las Categorías',
                forex: 'Forex',
                stocks: 'Acciones',
                crypto: 'Criptomonedas',
                cfds: 'CFDs',
                commodities: 'Commodities',
                rating: 'Calificación:',
                allRatings: 'Todas las Calificaciones',
                country: 'País:',
                allCountries: 'Todos los Países',
                sort: 'Ordenar por:',
                sortRating: 'Calificación',
                reviews: 'Reseñas',
                name: 'Nombre',
                apply: 'Aplicar Filtros',
                clear: 'Limpiar'
            },
            view: {
                grid: 'Cuadrícula',
                list: 'Lista',
                compare: 'Comparar'
            },
            compare: {
                title: 'Comparar Brokers',
                close: 'Cerrar',
                export: 'Exportar'
            }
        },
        
        // Why Choose Us
        whyChoose: {
            title: '¿Por Qué Elegir LatamBrokerReviews?',
            verified: {
                title: 'Reseñas Verificadas',
                description: 'Todas nuestras reseñas son verificadas y provienen de traders reales de América Latina.'
            },
            analysis: {
                title: 'Análisis Detallado',
                description: 'Proporcionamos análisis completos de spreads, comisiones, plataformas y regulaciones.'
            },
            community: {
                title: 'Comunidad Latinoamericana',
                description: 'Conectamos traders de toda América Latina para compartir experiencias y conocimientos.'
            },
            ai: {
                title: 'IA Avanzada',
                description: 'Utilizamos inteligencia artificial para análisis de mercado y recomendaciones personalizadas.'
            }
        },
        
        // Reviews Section
        reviews: {
            title: 'Reseñas Recientes',
            subtitle: 'Lo que dicen nuestros usuarios sobre los brokers',
            viewAll: 'Ver Todas las Reseñas',
            loadMore: 'Cargar Más Reseñas',
            rating: 'Calificación',
            helpful: 'Útil',
            notHelpful: 'No útil',
            verified: 'Verificado',
            // Additional review translations
            readMore: 'Leer más',
            showLess: 'Mostrar menos',
            experience: {
                beginner: 'Principiante',
                intermediate: 'Intermedio',
                advanced: 'Avanzado'
            },
            duration: {
                'less-than-1-year': 'Menos de 1 año',
                '1-3-years': '1-3 años',
                '3-5-years': '3-5 años',
                'more-than-5-years': 'Más de 5 años'
            },
            sampleReviews: {
                libertex1: {
                    title: 'Excelente plataforma para trading',
                    content: 'He estado usando Libertex por más de 2 años y la experiencia ha sido excelente. La plataforma es muy intuitiva y el soporte al cliente es excepcional. Los spreads son competitivos y la ejecución es rápida. Lo recomiendo totalmente.',
                    pros: ['Plataforma fácil de usar', 'Soporte en español', 'Spreads competitivos'],
                    cons: ['Limitado en algunos países']
                },
                libertex2: {
                    title: 'Buena opción para principiantes',
                    content: 'Como principiante en el trading, Libertex me ha ayudado mucho. La cuenta demo es perfecta para aprender y la plataforma es muy fácil de usar. El soporte al cliente responde rápido y en español.',
                    pros: ['Cuenta demo gratuita', 'Fácil de usar', 'Soporte en español'],
                    cons: ['Pocas herramientas de análisis']
                },
                xm1: {
                    title: 'Muy buena experiencia',
                    content: 'XM Group es una excelente opción para trading. Los spreads son muy competitivos y la plataforma es estable. El soporte al cliente es muy profesional y siempre están disponibles.',
                    pros: ['Spreads competitivos', 'Plataforma estable', 'Soporte profesional'],
                    cons: ['Depósito mínimo alto']
                },
                etoro1: {
                    title: 'Innovador y fácil de usar',
                    content: 'eToro es perfecto para principiantes. La función de copiar traders es genial y me ha ayudado a aprender mucho. La plataforma es muy intuitiva y fácil de usar.',
                    pros: ['Función de copiar traders', 'Fácil de usar', 'Bueno para principiantes'],
                    cons: ['Spreads altos en Forex']
                }
            }
        },
        
        // About Section
        about: {
            title: 'Acerca de LatamBrokerReviews',
            description1: 'Somos la plataforma líder en reseñas de brokers para traders de América Latina. Nuestra misión es proporcionar información transparente y confiable para ayudar a los traders a tomar decisiones informadas.',
            description2: 'Con años de experiencia en el mercado financiero latinoamericano, nuestro equipo de expertos analiza cada broker considerando regulaciones locales, métodos de pago, soporte en español y portugués, y las necesidades específicas de los traders de la región.',
            brokersAnalyzed: 'Brokers Analizados',
            verifiedReviews: 'Reseñas Verificadas',
            activeUsers: 'Usuarios Activos'
        },
        
        // Contact Section
        contact: {
            title: 'Contáctanos',
            subtitle: '¿Tienes preguntas o sugerencias? Nos encantaría escucharte',
            name: 'Tu nombre',
            email: 'Tu email',
            subject: 'Asunto',
            message: 'Tu mensaje',
            send: 'Enviar Mensaje',
            emailLabel: 'Email',
            phoneLabel: 'Teléfono',
            locationLabel: 'Ubicación',
            phone: '+1 (555) 123-4567',
            location: 'América Latina'
        },
        
        // Footer
        footer: {
            title: 'LatamBrokerReviews',
            description: 'La plataforma líder en reseñas de brokers para América Latina.',
            quickLinks: 'Enlaces Rápidos',
            categories: 'Categorías',
            copyright: 'Todos los derechos reservados.',
            legal: 'Legal',
            forex: 'Forex',
            stocks: 'Acciones',
            crypto: 'Criptomonedas',
            cfds: 'CFDs',
            privacy: 'Política de Privacidad',
            terms: 'Términos de Uso',
            disclaimer: 'Descargo de Responsabilidad',
            copyright: 'Todos los derechos reservados.'
        },
        
        // Forex page
        forex: {
            hero: {
                title: 'Forex Trading en América Latina',
                subtitle: 'Descubre el mercado de divisas más grande del mundo. Aprende estrategias, análisis técnico y fundamental para trading de Forex en Latinoamérica.',
                dailyVolume: 'Volumen Diario',
                marketOpen: 'Mercado Abierto',
                currencyPairs: 'Pares de Divisas'
            },
            whatIs: {
                title: '¿Qué es el Trading de Forex?',
                globalMarket: {
                    title: 'Mercado Global',
                    description: 'El Forex es el mercado financiero más grande del mundo, con un volumen de transacciones diario de más de $6.6 billones.'
                },
                hours24: {
                    title: '24 Horas al Día',
                    description: 'El mercado Forex está abierto 24 horas al día, 5 días a la semana, permitiendo trading en cualquier momento.'
                },
                highLiquidity: {
                    title: 'Alta Liquidez',
                    description: 'La alta liquidez del mercado Forex permite ejecutar operaciones grandes sin afectar significativamente los precios.'
                }
            },
            majorPairs: {
                title: 'Principales Pares de Divisas',
                eurUsd: {
                    symbol: 'EUR/USD',
                    name: 'Euro / Dólar Americano',
                    description: 'El par más negociado del mundo, representa la economía europea vs. estadounidense.',
                    spread: 'Spread: 0.6-1.2 pips',
                    volatility: 'Volatilidad: Media'
                },
                gbpUsd: {
                    symbol: 'GBP/USD',
                    name: 'Libra Esterlina / Dólar',
                    description: 'Conocido como "Cable", es muy popular entre traders por su volatilidad.',
                    spread: 'Spread: 1.0-2.0 pips',
                    volatility: 'Volatilidad: Alta'
                },
                usdJpy: {
                    symbol: 'USD/JPY',
                    name: 'Dólar / Yen Japonés',
                    description: 'Popular en sesión asiática, conocido por su tendencia a movimientos prolongados.',
                    spread: 'Spread: 0.7-1.5 pips',
                    volatility: 'Volatilidad: Media'
                },
                usdChf: {
                    symbol: 'USD/CHF',
                    name: 'Dólar / Franco Suizo',
                    description: 'Considerado un "refugio seguro", popular durante incertidumbre económica.',
                    spread: 'Spread: 1.0-2.0 pips',
                    volatility: 'Volatilidad: Baja'
                }
            },
            strategies: {
                title: 'Estrategias de Trading Forex',
                technicalAnalysis: {
                    title: 'Análisis Técnico',
                    description: 'Utiliza gráficos, indicadores y patrones para predecir movimientos de precios.',
                    items: ['Medias móviles', 'RSI y MACD', 'Soporte y resistencia', 'Formaciones de velas']
                },
                fundamentalAnalysis: {
                    title: 'Análisis Fundamental',
                    description: 'Evalúa factores económicos, políticos y sociales que afectan las divisas.',
                    items: ['PIB y inflación', 'Tasas de interés', 'Política monetaria', 'Eventos geopolíticos']
                },
                newsTrading: {
                    title: 'Trading de Noticias',
                    description: 'Opera basándose en eventos económicos importantes y anuncios.',
                    items: ['NFP (Non-Farm Payrolls)', 'Decisiones de bancos centrales', 'Inflación y PIB', 'Elecciones y referendos']
                }
            },
            bestBrokers: {
                title: 'Mejores Brokers de Forex para Latinoamérica'
            },
            tips: {
                title: 'Consejos para Trading de Forex',
                riskManagement: {
                    title: 'Gestión de Riesgo',
                    description: 'Nunca arriesgues más del 1-2% de tu capital en una sola operación. Usa stop loss siempre.'
                },
                education: {
                    title: 'Educación Continua',
                    description: 'Mantente actualizado con noticias económicas, análisis de mercado y nuevas estrategias.'
                },
                analysis: {
                    title: 'Análisis Previo',
                    description: 'Analiza el mercado antes de operar. Revisa calendarios económicos y noticias importantes.'
                },
                psychology: {
                    title: 'Psicología del Trading',
                    description: 'Mantén la calma y no dejes que las emociones guíen tus decisiones de trading.'
                }
            }
        },
        
        // Crypto page
        crypto: {
            hero: {
                title: 'Crypto Trading en América Latina',
                subtitle: 'Descubre el mundo de las criptomonedas. Bitcoin, Ethereum, altcoins y más. Aprende estrategias de trading crypto para el mercado latinoamericano.',
                marketCap: 'Capitalización',
                marketHours: 'Mercado Abierto',
                cryptocurrencies: 'Criptomonedas'
            },
            bestBrokers: {
                title: 'Mejores Brokers de Crypto para Latinoamérica'
            },
            whatIs: {
                title: '¿Qué son las Criptomonedas?',
                digitalCurrency: {
                    title: 'Moneda Digital',
                    description: 'Las criptomonedas son monedas digitales que utilizan criptografía para asegurar transacciones y controlar la creación de nuevas unidades.'
                },
                blockchain: {
                    title: 'Tecnología Blockchain',
                    description: 'Utilizan tecnología blockchain, un libro de contabilidad distribuido que registra todas las transacciones de forma segura.'
                },
                decentralized: {
                    title: 'Descentralizadas',
                    description: 'No están controladas por gobiernos o bancos centrales, ofreciendo mayor autonomía financiera.'
                }
            },
            majorCryptos: {
                title: 'Principales Criptomonedas',
                bitcoin: {
                    title: 'Bitcoin (BTC)',
                    description: 'La primera y más valiosa criptomoneda. Conocida como "oro digital" por su escasez y valor de reserva.',
                    dominance: 'Dominancia: ~40%',
                    volatility: 'Volatilidad: Alta'
                },
                ethereum: {
                    title: 'Ethereum (ETH)',
                    description: 'Plataforma de contratos inteligentes y aplicaciones descentralizadas (DApps).',
                    dominance: 'Dominancia: ~20%',
                    volatility: 'Volatilidad: Alta'
                },
                cardano: {
                    title: 'Cardano (ADA)',
                    description: 'Plataforma de blockchain de tercera generación enfocada en sostenibilidad y escalabilidad.',
                    dominance: 'Dominancia: ~2%',
                    volatility: 'Volatilidad: Muy Alta'
                },
                solana: {
                    title: 'Solana (SOL)',
                    description: 'Blockchain de alto rendimiento conocida por sus transacciones rápidas y bajas comisiones.',
                    dominance: 'Dominancia: ~1%',
                    volatility: 'Volatilidad: Muy Alta'
                }
            },
            strategies: {
                title: 'Estrategias de Trading Crypto',
                dayTrading: {
                    title: 'Day Trading',
                    description: 'Operaciones intradía aprovechando la alta volatilidad del mercado crypto.',
                    items: ['Análisis técnico en tiempo real', 'Scalping con spreads bajos', 'Momentum trading', 'Breakout trading']
                },
                swingTrading: {
                    title: 'Swing Trading',
                    description: 'Posiciones mantenidas por varios días o semanas para capturar movimientos mayores.',
                    items: ['Análisis de tendencias', 'Soporte y resistencia', 'Indicadores técnicos', 'Análisis fundamental']
                },
                hodling: {
                    title: 'HODLing',
                    description: 'Estrategia de compra y mantenimiento a largo plazo, popular en crypto.',
                    items: ['Dollar-cost averaging', 'Análisis fundamental', 'Adopción institucional', 'Regulación gubernamental']
                }
            },
            tips: {
                title: 'Consejos para Trading de Crypto',
                security: {
                    title: 'Seguridad',
                    description: 'Usa wallets seguros, activa 2FA y nunca compartas tus claves privadas. La seguridad es crucial en crypto.'
                },
                volatility: {
                    title: 'Volatilidad',
                    description: 'Las crypto son muy volátiles. Usa stop loss y no inviertas más de lo que puedes permitirte perder.'
                },
                news: {
                    title: 'Noticias',
                    description: 'Mantente informado sobre regulaciones, adopción institucional y desarrollos tecnológicos.'
                },
                diversification: {
                    title: 'Diversificación',
                    description: 'No pongas todos tus huevos en una canasta. Diversifica entre diferentes criptomonedas.'
                }
            }
        },
        
        // Stocks page
        stocks: {
            hero: {
                title: 'Stocks Trading en América Latina',
                subtitle: 'Invierte en las mejores empresas del mundo. Acceso a mercados globales, análisis fundamental y estrategias de trading de acciones.',
                globalCap: 'Capitalización Global',
                nyseHours: 'Horario NYSE',
                listedCompanies: 'Empresas Listadas'
            },
            whatIs: {
                title: '¿Qué es el Trading de Acciones?',
                ownership: {
                    title: 'Propiedad Empresarial',
                    description: 'Las acciones representan una parte de la propiedad de una empresa. Al comprar acciones, te conviertes en accionista.'
                },
                growth: {
                    title: 'Potencial de Crecimiento',
                    description: 'Las acciones pueden aumentar de valor a medida que la empresa crece y genera beneficios.'
                },
                dividends: {
                    title: 'Dividendos',
                    description: 'Muchas empresas pagan dividendos a sus accionistas como parte de sus beneficios.'
                }
            },
            bestBrokers: {
                title: 'Mejores Brokers de Acciones para Latinoamérica'
            },
            strategies: {
                title: 'Estrategias de Trading de Acciones',
                dayTrading: {
                    title: 'Day Trading',
                    description: 'Compra y venta de acciones dentro del mismo día para aprovechar movimientos de precios.',
                    items: ['Análisis técnico en tiempo real', 'Scalping con spreads bajos', 'Momentum trading', 'Breakout trading']
                },
                swingTrading: {
                    title: 'Swing Trading',
                    description: 'Posiciones mantenidas por varios días o semanas para capturar movimientos de tendencia.',
                    items: ['Análisis de tendencias', 'Soporte y resistencia', 'Indicadores técnicos', 'Análisis de volumen']
                },
                valueInvesting: {
                    title: 'Value Investing',
                    description: 'Inversión a largo plazo basada en el valor fundamental de las empresas.',
                    items: ['Análisis fundamental', 'Ratios financieros', 'Análisis de sectores', 'Diversificación']
                }
            },
            analysis: {
                title: 'Análisis de Acciones',
                technical: {
                    title: 'Análisis Técnico',
                    description: 'Estudia gráficos y patrones de precios para predecir movimientos futuros.',
                    items: ['Medias móviles', 'RSI y MACD', 'Soporte y resistencia', 'Formaciones de velas']
                },
                fundamental: {
                    title: 'Análisis Fundamental',
                    description: 'Evalúa la salud financiera y el valor intrínseco de las empresas.',
                    items: ['Estados financieros', 'Ratios P/E, P/B', 'Crecimiento de ingresos', 'Ventaja competitiva']
                },
                sentiment: {
                    title: 'Análisis de Sentimiento',
                    description: 'Evalúa el sentimiento del mercado y las noticias que afectan las acciones.',
                    items: ['Noticias corporativas', 'Earnings reports', 'Cambios en management', 'Regulaciones']
                }
            },
            tips: {
                title: 'Consejos para Trading de Acciones',
                riskManagement: {
                    title: 'Gestión de Riesgo',
                    description: 'Nunca arriesgues más del 1-2% de tu capital en una sola operación. Usa stop loss siempre.'
                },
                education: {
                    title: 'Educación Continua',
                    description: 'Mantente actualizado con noticias del mercado, análisis de empresas y nuevas estrategias.'
                },
                analysis: {
                    title: 'Análisis Previo',
                    description: 'Analiza las empresas antes de invertir. Revisa estados financieros y perspectivas de crecimiento.'
                },
                diversification: {
                    title: 'Diversificación',
                    description: 'No pongas todos tus huevos en una canasta. Diversifica entre sectores y geografías.'
                }
            },
            majorMarkets: {
                title: 'Principales Mercados Bursátiles',
                nyse: {
                    name: 'New York Stock Exchange',
                    description: 'El mercado bursátil más grande del mundo, hogar de empresas como Apple, Microsoft y Amazon.',
                    marketCap: 'Capitalización: $30T',
                    hours: 'Horario: 9:30-16:00 EST'
                },
                nasdaq: {
                    name: 'Nasdaq Stock Market',
                    description: 'Especializado en tecnología, hogar de empresas como Tesla, Google y Facebook.',
                    marketCap: 'Capitalización: $20T',
                    hours: 'Horario: 9:30-16:00 EST'
                },
                lse: {
                    name: 'London Stock Exchange',
                    description: 'Uno de los mercados más antiguos del mundo, centro financiero de Europa.',
                    marketCap: 'Capitalización: $4T',
                    hours: 'Horario: 8:00-16:30 GMT'
                },
                tse: {
                    name: 'Tokyo Stock Exchange',
                    description: 'El mercado más grande de Asia, hogar de empresas como Toyota, Sony y Nintendo.',
                    marketCap: 'Capitalización: $6T',
                    hours: 'Horario: 9:00-15:00 JST'
                }
            }
        },
        
        // CFD page
        cfd: {
            hero: {
                title: 'CFD Trading en América Latina',
                subtitle: 'Opera con Contratos por Diferencia (CFDs) en miles de instrumentos. Accede a mercados globales con leverage y sin comisiones.'
            },
            bestBrokers: {
                title: 'Mejores Brokers de CFDs para Latinoamérica'
            },
            whatIs: {
                title: '¿Qué son los CFDs?',
                contracts: {
                    title: 'Contratos por Diferencia',
                    description: 'Los CFDs son contratos entre un trader y un broker para intercambiar la diferencia en el precio de un activo.'
                },
                noOwnership: {
                    title: 'Sin Propiedad Real',
                    description: 'No posees el activo subyacente, solo especulas sobre la dirección del precio.'
                },
                leverage: {
                    title: 'Leverage',
                    description: 'Puedes controlar posiciones más grandes con menos capital, amplificando tanto ganancias como pérdidas.'
                }
            },
            advantages: {
                title: 'Ventajas de los CFDs',
                globalAccess: {
                    title: 'Acceso Global',
                    description: 'Opera en mercados de todo el mundo desde una sola plataforma.',
                    items: ['Forex', 'Acciones', 'Commodities', 'Índices']
                },
                leverage: {
                    title: 'Leverage',
                    description: 'Amplifica tu poder de compra con ratios de leverage de hasta 1:500.',
                    items: ['Mayor exposición', 'Menor capital requerido', 'Potencial de mayores ganancias', 'Riesgo amplificado']
                },
                longShort: {
                    title: 'Posiciones Largas y Cortas',
                    description: 'Puedes ganar tanto en mercados alcistas como bajistas.',
                    items: ['Comprar (Long)', 'Vender (Short)', 'Hedging', 'Estrategias complejas']
                },
                noCommissions: {
                    title: 'Sin Comisiones',
                    description: 'Muchos brokers ofrecen CFDs sin comisiones, solo spreads.',
                    items: ['Costos transparentes', 'Spreads competitivos', 'Sin comisiones ocultas', 'Costos predecibles']
                }
            },
            markets: {
                title: 'Mercados Disponibles en CFDs',
                forex: {
                    title: 'Forex',
                    subtitle: 'Pares de Divisas',
                    description: 'Opera con los principales pares de divisas con spreads competitivos.',
                    leverage: 'Leverage: 1:500',
                    spreads: 'Spreads: 0.6 pips'
                },
                stocks: {
                    title: 'Acciones',
                    subtitle: 'Stocks Globales',
                    description: 'Accede a las mejores acciones del mundo sin comisiones.',
                    leverage: 'Leverage: 1:20',
                    commissions: 'Sin Comisiones'
                },
                commodities: {
                    title: 'Commodities',
                    subtitle: 'Materias Primas',
                    description: 'Oro, petróleo, plata y más commodities con leverage.',
                    leverage: 'Leverage: 1:100',
                    hours: '24/5 Trading'
                },
                indices: {
                    title: 'Índices',
                    subtitle: 'Índices Bursátiles',
                    description: 'Opera con los principales índices mundiales como S&P 500, NASDAQ.',
                    leverage: 'Leverage: 1:200',
                    spreads: 'Spreads Bajos'
                }
            },
            strategies: {
                title: 'Estrategias de Trading de CFDs',
                dayTrading: {
                    title: 'Day Trading',
                    description: 'Operaciones intradía aprovechando la volatilidad y el leverage de los CFDs.',
                    items: ['Scalping', 'Momentum trading', 'Breakout trading', 'News trading']
                },
                hedging: {
                    title: 'Hedging',
                    description: 'Protege tu portafolio abriendo posiciones opuestas en CFDs.',
                    items: ['Protección de cartera', 'Reducción de riesgo', 'Estrategias complejas', 'Gestión de exposición']
                },
                swingTrading: {
                    title: 'Swing Trading',
                    description: 'Posiciones mantenidas por varios días para capturar movimientos de tendencia.',
                    items: ['Análisis técnico', 'Análisis fundamental', 'Gestión de riesgo', 'Stop loss']
                }
            },
            riskManagement: {
                title: 'Gestión de Riesgo en CFDs',
                stopLoss: {
                    title: 'Stop Loss',
                    description: 'Establece límites de pérdida automáticos para proteger tu capital.'
                },
                takeProfit: {
                    title: 'Take Profit',
                    description: 'Define objetivos de ganancia para cerrar posiciones automáticamente.'
                },
                responsibleLeverage: {
                    title: 'Leverage Responsable',
                    description: 'Usa leverage moderado para evitar pérdidas excesivas.'
                },
                diversification: {
                    title: 'Diversificación',
                    description: 'No concentres todo tu capital en una sola posición o mercado.'
                }
            },
            tips: {
                title: 'Consejos para Trading de CFDs',
                education: {
                    title: 'Educación',
                    description: 'Aprende sobre análisis técnico, fundamental y gestión de riesgo antes de operar con leverage.'
                },
                practice: {
                    title: 'Práctica',
                    description: 'Usa cuentas demo para practicar estrategias sin riesgo real antes de operar con dinero.'
                },
                capitalManagement: {
                    title: 'Gestión de Capital',
                    description: 'Nunca arriesgues más del 1-2% de tu capital en una sola operación.'
                },
                news: {
                    title: 'Noticias',
                    description: 'Mantente informado sobre eventos económicos que pueden afectar los mercados.'
                }
            }
        },
        
        // Commodities page
        commodities: {
            hero: {
                title: 'Commodities Trading en América Latina',
                subtitle: 'Invierte en materias primas como oro, petróleo, plata y cobre. Diversifica tu portafolio con commodities y protege tu capital contra la inflación.'
            },
            whatAre: {
                title: '¿Qué son las Commodities?',
                rawMaterials: {
                    title: 'Materias Primas',
                    description: 'Las commodities son materias primas básicas que se utilizan en el comercio y que son intercambiables con otros productos del mismo tipo.'
                },
                inflationProtection: {
                    title: 'Protección Inflacionaria',
                    description: 'Las commodities suelen mantener su valor durante períodos de inflación, actuando como refugio seguro para los inversores.'
                },
                diversification: {
                    title: 'Diversificación',
                    description: 'Agregar commodities a tu portafolio puede reducir el riesgo general y mejorar los rendimientos a largo plazo.'
                }
            },
            majorCommodities: {
                title: 'Principales Commodities',
                gold: {
                    title: 'Oro (XAU/USD)',
                    symbol: 'GOLD',
                    description: 'El metal precioso más popular, considerado un refugio seguro durante la incertidumbre económica.',
                    volatility: 'Volatilidad: Media',
                    liquidity: 'Liquidez: Alta'
                },
                oil: {
                    title: 'Petróleo (WTI)',
                    symbol: 'OIL',
                    description: 'El crudo West Texas Intermediate es el benchmark más importante del mercado petrolero.',
                    volatility: 'Volatilidad: Alta',
                    liquidity: 'Liquidez: Muy Alta'
                },
                silver: {
                    title: 'Plata (XAG/USD)',
                    symbol: 'SILVER',
                    description: 'Metal precioso industrial con aplicaciones en tecnología, medicina y joyería.',
                    volatility: 'Volatilidad: Alta',
                    liquidity: 'Liquidez: Media'
                },
                copper: {
                    title: 'Cobre',
                    symbol: 'COPPER',
                    description: 'Metal industrial esencial para la construcción, electrónica y energía renovable.',
                    volatility: 'Volatilidad: Media',
                    liquidity: 'Liquidez: Media'
                }
            },
            categories: {
                title: 'Categorías de Commodities',
                preciousMetals: {
                    title: 'Metales Preciosos',
                    description: 'Oro, plata, platino y paladio. Considerados refugios seguros durante la incertidumbre.',
                    items: ['Oro (XAU/USD)', 'Plata (XAG/USD)', 'Platino', 'Paladio']
                },
                energy: {
                    title: 'Energía',
                    description: 'Petróleo, gas natural y productos refinados. Altamente volátiles y sensibles a eventos geopolíticos.',
                    items: ['Petróleo WTI', 'Petróleo Brent', 'Gas Natural', 'Gasolina']
                },
                agricultural: {
                    title: 'Agrícolas',
                    description: 'Productos agrícolas como trigo, maíz, soja y café. Afectados por el clima y la demanda global.',
                    items: ['Trigo', 'Maíz', 'Soja', 'Café']
                },
                industrialMetals: {
                    title: 'Metales Industriales',
                    description: 'Cobre, aluminio, zinc y níquel. Esenciales para la industria y la construcción.',
                    items: ['Cobre', 'Aluminio', 'Zinc', 'Níquel']
                }
            },
            strategies: {
                title: 'Estrategias de Trading de Commodities',
                trendFollowing: {
                    title: 'Trend Following',
                    description: 'Seguir las tendencias a largo plazo en los mercados de commodities.',
                    items: ['Análisis de tendencias', 'Medias móviles', 'Breakouts', 'Momentum trading']
                },
                spreadTrading: {
                    title: 'Spread Trading',
                    description: 'Operar con la diferencia de precios entre commodities relacionados.',
                    items: ['WTI vs Brent', 'Oro vs Plata', 'Diferenciales estacionales', 'Arbitraje geográfico']
                },
                seasonalTrading: {
                    title: 'Trading Estacional',
                    description: 'Aprovechar patrones estacionales en los precios de commodities.',
                    items: ['Patrones estacionales', 'Análisis histórico', 'Ciclos de demanda', 'Eventos climáticos']
                }
            },
            bestBrokers: {
                title: 'Mejores Brokers de Commodities para Latinoamérica'
            },
            factors: {
                title: 'Factores que Afectan las Commodities',
                geopolitics: {
                    title: 'Geopolítica',
                    description: 'Conflictos, sanciones y tensiones internacionales pueden afectar significativamente los precios.'
                },
                climate: {
                    title: 'Clima',
                    description: 'Sequías, inundaciones y eventos climáticos extremos impactan los precios agrícolas.'
                },
                globalDemand: {
                    title: 'Demanda Global',
                    description: 'El crecimiento económico y la industrialización afectan la demanda de commodities.'
                },
                usd: {
                    title: 'Dólar Americano',
                    description: 'La fortaleza del USD generalmente presiona los precios de commodities.'
                }
            },
            tips: {
                title: 'Consejos para Trading de Commodities',
                riskManagement: {
                    title: 'Gestión de Riesgo',
                    description: 'Las commodities son volátiles. Usa stop loss y no arriesgues más del 1-2% por operación.'
                },
                globalNews: {
                    title: 'Noticias Globales',
                    description: 'Mantente informado sobre eventos geopolíticos, clima y datos económicos que afectan las commodities.'
                },
                fundamentalAnalysis: {
                    title: 'Análisis Fundamental',
                    description: 'Estudia la oferta y demanda, inventarios y factores estacionales de cada commodity.'
                },
                diversification: {
                    title: 'Diversificación',
                    description: 'No concentres todo en una sola commodity. Diversifica entre metales, energía y agrícolas.'
                }
            }
        },
        
        // Education page
        education: {
            hero: {
                title: 'Educación y Capacitación en Trading',
                subtitle: 'Aprende todo lo que necesitas saber sobre brokers, inversiones y trading. Guías completas, cursos, estrategias y recursos educativos para traders de todos los niveles.',
                courses: 'Cursos Disponibles',
                access: 'Acceso Ilimitado',
                students: 'Estudiantes'
            },
            whatIs: {
                title: '¿Por Qué es Importante la Educación en Trading?',
                fundamentals: {
                    title: 'Fundamentos Sólidos',
                    description: 'Construye una base sólida de conocimientos sobre mercados financieros, análisis técnico y fundamental, y gestión de riesgos.'
                },
                riskManagement: {
                    title: 'Gestión de Riesgos',
                    description: 'Aprende a proteger tu capital y gestionar el riesgo de manera efectiva para maximizar tus oportunidades de éxito.'
                },
                strategies: {
                    title: 'Desarrollo de Estrategias',
                    description: 'Domina diferentes estrategias de trading adaptadas a tu estilo y objetivos financieros.'
                },
                continuousLearning: {
                    title: 'Aprendizaje Continuo',
                    description: 'Los mercados cambian constantemente. La educación continua te mantiene actualizado con las últimas tendencias y técnicas.'
                }
            },
            topics: {
                title: 'Temas de Educación',
                brokers: {
                    title: 'Comprensión de Brokers',
                    description: 'Aprende a elegir el broker adecuado, entender spreads, comisiones, regulaciones y características importantes.',
                    items: ['Tipos de brokers y regulaciones', 'Análisis de spreads y comisiones', 'Plataformas de trading', 'Herramientas y recursos']
                },
                investments: {
                    title: 'Fundamentos de Inversión',
                    description: 'Comprende los diferentes tipos de inversiones, diversificación de portafolio y construcción de riqueza a largo plazo.',
                    items: ['Tipos de activos financieros', 'Diversificación de portafolio', 'Análisis fundamental', 'Planificación financiera']
                },
                technicalAnalysis: {
                    title: 'Análisis Técnico',
                    description: 'Domina el análisis técnico: gráficos, indicadores, patrones y herramientas para tomar decisiones informadas.',
                    items: ['Tipos de gráficos y velas', 'Indicadores técnicos', 'Patrones de precios', 'Soporte y resistencia']
                },
                fundamentalAnalysis: {
                    title: 'Análisis Fundamental',
                    description: 'Aprende a analizar factores económicos, noticias y eventos que afectan los mercados financieros.',
                    items: ['Indicadores económicos', 'Noticias y eventos', 'Política monetaria', 'Análisis de empresas']
                },
                riskManagement: {
                    title: 'Gestión de Riesgos',
                    description: 'Protege tu capital aprendiendo técnicas avanzadas de gestión de riesgos y control de posición.',
                    items: ['Tamaño de posición', 'Stop loss y take profit', 'Ratio riesgo/beneficio', 'Límites de pérdida']
                },
                tradingPsychology: {
                    title: 'Psicología del Trading',
                    description: 'Desarrolla la mentalidad correcta para el trading exitoso y aprende a controlar emociones.',
                    items: ['Control emocional', 'Disciplina y paciencia', 'Manejo de pérdidas', 'Plan de trading']
                }
            },
            bestBrokers: {
                title: 'Mejores Brokers con Recursos Educativos'
            },
            videos: {
                title: 'Videos Educativos',
                subtitle: 'Aprende con nuestros videos tutoriales sobre brokers e inversiones',
                brokers: {
                    title: 'Guía Completa de Brokers',
                    description: 'Aprende cómo elegir el mejor broker, entender regulaciones, spreads y comisiones.'
                },
                investing: {
                    title: 'Cómo Invertir en los Mercados',
                    description: 'Descubre estrategias de inversión, análisis técnico y fundamental para principiantes.'
                },
                riskManagement: {
                    title: 'Gestión de Riesgos en Trading',
                    description: 'Aprende técnicas avanzadas para proteger tu capital y gestionar el riesgo efectivamente.'
                },
                tradingPlatforms: {
                    title: 'Tutorial de Plataformas de Trading',
                    description: 'Guía completa sobre MetaTrader, plataformas web y móviles para trading.'
                },
                forex: {
                    title: 'Trading de Forex para Principiantes',
                    description: 'Introducción completa al mercado de divisas, pares de monedas y estrategias básicas.'
                },
                stocks: {
                    title: 'Inversión en Acciones - Guía Completa',
                    description: 'Aprende a analizar acciones, construir un portafolio y comenzar a invertir en el mercado bursátil.'
                }
            },
            quiz: {
                title: 'Prueba de Conocimientos',
                subtitle: 'Pon a prueba tu conocimiento sobre inversiones y trading',
                question: 'Pregunta',
                of: 'de',
                submit: 'Ver Resultados',
                reset: 'Reiniciar Quiz',
                result: 'Resultado',
                correct: 'Correcto',
                incorrect: 'Incorrecto',
                score: 'Puntuación',
                percentage: 'Porcentaje',
                feedback: {
                    excellent: '¡Excelente! Tienes un conocimiento sólido sobre inversiones.',
                    good: '¡Bien hecho! Tienes buenos conocimientos, pero hay espacio para mejorar.',
                    average: 'No está mal. Sigue aprendiendo para mejorar tus conocimientos.',
                    poor: 'Sigue estudiando. Hay mucho que aprender sobre inversiones.'
                },
                questions: [
                    {
                        question: '¿Qué es un spread en trading?',
                        options: [
                            'La diferencia entre el precio de compra y venta',
                            'El tiempo que dura una operación',
                            'El margen de beneficio del broker',
                            'La cantidad máxima que puedes invertir'
                        ],
                        correct: 0
                    },
                    {
                        question: '¿Qué significa diversificación de portafolio?',
                        options: [
                            'Invertir todo tu dinero en una sola acción',
                            'Distribuir inversiones en diferentes activos para reducir riesgo',
                            'Comprar solo acciones de tecnología',
                            'Invertir solo en mercados locales'
                        ],
                        correct: 1
                    },
                    {
                        question: '¿Qué es un stop loss?',
                        options: [
                            'Una orden para cerrar una posición en pérdidas',
                            'Una orden para maximizar ganancias',
                            'Un límite de tiempo para operar',
                            'Un tipo de cuenta de trading'
                        ],
                        correct: 0
                    },
                    {
                        question: '¿Cuál es el principio básico de gestión de riesgo?',
                        options: [
                            'Nunca arriesgar más del 1-2% del capital por operación',
                            'Invertir todo el capital disponible',
                            'Seguir siempre las recomendaciones de otros',
                            'Operar solo en días específicos'
                        ],
                        correct: 0
                    },
                    {
                        question: '¿Qué es el análisis técnico?',
                        options: [
                            'Análisis de gráficos y patrones de precios',
                            'Análisis de estados financieros de empresas',
                            'Análisis de noticias económicas',
                            'Análisis de recomendaciones de brokers'
                        ],
                        correct: 0
                    },
                    {
                        question: '¿Qué es un broker regulado?',
                        options: [
                            'Un broker que opera sin supervisión',
                            'Un broker supervisado por autoridades financieras',
                            'Un broker que solo acepta inversores grandes',
                            'Un broker que no cobra comisiones'
                        ],
                        correct: 1
                    },
                    {
                        question: '¿Qué significa apalancamiento (leverage)?',
                        options: [
                            'Operar con más capital del que tienes',
                            'Invertir solo con dinero propio',
                            'La cantidad de tiempo que operas',
                            'El número de operaciones por día'
                        ],
                        correct: 0
                    },
                    {
                        question: '¿Qué es mejor para principiantes?',
                        options: [
                            'Empezar con una cuenta demo',
                            'Invertir todo el capital inmediatamente',
                            'Seguir señales de trading sin entender',
                            'Operar solo en criptomonedas'
                        ],
                        correct: 0
                    }
                ]
            },
            tips: {
                title: 'Consejos para Aprender Trading',
                startSmall: {
                    title: 'Empieza Pequeño',
                    description: 'Comienza con una cuenta demo y pequeñas cantidades reales. La práctica es esencial para desarrollar tus habilidades.'
                },
                consistency: {
                    title: 'Sé Consistente',
                    description: 'Estudia regularmente. Dedica tiempo cada día o semana para aprender y practicar nuevas estrategias.'
                },
                community: {
                    title: 'Únete a una Comunidad',
                    description: 'Conecta con otros traders, comparte experiencias y aprende de los errores y éxitos de otros.'
                },
                resources: {
                    title: 'Usa Múltiples Recursos',
                    description: 'Combina libros, videos, cursos online y webinars para obtener una perspectiva completa del trading.'
                },
                keepJournal: {
                    title: 'Mantén un Diario',
                    description: 'Registra tus operaciones, análisis y emociones. Esto te ayudará a identificar patrones y mejorar.'
                },
                keepLearning: {
                    title: 'Sigue Aprendiendo',
                    description: 'Los mercados evolucionan constantemente. Mantente actualizado con las últimas tendencias y técnicas.'
                }
            }
        },
        
        // Admin
        admin: {
            dashboard: 'Panel de Control',
            brokers: 'Brokers',
            reviews: 'Reseñas',
            categories: 'Categorías',
            contacts: 'Contactos',
            settings: 'Configuración',
            logout: 'Cerrar Sesión',
            totalBrokers: 'Total Brokers',
            totalReviews: 'Total Reseñas',
            totalContacts: 'Total Contactos',
            pendingReviews: 'Reseñas Pendientes',
            newContacts: 'Nuevos Contactos'
        },
        
    },
    
    en: {
        // Page title
        title: 'LatamBrokerReviews - Latin America Broker Reviews',
        
        // Navigation
        nav: {
            home: 'Home',
            brokers: 'Brokers',
            allBrokers: 'All Brokers',
            categories: 'Categories',
            forex: 'Forex',
            stocks: 'Stocks',
            crypto: 'Cryptocurrencies',
            cfds: 'CFDs',
            commodities: 'Commodities',
            education: 'Education & Training',
            reviews: 'Reviews',
            about: 'About',
            contact: 'Contact',
            admin: 'Admin',
            login: 'Login',
            logout: 'Logout'
        },
        
        // Hero Section
        hero: {
            title: 'Best Brokers in Latin America',
            subtitle: 'Discover honest reviews and detailed analysis of the most reliable brokers for trading in Latin America. From Libertex to other leading brokers.',
            buttonBrokers: 'View Brokers',
            buttonReviews: 'Read Reviews'
        },
        
        // Brokers Section
        brokers: {
            title: 'Featured Brokers',
            subtitle: 'The most popular and highest-rated brokers in Latin America',
            viewAll: 'View All Brokers',
            rating: 'Rating',
            reviews: 'Reviews',
            countries: 'Countries',
            category: 'Category',
            languages: 'Languages',
            tradingPlatforms: 'Trading Platforms',
            accountTypes: 'Account Types',
            regulations: 'Regulations',
            visitWebsite: 'Visit Website',
            visitSite: 'Visit Site',
            readReviews: 'Read Reviews',
            details: 'View Details',
            mainFeatures: 'Main Features',
            about: 'About',
            stats: 'Statistics',
            descriptions: {
                'libertex': 'Libertex is one of the most reliable brokers for trading in Latin America, offering access to more than 300 financial instruments including Forex, CFDs, stocks and cryptocurrencies. With more than 20 years of experience, Libertex provides an intuitive trading platform and advanced tools for traders of all levels.',
                'xm-group': 'XM is a global broker with presence in more than 190 countries, offering trading in Forex, CFDs, stocks and commodities. With regulation in multiple jurisdictions, XM provides access to more than 1000 financial instruments with competitive spreads and fast execution.',
                'etoro': 'eToro is a leading social trading platform that allows users to copy the strategies of successful traders. With more than 20 million users worldwide, eToro offers trading in cryptocurrencies, stocks, ETFs and more.',
                'plus500': 'Plus500 is a leading CFD broker with more than 15 years of experience. It offers trading in more than 2000 instruments including Forex, stocks, indices, commodities and cryptocurrencies. With regulation in multiple jurisdictions, Plus500 is a reliable option for Latin American traders.',
                'avatrade': 'AvaTrade is a global broker with more than 15 years of experience, offering trading in Forex, CFDs, stocks and cryptocurrencies. With regulation in multiple jurisdictions and support in more than 20 languages, AvaTrade is an excellent option for Latin American traders.',
                'ig-markets': 'IG Markets is one of the oldest and most established brokers in the world, with more than 45 years of experience. It offers trading in more than 17,000 instruments including Forex, CFDs, stocks and indices. With regulation in multiple jurisdictions, IG is a premium option for experienced traders.'
            },
            features: {
                'Más de 1000 instrumentos': 'Over 1000 instruments',
                'Más de 300 instrumentos': 'Over 300 instruments',
                'Más de 2000 instrumentos': 'Over 2000 instruments',
                'Más de 17,000 instrumentos': 'Over 17,000 instruments',
                'Spreads bajos': 'Low spreads',
                'Educación gratuita': 'Free education',
                'Bonos de bienvenida': 'Welcome bonuses',
                'MetaTrader 4/5': 'MetaTrader 4/5',
                'Soporte 24/5': '24/5 support',
                'Regulación múltiple': 'Multiple regulation',
                'Plataforma profesional': 'Professional platform',
                'Educación premium': 'Premium education',
                'Muchos instrumentos': 'Many instruments',
                'Spreads competitivos': 'Competitive spreads',
                'Plataforma intuitiva': 'Intuitive platform',
                'Sin comisiones': 'No commissions',
                'Plataforma web': 'Web platform',
                'Criptomonedas': 'Cryptocurrencies',
                'Trading social': 'Social trading',
                'Destacado': 'Featured',
                'Soporte en español': 'Spanish support',
                'Soporte 24/5': '24/5 support',
                'Soporte profesional': 'Professional support',
                'Fácil de usar': 'Easy to use'
            },
            comparison: {
                maxBrokers: 'You can compare a maximum of 3 brokers at once.',
                alreadyAdded: 'This broker is already in the comparison.',
                noBrokers: 'There are no brokers to compare.',
                noExport: 'There are no brokers to export.'
            },
            // Brokers page specific translations
            pageTitle: 'Brokers in Latin America',
            hero: {
                title: 'Best Brokers in Latin America',
                subtitle: 'Compare and find the perfect broker for your trading needs'
            },
            filters: {
                category: 'Category:',
                allCategories: 'All Categories',
                forex: 'Forex',
                stocks: 'Stocks',
                crypto: 'Cryptocurrencies',
                cfds: 'CFDs',
                commodities: 'Commodities',
                rating: 'Rating:',
                allRatings: 'All Ratings',
                country: 'Country:',
                allCountries: 'All Countries',
                sort: 'Sort by:',
                sortRating: 'Rating',
                reviews: 'Reviews',
                name: 'Name',
                apply: 'Apply Filters',
                clear: 'Clear'
            },
            view: {
                grid: 'Grid',
                list: 'List',
                compare: 'Compare'
            },
            compare: {
                title: 'Compare Brokers',
                close: 'Close',
                export: 'Export'
            }
        },
        
        // Why Choose Us
        whyChoose: {
            title: 'Why Choose LatamBrokerReviews?',
            verified: {
                title: 'Verified Reviews',
                description: 'All our reviews are verified and come from real traders in Latin America.'
            },
            analysis: {
                title: 'Detailed Analysis',
                description: 'We provide comprehensive analysis of spreads, commissions, platforms and regulations.'
            },
            community: {
                title: 'Latin American Community',
                description: 'We connect traders from all over Latin America to share experiences and knowledge.'
            },
            ai: {
                title: 'Advanced AI',
                description: 'We use artificial intelligence for market analysis and personalized recommendations.'
            }
        },
        
        // Reviews Section
        reviews: {
            title: 'Recent Reviews',
            subtitle: 'What our users say about the brokers',
            viewAll: 'View All Reviews',
            loadMore: 'Load More Reviews',
            rating: 'Rating',
            helpful: 'Helpful',
            notHelpful: 'Not Helpful',
            verified: 'Verified',
            // Additional review translations
            readMore: 'Read more',
            showLess: 'Show less',
            experience: {
                beginner: 'Beginner',
                intermediate: 'Intermediate',
                advanced: 'Advanced'
            },
            duration: {
                'less-than-1-year': 'Less than 1 year',
                '1-3-years': '1-3 years',
                '3-5-years': '3-5 years',
                'more-than-5-years': 'More than 5 years'
            },
            sampleReviews: {
                libertex1: {
                    title: 'Excellent trading platform',
                    content: 'I have been using Libertex for more than 2 years and the experience has been excellent. The platform is very intuitive and customer support is exceptional. The spreads are competitive and execution is fast. I totally recommend it.',
                    pros: ['Easy to use platform', 'Spanish support', 'Competitive spreads'],
                    cons: ['Limited in some countries']
                },
                libertex2: {
                    title: 'Good option for beginners',
                    content: 'As a trading beginner, Libertex has helped me a lot. The demo account is perfect for learning and the platform is very easy to use. Customer support responds quickly and in Spanish.',
                    pros: ['Free demo account', 'Easy to use', 'Spanish support'],
                    cons: ['Few analysis tools']
                },
                xm1: {
                    title: 'Very good experience',
                    content: 'XM Group is an excellent option for trading. The spreads are very competitive and the platform is stable. Customer support is very professional and always available.',
                    pros: ['Competitive spreads', 'Stable platform', 'Professional support'],
                    cons: ['High minimum deposit']
                },
                etoro1: {
                    title: 'Innovative and easy to use',
                    content: 'eToro is perfect for beginners. The copy trading feature is great and has helped me learn a lot. The platform is very intuitive and easy to use.',
                    pros: ['Copy trading feature', 'Easy to use', 'Good for beginners'],
                    cons: ['High Forex spreads']
                }
            }
        },
        
        // About Section
        about: {
            title: 'About LatamBrokerReviews',
            description1: 'We are the leading platform for broker reviews for Latin American traders. Our mission is to provide transparent and reliable information to help traders make informed decisions.',
            description2: 'With years of experience in the Latin American financial market, our team of experts analyzes each broker considering local regulations, payment methods, support in Spanish and Portuguese, and the specific needs of regional traders.',
            brokersAnalyzed: 'Brokers Analyzed',
            verifiedReviews: 'Verified Reviews',
            activeUsers: 'Active Users'
        },
        
        // Contact Section
        contact: {
            title: 'Contact Us',
            subtitle: 'Have questions or suggestions? We would love to hear from you',
            name: 'Your name',
            email: 'Your email',
            subject: 'Subject',
            message: 'Your message',
            send: 'Send Message',
            emailLabel: 'Email',
            phoneLabel: 'Phone',
            locationLabel: 'Location',
            phone: '+1 (555) 123-4567',
            location: 'Latin America'
        },
        
        // Footer
        footer: {
            title: 'LatamBrokerReviews',
            description: 'The leading platform for broker reviews in Latin America.',
            quickLinks: 'Quick Links',
            categories: 'Categories',
            copyright: 'All rights reserved.',
            legal: 'Legal',
            forex: 'Forex',
            stocks: 'Stocks',
            crypto: 'Cryptocurrencies',
            cfds: 'CFDs',
            privacy: 'Privacy Policy',
            terms: 'Terms of Use',
            disclaimer: 'Disclaimer',
            copyright: 'All rights reserved.'
        },
        
        // Forex page
        forex: {
            hero: {
                title: 'Forex Trading in Latin America',
                subtitle: 'Discover the world\'s largest currency market. Learn strategies, technical and fundamental analysis for Forex trading in Latin America.',
                dailyVolume: 'Daily Volume',
                marketOpen: 'Market Open',
                currencyPairs: 'Currency Pairs'
            },
            whatIs: {
                title: 'What is Forex Trading?',
                globalMarket: {
                    title: 'Global Market',
                    description: 'Forex is the world\'s largest financial market, with a daily trading volume of over $6.6 trillion.'
                },
                hours24: {
                    title: '24 Hours a Day',
                    description: 'The Forex market is open 24 hours a day, 5 days a week, allowing trading at any time.'
                },
                highLiquidity: {
                    title: 'High Liquidity',
                    description: 'The high liquidity of the Forex market allows executing large operations without significantly affecting prices.'
                }
            },
            majorPairs: {
                title: 'Major Currency Pairs',
                eurUsd: {
                    symbol: 'EUR/USD',
                    name: 'Euro / US Dollar',
                    description: 'The most traded pair in the world, represents the European vs. US economy.',
                    spread: 'Spread: 0.6-1.2 pips',
                    volatility: 'Volatility: Medium'
                },
                gbpUsd: {
                    symbol: 'GBP/USD',
                    name: 'British Pound / Dollar',
                    description: 'Known as "Cable", it\'s very popular among traders for its volatility.',
                    spread: 'Spread: 1.0-2.0 pips',
                    volatility: 'Volatility: High'
                },
                usdJpy: {
                    symbol: 'USD/JPY',
                    name: 'Dollar / Japanese Yen',
                    description: 'Popular in Asian session, known for its tendency to prolonged movements.',
                    spread: 'Spread: 0.7-1.5 pips',
                    volatility: 'Volatility: Medium'
                },
                usdChf: {
                    symbol: 'USD/CHF',
                    name: 'Dollar / Swiss Franc',
                    description: 'Considered a "safe haven", popular during economic uncertainty.',
                    spread: 'Spread: 1.0-2.0 pips',
                    volatility: 'Volatility: Low'
                }
            },
            strategies: {
                title: 'Forex Trading Strategies',
                technicalAnalysis: {
                    title: 'Technical Analysis',
                    description: 'Uses charts, indicators and patterns to predict price movements.',
                    items: ['Moving averages', 'RSI and MACD', 'Support and resistance', 'Candlestick formations']
                },
                fundamentalAnalysis: {
                    title: 'Fundamental Analysis',
                    description: 'Evaluates economic, political and social factors that affect currencies.',
                    items: ['GDP and inflation', 'Interest rates', 'Monetary policy', 'Geopolitical events']
                },
                newsTrading: {
                    title: 'News Trading',
                    description: 'Trades based on important economic events and announcements.',
                    items: ['NFP (Non-Farm Payrolls)', 'Central bank decisions', 'Inflation and GDP', 'Elections and referendums']
                }
            },
            bestBrokers: {
                title: 'Best Forex Brokers for Latin America'
            },
            tips: {
                title: 'Forex Trading Tips',
                riskManagement: {
                    title: 'Risk Management',
                    description: 'Never risk more than 1-2% of your capital on a single trade. Always use stop loss.'
                },
                education: {
                    title: 'Continuous Education',
                    description: 'Stay updated with economic news, market analysis and new strategies.'
                },
                analysis: {
                    title: 'Prior Analysis',
                    description: 'Analyze the market before trading. Review economic calendars and important news.'
                },
                psychology: {
                    title: 'Trading Psychology',
                    description: 'Stay calm and don\'t let emotions guide your trading decisions.'
                }
            }
        },
        
        // Crypto page
        crypto: {
            hero: {
                title: 'Crypto Trading in Latin America',
                subtitle: 'Discover the world of cryptocurrencies. Bitcoin, Ethereum, altcoins and more. Learn crypto trading strategies for the Latin American market.',
                marketCap: 'Market Cap',
                marketHours: 'Market Open',
                cryptocurrencies: 'Cryptocurrencies'
            },
            bestBrokers: {
                title: 'Best Crypto Brokers for Latin America'
            },
            whatIs: {
                title: 'What are Cryptocurrencies?',
                digitalCurrency: {
                    title: 'Digital Currency',
                    description: 'Cryptocurrencies are digital currencies that use cryptography to secure transactions and control the creation of new units.'
                },
                blockchain: {
                    title: 'Blockchain Technology',
                    description: 'They use blockchain technology, a distributed ledger that records all transactions securely.'
                },
                decentralized: {
                    title: 'Decentralized',
                    description: 'They are not controlled by governments or central banks, offering greater financial autonomy.'
                }
            },
            majorCryptos: {
                title: 'Major Cryptocurrencies',
                bitcoin: {
                    title: 'Bitcoin (BTC)',
                    description: 'The first and most valuable cryptocurrency. Known as "digital gold" for its scarcity and store of value.',
                    dominance: 'Dominance: ~40%',
                    volatility: 'Volatility: High'
                },
                ethereum: {
                    title: 'Ethereum (ETH)',
                    description: 'Smart contracts and decentralized applications (DApps) platform.',
                    dominance: 'Dominance: ~20%',
                    volatility: 'Volatility: High'
                },
                cardano: {
                    title: 'Cardano (ADA)',
                    description: 'Third-generation blockchain platform focused on sustainability and scalability.',
                    dominance: 'Dominance: ~2%',
                    volatility: 'Volatility: Very High'
                },
                solana: {
                    title: 'Solana (SOL)',
                    description: 'High-performance blockchain known for its fast transactions and low fees.',
                    dominance: 'Dominance: ~1%',
                    volatility: 'Volatility: Very High'
                }
            },
            strategies: {
                title: 'Crypto Trading Strategies',
                dayTrading: {
                    title: 'Day Trading',
                    description: 'Intraday operations taking advantage of high crypto market volatility.',
                    items: ['Real-time technical analysis', 'Low spread scalping', 'Momentum trading', 'Breakout trading']
                },
                swingTrading: {
                    title: 'Swing Trading',
                    description: 'Positions held for several days or weeks to capture larger movements.',
                    items: ['Trend analysis', 'Support and resistance', 'Technical indicators', 'Fundamental analysis']
                },
                hodling: {
                    title: 'HODLing',
                    description: 'Long-term buy and hold strategy, popular in crypto.',
                    items: ['Dollar-cost averaging', 'Fundamental analysis', 'Institutional adoption', 'Government regulation']
                }
            },
            tips: {
                title: 'Crypto Trading Tips',
                security: {
                    title: 'Security',
                    description: 'Use secure wallets, enable 2FA and never share your private keys. Security is crucial in crypto.'
                },
                volatility: {
                    title: 'Volatility',
                    description: 'Cryptocurrencies are very volatile. Use stop loss and don\'t invest more than you can afford to lose.'
                },
                news: {
                    title: 'News',
                    description: 'Stay informed about regulations, institutional adoption and technological developments.'
                },
                diversification: {
                    title: 'Diversification',
                    description: 'Don\'t put all your eggs in one basket. Diversify between different cryptocurrencies.'
                }
            }
        },
        
        // Stocks page
        stocks: {
            hero: {
                title: 'Stocks Trading in Latin America',
                subtitle: 'Invest in the world\'s best companies. Access to global markets, fundamental analysis and stock trading strategies.',
                globalCap: 'Global Market Cap',
                nyseHours: 'NYSE Hours',
                listedCompanies: 'Listed Companies'
            },
            whatIs: {
                title: 'What is Stock Trading?',
                ownership: {
                    title: 'Company Ownership',
                    description: 'Stocks represent a share of ownership in a company. By buying stocks, you become a shareholder.'
                },
                growth: {
                    title: 'Growth Potential',
                    description: 'Stocks can increase in value as the company grows and generates profits.'
                },
                dividends: {
                    title: 'Dividends',
                    description: 'Many companies pay dividends to their shareholders as part of their profits.'
                }
            },
            bestBrokers: {
                title: 'Best Stock Brokers for Latin America'
            },
            strategies: {
                title: 'Stock Trading Strategies',
                dayTrading: {
                    title: 'Day Trading',
                    description: 'Buying and selling stocks within the same day to take advantage of price movements.',
                    items: ['Real-time technical analysis', 'Low spread scalping', 'Momentum trading', 'Breakout trading']
                },
                swingTrading: {
                    title: 'Swing Trading',
                    description: 'Positions held for several days or weeks to capture trend movements.',
                    items: ['Trend analysis', 'Support and resistance', 'Technical indicators', 'Volume analysis']
                },
                valueInvesting: {
                    title: 'Value Investing',
                    description: 'Long-term investment based on the fundamental value of companies.',
                    items: ['Fundamental analysis', 'Financial ratios', 'Sector analysis', 'Diversification']
                }
            },
            analysis: {
                title: 'Stock Analysis',
                technical: {
                    title: 'Technical Analysis',
                    description: 'Study charts and price patterns to predict future movements.',
                    items: ['Moving averages', 'RSI and MACD', 'Support and resistance', 'Candlestick formations']
                },
                fundamental: {
                    title: 'Fundamental Analysis',
                    description: 'Evaluates the financial health and intrinsic value of companies.',
                    items: ['Financial statements', 'P/E, P/B ratios', 'Revenue growth', 'Competitive advantage']
                },
                sentiment: {
                    title: 'Sentiment Analysis',
                    description: 'Evaluates market sentiment and news that affects stocks.',
                    items: ['Corporate news', 'Earnings reports', 'Management changes', 'Regulations']
                }
            },
            tips: {
                title: 'Stock Trading Tips',
                riskManagement: {
                    title: 'Risk Management',
                    description: 'Never risk more than 1-2% of your capital on a single trade. Always use stop loss.'
                },
                education: {
                    title: 'Continuous Education',
                    description: 'Stay updated with market news, company analysis and new strategies.'
                },
                analysis: {
                    title: 'Prior Analysis',
                    description: 'Analyze companies before investing. Review financial statements and growth prospects.'
                },
                diversification: {
                    title: 'Diversification',
                    description: 'Don\'t put all your eggs in one basket. Diversify across sectors and geographies.'
                }
            },
            majorMarkets: {
                title: 'Major Stock Markets',
                nyse: {
                    name: 'New York Stock Exchange',
                    description: 'The world\'s largest stock market, home to companies like Apple, Microsoft and Amazon.',
                    marketCap: 'Market Cap: $30T',
                    hours: 'Hours: 9:30-16:00 EST'
                },
                nasdaq: {
                    name: 'Nasdaq Stock Market',
                    description: 'Technology-focused, home to companies like Tesla, Google and Facebook.',
                    marketCap: 'Market Cap: $20T',
                    hours: 'Hours: 9:30-16:00 EST'
                },
                lse: {
                    name: 'London Stock Exchange',
                    description: 'One of the world\'s oldest markets, Europe\'s financial center.',
                    marketCap: 'Market Cap: $4T',
                    hours: 'Hours: 8:00-16:30 GMT'
                },
                tse: {
                    name: 'Tokyo Stock Exchange',
                    description: 'Asia\'s largest market, home to companies like Toyota, Sony and Nintendo.',
                    marketCap: 'Market Cap: $6T',
                    hours: 'Hours: 9:00-15:00 JST'
                }
            }
        },
        
        // CFD page
        cfd: {
            hero: {
                title: 'CFD Trading in Latin America',
                subtitle: 'Trade Contracts for Difference (CFDs) on thousands of instruments. Access global markets with leverage and no commissions.'
            },
            bestBrokers: {
                title: 'Best CFD Brokers for Latin America'
            },
            whatIs: {
                title: 'What are CFDs?',
                contracts: {
                    title: 'Contracts for Difference',
                    description: 'CFDs are contracts between a trader and a broker to exchange the difference in the price of an asset.'
                },
                noOwnership: {
                    title: 'No Real Ownership',
                    description: 'You don\'t own the underlying asset, you only speculate on the direction of the price.'
                },
                leverage: {
                    title: 'Leverage',
                    description: 'You can control larger positions with less capital, amplifying both gains and losses.'
                }
            },
            advantages: {
                title: 'CFD Advantages',
                globalAccess: {
                    title: 'Global Access',
                    description: 'Trade in markets around the world from a single platform.',
                    items: ['Forex', 'Stocks', 'Commodities', 'Indices']
                },
                leverage: {
                    title: 'Leverage',
                    description: 'Amplify your buying power with leverage ratios of up to 1:500.',
                    items: ['Greater exposure', 'Less capital required', 'Potential for higher gains', 'Amplified risk']
                },
                longShort: {
                    title: 'Long and Short Positions',
                    description: 'You can profit in both bullish and bearish markets.',
                    items: ['Buy (Long)', 'Sell (Short)', 'Hedging', 'Complex strategies']
                },
                noCommissions: {
                    title: 'No Commissions',
                    description: 'Many brokers offer CFDs without commissions, only spreads.',
                    items: ['Transparent costs', 'Competitive spreads', 'No hidden fees', 'Predictable costs']
                }
            },
            markets: {
                title: 'Available CFD Markets',
                forex: {
                    title: 'Forex',
                    subtitle: 'Currency Pairs',
                    description: 'Trade major currency pairs with competitive spreads.',
                    leverage: 'Leverage: 1:500',
                    spreads: 'Spreads: 0.6 pips'
                },
                stocks: {
                    title: 'Stocks',
                    subtitle: 'Global Stocks',
                    description: 'Access the best stocks in the world without commissions.',
                    leverage: 'Leverage: 1:20',
                    commissions: 'No Commissions'
                },
                commodities: {
                    title: 'Commodities',
                    subtitle: 'Raw Materials',
                    description: 'Gold, oil, silver and more commodities with leverage.',
                    leverage: 'Leverage: 1:100',
                    hours: '24/5 Trading'
                },
                indices: {
                    title: 'Indices',
                    subtitle: 'Stock Indices',
                    description: 'Trade major world indices like S&P 500, NASDAQ.',
                    leverage: 'Leverage: 1:200',
                    spreads: 'Low Spreads'
                }
            },
            strategies: {
                title: 'CFD Trading Strategies',
                dayTrading: {
                    title: 'Day Trading',
                    description: 'Intraday operations taking advantage of volatility and CFD leverage.',
                    items: ['Scalping', 'Momentum trading', 'Breakout trading', 'News trading']
                },
                hedging: {
                    title: 'Hedging',
                    description: 'Protect your portfolio by opening opposite positions in CFDs.',
                    items: ['Portfolio protection', 'Risk reduction', 'Complex strategies', 'Exposure management']
                },
                swingTrading: {
                    title: 'Swing Trading',
                    description: 'Positions held for several days to capture trend movements.',
                    items: ['Technical analysis', 'Fundamental analysis', 'Risk management', 'Stop loss']
                }
            },
            riskManagement: {
                title: 'Risk Management in CFDs',
                stopLoss: {
                    title: 'Stop Loss',
                    description: 'Set automatic loss limits to protect your capital.'
                },
                takeProfit: {
                    title: 'Take Profit',
                    description: 'Define profit targets to close positions automatically.'
                },
                responsibleLeverage: {
                    title: 'Responsible Leverage',
                    description: 'Use moderate leverage to avoid excessive losses.'
                },
                diversification: {
                    title: 'Diversification',
                    description: 'Don\'t concentrate all your capital in a single position or market.'
                }
            },
            tips: {
                title: 'CFD Trading Tips',
                education: {
                    title: 'Education',
                    description: 'Learn about technical analysis, fundamental analysis and risk management before trading with leverage.'
                },
                practice: {
                    title: 'Practice',
                    description: 'Use demo accounts to practice strategies without real risk before trading with money.'
                },
                capitalManagement: {
                    title: 'Capital Management',
                    description: 'Never risk more than 1-2% of your capital in a single operation.'
                },
                news: {
                    title: 'News',
                    description: 'Stay informed about economic events that can affect markets.'
                }
            }
        },
        
        // Commodities page
        commodities: {
            hero: {
                title: 'Commodities Trading in Latin America',
                subtitle: 'Invest in commodities like gold, oil, silver and copper. Diversify your portfolio with commodities and protect your capital against inflation.'
            },
            whatAre: {
                title: 'What are Commodities?',
                rawMaterials: {
                    title: 'Raw Materials',
                    description: 'Commodities are basic raw materials used in commerce that are interchangeable with other products of the same type.'
                },
                inflationProtection: {
                    title: 'Inflation Protection',
                    description: 'Commodities tend to maintain their value during periods of inflation, acting as a safe haven for investors.'
                },
                diversification: {
                    title: 'Diversification',
                    description: 'Adding commodities to your portfolio can reduce overall risk and improve long-term returns.'
                }
            },
            majorCommodities: {
                title: 'Major Commodities',
                gold: {
                    title: 'Gold (XAU/USD)',
                    symbol: 'GOLD',
                    description: 'The most popular precious metal, considered a safe haven during economic uncertainty.',
                    volatility: 'Volatility: Medium',
                    liquidity: 'Liquidity: High'
                },
                oil: {
                    title: 'Oil (WTI)',
                    symbol: 'OIL',
                    description: 'West Texas Intermediate crude is the most important benchmark in the oil market.',
                    volatility: 'Volatility: High',
                    liquidity: 'Liquidity: Very High'
                },
                silver: {
                    title: 'Silver (XAG/USD)',
                    symbol: 'SILVER',
                    description: 'Industrial precious metal with applications in technology, medicine and jewelry.',
                    volatility: 'Volatility: High',
                    liquidity: 'Liquidity: Medium'
                },
                copper: {
                    title: 'Copper',
                    symbol: 'COPPER',
                    description: 'Essential industrial metal for construction, electronics and renewable energy.',
                    volatility: 'Volatility: Medium',
                    liquidity: 'Liquidity: Medium'
                }
            },
            categories: {
                title: 'Commodity Categories',
                preciousMetals: {
                    title: 'Precious Metals',
                    description: 'Gold, silver, platinum and palladium. Considered safe havens during uncertainty.',
                    items: ['Gold (XAU/USD)', 'Silver (XAG/USD)', 'Platinum', 'Palladium']
                },
                energy: {
                    title: 'Energy',
                    description: 'Oil, natural gas and refined products. Highly volatile and sensitive to geopolitical events.',
                    items: ['WTI Oil', 'Brent Oil', 'Natural Gas', 'Gasoline']
                },
                agricultural: {
                    title: 'Agricultural',
                    description: 'Agricultural products like wheat, corn, soybeans and coffee. Affected by weather and global demand.',
                    items: ['Wheat', 'Corn', 'Soybeans', 'Coffee']
                },
                industrialMetals: {
                    title: 'Industrial Metals',
                    description: 'Copper, aluminum, zinc and nickel. Essential for industry and construction.',
                    items: ['Copper', 'Aluminum', 'Zinc', 'Nickel']
                }
            },
            strategies: {
                title: 'Commodity Trading Strategies',
                trendFollowing: {
                    title: 'Trend Following',
                    description: 'Following long-term trends in commodity markets.',
                    items: ['Trend analysis', 'Moving averages', 'Breakouts', 'Momentum trading']
                },
                spreadTrading: {
                    title: 'Spread Trading',
                    description: 'Trading price differences between related commodities.',
                    items: ['WTI vs Brent', 'Gold vs Silver', 'Seasonal spreads', 'Geographic arbitrage']
                },
                seasonalTrading: {
                    title: 'Seasonal Trading',
                    description: 'Taking advantage of seasonal patterns in commodity prices.',
                    items: ['Seasonal patterns', 'Historical analysis', 'Demand cycles', 'Weather events']
                }
            },
            bestBrokers: {
                title: 'Best Commodity Brokers for Latin America'
            },
            factors: {
                title: 'Factors Affecting Commodities',
                geopolitics: {
                    title: 'Geopolitics',
                    description: 'Conflicts, sanctions and international tensions can significantly affect prices.'
                },
                climate: {
                    title: 'Climate',
                    description: 'Droughts, floods and extreme weather events impact agricultural prices.'
                },
                globalDemand: {
                    title: 'Global Demand',
                    description: 'Economic growth and industrialization affect commodity demand.'
                },
                usd: {
                    title: 'US Dollar',
                    description: 'USD strength generally pressures commodity prices.'
                }
            },
            tips: {
                title: 'Commodity Trading Tips',
                riskManagement: {
                    title: 'Risk Management',
                    description: 'Commodities are volatile. Use stop loss and don\'t risk more than 1-2% per trade.'
                },
                globalNews: {
                    title: 'Global News',
                    description: 'Stay informed about geopolitical events, weather and economic data that affect commodities.'
                },
                fundamentalAnalysis: {
                    title: 'Fundamental Analysis',
                    description: 'Study supply and demand, inventories and seasonal factors for each commodity.'
                },
                diversification: {
                    title: 'Diversification',
                    description: 'Don\'t concentrate everything on a single commodity. Diversify between metals, energy and agricultural.'
                }
            }
        },
        
        // Education page
        education: {
            hero: {
                title: 'Education & Training in Trading',
                subtitle: 'Learn everything you need to know about brokers, investments and trading. Complete guides, courses, strategies and educational resources for traders of all levels.',
                courses: 'Courses Available',
                access: 'Unlimited Access',
                students: 'Students'
            },
            whatIs: {
                title: 'Why is Education Important in Trading?',
                fundamentals: {
                    title: 'Solid Fundamentals',
                    description: 'Build a solid foundation of knowledge about financial markets, technical and fundamental analysis, and risk management.'
                },
                riskManagement: {
                    title: 'Risk Management',
                    description: 'Learn to protect your capital and manage risk effectively to maximize your chances of success.'
                },
                strategies: {
                    title: 'Strategy Development',
                    description: 'Master different trading strategies tailored to your style and financial goals.'
                },
                continuousLearning: {
                    title: 'Continuous Learning',
                    description: 'Markets change constantly. Continuous education keeps you updated with the latest trends and techniques.'
                }
            },
            topics: {
                title: 'Education Topics',
                brokers: {
                    title: 'Understanding Brokers',
                    description: 'Learn to choose the right broker, understand spreads, commissions, regulations and important features.',
                    items: ['Types of brokers and regulations', 'Spread and commission analysis', 'Trading platforms', 'Tools and resources']
                },
                investments: {
                    title: 'Investment Fundamentals',
                    description: 'Understand different types of investments, portfolio diversification and long-term wealth building.',
                    items: ['Types of financial assets', 'Portfolio diversification', 'Fundamental analysis', 'Financial planning']
                },
                technicalAnalysis: {
                    title: 'Technical Analysis',
                    description: 'Master technical analysis: charts, indicators, patterns and tools to make informed decisions.',
                    items: ['Types of charts and candles', 'Technical indicators', 'Price patterns', 'Support and resistance']
                },
                fundamentalAnalysis: {
                    title: 'Fundamental Analysis',
                    description: 'Learn to analyze economic factors, news and events that affect financial markets.',
                    items: ['Economic indicators', 'News and events', 'Monetary policy', 'Company analysis']
                },
                riskManagement: {
                    title: 'Risk Management',
                    description: 'Protect your capital by learning advanced risk management techniques and position control.',
                    items: ['Position sizing', 'Stop loss and take profit', 'Risk/reward ratio', 'Loss limits']
                },
                tradingPsychology: {
                    title: 'Trading Psychology',
                    description: 'Develop the right mindset for successful trading and learn to control emotions.',
                    items: ['Emotional control', 'Discipline and patience', 'Loss management', 'Trading plan']
                }
            },
            bestBrokers: {
                title: 'Best Brokers with Educational Resources'
            },
            videos: {
                title: 'Educational Videos',
                subtitle: 'Learn with our tutorial videos about brokers and investments',
                brokers: {
                    title: 'Complete Guide to Brokers',
                    description: 'Learn how to choose the best broker, understand regulations, spreads and commissions.'
                },
                investing: {
                    title: 'How to Invest in Markets',
                    description: 'Discover investment strategies, technical and fundamental analysis for beginners.'
                },
                riskManagement: {
                    title: 'Risk Management in Trading',
                    description: 'Learn advanced techniques to protect your capital and manage risk effectively.'
                },
                tradingPlatforms: {
                    title: 'Trading Platforms Tutorial',
                    description: 'Complete guide on MetaTrader, web and mobile platforms for trading.'
                },
                forex: {
                    title: 'Forex Trading for Beginners',
                    description: 'Complete introduction to the currency market, currency pairs and basic strategies.'
                },
                stocks: {
                    title: 'Stock Investment - Complete Guide',
                    description: 'Learn to analyze stocks, build a portfolio and start investing in the stock market.'
                }
            },
            quiz: {
                title: 'Knowledge Test',
                subtitle: 'Test your knowledge about investments and trading',
                question: 'Question',
                of: 'of',
                submit: 'View Results',
                reset: 'Reset Quiz',
                result: 'Result',
                correct: 'Correct',
                incorrect: 'Incorrect',
                score: 'Score',
                percentage: 'Percentage',
                feedback: {
                    excellent: 'Excellent! You have solid knowledge about investments.',
                    good: 'Well done! You have good knowledge, but there\'s room for improvement.',
                    average: 'Not bad. Keep learning to improve your knowledge.',
                    poor: 'Keep studying. There\'s a lot to learn about investments.'
                },
                questions: [
                    {
                        question: 'What is a spread in trading?',
                        options: [
                            'The difference between buy and sell price',
                            'The duration of a trade',
                            'The broker\'s profit margin',
                            'The maximum amount you can invest'
                        ],
                        correct: 0
                    },
                    {
                        question: 'What does portfolio diversification mean?',
                        options: [
                            'Investing all your money in a single stock',
                            'Distributing investments across different assets to reduce risk',
                            'Buying only technology stocks',
                            'Investing only in local markets'
                        ],
                        correct: 1
                    },
                    {
                        question: 'What is a stop loss?',
                        options: [
                            'An order to close a position at a loss',
                            'An order to maximize profits',
                            'A time limit for trading',
                            'A type of trading account'
                        ],
                        correct: 0
                    },
                    {
                        question: 'What is the basic principle of risk management?',
                        options: [
                            'Never risk more than 1-2% of capital per trade',
                            'Invest all available capital',
                            'Always follow others\' recommendations',
                            'Trade only on specific days'
                        ],
                        correct: 0
                    },
                    {
                        question: 'What is technical analysis?',
                        options: [
                            'Analysis of charts and price patterns',
                            'Analysis of company financial statements',
                            'Analysis of economic news',
                            'Analysis of broker recommendations'
                        ],
                        correct: 0
                    },
                    {
                        question: 'What is a regulated broker?',
                        options: [
                            'A broker that operates without supervision',
                            'A broker supervised by financial authorities',
                            'A broker that only accepts large investors',
                            'A broker that doesn\'t charge commissions'
                        ],
                        correct: 1
                    },
                    {
                        question: 'What does leverage mean?',
                        options: [
                            'Trading with more capital than you have',
                            'Investing only with your own money',
                            'The amount of time you trade',
                            'The number of trades per day'
                        ],
                        correct: 0
                    },
                    {
                        question: 'What is better for beginners?',
                        options: [
                            'Starting with a demo account',
                            'Investing all capital immediately',
                            'Following trading signals without understanding',
                            'Trading only in cryptocurrencies'
                        ],
                        correct: 0
                    }
                ]
            },
            tips: {
                title: 'Tips for Learning Trading',
                startSmall: {
                    title: 'Start Small',
                    description: 'Start with a demo account and small real amounts. Practice is essential to develop your skills.'
                },
                consistency: {
                    title: 'Be Consistent',
                    description: 'Study regularly. Dedicate time each day or week to learn and practice new strategies.'
                },
                community: {
                    title: 'Join a Community',
                    description: 'Connect with other traders, share experiences and learn from others\' mistakes and successes.'
                },
                resources: {
                    title: 'Use Multiple Resources',
                    description: 'Combine books, videos, online courses and webinars to get a complete perspective on trading.'
                },
                keepJournal: {
                    title: 'Keep a Journal',
                    description: 'Record your trades, analysis and emotions. This will help you identify patterns and improve.'
                },
                keepLearning: {
                    title: 'Keep Learning',
                    description: 'Markets evolve constantly. Stay updated with the latest trends and techniques.'
                }
            }
        },
        
        // Admin
        admin: {
            dashboard: 'Dashboard',
            brokers: 'Brokers',
            reviews: 'Reviews',
            categories: 'Categories',
            contacts: 'Contacts',
            settings: 'Settings',
            logout: 'Logout',
            totalBrokers: 'Total Brokers',
            totalReviews: 'Total Reviews',
            totalContacts: 'Total Contacts',
            pendingReviews: 'Pending Reviews',
            newContacts: 'New Contacts'
        },
        
    }
};

// Language management
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en'; // Default to English
        this.init();
    }
    
    init() {
        this.loadLanguage();
        this.createLanguageSelector();
    }
    
    loadLanguage() {
        const lang = languages[this.currentLanguage];
        if (!lang) return;
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const value = this.getNestedValue(lang, key);
            if (value) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = value;
                } else {
                    element.textContent = value;
                }
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage;
        
        // Update page title
        const titleElement = document.querySelector('title');
        if (titleElement) {
            if (this.currentLanguage === 'es') {
                titleElement.textContent = 'LatamBrokerReviews - Reseñas de Brokers en América Latina';
            } else {
                titleElement.textContent = 'LatamBrokerReviews - Latin America Broker Reviews';
            }
        }
    }
    
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
    }
    
    getLanguageDisplayName(lang) {
        const names = {
            'en': '🇺🇸 English',
            'es': '🇲🇽 Español'
        };
        return names[lang] || lang.toUpperCase();
    }
    
    createLanguageSelector() {
        // Remove existing selector if it exists
        const existingSelector = document.getElementById('languageSelector');
        if (existingSelector) {
            existingSelector.remove();
        }
        
        // Create new language selector
        const selector = document.createElement('div');
        selector.id = 'languageSelector';
        selector.className = 'language-selector';
        selector.innerHTML = `
            <button class="language-btn" id="languageManagerBtn">
                <i class="fas fa-globe"></i>
                <span>${this.getLanguageDisplayName(this.currentLanguage)}</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="language-dropdown" id="languageDropdown" style="display: none;">
                <a href="#" data-lang="en" class="language-option ${this.currentLanguage === 'en' ? 'active' : ''}">
                    <span class="flag">🇺🇸</span>
                    <span>English</span>
                </a>
                <a href="#" data-lang="es" class="language-option ${this.currentLanguage === 'es' ? 'active' : ''}">
                    <span class="flag">🇲🇽</span>
                    <span>Español</span>
                </a>
            </div>
        `;
        
        // Add to navigation
        const nav = document.querySelector('.nav-menu');
        if (nav) {
            nav.appendChild(selector);
        }
        
        // Add event listeners
        const languageBtn = selector.querySelector('#languageManagerBtn');
        if (languageBtn) {
            languageBtn.addEventListener('click', () => this.toggleLanguage());
        }
        
        const languageOptions = selector.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = option.getAttribute('data-lang');
                if (lang) {
                    this.setLanguage(lang);
                }
            });
        });
    }
    
    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.loadLanguage();
        this.createLanguageSelector();
        
        // Close dropdown
        const dropdown = document.getElementById('languageDropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    }
    
    toggleLanguage() {
        const dropdown = document.getElementById('languageDropdown');
        if (dropdown) {
            const isVisible = dropdown.style.display === 'block';
            dropdown.style.display = isVisible ? 'none' : 'block';
        }
    }
}

// Disable automatic language manager initialization
// The HTML version will handle language switching
// document.addEventListener('DOMContentLoaded', function() {
//     if (!document.querySelector('.language-selector')) {
//         window.languageManager = new LanguageManager();
//     }
// });

// Close language dropdown when clicking outside
document.addEventListener('click', (e) => {
    const selector = document.getElementById('languageSelector');
    const dropdown = document.getElementById('languageDropdown');
    
    if (selector && dropdown && !selector.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});
