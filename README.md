# dirty-hasher
A simple web page that can be used to hash strings or text through multiple algorithms

# Disclaimer
DO NOT! I repeat NOT run this publicly. It is meant as a quick and dirty tool
for local use.

# Usage
### Prerequisites
- Docker

### Running
1) Clone the repo `git clone https://github.com/SHolzhauer/dirty-hasher.git`
2) enter the directory. `cd dirty-hasher`
3) Build a docker image `sudo docker build -t dirtyhasher .`
4) Run the container `sudo docker run -d --rm --name dirty-hasher -p 3082:80 dirtyhasher`
5) Browse to [http://localhost:3082](http://localhost:3082)
