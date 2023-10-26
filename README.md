# amazoninstructor blog

## eleventy-base-blog v8

A starter repository showing how to build a blog with the [Eleventy](https://www.11ty.dev/) site generator (using the [v2.0 release](https://www.11ty.dev/blog/eleventy-v2/)).

### Getting Started with @11ty/eleventy

- [Want a more generic/detailed getting started guide?](https://www.11ty.dev/docs/getting-started/)

## working on skillsoft blog

- create a MarkDown file with the article
  - Make sure all the formatting is in place
- Create the header for the article
  - Use [Azure OpenAI](https://oai.azure.com/portal/bc4c219331ac44a588776889b92083b8/chat?tenantid=50361608-aa23-494d-a233-2fd14d6a03f4) to create this header.
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
- copy the text from the key: *image-prompt* into [Bing Image Creator](https://www.bing.com/create)
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

somtimes after adding a new page the devserver needs to be stopped ```Ctrl-C``` and started ```11ty``` again.

## Push it out to production

- Simply commit and push the local repository will sync it and the data is available on [https://blog.amazoninstructor.info/](https://blog.amazoninstructor.info/)

