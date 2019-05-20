pipeline {

  agent {
    label 'ci-slave-01'
  }

  environment {
    TESTCAFE_USER_PASSWORD="c0zyc0zy!"
  }

  stages {

    stage ('Get latest code') {
      steps {
        echo "--- SECTION Get_code ---"
        // Clean workspace before doing anything
        cleanWs()
        checkout scm
        echo "--- END SECTION ---"
      }
    }

    stage ('Setup test environment') {
      steps {
        sh '''
          echo "--- SECTION Setup_env ---"
          yarn
          echo "--- END SECTION ---"
        '''
      }
    }

    stage ('Check versions') {
      steps {
        sh '''
          echo "--- SECTION Versions ---"
          google-chrome --version
          node --version
          npm --version
          yarn --version
          lscpu
          echo "--- END SECTION ---"
        '''
      }
    }
    stage('Testcafé Drive') {
      steps {
        sh '''
          echo "--- SECTION Test Drive ---"
          export INSTANCE_TESTCAFE="testdrive.cozy.rocks"
          export COZY_APP_SLUG='drive'
          yarn testcafe:$COZY_APP_SLUG
          echo "--- END SECTION ---"
        '''
      }
    }
    stage('Testcafé Photos') {
      steps {
        sh '''
          echo "--- SECTION Test Photos ---"
          export INSTANCE_TESTCAFE="testphotos.cozy.rocks"
          export COZY_APP_SLUG='photos'
          yarn testcafe:$COZY_APP_SLUG
          echo "--- END SECTION ---"
        '''
      }
    }






  }
}
