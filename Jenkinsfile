pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build done successfull'
            }
        }
        stage('Test'){
            steps{
                npm calculator
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
