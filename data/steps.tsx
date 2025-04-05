import { Steps } from "@/types/model";

import Link from "next/link";

export const steps: Steps = [
  {
    title: "Bienvenue",
    description:
      "Vous êtes des hackers d’élite 🎭. Votre objectif : infiltrer les réseaux et retrouver une information ultra-confidentielle sur un certain, OSINT",
  },
  {
    title: "Étape 1 : Une image laissée par l'attaquant",
    description: (
      <>
        <span>
          {`Vous avez récemment été victimes d'une cyberattaque. Aucun dégât
          majeur n’a été constaté, et les systèmes ne présentent pas de signes
          évidents de compromission.`}
        </span>
        <span>
          Cependant, lors de l’investigation, les administrateurs ont découvert
          une{" "}
          <Link
            href="/ahah_bienfait_2.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-primary hover:text-secondary transition-colors"
          >
            image
          </Link>{" "}
          laissée par le cybercriminel.
        </span>
        <span>
          Peut-être contient-elle des indices permettant d’identifier les
          attaquants ?
        </span>
      </>
    ),
    inputs: [
      {
        label: "Quel est le pseudo de l’attaquant ?",
        validResponses: ["frz_tom64"],
        description:
          "Trouvez le pseudo de l'attaquant en vous appuyant sur les indices donnés.",
        hint: {
          title: "Besoin d'un coup de pouce ?",
          description: (
            <>
              <span>
                Pour retrouver le pseudo de l’attaquant, observe attentivement
                l’image qu’il a laissée derrière lui.
              </span>
              <br />
              <span>
                Un indice pourrait bien se cacher dans ses métadonnées… rien
                n’est laissé au hasard.
              </span>
              <br />
              <span>
                Télécharge l’image et consulte le livret d’enquête pour t’aider
                dans ta fouille&nbsp;:{" "}
                <a
                  href="https://troubled-trollius-231.notion.site/Les-m-tadonn-es-1ccae4a6665e8013a00aff9982cd4aa4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-primary transition-colors"
                >
                  Ouvrir le livret
                </a>
              </span>
            </>
          ),
        },
      },
    ],
  },
  {
    title: "Étape 2 : Une erreur fatale du cybercriminel...",
    description: (
      <>
        <span>
          Félicitations, vous avez mis la main sur le pseudo utilisé par notre
          cybercriminel&nbsp;! Facile, non&nbsp;? Mais l’affaire ne s’arrête pas
          là...
        </span>
        <span>
          D’après nos analyses, ce pseudo aurait également été utilisé sur
          d’autres plateformes en ligne — une erreur classique, mais lourde de
          conséquences pour lui... et une opportunité en or pour nous.
        </span>
        <span>
          De nombreuses personnes réutilisent le même alias sur plusieurs sites.
          Lorsqu’un pseudo est suffisamment distinctif, cela permet souvent de
          retrouver d’autres comptes appartenant au même individu.
        </span>
        <span>
          Notre attaquant semble avoir laissé une trace sur un site de streaming
          très connu, notamment dans le monde du gaming.
        </span>
      </>
    ),
    inputs: [
      {
        label: "Sur quel réseau social retrouve-t-on ce pseudo ?",
        validResponses: ["twitch"],
        description:
          "Retrouve le nom du réseau social où l'attaquant a laissé son pseudo.",
        hint: {
          title: "Besoin d'un coup de pouce ?",
          description: (
            <>
              <span>
                Le logo est violet, et des personnalités comme Domingo,
                MisterMV, et Kameto sont très connues sur cette plateforme… Tu
                vois de quoi on parle ?
              </span>
            </>
          ),
        },
      },
      {
        label: "Quel est l'URL du profil de l'attaquant ?",
        validResponses: ["twitch.tv/frz_tom64"],
        responseFormat: "https://site.tv/[pseudo] ou https://site.tv/[pseudo]/",
        description:
          "Copie colle l'URL du profil de l'attaquant en utilisant le pseudo trouvé dans l'image précédente.",
        hint: {
          description: (
            <>
              <span>
                {`Si tu n'arrives pas à trouver le profil via la recherche, essaye
                d'entrer l'adresse sous cette forme :`}{" "}
                <strong>site.tv/[pseudo]</strong>.{" "}
                {`Ça devrait t'orienter
                directement vers son profil.`}
              </span>
              <span>
                {`Une URL (Uniform Resource Locator) est l'adresse web qui te
                permet d’accéder à une page précise sur Internet. C’est comme
                une adresse postale mais sur le web.`}
              </span>
              <span>
                Tu peux consulter le livret d’enquête pour t’aider dans ta
                recherche&nbsp;:{" "}
                <a
                  href="https://troubled-trollius-231.notion.site/Les-URLS-1ccae4a6665e808d8c54df6a0aab6ae7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-primary transition-colors"
                >
                  Ouvrir le livret
                </a>
              </span>
              <span>
                {`Pour retrouver l'attaquant, tu dois comprendre comment
                fonctionnent ces différentes parties. Parfois, il suffit juste
                de modifier une partie de l'URL pour accéder directement à
                une page particulière.`}
              </span>
            </>
          ),
        },
      },
    ],
  },
  {
    title: "Étape 3 : Identifier Tom",
    description: (
      <div className="flex flex-col gap-4 text-justify">
        <span>
          {`Il semblerait que ce petit cybercriminel "Tom" soit un fan de gaming... Et il a l'air de laisser un peu trop d'infos sur lui sur ses réseaux. Profitons-en !`}
        </span>
        <span>
          Vous allez devoir explorer son profil Twitch pour en apprendre
          davantage sur lui. Il est fort probable que des informations comme son
          nom de famille et son adresse email soient disponibles dans ses
          détails de profil.
        </span>
        <span>
          {`Cherchez les bonnes informations et complète les champs ci-dessous
          pour avancer dans l'enquête.`}
        </span>
      </div>
    ),
    inputs: [
      {
        label: "Quel est le nom de famille de Tom ?",
        validResponses: ["fraize"],
        description: "Cherchez le nom de Tom sur son profil Twitch.",
        hint: {
          description: (
            <span>
              Le nom de famille pourrait être indiqué dans la page /about ou
              dans la bio de son profil Twitch.
            </span>
          ),
        },
      },
      {
        label: "Quel est l'email professionnel de Tom ?",
        validResponses: ["clemencefrz@gmail.com"],
        description:
          "L'adresse email peut être cachée dans les informations publiques de Tom sur Twitch.",
        hint: {
          title: "Besoin d'un coup de pouce ?",
          description: (
            <>
              <span>
                {`Il est possible que l'email de Tom apparaisse dans les
                informations liées à ses contacts ou ses partenariats.`}
              </span>
              <span>
                {`Cette adresse pourrait également être liée à un autre membre de
                sa famille, alors ne t'étonne pas si ce n’est pas son propre
                mail !`}
              </span>
            </>
          ),
        },
      },
    ],
  },
  {
    title: "Étape 4 : Vérifier la fuite de données",
    description: (
      <div className="flex flex-col gap-4 text-justify">
        <span>
          <strong>Bravo ! </strong>{" "}
          {`Vous avez trouvé l'adresse email de Tom.
          Maintenant, il est temps de vérifier si cet email a été compromis dans
          une fuite de données…`}
        </span>
        <span>
          {`Un email peut être une porte d'entrée vers des informations sensibles,
          et souvent, les personnes réutilisent leur adresse email sur plusieurs
          sites. Cela signifie que si l'email de Tom a été impliqué dans une
          fuite, il pourrait y avoir des informations compromises ailleurs.`}
        </span>
        <span>
          Pour cela, nous allons utiliser des outils de cybersécurité puissants
          comme{" "}
          <a
            href="https://haveibeenpwned.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Have I Been Pwned
          </a>{" "}
          ou{" "}
          <a
            href="https://www.epieos.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Epieos
          </a>{" "}
          {`pour vérifier si l'email de Tom apparaît dans des fuites de données.`}
        </span>
        <span>
          {`Ces outils nous permettront de savoir si Tom a été victime d'une
          fuite, et si des informations sensibles ont été exposées.`}
        </span>
      </div>
    ),
    inputs: [
      {
        label:
          "Sur quel site y a-t-il eu une fuite de données impliquant l'email de Tom ?",
        validResponses: [
          "le slip français",
          "leslipfrancais",
          "le slip francais",
        ],
        description:
          "Utilise les outils de cybersécurité mentionnés pour rechercher des fuites de données liées à l'email de Tom.",
        hint: {
          description: (
            <div className="flex flex-col gap-4">
              <span>
                L’email de Tom pourrait être lié à plusieurs fuites de données,
                mais une fuite notable pourrait être sur un site où il a utilisé
                cet email pour des achats ou des abonnements.
              </span>
              <span>{`N'hésite pas à utiliser le livret pour t'aider :`}</span>
              <a
                href="https://troubled-trollius-231.notion.site/Teste-ta-s-curit-1ccae4a6665e8093b996d6eb0594a950"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-primary transition-colors"
              >
                Ouvrir le livret
              </a>
              <span>
                {`Un site particulièrement intéressant pourrait être celui d'une
                marque de vêtements. Recherche les fuites associées à cet email
                et essaie de repérer le site dans lequel il pourrait avoir été
                exposé.`}
              </span>
            </div>
          ),
        },
      },
      {
        label:
          "Donnez une des informations sur Tom qui ont été compromises dans cette fuite de données.",
        validResponses: [
          "L'adresse email, le nom, le numéro de téléphone, l'adresse postale",
          "numéro de telephone",
          "numéro de téléphone",
          "adresse postale",
          "adresse email",
          "email",
          "nom",
          "nom de famille",
          "email addresses",
          "names",
          "phone numbers",
          "physical addresses",
          "email addresses, names, phone numbers, physical addresses",
        ],
        description:
          "Vous trouverez la réponse sur le site haveibeenpwned.com ou epieos.com.",
      },
    ],
  },
  {
    title: "Étape 5 : Trouver le compte Insta",
    description: (
      <>
        <span>
          {`Les données de ce site ont fuité et ont été récupérées par des hackers. Ces infos peuvent être utilisées pour des attaques. `}
        </span>
        <span>
          {`Pas de mots de passe dans cette fuite, mais vous avez trouvé son numéro de téléphone et son email, qui sont partout sur Internet. Vous avez même repéré qu'il est inscrit à LaBanqueBasqueDuCoin.`}
        </span>
        <span>
          {`Il vous manque maintenant une pièce essentielle : son mot de passe. Heureusement, beaucoup de gens utilisent le même mot de passe partout, souvent lié à des infos personnelles.`}
        </span>
        <span>
          {`Peut-être que son compte Instagram pourrait nous donner un indice supplémentaire ?`}
        </span>
      </>
    ),
    inputs: [
      {
        label: "Quel est le compte Instagram de Tom ?",
        validResponses: [
          "@tom_fraize",
          "instagram.com/tom_fraize",
          "tom_fraize",
        ],
        description: "Quel est le nom d'utilisateur de Tom sur Instagram ?",
        hint: {
          title: "Besoin d'un coup de pouce ?",
          description: (
            <>
              <span>
                {`Souvenez-vous de l’indice laissé dans la bio de Tom sur son compte Twitch. Il mentionnait un lien vers son Instagram.`}
              </span>
              <br />
              <span>
                {`Regardez de près, vous trouverez peut-être une information personnelle dans sa bio Instagram qui vous aidera à trouver son mot de passe !`}
              </span>
            </>
          ),
        },
      },
    ],
  },
  {
    title: "Étape 5 : On en apprend encore plus sur Tom...",
    description: (
      <>
        <span>
          {`Tom nous a fait la gentillesse de rendre son profil public.  Nous pouvons maintenant avoir accès à des informations personnelles intéressantes.`}
        </span>
        <span>
          {`Sur son Instagram, Tom a posté `}
          <Link
            href="/image_insta.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            une photo
          </Link>{" "}
          où il est en train de profiter du soleil. Regardez bien cette photo :
          elle pourrait nous donner un indice important pour découvrir où il se
          trouve.
        </span>
        <span>
          {`En utilisant des outils comme Google Lens, vous pouvez obtenir des informations précieuses sur cette image, y compris le nom de la plage où la photo a été prise.`}
        </span>
      </>
    ),
    inputs: [
      {
        label: "Donner l'une des passions de Tom.",
        validResponses: [
          "streaming, jeux vidéos, moto et surf",
          "moto",
          "surf",
          "ride",
          "gaming",
          "jeux vidéos",
          "jeux videos",
          "jeu video",
          "jeu vidéo",
          "streaming",
          "fifa",
          "valorant",
          "fortnite",
        ],
        description:
          "Cherchez un indice sur ses passions dans ses différents réseaux.",
      },
      {
        label: "Quel est le nom de la plage de la photo de Tom ?",
        validResponses: [
          "plage de marinella",
          "marinella",
          "plage marinella",
          "plage de la marinella",
          "la marinella",
          "la plage de marinella",
          "marinela",
        ],
        description:
          "Utilisez Google Lens pour trouver le nom de la plage dans la photo de Tom.",
        hint: {
          title: "Besoin d'un coup de pouce ?",
          description: (
            <>
              <span>
                {`Pour trouver le nom de la plage, essayez d'utiliser`}{" "}
                <a
                  href={"https://images.google.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Google Lens
                </a>{" "}
                pour analyser la photo.
              </span>

              <span>
                {`Consultez aussi le livret d'enquête pour plus d'infos sur cet
                outil :`}{" "}
                <a
                  href="https://troubled-trollius-231.notion.site/Retrouver-un-endroit-avec-Google-Lens-1ccae4a6665e8007b20cd7d21ef967ff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Ouvrir le livret
                </a>
              </span>
            </>
          ),
        },
      },
    ],
  },
  {
    title: "Étape 6 : Craquer le mot de passe de TomFraize",
    description: (
      <>
        <span>
          {`Grâce aux indices que vous avez collectés jusqu'à présent, vous avez peut-être une chance de deviner le mot de passe de TomFraize. En effet, une grande partie des mots de passe sont souvent basés sur des informations personnelles simples.`}
        </span>
        <span>
          {`Vous savez que son chat s'appelle "Boa" grâce à son Instagram, et que "Clémence" semble être une personne proche de lui, peut-être même de sa famille, puisqu’il utilise son adresse email pour s’inscrire sur divers sites.`}
        </span>
        <span>
          {`Il est maintenant temps de tester votre théorie et de voir si vous pouvez accéder à ses données privées.`}
        </span>
      </>
    ),
    inputs: [
      {
        label: "Quel est le mot de passe de TomFraize ?",
        validResponses: ["boaclemence2010", "boaclemence2009"],
        description:
          "Tentez de deviner le mot de passe basé sur les informations personnelles de Tom.",
        hint: {
          description: (
            <>
              <span>
                {`Pour trouver le mot de passe, souvenez-vous des indices : Tom a
                un chat nommé "Boa" et utilise l'adresse email de Clémence.`}
              </span>
              <br />
              <span>
                Essayez une combinaison de ces informations simples avec des
                chiffres, comme beaucoup de gens le font pour leurs mots de
                passe.
              </span>
            </>
          ),
        },
      },
    ],
  },
  {
    title: "Fin.",
    description: "so whaaaat.",
  },
];
