# Talent Map Portugal · v5 → v6 · Journal des changements

Fichier livré : `09talentmapfr-v6-final.html` (FR + EN, autonome, mêmes chemins relatifs que le package de travail).

## Changements majeurs

1. **Tirets cadratins** : zéro occurrence de `—` restante (FR et EN). Reformulations par virgule, deux-points ou phrase coupée (titres S2/S3, leads, conclusion S8).
2. **Ouverture éditoriale** : hero réécrit dans la voix de l'auteur (croyance jamais vérifiée + diversité des profils observée en recrutement). « Le point de départ » énonce désormais les quatre arguments (fuseau, anglais, coûts, universités) comme hypothèses à tester. Suppression de « Pas pour démonter la phrase, elle est largement vraie » et de la conclusion annoncée en dur dès l'intro (remplacée par une annonce prudente, sans chiffre ni verdict).
3. **Carte européenne QS, refonte complète** : la v6 initiale ne faisait que retoucher l'opacité d'une texture de fond, ce qui ne répondait pas à la consigne (grille de carrés type cartogramme, pas la vraie géographie). Reconstruction depuis zéro :
   - la carte est maintenant un vrai SVG interactif avec le tracé réel de chaque pays (32 tracés extraits directement du fichier GISCO fourni, `fill-rule: evenodd` corrigé pour un rendu propre des pays à îles multiples) ; le viewBox a été recalculé pour cadrer exactement l'UE-27 + Royaume-Uni + AELE sans rien couper ;
   - les pays hors périmètre (Russie, Turquie, Ukraine, Maghreb...) restent visibles en gris neutre pour situer l'ensemble, sans être interactifs ;
   - le Portugal ressort par sa couleur corail et son contour, à sa taille géographique réelle : il est repérable immédiatement sans dominer artificiellement la carte (fini l'effet « toutes les tuiles ont la même taille ») ;
   - chaque pays a un code à deux lettres directement sur sa forme (identifiable sans survol) ; les trois micro-États (Luxembourg, Liechtenstein, Malte) gardent leur forme colorée et une zone de clic agrandie mais sans code inline, illisible à cette échelle : ils restent nommés dans le classement toujours visible à droite ;
   - au survol, au focus clavier et au toucher, chaque pays affiche nombre brut, population et densité calculée (`<title>` natif + `aria-label` + panneau de détail) ;
   - légende recalculée à chaque filtre (0 → max affiché, avec unité selon le mode) ;
   - clic, clavier (Entrée/Espace) et liste de classement testés un par un après la refonte ;
   - nouveau paragraphe éditorial : pointe d'excellence ≠ qualité moyenne, ruissellement non automatique.
4. **Anglais** : ajout mesuré, rattaché à l'indice EF déjà cité : le frein linguistique d'un recrutement international ne vient pas nécessairement du Portugal (France #38, Espagne #36), présenté comme mesure d'environnement, pas jugement individuel.
5. **Trajectoire QS + logos** : sens de lecture explicité (« plus une université avance vers la gauche, mieux elle est classée »). Médaillons logo ajoutés (36 px, `object-fit: contain`, conteneur commun) avec repli typographique automatique si l'image manque : ULisboa (typographique par principe, aucun actif fourni), UPorto, UC, UA, UM, NOVA. Le nom et les valeurs restent en texte HTML.
6. **Universités / polytechniques** : encadré explicatif ajouté en tête de la section 05 (distinction historique, frontière atténuée, diplômes reconnus, recherche possible) + rappel d'une phrase dans la légende de la carte portugaise.
7. **Voix de l'auteur** : traitement « Observation terrain » homogène (filet vert, label) sur les deux passages recruteur : banque/stages (S2) et rapport au diplôme (S6, raccourci).
8. **Écoles de code** : plus d'affirmation globale « aucun grade académique ». Formulation prudente : modèle hors cursus universitaire classique, certifications/reconnaissances variables selon campus et programme (texte S6 + carte 42 Lisboa).
9. **Carte portugaise (scrolly)** : mécanisme annoncé avant l'interaction (« faites défiler, huit étapes ») ; polytechniques désormais en losange (forme + couleur + libellé, plus seulement la couleur) ; légende complétée (université rond, polytechnique losange, mixte, privé).

## Vérifié

- 0 `—` ; 181 paires `data-fr`/`data-en` équilibrées ; aucune donnée modifiée.
- Aucune erreur JS (syntaxe validée + rendu headless) ; aucun défilement horizontal testé à 375, 768, 1024 et 1440 px.
- Bascule FR/EN testée : carte, aria-labels et légende recalculés.
- Carte européenne : interactions (clic sur un pays, clavier, clic sur un micro-État via sa zone agrandie, clic depuis le classement) testées individuellement, capture d'écran comparée avant/après aux trois largeurs.
- Replis typographiques des logos testés en l'absence des fichiers.

## Actifs (package intégré)

Tous les actifs du package de travail sont désormais inclus localement, avec deux conversions réalisées :

- `assets/university-logos/universidade-porto.png` ← converti depuis `universidade-porto.eps` via Ghostscript (variante positive du lockup uniquement ; l'EPS contenait aussi la variante négative). L'EPS source n'est pas republié (non affichable par un navigateur).
- `assets/university-logos/universidade-coimbra.png` ← nettoyé depuis le WebP au damier : luminance convertie en transparence, encre noire d'origine préservée, plus aucun damier. Le WebP d'origine reste dans `originals/` comme source, il n'est référencé nulle part.
- Fond Europe GISCO, photo Carcavelos, logos Aveiro/Minho/NOVA : repris tels quels du package. Católica et ISCTE restent disponibles dans les actifs mais ne sont pas encore utilisés dans l'article.
- ULisboa : médaillon typographique conservé, aucun actif officiel fourni (règle du README).

Chaque logo garde son repli typographique automatique si l'image ne charge pas.

## Retouches après relecture (itération 2)

- **Palette de la carte européenne** : l'ancien dégradé continu écrasait tout le monde dans une bande étroite (à cause de l'outlier Luxembourg). Remplacé par une échelle séquentielle discrète à 6 classes de densité croissante (vert clair → vert profond), avec des seuils lisibles par mode (densité et nombre brut). Les meilleurs et les moins denses se distinguent maintenant nettement. Légende passée en pastilles étagées.
- **Portugal, fin du surlignage corail** : le Portugal prend désormais sa vraie couleur de densité comme tous les autres (on peut donc lire où il se situe), et reste repérable par un fin cerclage noir + son code « PT ». Le corail est réservé à la carte du Portugal (bassins d'emploi), plus à la carte européenne.
- **Panneau latéral** : le classement montre maintenant le nombre d'universités par pays (ex. « 6 univ. ») en valeur principale, la densité en second. Plus concret et plus granulaire.
- **Lisibilité des étiquettes** : sur les pays aux teintes les plus foncées, le code pays passe en clair automatiquement.
- **Trajectoire (question 2027 vs 2026)** : le millésime « 2027 » est conservé car c'est le nom réel de l'édition QS publiée à la mi-2026 (QS nomme chaque édition avec l'année suivante), donc la plus récente à la date de l'article. Une note l'explique désormais dans le pied de section, pour lever la même interrogation chez le lecteur. Aucune donnée modifiée.
- **Carte du Portugal, étape 8 simplifiée** : on efface les campus et écoles pour ne garder que les six bassins d'emploi, rendus plus visibles (contour et remplissage renforcés). Le texte est recentré sur « là où se concentre le besoin ».

## Retouches après relecture (itération 3)

- **Retrait de l'Afrique du Nord sur la carte européenne** : le Maroc, l'Algérie et la Tunisie tombaient partiellement dans le cadrage et formaient une large bande grise ininterrompue sous l'Europe, qui écrasait la lecture. Retirés de la couche de contexte.
- **Bug de mise en page corrigé au passage** : le cadre de la carte s'étirait d'environ 450 px de vide sous la carte pour s'aligner sur la hauteur du panneau latéral (`align-items:stretch` hérité de l'ancienne grille à taille fixe). En creusant, la vraie cause était une collision de nom de classe : mon `<span class="steps">` de légende récupérait par erreur un style CSS global `.steps` déjà utilisé ailleurs sur la page (le conteneur des étapes de la carte du Portugal, avec un padding en `vh`). Renommé, et la grille passe en `align-items:start`.
- **Noms d'universités par pays, données réelles** : à partir du fichier QS World University Rankings 2027 officiel que tu as fourni (1 504 établissements), extraction et vérification des 352 établissements des 32 pays du dossier, jusqu'au rang 1000. Les compteurs recalculés depuis ce fichier (top 250 / top 500 / top 1000) correspondent exactement, pays par pays, aux chiffres déjà publiés dans l'article : aucune donnée modifiée, seulement complétée avec de vrais noms sourcés.
  - Le panneau latéral affiche maintenant, pour le pays sélectionné, la liste de ses établissements classés (nom + rang), filtrée par le seuil actif (250/500/1000). État vide explicite si le pays n'a aucun établissement au seuil choisi.
  - Au-delà du rang ~700, QS publie des tranches (ex. « 901-950 ») plutôt qu'un rang exact : ces tranches sont affichées telles quelles, sans inventer une précision qui n'existe pas dans la source.
  - Le classement comparatif des 32 pays (celui qui vivait avant dans le panneau) n'a pas disparu : il est déplacé dans un tableau dépliable sous la carte (« Voir le tableau des 32 pays »), pour garder un accès textuel complet aux chiffres sans dépendre uniquement du clic pays par pays sur la carte.

## Retouches après relecture (itération 4)

- **Bassins d'emploi à taille hiérarchisée (étape 8)** : les six halos étaient tous au même rayon. Passés à trois paliers : Lisbonne (premier pôle) le plus grand, Porto (second pôle) au milieu, les quatre autres bassins à taille de base identique entre eux. Aucune part précise par bassin n'est publiée dans la source AICEP (seul le total 92 % l'est) : le texte de l'étape 8 explique maintenant cette hiérarchie à trois paliers plutôt que de laisser deviner un pourcentage inventé.

## Points restant à valider éditorialement

- Statut exact des certifications 42 Lisboa / 42 Porto auprès de leurs sources officielles (la formulation actuelle est volontairement prudente).
- Le mot « polytechniques » apparaît dans le bandeau KPI avant l'encadré explicatif de la section 05 (un bandeau de chiffres ne peut pas porter d'explication ; à arbitrer).
- Noms courts (Lisboa, Porto…) dans la trajectoire : les noms complets figurent dans le texte courant ; à confirmer que cela suffit.
- Photos éventuelles pour les écoles de code : non ajoutées (droits et apport éditorial à vérifier au cas par cas).
- Traduction EN mise à jour en miroir de chaque passage modifié, mais une relecture native de la version anglaise reste conseillée avant publication.
