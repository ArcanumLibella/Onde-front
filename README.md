# Projet **Onde** - Front-end

### Concept

Plateforme numérique de participation citoyenne destinée à préserver le littoral et les eaux méditerranéennes.

##### Lien du site :

Hébergé sur Netlify : [https://onde.netlify.app/]()

##### Lien du swagger :

Hébergé sur API Plateform : [Onde-API](https://onde-api.frb.io/api)

### Groupe 8

> **UI | UX :**
> Emma Cassagnettes,
> Victor Balducci

> **Back-end :**
> Romain Dreidemy

> **Front-end :**
> Victor Balducci,
> Kalani Marquand,
> Fiona Roux

### Choix techniques

Notre projet est composé d'un Front, d'une API, d'un Back et d'une BDD.

- Framework React.js
- PWA
- Map SVG
- Yarn
- Client side rendering

##### Librairies :

- ServiceWorker : Workbox
- Style SCSS : [Styled components](https://styled-components.com/)
- API : [Axios](https://www.npmjs.com/package/axios)
- Gestion icons : [SVG-Inliner](https://github.com/cuginoAle/svg-inliner)
- Router : [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- Format du code : [Prettier](https://prettier.io/)

### Pour lancer le projet

- git clone avec ssh :
  `git@github.com:ArcanumLibella/Onde-front.git`

- Installer les dépendances :
  `yarn`

- Lancer le projet :
  `yarn start`

Le projet s'ouvre sur [http://localhost:3000](http://localhost:3000)

### Les règles de développement mises en place

Choix du mobile first et de l'amélioration progressive dans une démarche d'amélioration de l'accessibilité et de la scalabilité dans le temps.

#### Les pages

Les pages principales du site sont répertoriées dans le dossier `src/pages`,

sont exportées dans le fichier `src/pages/index.js`.

#### Les assets

Les assets se trouvent dans le dossier `src/assets`,
ils regroupent :

> la police

> les images

> les icônes

> les variables globales scss

###### Les variables globales ...

... définissent les couleurs, les breakpoints des media-queries et la font utilisées sur le site,
rassemblées et utilisés à travers le `ThemeProvider` de **styled-components**.

###### Les images ...

... sont des svg minifiés grâce à [SVGomg](https://jakearchibald.github.io/svgomg/)
et exportées dans le fichier `src/assets/index.js` :

```
export { default as CleanUpTheBeach } from './images/cleanUpTheBeach.svg';
```

Le component **ImageWrapper** permet une gestion des images simplifiée :

```
const ImageWrapper = (props) => {
	const { name, width, alt } = props;

	if (!assets[name]) {
		return null;
	}

	return <img width={width} alt={alt} src={assets[name]} />;
};
```

Une fois **ImageWrapper** importé dans un fichier, il suffit de donner en propriété `name` le nom d'export de l'image souhaitée :

```
<ImageWrapper name="CleanUpTheBeach" alt="Nettoyage de plage" />
```

###### Les icônes ...

... sont des svg rassemblés dans le dossier `src/assets/icons`

La librairie **svg-inliner** permet la gestion des icônes :

- minification ([**SVGomg**](https://jakearchibald.github.io/svgomg/))
- gestion du style
- export en tant que component

Les icônes sont ensuite exportées dans le fichier `src/assets/index.js`, selon la convention suivante :

> si l'icônes est outlined : → `IconNameO`

> si l'icônes est filled :
> → `IconNameF`

L'import se fait ainsi :

```
import { DropO, FistRaisedF, ShareCircleF, BackO } from '../assets';
```

#### Les components

Les components sont répertoriés dans le dossier `src/components`,
et sont exportés dans le fichier `src/components/index.js`.

Ce sont des components fonctionnels.

Le style est défini en fin de fichier à l'aide de **styled-component**.

##### Les imports se font dans l'ordre suivant :

- React
- Styled-Component

_saut de ligne_

- Component
- Assets
- Utilities

###### Les Texts ...

... sont rassemblés dans le dossier `src/components/Text`.

On a a disposition `<Title>`, `<DisplayTitle>`, `<Paragraph>` & `<TextLink>`

Pour les importer :

```jsx
import { Title, DisplayTitle, Paragraph, TextLink } from '../components';
```

Utiliser **Title** :

```
<Title color={theme.midnight} fontSize="20" fontWeight="600">
	Apporter sa goutte à la mer !
</Title>
```

> C'est une balise h3

Par défaut,

- la couleur est midnight, props facultative
- la font-size est rem(20), props facultative
- la font-weight est 600, props facultative

Utiliser **DisplayTitle** :

```
<DisplayTitle color={theme.midnight} fontSize="20" fontWeight="600">
	Apporter sa goutte à l'océan !
</DisplayTitle>
```

> C'est une balise h2

Par défaut,

- la couleur est midnight, props facultative
- la font-size est rem(30), props facultative
- la font-weight est 800, props facultative

Utiliser **Paragraph** :

```
<Paragraph color={theme.midnight} fontSize="20" fontWeight="600">
	Dire j’aime ton projet, c’est déjà un premier pas !
</Paragraph>
```

> C'est une balise p

Par défaut,

- la couleur est midnight, props facultative
- la font-size est rem(16), props facultative
- la font-weight est 500, props facultative
- le text-transform est en uppercase, props facultative

Utiliser **TextLink** :

```
<TextLink>
	Devenir modérateur
</TextLink>
```

> C'est une balise p

Par défaut,

- la couleur est malibuBlue
- la font-size est rem(16)
- la font-weight est 400

###### Mise en place de **Truncate** :

Permet d'afficher un texte avec un nombre de caractère prédéfinis, 
s'utilise dans une balise texte :

```
<Paragraph>
  <Truncate maxChars="10" trailingCharCount="4">
    "Magnam et et est sapiente"
  </Truncate>
</Paragraph>
```
output :
`Magnam et et...ente`

- `maxChars` correspond au nombre de caractères display (sans compter les points de suspension), par défaut il est de 12 caractères

- `trailingCharCount` correspond au nombre de caractères display **APRÈS** les points de suspension, par défaut il est de 3 caractères

#### Les fonctions utilitaires

#####

### Création du ServiceAPI + utilisation de Axios
#### Connexion Back/Front

Un fichier ServiceAPI a été créé pour la gestion de la connexion entre le Back et le Front.
La fonction permettait de fetch des données selon une route passée en paramètres.

Or des difficultés de rendering ont été rencontrées sur l'application.
Le groupe a fait le choix d'une utilisation de la librairie [Axios](https://www.npmjs.com/package/axios) à la place, utilisée à l'intérieur même des components.

Le groupe s'est rendu compte de l'importance de se mettre d'accord en **amont** à propos de la sémantique de l'envoi de données depuis le Back.
En effet, **la manipulation des informations côté Front dépend de la distribution des données envoyées** depuis le Back.

- Le Back peut faire le choix de création de routes très génériques renvoyants un nombre de données conséquent. Ces données sont appelées par le Front, un fois, à la racine de l'application. Puis, sont passées au components enfants.

- Autrement, le Back peut préférer une approche view-model. Il créé une multitude de routes, répondants chacune à un besoin précis du Front et renvoyants _**la** donnée_ souhaitée. Routes appelées ensuite au sein des components nécessitants l'usage de ces données.

Le groupe a fait l'erreur de s'accorder un peu tard sur ce principe. Le Back a créé un panel de routes important renvoyants beaucoup d'informations chacune, parfois peu pertinentes au vu des besoins en données de l'UX.

Ce qui a conduit le Front a faire des appels de données massifs, afin de coupler les informations renvoyées par plusieurs routes, ramenant par conséquent **trop** de données. On a donc une perte de performance et d'optimisation de ce point de vu.