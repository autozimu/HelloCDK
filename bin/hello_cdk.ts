#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { HelloCdkStack } from '../lib/hello_cdk-stack';

const app = new cdk.App();
new HelloCdkStack(app, 'HelloCdkStack');
