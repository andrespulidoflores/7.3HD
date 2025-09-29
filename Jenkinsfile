pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies'
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Vite project'
                // Run Vite via Node directly to avoid npx/.bin issues
                bat 'node ./node_modules/vite/bin/vite.js build'
            }
        }

       stage('Test') {
            steps {
                echo 'Running automated tests'
                // Install Vitest locally if missing
                bat 'npm install --save-dev vitest'
                // Run tests
                bat 'npx vitest run'
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
                echo 'Skipping security checks for now'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Skipping deploy for now'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed'
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}


