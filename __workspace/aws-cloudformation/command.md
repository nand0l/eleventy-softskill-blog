```bash
aws cloudformation create-stack --stack-name MyEC2Stack --template-body file://CFT-EC2.yaml --region eu-west-1
```

```bash
aws cloudformation delete-stack --stack-name MyEC2Stack --region eu-west-1
```