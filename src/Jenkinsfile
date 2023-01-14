pipeline {
    agent any
    //tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                echo 'Build done successfull'
            }
        }
        stage('Test'){
            steps{
                sh 'npm run calculator'
                echo 'Test done successfully'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploy done successfully'
            }
        }
    }
}
