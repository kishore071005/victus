#!/bin/bash

echo "BUILD START"

# Install python dependencies using the available pip
python3 -m pip install --upgrade pip
python3 -m pip install -r backend/requirements.txt

# Build frontend
cd frontend
npm install --no-package-lock
npm run build
cd ..

# Collect static files
python3 backend/manage.py collectstatic --noinput --clear

echo "BUILD END"
