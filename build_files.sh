#!/bin/bash

echo "BUILD START"

python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r backend/requirements.txt

cd frontend
npm install --no-package-lock --legacy-peer-deps
npm run build
cd ..

python3 backend/manage.py collectstatic --noinput --clear

echo "BUILD END"
