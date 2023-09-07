pipeline{
    agent any

    parameters{
        string (name:"SPEC", defaulValue: "cypress/e2e/Practicas/**", description:"Ej:D:/EvidenciasPracticaSIIAN/AppsTests/Cypress-Jenkins-Worlkspace/cypress/e2e/Practicas/*.spec.js")
        choice (name:"BROWSER", choices:['chrome','edge','firefox'], description:"Seleccione un browser en donde ejecutar sus scripts.")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Build'){
            steps{
                echo"Building application"
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy'){
            steps{
            echo "Deploying the application"
            }
        }
    }
}


post{
    always{
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    }
}