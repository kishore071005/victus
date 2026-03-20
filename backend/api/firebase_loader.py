import firebase_admin
from firebase_admin import credentials, auth

# Ensure we don't initialize multiple times during hot reloads
if not firebase_admin._apps:
    # Use default application credentials (or fetch env variables if deployed)
    # Note: When deploying or testing locally without GOOGLE_APPLICATION_CREDENTIALS,
    # we might need a service account. For this demo architecture, we'll initialize without
    # explicit creds so it picks up the local default GCP credentials if available,
    # or fails gracefully if not setup.
    default_app = firebase_admin.initialize_app()
