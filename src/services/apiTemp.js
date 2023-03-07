export function loadLists() {
  return [
    {
      id: 1,
      title: "TODO",
      cards: [
        {
          id: 1,
          content: "Estudar módulo 01 de NodeJS",
        },
        {
          id: 2,
          content:
            "Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy",
        },
        {
          id: 3,
          content: "Estudar módulo 03 de React Native",
        },
        {
          id: 4,
          content:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
        },
        {
          id: 5,
          content: "Gravar testes e deploy ReactJS",
        },
      ],
    },
    {
      id: 2,
      title: "DOING",
      cards: [
        {
          id: 6,
          content: "Recriando clone do Pipefy",
        },
      ],
    },
    {
      id: 3,
      title: "DONE",
      cards: [
        {
          id: 10,
          content: "Gravar aula sobre deploy e CI com React Native",
        },
        {
          id: 12,
          content: "Gravar testes e deploy ReactJS",
        },
        {
          id: 13,
          content:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
        },
      ],
    },
  ];
}
