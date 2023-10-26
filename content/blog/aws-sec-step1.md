---
title: Setting Security for a New AWS Account
date: 2023-10-18
image: AWS-security-001.png  # This is a placeholder; replace with the actual image URL.
imageAlt: Illustration of an AWS shield, representing security
description: A step-by-step guide on establishing security protocols for your new AWS account.
introduction: Ensuring the safety of your AWS account is paramount. This guide elucidates how to set up Multi-Factor Authentication (MFA) for your root account and create an IAM user for regular administration.
tags:
  - AWS
  - Security
  - MFA
  - IAM
prompt: A secured AWS account shielded with best practices.
---

## Enable MFA for the Root Account User

Setting up Multi-Factor Authentication (MFA) for your root user account in AWS involves the following steps:

1. Sign into [AWS Management Console](https://console.aws.amazon.com/iamv2)
   - Use your root user email address and password to log in.
2. In the sidebar select **Dashboard**.
3. In the *IAM dashboard*, locate the 'Security Recommendations' section. Click on the **Add MFA** button.
4. You'll be presented with three options: 'Authenticator App', 'Security Key', and 'Hardware TOTP Token'. Most users opt for the 'Authenticator App', which is compatible with apps like Google Authenticator or Authy on your smartphone.
   - If opting for 'Authenticator App', install a compatible app on your mobile device if you haven’t already.
5. Scan the QR code displayed on your computer screen or manually input the secret configuration key provided.
   - Input the first authentication code from the MFA application into the 'Authentication Code 1' box.
   - Await the second code from the MFA application and input into the 'Authentication Code 2' box.
   - Click the **Add MFA** button.
6. You should now see a green check mark in the IAM dashboard, confirming that MFA is active for your root account.

## Create an IAM User for Day-to-Day Administration

To establish an Identity and Access Management (IAM) user for routine tasks:

1. Access the [**AWS Management Console**](https://console.aws.amazon.com/iamv2).
   - Log in using your root user email, password, and MFA.
2. Navigate to **Users** in the sidebar.
3. Click the **Create user** button.
   - Fill in the desired username.
   - Select *Provide user access to the AWS Management Console*.
   - Choose the option: *I want to create an IAM user*.
   - Set the user password.
4. Press **Next**.  
5. Under **Set Permissions**, select "Next: Permissions". Attach the user to a group with preset permissions, or directly attach policies for precise control. For regular tasks, consider the "AdministratorAccess" policy.
6. Press **Next**.
7. Under **Review and Create**:
   - Optionally, click "Add new Tag" to insert metadata tags to the user.
8. After reviewing all details, click "Create user".
9. Make sure to retrieve the password; this is the only instance when the generated or set password will be accessible!

**Note**: Always adhere to the principle of least privilege by only granting essential permissions. Regularly assess your policies and permissions.
