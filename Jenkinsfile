pipeline {
    agent any

    tools {
        nodejs 'Node13'
    }

    stages {
        stage('Build') {
    steps {
        echo 'Installing dependencies and building project'
        sh 'npm install'
        sh 'npm run build'

        // Optional: archive build artefact
        archiveArtifacts artifacts: 'dist/**', fingerprint: true

        // Optional: build Docker image
        sh 'docker build -t my-vue-app:latest .'
    }
}

        stage('Test') {
    steps {
        echo 'Running unit tests'
        
        // Ensure dependencies are installed
        sh 'npm install'
        
        // Run unit tests
        sh 'npm run test'  // assumes test script is configured in package.json

        // Optional: run e2e tests with Cypress
        // sh 'npx cypress run'
    }
    
    post {
        always {
            // Archive test results for Jenkins reports
            junit 'tests/results/**/*.xml'  // if Jest/Cypress outputs JUnit XML
        }
    }
}

       stage('Code Quality') {
    steps {
        echo 'Running SonarQube analysis'

        // Use the Jenkins SonarQube plugin to scan
        withSonarQubeEnv('MySonarQube') {
            // If using npm sonar-scanner package
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

        // Install dependencies (if not already)
        sh 'npm install'

        // Run npm audit
        sh 'npm audit --audit-level=moderate'
    }
}

        stage('Deploy') {
    steps {
        echo 'Deploying application to test environment'

        // Build Docker image
        sh 'docker build -t my-vite-project:latest .'

        // Optionally stop/remove existing container
        sh 'docker rm -f vite-test || true'

        // Run container
        sh 'docker run -d -p 8080:80 --name vite-test my-vite-project:latest'
    }
}

        stage('Release') {
            steps {
                echo 'Release placeholder'
            }
        }
        stage('Monitoring') {
            steps {
                echo 'Monitoring placeholder'
            }
        }
    }
}
