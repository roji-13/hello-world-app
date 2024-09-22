pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout([$class: 'GitSCM', 
                              branches: [[name: '*/master']], 
                              userRemoteConfigs: [[url: 'https://github.com/roji-13/hello-world-app.git', credentialsId: 'roji-13']]])
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    bat 'docker build -t hello-world-app .'
                }
            }
        }

        stage('Run Tests') {
            steps {
                bat 'docker run hello-world-app npm test'
            }
        }

       stage('Deploy') {
    steps {
        script {
            // Stop and remove the existing container if it exists
            bat '''
                docker stop hello-world-app-container || true
                docker rm hello-world-app-container || true
            '''
            // Now run the new container
            bat 'docker run -d -p 80:80 --name hello-world-app-container hello-world-app'
            echo 'Application successfully deployed to Docker container!'
        }
    }
}

    }

    post {
        always {
            echo 'Cleaning up...'
            // Add cleanup commands here if needed
        }
    }
}
