// link - https://jsonplaceholder.typicode.com/comments

class Post {
    constructor(postId, id, name, email, body) {
        this.postId = postId;
        this.id = id;
        this.name = name;
        this.email = email;
        this.body = body;
    }
}

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        if (!response.ok) {
            throw new Error("Netwrok Error. Response status: ", response.status);
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

function displayData(data) {
    const container = document.getElementById('table');
    container.innerHTML = '';

    data.forEach(item => {
        const div = document.createElement('div');
        div.className = "item";

        div.innerHTML = `
            <p>postId: ${item.postId}<p>
            <p>id: ${item.id}<p>
            <p>name: ${item.name}<p>
            <p>email: ${item.email}<p>
            <p>body: ${item.body}<p>
        `;

        container.appendChild(div);
    });
}

window.onload = fetchData;