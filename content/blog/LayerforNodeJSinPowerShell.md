---
title: Create a Demo Layer with `axios` Using PowerShell
date: 2025-03-02
image-prompt: A step-by-step process of setting up a Node.js project in PowerShell, installing `axios`, and creating a Lambda layer directory structure.
image: essa-demo_1.png
imageAlt: PowerShell script creating a Node.js project with `axios` for AWS Lambda layer.
description: Learn how to create an AWS Lambda layer with `axios` using PowerShell in a few simple steps.
introduction: This guide walks you through the process of creating a Lambda layer with the `axios` library using PowerShell, from setting up the directory structure to uploading the layer in the AWS Lambda Console.
tags:
  - Lambda
  - Node.js
  - axios
  - PowerShell
  - AWS
---

## Module 1: Create a Demo Layer with `axios` Using PowerShell

1. **Open PowerShell.**

2. **Navigate to your working directory or create a new one:**

   ```powershell
   New-Item -ItemType Directory -Path my-lambda-layer
   Set-Location -Path my-lambda-layer
   ```

3. **Initialize a new Node.js project:**

   ```powershell
   npm init -y
   ```

4. **Install `axios`:**

   ```powershell
   npm install axios
   ```

5. **Create the necessary directory structure for the layer:**

   ```powershell
   New-Item -ItemType Directory -Path layer/nodejs -Force
   ```

6. **Move the `node_modules` and `package.json` to the layer directory:**
   ```powershell
   Move-Item -Path node_modules -Destination layer/nodejs
   Move-Item -Path package.json -Destination layer/nodejs
   ```

Your directory structure should now look like this:

```
my-lambda-layer/
└── layer
    └── nodejs
        ├── node_modules
        │   └── axios
        └── package.json
```

7. **Zip the `layer/nodejs` directory:**
   ```powershell
   Compress-Archive -Path layer/nodejs -DestinationPath my-lambda-layer.zip
   ```

You now have a zipped file, `my-lambda-layer.zip`, which contains the `axios` library and can be uploaded as a Lambda layer in AWS.

**To upload and use the layer in AWS Lambda:**

1. **Go to the AWS Lambda Console.**
2. **Navigate to "Layers" and click "Create layer".**
3. **Provide a name for the layer, upload the `my-lambda-layer.zip` file, and specify the compatible runtimes (e.g., Node.js 14.x, Node.js 16.x).**
4. **Click "Create".**

After creating the layer, you can add it to your Lambda function:

1. **Go to your Lambda function in the AWS Console.**
2. **In the "Layers" section, click "Add a layer".**
3. **Choose "Custom layers" and select the layer you just created.**
4. **Click "Add".**

Now, your Lambda function will have access to the `axios` library, and you can use it in your Lambda handler code.
