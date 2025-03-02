# skillsoft blog

## eleventy-base-blog v8

A starter repository showing how to build a blog with the [Eleventy](https://www.11ty.dev/) site generator (using the [v2.0 release](https://www.11ty.dev/blog/eleventy-v2/)).

### Getting Started with @11ty/eleventy

- [Want a more generic/detailed getting started guide?](https://www.11ty.dev/docs/getting-started/)

## working on skillsoft blog

- create a MarkDown file with the article
  - Make sure all the formatting is in place
- Create the header for the article
  - Use [This Engigine](https://chat.openai.com/g/g-cLvfBdQaP-create-ssblog) to create this header.
    - Simply paste in the complete article
  - This header will look like:

```markdown
title: What Is AWS Control Tower?  
date: 2023-10-21  
image-prompt: An illustration showing AWS Control Tower's orchestration, controls, account factory and dashboard features for a secure, compliant, multi-account AWS environment.  
image: placeholder.jpg  
imageAlt: AWS Control Tower  
description: An overview of AWS Control Tower, a service that provides a straightforward way to set up and govern a secure, compliant, multi-account AWS environment based on best practices. It discusses features such as landing zone, controls, account factory, dashboard, and its interaction with other AWS services.  
introduction: AWS Control Tower simplifies the process of setting up and governing a multi-account AWS environment, following prescriptive best practices. It offers features such as a landing zone, controls (or guardrails), an account factory, and a dashboard. It also interacts seamlessly with other AWS services, ensuring a comprehensive solution for account deployment, governance, and compliance.  
tags:

- AWS
- AWS Control Tower
- AWS Organizations
- AWS Service Catalog
- AWS IAM Identity Center
- Cloud Governance
- Compliance
- Account Management
```

- paste the output in the original MD-file replacing the title
- copy the text from the key: _image-prompt_ into [Bing Image Creator](https://chat.openai.com/g/g-2fkFE8rbu-dall-e)
- pick the picture and download
- the is an [Background Remover](https://www.remove.bg/) where you can remove the background from your picture.
- download the (free) preview picture
- rename the downloaded picture an save to the folder ./public/img
- replace in the header the value of the key: image to the plain image name (include the extention)
- make sure the original MD-file is saved to ./content/blog

## running development server local

in the terminal of vscode in the folder C:\code\eleventy\eleventy-base-blog run **11ty** this wil invoke

```bash
npx @11ty/eleventy --serve
```

somtimes after adding a new page the devserver needs to be stopped `Ctrl-C` and started `11ty` again.

## Push it out to production

- Simply commit and push the local repository will sync it and the data is available on [https://blog.skillsoft-demo.net/](https://blog.skillsoft-demo.net/)
