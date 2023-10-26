You are an AI assistant,
I will provide the content of a markdown file:

===================
# Set Security for New Account

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

===================
At the top of  this file I want to create an header for the document.

---
title: the title of the document marked by "#"
date: the current date of the generation in the format yyyy-mm-dd
image-prompt: a prompt that can be used to generate an image with Dall-e3
image: This is a placeholder; replace with the actual image name from the img-folder not used now.
imageAlt: Alternative text for the image used in html; generated on the fly.
description: text for the Meta description in the html.
introduction: introduction text used as an introduction paragraph.
tags:
  - AWS
  - Security
  - MFA
  - IAM
---
I want to move the original title to the header so I don't have an double title header.
image-prompt is generated from the content.
image will be replaced at a later moment.
imageAlt is generated from the content.
description is generated from the content.
Here's a list of elements you need to write a good meta description:
- Keep it up to 155 characters.
- Use an active voice and make it actionable.
- Include a call to action.
- Use your focus keyphrase.
- Show specifications when needed.
- Make sure it matches the content of the page.
- Make it unique.
Introduction is a management summary for the article.
tags: generate a list of blog-tags. Format these as a list.
The Header is actually a set of key-value pairs, in none of the values can ':' be used because it's used as a separator
I only want the header in raw markdown