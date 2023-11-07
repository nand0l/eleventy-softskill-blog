---
title: Create a Lambda Layer on EC2
date: 2023-11-07
image-prompt: An image of an EC2 instance dashboard with a highlighted section for Lambda layer creation and package management
image: aws-lambda-001.jpeg
imageAlt: EC2 instance dashboard with Lambda layer management
description: Step-by-step guide to creating a Lambda layer on an EC2 instance, including setting up a virtual environment and using AWS CLI for deployment.
introduction: This article walks through the process of setting up a virtual environment on an EC2 instance, creating a Lambda layer with dependencies, and deploying it using AWS CLI.
tags:
  - AWS
  - Lambda
  - EC2
  - Virtual Environment
  - AWS CLI
  - Python
  - Serverless
---


I fired up an ec2-instance and connected to it.

## setting up the environment
-needs to be updated with creation of virtual environment-

```code bash
sudo su
mkdir my-lambda-layer && 
cd my-lambda-layer
mkdir -p aws-layer/python/lib/python3.7/site-packages
pip3 install beautifulsoup4 --target aws-layer/python/lib/python3.7/site-packages
```
This concludes the PIP-installation now we need to create the zip file.

## Create zip-file 

```code bash
cd aws-layer
zip -r9 lambda-layer.zip .
```
Don't forget to include the "." at the end.

After zipping the packages it will have the name “lambda-layer.zip”

## Upload the zip file to a lambda layer using AWS CLI.

To create the lambda layer automatically using the AWS CLI you can use the command below:

``` code bash
aws lambda publish-layer-version \
    --layer-name Data-Preprocessing \
    --description "My Python layer" \
    --zip-file fileb://lambda-layer.zip \
    --compatible-runtimes python3.7
```

Now you can use your layer in your lambda functions.

