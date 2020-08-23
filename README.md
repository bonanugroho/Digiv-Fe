# Digiv.FE
  Front end for Virtual expo
  

### Steps to contribute
- fork this repo to your github account
- clone from your github account
  make sure when you execute command 'git remote -v' output :
  ```
    origin	https://github.com/[yourgithub]/Digiv-Fe.git (fetch)
    origin	https://github.com/[yourgithub]/Digiv-Fe.git (push)
    upstream	https://github.com/digiv-co-id/Digiv-Fe.git (fetch)
    upstream	https://github.com/digiv-co-id/Digiv-Fe.git (push)
  ```
- create new branch 
  1. make sure from on the master branch and latest master branch, execute
      ```
      git fetch upstream
      git pull upstream master
      ```
  2. create new branch from master
      ```
      git checkout -b [new_branch]
      ```
- create pull request
  1. commit changes
  2. push change to remote origin (do not push to upstream)
      ```
      git push origin [new_branch]
      ```
  3. Create & Submit Pull Request from the given link after push origin
      ```
      git push origin readme/update-readme 
      Username for 'https://github.com': ****
      Password for 'https://[yourgithub]@github.com': 
      Counting objects: 3, done.
      Writing objects: 100% (3/3), 270 bytes | 270.00 KiB/s, done.
      Total 3 (delta 0), reused 0 (delta 0)
      remote: 
      remote: Create a pull request for 'readme/update-readme' on GitHub by visiting:
      remote:      https://github.com/[yourgithub]/kids-expo/pull/new/readme/update-readme
      remote: 
      To https://github.com/[yourgithub]/kids-expo.git
       * [new branch]      readme/update-readme -> readme/update-readme
      ```
   4. Ask for code review, and merge change.
  
## How to build & push the docker image
- Make sure you already have the gcloud sdk, have permission to pull/push docker image.
  follow this instuction: https://cloud.google.com/container-registry/docs/pushing-and-pulling
- Open your terminal, and go to this project directory
- Build the docker image
    ```
    docker build --tag="digivapp.fe:<version>" .
    ```
- Tag the image to match the google container registry repository
    ```
    docker tag digivapp.fe:<version> asia.gcr.io/adiravirtualexpo/digivapp.fe:<version>
    ```
- Push the docker image
    ```
    docker push asia.gcr.io/adiravirtualexpo/digivapp.fe:<version>
    ```

## How to deploy
- Make sure you already have the gcloud sdk and kubectl and setting up the cluster credentials for kubectl.
  follow this instruction: https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl
- Go to the Deployment directory, then fill all the configuration show below

    | Configuration | Example Value | Description |
    | ------------- | ------------- | ----------- |
    | <K8S_NS>      | dev         | kubernetes namespace where service deployed |
    | <DIGIV_FE_IMAGE>   | asia.gcr.io/adiravirtualexpo/digivapp.fe:0.0.1 | docker image service url |

- Then run
    ```
    kubectl apply -f Deployments
    ```