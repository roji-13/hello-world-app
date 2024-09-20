pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'npx mocha'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to the test environment...'
                // Add deployment commands here
            }
        }
        stage('Release') {
            steps {
                echo 'Releasing to production...'
                // Add release commands here
            }
        }
    }
}
