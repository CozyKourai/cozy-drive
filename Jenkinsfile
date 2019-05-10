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
          yarn
        '''
      }
    }

    stage ('Check versions') {
      steps {
        sh '''
          . .venv/bin/activate
          google-chrome --version
          node --version
          npm --version
          yarn --version
          echo $INSTANCE_TESTCAFE
          lscpu
        '''
      }
    }

    stage ('Testcafé') {
      parallel {
        stage('Testcafé Photos') {
          steps {
            sh '''
              . .venv/bin/activate
              export COZY_APP_SLUG='photos'

              yarn testcafe:$COZY_APP_SLUG
            '''
          }
        }
        stage('Testcafé Drive') {
          steps {
            sh '''
              . .venv/bin/activate
              export COZY_APP_SLUG='drive'
              yarn testcafe:$COZY_APP_SLUG
            '''
          }
        }

      }
    }
  }
}
