<<<<<<< HEAD
import os
import requests

# Create folders
folders = ["assets/css", "assets/js", "assets/fonts"]
for folder in folders:
    os.makedirs(folder, exist_ok=True)

# File URLs
files = {
    "assets/css/bootstrap.min.css": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
    "assets/js/bootstrap.bundle.min.js": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
    "assets/css/font-awesome.min.css": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
    "assets/css/slick.css": "https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.css",
    "assets/css/slick-theme.css": "https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css",
    "assets/js/gsap.min.js": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js",
    "assets/js/scrolltrigger.min.js": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"
}

# Download and save files
for local_path, url in files.items():
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for failed requests
        with open(local_path, "wb") as file:
            file.write(response.content)
        print(f"✅ Saved: {local_path}")
    except requests.exceptions.RequestException as e:
        print(f"❌ Failed to download {url}: {e}")

print("\n🎉 All files saved! Update your index.html to use local paths.")
=======
import os
import requests

# Create folders
folders = ["assets/css", "assets/js", "assets/fonts"]
for folder in folders:
    os.makedirs(folder, exist_ok=True)

# File URLs
files = {
    "assets/css/bootstrap.min.css": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
    "assets/js/bootstrap.bundle.min.js": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
    "assets/css/font-awesome.min.css": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
    "assets/css/slick.css": "https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.css",
    "assets/css/slick-theme.css": "https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css",
    "assets/js/gsap.min.js": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js",
    "assets/js/scrolltrigger.min.js": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"
}

# Download and save files
for local_path, url in files.items():
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for failed requests
        with open(local_path, "wb") as file:
            file.write(response.content)
        print(f"✅ Saved: {local_path}")
    except requests.exceptions.RequestException as e:
        print(f"❌ Failed to download {url}: {e}")

print("\n🎉 All files saved! Update your index.html to use local paths.")
>>>>>>> a094891 (Initial commit - pushing entire folder)
