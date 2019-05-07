pipeline {

  agent {
    label 'ci-slave-01'
  }

  environment {
    INSTANCE_TESTCAFE="kourai2.cozy.rocks"
    TESTCAFE_USER_PASSWORD="c0zyc0zy!"
 }

  stages {

    stage ('Get latest code') {
      steps {
        checkout scm
      }
    }

    stage ('Setup test environment') {
          steps {
            sh '''
              virtualenv .venv
              . .venv/bin/activate
              google-chrome --version
            '''
          }
        }


    stage ('testcafe:drive') {
      steps {
        sh '''
          . .venv/bin/activate
          npm install testcafe
          npm install fs-extra
          npm install unzipper
          npm install request
          npm install colors
          npm install chrome-remote-interface
          npm install git+https://github.com/cozy/VisualReview-node-client.git#v0.0.4

          yarn testcafe:drive
        '''
      }
    }

  }

}
