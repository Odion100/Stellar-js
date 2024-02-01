# Stellar-js

## Server setup

1. Install Ollama using the following command

```shell
curl https://ollama.ai/install.sh | sh
```

2. configure `OLLAMA_HOST` env variable to accept request from anywhere for now

```shell
OLLAMA_HOST=0.0.0.0:11434
```

3. Pull in the mistral model

```shell
ollama pull mistral
```

4. For some reason when switching the `OLLAMA_HOST` the mistral model disappears so open another terminal and run `ollama pull mistral`

5. Go to the fire wall settings and add an inbound rule to allow TCP connections on the ollama port. [Lambda Labs Firewall settings](https://cloud.lambdalabs.com/firewall)
