# Letmeask 

<div align="center">
    <img src="https://raw.githubusercontent.com/rapzaDev/Letmeask/master/src/assets/images/logo.svg">
</div>
<br>

This is a React.js application using Firebase to lives and streamings where is possible to create chat rooms to answer live questions.
This project is full responsive and have two style theme selection: light or dark. You can check it out this project on: https://letmeask-rpz.web.app/
<br>
To see a created room with questions and all his functionalities use the room code bellow:
<br> -MzaTldqEaH7NVdtRwoy



## Tech Stack

**Client:** React, Typescript, Context API, Styled-components, React-Router-Dom.

**Server:** Firebase Realtime Database, Firebase Authentication.



## Requirements
 - Node: https://nodejs.org/en/ ( Obs: In this project use the nodejs version: 14.18.1)
 - Yarn package manager: https://yarnpkg.com/



## Run Locally

Clone the project

```bash
  git clone https://github.com/rapzaDev/Letmeask.git
```

Go to the project directory

```bash
  cd letmeask
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn start
```


## Lessons Learned

That was the 6th edition of the NLW by the Rocketseat! They planted some challenges that I had to apply alone to improve the project.

### Challenges:
- Make the project full responsive.
- Add a dark theme to the project and persist the choosen theme.
- I also added a control on the admin page. If the user is not the admin of the current room, they will not be able to see your content as an admin.
