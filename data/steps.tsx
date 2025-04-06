import { Steps } from "@/types/model";

import Link from "next/link";

export const steps: Steps = [
  {
    title: "Bienvenue",
    description:
      "Vous êtes des hackers d’élite 🎭. Votre objectif : infiltrer les réseaux et retrouver une information ultra-confidentielle sur un certain, OSINT",
  },
  {
    title: "Une image laissée par le hacker",
    description: (
      <>
        <span>
          Lors de l’investigation, les administrateurs ont découvert une{" "}
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
          hackers ?
        </span>
      </>
    ),
    inputs: [
      {
        label: "Quel est le pseudo du hacker ?",
        shortLabel: "Pseudo twitch",
        validResponses: ["frz_tom64"],
        hint: {
          title: "Besoin d'un coup de pouce ?",
          description: (
            <>
              <span>
                {`Cela ne sert à rien de regarder la photo pendant 1000 ans... la réponse n'est pas SUR la photo mais DANS la photo.`}
              </span>
              <span>
                Un indice pourrait bien se cacher dans ses métadonnées… rien
                n’est laissé au hasard.
              </span>
              <span>
                {`Télécharge la photo et consulte le livret d’enquête pour t’aider
                dans ta fouille :`}{" "}
                <a
                  href="https://troubled-trollius-231.notion.site/Les-m-tadonn-es-1ccae4a6665e8013a00aff9982cd4aa4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-primary transition-colors"
                >
                  {`Ouvrir le livret d'aide`}
                </a>
              </span>
            </>
          ),
        },
      },
    ],
  },
  {
    title: "Une erreur fatale...",
    description: (
      <>
        <span>
          D’après nos analyses, ce pseudo aurait également été utilisé sur
          Twitch.
        </span>
        <span>
          De nombreuses personnes réutilisent le même pseudo sur plusieurs
          sites. Lorsqu’un pseudo est suffisamment distinctif, cela permet
          souvent de retrouver d’autres comptes appartenant au même individu.
        </span>
        <span>
          {`Cherchez les bonnes informations et complètez les champs ci-dessous
          pour avancer dans l'enquête.`}
        </span>
      </>
    ),
    inputs: [
      {
        label: "Quel est l'URL du profil de l'attaquant ?",
        shortLabel: "Url du profil Twitch",
        validResponses: [
          "https://twitch.tv/frz_tom64/",
          "twitch.tv/frz_tom64",
          "https://twitch.tv/frz_tom64",
          "http://twitch.tv/frz_tom64/",
          "http://twitch.tv/frz_tom64",
          "twitch.tv/frz_tom64/",
        ],
        responseFormat: "Format de réponse : https://******.**/*********/",
        description:
          "Les urls sur twitch sont de la forme twitch.tv/ton_pseudo. Trouvez l'url du profil de Tom.",
        hint: {
          description: (
            <>
              <span>
                {`Une URL est l'adresse web qui te
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
                  {`Ouvrir le livret d'aide`}
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
    title: "Identifier Tom",
    description: (
      <div className="flex flex-col gap-4 text-justify">
        <span>
          {`Il semblerait que ce petit cybercriminel "Tom" laisse un peu trop d'infos sur lui sur ses réseaux... Profitons-en !`}
        </span>
        <span>
          Explorez son{" "}
          <a
            href="https://www.twitch.tv/frz_tom64/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            profil Twitch
          </a>{" "}
          pour en apprendre davantage sur lui.
        </span>
      </div>
    ),
    inputs: [
      {
        label: "Quel est le nom de famille de Tom ?",
        shortLabel: "Nom de famille",
        validResponses: ["fraize"],
        responseFormat: "Format de réponse : ******",
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
        label: "Quel est l'email de Tom ?",
        shortLabel: "Mail de Tom",
        validResponses: ["clemencefrz@gmail.com"],
        responseFormat: "Format de réponse : ***********@*****.***",
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
      {
        label: "Quel est le compte Instagram de Tom ?",
        shortLabel: "Compte instagram",
        validResponses: [
          "@tom_fraize",
          "instagram.com/tom_fraize",
          "tom_fraize",
        ],
        hint: {
          title: "Besoin d'un coup de pouce ?",
          description: (
            <>
              <span>
                {`Souvenez-vous de l’indice laissé dans la bio de Tom sur son compte Twitch. Il mentionnait un lien vers son Instagram.`}
              </span>
            </>
          ),
        },
      },
    ],
  },
  {
    title: "Vérifier la fuite de données",
    description: (
      <div className="flex flex-col gap-4 text-justify">
        <span>
          {`
          Souvent, les personnes réutilisent leur mail sur plusieurs
          sites. Cela signifie que si le mail de Tom a été impliqué dans une
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
          {`pour vérifier si le mail de Tom apparaît dans des fuites de données.`}
        </span>
      </div>
    ),
    inputs: [
      {
        label: "Sur quel site a fuité le mail de Tom ?",
        shortLabel: "Site où il y a eut fuite de données",
        validResponses: [
          "le slip français",
          "leslipfrancais",
          "le slip francais",
        ],
        hint: {
          description: (
            <div className="flex flex-col gap-4">
              <span>
                {`Un site particulièrement intéressant pourrait être celui d'une
                marque de vêtements. Recherche les fuites associées à cet email
                et essaie de repérer le site dans lequel il pourrait avoir été
                exposé.`}
              </span>
              <span>
                {`N'hésite pas à utiliser le livret pour t'aider :`}{" "}
                <a
                  href="https://troubled-trollius-231.notion.site/Teste-ta-s-curit-1ccae4a6665e8093b996d6eb0594a950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-primary transition-colors"
                >
                  {`Ouvrir le livret d'aide`}
                </a>
              </span>
            </div>
          ),
        },
      },
      {
        label: "Donnez une des informations qui a fuité.",
        shortLabel: "Informations compromises dans la fuite de données",
        validResponses: [
          "L'adresse email, le nom, le numéro de téléphone, l'adresse postale",
          "numéro de telephone",
          "Les adresses emails, les noms, les numéros de téléphone, les adresses postales",
          "numéros de telephone",
          "numéro de téléphone",
          "téléphone",
          "telephones",
          "téléphones",
          "tel",
          "phone",
          "adresse",
          "adresses",
          "noms",
          "adresses emails",
          "adresse postale",
          "adresse email",
          "email",
          "emails",
          "numéros de téléphone",
          "adresses physiques",
          "adresses e-mail",
          "adresses e-mail, noms, numéros de téléphone, adresses physiques",
          "mail",
          "mails",
          "adresses mails",
          "nom",
          "nom de famille",
          "email addresses",
          "names",
          "phone numbers",
          "physical addresses",
          "email addresses, names, phone numbers, physical addresses",
        ],
      },
    ],
  },
  {
    title: "Trouvez Tom à partir d'une photo",
    description: (
      <>
        <span>
          {`Tom nous a fait la gentillesse de rendre son profil public.  Nous pouvons maintenant avoir accès à des informations personnelles.`}
        </span>
        <span>
          Sur son{" "}
          <a
            href="https://www.instagram.com/tom_fraize/p/DIG-lI-omqt/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Insta,
          </a>{" "}
          {`Tom a posté `}
          une photo où il est en train de profiter du soleil. Regardez bien
          cette photo : elle pourrait nous donner un indice important pour
          découvrir où il se trouve.
        </span>
      </>
    ),
    inputs: [
      {
        label: "Quel est le nom du lieu de la photo de Tom ?",
        shortLabel: "Lieu où il a l'habitude d'aller",
        validResponses: [
          "plage de marinella",
          "marinella",
          "plage marinella",
          "plage de la marinella",
          "la marinella",
          "la plage de marinella",
          "marinela",
          "plage de marinela",
          "la plage marinela",
          "plagemarinella",
          "plagemarinela",
        ],

        hint: {
          title: "Besoin d'un coup de pouce ?",
          description: (
            <>
              <span>
                {`Si tu n'as pas de téléphone ou de compte Insta, `}
                <Link
                  href="/image_insta.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  clique-ici
                </Link>{" "}
                pour télécharger la photo.
                {` Pour trouver le nom de la plage, essayez d'utiliser`}{" "}
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
                  {`Ouvrir le livret d'aide`}
                </a>
              </span>
            </>
          ),
        },
      },
    ],
  },
  {
    title: "Les habitudes de Tom",
    description: (
      <>
        <span>
          {`Tom, c'est ce pote qui partage beaucoup (trop ?) de sa vie sur
        Instagram`}
          .
        </span>
        <span>
          Mais ce qu’il ne réalise pas, c’est que ces infos, même anodines,
          peuvent être très précieuses.
        </span>
        Scrollez le profil de Tom et notez les infos qu’il dévoile sans s’en
        rendre compte.
      </>
    ),
    inputs: [
      {
        label: "Donner l'une des passions de Tom.",
        shortLabel: "Passions de Tom",

        validResponses: [
          "streaming, jeux vidéos, moto et surf",
          "moto",
          "surf",
          "ride",
          "gaming",
          "jeux vidéos",
          "jeux videos",
          "jeu video",
          "jeuvidéo",
          "jeuvideo",
          "jeu vidéo",
          "streaming",
          "fifa",
          "valorant",
          "fortnite",
        ],
        description:
          "Cherchez un indice sur ses passions dans son profil instagram.",
      },
      {
        label: "Comment s'appelle son chat ?",
        shortLabel: "Chat de Tom",
        hint: {
          description: (
            <span>
              Regardez attentivement les stories du profil{" "}
              <a
                href="https://www.instagram.com/tom_fraize/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Insta
              </a>{" "}
              de Tom.
            </span>
          ),
        },
        validResponses: [
          "henriette",
          "henriette",
          "henrite",
          "henriete",
          "henriet",
          "henriete",
        ],
      },
      {
        label: "Comment s'appelle sa cousine ?",
        shortLabel: "Cousine de Tom",
        hint: {
          description: (
            <span>
              La réponse se trouve sur{" "}
              <a
                href="https://www.instagram.com/tom_fraize/p/DIFDblEI8MW/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                cette publication Insta
              </a>
              .
            </span>
          ),
        },
        validResponses: ["clémence", "clemence", "clmnce", "clemnce", "clem"],
      },
    ],
  },
  {
    title: "Vous y êtes presque ! Trouvez le mot de passe de Tom.",
    description: (
      <>
        <span>
          {`Avec toutes ces données, vous avez une chance d'accéder à son compte bancaire.. `}
        </span>
        <span>
          {`Vous avez déjà son numéro de téléphone grâce à la fuite de données, qui
          correspond à l'identifiant. Vous devez maintenant trouver son mot de
          passe.`}
        </span>
        <span>
          Une grande partie des mots de passe sont basés sur des informations
          personnelles simples.
        </span>
      </>
    ),
    inputs: [
      {
        label: "Quel est le mot de passe de Tom ?",
        shortLabel: "Mot de passe",
        validResponses: [
          "henriette64!",
          "64henriette!",
          "henriette64!",
          "henriette!64",
          "!64henriette",
          "64!henriette",
        ],
        description:
          "Le mot de passe contient 12 caractères, dont deux chiffres et un caractère spécial.",
        responseFormat: "************",
        hint: {
          description: (
            <>
              <span>
                {`En général, les personnes incluent le nom de leur animal de compagnie, leur numéro de département et un caractère spécial (comme ! ou ?).`}
              </span>
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
    title: "🎉 Mission accomplie !",
    description: "Bravo ! Vous avez terminé la mission avec succès !",
  },
];
