![](/media/image.jpg){width="2.0416666666666665in" height="1.7209208223972003in"}

**Histórico de Alterações**

+:---------------:+:---------------:+:---------------:+:---------------:+
| Data            | Versão          | Descrição       | Autor           |
+-----------------+-----------------+-----------------+-----------------+
| 09/03/2025      | 0.0             | Criação do      | Arthur Levy e   |
|                 |                 | documento de    | Carlos Eduardo  |
|                 |                 | requisitos,     |                 |
|                 |                 | identificação   |                 |
|                 |                 | dos requisitos, |                 |
|                 |                 | descrição dos   |                 |
|                 |                 | requisitos      |                 |
|                 |                 | funcionais.     |                 |
+-----------------+-----------------+-----------------+-----------------+
| 14/03/2025      | 0.1             | Descrição dos   | Entrevistado 1  |
|                 |                 | requisitos      |                 |
|                 |                 | funcionais e    | Entrevistado 2  |
|                 |                 | não funcionais. |                 |
|                 |                 |                 | Entrevistado 3  |
|                 |                 |                 |                 |
|                 |                 |                 | Entrevistado 4  |
|                 |                 |                 |                 |
|                 |                 |                 | Entrevistado 5  |
+-----------------+-----------------+-----------------+-----------------+
| 18/03/2025      | 0.2             | Descrição dos   | Arthur Levy e   |
|                 |                 | requisitos de   | Carlos Eduardo  |
|                 |                 | sistema.        |                 |
+-----------------+-----------------+-----------------+-----------------+
| 31/03/2025      | 0.3             | Descrição dos   | Arthur Levy e   |
|                 |                 | requisitos de   | Carlos Eduardo  |
|                 |                 | sistema.        |                 |
+-----------------+-----------------+-----------------+-----------------+

**1. Introdução**

Este documento detalha os requisitos do aplicativo FitTribe, oferecendo
aos desenvolvedores todas as informações e recursos essenciais para o
planejamento, desenvolvimento, implementação, testes e homologação da
aplicação.

> **1.1. Visão geral do documento**
>
> Além desta seção introdutória, as seções seguintes estão organizadas
> como descrito abaixo.

● **Seção 2 Descrição geral do sistema:** apresenta uma visão geral da
aplicação, caracterizando qual é o seu escopo e descrevendo seus
usuários.

● **Seção 3 ­Requisitos funcionais (casos de uso)**: específica
brevemente os casos de uso da aplicação.

● **Seção 4 Requisitos não funcionais:** cita e explica os requisitos
não funcionais do sistema.

**2. Descrição geral do sistema**

O módulo proposto é uma solução tecnológica inovadora para melhorar a
comunicação, organização e experiência em eventos esportivos, como
corridas e ciclismos. Ele permite interação em tempo real entre
participantes (tribos) e organizadores (ADM), além de oferecer um mapa
integrado com localização em tempo real, rotas até o evento e percursos
completos. O sistema também facilita a visualização de pontos de
interesse ao redor, como lojas e serviços, e promove a conexão entre
participantes de diferentes modalidades. Com funcionalidades que incluem
divulgação de informações, suporte e facilitação de encontros, o módulo
visa proporcionar uma experiência mais imersiva, informativa e
satisfatória para todos os usuários:

-   Mapa Interativo com Rota e Localização em Tempo Real: Permite aos
    usuários visualizar sua localização atual, a rota até o local do
    evento e o percurso completo do evento.

-   Comunicação em Tempo Real entre Participantes e Organizadores:
    Facilita a interação entre as tribos (grupos de participantes) e os
    administradores do evento (ADM)

-   Facilitação de Encontros e Conexões entre Participantes: Permite que
    os usuários se conectem com outros participantes, formem grupos
    (tribos) e compartilhem informações sobre o evento.

**3. Requisitos funcionais (casos de uso)**

**3.1**. **Tela de cadastro**

> Prioridade: ☒ Essencial ☐ Importante ☐ Desejável
>
> Interface de registro inicial que coleta informações básicas para
> criação de perfil, garantindo acesso seguro e personalizado à
> plataforma.
>
> **3.2. Tela de Login**
>
> Prioridade: ☒ Essencial ☐ Importante ☐ Desejável
>
> Ponto de acesso seguro à plataforma, com mecanismos de autenticação
> flexíveis e proteção contra acessos não autorizados.
>
> **3.3. Histórico do Usuário**
>
> Prioridade: ☐ Essencial ☒ Importante ☐ Desejável
>
> Módulo de armazenamento e visualização cronológica da participação do
> usuário em eventos esportivos, funcionando como um registro pessoal de
> conquistas e atividades.
>
> 3.3.1. Reutilização de Eventos.
>
> Prioridade: ☐ Essencial ☐ Importante ☒ Desejável
>
> Sistema inteligente que permite reciclar configurações de eventos
> anteriores para agilizar a criação de novos eventos similares.
>
> **3.4. Mapa interativo**
>
> Prioridade: ☒ Essencial ☐ Importante ☐ Desejável
>
> Funcionalidade central do aplicativo que fornece visualização
> geográfica inteligente de eventos esportivos, com camadas de
> informação contextual para diferentes modalidades.
>
> **3.4.1. Sistema de Filtragem por Modalidade**
>
> 3.4.1.1. Modalidade corrida.
>
> Prioridade: ☒ Essencial ☐ Importante ☐ Desejável
>
> Ilustra ao usuário pelo mapa, onde tem tal evento de corrida, e mostra
> o percurso(rota) que o usuário pode seguir e ver informações do evento
> referente a corrida.
>
> 3.4.1.2. Modalidade ciclismo.
>
> Prioridade: ☒ Essencial ☐ Importante ☐ Desejável
>
> Ilustra ao usuário pelo mapa, onde tem tal evento de corrida, e mostra
> o percurso(rota) que o usuário pode seguir e ver informações do evento
> referente ao ciclismo.
>
> 3.4.1.3. Modalidade geral.
>
> Prioridade: ☒ Essencial ☐ Importante ☐ Desejável
>
> Ilustra aos usuários durante eventos esportivos, tais eventos no mapa,
> tanto corridas, como de ciclismos.
>
> **3.5. Sistema de Comunicação**
>
> 3.5.1. Chat de Eventos.
>
> Prioridade: ☒ Essencial ☐ Importante ☐ Desejável
>
> Canal de comunicação centralizado para divulgação de informações
> oficiais e interação entre participantes durante eventos esportivos.
>
> 3.5.2. Chat Privado (Amigos).
>
> Prioridade: ☒ Essencial ☐ Importante ☐ Desejável
>
> Sistema de mensagens privadas para comunicação direta entre usuários,
> facilitando a criação de vínculos e o planejamento conjunto para
> eventos.
>
> **3.6. Criação de eventos**
>
> Prioridade: ☒ Essencial ☐ Importante ☐ Desejável
>
> Permitir que usuários (organizadores/ADMs) criem eventos esportivos
> com informações completas, garantindo divulgação clara e atração de
> participantes.
>
> 3.6.1. Meus eventos.
>
> Prioridade: ☒ Essencial ☐ Importante ☐ Desejável
>
> Área dedicada no perfil do usuário para gerenciar eventos criados e
> participar de eventos, com integração ao mapa.
>
> **3.7. Calendário de eventos**
>
> Prioridade: ☐ Essencial ☒ Importante ☐ Desejável
>
> Visualização cronológica dos eventos (passados, em andamento e
> futuros) para facilitar o planejamento do usuário.
>
> **3.8. Exibição das Condições Climáticas**
>
> Prioridade: ☒ Essencial ☐ Importante ☐ Desejável
>
> O sistema deve exibir, de forma clara e acessível na tela inicial, as
> condições climáticas atualizadas da região do evento. Essa
> funcionalidade visa auxiliar os usuários a se prepararem adequadamente
> para a prática esportiva, considerando fatores como temperatura,
> precipitação, umidade e vento.

**4. Requisitos não funcionais**

**4.1. Segurança**

> O sistema deve implementar medidas robustas de proteção de dados,
> garantindo confidencialidade, integridade e disponibilidade das
> informações dos usuários, em conformidade com a LGPD e outras
> regulamentações aplicáveis.
>
> **4.2. Suporte ao usuário**
>
> O software deve fornecer suporte abrangente ao usuário para ajudar os
> usuários a resolverem problemas, aprender a usar o software
> efetivamente e obter o máximo de seus recursos.
>
> **4.3. Termo de uso.**
>
> O aplicativo deve conter um termo de uso completo que estabeleça
> claramente as regras de utilização, com descrição detalhada do
> produto/serviço oferecido e direitos e responsabilidades de todas as
> partes envolvidas.
>
> **4.4. Licença de Uso**
>
> Deve ser disponibilizada uma licença de uso que regulamente o acesso e
> utilização do sistema, deixando claro que a licenciada não adquire
> direitos de propriedade sobre o software, apenas os direitos de uso
> especificados no contrato.
>
> **4.5. Requisitos de Desempenho**
>
> O software deve atender aos padrões de desempenho estabelecidos pela
> FitTribe, observando que podem ocorrer eventuais interrupções ou erros
> que serão corrigidos em atualizações futuras.
>
> **4.6. Termos de mobile**
>
> 4.6.1. Atualizações e Manutenção
>
> A FitTribe se reserva o direito de fornecer atualizações e manutenções
> periódicas ao software, cabendo ao usuário a instalação dessas
> atualizações para garantir o pleno funcionamento e segurança do
> sistema.

**4.7. Disponibilidade**

> O sistema deve garantir disponibilidade mínima de 99% em períodos de
> eventos, com escalabilidade automática para lidar com picos de até
> 10.000 usuários simultâneos.

**4.10. Privacidade de Dados**

> Garante o tratamento seguro e regulamentado de dados pessoais, com:
> retenção máxima de 6 meses para geolocalização, ferramentas de
> consentimento específico por tipo de dado, e opções completas de
> exportação/exclusão de informações pessoais em conformidade com a
> LGPD.

**Anexo**

> O formulário de perguntas feitas para os entrevistados. Perguntas
> foram feitas de maneira aberta, para que o usuário responda e se
> expresse com mais liberdade.
>
> **Pergunta 1: Como você se organiza para ir em eventos?**

-   Preparo durante a semana (1 resposta);

-   Verifico o site do evento (1 resposta)

-   Me organizo com pelo menos 2 dias de antecedência (1 resposta)

-   Organizo um mês antes (1 resposta)

-   Organizo um dia antes (1 resposta)

> **Pergunta 2: Como é a comunicação em caso de imprevisto?**

-   Mensagem no grupo de WhatsApp (2 respostas)

-   Redes sociais (1 resposta)

-   Ligação (2 respostas)

> **Pergunta 3: Aplicativo para ver regiões?**

-   Sim, como o Google Maps (3 respostas)

-   Não (1 resposta)

-   Pergunta 4: Motivo para praticar esporte

-   Ambas as opções (socializar e esporte) (2 respostas)

-   Para o esporte (2 respostas)

-   Para socializar (nenhuma resposta)

> **Pergunta 5: Ilustrar produtos em alta.**

-   Sim (5 respostas)

> **Pergunta 6: Conversa para se comunicar com outros**

-   Sim (3 respostas)

-   Não (2 respostas)

> **Pergunta 7: Dicas de nutrição/saúde.**

-   Sim, gostaria de dicas de alimentação (4 respostas)

-   Não (1 resposta)

> **Pergunta 8: Design de aplicativo de esporte.**

-   Simples, mas com dados necessários (3 respostas)

-   Colorido (2 respostas)

> **Pergunta 9: Funcionalidade de localização**

-   Sim, como um mapa (5 respostas)

> **Pergunta 10: Funcionalidade adicional**

-   Mostrar velocidade em tempo real (2 respostas)

-   Marcar km e tempo (1 resposta)

-   Dicas de melhorar a performance de corrida (1 resposta)

-   Play de músicas (1 resposta)