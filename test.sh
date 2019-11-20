if [$(docker container ls -q --filter name='ngapp-c')!=''];
then
docker container stop ngapp-c
docker container rm ngapp-c
fi;

if [$(docker image ls -q --filter reference='ngapp')!=''];
then 
docker image rm ngapp
fi;

docker image build -t ngapp .

docker container run -d -p 8088:80 --name ngapp-c ngapp
