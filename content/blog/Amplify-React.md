---
title: Integrating Amazon Cognito Authentication in a React App
date: 2023-10-16
Author: Nando Lutgerink
DallE-prompt: A visual guide on integrating Amazon Cognito authentication in a React app, showing the flow from installing Amplify to deploying the app to S3.
image: aws-bpa-007.png
imageAlt: A comprehensive illustration of setting up Amazon Cognito authentication in a React app using AWS services.
description: Step-by-step guide on integrating Amazon Cognito authentication in a React app. The guide details the setup from installing Amplify to deploying the app to S3, providing a secure React app leveraging AWS services.
introduction: This article provides a detailed guide on integrating Amazon Cognito authentication in a React app. It covers all steps from installing Amplify, creating the React app, to deploying it to S3 using AWS services. The guide also includes code snippets for a seamless implementation process.
tags:
  - AWS
  - Amazon Cognito
  - React
  - Amplify
  - S3
  - Security
---

Step-by-step guide on integrating Amazon Cognito authentication in a React app. Follow through the detailed setup from installing Amplify to deploying your app to S3. Build a secure React app leveraging AWS services, complete with code snippets for seamless implementation.

## Used resources

- [A youtube video](https://www.youtube.com/watch?v=g4qKydnd0vU&t=637s&ab_channel=CompleteCoding)
- it was demonstrated with v1 I was able to up gade it to [v2](https://ui.docs.amplify.aws/react/components/authenticator)

## Setup guide

### Install Amplify

```bash
  npm install -g @aws-amplify/cli
```

[Amplify installation Guide](https://docs.amplify.aws/cli/start/install/                                            )

### install react

```bash
  npm install react react-dom --save  
```

### create react app

```bash
  npx create-react-app name-amplify-react-app
```

### Configure Amplify

```bash
  amplify configure
```

[Amplify installation Guide](https://docs.amplify.aws/cli/start/install/#option-2-follow-the-instructions/)

### Initiate Amplify setup

```bash
  amplify init
```

During the init we need to answer the following questions:

- App Name
- Environment (dev)
- Default Editor (vscode)
- App type (javascript)
- Javascript framework (react)
- Source Directory Path (src)
- Build command: npm run-script build
- Start command: npm run-script start
- Build provider (cloudformation)
- AWS profile (any of the above, created in the configure phase)

The folder `amplify` is created and a file `/src/aws-exports.js.`

### add authentication to the back end

```bash
  amplify add auth
```

I configured it with the following settings:

- setup default configuration
- Sign in usning E-Mail
- No need to setup advanced settings

### push the backend to the cloud

```bash
  amplify push
```

- select the proposed name and continue

### insert the code for cognito

Open the file `/src/App.js`

We need to import a couple of things:

- Import amplify items
- replace the code for our application
- replace the default export wit the export that includes authentication

#### Import amplify items

Replace the import codeblock at the top of the file:

```bash
  import { Amplify } from 'aws-amplify';
  import { withAuthenticator } from '@aws-amplify/ui-react';
  import '@aws-amplify/ui-react/styles.css';
  import awsExports from './aws-exports';
  import React from 'react';
  import './App.css'
  Amplify.configure(awsExports);
```

#### Replace the code for our application

Remove all content between `<header classname=App-header>` and `</header>` elements.
and replace it by the following:

```bash
  <div>
    <h1>Hello {user.username}{user.emailaddress}</h1>
    <p>this is just a test to see if it works</p>
    <p>Is it automaticly deployed?</p>
    <button class="amplify-button amplify-field-group__control amplify-button--primary" onClick={signOut}>Sign out</button>
  </div>
```

#### replace the default export

```bash
  export default withAuthenticator(App);
```

#### install final npm packages

```bash
  npm install --save aws-amplify @aws-amplify/ui-react
```

#### test react app locally

```bash
  npm start
```

### Your application should start localy

## deploy the code to the S3-bucket

```bash
  cd .\amplify-react-app  
  npm run build  
  aws s3 sync build/ s3://react.amazoninstructor.info --delete
```
