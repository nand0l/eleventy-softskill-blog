---
title: Create a Lambda Layer on EC2
date: 2023-11-07
image-prompt: An image of an EC2 instance dashboard with a highlighted section for Lambda layer creation and package management
image: aws-lambda-001.jpeg
imageAlt: EC2 instance dashboard with Lambda layer management
description: Step-by-step guide to create a Lambda layer on an EC2 instance, including setting up a virtual environment and using AWS CLI for deployment.
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

## Introduction

AWS Lambda Layers are a powerful feature that allows you to manage and share common components across multiple Lambda functions. Instead of packaging and deploying these components with every function, you can include them in a Layer, which can be independently managed and updated.

A Layer can contain libraries, a custom runtime, data, or configuration files. When you create a Lambda function, you can configure it to use one or more Layers. This approach promotes code reusability and helps in keeping your Lambda deployment packages small, which can reduce the time it takes to upload and deploy functions.

Layers are versioned: when you make changes to a Layer, you publish a new version. Each Lambda function can then specify which version of a Layer it uses, giving you control over when to adopt new versions.

Common use cases for Lambda Layers include:

- **Sharing Code**: Common utility libraries can be shared across multiple functions.
- **Simplifying Dependencies**: Heavy dependencies that are not frequently updated can be included in a Layer to simplify your deployment package.
- **Custom Runtimes**: You can include a custom runtime in a Layer if you need to use a programming language that is not natively supported by AWS Lambda.

By using Lambda Layers, you can make your function code smaller and more focused on the unique business logic you're implementing, while efficiently managing and updating shared code and resources.

## setting up the environment
I fired up an ec2-instance and connected to it.

### setting up the environment
[create a virtual environment for python](https://virtualenv.pypa.io/en/stable/user_guide.html)

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
    --compatible-runtimes python3.7 python3.8 python3.9 python3.10 python3.11
```


To create a Lambda Layer that is compatible with multiple Python runtime versions, you need to structure the layer according to the expected directory paths for each runtime. For example, if you want to target Python 3.7, Python 3.8, and Python 3.9, you would need to create separate directories for each runtime version within your layer structure.

Here's how you can modify your commands to include support for Python 3.7, Python 3.8, and Python 3.9:

```shell
sudo su
mkdir my-lambda-layer && cd my-lambda-layer

# For Python 3.7
mkdir -p aws-layer/python/lib/python3.7/site-packages
pip3 install beautifulsoup4 --target aws-layer/python/lib/python3.7/site-packages

# For Python 3.8
mkdir -p aws-layer/python/lib/python3.8/site-packages
pip3 install beautifulsoup4 --target aws-layer/python/lib/python3.8/site-packages

# For Python 3.9
mkdir -p aws-layer/python/lib/python3.9/site-packages
pip3 install beautifulsoup4 --target aws-layer/python/lib/python3.9/site-packages
```

Each `pip3 install` command installs the `beautifulsoup4` library into the `site-packages` directory corresponding to the specific Python version. This way, when you include this layer in a Lambda function, the function's runtime will look into the appropriate directory for its dependencies.

After preparing the directories and installing the packages, you would then create a zip file of your `aws-layer` directory and publish the layer version to AWS Lambda, specifying all the compatible runtimes:

```shell
cd aws-layer
zip -r my-lambda-layer.zip .
aws lambda publish-layer-version \
    --layer-name my-beautifulsoup-layer \
    --description "Layer with BeautifulSoup for multiple Python runtimes" \
    --zip-file fileb://my-lambda-layer.zip \
    --compatible-runtimes python3.7 python3.8 python3.9
```

This command creates a new Lambda Layer called `my-beautifulsoup-layer` that includes support for Python 3.7, 3.8, and 3.9 runtimes. Remember to exit the `sudo su` session or switch back to a normal user as needed, since it's generally not recommended to operate as a superuser for longer than necessary.





Now you can use your layer in your lambda functions.

**Note:** In this example the layer is compatible with 3 lambda versions

Yes, the command you've provided is mostly correct for creating a zip file of your `aws-layer` directory. The `-r` flag recursively includes all files in the directory and subdirectories, and the `9` sets the compression level to maximum (which is optional). The `.` at the end specifies the current directory, so all its contents are included in the zip file.

However, you should ensure that the name of the zip file in the command matches the name you use when you publish the layer with the AWS CLI. If you're going to use `lambda-layer.zip` as the zip file name, make sure to use the same name in the AWS CLI command.

Here's the corrected version of the zip command with the `-r` and `9` as separate options for clarity:

```bash
cd aws-layer
zip -r -9 lambda-layer.zip .
```

And then, when you publish the layer, you would use:

```bash
aws lambda publish-layer-version \
    --layer-name my-beautifulsoup-layer \
    --description "Layer with BeautifulSoup for multiple Python runtimes" \
    --zip-file fileb://lambda-layer.zip \
    --compatible-runtimes python3.7 python3.8 python3.9
```

Make sure that you run the AWS CLI command from the location where the `lambda-layer.zip` file is located, or provide the correct path to the file.