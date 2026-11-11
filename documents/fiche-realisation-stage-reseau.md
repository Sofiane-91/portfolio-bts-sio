# Réalisation professionnelle — Mise en place et documentation d’un sous-réseau expérimental

**Organisme :** Laboratoire Aimé Cotton — CNRS / Université Paris-Saclay  
**Tuteur :** Patrick Cheinet  
**Équipe :** Atomes de Rydberg Froids (ARF)  
**Période :** du 1er juin au 3 juillet 2026  
**Domaine :** Réseaux, systèmes, cybersécurité, documentation technique

## 1. Contexte
Le laboratoire utilise différents équipements scientifiques connectés au réseau afin de réaliser et piloter des expériences. La mission principale de mon stage consistait à participer à la mise en place d’un sous-réseau dédié aux équipements d’une salle expérimentale.

L’objectif était de permettre à un ordinateur de pilotage de communiquer avec les instruments scientifiques tout en limitant l’exposition de certains équipements au réseau Internet.

## 2. Besoin initial
Le laboratoire avait besoin de séparer logiquement :
- les postes de pilotage, qui doivent pouvoir accéder à Internet ;
- les instruments scientifiques, qui doivent communiquer avec les postes de pilotage mais ne doivent pas nécessairement avoir accès à Internet.

Certains équipements étant anciens ou sensibles, leur exposition directe à Internet devait être limitée.

## 3. Objectifs
- Comprendre l’architecture réseau existante.
- Identifier les besoins des utilisateurs.
- Mettre en place un sous-réseau dédié.
- Organiser le plan d’adressage IP.
- Limiter l’accès Internet des instruments.
- Intégrer et tester plusieurs équipements.
- Participer à la configuration du pare-feu.
- Documenter l’installation.
- Préparer une procédure d’ajout de nouveaux équipements.
- Étudier des solutions d’évolution.

## 4. Environnement matériel et logiciel
### Matériel
- PC de pilotage
- Routeur OpenWrt
- Switch Ethernet
- Moku:Go
- Oscilloscope LeCroy sous Windows 7
- Red Pitaya
- Booster Creotech / Sinara
- Carte Kasli-SoC / Sinara
- Prises Ethernet de la salle

### Logiciels / technologies
- OpenWrt
- Windows
- IPv4
- DHCP
- Adressage statique
- Routage
- Pare-feu
- Ethernet
- Bureau à distance Windows
- ArtiQ

### Outils de diagnostic
- `ipconfig`
- `ping`
- `arp -a`
- `nslookup`
- `Test-NetConnection`

## 5. Démarche réalisée
1. Compréhension du besoin avec le tuteur.
2. Observation d’une installation similaire dans une autre salle.
3. Identification et test des prises Ethernet.
4. Préparation et organisation du matériel.
5. Participation à la configuration du routeur OpenWrt.
6. Configuration du LAN en `10.9.10.1/23` avec masque `255.255.254.0`.
7. Organisation du plan d’adressage :
   - `10.9.10.x` : postes de pilotage avec accès Internet ;
   - `10.9.11.x` : instruments scientifiques sans accès Internet.
8. Vérification des règles de pare-feu.
9. Intégration de plusieurs équipements :
   - Moku:Go : `10.9.11.20`
   - LeCroy : `10.9.11.30`
   - Booster Creotech / Sinara : `10.9.11.31`
   - Red Pitaya : `10.9.11.50` prévue
10. Utilisation des commandes de diagnostic.
11. Étude de la différence entre réservation DHCP et IP fixe.
12. Étude du cas Kasli-SoC / Sinara / ArtiQ.
13. Rédaction d’une notice d’ajout d’équipement.
14. Étude d’un accès Bureau à distance via la seconde carte réseau du PC, sans pont réseau.
15. Comparaison de plusieurs solutions matérielles : EdgeRouter X, EdgeRouter 10X/12, UISP Router Pro, mini-PC x86 OpenWrt et switch central.

## 6. Résultat obtenu
Tous les objectifs prévus ont été menés à leur terme : installation du sous-réseau, configuration d’OpenWrt, organisation du plan d’adressage, intégration et tests des équipements, contrôle des accès Internet et rédaction de la notice. L’installation obtenue est exploitable par le laboratoire et la documentation permet d’ajouter de nouveaux équipements après la fin du stage.

## 7. Difficultés rencontrées
- Comprendre une architecture existante.
- Gérer des équipements très différents.
- Prendre en compte du matériel ancien, notamment un oscilloscope sous Windows 7.
- Comprendre le cas particulier de Sinara / Kasli-SoC, qui ne fonctionne pas directement en DHCP.
- Préserver l’isolation entre le réseau Paris-Saclay et le sous-réseau instruments.

## 8. Solutions apportées
- Observation d’une installation similaire.
- Tests progressifs après chaque modification.
- Vérification systématique de l’adressage.
- Utilisation d’outils de diagnostic réseau.
- Consultation de documentation technique.
- Contrôle des flux via les règles de pare-feu.
- Rédaction d’une documentation de reprise.

## 9. Compétences BTS SIO mobilisées
- **B1.1 — Gérer le patrimoine informatique** : inventaire et documentation des équipements et adresses.
- **B1.2 — Répondre aux incidents et demandes** : diagnostic réseau, tests de connectivité, recherche de solutions.
- **B1.4 — Travailler en mode projet** : analyse du besoin, préparation, configuration, tests et échanges avec le tuteur.
- **B1.5 — Mettre à disposition un service** : mise en place et validation d’un réseau exploitable.
- **B1.6 — Organiser son développement professionnel** : recherche documentaire et montée en compétence sur OpenWrt, Sinara, ArtiQ et le routage.

## 10. Documents et éléments techniques associés
- Notice d’utilisation du sous-réseau expérimental.
- Tableau de synthèse E5.
- Plan d’adressage du sous-réseau.
- Configuration LAN OpenWrt en `10.9.10.1/23`.
- Règles d’accès entre les postes de pilotage, les instruments et Internet.
- Tests réseau réalisés avec `ping`, `ipconfig`, `arp -a`, `nslookup` et `Test-NetConnection`.
- Étude de l’accès Bureau à distance sans pont réseau.
- Comparaison des solutions matérielles étudiées.

## 11. Bilan personnel
Cette mission m’a permis de mettre en pratique l’adressage IP, le DHCP, le routage, le pare-feu et le diagnostic réseau dans un environnement professionnel réel.

J’ai également compris qu’une architecture réseau doit prendre en compte la sécurité, les contraintes des utilisateurs et la maintenance future.

J’ai progressé dans ma méthode de travail : comprendre avant de modifier, tester étape par étape et documenter les solutions afin qu’elles puissent être reprises par d’autres personnes.


## Autonomie et validation
La mission a été réalisée avec une large autonomie technique. Mon tuteur, Patrick Cheinet, est physicien : j’ai effectué l’essentiel de l’analyse, de la configuration réseau, des tests et de la documentation, tout en échangeant avec lui pour valider les besoins liés aux expériences scientifiques.

Tous les objectifs prévus ont été terminés avant la fin du stage, jusqu’à la rédaction de la notice permettant d’ajouter de nouveaux équipements au sous-réseau.
