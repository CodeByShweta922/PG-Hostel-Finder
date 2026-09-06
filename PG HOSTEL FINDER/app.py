from flask import Flask, render_template

app = Flask(__name__)

pgs = [
    {
        "name": "Shimla Hills",
        "location": "Shimla",
        "rent": 8000
    },
    {
        "name": "Mountain View PG",
        "location": "Manali",
        "rent": 7000
    },
    {
        "name": "Green Valley Hostel",
        "location": "Dharmshala",
        "rent": 5500
    },
    {
        "name": "Chandigarh Green",
        "location": "Chandigarh",
        "rent": 8000
    },
    {
        "name": "Delhi Ville",
        "location": "Delhi",
        "rent": 8000
    }
]


@app.route('/')
def home():
    return render_template('index.html', pgs=pgs)


if __name__ == '__main__':
    app.run(debug=True)