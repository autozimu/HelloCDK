import * as cdk from '@aws-cdk/cdk';
import * as codebuild from '@aws-cdk/aws-codebuild';

export class HelloCdkStack extends cdk.Stack {
  build: codebuild.Project;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.build = new codebuild.Project(this, 'UnisonFSMonitor', {
      source: new codebuild.GitHubSource({
        owner: 'autozimu',
        repo: 'unison-fsmonitor',
        webhook: true,
        webhookFilters: [],
      }),
    });
  }
}
