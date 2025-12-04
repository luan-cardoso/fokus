# 🍅 Fokus - App Pomodoro

Um aplicativo React Native desenvolvido com Expo para implementar a técnica Pomodoro, ajudando você a gerenciar seu tempo e aumentar a produtividade.

## 📖 Sobre a Técnica Pomodoro

A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A técnica consiste em dividir o trabalho em blocos de tempo (tradicionalmente 25 minutos), separados por intervalos curtos de descanso.

### Como funciona:
- **Foco (25 minutos)**: Período de trabalho focado e concentrado
- **Pausa Curta (5 minutos)**: Intervalo breve para descanso após um pomodoro
- **Pausa Longa (15 minutos)**: Intervalo mais longo após completar 4 pomodoros

## ✨ Funcionalidades

- ⏱️ **Timer Pomodoro** com três modos:
  - Foco (25 minutos)
  - Pausa Curta (5 minutos)
  - Pausa Longa (15 minutos)
- ▶️ **Controle de reprodução**: Iniciar e pausar o timer
- 🔄 **Alternância entre modos**: Troque facilmente entre os diferentes tipos de timer
- 🎨 **Interface moderna**: Design minimalista e focado na experiência do usuário
- 📱 **Multiplataforma**: Funciona em iOS, Android e Web

## 🛠️ Tecnologias

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma e ferramentas para React Native
- **Expo Router** - Roteamento baseado em arquivos
- **Expo Font** - Carregamento de fontes customizadas
- **React Hooks** - Gerenciamento de estado e efeitos

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (opcional, mas recomendado)

Para desenvolvimento mobile:
- **iOS**: Xcode (apenas no macOS)
- **Android**: Android Studio e Android SDK

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositório>
cd fokus
```

2. Instale as dependências:
```bash
npm install
```

ou

```bash
yarn install
```

## ▶️ Como Executar

### Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm start
```

ou

```bash
yarn start
```

Isso abrirá o Expo DevTools no seu navegador. Você pode:

- Pressionar `i` para abrir no simulador iOS
- Pressionar `a` para abrir no emulador Android
- Escanear o QR code com o app Expo Go no seu dispositivo físico
- Pressionar `w` para abrir no navegador web

### Executar em plataformas específicas

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 📁 Estrutura do Projeto

```
fokus/
├── app/
│   └── index.jsx          # Tela principal do app
├── components/
│   ├── ActionButton/      # Botão para selecionar tipo de timer
│   ├── FokusButton/       # Botão principal (Começar/Pausar)
│   ├── FokusText/         # Componente de texto customizado
│   ├── Icons/             # Ícones (Play, Pause)
│   └── Timer/             # Componente do timer
├── assets/
│   └── fonts/             # Fontes customizadas
├── app.json               # Configuração do Expo
└── package.json           # Dependências do projeto
```

## 🧩 Componentes

### Timer
Componente responsável por exibir o tempo restante no formato MM:SS.

### FokusButton
Botão principal com ícone e texto para iniciar/pausar o timer.

### ActionButton
Botão para alternar entre os diferentes tipos de timer (Foco, Pausa Curta, Pausa Longa).

### FokusText
Componente de texto customizado que utiliza a fonte JetBrains Mono.

## 🎨 Design

O app utiliza um tema escuro minimalista com:
- Fundo: `#161616`
- Texto: `#d2d2d2`
- Botões ativos: `#d2d2d2` com texto `#161616`
- Fonte: JetBrains Mono Medium

## 📝 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run android` - Executa no Android
- `npm run ios` - Executa no iOS
- `npm run web` - Executa no navegador
- `npm run lint` - Executa o linter

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📄 Licença

Este projeto é privado.

---

Desenvolvido com ❤️ usando React Native e Expo
