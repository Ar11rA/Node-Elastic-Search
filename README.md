# Node With Elastic Search

## Setup for Elastic Search

```docker
docker pull docker.elastic.co/elasticsearch/elasticsearch:6.3.1

docker pull docker.elastic.co/elasticsearch/elasticsearch:6.3.1

docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:6.3.1
```

To verify if the above worked, go to `http://localhost:9200/` on your browser or curl from your terminal. You should see something like 

```json
{
"name": "bGJfKYK",
"cluster_name": "docker-cluster",
"cluster_uuid": "ANpm1m54RPKF6SIHhLcoOA",
"version": {
"number": "6.3.1",
"build_flavor": "default",
"build_type": "tar",
"build_hash": "eb782d0",
"build_date": "2018-06-29T21:59:26.107521Z",
"build_snapshot": false,
"lucene_version": "7.3.1",
"minimum_wire_compatibility_version": "5.6.0",
"minimum_index_compatibility_version": "5.0.0"
},
"tagline": "You Know, for Search"
}
```

## Usage with node

Note that this can be done in any language as there are libraries which support elastic search almost everywhere. But this is a small example without using any elastic search library. Instead, I'm going to make http calls to the elastic search server.

For any help regarding the calls,
https://www.elastic.co/guide/en/elasticsearch/reference/current/docs.html

## Development

- Config - Contains the elastic search server host and port
- API - Custom interface to connect to elastic search server
