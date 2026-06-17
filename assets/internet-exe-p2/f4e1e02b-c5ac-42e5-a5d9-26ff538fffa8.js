/* ============================================================
   Internet.exe — Europe Edition · PARTIE 2 · DONNÉES
   « L'atlas des géants européens disparus »
   14 pays · ~48 entreprises · Miradouro 2026
   ------------------------------------------------------------
   Fusion de l'atlas Partie 1 et des champions « par fonction » :
   terminaux, réseaux, portails, recherche, communication,
   hébergement, cartographie. Chaque société : rôle + destin.
   Aucun tiret cadratin dans les textes (consigne éditoriale).
   ============================================================ */

const LOGO_PATH = "../assets/logos/";

/* Ordre d'affichage : carte + sélecteur */
const ORDER = ["FI","SE","NO","EE","FR","DE","GB","PT","NL","ES","IT","CH","BE","PL"];

const COUNTRIES = {
  FI:{name:"Finlande", flag:"flag-fi", meta:"Terminaux · Données",
      note:"Le matériel et la donnée. La Finlande tenait l'objet que le monde entier avait en poche, et l'une des briques logicielles sur lesquelles le web s'est bâti.",
      companies:["nokia","mysql"]},
  SE:{name:"Suède", flag:"flag-se", meta:"Réseaux · Social",
      note:"L'infrastructure mobile invisible du monde entier, et le réseau social des ados scandinaves bien avant Facebook.",
      companies:["ericsson","lunarstorm"]},
  NO:{name:"Norvège", flag:"flag-no", meta:"Navigateur",
      note:"La porte d'entrée du web : un navigateur conçu à Oslo, pionnier du mobile bien avant les autres.",
      companies:["opera"]},
  EE:{name:"Estonie", flag:"flag-ee", meta:"Communication · P2P",
      note:"La communication mondiale : une idée nordique, du code écrit à Tallinn. Vendue deux fois, puis débranchée.",
      companies:["skype","kazaa"]},
  FR:{name:"France", flag:"flag-fr", meta:"Réseau · Vidéo · Social · Hébergement",
      note:"Presque tous les usages, vingt ans d'avance : le terminal en réseau, les portails, la vidéo, les blogs, la rencontre, l'hébergement. Mais chacun dans son coin.",
      companies:["minitel","voila","ibazar","dailymotion","skyblog","meetic","pagesjaunes","caramail","alcatel","ovh"]},
  DE:{name:"Allemagne", flag:"flag-de", meta:"Logiciel · Social · E-commerce",
      note:"Le back-office logiciel du monde, le plus grand réseau social du pays, une star e-commerce de la bourse. L'audience et les usages y étaient.",
      companies:["studivz","werkenntwen","intershop","lycos","sap","unitedinternet"]},
  GB:{name:"Royaume-Uni", flag:"flag-gb", meta:"Puces · FAI · Social · E-commerce",
      note:"La pièce la plus stratégique du mobile, les arcs de bulle les plus purs, et des réseaux sociaux d'avant Facebook.",
      companies:["arm","freeserve","boo","friendsreunited","bebo","lastfm","psion"]},
  PT:{name:"Portugal", flag:"flag-pt", meta:"Search · Portails · FAI",
      note:"Un moteur de recherche national né dans une université, et trois portails de plus. Tous dilués dans des marques télécom.",
      companies:["sapo","clix","aeiou","iol"]},
  NL:{name:"Pays-Bas", flag:"flag-nl", meta:"Cartographie · Social · FAI · Annonces · Voyage",
      note:"La carte avant Google Maps, un réseau social dominant, un FAI introduit au pic du NASDAQ, et l'une des rares plateformes mondiales survivantes.",
      companies:["tomtom","hyves","worldonline","marktplaats","booking"]},
  ES:{name:"Espagne", flag:"flag-es", meta:"Search · Portail · Social",
      note:"Du premier annuaire hispanophone au portail mondial jusqu'au Facebook espagnol : trois bonnes idées, trois fois rachetées par l'opérateur.",
      companies:["ole","terra","tuenti"]},
  IT:{name:"Italie", flag:"flag-it", meta:"FAI · Portails · Informatique",
      note:"Un agrégateur qui a cru à l'échelle continentale, le portail par lequel tout le monde entrait, et un pionnier de la micro-informatique.",
      companies:["tiscali","virgilio","olivetti"]},
  CH:{name:"Suisse", flag:"flag-ch", meta:"Périphériques · Sécurité",
      note:"Le matériel qu'on touche et la sécurité qu'on ne voit pas. Des niches mondiales, discrètes et durables.",
      companies:["logitech","kudelski"]},
  BE:{name:"Belgique", flag:"flag-be", meta:"Réseau social · Portail · Accès",
      note:"Un réseau social multilingue né à Gand, et le portail-accès national adossé à l'opérateur.",
      companies:["netlog","skynet"]},
  PL:{name:"Pologne", flag:"flag-pl", meta:"Réseau social",
      note:"L'histoire des géants locaux disparus n'est pas franco-britannique. L'Europe centrale avait aussi son propre web social.",
      companies:["nkpl"]}
};

/* ---- STATUTS ----
   bought = ACQUIS (bleu) · dead = DISPARU (rouge) · surv = SURVIVANT (vert) */

const COMPANIES = {
  /* 🇫🇮 FINLANDE */
  nokia:{name:"Nokia", cat:"Terminal · Mobile", status:"ACQUIS", sclass:"status-bought", period:"1987–2014",
    img:"nokia.png",
    story:"Premier fabricant mondial de téléphones avant le smartphone, l'objet numérique central. N'a pas vu le téléphone devenir une plateforme logicielle : division mobile vendue à Microsoft en 2013, puis évaporée des poches. Le groupe, lui, existe toujours et facture encore plusieurs milliards dans les réseaux ; la perte mise en avant ici est celle du potentiel mobile grand public, passé hors d'Europe."},
  mysql:{name:"MySQL", cat:"Base de données · Open source", status:"ACQUIS", sclass:"status-bought", period:"1995–2008",
    wm:{word:"MySQL", color:"#00758F", weight:800},
    story:"La base de données open source qui faisait tourner une large part du web. Rachetée par Sun en 2008, puis tombée par ricochet chez Oracle, son concurrent direct."},

  /* 🇸🇪 SUÈDE */
  ericsson:{name:"Ericsson", cat:"Réseaux · Infrastructure", status:"SURVIVANT", sclass:"status-surv", period:"1876–", note:"recentré B2B",
    wm:{word:"ERICSSON", color:"#1c4e8f", weight:800},
    story:"Les antennes et le cœur des réseaux mobiles du monde entier. A survécu en quittant très tôt le grand public (les téléphones Sony Ericsson) pour se replier sur l'infrastructure, là où seuls comptent les contrats."},
  lunarstorm:{name:"LunarStorm", cat:"Réseau social", status:"DISPARU", sclass:"status-dead", period:"2000–2010",
    wm:{word:"LunarStorm", color:"#7b3fb5"},
    story:"Le réseau social des ados suédois, précurseur de Facebook en Scandinavie et héritier d'un service des années 1990. Une des plus vieilles communautés en ligne d'Europe, fermée en 2010."},

  /* 🇳🇴 NORVÈGE */
  opera:{name:"Opera", cat:"Navigateur · Web/Mobile", status:"ACQUIS", sclass:"status-bought", period:"1995–2016", note:"racheté, niche",
    wm:{word:"Opera", color:"#e8332a", weight:800},
    story:"Navigateur norvégien pionnier : onglets et navigation mobile avant tout le monde. Marginalisé par Chrome et Safari, racheté en 2016 par un consortium chinois ; survit comme acteur de niche."},

  /* 🇪🇪 ESTONIE (fondateurs nordiques, ingénierie estonienne) */
  skype:{name:"Skype", cat:"Communication · VoIP", status:"DISPARU", sclass:"status-dead", period:"2003–2025", note:"acquis puis retiré",
    img:"skype.png",
    story:"La voix sur IP qui a appris au monde à s'appeler gratuitement. Fondée par des entrepreneurs nordiques, codée à Tallinn ; vendue à eBay puis Microsoft, jamais modernisée, doublée par Zoom et WhatsApp. Fermée en 2025."},
  kazaa:{name:"Kazaa", cat:"Partage · P2P", status:"DISPARU", sclass:"status-dead", period:"2001–2006",
    wm:{word:"Kazaa", color:"#6a3fb5", weight:800},
    story:"Le partage de fichiers en pair à pair, fer de lance de la culture des réseaux distribués et des procès qui ont suivi. Ses créateurs en tireront la technologie qui deviendra Skype."},

  /* 🇫🇷 FRANCE */
  minitel:{name:"Minitel", cat:"Réseau · Terminal", status:"DISPARU", sclass:"status-dead", period:"1980–2012", note:"avant le web",
    img:"minitel.png",
    story:"Un terminal en réseau dans des millions de foyers, vingt ans avant le web grand public : annuaire, messageries, achats, banque. Trop en avance, trop fermé, débranché en 2012 pendant que le web ouvert prenait tout."},
  voila:{name:"Wanadoo / Voilà", cat:"Portail · Search · FAI", status:"ACQUIS", sclass:"status-bought", period:"1999–2006",
    img:"voila.png",
    story:"Wanadoo, le bras Internet grand public de France Télécom, et Voilà, son moteur francophone, rapatriés sous Orange. Voilà indexait le web francophone en priorité ; Google optimisait toutes les langues à la fois."},
  ibazar:{name:"iBazar", cat:"Marketplace · Enchères", status:"ACQUIS", sclass:"status-bought", period:"1998–2001",
    img:"ibazar.png",
    story:"Leader européen des enchères en ligne, fondé à Paris. Racheté par eBay en 2001 pour accélérer la prise des marchés locaux. Le cas le plus net du schéma : la réponse locale, achetée par la plateforme américaine."},
  dailymotion:{name:"Dailymotion", cat:"Vidéo", status:"SURVIVANT", sclass:"status-surv", period:"2005–", note:"marginal",
    img:"dailymotion.png",
    story:"Lancé en 2005, le même mois que YouTube. Les ingénieurs étaient là, l'écosystème pub et droits ne l'était pas. Repris par Orange puis Vivendi : champion national préservé, marché perdu."},
  skyblog:{name:"Skyblog / Skyrock", cat:"Blog · Social", status:"DISPARU", sclass:"status-dead", period:"2002–2023",
    img:"skyblog.jpg",
    story:"Le premier réseau social français, royaume des ados des années 2000 et top 10 des sites français en 2007. N'a pas tenu face à Facebook : fermé en 2023, vingt ans de web adolescent effacés."},
  meetic:{name:"Meetic", cat:"Rencontre", status:"ACQUIS", sclass:"status-bought", period:"2001–2011+",
    img:"meetic.png",
    story:"Une des grandes marques de rencontre en ligne d'Europe. Passée sous contrôle de l'américain Match Group en 2011 : le siège est resté à Paris, le centre de décision est parti à New York."},
  pagesjaunes:{name:"PagesJaunes / Solocal", cat:"Annuaire local", status:"SURVIVANT", sclass:"status-surv", period:"1996–", note:"déclin",
    img:"pagesjaunes.png",
    story:"La référence pour trouver un commerçant local, battue sur sa propre spécialité par Google Maps et My Business. Solocal a frôlé la faillite en 2020 : Google a écrasé l'annuaire local européen avec une idée inspirée de lui."},
  caramail:{name:"Caramail", cat:"Messagerie · Chat", status:"DISPARU", sclass:"status-dead", period:"1997–2007",
    img:"caramail.jpg",
    story:"La messagerie et le chat gratuits de référence avant Gmail et Messenger, et le fameux Wizz. Absorbés dans l'empire Lycos Europe, abandonnés quand l'empire s'est effondré."},
  alcatel:{name:"Alcatel", cat:"Réseaux · Équipement", status:"ACQUIS", sclass:"status-bought", period:"1898–2016",
    wm:{word:"Alcatel", color:"#0a3d7a", weight:800},
    story:"Géant français des équipements télécoms et des réseaux. Fusionné avec l'américain Lucent en 2006, puis absorbé par Nokia en 2016 : l'infrastructure européenne consolidée hors de France."},
  ovh:{name:"OVHcloud", cat:"Hébergement · Cloud", status:"SURVIVANT", sclass:"status-surv", period:"1999–", note:"souverain, minoritaire",
    img:"ovh.svg",
    story:"L'hébergeur européen : des serveurs physiques à Roubaix, une vraie alternative souveraine. Toujours là, coté en bourse, mais minuscule face à AWS, Azure et Google."},

  /* 🇩🇪 ALLEMAGNE */
  studivz:{name:"StudiVZ", cat:"Réseau social", status:"DISPARU", sclass:"status-dead", period:"2005–2022",
    wm:{word:"studiVZ", color:"#7a1f3d", weight:800},
    story:"Le Facebook allemand : 16 M d'utilisateurs en 2007, plus grand réseau social du pays en 2009. Un rachat par Facebook aurait été refusé par les actionnaires en 2007. Facebook est arrivé ; le site a fermé en 2022."},
  werkenntwen:{name:"wer-kennt-wen", cat:"Réseau social", status:"DISPARU", sclass:"status-dead", period:"2006–2014",
    wm:{word:"wer-kennt-wen", color:"#e2483d", weight:800},
    story:"Qui connaît qui : réseau social allemand de proximité, jusqu'à ~9 M de membres, racheté par le groupe RTL en 2009. Concurrencé frontalement par Facebook, débranché en 2014."},
  intershop:{name:"Intershop", cat:"E-commerce · Logiciel", status:"DISPARU", sclass:"status-dead", period:"1992–2000s", note:"krach Neuer Markt",
    wm:{word:"INTERSHOP", color:"#1a3e8c", weight:800},
    story:"Éditeur de logiciels e-commerce d'Iéna, star du Neuer Markt et symbole de la bulle allemande. L'action s'effondre de plus de 99% après 2000 ; l'entreprise survit, minuscule, loin de son ambition."},
  lycos:{name:"Lycos Europe", cat:"Portail · Recherche", status:"DISPARU", sclass:"status-dead", period:"1997–2009",
    img:"lycos.jpg",
    story:"La tentative d'un portail et moteur paneuropéens, financée par Bertelsmann et l'américain Lycos. Trop de pays, trop de langues, jamais de masse critique : démantelée à la fin des années 2000."},
  sap:{name:"SAP", cat:"Logiciel · Entreprise", status:"SURVIVANT", sclass:"status-surv", period:"1972–",
    img:"sap.svg",
    story:"Le logiciel qui fait tourner la comptabilité et la logistique des plus grandes entreprises du monde. Le seul vrai géant européen du logiciel, mais invisible du grand public, jamais une plateforme grand public."},
  unitedinternet:{name:"United Internet", cat:"Accès · Mail · Hébergement", status:"SURVIVANT", sclass:"status-surv", period:"1988–", note:"germanophone",
    wm:{word:"United Internet", color:"#1a3e8c", weight:700},
    story:"Derrière GMX, web.de et 1&1 : le mail, l'accès et l'hébergement grand public allemands. Un opérateur solide, mais cantonné au marché germanophone."},

  /* 🇬🇧 ROYAUME-UNI */
  arm:{name:"ARM", cat:"Puces · Architecture", status:"ACQUIS", sclass:"status-bought", period:"1990–2016", note:"brique stratégique",
    wm:{word:"ARM", color:"#0091bd", weight:800},
    story:"L'architecture de processeur qui équipe la quasi-totalité des smartphones de la planète. Le joyau caché du mobile, racheté par le japonais SoftBank en 2016 : la brique la plus précieuse, vendue."},
  freeserve:{name:"Freeserve", cat:"FAI · Portail", status:"ACQUIS", sclass:"status-bought", period:"1998–2000",
    wm:{word:"Freeserve", color:"#d4262b", weight:800},
    story:"Le FAI grand public britannique emblématique. Flotté à 150p, pic à 920p en mars 2000, vendu à Wanadoo à 157p en décembre : l'arc complet d'une bulle en une seule action."},
  boo:{name:"Boo.com", cat:"E-commerce mode", status:"DISPARU", sclass:"status-dead", period:"1998–2000",
    wm:{word:"boo.com", color:"#111111", weight:800},
    story:"Tente de bâtir une marque mode e-commerce mondiale depuis Londres. Brûle ~135 M$ et s'effondre en 2000 : décrite comme la première grande faillite Internet d'Europe, le cas d'école de l'excès dot-com."},
  friendsreunited:{name:"Friends Reunited", cat:"Réseau social", status:"DISPARU", sclass:"status-dead", period:"2000–2016",
    wm:{word:"Friends Reunited", color:"#1f6fb0"},
    story:"Un des premiers réseaux sociaux de masse britanniques, fondé sur la nostalgie scolaire. Vendu 125 M£ à ITV en 2005, revendu pour une fraction, fermé en 2016. Facebook a redéfini ce que grande échelle voulait dire."},
  bebo:{name:"Bebo", cat:"Réseau social", status:"DISPARU", sclass:"status-dead", period:"2005–2013", note:"acquis puis bradé",
    wm:{word:"Bebo", color:"#16a0c0", weight:800},
    story:"Très populaire au Royaume-Uni et en Irlande. AOL le rachète 850 M$ en 2008, puis le revend pour une poignée de dollars deux ans plus tard. La bulle sociale résumée en une transaction."},
  lastfm:{name:"Last.fm", cat:"Musique · Recommandation", status:"ACQUIS", sclass:"status-bought", period:"2002–2007",
    wm:{word:"last.fm", color:"#d51007", weight:800},
    story:"La recommandation musicale sociale avant les algorithmes de Spotify. Rachetée par l'américain CBS en 2007, puis lentement vidée de son ambition."},
  psion:{name:"Psion", cat:"Terminal · PDA", status:"DISPARU", sclass:"status-dead", period:"1980–2001", note:"pré-smartphone",
    wm:{word:"PSION", color:"#1f6fb0", weight:800},
    story:"Les agendas électroniques britanniques, ancêtres directs du smartphone. Leur système d'exploitation a donné naissance à Symbian, celui de Nokia. La bonne idée, trop tôt."},

  /* 🇵🇹 PORTUGAL */
  sapo:{name:"SAPO", cat:"Search · Portail", status:"ACQUIS", sclass:"status-bought", period:"1995–",
    img:"sapo.png",
    story:"Né en 1995 à l'Université d'Aveiro, premier moteur de recherche en portugais, créé par six étudiants. Portugal Telecom en prend 74,9% dès 1999 ; son moteur, remplacé par Google. Aujourd'hui une marque de portail dans l'orbite d'Altice."},
  clix:{name:"Clix", cat:"Portail · FAI", status:"DISPARU", sclass:"status-dead", period:"1999–2015",
    img:"clix.webp",
    story:"Lancé par Sonaecom en 1999, 2e site le plus visité du Portugal dès 2001, première offre fibre commerciale du pays en 2008. Fusionné dans NOS en 2013, site fermé en 2015."},
  aeiou:{name:"aeiou", cat:"Portail", status:"DISPARU", sclass:"status-dead", period:"1999–2010s",
    img:"aeiou.png",
    story:"Portail portugais lancé à la fin des années 1990, un temps parmi les plus visités : webmail, actualités, recherche. Passé dans l'orbite de groupes média et télécom, éteint doucement dans les années 2010."},
  iol:{name:"IOL", cat:"Portail", status:"SURVIVANT", sclass:"status-surv", period:"1999–", note:"réduit",
    img:"iol.png",
    story:"Longtemps l'un des grands portails portugais : webmail, recherche, communautés. Absorbé par Media Capital et TVI, il ne survit aujourd'hui que comme marque du site d'actualité de la chaîne."},

  /* 🇳🇱 PAYS-BAS */
  tomtom:{name:"TomTom", cat:"Cartographie · GPS", status:"SURVIVANT", sclass:"status-surv", period:"1991–", note:"niche B2B",
    img:"tomtom.png",
    story:"Leader mondial du GPS embarqué, cartographe des routes européennes. Écrasé par Google Maps sur smartphone ; revend en 2023 sa division cartographie à Microsoft, à ceux qui ont pris son marché grand public."},
  hyves:{name:"Hyves", cat:"Réseau social", status:"DISPARU", sclass:"status-dead", period:"2004–2013",
    wm:{word:"hyves", color:"#e8741b", weight:800},
    story:"Réseau social dominant aux Pays-Bas, 10,3 M de comptes en 2010. Pour un temps il ressemblait à de l'infrastructure ; puis Facebook est arrivé et l'a vidé de sa substance. Fermé comme réseau social en 2013."},
  worldonline:{name:"World Online", cat:"FAI · Portail", status:"DISPARU", sclass:"status-dead", period:"1995–2000",
    wm:{word:"World Online", color:"#13396e"},
    story:"IPO de mars 2000 à 43€, valorisation ~12 Mds€, effondrement immédiat dans la controverse. Racheté par Tiscali la même année. Le récit du pic de bulle à la consolidation forcée, en une entreprise."},
  marktplaats:{name:"Marktplaats", cat:"Marketplace · Annonces", status:"ACQUIS", sclass:"status-bought", period:"1999–",
    wm:{word:"marktplaats", color:"#c8202a", weight:800},
    story:"La grande marketplace de petites annonces des Pays-Bas. Rachetée par eBay en 2004 (~225 M€), restée leader national mais pilotée de l'étranger, puis versée dans Adevinta en 2020. Le iBazar néerlandais."},
  booking:{name:"Booking.com", cat:"Voyage · Plateforme", status:"ACQUIS", sclass:"status-bought", period:"1996–", note:"capital américain",
    wm:{word:"Booking.", color:"#003580", weight:800},
    story:"Une des rares plateformes nées en Europe devenue un géant mondial. Mais contrôlée depuis 2005 par l'américain Booking Holdings : européenne d'origine, américaine de capital."},

  /* 🇪🇸 ESPAGNE */
  ole:{name:"Olé", cat:"Search · Annuaire", status:"ACQUIS", sclass:"status-bought", period:"1996–1999",
    wm:{word:"Olé", color:"#e0892a", weight:800},
    story:"Le premier annuaire-moteur espagnol (1996), l'un des tout premiers index du web hispanophone. Racheté par Telefónica en 1998, fondu dans le portail Terra en 1999."},
  terra:{name:"Terra Networks", cat:"Portail · FAI", status:"DISPARU", sclass:"status-dead", period:"1999–2005",
    img:"terra.svg",
    story:"Le portail hispanophone de Telefónica. Rachète Lycos 12,5 Mds$ en 2000, revend le Lycos américain 95 M$ en 2004, réabsorbé dans Telefónica en 2005. La bulle en une action : 13€ à l'IPO, 100€+ au pic, 7,35€ au rachat."},
  tuenti:{name:"Tuenti", cat:"Réseau social", status:"ACQUIS", sclass:"status-bought", period:"2006–2016",
    img:"tuenti.png",
    story:"Le Facebook espagnol, dominant chez les jeunes vers 2010. Telefónica en prend le contrôle en 2010 et le transforme en opérateur mobile ; le réseau social ferme en 2016. Le schéma SAPO, en espagnol."},

  /* 🇮🇹 ITALIE */
  tiscali:{name:"Tiscali", cat:"FAI · Portail", status:"SURVIVANT", sclass:"status-surv", period:"1998–", note:"restructuré",
    wm:{word:"Tiscali", color:"#1b6ea8", weight:800},
    story:"Ambition paneuropéenne par acquisitions agressives pendant la bulle, dont World Online. 2e plus grand FAI d'Europe en 2000. A cru que la masse critique continentale suffisait : elle ne suffisait pas. Restructuré, réduit."},
  virgilio:{name:"Virgilio", cat:"Portail", status:"SURVIVANT", sclass:"status-surv", period:"1996–", note:"résiduel",
    wm:{word:"virgilio", color:"#1d8f5a", weight:800},
    story:"Le grand portail italien lancé par Telecom Italia en 1996, porte d'entrée du web pour des millions d'Italiens. Passé de main en main (Telecom Italia, Italiaonline), réduit à un portail d'actualité résiduel."},
  olivetti:{name:"Olivetti", cat:"Informatique · Matériel", status:"SURVIVANT", sclass:"status-surv", period:"1908–", note:"résiduel",
    wm:{word:"Olivetti", color:"#1a1a1a", weight:700},
    story:"Pionnier italien de la machine à écrire puis de la micro-informatique, avec un ordinateur personnel dès la fin des années 1960. Dépassé, vidé, réduit à une marque dans l'orbite télécom."},

  /* 🇨🇭 SUISSE */
  logitech:{name:"Logitech", cat:"Périphériques · Matériel", status:"SURVIVANT", sclass:"status-surv", period:"1981–",
    wm:{word:"Logitech", color:"#111111", weight:700},
    story:"Souris, claviers, webcams : le périphérique discret présent sur des centaines de millions de bureaux. L'un des rares champions matériels européens encore leaders, en restant sur sa niche."},
  kudelski:{name:"Kudelski", cat:"Sécurité · Accès conditionnel", status:"SURVIVANT", sclass:"status-surv", period:"1951–", note:"B2B invisible",
    wm:{word:"Kudelski", color:"#b0121a", weight:800},
    story:"La sécurité et l'accès conditionnel de la télévision payante mondiale. Un champion B2B invisible : il protège les flux des autres, sans jamais posséder la plateforme."},

  /* 🇧🇪 BELGIQUE */
  netlog:{name:"Netlog", cat:"Réseau social", status:"DISPARU", sclass:"status-dead", period:"1999–2014",
    wm:{word:"netlog", color:"#3a8f3a", weight:800},
    story:"Réseau social multilingue né à Gand, des dizaines de millions d'utilisateurs revendiqués, sa stratégie linguistique vue comme un avantage européen. Vendu à Meetic en 2012, éteint en 2014. Facebook a gagné avec l'anglais comme pivot."},
  skynet:{name:"Skynet / Belgacom", cat:"Portail · FAI", status:"SURVIVANT", sclass:"status-surv", period:"1995–", note:"marque résiduelle",
    wm:{word:"skynet", color:"#1b6ea8", weight:800},
    story:"Skynet, le portail et l'accès Internet de Belgacom (devenu Proximus), porte d'entrée du web belge. Aujourd'hui réduite à une marque d'actualités de l'opérateur national."},

  /* 🇵🇱 POLOGNE */
  nkpl:{name:"NK.pl / Nasza-Klasa", cat:"Réseau social", status:"DISPARU", sclass:"status-dead", period:"2006–2021",
    wm:{word:"NK.pl", color:"#cc2030", weight:800},
    story:"Le réseau social scolaire et alumni polonais. Son message de clôture en 2021, d'une honnêteté éditoriale remarquable, a marqué : l'Europe centrale aussi avait son propre web social."}
};

/* ============================================================
   GRAPHIQUE 1 — Chute de Nokia (focus)
   Part de marché MONDIALE sur les SMARTPHONES, en %.
   Série reconstituée (Gartner / IDC / rapports Nokia) :
     2007 49,4 · 2008 43,7 · 2009 39,3 · 2010 35,0
     2011 16,4 · 2012 5,8 · 2013 ~3,0
   Notes : 2009-2010 reconstitués à partir des « Smart Devices /
   converged devices » Nokia divisés par les totaux smartphones
   Gartner ; le point 2013 correspond au DÉBUT 2013 (Q2), pas à
   l'année fiscale complète.
   ============================================================ */
const NOKIA_SHARE = {
  years:[2007,2008,2009,2010,2011,2012,2013],
  share:[49.4,43.7,39.3,35.0,16.4,5.8,3.0],
  marks:[
    {year:2007, label:"iPhone"},
    {year:2011, label:"Mémo « burning platform »"},
    {year:2013, label:"Rachat Microsoft"}
  ]
};

/* ============================================================
   GRAPHIQUE 2 — La grande consolidation
   Chaque événement = un champion de l'atlas racheté, fermé ou
   absorbé (année où il a perdu son indépendance). Données
   dérivées des fiches ci-dessus, donc cohérentes avec l'atlas.
   Les survivants restés indépendants (Ericsson, SAP, OVH,
   Logitech, Kudelski, TomTom, United Internet, Tiscali,
   PagesJaunes) n'y figurent pas : c'est le propos.
   ============================================================ */
const FALL_EVENTS = [
  {year:1998, name:"Olé"},
  {year:1999, name:"SAPO"},
  {year:2000, name:"Freeserve"}, {year:2000, name:"World Online"}, {year:2000, name:"Boo.com"},
  {year:2001, name:"iBazar"}, {year:2001, name:"Intershop"}, {year:2001, name:"Psion"},
  {year:2003, name:"Olivetti"},
  {year:2004, name:"Marktplaats"},
  {year:2005, name:"Skype"}, {year:2005, name:"Terra"}, {year:2005, name:"Friends Reunited"},
  {year:2006, name:"Kazaa"}, {year:2006, name:"Alcatel"}, {year:2006, name:"Wanadoo / Voilà"},
  {year:2007, name:"Last.fm"}, {year:2007, name:"Caramail"},
  {year:2008, name:"MySQL"}, {year:2008, name:"Lycos Europe"}, {year:2008, name:"Bebo"},
  {year:2010, name:"LunarStorm"}, {year:2010, name:"Tuenti"}, {year:2010, name:"IOL"}, {year:2010, name:"aeiou"},
  {year:2011, name:"Meetic"},
  {year:2012, name:"Minitel"}, {year:2012, name:"Netlog"},
  {year:2013, name:"Hyves"}, {year:2013, name:"Clix"}, {year:2013, name:"Virgilio"},
  {year:2014, name:"wer-kennt-wen"}, {year:2014, name:"Nokia"},
  {year:2015, name:"Dailymotion"},
  {year:2016, name:"ARM"}, {year:2016, name:"Opera"},
  {year:2021, name:"NK.pl"},
  {year:2022, name:"StudiVZ"}
];
