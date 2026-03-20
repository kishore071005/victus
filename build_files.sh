#!/bin/bash

echo "BUILD START"

python3 -m pip install --upgrade pip
python3 -m pip install -r backend/requirements.txt

cd frontend
npm install --no-package-lock --legacy-peer-deps
npm run build
cd ..

python3 backend/manage.py collectstatic --noinput --clear

echo "BUILD END"
