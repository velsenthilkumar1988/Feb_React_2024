import React from 'react'

export default function ApiFunctionCall() {

const post_list_container = document.querySelector('.post-list-container');
const heading_apival = document.querySelector('.heading_api');
const sub_heading_apival = document.querySelector('.sub_heading_api');

async function Method3()
{
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "GET",
        }
      );
      const result = await response.json();
      console.log(result);
      displayResponse(result);
}


function displayResponse(getValues){
  post_list_container.innerHTML = getValues.map((DataItems)=>
    `<div class="post-item">
      <h3>${DataItems.title}</h3>
      <p>${DataItems.body}</p>
    </div>`
  ).join(" ");
}
Method3();

  return (
    <div>
      <h1>API Call Function</h1>
      <div class="post-list-container">
      </div>
    </div>
  )
}
