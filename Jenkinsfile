pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {

        stage('Build') {
            steps {
                echo 'Building the application'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests'
                sh 'npm install -D vitest'
                sh 'npx vitest run'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running SonarQube analysis'
                withSonarQubeEnv('MySonarQube') {
                    sh 'npx sonar-scanner \
                        -Dsonar.projectKey=my-vite-project \
                        -Dsonar.projectName="My Vite Project" \
                        -Dsonar.sources=src \
                        -Dsonar.host.url=$SONAR_HOST_URL \
                        -Dsonar.login=$SONAR_AUTH_TOKEN'
                }
            }
        }

        stage('Security') {
            steps {
                echo 'Running security analysis'
                sh 'npm install'
                sh 'npm audit --audit-level=moderate'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application to test environment'
                sh 'docker build -t my-vite-project:latest .'
                sh 'docker rm -f vite-test || true'
                sh 'docker run -d -p 8080:80 --name vite-test my-vite-project:latest'
            }
        }

        stage('Release') {
            steps {
                echo 'Promoting application to production'
                sh 'docker rm -f vite-prod || true'
                sh 'docker run -d -p 80:80 --name vite-prod my-vite-project:latest'
            }
        }

        stage('Monitoring & Alerting') {
            steps {
                echo 'Monitoring application health'
                script {
                    def response = sh(script: 'curl -s -o /dev/null -w "%{http_code}" http://localhost', returnStdout: true).trim()
                    if (response != '200') {
                        error "Application is down! HTTP response: ${response}"
                    }
                }
            }
            post {
                failure {
                    echo 'Sending alert email to Andres'
                    mail to: 'andrespulido019@gmail.com',
                         subject: "Production Alert: Vite App is Down",
                         body: "The production application failed the health check. Please investigate immediately."
                }
            }
        }

    }

    post {
        always {
            echo 'Pipeline completed'
        }
    }
}
