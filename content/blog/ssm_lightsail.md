---
title: Run AWS Systems Manager Documents on AWS Lightsail Instances
date: 2024-07-09
image-prompt: An illustration of AWS Systems Manager and AWS Lightsail integration showing installation of the SSM agent and IAM role attachment
image: placeholder.png
imageAlt: Illustration of running AWS Systems Manager documents on AWS Lightsail instances
description: Learn how to install the SSM Agent, create an IAM role, and execute Systems Manager documents on AWS Lightsail instances in this step-by-step guide.
introduction: This guide provides a comprehensive step-by-step process for running AWS Systems Manager documents on AWS Lightsail instances, including installing the SSM Agent, creating IAM roles, and executing commands.
tags:
  + AWS Systems Manager
  + Amazon Lightsail
  + SSM Agent
  + IAM Role
---

1. **Install the SSM Agent**: Ensure that the Systems Manager (SSM) agent is installed and running on your Lightsail instance. This agent is necessary for Systems Manager to communicate with the instance.

2. **IAM Role and Instance Profile**: Attach an IAM role with the necessary permissions to your Lightsail instance. This IAM role should have policies that allow it to communicate with Systems Manager.

3. **Create and Run the Document**:
   - You can create a custom Systems Manager document or use an existing one.
   - Use the AWS Systems Manager console or the AWS CLI to execute the document on your Lightsail instance.

Here is a step-by-step guide to get you started:

### Step 1: Install the SSM Agent

Connect to your Lightsail instance and run the following commands to install the SSM agent:

**For Amazon Linux 2 or CentOS:**

```bash
sudo yum install -y amazon-ssm-agent
sudo systemctl start amazon-ssm-agent
sudo systemctl enable amazon-ssm-agent
```

**For Ubuntu:**

```bash
sudo snap install amazon-ssm-agent --classic
sudo systemctl start snap.amazon-ssm-agent.amazon-ssm-agent.service
sudo systemctl enable snap.amazon-ssm-agent.amazon-ssm-agent.service
```

### Step 2: Create an IAM Role with Systems Manager Permissions

1. Go to the [IAM console](https://console.aws.amazon.com/iam/).
2. Create a new role and select `AWS service` as the trusted entity.
3. Choose `EC2` as the use case.
4. Attach the `AmazonSSMManagedInstanceCore` policy.
5. Complete the role creation process.

### Step 3: Attach the IAM Role to Your Lightsail Instance

1. Go to the [Lightsail console](https://lightsail.aws.amazon.com/).
2. Select your instance.
3. Under the `Networking` tab, choose `Manage firewall`.
4. Add a new firewall rule to allow HTTPS traffic (if not already allowed).
5. Under the `Account` tab, choose `Attach IAM role`.
6. Select the IAM role you created and attach it.

### Step 4: Execute a Systems Manager Document

You can use the AWS CLI to run a document on your Lightsail instance. Here's an example of how to run a document:

```bash
aws ssm send-command \
    --instance-ids "instance-id" \
    --document-name "AWS-RunShellScript" \
    --parameters '{"commands":["echo Hello from Lightsail"]}'
```

Replace `"instance-id"` with your actual Lightsail instance ID.

By following these steps, you should be able to run AWS Systems Manager documents on your AWS Lightsail instances.
