---
title: AWS Update - Amazon Machine Image Block Public Access (AMI BPA) Enabled by Default
date: 2023-10-13
Author: admin
image: iam-bpa.png
imageAlt: funbuckets
description: Important AWS update informing users about the new default setting for AMI BPA across all AWS Regions starting from October 16, 2023. Understand the implications and the steps to take for both new and existing accounts.
tags:
  - AWS
  - AMI
  - BPA
  - Security
---

Beginning **October 16, 2023**, *Amazon Machine Image Block Public Access (AMI BPA)* will be the default setting across **all AWS Regions**.

## What is AMI BPA?

AMI BPA is a new feature that restricts an AWS account from sharing an AMI with the public within a specific AWS region. As of now, this setting is disabled by default for all AWS accounts.

## Changes to Expect

From October 16, 2023, the default setting for AMI BPA will be changed to *enabled*. With this:

- All **new AWS accounts** will have AMI BPA enabled by default.
- This will also be the default for existing accounts which have **not shared an AMI publicly since July 15, 2023**.
- If you currently possess AWS accounts with public AMIs, this change **won't affect** them.

## What Does This Mean for You?

If your use-case demands the public sharing of AMIs, remember to:

- **Disable AMI BPA** for any new accounts created post the default change.
- Disable it for existing accounts that haven't shared an AMI publicly after July 15, 2023.

For those who don't require public AMI sharing, there's no need for any further action.

## Learn More

- Check out the [AMI BPA documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-intro.html#block-public-access-to-amis) for a deeper understanding.
- For any queries or concerns, don't hesitate to connect with [AWS Support](https://aws.amazon.com/support).

Warm regards,

*Amazon Web Services Team*

> Amazon Web Services, Inc. is a subsidiary of Amazon.com, Inc. Amazon.com is a registered trademark of Amazon.com, Inc. This announcement is brought to you by Amazon Web Services Inc., 410 Terry Ave. North, Seattle, WA 98109-5210.

---

#### Reference:

[Official AWS Notification](https://phd.aws.amazon.com/phd/home?region=us-east-1#/event-log?eventID=arn:aws:health:global::event/EC2/AWS_EC2_OPERATIONAL_NOTIFICATION/AWS_EC2_OPERATIONAL_NOTIFICATION_a76233635cc03f6bbb689758afbb7bd96f721f48183fac89f7d572d0115c7302&amp;eventTab=details)
