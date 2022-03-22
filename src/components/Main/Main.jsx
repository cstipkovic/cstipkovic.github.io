import React from "react";

import Header from "../Header";

const Main = () => {
  return (
    <main>
      <Header />

      <article>
        <section id="english" className="show">
          <p>
            Clauber Stipkovic is a <strong>software engineer</strong>,
            <strong>
              <a
                href="https://mozillians.org/pt-BR/u/cstipkovic/"
                className="link-mozilla-reps"
              >
                mozilla community member
              </a>
            </strong>
            (since 2004) and <strong>graduated in Computer Science</strong> at
            <strong>
              <a href="https://www.mackenzie.br/en/universidade/unidades-academicas/fci-computing-and-informatics-department/">
                Computing and Informatics Department - Mackenzie University
              </a>
            </strong>
            .
          </p>
          <p>
            Currently he's <strong>software engineer</strong> at
            <strong>
              <a href="https://www.avitaseg.com.br/">Avita Seguros</a>
            </strong>
            and freelancer at
            <strong>
              <a href="https://inteli.fi/">InteliFi</a>
            </strong>
            . The easiest way to contact him is via e-mail at
            <strong>clauber.halic@gmail.com</strong>, besides finds him on
            <strong>
              <a href="https://twitter.com/clauberhalic/">twitter</a>
            </strong>
            and
            <strong>
              <a href="https://www.linkedin.com/in/cstipkovic/">LinkedIn</a>
            </strong>
            .
          </p>
          <p>
            Clauber is Brazilian, lives in
            <strong>
              <a href="https://en.wikipedia.org/wiki/Brazil">Brazil</a>
            </strong>
            , but not for long. He's
            <span className="currentlyAge">&nbsp;</span> years old, made
            <strong>technical course in computer science</strong> at
            <strong>
              <a href="http:www.etesaopaulo.com.br/">
                Technical School of São Paulo State
              </a>
            </strong>
            .
          </p>
          <p>
            He also maintains
            <strong>codes of Open Source projects</strong> on
            <strong>
              <a href="https://github.com/cstipkovic">GitHub</a>
            </strong>
            , which contributes to some other projects!
          </p>
        </section>

        <section id="portuguese" className="hide">
          <p>
            Clauber Stipkovic é <strong>engenheiro de software</strong>,
            <strong>
              <a
                href="https://mozillians.org/pt-BR/u/cstipkovic/"
                className="link-mozilla-reps"
              >
                membro da comunidade mozilla
              </a>
            </strong>
            (desde 2004) e<strong>formado em Ciência da Computação</strong> na
            <strong>
              <a href="https://www.mackenzie.br/en/universidade/unidades-academicas/fci-computing-and-informatics-department/">
                Faculdade de Computação e Informática (FCI) - Universidade
                Mackenzie
              </a>
            </strong>
            .
          </p>
          <p>
            Atualmente é <strong>engenheiro de software</strong> na
            <strong>
              <a href="https://www.avitaseg.com.br/">Avita Seguros</a>
            </strong>
            e freelancer na
            <strong>
              <a href="https://inteli.fi">InteliFi</a>
            </strong>
            . A maneira mais fácil de contatá-lo é via e-mail, no endereço
            <strong>clauber.halic@gmail.com</strong>, além de encontra-lo no
            <strong>
              <a href="https://twitter.com/clauberhalic/">twitter</a>
            </strong>
            e no
            <strong>
              <a href="https://www.linkedin.com/in/cstipkovic/">LinkedIn</a>
            </strong>
            .
          </p>
          <p>
            Clauber é Brasileiro, vive no
            <strong>
              <a href="https://pt.wikipedia.org/wiki/Brasil">Brasil</a>
            </strong>
            , mas não por muito tempo. Tem
            <span className="currentlyAge">&nbsp;</span> anos de idade, fez
            curso
            <strong>técnico em informática</strong> na
            <strong>
              <a href="http//:www.etesaopaulo.com.br/">
                Escola Técnica Estadual de São Paulo
              </a>
            </strong>
            .
          </p>
          <p>
            Ele também mantém
            <strong>códigos de projetos Open Source</strong> no
            <strong>
              <a href="https://github.com/cstipkovic">GitHub</a>
            </strong>
            , onde contribue com alguns outros projetos!
          </p>
        </section>
      </article>
    </main>
  );
};

export default Main;
