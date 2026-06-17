/* ============================================================
   Internet.exe — Europe Edition · PART 2 · DATA (EN)
   "The atlas of vanished European giants"
   14 countries · ~50 companies · Miradouro 2026
   English edition of internet-exe-p2-data.js
   ============================================================ */

const LOGO_PATH = "../assets/logos/";

/* Display order: map + selector */
const ORDER = ["FI","SE","NO","EE","FR","DE","GB","PT","NL","ES","IT","CH","BE","PL"];

const COUNTRIES = {
  FI:{name:"Finland", flag:"flag-fi", meta:"Handsets · Data",
      note:"Hardware and data. Finland held the object the whole world carried in its pocket, and one of the software bricks the web was built on.",
      companies:["nokia","mysql"]},
  SE:{name:"Sweden", flag:"flag-se", meta:"Networks · Social",
      note:"The invisible mobile infrastructure of the entire world, and the social network of Scandinavian teenagers long before Facebook.",
      companies:["ericsson","lunarstorm"]},
  NO:{name:"Norway", flag:"flag-no", meta:"Browser",
      note:"The web's front door: a browser designed in Oslo, a mobile pioneer years ahead of the rest.",
      companies:["opera"]},
  EE:{name:"Estonia", flag:"flag-ee", meta:"Communication · P2P",
      note:"Global communication: a Nordic idea, with code written in Tallinn. Sold twice, then switched off.",
      companies:["skype","kazaa"]},
  FR:{name:"France", flag:"flag-fr", meta:"Network · Video · Social · Hosting",
      note:"Almost every use case, twenty years early: the networked terminal, the portals, video, blogs, dating, hosting. But each in its own corner.",
      companies:["minitel","voila","ibazar","dailymotion","skyblog","meetic","pagesjaunes","caramail","alcatel","ovh"]},
  DE:{name:"Germany", flag:"flag-de", meta:"Software · Social · E-commerce",
      note:"The world's software back office, the country's largest social network, a stock-market e-commerce darling. The audience and the usage were all there.",
      companies:["studivz","werkenntwen","intershop","lycos","sap","unitedinternet"]},
  GB:{name:"United Kingdom", flag:"flag-gb", meta:"Chips · ISP · Social · E-commerce",
      note:"The most strategic component in mobile, the purest bubble arcs, and social networks from before Facebook.",
      companies:["arm","freeserve","boo","friendsreunited","bebo","lastfm","psion"]},
  PT:{name:"Portugal", flag:"flag-pt", meta:"Search · Portals · ISP",
      note:"A national search engine born in a university, plus three more portals. All diluted into telecom brands.",
      companies:["sapo","clix","aeiou","iol"]},
  NL:{name:"Netherlands", flag:"flag-nl", meta:"Mapping · Social · ISP · Classifieds · Travel",
      note:"The map before Google Maps, a dominant social network, an ISP floated at the peak of the NASDAQ, and one of the few surviving global platforms.",
      companies:["tomtom","hyves","worldonline","marktplaats","booking"]},
  ES:{name:"Spain", flag:"flag-es", meta:"Search · Portal · Social",
      note:"From the first Spanish-language directory to a global portal to the Spanish Facebook: three good ideas, three times bought by the telco.",
      companies:["ole","terra","tuenti"]},
  IT:{name:"Italy", flag:"flag-it", meta:"ISP · Portals · Computing",
      note:"An aggregator that bet on continental scale, the portal everyone came in through, and a pioneer of personal computing.",
      companies:["tiscali","virgilio","olivetti"]},
  CH:{name:"Switzerland", flag:"flag-ch", meta:"Peripherals · Security",
      note:"The hardware you touch and the security you never see. Global niches, quiet and durable.",
      companies:["logitech","kudelski"]},
  BE:{name:"Belgium", flag:"flag-be", meta:"Social network · Portal · Access",
      note:"A multilingual social network born in Ghent, and the national access-portal backed by the telco.",
      companies:["netlog","skynet"]},
  PL:{name:"Poland", flag:"flag-pl", meta:"Social network",
      note:"The story of vanished local giants isn't only Franco-British. Central Europe had its own social web too.",
      companies:["nkpl"]}
};

/* ---- STATUSES ----
   bought = ACQUIRED (blue) · dead = SHUT DOWN (red) · surv = SURVIVOR (green) */

const COMPANIES = {
  /* FINLAND */
  nokia:{name:"Nokia", cat:"Handset · Mobile", status:"ACQUIRED", sclass:"status-bought", period:"1987–2014",
    img:"nokia.png",
    story:"The world's biggest phone maker before the smartphone, the central digital object of its time. It never saw the phone become a software platform: the mobile division was sold to Microsoft in 2013, then evaporated from our pockets. The group itself still exists and generates several billion euros in networks; the loss highlighted here is the consumer mobile potential that moved outside Europe."},
  mysql:{name:"MySQL", cat:"Database · Open source", status:"ACQUIRED", sclass:"status-bought", period:"1995–2008",
    wm:{word:"MySQL", color:"#00758F", weight:800},
    story:"The open-source database that powered a huge slice of the web. Bought by Sun in 2008, then swept up, by way of Sun, into Oracle, its direct rival."},

  /* SWEDEN */
  ericsson:{name:"Ericsson", cat:"Networks · Infrastructure", status:"SURVIVOR", sclass:"status-surv", period:"1876–", note:"refocused on B2B",
    wm:{word:"ERICSSON", color:"#1c4e8f", weight:800},
    story:"The antennas and core of mobile networks the world over. It survived by leaving the consumer market very early (the Sony Ericsson phones) to fall back on infrastructure, where only the contracts matter."},
  lunarstorm:{name:"LunarStorm", cat:"Social network", status:"SHUT DOWN", sclass:"status-dead", period:"2000–2010",
    wm:{word:"LunarStorm", color:"#7b3fb5"},
    story:"The social network of Swedish teenagers, a forerunner of Facebook in Scandinavia and heir to a 1990s service. One of Europe's oldest online communities, closed in 2010."},

  /* NORWAY */
  opera:{name:"Opera", cat:"Browser · Web/Mobile", status:"ACQUIRED", sclass:"status-bought", period:"1995–2016", note:"bought, niche",
    wm:{word:"Opera", color:"#e8332a", weight:800},
    story:"A pioneering Norwegian browser: tabs and mobile browsing before anyone else. Squeezed out by Chrome and Safari, bought in 2016 by a Chinese consortium; survives as a niche player."},

  /* ESTONIA (Nordic founders, Estonian engineering) */
  skype:{name:"Skype", cat:"Communication · VoIP", status:"SHUT DOWN", sclass:"status-dead", period:"2003–2025", note:"acquired, then retired",
    img:"skype.png",
    story:"The voice-over-IP that taught the world to call for free. Founded by Nordic entrepreneurs, coded in Tallinn; sold to eBay then Microsoft, never modernised, overtaken by Zoom and WhatsApp. Shut down in 2025."},
  kazaa:{name:"Kazaa", cat:"File-sharing · P2P", status:"SHUT DOWN", sclass:"status-dead", period:"2001–2006",
    wm:{word:"Kazaa", color:"#6a3fb5", weight:800},
    story:"Peer-to-peer file-sharing, spearhead of the distributed-network culture and of the lawsuits that followed. Its creators would spin its technology into Skype."},

  /* FRANCE */
  minitel:{name:"Minitel", cat:"Network · Terminal", status:"SHUT DOWN", sclass:"status-dead", period:"1980–2012", note:"before the web",
    img:"minitel.png",
    story:"A networked terminal in millions of homes, twenty years before the consumer web: directory, messaging, shopping, banking. Too early, too closed, switched off in 2012 as the open web took everything."},
  voila:{name:"Wanadoo / Voilà", cat:"Portal · Search · ISP", status:"ACQUIRED", sclass:"status-bought", period:"1999–2006",
    img:"voila.png",
    story:"Wanadoo, France Télécom's consumer internet arm, and Voilà, its French-language engine, folded back into Orange. Voilà indexed the French-speaking web first; Google optimised every language at once."},
  ibazar:{name:"iBazar", cat:"Marketplace · Auctions", status:"ACQUIRED", sclass:"status-bought", period:"1998–2001",
    img:"ibazar.png",
    story:"Europe's online-auction leader, founded in Paris. Bought by eBay in 2001 to speed its grab of local markets. The clearest case of the pattern: the local answer, bought by the American platform."},
  dailymotion:{name:"Dailymotion", cat:"Video", status:"SURVIVOR", sclass:"status-surv", period:"2005–", note:"marginal",
    img:"dailymotion.png",
    story:"Launched in 2005, the same month as YouTube. The engineers were there; the advertising and rights ecosystem wasn't. Taken over by Orange then Vivendi: national champion preserved, market lost."},
  skyblog:{name:"Skyblog / Skyrock", cat:"Blog · Social", status:"SHUT DOWN", sclass:"status-dead", period:"2002–2023",
    img:"skyblog.jpg",
    story:"France's first social network, kingdom of the 2000s teenagers and a top-10 French site in 2007. It couldn't hold against Facebook: closed in 2023, twenty years of teen web erased."},
  meetic:{name:"Meetic", cat:"Dating", status:"ACQUIRED", sclass:"status-bought", period:"2001–2011+",
    img:"meetic.png",
    story:"One of Europe's great online-dating brands. Taken over by America's Match Group in 2011: the head office stayed in Paris, the decision-making moved to New York."},
  pagesjaunes:{name:"PagesJaunes / Solocal", cat:"Local directory", status:"SURVIVOR", sclass:"status-surv", period:"1996–", note:"in decline",
    img:"pagesjaunes.png",
    story:"The go-to for finding a local business, beaten at its own speciality by Google Maps and My Business. Solocal came close to bankruptcy in 2020: Google crushed the European local directory with an idea borrowed from it."},
  caramail:{name:"Caramail", cat:"Webmail · Chat", status:"SHUT DOWN", sclass:"status-dead", period:"1997–2007",
    img:"caramail.jpg",
    story:"The free email and chat of choice before Gmail and Messenger, and the famous Wizz. Absorbed into the Lycos Europe empire, abandoned when the empire collapsed."},
  alcatel:{name:"Alcatel", cat:"Networks · Equipment", status:"ACQUIRED", sclass:"status-bought", period:"1898–2016",
    wm:{word:"Alcatel", color:"#0a3d7a", weight:800},
    story:"French giant of telecom equipment and networks. Merged with America's Lucent in 2006, then absorbed by Nokia in 2016: European infrastructure consolidated outside France."},
  ovh:{name:"OVHcloud", cat:"Hosting · Cloud", status:"SURVIVOR", sclass:"status-surv", period:"1999–", note:"sovereign, minority",
    img:"ovh.svg",
    story:"The European host: physical servers in Roubaix, a genuine sovereign alternative. Still here, publicly listed, but tiny next to AWS, Azure and Google."},

  /* GERMANY */
  studivz:{name:"StudiVZ", cat:"Social network", status:"SHUT DOWN", sclass:"status-dead", period:"2005–2022",
    wm:{word:"studiVZ", color:"#7a1f3d", weight:800},
    story:"The German Facebook: 16M users in 2007, the country's biggest social network in 2009. A Facebook buyout was reportedly blocked by shareholders in 2007. Facebook came anyway; the site closed in 2022."},
  werkenntwen:{name:"wer-kennt-wen", cat:"Social network", status:"SHUT DOWN", sclass:"status-dead", period:"2006–2014",
    wm:{word:"wer-kennt-wen", color:"#e2483d", weight:800},
    story:"'Who knows whom': a neighbourhood-focused German social network, up to ~9M members, bought by the RTL group in 2009. Hit head-on by Facebook, switched off in 2014."},
  intershop:{name:"Intershop", cat:"E-commerce · Software", status:"SHUT DOWN", sclass:"status-dead", period:"1992–2000s", note:"Neuer Markt crash",
    wm:{word:"INTERSHOP", color:"#1a3e8c", weight:800},
    story:"An e-commerce software maker from Jena, a Neuer Markt star and a symbol of the German bubble. The stock fell more than 99% after 2000; the company survives, tiny, far from its ambition."},
  lycos:{name:"Lycos Europe", cat:"Portal · Search", status:"SHUT DOWN", sclass:"status-dead", period:"1997–2009",
    img:"lycos.jpg",
    story:"The attempt at a pan-European portal and search engine, funded by Bertelsmann and America's Lycos. Too many countries, too many languages, never any critical mass: dismantled in the late 2000s."},
  sap:{name:"SAP", cat:"Software · Enterprise", status:"SURVIVOR", sclass:"status-surv", period:"1972–",
    img:"sap.svg",
    story:"The software that runs the accounting and logistics of the world's biggest companies. Europe's only true software giant, but invisible to the public and never a consumer platform."},
  unitedinternet:{name:"United Internet", cat:"Access · Mail · Hosting", status:"SURVIVOR", sclass:"status-surv", period:"1988–", note:"German-speaking",
    wm:{word:"United Internet", color:"#1a3e8c", weight:700},
    story:"Behind GMX, web.de and 1&1: German consumer mail, access and hosting. A solid operator, but confined to the German-speaking market."},

  /* UNITED KINGDOM */
  arm:{name:"ARM", cat:"Chips · Architecture", status:"ACQUIRED", sclass:"status-bought", period:"1990–2016", note:"strategic brick",
    wm:{word:"ARM", color:"#0091bd", weight:800},
    story:"The processor architecture inside nearly every smartphone on Earth. Mobile's hidden jewel, bought by Japan's SoftBank in 2016: the most precious brick of all, sold."},
  freeserve:{name:"Freeserve", cat:"ISP · Portal", status:"ACQUIRED", sclass:"status-bought", period:"1998–2000",
    wm:{word:"Freeserve", color:"#d4262b", weight:800},
    story:"The emblematic British consumer ISP. Floated at 150p, peaked at 920p in March 2000, sold to Wanadoo at 157p that December: a complete bubble arc in a single stock."},
  boo:{name:"Boo.com", cat:"Fashion e-commerce", status:"SHUT DOWN", sclass:"status-dead", period:"1998–2000",
    wm:{word:"boo.com", color:"#111111", weight:800},
    story:"Tried to build a global fashion e-commerce brand out of London. Burned ~$135M and collapsed in 2000: described as Europe's first big internet bankruptcy, the textbook dot-com excess."},
  friendsreunited:{name:"Friends Reunited", cat:"Social network", status:"SHUT DOWN", sclass:"status-dead", period:"2000–2016",
    wm:{word:"Friends Reunited", color:"#1f6fb0"},
    story:"One of Britain's first mass social networks, built on school nostalgia. Sold for £125M to ITV in 2005, resold for a fraction, closed in 2016. Facebook redefined what scale meant."},
  bebo:{name:"Bebo", cat:"Social network", status:"SHUT DOWN", sclass:"status-dead", period:"2005–2013", note:"bought, then dumped",
    wm:{word:"Bebo", color:"#16a0c0", weight:800},
    story:"Hugely popular in the UK and Ireland. AOL bought it for $850M in 2008, then sold it for a handful of dollars two years later. The social bubble in a single transaction."},
  lastfm:{name:"Last.fm", cat:"Music · Recommendation", status:"ACQUIRED", sclass:"status-bought", period:"2002–2007",
    wm:{word:"last.fm", color:"#d51007", weight:800},
    story:"Social music recommendation before Spotify's algorithms. Bought by America's CBS in 2007, then slowly drained of its ambition."},
  psion:{name:"Psion", cat:"Handheld · PDA", status:"SHUT DOWN", sclass:"status-dead", period:"1980–2001", note:"pre-smartphone",
    wm:{word:"PSION", color:"#1f6fb0", weight:800},
    story:"The British handheld organisers, direct ancestors of the smartphone. Their operating system gave birth to Symbian, Nokia's. The right idea, too early."},

  /* PORTUGAL */
  sapo:{name:"SAPO", cat:"Search · Portal", status:"ACQUIRED", sclass:"status-bought", period:"1995–",
    img:"sapo.png",
    story:"Born in 1995 at the University of Aveiro, the first Portuguese-language search engine, built by six students. Portugal Telecom took 74.9% as early as 1999; its engine was replaced by Google. Today a portal brand in Altice's orbit."},
  clix:{name:"Clix", cat:"Portal · ISP", status:"SHUT DOWN", sclass:"status-dead", period:"1999–2015",
    img:"clix.webp",
    story:"Launched by Sonaecom in 1999, the 2nd most-visited site in Portugal by 2001, the country's first commercial fibre offer in 2008. Merged into NOS in 2013, site closed in 2015."},
  aeiou:{name:"aeiou", cat:"Portal", status:"SHUT DOWN", sclass:"status-dead", period:"1999–2010s",
    img:"aeiou.png",
    story:"A Portuguese portal launched in the late 1990s, for a while among the most visited: webmail, news, search. Pulled into media and telecom groups, quietly switched off in the 2010s."},
  iol:{name:"IOL", cat:"Portal", status:"SURVIVOR", sclass:"status-surv", period:"1999–", note:"reduced",
    img:"iol.png",
    story:"Long one of Portugal's major portals: webmail, search, communities. Absorbed by Media Capital and TVI, it now survives only as the brand of the broadcaster's news site."},

  /* NETHERLANDS */
  tomtom:{name:"TomTom", cat:"Mapping · GPS", status:"SURVIVOR", sclass:"status-surv", period:"1991–", note:"B2B niche",
    img:"tomtom.png",
    story:"World leader in in-car GPS, cartographer of Europe's roads. Crushed by Google Maps on the smartphone; in 2023 it sold its mapping division to Microsoft, to the very people who took its consumer market."},
  hyves:{name:"Hyves", cat:"Social network", status:"SHUT DOWN", sclass:"status-dead", period:"2004–2013",
    wm:{word:"hyves", color:"#e8741b", weight:800},
    story:"The dominant social network in the Netherlands, 10.3M accounts in 2010. For a while it looked like infrastructure; then Facebook arrived and hollowed it out. Closed as a social network in 2013."},
  worldonline:{name:"World Online", cat:"ISP · Portal", status:"SHUT DOWN", sclass:"status-dead", period:"1995–2000",
    wm:{word:"World Online", color:"#13396e"},
    story:"A March 2000 IPO at €43, valuation ~€12bn, immediate collapse amid controversy. Bought by Tiscali the same year. The bubble's peak to forced consolidation, in one company."},
  marktplaats:{name:"Marktplaats", cat:"Marketplace · Classifieds", status:"ACQUIRED", sclass:"status-bought", period:"1999–",
    wm:{word:"marktplaats", color:"#c8202a", weight:800},
    story:"The big Dutch classifieds marketplace. Bought by eBay in 2004 (~€225M), kept its national lead but steered from abroad, then folded into Adevinta in 2020. The Dutch iBazar."},
  booking:{name:"Booking.com", cat:"Travel · Platform", status:"ACQUIRED", sclass:"status-bought", period:"1996–", note:"American capital",
    wm:{word:"Booking.", color:"#003580", weight:800},
    story:"One of the rare platforms born in Europe to become a global giant. But controlled since 2005 by America's Booking Holdings: European by origin, American by capital."},

  /* SPAIN */
  ole:{name:"Olé", cat:"Search · Directory", status:"ACQUIRED", sclass:"status-bought", period:"1996–1999",
    wm:{word:"Olé", color:"#e0892a", weight:800},
    story:"Spain's first directory-engine (1996), one of the very first indexes of the Spanish-language web. Bought by Telefónica in 1998, folded into the Terra portal in 1999."},
  terra:{name:"Terra Networks", cat:"Portal · ISP", status:"SHUT DOWN", sclass:"status-dead", period:"1999–2005",
    img:"terra.svg",
    story:"Telefónica's Spanish-language portal. Bought Lycos for $12.5bn in 2000, sold the American Lycos for $95M in 2004, reabsorbed into Telefónica in 2005. The bubble in one stock: €13 at IPO, €100+ at the peak, €7.35 at the buyback."},
  tuenti:{name:"Tuenti", cat:"Social network", status:"ACQUIRED", sclass:"status-bought", period:"2006–2016",
    img:"tuenti.png",
    story:"The Spanish Facebook, dominant among young people around 2010. Telefónica took control in 2010 and turned it into a mobile operator; the social network closed in 2016. The SAPO pattern, in Spanish."},

  /* ITALY */
  tiscali:{name:"Tiscali", cat:"ISP · Portal", status:"SURVIVOR", sclass:"status-surv", period:"1998–", note:"restructured",
    wm:{word:"Tiscali", color:"#1b6ea8", weight:800},
    story:"Pan-European ambition through aggressive acquisitions during the bubble, World Online among them. Europe's 2nd-largest ISP in 2000. It bet continental mass would be enough: it wasn't. Restructured, reduced."},
  virgilio:{name:"Virgilio", cat:"Portal", status:"SURVIVOR", sclass:"status-surv", period:"1996–", note:"residual",
    wm:{word:"virgilio", color:"#1d8f5a", weight:800},
    story:"The big Italian portal launched by Telecom Italia in 1996, the web's front door for millions of Italians. Passed from hand to hand (Telecom Italia, Italiaonline), reduced to a residual news portal."},
  olivetti:{name:"Olivetti", cat:"Computing · Hardware", status:"SURVIVOR", sclass:"status-surv", period:"1908–", note:"residual",
    wm:{word:"Olivetti", color:"#1a1a1a", weight:700},
    story:"Italian pioneer of the typewriter and then of personal computing, with a personal computer as early as the late 1960s. Overtaken, hollowed out, reduced to a brand in the telecom orbit."},

  /* SWITZERLAND */
  logitech:{name:"Logitech", cat:"Peripherals · Hardware", status:"SURVIVOR", sclass:"status-surv", period:"1981–",
    wm:{word:"Logitech", color:"#111111", weight:700},
    story:"Mice, keyboards, webcams: the quiet peripheral on hundreds of millions of desks. One of the few European hardware champions still leading, by staying in its niche."},
  kudelski:{name:"Kudelski", cat:"Security · Conditional access", status:"SURVIVOR", sclass:"status-surv", period:"1951–", note:"invisible B2B",
    wm:{word:"Kudelski", color:"#b0121a", weight:800},
    story:"The security and conditional access of pay-TV worldwide. An invisible B2B champion: it protects everyone else's streams without ever owning the platform."},

  /* BELGIUM */
  netlog:{name:"Netlog", cat:"Social network", status:"SHUT DOWN", sclass:"status-dead", period:"1999–2014",
    wm:{word:"netlog", color:"#3a8f3a", weight:800},
    story:"A multilingual social network born in Ghent, tens of millions of users claimed, its language strategy seen as a European edge. Sold to Meetic in 2012, switched off in 2014. Facebook won with English as the pivot."},
  skynet:{name:"Skynet / Belgacom", cat:"Portal · ISP", status:"SURVIVOR", sclass:"status-surv", period:"1995–", note:"residual brand",
    wm:{word:"skynet", color:"#1b6ea8", weight:800},
    story:"Skynet, the portal and internet access of Belgacom (now Proximus), the front door of the Belgian web. Today reduced to a news brand of the national operator."},

  /* POLAND */
  nkpl:{name:"NK.pl / Nasza-Klasa", cat:"Social network", status:"SHUT DOWN", sclass:"status-dead", period:"2006–2021",
    wm:{word:"NK.pl", color:"#cc2030", weight:800},
    story:"The Polish school and alumni social network. Its 2021 closing message, remarkably honest editorially, struck a chord: Central Europe had its own social web too."}
};

/* ============================================================
   CHART 1 — Nokia's fall (focus)
   Nokia's GLOBAL vendor share of SMARTPHONES, in %.
   Reconstructed series (Gartner / IDC / analyst consensus):
     2007 49.4 · 2008 43.7 · 2009 39.3 · 2010 35.0
     2011 16.4 · 2012 5.8 · 2013 ~3.0
   Not to be confused with the Symbian OS share, which was higher.
   ============================================================ */
const NOKIA_SHARE = {
  years:[2007,2008,2009,2010,2011,2012,2013],
  share:[49.4,43.7,39.3,35.0,16.4,5.8,3.0],
  marks:[
    {year:2007, label:"iPhone"},
    {year:2011, label:"'Burning platform' memo"},
    {year:2013, label:"Microsoft buyout"}
  ]
};

/* ============================================================
   CHART 2 — kept for compatibility (no longer rendered;
   replaced by the "Where the capital went" flow module).
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
