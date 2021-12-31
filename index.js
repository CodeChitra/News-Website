// API Key ---> b3da6e06b62a4a9f956e3854b798ea51
console.log("Hello World");


//Initialize The xhr Object
const xhr = new XMLHttpRequest();

// Open The Object
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=b3da6e06b62a4a9f956e3854b798ea51', true);

xhr.onload = function () {
    let html = "";
    if (this.status == 200) {
        // newsObj is an object
        let newsObj = JSON.parse(this.responseText);
        console.log(newsObj);

        let articles = newsObj['articles'];
        console.log(articles);

        articles.forEach((element, index) => {
            let container = document.getElementById('container');
            let title = element.title;
            let content = element.content;
            let url = element.url;
            // console.log(element);
            html += `<div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="heading${index + 1}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                            data-target="#collapse${index + 1}" aria-expanded="true" aria-controls="collapse${index + 1}">
                            ${title};
                        </button>
                    </h2>
                </div>

                <div id="collapse${index + 1}" class="collapse show" aria-labelledby="heading${index + 1}"
                    data-parent="#accordionExample">
                    <div class="card-body" id="content">
                        ${content}<a href="${url}" target="_blank">Read More Here</a>;
                    </div>
                </div>
            </div>`
            container.innerHTML = html;

        });
    }
    else {
        console.log("Some Error Occured");
    }
}
xhr.send();
console.log("We Are Done");

