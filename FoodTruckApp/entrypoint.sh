#!/bin/bash
set -e

echo "Removing any existing server PID file..."
rm -f /myapp/tmp/pids/server.pid

echo "Checking database connection..."
until psql -h db -U postgres -d myapp_development -c '\l'; do
  echo "Postgres is unavailable - sleeping"
  sleep 1
done
echo "Postgres is up - executing command"

echo "Setting up the database..."
rails db:create
rails db:migrate
rails db:seed

echo "Starting Rails server..."
exec "$@"
