pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {

        stage('Build') {
    steps {
        echo 'Building the application'
        bat 'npm ci'
        bat 'npx run build'
    }
}


        stage('Test') {
            steps {
                echo 'Running automated tests'
                bat 'npm install --save-dev vitest'
                bat 'npx vitex run'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running SonarQube analysis'
                withSonarQubeEnv('MySonarQube') {
                    bat """
                    npx sonar-scanner ^
                        -Dsonar.projectKey=my-vite-project ^
                        -Dsonar.projectName="My Vite Project" ^
                        -Dsonar.sources=src ^
                        -Dsonar.host.url=%SONAR_HOST_URL% ^
                        -Dsonar.login=%SONAR_AUTH_TOKEN%
                    """
                }
            }
        }

        stage('Security') {
            steps {
                echo 'Running security analysis'
                bat 'npm install'
                bat 'npm audit --audit-level=moderate'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application to test environment'
                bat 'docker build -t my-vite-project:latest .'
                bat 'docker rm -f vite-test || exit 0'
                bat 'docker run -d -p 8080:80 --name vite-test my-vite-project:latest'
            }
        }

        stage('Release') {
            steps {
                echo 'Promoting application to production'
                bat 'docker rm -f vite-prod || exit 0'
                bat 'docker run -d -p 80:80 --name vite-prod my-vite-project:latest'
            }
        }

        stage('Monitoring & Alerting') {
            steps {
                echo 'Monitoring application health'
                script {
                    def response = bat(script: 'curl -s -o NUL -w "%{http_code}" http://localhost', returnStdout: true).trim()
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
