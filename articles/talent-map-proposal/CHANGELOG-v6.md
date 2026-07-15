# Talent Map Portugal · v5 → v6 · Journal des changements

Fichier livré : `09talentmapfr-v6-final.html` (FR + EN, autonome, mêmes chemins relatifs que le package de travail).

## Changements majeurs

1. **Tirets cadratins** : zéro occurrence de `—` restante (FR et EN). Reformulations par virgule, deux-points ou phrase coupée (titres S2/S3, leads, conclusion S8).
2. **Ouverture éditoriale** : hero réécrit dans la voix de l'auteur (croyance jamais vérifiée + diversité des profils observée en recrutement). « Le point de départ » énonce désormais les quatre arguments (fuseau, anglais, coûts, universités) comme hypothèses à tester. Suppression de « Pas pour démonter la phrase, elle est largement vraie » et de la conclusion annoncée en dur dès l'intro (remplacée par une annonce prudente, sans chiffre ni verdict).
3. **Carte européenne QS** :
   - fond GISCO plus présent (opacité 0,55 → 0,75) ;
   - tooltip/title/aria de chaque pays : nombre brut, population, densité calculée et seuil actif, dans les deux langues ;
   - légende recalculée à chaque filtre (0 → max affiché, avec unité selon le mode) ;
   - nouveau paragraphe : pointe d'excellence ≠ qualité moyenne, ruissellement non automatique.
4. **Anglais** : ajout mesuré, rattaché à l'indice EF déjà cité : le frein linguistique d'un recrutement international ne vient pas nécessairement du Portugal (France #38, Espagne #36), présenté comme mesure d'environnement, pas jugement individuel.
5. **Trajectoire QS + logos** : sens de lecture explicité (« plus une université avance vers la gauche, mieux elle est classée »). Médaillons logo ajoutés (36 px, `object-fit: contain`, conteneur commun) avec repli typographique automatique si l'image manque : ULisboa (typographique par principe, aucun actif fourni), UPorto, UC, UA, UM, NOVA. Le nom et les valeurs restent en texte HTML.
6. **Universités / polytechniques** : encadré explicatif ajouté en tête de la section 05 (distinction historique, frontière atténuée, diplômes reconnus, recherche possible) + rappel d'une phrase dans la légende de la carte portugaise.
7. **Voix de l'auteur** : traitement « Observation terrain » homogène (filet vert, label) sur les deux passages recruteur : banque/stages (S2) et rapport au diplôme (S6, raccourci).
8. **Écoles de code** : plus d'affirmation globale « aucun grade académique ». Formulation prudente : modèle hors cursus universitaire classique, certifications/reconnaissances variables selon campus et programme (texte S6 + carte 42 Lisboa).
9. **Carte portugaise (scrolly)** : mécanisme annoncé avant l'interaction (« faites défiler, huit étapes ») ; polytechniques désormais en losange (forme + couleur + libellé, plus seulement la couleur) ; légende complétée (université rond, polytechnique losange, mixte, privé).

## Vérifié

- 0 `—` ; 181 paires `data-fr`/`data-en` équilibrées ; aucune donnée modifiée.
- Aucune erreur JS (syntaxe validée + rendu headless) ; aucun défilement horizontal à 375 px ni 1440 px.
- Bascule FR/EN testée : tuiles, aria-labels et légende recalculés.
- Replis typographiques des logos testés en l'absence des fichiers.

## Actifs à déposer avant publication (non fournis dans cette session)

À placer à côté du HTML, sinon les replis typographiques s'affichent (le fichier reste fonctionnel) :

- `assets/talent-map/europe-svg/CNTR_RG_20M_2024_3035.svg` (fond de la carte européenne)
- `assets/talent-map/carcavelos-campus.jpg`
- `assets/university-logos/universidade-porto.svg` ← à convertir localement depuis `originals/universidade-porto.eps`
- `assets/university-logos/universidade-coimbra.png` ← version nettoyée (ne pas publier le WebP au damier)
- `assets/university-logos/originals/universidade-aveiro.png`
- `assets/university-logos/originals/universidade-minho.gif`
- `assets/university-logos/originals/nova-universidade-lisboa.png`

`assets/talent-map/chart.umd.min.js` est inclus ici.

## Points restant à valider éditorialement

- Statut exact des certifications 42 Lisboa / 42 Porto auprès de leurs sources officielles (la formulation actuelle est volontairement prudente).
- Le mot « polytechniques » apparaît dans le bandeau KPI avant l'encadré explicatif de la section 05 (un bandeau de chiffres ne peut pas porter d'explication ; à arbitrer).
- Noms courts (Lisboa, Porto…) dans la trajectoire : les noms complets figurent dans le texte courant ; à confirmer que cela suffit.
- Photos éventuelles pour les écoles de code : non ajoutées (droits et apport éditorial à vérifier au cas par cas).
- Traduction EN mise à jour en miroir de chaque passage modifié, mais une relecture native de la version anglaise reste conseillée avant publication.
