pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning the repository...'
                git url: 'https://github.com/roji-13/hello-world-app.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'mvn clean package'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'mvn test'
            }
        }

        stage('Deploy to Test') {
            steps {
                echo 'Deploying to test environment...'
                sh 'docker-compose up -d'
            }
        }

        stage('Release to Production') {
            steps {
                echo 'Releasing to production...'
                sh 'eb deploy production'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Starting monitoring and alerting...'
                sh 'datadog-agent start'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            cleanWs()
        }

        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
