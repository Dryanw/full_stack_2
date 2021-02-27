var html_body = document.querySelector('body')

fetch('https://api.github.com/emojis')
    .then(result => result.json())
    .then(json_data => {
        for (let k in json_data){
            let new_child = document.createElement('img');
            new_child.src = json_data[k];
            html_body.appendChild(new_child);
        };
    })

