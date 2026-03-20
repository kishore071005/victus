#!/bin/bash

echo "BUILD START"

# Install python dependencies using the available pip
python3 -m pip install -r backend/requirements.txt

# Build frontend
cd frontend
npm install
npm run build
cd ..

# Collect static files
python3.9 backend/manage.py collectstatic --noinput

echo "BUILD END"
