import { Steps } from "@/types/model";

import Link from "next/link";

export const steps: Steps = [
  {
    title: "Bienvenue",
    description:
      "Vous êtes des hackers d’élite 🎭. Votre objectif : infiltrer les réseaux et retrouver une information ultra-confidentielle sur un certain, OSINT",
  },
  {
    title: "Première étape",
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
    title: "Une erreur fatale du cybercriminel...",
    description: (
      <div className="flex flex-col gap-4 text-justify">
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
      </div>
    ),
    inputs: [
      {
        label: "Sur quel réseau social retrouve-t-on ce pseudo ?",
        validResponses: ["twitch"],
        description:
          "Utilisez le pseudo trouvé précédemment pour poursuivre l’enquête sur d’autres plateformes.",
        hint: {
          title: "Besoin d'un coup de pouce ?",
          description: (
            <div className="flex flex-col gap-4">
              <span>
                Notre attaquant semble avoir laissé une trace sur un site de
                streaming très connu, notamment dans le monde du gaming.
              </span>
              <span>
                Le logo est violet, et des personnalités comme Domingo,
                MisterMV, et Kameto sont très connues sur cette plateforme… Tu
                vois de quoi on parle ?
              </span>
              <span>
                Les pseudonymes sont souvent facilement repérables, mais
                attention, la recherche via le moteur de la plateforme peut ne
                pas donner de résultats directs.
              </span>
              <span>
                {`Si tu n'arrives pas à trouver le profil via la recherche, essaye
                d'entrer l'adresse sous cette forme :`}{" "}
                <strong>site.tv/[pseudo]</strong>.{" "}
                {`Ça devrait t'orienter
                directement vers son profil.`}
              </span>
            </div>
          ),
        },
      },
      {
        label: "Quel est l'URL du profil de l'attaquant ?",
        validResponses: ["twitch.tv/frz_tom64"],
        responseFormat: "https://site.tv/[pseudo] ou https://site.tv/[pseudo]/",
        description: "Copie colle l'URL du profil de l'attaquant.",
        hint: {
          description: (
            <div className="flex flex-col gap-4">
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
            </div>
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
