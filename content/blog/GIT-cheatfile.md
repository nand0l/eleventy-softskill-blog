---  
title: GIT Basics - A Primer on GIT Administration and AWS CodeCommit  
date: 2023-10-16  
Author: Nando Lutgerink  
DallE-prompt: A visual tutorial on GIT basics, starting from creating an AWS CodeCommit repository to basic GIT administration.  
image: aws-git001.png 
imageAlt: An illustrative diagram showcasing the steps to work with GIT and AWS CodeCommit.  
description: A detailed guide on GIT basics, covering everything from the creation of a GIT repository to basic GIT administration. It includes a step-by-step setup of an AWS CodeCommit repository and instructions on how to work with it using GIT.  
introduction: This article provides a comprehensive guide on GIT basics, starting with the creation of a GIT repository in AWS CodeCommit, and proceeding to basic GIT administration tasks. Whether you're new to GIT or looking to brush up your skills, this guide offers a clear and concise walkthrough.  
tags:  
  - GIT  
  - AWS  
  - CodeCommit  
  - Version Control  
---  

## Create a repo in AWS CodeCommit

Since I started in GIT I always worked with remote repositories (Repo's) and I alway create the repo online first and the replicate it to my local machine. This is also what I will do now.

So, before we start it all we will need a remote GIT-repo, for this example [AWS CodeCommit](https://aws.amazon.com/codecommit/ "Securely host highly scalable private Git repositories. Collaborate on code.") is used.  
To create the repository on the CLI use the command as listed:

```bash
    aws codecommit create-repository --repository-name MyDemoRepo --repository-description "My demonstration repository" --tags Team=NLU 
```

This results in JSON output where we will need the following information in a later step.

```json
{
    "repositoryMetadata": {
        "accountId": "123456733",
        "repositoryId": "47f32799-ad70-4f23-a02f-84f0bffe6342",
        "repositoryName": "DemoRepo",
        "repositoryDescription": "My demonstration repository",
        "lastModifiedDate": "2022-08-03T18:46:48.190000+02:00",
        "creationDate": "2022-08-03T18:46:48.190000+02:00",
        "cloneUrlHttp": "https://git-codecommit.eu-west-1.amazonaws.com/v1/repos/DemoRepo",
        "cloneUrlSsh": "ssh://git-codecommit.eu-west-1.amazonaws.com/v1/repos/DemoRepo",
        "Arn": "arn:aws:codecommit:eu-west-1:123456733:DemoRepo"
    }
}
```

<div style="text-align: right">
For more information on AWS CodeCommit CLI <a href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/codecommit/index.html" target="_blank" title="AWS CodeCommit API Reference.">Click here.</a>
</div>

## Getting started

1. Create a project folder and move into it  
        This will be the local folder where the code is saved.

```bash
mkdir [project] && cd [project]
```

2. Initiate GIT  
        Now it is time to nest out remote repo to our local machine:  

```bash
git clone <https://git-codecommit.eu-west-1.amazonaws.com/v1/repos/DemoRepo> .
git status
```

    If you included the final "." the repo will be created in the local folder, otherwise a folder will be create with the name of the repo and you will need to "cd" into that folder.  

    You will be warned: "You appear to have cloned an empty repository" but that is exactly what we just did on purpose.  

    Now we are ready for coding!!!

3. Adding a .gitignore

    Git creates a main branch once you've done your first commit. There's nothing to have a branch for if there's no code or files in the repository. So first we will add a .gitignore file so that there is at least something in our repo.

    For the working and purpose of .gitignore [click here](https://git-scm.com/docs/gitignore/ "A gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected.")

    [Example .gitignore for React-App](https://github.com/facebook/create-react-app/blob/main/.gitignore "create-react-app/.gitignore")

    After we created the first file for our repository, we can do the initial commit. This is a 3-step manouvre: first we need to add the file to the repo an then we need to commit it and finally we sent it to the online repo.

```bash
git add .
git commit -m "Initial commit"
git push
```

4. Setting up a new branch and work in it

    Not often we want to work in the main branch so we nee to set up out own branch and change into this. This means that commits will be sent to your own branch. For this to happen you need to set up your own branch, connect to it an replicate this to the remote repository.

```bash
git branch [new-branch]
git checkout [new-branch]
```

    If we want to add code to the remote-repository/new-branch we can simply GIT-add and GIT-commit locally but if we want to push it to the remote-repository/new-branch we need to push it with the following command:

```bash
git push --set-upstream origin new-branch
```

5. Merging the new-branch with main

    If you are done coding in the new-branch and ready to add your code back to the main branch. You should switch back to the main branch and the merge the new-branch with the main branch.

```bash
git checkout main
git merge new-branch
```

6. Delete the branch

    once we are done with the branch we can actually delete it.

```bash
git branch -d new-branch
git push origin --delete new-branch
```

## Conclusion

As you have seen AWS CodeCommit is simply just another GIT service the only thing we have don AWS wise is creating the repo and from there it is all GIT as GIT is.
