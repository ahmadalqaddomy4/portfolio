import os
from flask import Flask, send_file, send_from_directory

# Get the directory where this script resides
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

# Create Flask app with static folder set to ROOT_DIR
app = Flask(__name__, static_folder=ROOT_DIR, static_url_path='')

@app.route('/')
def home():
    return send_file(os.path.join(ROOT_DIR, 'index.html'))

@app.route('/<path:path>')
def serve_static(path):
    """Serve static files (CSS, JS, images, etc.)"""
    return send_from_directory(ROOT_DIR, path)

if __name__ == '__main__':
    # For local development
    port = int(os.environ.get('PORT', 5000))
    print(f"Serving files from: {ROOT_DIR}")
    print(f"Open your browser and go to: http://127.0.0.1:{port}")
    print("\nPress CTRL+C to stop the server")
    app.run(debug=True, port=port, host='0.0.0.0')
