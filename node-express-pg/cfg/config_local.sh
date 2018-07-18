#!/bin/bash
# port to start node server on
PORT=3000
export PORT

# postgres db connection string
POSTGRES_URL="postgres://postgres:postgres@localhost:5432/node_test_db"

# maximum pool connections?
MAX_CON=5
export MAX_CON
