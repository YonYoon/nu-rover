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
    const container = document.getElementById('data');
    container.innerHTML = '';

    const table = document.createElement('table');
    container.appendChild(table);

    data.forEach(item => {
        for (const key in item) {
            if (key === "postId") {
                continue;
            }
            
            const row = document.createElement("tr");

            const th = document.createElement("th");
            th.textContent = key;
            row.appendChild(th);

            const td = document.createElement("td");
            if (key === "id") {
                th.classList.add('id-row');
                td.classList.add('id-row');
                td.textContent = `${item["postId"]}.${item[key]}`
            } else {
                td.textContent = item[key];
            }
            row.appendChild(td);

            table.appendChild(row);
        }
    })

    showSecret();
}

function showSecret() {
    const secret = document.getElementById("secret");

    const question = document.createElement("h1");
    question.innerText = "Want to support your mission?"
    secret.appendChild(question);

    const span = document.createElement("span");
    span.innerText = "By inviting me to your project,";
    span.classList.add("highlight");

    const text = document.createElement("h2");
    text.appendChild(span);
    text.append(" you can directly contribute to the progress and success of this groundbreaking mission. Your kindness will let me to help you to: develop software, have fun, and win competitions");
    secret.appendChild(text);

    const button = document.createElement("button");
    button.textContent = "Support now";
    button.addEventListener("click", function () {
        window.location.href = "https://t.me/yonyoon";
    });
    button.classList.add("support-button");

    secret.classList.add("center-div");
    secret.appendChild(button);
}

window.onload = fetchData;